/**
 * Transform admonitions in HTML output
 * Converts :::type content ::: blocks into styled divs
 */

export function transformAdmonitions(html: string): string {
  // Pattern to match admonitions
  const admonitionPattern = /:::(\w+)(?:\[(.*?)\])?\s*\n([\s\S]*?)\n:::/g;

  return html.replace(admonitionPattern, (match, type, customTitle, content) => {
    type = type.toLowerCase();
    const validTypes = ['tip', 'warning', 'danger', 'info', 'note', 'collapse', 'success', 'caution'];

    if (!validTypes.includes(type)) {
      return match; // Return original if type is invalid
    }

    const defaultTitles: Record<string, string> = {
      tip: '💡 Tip',
      warning: '⚠️ Warning',
      danger: '🚨 Danger',
      info: 'ℹ️ Info',
      note: '📝 Note',
      success: '✅ Success',
      caution: '⚠️ Caution',
      collapse: '▼ Details',
    };

    const title = customTitle || defaultTitles[type];
    const isCollapsible = type === 'collapse';
    const contentTrimmed = content.trim();

    if (isCollapsible) {
      return `<details class="admonition admonition--collapse">
        <summary class="admonition__title">${title}</summary>
        <div class="admonition__content">
          ${contentTrimmed}
        </div>
      </details>`;
    }

    return `<div class="admonition admonition--${type}">
      <div class="admonition__title">${title}</div>
      <div class="admonition__content">
        ${contentTrimmed}
      </div>
    </div>`;
  });
}

