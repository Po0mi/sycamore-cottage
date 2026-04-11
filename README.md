# Sycamore Cottage Website — Organic-Clinical Redesign

A modern, warm, and professional website redesign for Sycamore Cottage residential care home in Basingstoke, Hampshire. The design balances clinical precision with organic warmth to create a welcoming digital presence that inspires trust.

## 🎨 Design System

### Color Palette

The organic-clinical palette balances professionalism with approachability:

```scss
:root {
  // Neutrals — clean, clinical foundation
  --white: #ffffff;
  --off-white: #f5f6f8;      // Main background
  --gray-50: #eef0f3;         // Subtle borders
  --gray-100: #d8dce3;        // Dividers
  --gray-400: #8c93a0;        // Secondary text
  --gray-700: #3a3f4a;        // Body text
  --ink: #111318;             // Primary text, dark backgrounds

  // Blues — warm, trustworthy accents
  --blue: #2563eb;            // Primary blue
  --blue-light: #eff4ff;      // Tinted backgrounds
  --blue-mid: #93b4f7;        // Soft accents, overlays

  // Typography
  --font-display: var(--font-gambarino), "Instrument Serif", Georgia, serif;
  --font-body: var(--font-switzer), "DM Sans", sans-serif;
  --font-accent: var(--font-switzer), "Crimson Pro", Georgia, serif;

  // Animation
  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  // Breakpoints
  --bp-mobile: 640px;
  --bp-tablet: 1024px;
}
```

### Typography Scale

- **Display headings:** Gambarino / Instrument Serif (italic for emphasis)
- **Body text:** Switzer / DM Sans (clean, readable)
- **Accent text:** Switzer / Crimson Pro (quotes, special elements)

**Font weights:**
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600

**Sizing:** Fluid typography using `clamp()` for responsive scaling

### Spacing & Layout

- **Container max-width:** 1200px (sections), 1000px (content blocks)
- **Section padding:** `clamp(4rem, 8vw, 6rem)` vertical
- **Card gaps:** 1rem (desktop), 0.75rem (mobile)
- **Border radius:**
  - Small elements: 8-12px
  - Cards: 14-16px
  - Containers: 16-20px
  - Pills/badges: 20-24px (full rounded)

### Component Patterns

#### Pill Badges
```scss
.pill-badge {
  padding: 5px 14px;
  background: var(--blue-light);
  border-radius: 16px;
  border: 1px solid rgba(37, 99, 235, 0.12);
  font-size: 0.5625rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--blue);
}
```

#### Icon Badges
```scss
.icon-badge {
  width: 32px;
  height: 32px;
  background: var(--blue-light);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--blue);
}
```

#### Cards
```scss
.card {
  background: var(--white);
  border: 1px solid var(--gray-50);
  border-radius: 14px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(17, 19, 24, 0.08),
              0 1px 3px rgba(17, 19, 24, 0.04);
}
```

#### Gradient Buttons
```scss
.btn-primary {
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, var(--blue) 0%, #1d4ed8 100%);
  border-radius: 12px;
  color: var(--white);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);
  }
}
```

#### Radial Glows (Organic Warmth)
```scss
.glow {
  position: absolute;
  width: 120px;
  height: 120px;
  background: radial-gradient(
    circle,
    rgba(37, 99, 235, 0.05) 0%,
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
}
```

## 📐 Redesigned Sections

### 1. About Section — Bento Grid
**Layout:** 12-column responsive grid
- Large card (8 cols): Personalised Care Plans + care hands photo
- Accent card (4 cols): Medication Monitoring (gradient background)
- Medium cards (6 cols each): Here For You, Experienced Staff

**Features:**
- Photo integration (split layout: content left, image right)
- Icon badges (52px large, 44px medium/accent)
- Pill tags on large card
- Radial glow backgrounds
- Hover lift effect

**Files:** `About.tsx`, `About.scss`, `care-hands.jpg`

### 2. Testimonials Section — Soft Card Layout
**Layout:** Centered content with card hierarchy
- Header with 9.8 rating badge (bordered)
- Featured CQC card (full-width, radial glow, pill badge)
- Two-column mini cards with footer separators

**Features:**
- Organic background shape (subtle circle)
- All white cards on off-white background
- Rounded corners (14-16px)
- Clean border separators
- Hover state transitions

**Files:** `Testimonials.tsx`, `Testimonials.scss`

### 3. Contact Section — CTA-Focused
**Layout:** Centered vertical stack
- Pill label badge
- Large heading with italic emphasis
- Descriptive subheading
- Gradient CTA button
- Minimal contact details (bordered section)
- Compact trust badges (inline)

