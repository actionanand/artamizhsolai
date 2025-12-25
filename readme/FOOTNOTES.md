# Footnotes Feature Documentation

## Overview
The blog includes a fully-featured footnote system that allows you to add references and footnotes to your blog posts with automatic numbering, smooth navigation, and professional styling.

## Quick Start

### 1. Add Footnotes to Your Post

In your markdown file, use the following syntax:

```markdown
---
title: My Blog Post
slug: my-blog-post
---

# My Article

This is regular text with a footnote reference[^1].

More content with another reference[^2].

:::footnotes
[^1]: This is the first footnote text
[^2]: This is the second footnote text with [external link](https://example.com)
:::
```

### 2. How It Works

**In the text:**
- Use `[^id]` where you want the footnote reference
- The `id` can be any text: `[^1]`, `[^intro]`, `[^note-a]`

**In the footnotes block:**
- Wrap all definitions in `:::footnotes` and `:::`
- Define each footnote: `[^id]: Your footnote text`
- You can include markdown links: `[^id]: Text with [link](url)`

**Result:**
- `[^1]` becomes a superscript clickable link: `[1]`
- Footnote definitions are removed from the main text
- A styled "Footnotes" box appears at the end
- Clicking `[1]` scrolls to the footnote with proper URL
- Clicking `↩` returns to the reference

## Features

### ✅ Automatic Numbering
- Footnotes are numbered `[1]`, `[2]`, `[3]` in order of appearance
- You can use any ID in your markdown - numbering is automatic

### ✅ Smooth Navigation
- Click superscript number → smoothly scrolls to footnote
- Click back arrow (↩) → returns to reference in text
- URL updates correctly: `/blog/my-post#fn-1`

### ✅ Professional Box Styling
- Footnotes section has a styled box with header
- Gradient background with left border accent
- Clean typography and spacing

### ✅ External Links in Footnotes
- Use markdown link syntax: `[text](url)`
- URLs without protocol get `https://` added automatically
- Links open in new tab with security attributes

## Example with External Links

```markdown
The Tamil language[^1] has ancient origins[^2].

:::footnotes
[^1]: One of the oldest classical languages
[^2]: Learn more at [Wikipedia](www.wikipedia.org) or [Tamil Virtual Academy](https://tamilvu.org)
:::
```

This renders:
- Footnote 1: One of the oldest classical languages
- Footnote 2: Learn more at [Wikipedia](link) or [Tamil Virtual Academy](link)

## Technical Details

### Files
- **Pipe**: `src/app/pipes/process-footnotes.pipe.ts`
- **Styling**: `src/styles/footnotes.css`
- **Component**: `src/app/pages/blog/[slug].page.ts`

### CSS Classes
- `.blog-post__footnotes` - Container box
- `.footnotes-header` - Header with emoji and title
- `.footnote-ref` - Superscript reference link
- `.footnote-backref` - Back-to-text arrow (↩)

---
**Last Updated**: December 2025
