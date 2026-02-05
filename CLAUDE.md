# CLAUDE.md - AI Assistant Context for Shaheer Ahmad's Portfolio

## Project Overview
This is **Shaheer Ahmad's personal portfolio website** - a static, single-page site showcasing his work as an **AI Engineer** specializing in Deep Learning, Voice AI, and Human-Computer Interaction. He is currently a Foundational Engineer at Uplift AI (YC S25) and a CS graduate from LUMS.

## Technology Stack
- **Pure vanilla HTML5, CSS3, and JavaScript** - NO frameworks (React, Vue, etc.)
- **No build system** - Files are served directly as static assets
- **Deployment**: Static hosting (GitHub Pages compatible)

## File Structure
```
├── index.html          # Main (and only) HTML page - single-page design
├── CLAUDE.md           # This file - AI assistant context
├── README.md           # Basic repo description
├── LICENSE             # License file
└── assets/
    ├── css/
    │   └── styles.css  # All styles - uses CSS custom properties for theming
    ├── js/
    │   └── theme.js    # Dark/Light mode toggle with localStorage persistence
    ├── images/
    │   └── profile_picture.jpeg  # Hero profile image (390x390px display)
    └── downloads/
        └── Shaheer_Ahmad_CV.pdf  # Downloadable CV
```

## Theming System (IMPORTANT)
The site uses **CSS custom properties** for dark/light mode theming:
- **Dark mode is DEFAULT** (defined in `body { }`)
- **Light mode** is activated via `.light-mode` class on `<body>`
- Theme preference persists via `localStorage`

### Key CSS Variables (always use these, never hardcode colors):
```css
--main-bg-color       /* Page background */
--text-color          /* Body text */
--heading-color       /* h1, h2, h3 */
--subtitle-color      /* Meta text, dates */
--card-bg-color       /* Project cards, skill badges */
--card-border-color   /* Borders */
--accent-color        /* Links, highlights, CTA buttons */
--accent-hover-color  /* Hover states */
```

## HTML Patterns to Follow

### Adding a New Project:
```html
<div class="project-card">
    <h3>Project Title</h3>
    <p class="project-role">Role @ Company (if applicable)</p>
    <p>Description of the project and impact metrics.</p>
    <a href="URL" class="project-link" target="_blank">Link Text →</a>
    <div class="tech-tags">
        <span>Tag1</span>
        <span>Tag2</span>
    </div>
</div>
```

### Adding a New Experience/Education Item:
```html
<div class="exp-item">
    <h3>Position Title</h3>
    <p class="exp-meta">Organization | Date Range</p>
    <p>Description of responsibilities and achievements.</p>
</div>
```

### Adding a New Publication:
```html
<div class="pub-item">
    <h3>Paper Title</h3>
    <p class="pub-meta">Author Names</p>
    <p>Topic/Venue information</p>
    <a href="URL" class="project-link" target="_blank">View Paper →</a>
</div>
```

## Page Sections (in order)
1. **Hero** - Profile image, name, subtitle, CTA buttons
2. **About** - Bio paragraph
3. **Projects** - Featured work (project-card components)
4. **Publications** - Academic papers
5. **Skills** - Technical skills grid
6. **Experience** - Work history and education
7. **Contact** - Email, LinkedIn, phone
8. **Footer** - Copyright

## Responsive Design
- **Breakpoint**: 768px (mobile styles below this)
- **Hero image**: 390px desktop → 180px mobile
- **Theme toggle button**: Fixed bottom-right corner

## Content Guidelines
- **Tone**: Professional, technical, achievement-focused
- **Metrics**: Include quantifiable impact (users served, accuracy improvements, etc.)
- **Domain**: AI/ML, Deep Learning, Voice AI, Production Systems
- **Links**: Use `target="_blank"` for external links
- **Arrow convention**: External links end with " →"

## DO NOT
- ❌ Add JavaScript frameworks (React, Vue, Angular)
- ❌ Add CSS frameworks (Bootstrap, Tailwind)
- ❌ Add build tools (webpack, Vite, etc.)
- ❌ Hardcode color values - always use CSS variables
- ❌ Remove the theme toggle functionality
- ❌ Break the single-page structure
- ❌ Remove `aria-label` attributes (accessibility)

## DO
- ✅ Maintain vanilla HTML/CSS/JS approach
- ✅ Use semantic HTML elements
- ✅ Follow existing CSS class naming conventions
- ✅ Keep responsive design intact
- ✅ Optimize images before adding (web-friendly formats/sizes)
- ✅ Test both dark and light themes after changes
- ✅ Keep external links with `target="_blank"`

## Quick Commands
```bash
# Local development - just open index.html in browser
# Or use a simple server:
python -m http.server 8000
# Then visit: http://localhost:8000
```

## Owner Contact
- **Name**: Shaheer Ahmad
- **Email**: shaheer.ahmad.work@gmail.com
- **LinkedIn**: linkedin.com/in/shaheer-ahmad-deeplearning
