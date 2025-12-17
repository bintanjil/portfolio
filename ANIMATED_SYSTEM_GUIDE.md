# Complete Animated Background System - Production Guide

## 📦 Installation & Setup

### Prerequisites
- Next.js 14+ (App Router)
- React 18+
- TypeScript 5+
- Tailwind CSS 3+

### File Structure
```
component/
├── AnimatedBackground/
│   ├── index.tsx          # Main component
│   ├── types.ts           # TypeScript definitions
│   ├── animations.ts      # Animation generators
│   └── presets.ts         # Color theme presets
├── GlassCard/
│   ├── index.tsx          # Glass card component
│   └── types.ts           # TypeScript definitions
```

## 🎨 AnimatedBackground Component

### Basic Usage

```tsx
import AnimatedBackground from "@/component/AnimatedBackground";

export default function HeroSection() {
  return (
    <AnimatedBackground>
      <div className="container mx-auto py-20">
        <h1>Welcome to My Portfolio</h1>
      </div>
    </AnimatedBackground>
  );
}
```

### Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | required | Content to render inside |
| `blobColors` | string[] | theme colors | Array of hex color codes |
| `blobCount` | number | 3 | Number of blobs (2-5) |
| `animationSpeed` | 'slow'\|'medium'\|'fast' | 'medium' | Animation speed |
| `pattern` | AnimationPattern | 'perlin-noise' | Animation pattern type |
| `theme` | ColorTheme | 'purple-pink' | Preset color theme |
| `intensity` | 'low'\|'medium'\|'high' | 'medium' | Opacity intensity |
| `enableParallax` | boolean | false | Enable scroll parallax |
| `enableMouseInteraction` | boolean | false | Enable mouse tracking |
| `className` | string | '' | Additional CSS classes |
| `bgGradient` | string | theme gradient | Tailwind gradient classes |

### Animation Patterns

#### 1. Perlin Noise Movement (Default)
Smooth organic random motion like underwater currents.

```tsx
<AnimatedBackground pattern="perlin-noise" animationSpeed="medium">
  <YourContent />
</AnimatedBackground>
```

#### 2. Circular Orbit
Gentle elliptical paths with different speeds.

```tsx
<AnimatedBackground pattern="circular-orbit" animationSpeed="slow">
  <YourContent />
</AnimatedBackground>
```

#### 3. Diagonal Drift
Slow diagonal movement looping from edges.

```tsx
<AnimatedBackground pattern="diagonal-drift" animationSpeed="slow">
  <YourContent />
</AnimatedBackground>
```

#### 4. Figure-8 Pattern
Infinity symbol tracing movement.

```tsx
<AnimatedBackground pattern="figure-8" animationSpeed="medium">
  <YourContent />
</AnimatedBackground>
```

#### 5. Random Walk
Smooth direction changes at intervals.

```tsx
<AnimatedBackground pattern="random-walk" animationSpeed="fast">
  <YourContent />
</AnimatedBackground>
```

### Color Themes

#### Purple-Pink (Default)
```tsx
<AnimatedBackground theme="purple-pink">
  <YourContent />
</AnimatedBackground>
```

#### Blue-Teal
```tsx
<AnimatedBackground theme="blue-teal">
  <YourContent />
</AnimatedBackground>
```

#### Green-Yellow
```tsx
<AnimatedBackground theme="green-yellow">
  <YourContent />
</AnimatedBackground>
```

#### Monochrome
```tsx
<AnimatedBackground theme="monochrome">
  <YourContent />
</AnimatedBackground>
```

#### Custom Colors
```tsx
<AnimatedBackground 
  theme="custom"
  blobColors={["#ff6b6b", "#4ecdc4", "#45b7d1", "#feca57"]}
  bgGradient="from-[#1a0a0e] via-[#2a1520] to-[#1a0a0e]"
>
  <YourContent />
</AnimatedBackground>
```

### Intensity Levels

```tsx
{/* Low intensity - subtle effect */}
<AnimatedBackground intensity="low">
  <YourContent />
</AnimatedBackground>

{/* Medium intensity - balanced */}
<AnimatedBackground intensity="medium">
  <YourContent />
</AnimatedBackground>

{/* High intensity - prominent effect */}
<AnimatedBackground intensity="high">
  <YourContent />
</AnimatedBackground>
```

### Advanced Features

