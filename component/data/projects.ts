export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with payment integration",
    longDescription: "Built a complete e-commerce solution with user authentication, product management, shopping cart, and secure payment processing.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and checkout",
      "Payment integration with Stripe",
      "Order tracking and management"
    ],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
    category: "Web Development"
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "A collaborative task management tool for teams",
    longDescription: "Real-time task management application with team collaboration features and progress tracking.",
    image: "/projects/taskmanager.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    features: [
      "Real-time collaboration",
      "Task assignment and tracking",
      "Project boards and timelines",
      "Team chat integration",
      "Progress analytics"
    ],
    github: "https://github.com/yourusername/taskmanager",
    demo: "https://taskmanager-demo.vercel.app",
    category: "Productivity"
  }
];
