/**
 * Marked plugin for footnotes
 * Converts [^1] references to superscript links and collects definitions
 * 
 * Usage in markdown:
 * This is text with a footnote[^1].
 * [^1]: This is the footnote text
 */

export interface FootnoteToken {
  type: 'footnote_ref' | 'footnote_def';
  raw: string;
  text?: string;
  id?: string;
  content?: string;
}

const footnoteDefRegex = /^\[\^([^\]]+)\]:\s*(.+)$/gm;
const footnoteRefRegex = /\[\^([^\]]+)\]/g;

export interface FootnoteMap {
  [key: string]: string;
}

/**
 * Extract footnote definitions from markdown
 */
export function extractFootnotes(text: string): { text: string; footnotes: FootnoteMap } {
  const footnotes: FootnoteMap = {};
  
  // Find and store all footnote definitions
  let match;
  const regex = new RegExp(footnoteDefRegex);
  
  while ((match = regex.exec(text)) !== null) {
    const id = match[1];
    const content = match[2];
    footnotes[id] = content;
  }
  
  // Remove footnote definitions from text
  const cleanText = text.replace(/^\[\^[^\]]+\]:.+?$/gm, '').trim();
  
  return { text: cleanText, footnotes };
}

/**
 * Create marked extension for footnotes
 */
export function createFootnotesExtension() {
  let footnoteStore: FootnoteMap = {};
  
  return {
    useNewAst: true,
    extensions: [
      {
        name: 'footnote',
        level: 'block' as const,
        start(src: string) {
          const match = src.match(/^\[\^([^\]]+)\]:/m);
          return match ? match.index : -1;
        },
        tokenizer(src: string) {
          const rule = /^(\[\^([^\]]+)\]:\s*(.+))$/m;
          const match = rule.exec(src);
          if (match) {
            return {
              type: 'footnote_def',
              raw: match[0],
              id: match[2],
              content: match[3],
              tokens: [],
            };
          }
          return false;
        },
        renderer(token: any) {
          // Store the footnote but don't render it inline
          if (token.id && token.content) {
            footnoteStore[token.id] = token.content;
          }
          return '';
        },
      },
      {
        name: 'footnote_ref',
        level: 'inline' as const,
        start(src: string) {
          const match = src.match(/\[\^([^\]]+)\]/);
          return match ? match.index : -1;
        },
        tokenizer(src: string) {
          const rule = /^\[\^([^\]]+)\]/;
          const match = rule.exec(src);
          if (match) {
            return {
              type: 'footnote_ref',
              raw: match[0],
              id: match[1],
              tokens: [],
            };
          }
          return false;
        },
        renderer(token: any) {
          const id = token.id;
          return `<sup><a href="#fn-${id}" id="fnref-${id}" class="footnote-ref">[${id}]</a></sup>`;
        },
      },
    ],
    renderer: {
      image: (href: string, title: string, text: string) => {
        return `<img src="${href}" alt="${text}" title="${title}" />`;
      },
    },
    walkTokens(token: any) {
      if (token.type === 'footnote_def') {
        footnoteStore[token.id] = token.content;
      }
    },
    getFootnotes() {
      return footnoteStore;
    },
  };
}

/**
 * Helper to render footnotes section HTML
 */
export function renderFootnotesSection(footnotes: FootnoteMap): string {
  if (Object.keys(footnotes).length === 0) {
    return '';
  }
  
  let html = '\n<section class="footnotes"><ol>\n';
  
  Object.entries(footnotes).forEach(([id, content]) => {
    html += `<li id="fn-${id}"><p>${content} <a href="#fnref-${id}" class="footnote-backref" title="Back to reference">↩</a></p></li>\n`;
  });
  
  html += '</ol></section>\n';
  
  return html;
}