#### Parallax Effect
```tsx
<AnimatedBackground 
  enableParallax={true}
  pattern="circular-orbit"
  animationSpeed="slow"
>
  <YourContent />
</AnimatedBackground>
```

#### Mouse Interaction
```tsx
<AnimatedBackground 
  enableMouseInteraction={true}
  intensity="high"
>
  <YourContent />
</AnimatedBackground>
```

#### Combined Features
```tsx
<AnimatedBackground 
  theme="blue-teal"
  blobCount={4}
  pattern="figure-8"
  animationSpeed="medium"
  intensity="high"
  enableParallax={true}
  enableMouseInteraction={true}
>
  <YourContent />
</AnimatedBackground>
```

## 🔮 GlassCard Component

### Basic Usage

```tsx
import GlassCard from "@/component/GlassCard";

export default function Card() {
  return (
    <GlassCard>
      <h2>Card Title</h2>
      <p>Card content goes here</p>
    </GlassCard>
  );
}
```

### Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | required | Content to render inside |
| `className` | string | '' | Additional CSS classes |
| `blurIntensity` | BlurIntensity | 'medium' | Backdrop blur strength |
| `borderOpacity` | BorderOpacity | 'medium' | Border transparency |
| `hoverEffect` | HoverEffect | 'lift' | Hover interaction effect |
| `padding` | PaddingSize | 'medium' | Internal padding |
| `as` | ElementType | 'div' | HTML element type |
| `glowColor` | string | '#8b5cf6' | Glow effect color |
| `animated` | boolean | true | Enable animations |

### Blur Intensity

```tsx
{/* Light blur */}
<GlassCard blurIntensity="light">
  <Content />
</GlassCard>

{/* Medium blur (default) */}
<GlassCard blurIntensity="medium">
  <Content />
</GlassCard>

{/* Strong blur */}
<GlassCard blurIntensity="strong">
  <Content />
</GlassCard>

{/* Extra strong blur */}
<GlassCard blurIntensity="extra-strong">
  <Content />
</GlassCard>
```

### Border Opacity

```tsx
<GlassCard borderOpacity="none">No border</GlassCard>
<GlassCard borderOpacity="low">Subtle border</GlassCard>
<GlassCard borderOpacity="medium">Medium border</GlassCard>
<GlassCard borderOpacity="high">Prominent border</GlassCard>
```

### Hover Effects

```tsx
{/* Lift effect (default) */}
<GlassCard hoverEffect="lift">
  <Content />
</GlassCard>

{/* Glow effect */}
<GlassCard hoverEffect="glow" glowColor="#ec4899">
  <Content />
</GlassCard>

{/* Scale effect */}
<GlassCard hoverEffect="scale">
  <Content />
</GlassCard>

{/* Shine effect */}
<GlassCard hoverEffect="shine">
  <Content />
</GlassCard>

{/* No hover effect */}
<GlassCard hoverEffect="none">
  <Content />
</GlassCard>
```

### Padding Sizes

```tsx
<GlassCard padding="none">No padding</GlassCard>
<GlassCard padding="small">Small padding</GlassCard>
<GlassCard padding="medium">Medium padding</GlassCard>
<GlassCard padding="large">Large padding</GlassCard>
<GlassCard padding="xl">Extra large padding</GlassCard>
```

## 📱 Complete Page Examples

### Hero Section
```tsx
import AnimatedBackground from "@/component/AnimatedBackground";
import GlassCard from "@/component/GlassCard";

export default function Hero() {
  return (
    <AnimatedBackground
      theme="purple-pink"
      pattern="perlin-noise"
      animationSpeed="slow"
      intensity="high"
      enableMouseInteraction={true}
    >
      <div className="min-h-screen flex items-center justify-center px-4">
        <GlassCard 
          padding="xl"
          hoverEffect="glow"
          blurIntensity="strong"
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Full-Stack Developer & Creative Problem Solver
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors">
              View Projects
            </button>
            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors">
              Contact Me
            </button>
          </div>
        </GlassCard>
      </div>
    </AnimatedBackground>
  );
}
```

