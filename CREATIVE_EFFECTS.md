# Creative Unique Elements

This portfolio includes a collection of unique creative effects and interactive elements that enhance the user experience with a modern, cyberpunk aesthetic.

## Features Implemented

### 1. **ASCII Art Header** 🎨
Retro terminal-style intro screen that appears on page load.

**Location:** `component/effects/ASCIIArtHeader.tsx`

**Features:**
- ASCII art logo display
- System boot-up style text
- Auto-fades out after 3 seconds
- Animated pulse effect
- Terminal-style aesthetic

**Display:**
```
████████╗ █████╗ ███╗   ██╗     ██╗██╗██╗     
╚══██╔══╝██╔══██╗████╗  ██║     ██║██║██║     
   ██║   ███████║██╔██╗ ██║     ██║██║██║     
   ██║   ██╔══██║██║╚██╗██║██   ██║██║██║     
   ██║   ██║  ██║██║ ╚████║╚█████╔╝██║███████╗
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚════╝ ╚═╝╚══════╝

  ╔═══════════════════════════════╗
  ║   PORTFOLIO.SYS v2.0.25      ║
  ║   Loading Profile...          ║
  ║   Status: ONLINE              ║
  ╚═══════════════════════════════╝
```

**Usage:** Automatically displays on page load (integrated in ClientLayout)

---

### 2. **Matrix Rain Effect** 💚
Falling code animation inspired by The Matrix.

**Location:** `component/effects/MatrixRain.tsx`

**Features:**
- Canvas-based animation
- Random character generation (A-Z, 0-9, symbols)
- Adjustable speed and opacity
- Responsive to window resize
- Low opacity (20%) for subtle effect
- Fixed position background layer

**Technical Details:**
- Uses HTML5 Canvas API
- RequestAnimationFrame for smooth 60fps
- Characters: `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()`
- Font: 14px monospace
- Color: Indigo (#6366f1)

**Usage:** Automatically active site-wide (integrated in ClientLayout)

**Performance:** Optimized with fade trail effect instead of full clear

---

### 3. **Glitch Effects** ⚡
Cyberpunk-style glitch text effect on hover.

**Location:** `component/effects/GlitchText.tsx`

**Features:**
- RGB split effect (cyan/red shadows)
- Horizontal shake animation on hover
- Layered text with clip-path masks
- Framer Motion powered
- Accessibility-friendly (aria-hidden duplicates)

**Props:**
```tsx
{
  children: ReactNode;
  className?: string;
}
```

**Usage Example:**
```tsx
import { GlitchText } from "@/component/effects";

<GlitchText>
  <h1>Your Text Here</h1>
</GlitchText>
```

**Used in:** Hero section (wrapping the name)

**CSS Effects:**
- Cyan shadow: `translateX(-2px)`, clips top 45%
- Red shadow: `translateX(2px)`, clips bottom 45%
- Hover shake: `x: [0, -2, 2, -2, 2, 0]`

---

### 4. **Typing Animation** ⌨️
Terminal-style text reveal with typing and deleting effects.

**Location:** `component/effects/TypingAnimation.tsx`

**Features:**
- Multiple text rotation
- Customizable speeds
- Cursor blink effect
- Smooth character-by-character animation
- Pause between cycles

**Props:**
```tsx
{
  texts: string[];              // Array of texts to cycle through
  typingSpeed?: number;         // Speed per character (default: 100ms)
  deletingSpeed?: number;       // Delete speed (default: 50ms)
  pauseDuration?: number;       // Pause at end (default: 2000ms)
  className?: string;
}
```

**Usage Example:**
```tsx
import { TypingAnimation } from "@/component/effects";

<TypingAnimation
  texts={[
    "Full-Stack Developer",
    "Competitive Programmer",
    "Problem Solver"
  ]}
  typingSpeed={80}
  pauseDuration={2500}
/>
```

**Used in:** Hero section (subtitle rotation)

**Animation Cycle:**
1. Type text character by character
2. Pause for `pauseDuration`
3. Delete character by character
4. Move to next text
5. Repeat infinitely

---

### 5. **Sound Effects** 🔊
Subtle audio feedback with optional toggle.

**Location:** `component/effects/SoundEffects.tsx`

**Features:**
- Web Audio API synthesis
- Click sound (600Hz, 0.1s)
- Hover sound (400Hz, 0.05s)
- Global on/off toggle
- Volume control (0.1 max)
- Respects user preference

**Controls:**
- Fixed bottom-left button
- Toggle icon (Volume2/VolumeX)
- Glassmorphic styling
- Matches portfolio theme

**Technical Implementation:**
```tsx
const playSound = (frequency: number, duration: number) => {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.frequency.value = frequency;
  oscillator.type = "sine";
  gainNode.gain.value = 0.1; // Subtle volume
  
  oscillator.start();
  oscillator.stop(currentTime + duration);
};
```

**Event Binding:**
- Automatically attaches to all buttons and links
- Plays on click and hover
- No performance impact when disabled

**Usage:** Toggle button in bottom-left corner

---

### 6. **Music Player** 🎵
Background ambient music controller.

**Location:** `component/effects/MusicPlayer.tsx`

**Features:**
- Play/Pause controls
- Track switching
- Mute toggle
- Progress bar animation
- Modern UI design
- Glassmorphic card

**Tracks:**
- "Ambient Code"
- "Digital Dreams"
- "Cyber Waves"

**Controls:**
- Play/Pause button
- Skip Forward button
- Mute/Unmute button
- Animated progress bar (when playing)

**UI Position:** Fixed bottom-right corner

**Design:**
- Glassmorphic background (`bg-slate-900/90`)
- Backdrop blur effect
- Indigo border and shadows
- Smooth transitions
- Icon-based controls (lucide-react)

**Usage:** Automatically available site-wide (integrated in ClientLayout)

**Note:** Currently UI-only. To add actual audio, integrate HTML5 Audio or Web Audio API:
```tsx
const audioRef = useRef<HTMLAudioElement>(null);
<audio ref={audioRef} src="/music/track1.mp3" loop />
```

---

### 7. **Weather Widget** 🌤️
Real-time weather display for your location.

**Location:** `component/effects/WeatherWidget.tsx`

**Features:**
- Temperature display
- Weather condition icons
- Location name
- Auto-refresh
- Glassmorphic design

**Weather Icons:**
- ☀️ Sun (clear weather)
- 🌧️ CloudRain (rainy)
- ❄️ CloudSnow (snowy)
- ☁️ Cloud (cloudy)
- 💨 Wind (windy)

**UI Position:** Fixed top-right corner

**Current Implementation:**
- Shows Dhaka, Bangladesh weather
- Simulated data (28°C)
- Ready for API integration

**API Integration Guide:**
```tsx
// Using OpenWeatherMap API
const API_KEY = 'your_api_key';
const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=23.8103&lon=90.4125&appid=${API_KEY}&units=metric`
);
const data = await response.json();
setWeather({
  temp: Math.round(data.main.temp),
  condition: data.weather[0].main.toLowerCase(),
  location: `${data.name}, ${data.sys.country}`,
});
```

**Recommended APIs:**
- OpenWeatherMap (free tier available)
- WeatherAPI.com
- Visual Crossing Weather

---

## Integration Summary

### Global Elements (Active Site-Wide)
Added to `component/layout/ClientLayout.tsx`:
1. **ASCIIArtHeader** - Intro screen
2. **MatrixRain** - Background effect
3. **MusicPlayer** - Bottom-right corner
4. **WeatherWidget** - Top-right corner
5. **SoundEffects** - Bottom-left toggle

### Component-Specific Usage
- **Hero Section**:
  - `GlitchText` wrapping name
  - `TypingAnimation` for subtitle rotation
  
### CSS Animations Added
`app/globals.css`:
- `fadeOut` - ASCII art exit animation
- `progress` - Music player progress bar
- `glitch-skew` - Glitch effect utilities

---

## Customization Guide

### Changing ASCII Art
Edit the pre-formatted text in `ASCIIArtHeader.tsx`:
```tsx
{`
  Your ASCII art here
  Use https://patorjk.com/software/taag/
  Font: ANSI Shadow recommended
`}
```

### Adjusting Matrix Rain
Modify variables in `MatrixRain.tsx`:
```tsx
const chars = "ABC..."; // Character set
const fontSize = 14;    // Character size
ctx.fillStyle = "#6366f1"; // Color
```

### Customizing Typing Animation
Add/remove texts in Hero section:
```tsx
<TypingAnimation
  texts={[
    "Your Title 1",
    "Your Title 2",
    "Your Title 3"
  ]}
