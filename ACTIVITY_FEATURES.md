# Activity & Timeline Features

## 🎯 What Was Added

### New Pages & Components

1. **Activity Page** (`/activity`)
   - Platform statistics (LeetCode, GitHub, Codeforces)
   - Contribution heatmap
   - Interactive charts and graphs
   - Coding journey timeline

2. **Components Created**:
   - `PlatformStats.tsx` - Shows stats from coding platforms
   - `ActivityCharts.tsx` - Multiple chart types using Recharts
   - `CodingJourneyTimeline.tsx` - Visual timeline of your journey
   - `ContributionHeatmap.tsx` - GitHub-style activity heatmap

3. **Data File** (`data/activityData.ts`)
   - Centralized data management
   - Easy to update with real stats

## 📊 Charts Included

- **Line Chart**: Monthly activity across platforms
- **Pie Chart**: Problem difficulty distribution
- **Area Chart**: Contest rating progress
- **Bar Charts**: Skills by category (Languages, Frameworks, Fundamentals)
- **Radar Chart**: Overall skill distribution
- **Heatmap**: Year-long contribution activity

## 🔧 How to Update Your Data

### 1. Update Platform Usernames & Stats

Edit `data/activityData.ts`:

```typescript
export const codingPlatforms = {
  leetcode: {
    username: "your_leetcode_username", // ← Change this
    totalSolved: 450,                   // ← Update your stats
    currentStreak: 45,
    // ... etc
  },
  github: {
    username: "your_github_username",   // ← Change this
    // ... update stats
  },
  codeforces: {
    username: "your_cf_username",       // ← Change this
    // ... update stats
  },
};
```

### 2. Update Timeline

Modify the `journeyTimeline` array with your actual milestones:

```typescript
{
  year: "2024",
  title: "Your Achievement",
  description: "What you did",
  achievements: ["Achievement 1", "Achievement 2"],
  icon: "🚀",
}
```

### 3. Update Activity Data

Modify `monthlyActivity`, `contestHistory`, and other arrays with your real data.

## 🔌 Future: Connect to Real APIs

To get live data instead of static data, you can:

### LeetCode API
```typescript
// Example: Fetch from LeetCode GraphQL API
const response = await fetch('https://leetcode.com/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        submitStats { acSubmissionNum { difficulty count } }
      }
    }`,
    variables: { username: "your_username" }
  })
});
```

### GitHub API
```typescript
// Example: Fetch GitHub stats
const response = await fetch('https://api.github.com/users/your_username');
const data = await response.json();
```

### Codeforces API
```typescript
// Example: Fetch CF user info
const response = await fetch('https://codeforces.com/api/user.info?handles=your_username');
const data = await response.json();
```

## 🎨 Customization

### Change Colors

In each component, update the gradient colors:
- `from-indigo-500` → `from-blue-500`
- `to-violet-500` → `to-cyan-500`

### Add More Charts

Recharts supports many chart types:
- Composed Chart
- Scatter Chart
- Treemap
- Sankey Diagram

Import and use them in `ActivityCharts.tsx`

## 📱 Features

✅ Fully responsive
✅ Dark theme matching your portfolio
✅ Smooth animations with Framer Motion
✅ Interactive tooltips
✅ Optimized for performance

## 🚀 Next Steps

1. Update `data/activityData.ts` with your real data
2. Replace placeholder usernames with actual ones
3. Consider adding API routes to fetch live data
4. Customize timeline with your actual journey
5. Add more platforms if needed (HackerRank, CodeChef, etc.)

Visit `/activity` to see your coding journey!
