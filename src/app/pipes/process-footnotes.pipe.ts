import { Pipe, PipeTransform } from '@angular/core';

type FootnoteMap = Map<string, string>;

@Pipe({
  name: 'processFootnotes',
  standalone: true,
})
export class ProcessFootnotesPipe implements PipeTransform {
  transform(content: string): string {
    if (!content) return '';

    const defs: FootnoteMap = new Map();
    let processed = content;

    // 1) Look for explicit footnote section: :::footnotes ... :::
    const footnoteBlockRegex = /:::footnotes\s*\n([\s\S]*?)\n:::/g;
    const footnoteBlockMatch = footnoteBlockRegex.exec(content);
    
    if (footnoteBlockMatch) {
      // Extract definitions from the block
      const footnoteBlock = footnoteBlockMatch[1];
      const defLine = /^\[\^([^\]]+)\]:\s*(.+)$/gm;
      let m: RegExpExecArray | null;
      
      while ((m = defLine.exec(footnoteBlock)) !== null) {
        const id = m[1].trim();
        const def = m[2].trim();
        if (id) defs.set(id, def);
      }
      
      // Remove the entire footnote block from content
      processed = content.replace(footnoteBlockRegex, '').trim();
    } else {
      // Fallback: look for standalone definitions at document end
      // Definitions must be grouped together, separated by blank line from content
      const endSectionRegex = /\n\n(\[\^[^\]]+\]:.+\n?)+$/;
      const endMatch = endSectionRegex.exec(content);
      
      if (endMatch) {
        const defSection = endMatch[0];
        const defLine = /^\[\^([^\]]+)\]:\s*(.+)$/gm;
        let m: RegExpExecArray | null;
        
        while ((m = defLine.exec(defSection)) !== null) {
          const id = m[1].trim();
          const def = m[2].trim();
          if (id) defs.set(id, def);
        }
        
        // Remove the definitions section
        processed = content.substring(0, content.length - defSection.length).trim();
      }
    }

    // 2) Map first-seen references to ascending numbers
    const idToNum = new Map<string, number>();
    const numToId = new Map<number, string>();
    let counter = 0;
    const refRegex = /\[\^([^\]]+)\]/g;
    
    processed.replace(refRegex, (_match, idRaw: string) => {
      const id = String(idRaw).trim();
      if (!idToNum.has(id)) {
        counter += 1;
        idToNum.set(id, counter);
        numToId.set(counter, id);
      }
      return '';
    });

    // 3) Replace references with superscript numbered links
    processed = processed.replace(refRegex, (_match, idRaw: string) => {
      const id = String(idRaw).trim();
      const n = idToNum.get(id);
      if (!n) return _match;
      return `<sup><a data-fn="fn-${n}" id="fnref-${n}" class="footnote-ref" role="button" tabindex="0">[${n}]</a></sup>`;
    });

    // 4) Build ordered footnotes section with styled header
    if (idToNum.size > 0) {
      let section = '\n\n<section class="blog-post__footnotes">\n';
      section += '<div class="footnotes-header">\n';
      section += '<span class="footnotes-icon">📝</span>\n';
      section += '<span class="footnotes-title">Footnotes</span>\n';
      section += '</div>\n';
      section += '<ol>\n';
      for (let n = 1; n <= idToNum.size; n++) {
        const id = numToId.get(n)!;
        let def = defs.get(id) || '';
        // Parse markdown links: [text](url) → <a href="url" target="_blank">text</a>
        def = this.parseMarkdownLinks(def);
        section += `<li id="fn-${n}"><p>${def} <a data-fn="fnref-${n}" class="footnote-backref" role="button" tabindex="0" title="Back to reference">↩</a></p></li>\n`;
      }
      section += '</ol>\n</section>\n';
      processed += section;
    }

    return processed;
  }

  private parseMarkdownLinks(text: string): string {
    // Match [text](url) pattern and convert to HTML links
    return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, linkText, url) => {
      // Ensure URL has protocol for external links
      let href = url;
      if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('/')) {
        href = `https://${url}`;
      }
      return `<a href="${href}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
    });
  }
}