/>
```

### Weather Location
Change coordinates in `WeatherWidget.tsx`:
```tsx
const lat = 23.8103;  // Your latitude
const lon = 90.4125;  // Your longitude
```

---

## Performance Considerations

1. **Canvas Optimization**
   - Matrix Rain uses fade effect (no full clear)
   - Runs at ~20fps (50ms interval) for balance

2. **Sound System**
   - Only creates audio context when enabled
   - Stops oscillators after duration
   - No memory leaks

3. **Animation Efficiency**
   - CSS animations over JavaScript where possible
   - RequestAnimationFrame for smooth 60fps
   - Opacity-based effects for GPU acceleration

4. **State Management**
   - Minimal re-renders with local state
   - useEffect cleanup functions
   - Proper event listener removal

---

## Browser Support

- **Matrix Rain**: All modern browsers with Canvas API
- **Sound Effects**: Browsers supporting Web Audio API
- **Glitch Effects**: All browsers with CSS clip-path
- **Animations**: Full support in modern browsers

**Graceful Degradation:**
- Effects hidden when features unavailable
- No errors on unsupported browsers
- Core content always accessible

---

## Toggle Options

Users can control:
- ✅ **Sound Effects** - Toggle button (bottom-left)
- ✅ **Music Player** - Mute button (bottom-right)
- ⚡ **Matrix Rain** - Always on (low opacity)
- ⚡ **ASCII Art** - Auto-shows once on load

**Future Enhancements:**
- Settings panel for all effects
- User preference persistence (localStorage)
- Intensity sliders
- Color theme selection

---

## Dependencies

- `framer-motion` - Glitch animations
- `lucide-react` - Icons (Volume, Weather, Music)
- Web Audio API - Sound synthesis
- Canvas API - Matrix rain
- React hooks - State management

---

## Accessibility

1. **Sound Effects**: Optional, disabled by default
2. **Glitch Text**: Duplicate layers use `aria-hidden="true"`
3. **Animations**: Respect `prefers-reduced-motion`
4. **Controls**: Proper aria-labels on buttons
5. **Keyboard**: All controls keyboard-accessible

---

## Future Ideas

Potential additions:
- [ ] Code rain with actual code snippets
- [ ] More glitch effect variations
- [ ] Custom ASCII art generator
- [ ] Spotify integration for music
- [ ] Theme switcher (neon, cyberpunk, minimal)
- [ ] Konami code easter egg
- [ ] Voice commands integration
- [ ] 3D terminal hologram effect
