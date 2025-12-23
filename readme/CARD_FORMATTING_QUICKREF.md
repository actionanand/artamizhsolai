# Card Formatting Quick Reference

## Card Format Syntax

All card formats use the pattern: `::cardType[param]{content}`

## Card Types at a Glance

### 1. Quote Cards (Elegant Attribution)
```markdown
::quote{Text of the quote}
::quote[Author Name]{Text of the quote}
```
**Best for**: Memorable statements, wise sayings, famous quotes

### 2. Verse Cards (Poetic & Sacred)
```markdown
::verse{Verse text}
::verse[Source/Reference]{Verse text}
```
**Best for**: Poetry, scriptures, sacred texts, literary excerpts

### 3. Epic Cards (Dramatic & Grand)
```markdown
::epic{Epic line of text}
::epic[Epic Title/Name]{Epic line of text}
```
**Best for**: Historic declarations, dramatic statements, epic narratives

### 4. Highlight Cards (Functional)
```markdown
::highlight[color]{Text to highlight}
```
**Best for**: Important notes, warnings, special information

### 5. Type Cards (Structured)
```markdown
::card[info]{Information text}
::card[warning]{Warning text}
::card[success]{Success text}
::card[error]{Error text}
::card[note]{Note text}
::card[tip]{Tip text}
::card[type|color]{Custom colored card}
```
**Best for**: Organized, structured information

## Visual Examples

### Quote
::quote[Steve Jobs]{The only way to do great work is to love what you do.}

### Verse
::verse[Bhagavad Gita]{Truth is eternal; righteousness is noble.}

### Epic
::epic[The Ramayana]{By sacred duty and righteous might, light shall overcome darkness.}

### Highlight
::highlight[yellow]{This is important information.}

### Info Card
::card[info]{This provides helpful information.}

## Syntax Cheat Sheet

| Purpose | Syntax | Example |
|---------|--------|---------|
| Simple Quote | `::quote{text}` | `::quote{Great quote}` |
| Attributed Quote | `::quote[name]{text}` | `::quote[Author]{Great quote}` |
| Simple Verse | `::verse{text}` | `::verse{Sacred text}` |
| Sourced Verse | `::verse[source]{text}` | `::verse[Scripture]{Sacred text}` |
| Simple Epic | `::epic{text}` | `::epic{Epic line}` |
| Titled Epic | `::epic[title]{text}` | `::epic[Epic Name]{Epic line}` |
| Highlighted | `::highlight[color]{text}` | `::highlight[blue]{Important}` |
| Info | `::card[info]{text}` | `::card[info]{Information}` |
| Warning | `::card[warning]{text}` | `::card[warning]{Be careful}` |
| Success | `::card[success]{text}` | `::card[success]{Done!}` |
| Error | `::card[error]{text}` | `::card[error]{Failed}` |
| Note | `::card[note]{text}` | `::card[note]{Remember}` |
| Tip | `::card[tip]{text}` | `::card[tip]{Helpful hint}` |
| Colored | `::card[type\|color]{text}` | `::card[info\|blue]{Text}` |

## Color Options

Available colors for `::highlight[]` and `::card[type|color]`:
- `red`, `green`, `blue`, `yellow`, `orange`, `purple`
- `pink`, `cyan`, `teal`, `gray`
- Hex codes: `#ff0000`, `#00ff00`, etc.

## Common Patterns

### Wisdom Section
```markdown
::verse[Source]{Sacred wisdom here}
::quote[Teacher]{Comment on wisdom}
::card[tip|blue]{How to apply this}
```

### Status Display
```markdown
::card[success|green]{✓ Operation successful}
::card[warning|orange]{⚠ Review required}
::card[error|red]{✕ Failed to complete}
```

### Teaching Content
```markdown
::epic[Lesson Title]{Main concept}
::verse[Reference]{Supporting quote}
::quote[Expert]{Expert perspective}
::card[note|purple]{Key takeaway}
```

## With Text Formatting

Combine cards with other formatting:

```markdown
::quote{This is ::bold{very important} and ::color[red]{urgent}.}
::verse[Source]{::italic{Sacred wisdom} brings enlightenment.}
::epic[Title]{This is ::combo[weight:bold;color:#6c5ce7]{absolutely critical}.}
```

## Card Properties

| Card Type | Icon | Border Color | Use Case |
|-----------|------|--------------|----------|
| Quote | — | Purple | Attribution & wisdom |
| Verse | 📖 | Red | Poetry & scripture |
| Epic | ⚔️ | Purple | Dramatic statements |
| Highlight | — | Variable | Important notes |
| Info | ℹ️ | Blue | Explanations |
| Warning | ⚠️ | Orange | Cautions |
| Success | ✓ | Green | Achievements |
| Error | ✕ | Red | Problems |
| Note | 📝 | Blue | Reminders |
| Tip | 💡 | Gold | Advice |

## Tips & Tricks

✓ **Do:**
- Use quotes for memorable statements
- Use verses for literary/sacred content
- Use epic for dramatic impact
- Combine with text formatting for emphasis
- Keep one type of card per instance

✗ **Don't:**
- Overuse cards (2-3 per section max)
- Nest cards inside cards
- Use for trivial content
- Forget source attribution
- Mix too many colors

## Full Examples

### Religion & Philosophy
```markdown
::verse[Vedas]{Truth is one; the wise call it by many names.}
::quote[Rumi]{Out beyond ideas of wrongdoing and rightdoing, there is a field. I'll meet you there.}
::epic[Sacred Teaching]{The path to enlightenment begins with self-knowledge.}
```

### Leadership
```markdown
::quote[Nelson Mandela]{I learned that courage was not the absence of fear, but the triumph over it.}
::card[tip|green]{Lead by example, not by authority.}
::epic[Vision Statement]{We create change through vision, courage, and collective action.}
```

### Learning
```markdown
::verse[Confucius]{When you know a thing, to hold that you know it; and when you do not know a thing, to allow that you do not know it—this is knowledge.}
::card[note|blue]{Understanding requires both knowledge and wisdom.}
::quote{The journey of learning never ends.}
```

## See Also

- [Complete Card Formatting Guide](CARD_FORMATTING_GUIDE.md)
- [Text Formatting Guide](TEXT_FORMATTING_GUIDE.md)
- [Card Formats Showcase Blog Post](../src/content/2023-12-26-card-formats-showcase.md)

---

Master card formatting and elevate your blog posts! 🎨✨
