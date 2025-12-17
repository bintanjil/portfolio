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
    id: 'healthcare-management-api',
    title: 'Healthcare Management API',
    description: 'Enterprise-grade 3-tier healthcare management system with RESTful API',
    status: 'completed',
    category: 'Backend Development',
    technologies: ['ASP.NET Core', 'C#', 'Entity Framework', 'SQL Server', 'RESTful API'],
    startDate: 'March 2024',
    completionDate: 'August 2024',
    highlights: [
      '3-tier architecture with BLL, DAL, and Application layers',
      'SOLID principles implementation for maintainability',
      'Code First approach with Entity Framework',
      'RESTful API endpoints for CRUD operations',
      'Patient records and appointment management',
      'Medical staff management system',
      'Concurrent database operations support'
    ]
  },

  // IN-PROGRESS PROJECTS
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description: 'A modern, interactive portfolio showcasing my skills, projects, and professional journey with real-time activity tracking and 3D graphics.',
    status: 'in-progress',
    category: 'Web Development',
    technologies: ['Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
    startDate: 'October 2024',
    progress: 85,
    github: 'https://github.com/bintanjil/portfolio',
    highlights: [
      'Real-time LeetCode, GitHub, and Codeforces activity tracking',
      'Interactive 3D components with Three.js',
      'Markdown-powered blog system',
      'Responsive design with dark theme'
    ]
  },

  // PLANNED PROJECTS
  {
    id: 'campfood',
    title: 'CampFood - Campus Food Cost Tracker',
    description: 'A web platform where students share and track prices, daily menus, and reviews of food options around their campus and university canteen, helping students budget better and find affordable meals.',
    status: 'planned',
    category: 'Web Development & Community',
    technologies: ['NestJS', 'Next.js', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
    startDate: 'Q1 2025',
    highlights: [
      'Price comparison across campus food options',
      'Daily menu tracking and notifications',
      'Student reviews and ratings',
      'Budget planning tools',
      'Location-based food discovery'
    ]
  },
  {
    id: 'devops-automation-suite',
    title: 'DevOps Automation Suite',
    description: 'A comprehensive toolkit for automating CI/CD pipelines, infrastructure provisioning, and deployment workflows.',
    status: 'planned',
    category: 'DevOps & Infrastructure',
    technologies: ['Docker', 'Kubernetes', 'Go', 'Terraform', 'Jenkins', 'AWS'],
    startDate: 'Q3 2025',
    highlights: [
      'One-click deployment pipelines',
      'Auto-scaling infrastructure',
      'Multi-cloud support',
      'Monitoring and logging integration'
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
