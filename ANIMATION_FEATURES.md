# Advanced Animation Features

This portfolio includes a comprehensive set of modern animation features to create an engaging user experience.

## Features Implemented

### 1. **Magnetic Cursor** 
Custom cursor with magnetic attraction to interactive elements.

**Location:** `component/animations/MagneticCursor.tsx`

**Features:**
- Smooth following outer ring
- Fast-following inner dot
- Magnetic effect on hover over buttons/links
- Color change on interaction
- Hidden on mobile devices

**Usage:** Automatically active site-wide (integrated in ClientLayout)

---

### 2. **Liquid Blob Cursor**
Smooth morphing blob that follows the mouse cursor.

**Location:** `component/animations/BlobCursor.tsx`

**Features:**
- Elastic smooth follow
- Velocity-based deformation
- Blur effect for liquid appearance
- Purple gradient colors
- Hidden on mobile devices

**Usage:** Automatically active site-wide (integrated in ClientLayout)

---

### 3. **Text Scramble Effect**
Cyberpunk-style text reveal with character scrambling.

**Location:** `component/animations/TextScramble.tsx`

**Props:**
```tsx
{
  text: string;              // Text to display
  className?: string;        // Additional CSS classes
  speed?: number;            // Reveal speed (default: 50ms)
  scrambleSpeed?: number;    // Scramble speed (default: 30ms)
  trigger?: boolean;         // Enable/disable effect
}
```

**Usage Example:**
```tsx
import { TextScramble } from "@/component/animations";

<TextScramble text="Hello World" scrambleSpeed={40} />
```

**Used in:** Hero section for name and title

---

### 4. **Scroll Reveal Animations**
Framer Motion-powered scroll-triggered reveal animations.

**Location:** `component/animations/ScrollReveal.tsx`

**Props:**
```tsx
{
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";  // Animation direction
  delay?: number;            // Delay in seconds
  duration?: number;         // Duration in seconds
  className?: string;
}
```

**Usage Example:**
```tsx
import { ScrollReveal } from "@/component/animations";

<ScrollReveal direction="up" delay={0.2}>
  <YourComponent />
</ScrollReveal>
```

**Used in:** About section, Projects section

---

### 5. **Parallax Sections**
Multi-layer depth scrolling effect.

**Location:** `component/animations/ParallaxSection.tsx`

**Props:**
```tsx
{
  children: ReactNode;
  speed?: number;            // Parallax intensity (default: 0.5)
  className?: string;
}
```

**Usage Example:**
```tsx
import { ParallaxSection } from "@/component/animations";

<ParallaxSection speed={0.8}>
  <YourComponent />
</ParallaxSection>
```

---

### 6. **Page Transitions**
Smooth animated transitions between routes.

**Location:** `component/animations/PageTransitionWrapper.tsx`

**Features:**
- Fade and slide animations
- Scale effect
- Waits for exit animation before entering
- Automatic based on route changes

**Usage:** Automatically active site-wide (integrated in ClientLayout)

---

### 7. **SVG Path Animations**
Animated line drawing effects for decorative elements.

**Location:** `component/animations/SVGPathAnimation.tsx`

**Props:**
```tsx
{
  path: string;              // SVG path data
  duration?: number;         // Animation duration (default: 2s)
  strokeColor?: string;      // Line color (default: "#6366f1")
  strokeWidth?: number;      // Line width (default: 2)
  className?: string;
  viewBox?: string;          // SVG viewBox (default: "0 0 100 100")
}
```

**Usage Example:**
```tsx
import { SVGPathAnimation } from "@/component/animations";

<SVGPathAnimation
  path="M 0 50 Q 100 0, 200 50 T 400 50"
  viewBox="0 0 400 100"
  strokeColor="#8b5cf6"
  strokeWidth={3}
  duration={2.5}
/>
```

**Used in:** About section as decorative element

---

## Integration

### Global Animations (Active Site-Wide)
Added to `component/layout/ClientLayout.tsx`:
- **MagneticCursor** - Custom cursor with magnetic effect
- **BlobCursor** - Liquid blob follower
- **PageTransitionWrapper** - Smooth page transitions

### Component-Level Animations
Used in specific sections:
- **Hero Section**: TextScramble for name and title
- **About Section**: ScrollReveal, SVGPathAnimation
- **Projects Section**: ScrollReveal

---

## Performance Considerations

1. **Desktop Only**: Magnetic and blob cursors are hidden on mobile (`hidden md:block`)
2. **Once Viewport**: ScrollReveal uses `viewport={{ once: true }}` to prevent re-triggering
3. **RequestAnimationFrame**: Cursor animations use RAF for smooth 60fps performance
4. **CSS Transform**: Animations use GPU-accelerated transforms
5. **Reduced Motion**: Framer Motion respects `prefers-reduced-motion`

---

## Customization

### Changing Cursor Colors
Edit the gradient/colors in:
- `MagneticCursor.tsx` - Change `border-indigo-500` and `bg-indigo-500`
- `BlobCursor.tsx` - Modify `radial-gradient` colors

### Adjusting Animation Speeds
Each component accepts speed/duration props. Default values can be modified in the component files.

### Adding More Scroll Reveals
Wrap any component with `<ScrollReveal>`:
```tsx
<ScrollReveal direction="right" delay={0.3}>
  <YourComponent />
</ScrollReveal>
```

---

## Browser Support

- **Modern browsers** with CSS `backdrop-filter` support
- **Framer Motion** animations work in all modern browsers
- **Cursor effects** disabled on touch devices
- Graceful degradation on older browsers

---

## Dependencies

- `framer-motion` - Animation library
- `next/navigation` - For pathname detection in page transitions
- React hooks (`useEffect`, `useRef`, `useState`)

---

## Future Enhancements

Potential additions:
- Magnetic effect strength customization
- More SVG animation presets
- Particle system integration
- 3D parallax with mouse movement
- Advanced text animations (typing, wave, glitch effects)
