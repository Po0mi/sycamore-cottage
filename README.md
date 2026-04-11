# Sycamore Cottage — Organic-Clinical Redesign

Modern, warm, and professional website for Sycamore Cottage residential care home in Basingstoke, Hampshire. The design balances clinical precision with organic warmth to create trust and approachability.

---

## 🚀 Tech Stack

### Core
- **Next.js 14** — React framework with App Router
- **TypeScript** — Type-safe development
- **SCSS Modules** — Component-scoped styling
- **GSAP** — Scroll animations and timelines

### Features
- **Leaflet** — Interactive maps with custom markers
- **EmailJS** — Contact form submissions
- **Sanity CMS** — Content management (team, vacancies, contact)

### Deployment
- **Hostinger** — Production hosting
- **Domain:** www.sycamorecottageresthome.com

---

## 🎨 Design System

### Colors

```scss
// Neutrals
--white: #ffffff
--off-white: #f5f6f8        // Main background
--gray-50: #eef0f3          // Borders
--gray-100: #d8dce3         // Dividers
--gray-400: #8c93a0         // Secondary text
--gray-700: #3a3f4a         // Body text
--ink: #111318              // Dark backgrounds

// Blues (warm, trustworthy)
--blue: #2563eb             // Primary
--blue-light: #eff4ff       // Tinted backgrounds
--blue-mid: #93b4f7         // Soft accents
```

### Typography

- **Display:** Gambarino / Instrument Serif
- **Body:** Switzer / DM Sans
- **Accent:** Crimson Pro (quotes)

### Spacing

- **Containers:** 1200px max-width
- **Section padding:** `clamp(4rem, 8vw, 6rem)`
- **Border radius:** 8-12px (small), 14-16px (cards), 20-24px (pills)

---

## 📐 Redesigned Sections

### 1. About — Bento Grid
- 12-column responsive grid
- Large card with care hands photo (8 cols)
- Gradient accent card (4 cols)
- Icon badges + pill tags

**Files:** `About.tsx`, `About.scss`, `care-hands.jpg`

### 2. Testimonials — Soft Cards
- Featured CQC card with radial glow
- Two-column mini cards
- 9.8 rating badge

**Files:** `Testimonials.tsx`, `Testimonials.scss`

### 3. Contact — CTA-Focused
- Gradient "Book A Tour" button
- Minimal contact details
- Dark background with flowing gradient

**Files:** `Contact.tsx`, `Contact.scss`

### 4. Map — Full Bleed Split
- Full-screen map
- Floating frosted glass card
- Pulsing pin animation

**Files:** `MapSection.tsx`, `MapSection.scss`

### 5. Navbar — Pill Nav
- Scroll state transitions (transparent → white)
- Pill-shaped active states
- Mobile hamburger menu

**Files:** `Navbar.tsx`, `Navbar.scss`

### 6. Hero — Centered Warmth
- Video background
- Pill label with glowing dot
- Trust badges + scroll indicator

**Files:** `Hero.tsx`, `Hero.scss`

### 7. Marquee — Trust Ticker
- Scrolling pill badges
- Glowing dots
- Gradient fade edges

**Files:** `Marquee.tsx`, `Marquee.scss`

---

## 🎯 Design Principles

### Organic-Clinical Balance

**Clinical (Professional):**
- Structured grids
- White cards
- Trust signals (CQC, ratings)
- Clean typography

**Organic (Warm):**
- Rounded corners (12-20px)
- Radial glows (5% opacity)
- Pill badges with glowing dots
- Warm blue accents
- Care hands photography

### Component Patterns

**Pill Badges:**
```scss
padding: 5px 14px;
background: var(--blue-light);
border-radius: 16px;
```

**Icon Badges:**
```scss
width: 32px;
height: 32px;
background: var(--blue-light);
border-radius: 8px;
```

**Gradient Buttons:**
```scss
background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
```

---

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

### Key Changes

- **About:** Grid → single column, image above content
- **Testimonials:** Two-column → single column
- **Map:** Floating card → stacked below map
- **Navbar:** Horizontal links → hamburger menu

---

## ⚡ Performance

- Lazy loading images
- Video compression (WebM)
- React code splitting
- Responsive image `sizes`
- CSS containment for animations

---

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states
- Alt text on images
- WCAG AA color contrast

---

## 📦 Required Assets

### Images
- `care-hands.jpg` — About section
- `heroBg.webm` — Hero video
- Logo SVG files

### Fonts
- Gambarino (Instrument Serif fallback)
- Switzer (DM Sans fallback)
- Crimson Pro

---

## 📄 Credits

**Design & Development:** Dan Gabrielle De Castro  
**Client:** Sycamore Cottage Residential Care Home  
**Year:** 2026

---

**Philosophy:** Warm blues (#2563eb, #93b4f7) create emotional connection, grounded by professional neutrals. Off-white backgrounds soften clinical feel. Subtle radial glows (5-6% opacity) add organic warmth without compromising professionalism.