### Skills Section
```tsx
import AnimatedBackground from "@/component/AnimatedBackground";
import GlassCard from "@/component/GlassCard";

export default function Skills() {
  const skills = [
    { name: "React & Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Database Design", level: 88 },
  ];

  return (
    <AnimatedBackground
      theme="blue-teal"
      pattern="circular-orbit"
      animationSpeed="medium"
      blobCount={4}
    >
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            My Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <GlassCard 
                key={skill.name}
                hoverEffect="lift"
                padding="large"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {skill.name}
                  </h3>
                  <span className="text-purple-400 font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}
```

### Projects Grid
```tsx
import AnimatedBackground from "@/component/AnimatedBackground";
import GlassCard from "@/component/GlassCard";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce with Next.js and Stripe",
      image: "/projects/ecommerce.jpg",
      tags: ["Next.js", "TypeScript", "Stripe"],
    },
    {
      title: "Task Management App",
      description: "Real-time collaboration with WebSockets",
      image: "/projects/taskapp.jpg",
      tags: ["React", "Node.js", "Socket.io"],
    },
    // Add more projects...
  ];

  return (
    <AnimatedBackground
      theme="green-yellow"
      pattern="figure-8"
      animationSpeed="medium"
      intensity="medium"
      enableParallax={true}
    >
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <GlassCard padding="large" className="mb-12">
            <h2 className="text-4xl font-bold text-white text-center">
              Featured Projects
            </h2>
            <p className="text-gray-300 text-center mt-4">
              Here are some of my recent works
            </p>
          </GlassCard>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <GlassCard
                key={project.title}
                hoverEffect="glow"
                glowColor="#10b981"
                padding="none"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}
```

### Contact Section
```tsx
import AnimatedBackground from "@/component/AnimatedBackground";
import GlassCard from "@/component/GlassCard";

export default function Contact() {
  return (
    <AnimatedBackground
      theme="monochrome"
      pattern="random-walk"
      animationSpeed="slow"
      blobCount={2}
      intensity="low"
    >
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full">
          <GlassCard 
            padding="xl"
            blurIntensity="extra-strong"
            hoverEffect="shine"
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Get In Touch
            </h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white backdrop-blur-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white backdrop-blur-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2 font-medium">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white backdrop-blur-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </GlassCard>
        </div>
      </section>
    </AnimatedBackground>
  );
}
```

## ⚡ Performance Optimization

### Best Practices

1. **Limit Blob Count**: Use 2-4 blobs for optimal performance
2. **Intersection Observer**: Animations pause when off-screen (built-in)
3. **Hardware Acceleration**: Uses CSS transforms (GPU-accelerated)
4. **Reduced Motion**: Respects `prefers-reduced-motion` preference
5. **Conditional Rendering**: Only renders when visible

### Performance Tips

```tsx
// ✅ Good - Reasonable blob count
<AnimatedBackground blobCount={3}>

// ❌ Avoid - Too many blobs
<AnimatedBackground blobCount={10}>

// ✅ Good - Slow speed for lower CPU usage
<AnimatedBackground animationSpeed="slow">

// ✅ Good - Low intensity for better readability
<AnimatedBackground intensity="low">
```

### Browser Support

- ✅ **Backdrop Filter**: All modern browsers
- ✅ **Fallback**: Solid background for unsupported browsers
- ✅ **CSS Transforms**: GPU-accelerated animations
- ✅ **Accessibility**: Full keyboard navigation and screen reader support

## 🎯 TypeScript Support

All components are fully typed. Import types as needed:

```tsx
import { 
  AnimationPattern, 
  AnimationSpeed, 
  ColorTheme,
  BlurIntensity,
  HoverEffect 
} from "@/component/AnimatedBackground";
```

## 📝 Integration Checklist

- [x] Install dependencies (Next.js, React, TypeScript, Tailwind)
- [x] Copy component files to your project
- [x] Import components in your pages
- [x] Customize colors and animations
- [x] Test on different devices
- [x] Verify accessibility (reduced motion)
- [x] Check performance in production build

## 🚀 Quick Start

```bash
# 1. Files are already in your project at:
# component/AnimatedBackground/
# component/GlassCard/

# 2. Use in any page:
import AnimatedBackground from "@/component/AnimatedBackground";
import GlassCard from "@/component/GlassCard";

# 3. Start customizing!
```

## 📚 Additional Resources

- Animation patterns inspired by nature and mathematics
- Glassmorphism design principles
- Performance optimization techniques
- Accessibility best practices

---

**Built with ❤️ for modern web experiences**
