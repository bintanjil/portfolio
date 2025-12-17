// Activity data for LeetCode, GitHub, and Codeforces
export const codingPlatforms = {
  leetcode: {
    username: "tanjil_username", // Replace with actual username
    totalSolved: 450,
    easySolved: 180,
    mediumSolved: 220,
    hardSolved: 50,
    currentStreak: 45,
    maxStreak: 120,
    ranking: 12500,
  },
  github: {
    username: "tanjil_github", // Replace with actual username
    totalContributions: 1250,
    currentStreak: 30,
    maxStreak: 90,
    repositories: 35,
    stars: 120,
    followers: 85,
  },
  codeforces: {
    username: "tanjil_cf", // Replace with actual username
    rating: 1450,
    maxRating: 1520,
    contestsParticipated: 45,
    problemsSolved: 380,
    rank: "Specialist",
  },
};

// Monthly activity data (last 12 months)
export const monthlyActivity = [
  { month: "Jan", leetcode: 35, github: 95, codeforces: 25 },
  { month: "Feb", leetcode: 42, github: 110, codeforces: 30 },
  { month: "Mar", leetcode: 38, github: 105, codeforces: 28 },
  { month: "Apr", leetcode: 45, github: 120, codeforces: 35 },
  { month: "May", leetcode: 50, github: 115, codeforces: 32 },
  { month: "Jun", leetcode: 48, github: 108, codeforces: 30 },
  { month: "Jul", leetcode: 52, github: 125, codeforces: 38 },
  { month: "Aug", leetcode: 55, github: 130, codeforces: 40 },
  { month: "Sep", leetcode: 58, github: 118, codeforces: 35 },
  { month: "Oct", leetcode: 60, github: 135, codeforces: 42 },
  { month: "Nov", leetcode: 62, github: 140, codeforces: 45 },
  { month: "Dec", leetcode: 65, github: 145, codeforces: 48 },
];

// Coding journey timeline
export const journeyTimeline = [
  {
    year: "2022",
    title: "Started Coding Journey",
    description: "Began learning programming fundamentals and computer science basics",
    achievements: [
      "First 'Hello World' program",
      "Learned C++ programming basics",
      "Completed foundational algorithms"
    ],
    icon: "🎯",
  },
  {
    year: "2023",
    title: "Competitive Programming",
    description: "Entered the world of competitive programming and algorithmic problem solving",
    achievements: [
      "Started solving problems on Codeforces",
      "Participated in coding contests",
      "Built problem-solving foundation"
    ],
    icon: "🏆",
  },
  {
    year: "2024",
    title: "Reached Pupil Rank",
    description: "Achieved Pupil rank on Codeforces and expanded coding skills",
    achievements: [
      "Reached Pupil on Codeforces",
      "Solved 200+ competitive programming problems",
      "Started learning web development"
    ],
    icon: "⭐",
  },
  {
    year: "2025",
    title: "Full-Stack Development Focus",
    description: "Currently focusing on problem solving and modern web development",
    achievements: [
      "Active on LeetCode for problem solving",
      "Learning NestJS for backend development",
      "Learning React for frontend development",
      "Building real-world projects"
    ],
    icon: "🚀",
  },
];

// Weekly contribution heatmap data (last 52 weeks)
export const generateHeatmapData = () => {
  const data = [];
  const today = new Date();
  
  for (let i = 51; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i * 7);
    
    // Generate random contribution counts (replace with actual data)
    const contributions = Math.floor(Math.random() * 30) + 5;
    
    data.push({
      week: i,
      date: date.toISOString().split('T')[0],
      contributions,
      level: contributions < 10 ? 1 : contributions < 20 ? 2 : contributions < 25 ? 3 : 4,
    });
  }
  
  return data;
};

// Problem difficulty distribution
export const problemDistribution = [
  { name: "Easy", value: 180, color: "#10b981" },
  { name: "Medium", value: 220, color: "#f59e0b" },
  { name: "Hard", value: 50, color: "#ef4444" },
];

// Learning path progression
export const learningPath = [
  { skill: "C++", progress: 85, category: "Languages" },
  { skill: "JavaScript", progress: 90, category: "Languages" },
  { skill: "TypeScript", progress: 88, category: "Languages" },
  { skill: "Python", progress: 82, category: "Languages" },
  { skill: "C#", progress: 85, category: "Languages" },
  { skill: "React", progress: 92, category: "Frameworks" },
  { skill: "Next.js", progress: 90, category: "Frameworks" },
  { skill: "NestJS", progress: 85, category: "Frameworks" },
  { skill: "ASP.NET", progress: 87, category: "Frameworks" },
  { skill: "Data Structures", progress: 88, category: "CS Fundamentals" },
  { skill: "Algorithms", progress: 85, category: "CS Fundamentals" },
  { skill: "System Design", progress: 75, category: "CS Fundamentals" },
];

// Contest participation over time
export const contestHistory = [
  { month: "Jan", contests: 3, rating: 1350 },
  { month: "Feb", contests: 4, rating: 1380 },
  { month: "Mar", contests: 3, rating: 1395 },
  { month: "Apr", contests: 4, rating: 1420 },
  { month: "May", contests: 3, rating: 1435 },
  { month: "Jun", contests: 4, rating: 1450 },
  { month: "Jul", contests: 3, rating: 1465 },
  { month: "Aug", contests: 4, rating: 1480 },
  { month: "Sep", contests: 3, rating: 1495 },
  { month: "Oct", contests: 4, rating: 1510 },
  { month: "Nov", contests: 3, rating: 1520 },
  { month: "Dec", contests: 4, rating: 1450 },
];
