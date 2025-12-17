# Animated Background System - Usage Guide

## Overview
A reusable animated background system with floating gradient blobs and glassmorphic cards for your Next.js portfolio.

## Components

### 1. AnimatedBackground
Provides an animated background with floating gradient blobs.

#### Props
```typescript
interface AnimatedBackgroundProps {
  children: ReactNode;
  bgGradient?: string;           // Tailwind gradient classes
  blobColors?: string[];         // Array of hex colors for blobs
  blobCount?: number;            // Number of floating blobs (default: 3)
  animationSpeed?: "slow" | "medium" | "fast"; // Animation speed
  className?: string;            // Additional CSS classes
}
```

#### Usage Examples

**Basic Usage:**
```tsx
import AnimatedBackground from "@/component/common/AnimatedBackground";

export default function Page() {
  return (
    <AnimatedBackground>
      <div className="container mx-auto py-20">
        <h1>Your Content Here</h1>
      </div>
    </AnimatedBackground>
  );
}
```

**Custom Colors & Speed:**
```tsx
<AnimatedBackground
  blobColors={["#8b5cf6", "#ec4899", "#3b82f6", "#10b981"]}
  blobCount={4}
  animationSpeed="fast"
  bgGradient="from-purple-950 via-slate-900 to-black"
>
  <YourContent />
</AnimatedBackground>
```

**Purple Theme:**
```tsx
<AnimatedBackground
  blobColors={["#a855f7", "#c026d3", "#7c3aed"]}
  bgGradient="from-purple-950 via-purple-900 to-black"
>
  <YourContent />
</AnimatedBackground>
```

### 2. GlassCard
Glassmorphic card container with backdrop blur and semi-transparency.

#### Props
```typescript
interface GlassCardProps {
  children: ReactNode;
  className?: string;
  blurIntensity?: "light" | "medium" | "strong";
  bordered?: boolean;            // Show border (default: true)
  hoverable?: boolean;           // Add hover effects (default: false)
  padding?: "none" | "small" | "medium" | "large";
  as?: "div" | "section" | "article"; // HTML element type
}
```

#### Usage Examples

**Basic Card:**
```tsx
import GlassCard from "@/component/common/GlassCard";

<GlassCard>
  <h2>Card Title</h2>
  <p>Card content goes here</p>
</GlassCard>
```

**Hoverable Card with Strong Blur:**
```tsx
<GlassCard
  hoverable={true}
  blurIntensity="strong"
  padding="large"
>
  <h2>Interactive Card</h2>
  <p>This card has hover effects</p>
</GlassCard>
```

**Custom Card:**
```tsx
<GlassCard
  as="article"
  className="mb-8"
  bordered={false}
  padding="small"
>
  <BlogPost />
</GlassCard>
```

### 3. GlassContainer
Wrapper component for consistent spacing and max-width.

#### Props
```typescript
interface GlassContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  centerContent?: boolean;
}
```

#### Usage Example
```tsx
import GlassContainer from "@/component/common/GlassContainer";
import GlassCard from "@/component/common/GlassCard";

<GlassContainer maxWidth="xl">
  <GlassCard>
    <h2>Centered Content</h2>
  </GlassCard>
</GlassContainer>
```

## Complete Page Examples

### Example 1: Hero Section
```tsx
import AnimatedBackground from "@/component/common/AnimatedBackground";
import GlassCard from "@/component/common/GlassCard";
import GlassContainer from "@/component/common/GlassContainer";

export default function HeroSection() {
  return (
    <AnimatedBackground
      blobColors={["#8b5cf6", "#ec4899", "#3b82f6"]}
      animationSpeed="medium"
    >
      <GlassContainer maxWidth="xl">
        <div className="min-h-screen flex items-center justify-center">
          <GlassCard padding="large" hoverable={true}>
            <h1 className="text-5xl font-bold text-white mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-gray-300">
              Full Stack Developer & Problem Solver
            </p>
          </GlassCard>
        </div>
      </GlassContainer>
    </AnimatedBackground>
  );
}
```

