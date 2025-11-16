# teemee-homepage

The official website for [teemee.one](https://teemee.one) — a living AI knowledge base and repository of intention.

## Overview

This is a modern, fast, and accessible website built with Next.js. It showcases teemee.one's philosophy, prompts, projects, and provides multiple pathways for people to engage with the community.

### Features

- **Static Export**: Built to export as static HTML for fast hosting and zero server requirements
- **Responsive Design**: Works beautifully on all devices with Tailwind CSS
- **Dark Mode**: Automatic dark mode support with smooth transitions
- **SEO Optimized**: Proper metadata, OpenGraph tags, and structured for discoverability
- **Accessible**: WCAG standards with semantic HTML and keyboard navigation
- **Fast**: Optimized images, minimal JavaScript, instant page loads

## Pages

- **Home** (`/`) - Hero section, core intentions, featured prompts, how teemee.one works
- **Philosophy** (`/philosophy`) - Deep dive into our values, decision-making, and who this is for
- **Prompts** (`/prompts`) - Library of available prompts with descriptions and tags
- **Projects** (`/projects`) - Featured projects demonstrating teemee.one in action
- **Contribute** (`/contribute`) - Multiple pathways for people to contribute to the project

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with React 18
- **Styling**: [Tailwind CSS 3.3](https://tailwindcss.com/) with custom theming
- **Export**: Static HTML export via `next export`
- **Language**: TypeScript
- **Package Manager**: npm or yarn

## Design System

### Colors

- **Primary**: `#8b5cf6` (Vibrant Purple) - Used for CTAs, highlights, primary actions
- **Secondary**: `#06b6d4` (Cyan) - Used for accents, secondary elements
- **Neutral**: Slate color palette for text and backgrounds
- **Dark Mode**: Automatic support via CSS variables and Tailwind's `dark:` prefix

### Components

- Buttons: `btn-primary`, `btn-secondary`, `btn-tertiary`
- Cards: `card` class with hover effects
- Typography: Semantic HTML with responsive scaling
- Navigation: Sticky header with mobile menu
- Footer: Dark footer with links and metadata

## Getting Started

### Installation

```bash
# Clone the main repository
git clone https://github.com/teemee-one/teemee.one.git
cd teemee.one/projects/teemee-homepage

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Run development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

The site will hot-reload as you make changes.

### Building

```bash
# Build for static export
npm run build
# or
yarn build

# The static files are output to ./out/
```

### Preview Static Build

```bash
# After building, you can preview locally
npm run build && npx serve out
```

## Project Structure

```
teemee-homepage/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with metadata
│   │   ├── globals.css          # Global styles and components
│   │   ├── page.tsx             # Home page
│   │   ├── philosophy/
│   │   │   └── page.tsx         # Philosophy page
│   │   ├── prompts/
│   │   │   └── page.tsx         # Prompts library
│   │   ├── projects/
│   │   │   └── page.tsx         # Projects showcase
│   │   └── contribute/
│   │       └── page.tsx         # Contribution guide
│   └── components/
│       ├── Navigation.tsx       # Header with navigation
│       ├── Footer.tsx           # Footer component
│       └── IntentionCard.tsx    # Reusable card component
├── public/                       # Static assets
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Future Enhancements

While the site currently exports as static HTML, it's built with Next.js to support future features:

- **User Accounts**: Login/signup for personalized experiences
- **Newsletter Signup**: Collect emails with form handling
- **Donations**: Accept support from the community
- **Memberships**: Offer special access or benefits
- **Dynamic Content**: Load prompts and articles from a database
- **Comments & Discussions**: Enable community conversations

These can be added by:
1. Converting from `output: 'export'` to server mode
2. Adding API routes for backend functionality
3. Implementing database queries
4. Adding authentication

See `docs/TECHNICAL.md` for detailed upgrade path.

## Deployment

### Static Hosting (Current)

Deploy the `out/` directory to any static host:

```bash
# Vercel (Recommended)
npm install -g vercel
vercel

# Netlify
netlify deploy --prod --dir=out

# GitHub Pages
# Push the out/ folder to gh-pages branch

# AWS S3 + CloudFront
aws s3 sync out/ s3://your-bucket-name
```

### With Server Features (Future)

When adding dynamic features, deploy directly to a platform supporting Node.js:
- Vercel (Next.js native)
- Railway
- Render
- AWS EC2
- DigitalOcean

## Styling Guidelines

### Adding New Pages

1. Create file in `src/app/[page]/page.tsx`
2. Use Navigation and Footer components
3. Follow the established layout pattern
4. Use existing component classes

### Button Classes

```tsx
// Primary action
<button className="btn btn-primary">Primary</button>

// Secondary action
<button className="btn btn-secondary">Secondary</button>

// Tertiary action
<button className="btn btn-tertiary">Tertiary</button>
```

### Card Components

```tsx
<div className="card bg-white dark:bg-slate-800">
  <h3>Title</h3>
  <p>Content</p>
</div>
```

### Dark Mode

Use Tailwind's `dark:` prefix:

```tsx
<div className="bg-white dark:bg-slate-900">
  <p className="text-slate-900 dark:text-white">Content</p>
</div>
```

## Contributing

This site is part of the larger teemee.one project. See the main [CONTRIBUTING.md](../../CONTRIBUTING.md) for guidelines.

### Making Changes

1. Create a feature branch
2. Make your changes
3. Test locally with `npm run dev`
4. Build and preview with `npm run build`
5. Submit a pull request

### Adding Content

Content pages live in `src/app/`. Each page is a React component that:
- Imports Navigation and Footer
- Uses semantic HTML
- Follows the established layout pattern
- Is fully responsive

## Performance

Current metrics (optimized):
- ✅ Static export: Instant loading
- ✅ Dark mode: No flash of wrong theme
- ✅ Images: Optimized (unoptimized setting for static export)
- ✅ CSS: Tailwind purges unused styles
- ✅ JavaScript: Minimal, mostly for interactive features

## License

MIT - Same as teemee.one main repository

## Questions?

- Open an issue on [GitHub](https://github.com/teemee-one/teemee.one)
- Check [TECHNICAL.md](./docs/TECHNICAL.md) for architecture details
- See main [README.md](../../README.md) for project philosophy

---

Built with ❤️ for people who care about building AI with intention.
