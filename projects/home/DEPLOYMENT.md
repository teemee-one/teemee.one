# teemee-homepage Deployment Guide

This guide walks you through deploying teemee-homepage as a separate repository to Netlify.

## What's Ready

✅ **Fully built Next.js site** - All pages and components complete
✅ **Netlify configuration** - `netlify.toml` with build settings, caching, and security headers
✅ **Static export enabled** - `next.config.js` configured for `output: 'export'`
✅ **All dependencies** - `package.json` ready with all required packages

## Next Steps (For You)

### 1. Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository:
   - **Name**: `teemee-homepage` (or your preferred name)
   - **Description**: "Official website for teemee.one - Living AI Knowledge Base"
   - **Visibility**: Public (or Private - your choice)
   - **DO NOT initialize with README** (we have one already)
3. Click "Create repository"

### 2. Push Code to GitHub

In your terminal, navigate to the homepage project directory:

```bash
cd /workspaces/teemee.one/projects/teemee-homepage

# Remove the nested git repo from parent
rm -rf .git

# Initialize new git repo
git init
git add .
git commit -m "Initial commit: teemee-homepage website

- Next.js 14 site with static export
- 5 main pages: home, philosophy, prompts, projects, contribute
- Responsive design with Tailwind CSS and dark mode
- SEO optimized with proper metadata and OpenGraph tags
- Netlify configuration for automatic deployment"

# Add remote and push
git remote add origin https://github.com/YOUR-USERNAME/teemee-homepage.git
git branch -M main
git push -u origin main
```

**Replace `YOUR-USERNAME`** with your actual GitHub username.

### 3. Connect to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up or log in
3. Click "New site from Git"
4. Choose "GitHub" and authorize
5. Find and select `teemee-homepage` repository
6. **Build settings should auto-populate:**
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: Should detect 18.x
7. Click "Deploy site"

**That's it!** Netlify will:
- Watch your GitHub repo
- Auto-build on every push
- Deploy to a Netlify URL (like `teemee-homepage.netlify.app`)
- Show you build logs and status

### 4. Optional: Configure Custom Domain

Once deployed to Netlify:

1. In Netlify dashboard, go to your site
2. Click "Site settings" → "Domain management"
3. Either:
   - **Point teemee.one** (if you own the domain) via DNS settings
   - **Use Netlify's free domain** for now

### 5. Test Your Deployment

After Netlify builds (check build logs), visit your site and verify:

- ✅ Home page loads
- ✅ All navigation links work
- ✅ Dark mode toggle works
- ✅ Mobile responsive design
- ✅ Meta tags visible in page source
- ✅ No 404 errors in console

## Key Files in Your Repo

```
teemee-homepage/
├── netlify.toml          # Netlify configuration (builds, caching, security)
├── next.config.js        # Next.js config (static export enabled)
├── tailwind.config.js    # Tailwind CSS theming
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with metadata
│   │   ├── globals.css   # Global styles
│   │   ├── page.tsx      # Home page
│   │   ├── philosophy/page.tsx
│   │   ├── prompts/page.tsx
│   │   ├── projects/page.tsx
│   │   └── contribute/page.tsx
│   └── components/
│       ├── Navigation.tsx
│       ├── Footer.tsx
│       └── IntentionCard.tsx
└── README.md             # Project documentation
```

## What Happens on Netlify

When you push to GitHub:

1. Netlify detects the push
2. Pulls your code
3. Runs `npm install`
4. Runs `npm run build` (generates static HTML in `out/`)
5. Deploys the `out/` directory to Netlify's CDN
6. Site is live instantly

## Environment Variables (If Needed)

If you add environment variables later (for APIs, etc.):

1. In Netlify dashboard: Site settings → Build & deploy → Environment
2. Add your variables
3. They're automatically available during build

## Continuous Deployment

Every time you push to `main`:
- Netlify automatically builds and deploys
- Old version is preserved (rollback option available)
- Build logs available for debugging

To skip a build, add `[skip ci]` in your commit message:
```bash
git commit -m "Update content [skip ci]"
```

## Troubleshooting

**Build fails?**
- Check Netlify build logs for errors
- Verify `npm run build` works locally: `cd teemee-homepage && npm run build`
- Check that `package.json` has all dependencies

**Pages return 404?**
- This is handled by `netlify.toml` with a redirect rule
- Should work automatically

**Dark mode not working?**
- Ensure browser JavaScript is enabled
- Check that `globals.css` loaded properly
- Clear browser cache

**Custom domain not working?**
- DNS changes take up to 48 hours
- Verify DNS records in your domain registrar
- Use Netlify's DNS suggestion tool

## Next Features (When Ready)

The site is built to scale to dynamic features. To add later:

- **User sign-ups** - Convert to server mode, add database
- **Newsletter** - Add form handler (Netlify Forms or external)
- **Donations** - Integrate Stripe
- **User accounts** - Add authentication
- **Dynamic content** - Load prompts from API

See the homepage `README.md` for details.

## Questions?

If you run into issues:
1. Check Netlify build logs (most helpful)
2. Run `npm run build` locally to reproduce
3. Check `.gitignore` isn't excluding needed files
4. Verify all dependencies in `package.json`

Good luck deploying! 🚀
