export interface RoadmapProject {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  category: string;
  technologies: string[];
  startDate?: string;
  completionDate?: string;
  link?: string;
  github?: string;
  progress?: number; // For in-progress projects (0-100)
  highlights?: string[];
}

export const roadmapProjects: RoadmapProject[] = [
  // COMPLETED PROJECTS
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description: 'A modern, interactive portfolio showcasing my skills, projects, and professional journey with real-time activity tracking and 3D graphics.',
    status: 'completed',
    category: 'Web Development',
    technologies: ['Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
    startDate: 'October 2024',
    completionDate: 'December 2024',
    link: 'https://yourportfolio.com',
    github: 'https://github.com/bintanjil/portfolio',
    highlights: [
      'Real-time LeetCode, GitHub, and Codeforces activity tracking',
      'Interactive 3D components with Three.js',
      'Markdown-powered blog system',
      'Responsive design with dark theme'
    ]
  },
  {
    id: 'task-management-app',
    title: 'Task Management Application',
    description: 'A full-stack task management app with team collaboration features, real-time updates, and project analytics.',
    status: 'completed',
    category: 'Full-Stack Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redux'],
    startDate: 'June 2024',
    completionDate: 'September 2024',
    highlights: [
      'Real-time collaboration with WebSocket',
      'Advanced filtering and search',
      'Role-based access control',
      'Email notifications'
    ]
  },

  // IN-PROGRESS PROJECTS
  {
    id: 'ai-code-assistant',
    title: 'AI-Powered Code Assistant',
    description: 'An intelligent VS Code extension that provides context-aware code suggestions, refactoring recommendations, and documentation generation.',
    status: 'in-progress',
    category: 'AI/ML & Developer Tools',
    technologies: ['TypeScript', 'OpenAI API', 'VS Code API', 'Python', 'TensorFlow'],
    startDate: 'November 2024',
    progress: 65,
    github: 'https://github.com/bintanjil/ai-code-assistant',
    highlights: [
      'Natural language to code conversion',
      'Smart refactoring suggestions',
      'Auto-generated documentation',
      'Code quality analysis'
    ]
  },
  {
    id: 'realtime-analytics-dashboard',
    title: 'Real-time Analytics Dashboard',
    description: 'A comprehensive dashboard for tracking application metrics, user behavior, and system performance in real-time.',
    status: 'in-progress',
    category: 'Data Visualization',
    technologies: ['Next.js', 'D3.js', 'WebSocket', 'PostgreSQL', 'Redis'],
    startDate: 'December 2024',
    progress: 40,
    highlights: [
      'Live data streaming',
      'Custom chart components',
      'Alert system for anomalies',
      'Export and reporting features'
    ]
  },

  // PLANNED PROJECTS
  {
    id: 'blockchain-voting-system',
    title: 'Blockchain-Based Voting System',
    description: 'A secure, transparent, and tamper-proof voting platform leveraging blockchain technology for elections and polls.',
    status: 'planned',
    category: 'Blockchain & Security',
    technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'IPFS'],
    startDate: 'Q1 2025',
    highlights: [
      'Immutable vote records',
      'Anonymous voting mechanism',
      'Smart contract-based verification',
      'Decentralized identity management'
    ]
  },
  {
    id: 'ai-health-tracker',
    title: 'AI Health & Fitness Tracker',
    description: 'A mobile app that uses AI to provide personalized health recommendations, workout plans, and nutrition guidance.',
    status: 'planned',
    category: 'Mobile Development & AI',
    technologies: ['React Native', 'TensorFlow Lite', 'Firebase', 'HealthKit', 'Python'],
    startDate: 'Q2 2025',
    highlights: [
      'Computer vision for exercise form correction',
      'Personalized meal planning',
      'Integration with wearable devices',
      'Progress tracking with AI insights'
    ]
  },
  {
    id: 'devops-automation-suite',
    title: 'DevOps Automation Suite',
    description: 'A comprehensive toolkit for automating CI/CD pipelines, infrastructure provisioning, and deployment workflows.',
    status: 'planned',
    category: 'DevOps & Infrastructure',
    technologies: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'AWS', 'Go'],
    startDate: 'Q2 2025',
    highlights: [
      'One-click deployment pipelines',
      'Auto-scaling infrastructure',
      'Multi-cloud support',
      'Monitoring and logging integration'
    ]
  },
  {
    id: 'social-learning-platform',
    title: 'Social Learning Platform',
    description: 'An interactive platform where developers can learn together through code challenges, peer reviews, and collaborative projects.',
    status: 'planned',
    category: 'EdTech & Community',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Redis', 'Socket.io', 'Monaco Editor'],
    startDate: 'Q3 2025',
    highlights: [
      'Live code collaboration',
      'Peer-to-peer learning rooms',
      'Gamified learning paths',
      'Built-in code execution environment'
    ]
  },
  {
    id: 'microservices-ecommerce',
    title: 'Microservices E-commerce Platform',
    description: 'A scalable e-commerce platform built with microservices architecture, featuring advanced inventory management and payment processing.',
    status: 'planned',
    category: 'Microservices & Cloud',
    technologies: ['NestJS', 'Docker', 'Kubernetes', 'RabbitMQ', 'PostgreSQL', 'Redis'],
    startDate: 'Q4 2025',
    highlights: [
      'Service mesh architecture',
      'Event-driven communication',
      'Distributed caching',
      'API gateway with rate limiting'
    ]
  }
];

export function getCompletedProjects() {
  return roadmapProjects.filter(p => p.status === 'completed');
}

export function getInProgressProjects() {
  return roadmapProjects.filter(p => p.status === 'in-progress');
}

export function getPlannedProjects() {
  return roadmapProjects.filter(p => p.status === 'planned');
}