**Features:**
- "Visit" background text (very subtle)
- Flowing gradient background
- Dark ink background (#111318)
- Bordered detail section
- Full-width CTA on small mobile

**Files:** `Contact.tsx`, `Contact.scss`

### 4. Map Section — Full Bleed Split
**Layout:** Full-screen map + floating frosted glass card
- Map fills entire section (520px height)
- Floating card (340px wide, right-center positioned)
- Icon badges (32px squares) for details

**Features:**
- Backdrop blur frosted glass effect
- Dramatic elevation (dual shadows)
- Pill badge with dot
- Heading with italic emphasis
- Pulsing pin animation
- Two details only (Address + Hours)

**Files:** `MapSection.tsx`, `MapSection.scss`

### 5. Navbar — Pill Nav
**Layout:** Fixed header with state transitions
- Transparent → white background on scroll
- Height: 72px → 60px
- Pill-shaped nav items (active state)
- Gradient CTA button

**Features:**
- Logo with rounded icon badge
- Smooth scroll transitions
- Mobile hamburger menu
- Backdrop blur on scrolled state

**Files:** `Navbar.tsx`, `Navbar.scss`

### 6. Hero — Centered Warmth
**Layout:** Full-screen video background with centered content
- Pill label with glowing dot
- Large heading with italic emphasis
- Gradient CTA button
- Soft trust badges below
- Border-top divider
- Scroll indicator

**Features:**
- Dark gradient overlay
- Organic circle background (top-right)
- Rounded trust badge pills
- Circular icon badges (32px)
- Bouncing scroll animation

**Files:** `Hero.tsx`, `Hero.scss`

### 7. Marquee — Pill Badge Ticker
**Layout:** Horizontal scrolling trust signals
- Pill-shaped items
- Glowing blue dots with shadow rings
- Gradient fade edges (left/right)

**Features:**
- Semi-transparent backgrounds
- Off-white section background
- Continuous scroll animation
- Hover pause
- Smooth infinite loop

**Files:** `Marquee.tsx`, `Marquee.scss`

## 🎯 Design Principles

### Organic-Clinical Balance

The design achieves balance through:

**Clinical (Professional):**
- Structured layouts and grids
- Clean white cards
- Official trust signals (CQC, ratings)
- Professional typography
- Precise spacing

**Organic (Warm):**
- Soft rounded corners (12-20px)
- Radial glows and subtle gradients
- Pill badges with glowing dots
- Warm blue accents (#93b4f7)
- Gentle transitions and animations
- Care hands photography

### Visual Hierarchy

1. **Primary:** Large display headings (italic emphasis), gradient CTA buttons
2. **Secondary:** Card titles, icon badges, trust signals
3. **Tertiary:** Body text, descriptions, labels
4. **Accent:** Blue elements, pill badges, active states

### Interaction States

**Hover (desktop only):**
```scss
@media (hover: hover) and (pointer: fine) {
  &:hover {
    transform: translateY(-2px);
    // or background color change
  }
}
```

**Active (all devices):**
```scss
&:active {
  transform: scale(0.99);
}
```

**Transitions:**
- Standard: `0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- Fast: `0.18s` for subtle state changes
- Slow: `0.4s` for major transformations

## 📱 Responsive Behavior

### Breakpoints
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

### Key Responsive Changes

**About Section:**
- Desktop: 12-column grid, large card 8 cols + image right
- Tablet: Cards stack to full width
- Mobile: Single column, image above content

**Testimonials:**
- Desktop: Two-column mini cards
- Mobile: Single column stack

**Contact:**
- Desktop: Centered 540px max-width
- Mobile: Full-width CTA button

**Map:**
- Desktop: Floating card right-center
- Mobile: Card becomes relative block below map

**Navbar:**
- Desktop: Horizontal nav links, pill active states
- Mobile: Hamburger menu, full-screen overlay

## 🚀 Technical Implementation

### Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** SCSS Modules
- **Animations:** GSAP (ScrollTrigger, timeline animations)
- **Maps:** Leaflet with custom markers
- **Images:** Next.js Image component (optimized)

### Performance Optimizations
- Lazy loading for images
- Video compression (WebM format)
- `React.lazy` for code splitting
- Responsive image sizes with `sizes` attribute
- CSS containment for animations

### Accessibility
- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Alt text on all images
- Sufficient color contrast (WCAG AA)

## 📦 Assets Required

### Images
- `care-hands.jpg` — About section care photo (hands holding)
- `heroBg.webm` — Hero video background
- Logo SVG files (tree icon, full wordmark)

### Fonts
- **Gambarino** (or Instrument Serif fallback) — Display
- **Switzer** (or DM Sans fallback) — Body
- **Crimson Pro** — Accent (quotes)

## 🎨 Component Inventory

### Shared Components
- Pill badges (labels, tags)
- Icon badges (rounded squares)
- Gradient buttons (CTA, primary actions)
- Cards (white, bordered, elevated)
- Radial glows (organic backgrounds)
- Trust signals (ratings, badges)

### Section-Specific
- Bento grid (About)
- Frosted glass card (Map)
- Floating elements (Map card, scroll indicator)
- Marquee ticker (trust signals)
- Pulsing pin (Map marker)

## 📝 Content Guidelines

### Tone of Voice
- **Professional but warm**
- **Confident but humble**
- **Informative but conversational**

### Messaging Hierarchy
1. **Emotional connection:** "Care that feels like home"
2. **Trust signals:** CQC, ratings, experience
3. **Specific benefits:** Personalised plans, 24/7 support
4. **Call to action:** Book a tour, learn more

## 🔧 Future Enhancements

Potential additions:
- CMS integration for content management
- Blog section for care advice
- Photo gallery for facility tours
- Family portal login
- Online booking system
- Accessibility settings panel

## 📄 License & Credits

**Design & Development:** Dan Gabrielle De Castro  
**Client:** Sycamore Cottage Residential Care Home  
**Year:** 2026

---

**Color Palette Philosophy:**  
The organic-clinical palette uses warm blues (#2563eb, #93b4f7) as the emotional core, grounded by professional neutrals. Off-white (#f5f6f8) backgrounds soften the clinical feel, while ink (#111318) adds weight and contrast. Subtle radial glows (5-6% opacity) add organic warmth without compromising professionalism.
