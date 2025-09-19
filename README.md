# Amar Khullar — Personal Website

Static (for now) website to showcase my work and projects.

## Structure

- `index.html` — Home with About and highlights
- `projects.html` — Detailed project write-ups
- `blog/` — Blog index and posts
  - `blog/index.html`
  - `blog/posts/*.html`
- `contact.html` — Contact links
- `assets/css/styles.css` — Theme and layout
- `assets/js/script.js` — Theme toggle and small enhancements
- `assets/images/favicon.svg` — Site icon

## Local preview

Use any static server, for example Python:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080 in your browser.

## Customize

- Update texts in `index.html` and `projects.html` to fine-tune language.
- Add blog posts under `blog/posts/` as HTML files and link them from `blog/index.html`.
- Replace `assets/images/social-card.png` if you add an Open Graph social image.
- Adjust colors in `assets/css/styles.css` (`--accent`, `--accent-2`, `--accent-3`) to tweak the vibrant palette.

## Deployment

Deployed via Vercel to amarkhullar.com.
