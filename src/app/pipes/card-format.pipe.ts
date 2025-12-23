import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to transform custom card formatting syntax into styled HTML cards
 * 
 * Supported formats:
 * ::quote{text}                    - Simple quote card
 * ::quote[author]{text}            - Quote with author attribution
 * ::verse{text}                    - Epic verse card
 * ::verse[source]{text}            - Verse with source attribution
 * ::highlight[color]{text}         - Highlighted paragraph card
 * ::epic{text}                     - Epic line card (special styling)
 * ::epic[title]{text}              - Epic with title
 * ::card[type]{text}               - Generic card format
 * ::card[type|color]{text}         - Card with custom color
 */
@Pipe({
  name: 'cardFormat',
  standalone: true
})
export class CardFormatPipe implements PipeTransform {
  transform(content: string): string {
    if (!content) return '';

    let processed = content;

    // Process specific card types in order
    processed = this.processQuoteCards(processed);
    processed = this.processVerseCards(processed);
    processed = this.processEpicCards(processed);
    processed = this.processHighlightCards(processed);
    processed = this.processGenericCards(processed);

    return processed;
  }

  /**
   * Process quote cards: ::quote[author]{text}
   */
  private processQuoteCards(content: string): string {
    // With author: ::quote[author name]{quote text}
    const withAuthorRegex = /::quote\[([^\]]+)\]\{([^}]+)\}/g;
    let processed = content.replace(withAuthorRegex, (match, author, text) => {
      const authorName = author.trim();
      return `<div class="card card--quote">
  <div class="card__content">
    <p class="card__quote-text">${text}</p>
    <p class="card__quote-author">— ${authorName}</p>
  </div>
</div>`;
    });

    // Without author: ::quote{text}
    const noAuthorRegex = /::quote\{([^}]+)\}/g;
    processed = processed.replace(noAuthorRegex, (match, text) => {
      return `<div class="card card--quote">
  <div class="card__content">
    <p class="card__quote-text">${text}</p>
  </div>
</div>`;
    });

    return processed;
  }

  /**
   * Process verse cards: ::verse[source]{text}
   */
  private processVerseCards(content: string): string {
    // With source: ::verse[source/reference]{verse text}
    const withSourceRegex = /::verse\[([^\]]+)\]\{([^}]+)\}/g;
    let processed = content.replace(withSourceRegex, (match, source, text) => {
      const sourceText = source.trim();
      return `<div class="card card--verse">
  <div class="card__header">
    <span class="card__icon">📖</span>
    <span class="card__source">${sourceText}</span>
  </div>
  <div class="card__content">
    <p class="card__verse-text">${text}</p>
  </div>
</div>`;
    });

    // Without source: ::verse{text}
    const noSourceRegex = /::verse\{([^}]+)\}/g;
    processed = processed.replace(noSourceRegex, (match, text) => {
      return `<div class="card card--verse">
  <div class="card__header">
    <span class="card__icon">📖</span>
  </div>
  <div class="card__content">
    <p class="card__verse-text">${text}</p>
  </div>
</div>`;
    });

    return processed;
  }

  /**
   * Process epic cards: ::epic[title]{text}
   */
  private processEpicCards(content: string): string {
    // With title: ::epic[epic name/title]{verse}
    const withTitleRegex = /::epic\[([^\]]+)\]\{([^}]+)\}/g;
    let processed = content.replace(withTitleRegex, (match, title, text) => {
      const epicTitle = title.trim();
      return `<div class="card card--epic">
  <div class="card__header">
    <span class="card__icon">⚔️</span>
    <span class="card__title">${epicTitle}</span>
  </div>
  <div class="card__content">
    <p class="card__epic-text">${text}</p>
  </div>
  <div class="card__footer">
    <span class="card__marker">✦</span>
  </div>
</div>`;
    });

    // Without title: ::epic{text}
    const noTitleRegex = /::epic\{([^}]+)\}/g;
    processed = processed.replace(noTitleRegex, (match, text) => {
      return `<div class="card card--epic">
  <div class="card__header">
    <span class="card__icon">⚔️</span>
  </div>
  <div class="card__content">
    <p class="card__epic-text">${text}</p>
  </div>
  <div class="card__footer">
    <span class="card__marker">✦</span>
  </div>
</div>`;
    });

    return processed;
  }

  /**
   * Process highlight cards: ::highlight[color]{text}
   */
  private processHighlightCards(content: string): string {
    const regex = /::highlight\[([^\]]+)\]\{([^}]+)\}/g;
    return content.replace(regex, (match, color, text) => {
      const sanitizedColor = this.sanitizeColor(color);
      const colorClass = this.getColorClass(color.toLowerCase());
      
      return `<div class="card card--highlight ${colorClass}" style="border-left-color: ${sanitizedColor}">
  <div class="card__content">
    <p class="card__highlight-text">${text}</p>
  </div>
</div>`;
    });
  }

  /**
   * Process generic cards: ::card[type|color]{text}
   */
  private processGenericCards(content: string): string {
    const regex = /::card\[([^\]]+)\]\{([^}]+)\}/g;
    return content.replace(regex, (match, params, text) => {
      const parts = params.split('|').map((s: string) => s.trim());
      const type = parts[0];
      const colorParam = parts[1];
      const sanitizedType = this.sanitizeType(type);
      const sanitizedColor = colorParam ? this.sanitizeColor(colorParam) : '#0066cc';
      const colorClass = colorParam ? this.getColorClass(colorParam.toLowerCase()) : 'default';

      // Build specific card based on type
      switch (sanitizedType) {
        case 'info':
          return `<div class="card card--info ${colorClass}">
  <div class="card__header">
    <span class="card__icon">ℹ️</span>
    <span class="card__type">Information</span>
  </div>
  <div class="card__content">
    <p>${text}</p>
  </div>
</div>`;

        case 'warning':
          return `<div class="card card--warning ${colorClass}">
  <div class="card__header">
    <span class="card__icon">⚠️</span>
    <span class="card__type">Warning</span>
  </div>
  <div class="card__content">
    <p>${text}</p>
  </div>
</div>`;

        case 'success':
          return `<div class="card card--success ${colorClass}">
  <div class="card__header">
    <span class="card__icon">✓</span>
    <span class="card__type">Success</span>
  </div>
  <div class="card__content">
    <p>${text}</p>
  </div>
</div>`;

        case 'error':
          return `<div class="card card--error ${colorClass}">
  <div class="card__header">
    <span class="card__icon">✕</span>
    <span class="card__type">Error</span>
  </div>
  <div class="card__content">
    <p>${text}</p>
  </div>
</div>`;

        case 'note':
          return `<div class="card card--note ${colorClass}">
  <div class="card__header">
    <span class="card__icon">📝</span>
    <span class="card__type">Note</span>
  </div>
  <div class="card__content">
    <p>${text}</p>
  </div>
</div>`;

        case 'tip':
          return `<div class="card card--tip ${colorClass}">
  <div class="card__header">
    <span class="card__icon">💡</span>
    <span class="card__type">Tip</span>
  </div>
  <div class="card__content">
    <p>${text}</p>
  </div>
</div>`;

        default:
          return `<div class="card card--generic ${colorClass}" style="border-top-color: ${sanitizedColor}">
  <div class="card__content">
    <p>${text}</p>
  </div>
</div>`;
      }
    });
  }

  /**
   * Sanitize color input
   */
  private sanitizeColor(color: string): string {
    const trimmed = color.trim().toLowerCase();
    
    const namedColors = [
      'black', 'white', 'red', 'green', 'blue', 'yellow', 'orange', 'purple',
      'pink', 'brown', 'gray', 'grey', 'cyan', 'magenta', 'lime', 'navy',
      'teal', 'olive', 'maroon', 'aqua', 'fuchsia', 'silver', 'darkred',
      'darkgreen', 'darkblue', 'lightgray', 'lightblue', 'lightgreen',
      'lightyellow', 'transparent'
    ];
    
    if (namedColors.includes(trimmed)) {
      return trimmed;
    }
    
    if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(trimmed)) {
      return trimmed;
    }
    
    if (/^rgba?\([^)]+\)$/i.test(trimmed)) {
      return trimmed;
    }
    
    return '#0066cc';
  }

  /**
   * Get CSS color class from color name
   */
  private getColorClass(color: string): string {
    const colorMap: Record<string, string> = {
      'red': 'card--red',
      'green': 'card--green',
      'blue': 'card--blue',
      'yellow': 'card--yellow',
      'orange': 'card--orange',
      'purple': 'card--purple',
      'pink': 'card--pink',
      'cyan': 'card--cyan',
      'teal': 'card--teal',
      'gray': 'card--gray',
      'grey': 'card--gray',
    };

    return colorMap[color] || 'card--default';
  }

  /**
   * Sanitize card type
   */
  private sanitizeType(type: string): string {
    const validTypes = ['info', 'warning', 'success', 'error', 'note', 'tip', 'default'];
    const sanitized = type.toLowerCase().trim();
    
    if (validTypes.includes(sanitized)) {
      return sanitized;
    }
    
    return 'default';
  }
}
