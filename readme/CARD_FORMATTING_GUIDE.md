# Card Formatting Guide

## Overview

The Card Formatting system allows you to highlight epic verses, quotes, important paragraphs, and other content in beautiful, styled cards. Perfect for showcasing poetry, epic lines, important notes, and special content.

## Basic Card Formats

### 1. Quote Cards

Display elegant quoted text with optional author attribution.

**Syntax:** `::quote{text}` or `::quote[author]{text}`

**Examples:**

```markdown
::quote{The only way to do great work is to love what you do.}

::quote[Steve Jobs]{Innovation distinguishes between a leader and a follower.}
```

**Features:**
- Purple left border
- Light purple gradient background
- Italic text styling
- Author attribution line

### 2. Verse Cards

Perfect for displaying epic verses, poems, or literary excerpts.

**Syntax:** `::verse{text}` or `::verse[source/reference]{text}`

**Examples:**

```markdown
::verse{In the beginning there was the Word, and the Word was with God.}

::verse[Mahabharata, Book 1]{Dharma is the foundation of all righteousness and the path to eternal truth.}

::verse[Bible, John 1:1]{In the beginning was the Word, and the Word was with God, and the Word was God.}
```

**Features:**
- Red/pink left border
- Poetry-appropriate styling
- 📖 Icon with source reference
- Dashed header border
- Larger line-height for poetry

### 3. Epic Cards

Display epic lines with special styling for historical and literary content.

**Syntax:** `::epic{text}` or `::epic[title]{text}`

**Examples:**

```markdown
::epic{Thus spoke Rama to Sita, with the grace of heaven in his heart.}

::epic[The Odyssey]{Tell me, O muse, of the man of many turns, who wandered long after leaving Troy.}

::epic[Ramayana]{By the sacred duty of truth and righteousness, I shall overcome all obstacles.}
```

**Features:**
- Purple/lavender border
- Decorative top border
- ⚔️ Icon (sword - for epic battles)
- Title/source with uppercase styling
- Centered verse text
- Decorative footer marker (✦)
- Enhanced visual prominence

### 4. Highlight Cards

Create highlighted cards with colored borders for important information.

**Syntax:** `::highlight[color]{text}`

**Examples:**

```markdown
::highlight[yellow]{This is important information you should remember.}

::highlight[blue]{Note: Always follow the guidelines carefully.}

::highlight[green]{Success! The implementation is complete.}
```

**Supported colors:**
- Named: red, green, blue, yellow, orange, purple, pink, cyan, teal, gray
- Hex: #ff0000, #00ff00, etc.
- RGB: rgb(255, 0, 0)

**Features:**
- Colored left border (5px)
- Light tinted background
- Clean, minimal design

### 5. Generic Cards with Types

Create cards with specific types and optional colors.

**Syntax:** `::card[type]{text}` or `::card[type|color]{text}`

**Supported types:**
- `info` - Information card (ℹ️)
- `warning` - Warning card (⚠️)
- `success` - Success card (✓)
- `error` - Error card (✕)
- `note` - Note card (📝)
- `tip` - Tip card (💡)

**Examples:**

```markdown
::card[info]{This is informational content for users.}

::card[warning]{Be careful with this operation as it cannot be undone.}

::card[success]{Operation completed successfully!}

::card[error]{An error occurred while processing your request.}

::card[note]{Remember to save your work frequently.}

::card[tip]{Use keyboard shortcuts to work faster.}

::card[info|blue]{Custom colored information card.}

::card[warning|orange]{Custom colored warning card.}
```

**Features:**
- Header with icon and type label
- Type-specific styling
- Optional custom color
- Professional appearance

## Advanced Usage

### Combining with Text Formatting

You can use text formatting inside cards:

```markdown
::quote[Author]{This is ::bold{important} and ::color[red]{urgent}.}

::verse[Ramayana]{::italic{Truth is the ultimate refuge} of all beings.}

::epic[The Bhagavad Gita]{::combo[weight:bold;color:#6c5ce7]{Know thyself as eternal and divine}}
```

### Status Cards

Combine cards with text formatting for status displays:

```markdown
::card[success|green]{::bold{✓ Complete} - All tests passed successfully}

::card[warning|orange]{::bold{⚠ In Progress} - 75% complete}

::card[error|red]{::bold{✕ Failed} - Please review the errors}
```

### Knowledge Cards

Create cards for important knowledge points:

```markdown
::verse[Ancient Wisdom]{The path to wisdom begins with self-knowledge and honest reflection.}

::quote[Socrates]{The unexamined life is not worth living.}

::card[tip|blue]{Always question assumptions and verify facts independently.}
```

## Card Styling Details

### Visual Hierarchy

