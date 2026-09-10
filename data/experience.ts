export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  link?: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    company: "Akij iBOS Limited",
    role: "Associate Backend Developer",
    period: "May 2026 – Present",
    location: "Dhaka, Bangladesh",
    link: "https://www.linkedin.com/in/tanjil-bin-mohiuddin-103a34246/",
    points: [
      "Spearheaded database optimization initiatives across multiple ERP modules, enhancing query performance and reducing data redundancy for enterprises including Bangladesh Military Academy (BMA), Paragon Group, and Prince Bazaar.",
      "Worked on diverse modules including inventory management, financial tracking, and workflow automation, driving significant business impact through improved system reliability and performance.",
      "Collaborated with cross-functional teams to analyze business pain points and continuously improve end-to-end ERP workflow performance.",
    ],
  },
  {
    company: "Akij iBOS Limited",
    role: "Backend Developer Intern",
    period: "Jan 2026 – Apr 2026",
    location: "Dhaka, Bangladesh",
    link: "https://www.linkedin.com/in/tanjil-bin-mohiuddin-103a34246/",
    points: [
      "Contributed to Managerium, a centralized ERP platform that automates business processes and streamlines cross-department workflows.",
      "Worked on an ERP project for Bangladesh Military Academy (BMA), designing and developing a pre-approval workflow.",
      "Optimized existing ERP modules to reduce redundant steps and improve overall workflow efficiency.",
      "Collaborated with team members to analyze pain points and continuously improve end-to-end ERP workflow performance.",
    ],
  },
];
