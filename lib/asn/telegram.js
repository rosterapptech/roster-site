/**
 * Minimaler Telegram-Wrapper.
 *
 * Keine Retries: Der Aufrufer hat Apple laengst mit 200 quittiert, es gibt also
 * niemanden mehr, der auf uns wartet. Ein verlorener Hinweis ist billiger als eine
 * Function, die 30 Sekunden an einem haengenden Socket klebt.
 */

const TELEGRAM_TIMEOUT_MS = 5000;

/**
 * Escaped die drei Zeichen, die Telegrams HTML-Parser kennt.
 * Auf jeden dynamischen Wert anwenden - Produktnamen, Storefronts und vor allem
 * Offer-Identifier kommen aus Apple bzw. aus App Store Connect.
 *
 * @param {unknown} value
 * @returns {string}
 */
export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Schickt eine Nachricht an den konfigurierten Chat.
 *
 * @param {string} text  HTML-formatierter Text (Werte muessen bereits escaped sein)
 * @returns {Promise<void>}
 * @throws bei fehlender Konfiguration, Timeout oder HTTP-Fehler
 */
export async function sendMessage(text) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error("TELEGRAM_BOT_TOKEN oder TELEGRAM_CHAT_ID fehlt");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TELEGRAM_TIMEOUT_MS);

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      // Body mitnehmen: Telegram erklaert in `description`, was es nicht mochte
      // (kaputtes HTML, falsche chat_id, Bot blockiert).
      const detail = await response.text().catch(() => "");
      throw new Error(`Telegram HTTP ${response.status}: ${detail.slice(0, 300)}`);
    }
  } finally {
    clearTimeout(timeout);
  }
}