1. **Quote Cards**: Elegant, subtle, perfect for attributions
2. **Verse Cards**: Poetic styling, medium prominence
3. **Epic Cards**: Highest prominence, decorative elements
4. **Highlight Cards**: Functional, color-coded
5. **Type Cards**: Information-focused with icons

### Colors

**Built-in color variants:**
- Red: `#d32f2f`
- Green: `#388e3c`
- Blue: `#1565c0`
- Yellow: `#f57f17`
- Orange: `#ff6f00`
- Purple: `#6c5ce7`
- Pink: `#ec407a`
- Cyan: `#00bcd4`
- Teal: `#00897b`
- Gray: `#616161`

### Responsive Design

- All cards are fully responsive
- Mobile-optimized padding and font sizes
- Touch-friendly on all devices
- Smooth animations (respects prefers-reduced-motion)

### Dark Mode

All cards automatically adapt to dark mode with:
- Dark backgrounds
- Adjusted text colors
- Maintained contrast ratios
- Appropriate border colors

## Complete Examples

### Example 1: Religious Verse

```markdown
::verse[Bhagavad Gita, Chapter 2]{When you have learned to let go of the fruits of action, then you will find peace in all circumstances.}
```

### Example 2: Historical Quote

```markdown
::quote[Mahatma Gandhi]{In a gentle way, you can shake the world.}
```

### Example 3: Epic Line with Context

::epic[The Ramayana]{Dharma is eternal; dharma is the supreme law; those who live by dharma prosper eternally.}

```markdown
::card[info|purple]{The Ramayana teaches us the eternal principles of duty, honor, and righteousness through the heroic journey of Prince Rama.}
```

### Example 4: Knowledge Organization

```markdown
## Chapter 1: Foundations

::epic[Introduction]{Begin your journey with an open heart and curious mind.}

::quote[Master Teacher]{Learning is not about accumulation, but about transformation.}

::card[note|blue]{Key concepts will be highlighted throughout this section.}
```

### Example 5: Mixed Content

```markdown
## Important Teachings

::verse[Sacred Text]{Truth is one; the wise call it by many names.}

::quote[Philosopher]{Understanding requires both knowledge and wisdom.}

::epic[The Hero's Journey]{Rise above fear and doubt to discover your true potential.}

::card[tip|green]{These principles apply across cultures and generations.}
```

## Best Practices

### ✓ Do's

1. **Use verse cards** for poetry and epic lines
2. **Use quote cards** for attributable quotes
3. **Use epic cards** for dramatic or highly significant content
4. **Use highlight cards** for warnings and important notes
5. **Use type cards** for structured information
6. **Combine with text formatting** for emphasis
7. **Test on mobile** to ensure readability

### ✗ Don'ts

1. **Don't overuse** - Limit to 2-3 cards per section
2. **Don't nest cards** - One card type per instance
3. **Don't use for trivial content** - Reserve for important information
4. **Don't mix too many colors** - Keep visual consistency
5. **Don't forget attribution** - Always credit sources

## Accessibility

- Semantic HTML structure
- Proper icon usage (not just decoration)
- Sufficient color contrast (WCAG AAA compliant)
- Keyboard navigable
- Screen reader friendly
- Respects prefers-reduced-motion

## Troubleshooting

### Cards Not Appearing

1. Verify syntax is correct (double colons, proper brackets)
2. Check card format is inside blog post content
3. Clear browser cache
4. Ensure cards.css is imported in styles.css

### Styling Issues

1. Verify color names are spelled correctly
2. Check hex colors start with `#`
3. Ensure pipe delimiter is used correctly (`|`)
4. Test in different browsers

### Formatting Inside Cards

- Use simple formatting (bold, italic, color)
- Avoid nesting complex formats
- Keep text concise

## Summary of Syntax

```
::quote{text}                           - Simple quote
::quote[author]{text}                   - Quote with author
::verse{text}                           - Simple verse
::verse[source]{text}                   - Verse with source
::epic{text}                            - Simple epic
::epic[title]{text}                     - Epic with title
::highlight[color]{text}                - Highlighted paragraph
::card[info]{text}                      - Info card
::card[warning]{text}                   - Warning card
::card[success]{text}                   - Success card
::card[error]{text}                     - Error card
::card[note]{text}                      - Note card
::card[tip]{text}                       - Tip card
::card[type|color]{text}                - Card with custom color
```

## See Also

- [Text Formatting Guide](TEXT_FORMATTING_GUIDE.md)
- [Table Styling Guide](TABLE_STYLING_GUIDE.md)
- [Blog Post: Card Formats Showcase](../src/content/card-formats-showcase.md)

---

Perfect your blog posts with beautiful, meaningful cards that highlight your most important content! 🎨✨
