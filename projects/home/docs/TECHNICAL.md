# teemee.one Homepage - Technical Specification

## Technology Stack

### Recommended: Static Site Generator

**Why:** Speed, simplicity, deployment ease

Options:
1. **Hugo** - Fast, simple, great for this use case
2. **11ty** - JavaScript-based, highly flexible
3. **Next.js (Static Export)** - Modern React with static output

### Recommended Approach: 11ty + Tailwind CSS

- 11ty for site generation and templating
- Tailwind CSS for styling
- Alpine.js for light interactivity
- Vercel or Netlify for deployment

## Project Structure

```
teemee-homepage/
├── src/
│   ├── _includes/        # Layout templates
│   ├── _data/           # Data files (config, nav, etc)
│   ├── assets/
│   │   ├── css/         # Tailwind input
│   │   ├── js/          # Alpine.js scripts
│   │   └── images/      # Optimized images
│   ├── index.md         # Homepage
│   ├── about.md         # About teemee
│   ├── philosophy.md    # Philosophy page
│   ├── prompts.md       # Prompt library preview
│   ├── contribute.md    # Contributing guide
│   ├── blog/            # Blog posts
│   └── projects/        # Featured projects
│
├── .eleventy.js         # 11ty config
├── tailwind.config.js   # Tailwind config
├── package.json         # Dependencies
└── README.md
```

## Key Pages

### index.html (Homepage)
- Hero section
- Three intentions cards
- What you can do
- Recent content carousel
- Get started pathways
- Philosophy teaser
- Call to action

### /about/
- What is teemee.one?
- History and evolution
- Vision for the future
- Team/contributors

### /philosophy/
- Core intentions explained
- Values in depth
- How we make decisions
- Evolution of thinking

### /prompts/
- Searchable prompt library
- Filters by category, difficulty
- Preview of prompt content
- Link to full repo

### /projects/
- Featured projects
- Project showcase
- Links to full documentation

### /blog/
- Latest articles
- Archive by date
- Search functionality

### /contribute/
- Contribution guide
- How to get started
- GitHub link
- Types of contributions

## Interactive Features

### Prompt Search
```html
<input id="promptSearch" placeholder="Search prompts...">
<div id="promptResults"></div>
```

Using client-side search (Lunr.js or similar):
- Fast, no server needed
- Filters prompts by keyword
- Category and difficulty filtering
- Copy-to-clipboard functionality

### Dark Mode Toggle
```html
<button id="themeToggle">🌙</button>
```

Using Alpine.js:
- Toggle between light and dark
- Persist preference to localStorage
- Smooth transition

### Mobile Navigation
- Hamburger menu on mobile
- Smooth transitions
- Touch-friendly

## Performance Targets

- Lighthouse score: 95+
- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3s

Optimization strategies:
- Image optimization (WebP, srcset)
- CSS/JS minification
- Code splitting
- Lazy loading
- Caching strategy

## SEO Setup

- Meta tags for each page
- Open Graph tags for sharing
- Structured data (Schema.org)
- Sitemap
- robots.txt
- Canonical URLs

## Analytics & Tracking

Track:
- Page views
- User flow (where people go)
- Conversion (clones, contributions)
- Device/browser breakdown
- Traffic sources

Tools: Plausible Analytics or Simple Analytics (privacy-focused)

## Accessibility

- WCAG 2.1 AA compliance
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast
- Focus indicators

## Deployment

### Development
```bash
npm run dev  # Local server with live reload
```

### Build
```bash
npm run build  # Generate static site
```

### Deploy
```bash
npm run deploy  # Deploy to Vercel/Netlify
```

Hosting options:
1. Vercel (zero-config, GitHub integration)
2. Netlify (similar, great DX)
3. GitHub Pages (free, limited features)

## Customization Points

### Easy Changes (non-technical)
- Content in markdown files
- Images in /assets/images/
- Blog posts in /src/blog/

### Moderate Changes (some code)
- Colors: tailwind.config.js
- Layout: .eleventy.js
- Add new pages: .md files in /src/

### Complex Changes (development needed)
- New features
- Custom components
- Integration with external APIs

---

This specification provides a starting point. The site should evolve as teemee.one grows.
