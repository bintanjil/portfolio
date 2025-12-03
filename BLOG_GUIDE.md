# Blog Section - "Idea Journal"

## Overview

A markdown-powered blog system with no backend required. Features timeline mode and multiple categories.

## Features

✅ **Markdown-Powered**: Write posts in markdown files
✅ **No Backend**: Static generation using Next.js
✅ **4 Categories**: Dev Notes, Competitive Programming, Research Journey, Project Logs
✅ **Timeline Mode**: Unique vertical timeline view showing thought progression
✅ **Grid View**: Traditional card-based blog layout
✅ **Category Filtering**: Filter posts by category
✅ **Tag System**: Organize posts with tags
✅ **Syntax Highlighting**: Code blocks with proper formatting
✅ **SEO Optimized**: Metadata for each post

## Directory Structure

```
content/
  blog/
    first-web-scraping-project.md
    dynamic-programming-journey.md
    healthcare-system-architecture.md
    exploring-graph-neural-networks.md
    building-realtime-chat-websockets.md
```

## Creating a New Blog Post

### 1. Create Markdown File

Create a new `.md` file in `content/blog/`:

```bash
content/blog/my-new-post.md
```

### 2. Add Frontmatter

Start with YAML frontmatter:

```yaml
---
title: "Your Post Title"
date: "2024-12-03"
category: "Dev Notes"  # or "Competitive Programming", "Research Journey", "Project Logs"
tags: ["JavaScript", "React", "Tutorial"]
excerpt: "A brief description of your post that appears in the card view"
---
```

### 3. Write Content

Write your content in markdown:

```markdown
# Main Heading

Your introduction paragraph...

## Subheading

More content...

### Code Example

\`\`\`javascript
const example = "code";
console.log(example);
\`\`\`

- Bullet point
- Another point
```

### 4. Post Automatically Appears

The post will automatically:
- Appear in `/blog`
- Be filterable by category
- Show in timeline mode
- Have its own page at `/blog/my-new-post`

## Markdown Features Supported

### Text Formatting
- **Bold**: `**text**`
- *Italic*: `*text*`
- `Code`: \`code\`

### Headings
```markdown
# H1
## H2
### H3
```

### Lists
```markdown
- Unordered
- List

1. Ordered
2. List
```

### Code Blocks
````markdown
```javascript
const code = "example";
```
````

### Links
```markdown
[Link text](https://example.com)
```

### Blockquotes
```markdown
> This is a quote
```

## Category Colors

Each category has a unique color scheme:

- **Dev Notes**: Blue (bg-blue-500)
- **Competitive Programming**: Orange (bg-orange-500)
- **Research Journey**: Purple (bg-purple-500)
- **Project Logs**: Green (bg-green-500)

## View Modes

### Grid View
Traditional card-based layout with:
- Post preview cards
- Category badges
- Date stamps
- Tags
- Read time estimate

### Timeline Mode (Unique Feature!)
Vertical timeline showing:
- Chronological progression
- Category-coded nodes
- Date milestones
- Content evolution

Perfect for showing how your thinking and skills evolved over time!

## Pages

### `/blog`
Main blog page with:
- All posts in grid or timeline view
- Category filter buttons
- View mode toggle
- Post count display

### `/blog/[slug]`
Individual post pages with:
- Full content rendering
- Syntax highlighted code
- Tags
- Reading time
- Navigation back to blog

## Styling

All components use your portfolio's design system:
- Dark theme (slate-950/900)
- Indigo/purple/violet gradients
- Glassmorphism effects
- Smooth animations with Framer Motion
- Hover effects and transitions

## SEO

Each post includes:
- Dynamic metadata
- Title optimization
- Description from excerpt
- Proper heading hierarchy

## Example Posts Included

1. **First Web Scraping Project** (Dev Notes)
   - Python, BeautifulSoup
   - Web scraping tutorial

2. **Dynamic Programming Journey** (Competitive Programming)
   - DP learning path
   - Problem-solving strategies

3. **Healthcare System Architecture** (Project Logs)
   - System design decisions
   - Architecture patterns

4. **Exploring Graph Neural Networks** (Research Journey)
   - ML research
   - GNN concepts

5. **Building Real-Time Chat with WebSockets** (Dev Notes)
   - WebSocket implementation
   - Scalability considerations

## Adding More Posts

Just create new `.md` files in `content/blog/` with proper frontmatter. The system handles the rest!

## Tech Stack

- **gray-matter**: Parse frontmatter
- **remark**: Process markdown
- **remark-html**: Convert to HTML
- **Next.js**: Static generation
- **Framer Motion**: Animations