### Example 2: Skills Section
```tsx
export default function SkillsSection() {
  return (
    <AnimatedBackground
      blobColors={["#10b981", "#06b6d4", "#3b82f6"]}
      blobCount={3}
      animationSpeed="slow"
      bgGradient="from-slate-950 via-blue-950 to-black"
    >
      <GlassContainer>
        <div className="py-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            My Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <GlassCard key={skill.name} hoverable={true}>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {skill.name}
                </h3>
                <p className="text-gray-400">{skill.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </GlassContainer>
    </AnimatedBackground>
  );
}
```

### Example 3: Projects Grid
```tsx
export default function ProjectsSection() {
  return (
    <AnimatedBackground
      blobColors={["#f59e0b", "#ef4444", "#ec4899"]}
      blobCount={4}
    >
      <section className="py-20">
        <GlassContainer maxWidth="2xl">
          <GlassCard padding="large" className="mb-12">
            <h2 className="text-4xl font-bold text-white text-center">
              Featured Projects
            </h2>
          </GlassCard>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <GlassCard
                key={project.id}
                hoverable={true}
                blurIntensity="strong"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-400">{project.description}</p>
              </GlassCard>
            ))}
          </div>
        </GlassContainer>
      </section>
    </AnimatedBackground>
  );
}
```

### Example 4: Contact Form
```tsx
export default function ContactSection() {
  return (
    <AnimatedBackground
      blobColors={["#8b5cf6", "#6366f1"]}
      blobCount={2}
      animationSpeed="slow"
    >
      <div className="min-h-screen flex items-center justify-center py-20">
        <GlassContainer maxWidth="md">
          <GlassCard padding="large" blurIntensity="strong">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Get In Touch
            </h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white backdrop-blur-sm focus:border-purple-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white backdrop-blur-sm focus:border-purple-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white backdrop-blur-sm focus:border-purple-500 focus:outline-none"
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
        </GlassContainer>
      </div>
    </AnimatedBackground>
  );
}
```

## Performance Optimization

### Best Practices
1. **Limit blob count**: Use 2-4 blobs maximum for best performance
2. **Use medium/slow speeds**: Smoother animations, less CPU usage
3. **Avoid nested AnimatedBackground**: Use once per page/section
4. **SSR Compatible**: All components are "use client" where needed

### Browser Support
- ✅ Modern browsers with backdrop-filter support
- ✅ Automatic fallback for older browsers (solid background)
- ✅ Responsive on all screen sizes
- ✅ 60fps animations with CSS transforms

## Color Schemes

### Purple Theme
```tsx
blobColors={["#8b5cf6", "#a855f7", "#c026d3"]}
bgGradient="from-purple-950 via-purple-900 to-black"
```

### Blue Theme
```tsx
blobColors={["#3b82f6", "#2563eb", "#1d4ed8"]}
bgGradient="from-blue-950 via-blue-900 to-black"
```

### Cyan/Teal Theme
```tsx
blobColors={["#06b6d4", "#14b8a6", "#10b981"]}
bgGradient="from-cyan-950 via-teal-900 to-black"
```

### Pink/Red Theme
```tsx
blobColors={["#ec4899", "#ef4444", "#f97316"]}
bgGradient="from-pink-950 via-red-900 to-black"
```

### Multi-color Theme
```tsx
blobColors={["#8b5cf6", "#ec4899", "#3b82f6", "#10b981", "#f59e0b"]}
bgGradient="from-slate-950 via-slate-900 to-black"
```

## Customization Tips

1. **Match your brand colors**: Use your primary colors in blobColors
2. **Adjust blur for readability**: Use "light" blur if text is hard to read
3. **Combine with existing sections**: Wrap your current sections
4. **Layer multiple cards**: Stack GlassCards for depth
5. **Animate content**: Use Framer Motion inside GlassCard

## Troubleshooting

### Blobs not visible
- Check blobColors contrast with bgGradient
- Increase blobCount
- Try different blurIntensity

### Performance issues
- Reduce blobCount to 2-3
- Use "slow" animationSpeed
- Check for nested AnimatedBackground components

### Content not showing
- Ensure children are passed correctly
- Check z-index conflicts
- Verify text colors (use light colors on dark bg)
