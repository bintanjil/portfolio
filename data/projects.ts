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
    id: "healthcare-management-api",
    title: "Healthcare Management API",
    description: "Enterprise-grade 3-tier healthcare management system with RESTful API",
    longDescription: "Architected a robust 3-tier enterprise application using ASP.NET with clear separation of concerns across Business Logic Layer (BLL), Data Access Layer (DAL), and Application Layer. Implemented SOLID principles and Code First approach with Entity Framework to ensure scalable and maintainable architecture supporting concurrent database operations.",
    image: "/projects/healthcare.jpg",
    technologies: ["ASP.NET", "C#", "Entity Framework", "SQL Server", "RESTful API"],
    features: [
      "3-tier architecture with BLL, DAL, and Application layers",
      "SOLID principles implementation for maintainability",
      "Code First approach with Entity Framework",
      "RESTful API endpoints for CRUD operations",
      "Patient records and appointment management",
      "Medical staff management system",
      "Concurrent database operations support"
    ],
    github: "https://github.com/bintanjil/healthcare-api",
    category: "Enterprise Application"
  },
  {
    id: "gadgeto-ecommerce",
    title: "Gadgeto - E-commerce Platform",
    description: "Full-stack e-commerce platform with comprehensive product catalog and order processing",
    longDescription: "Engineered a complete e-commerce solution using NestJS for backend, Next.js for frontend, and PostgreSQL for database. Features include comprehensive product catalog, order processing, admin panel with role-based access control, and automated email notifications.",
    image: "/projects/gadgeto.jpg",
    technologies: ["NestJS", "Next.js", "PostgreSQL", "JWT", "Zod", "Axios", "Mailer"],
    features: [
      "Comprehensive product catalog management",
      "Order processing and tracking system",
      "Admin panel with role-based access control",
      "Product, user, and order management",
      "Efficient inventory tracking",
      "User administration dashboard",
      "Form validation with Zod",
      "Secure authentication with JWT",
      "Automated email notifications via Mailer",
      "API communication with Axios"
    ],
    github: "https://github.com/bintanjil/gadgeto-backend",
    demo: "https://github.com/bintanjil/gadgeto-frontend",
    category: "Full-Stack Development"
  }
];
