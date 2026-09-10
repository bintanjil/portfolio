export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "healthcare-management-api",
    title: "Health Care Management API",
    description: "Enterprise-grade 3-tier healthcare management REST API",
    longDescription:
      "Built a 3-tier enterprise application following SOLID principles with Entity Framework using the Code First approach. Developed RESTful APIs for patient records, appointments, and medical staff management with concurrent database support.",
    technologies: ["ASP.NET", "C#", "Entity Framework", "SQL Server", "RESTful API"],
    features: [
      "3-tier architecture with clear separation of concerns",
      "SOLID principles and Code First Entity Framework",
      "RESTful APIs for patient records and appointments",
      "Medical staff management with concurrent database support",
    ],
    github:
      "https://github.com/bintanjil/Health-Care-Management-Api-Advanced-.Net",
    category: "Enterprise Application",
  },
  {
    id: "gadgeto-ecommerce",
    title: "Gadgeto – E-commerce Platform",
    description: "Full-stack e-commerce platform with catalog, orders, and authentication",
    longDescription:
      "Engineered a full-stack e-commerce platform with a product catalog, order processing, and user authentication. Implemented an admin panel with role-based access control, form validation (Zod), JWT authentication, and email notifications.",
    technologies: ["NestJS", "Next.js", "PostgreSQL", "JWT", "Zod", "Axios", "Mailer"],
    features: [
      "Product catalog and order processing",
      "User authentication with JWT",
      "Admin panel with role-based access control",
      "Form validation with Zod and email notifications",
    ],
    github: "https://github.com/bintanjil/the-gadgeto-backend",
    demo: "https://github.com/bintanjil/The-Gadgeto-an-Ecommerce-Platform",
    category: "Full-Stack Development",
  },
];
