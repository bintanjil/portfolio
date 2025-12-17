import { NextRequest, NextResponse } from "next/server";
import { HfInference } from "@huggingface/inference";

// Initialize Hugging Face client
const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

// Knowledge base about Tanjil
const KNOWLEDGE_BASE = {
  name: "Tanjil Bin Mohiuddin",
  title: "Full Stack Developer & Competitive Programmer",
  location: "Dhaka, Bangladesh",
  education: "Computer Science student at AIUB (American International University-Bangladesh)",
  email: "tanjilm445@gmail.com",
  phone: "+8801886423370",
  
  skills: {
    frontend: ["React (Advanced)", "Next.js (Advanced)", "HTML/CSS", "JavaScript (Advanced)"],
    backend: ["ASP.NET (Advanced)", "NestJS (Advanced)", "Entity Framework", "RESTful APIs"],
    databases: ["PostgreSQL (Advanced)", "MySQL (Advanced)", "SQL Server"],
    programming: ["C++ (Advanced)", "Python", "TypeScript", "C#"],
    tools: ["Git", "GitHub", "Postman", "JWT"],
  },
  
  projects: [
    {
      name: "Healthcare Management API",
      description: "Enterprise-grade 3-tier healthcare management system",
      technologies: ["ASP.NET", "C#", "Entity Framework", "SQL Server"],
      features: ["3-tier architecture", "SOLID principles", "RESTful API", "patient records management"],
      github: "https://github.com/bintanjil/Health-Care-Management-Api-Advanced-.Net"
    },
    {
      name: "Gadgeto E-commerce Platform",
      description: "Full-stack e-commerce platform",
      technologies: ["NestJS", "Next.js", "PostgreSQL", "JWT"],
      features: ["Product catalog", "Order processing", "Admin panel", "Role-based access control"],
      github: "https://github.com/bintanjil/Gadgeto"
    }
  ],
  
  competitive: {
    codeforces: "https://codeforces.com/profile/tanjill",
    leetcode: "https://leetcode.com/u/tnjl/",
    achievements: "100+ problems solved on LeetCode",
  },
  
  social: {
    github: "https://github.com/bintanjil",
    linkedin: "https://www.linkedin.com/in/tanjil-bin-mohiuddin-103a34246/",
  },
  
  about: "Passionate about building scalable enterprise applications and solving complex algorithmic challenges. Focuses on clean code, best practices, and modern development methodologies."
};

// Keyword-based response generator (fallback)
function generateKeywordResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Who is Tanjil / About
  if (lowerMessage.match(/who\s+(is|are)|tell me about|about (tanjil|him|you)/)) {
    return `${KNOWLEDGE_BASE.name} is a ${KNOWLEDGE_BASE.title} from ${KNOWLEDGE_BASE.location}. He's currently a ${KNOWLEDGE_BASE.education}. ${KNOWLEDGE_BASE.about}`;
  }
  
  // Skills
  if (lowerMessage.match(/skill|technolog|know|can do|proficient/)) {
    return `Tanjil has expertise in multiple areas:\n\n**Frontend:** ${KNOWLEDGE_BASE.skills.frontend.join(", ")}\n\n**Backend:** ${KNOWLEDGE_BASE.skills.backend.join(", ")}\n\n**Databases:** ${KNOWLEDGE_BASE.skills.databases.join(", ")}\n\n**Programming:** ${KNOWLEDGE_BASE.skills.programming.join(", ")}\n\nHe specializes in building full-stack applications with ASP.NET and Next.js!`;
  }
  
  // Projects
  if (lowerMessage.match(/project|built|created|portfolio|work/)) {
    let response = "Tanjil has worked on several impressive projects:\n\n";
    KNOWLEDGE_BASE.projects.forEach((project, i) => {
      response += `${i + 1}. **${project.name}**: ${project.description}\n`;
      response += `   Technologies: ${project.technologies.join(", ")}\n`;
      response += `   GitHub: ${project.github}\n\n`;
    });
    return response;
  }
  
  // Contact
  if (lowerMessage.match(/contact|email|phone|reach|get in touch/)) {
    return `You can reach Tanjil at:\n\n📧 Email: ${KNOWLEDGE_BASE.email}\n📱 Phone: ${KNOWLEDGE_BASE.phone}\n💼 LinkedIn: ${KNOWLEDGE_BASE.social.linkedin}\n🐙 GitHub: ${KNOWLEDGE_BASE.social.github}`;
  }
  
  // Education
  if (lowerMessage.match(/education|study|student|university|college/)) {
    return `Tanjil is a ${KNOWLEDGE_BASE.education}. He's currently pursuing his degree while actively working on full-stack development projects and competitive programming.`;
  }
  
  // Competitive Programming
  if (lowerMessage.match(/competitive|codeforces|leetcode|problem|solving|algorithm/)) {
    return `Tanjil is an active competitive programmer!\n\n🏆 Codeforces: ${KNOWLEDGE_BASE.competitive.codeforces}\n💡 LeetCode: ${KNOWLEDGE_BASE.competitive.leetcode}\n\nHe has solved ${KNOWLEDGE_BASE.competitive.achievements} and continues to sharpen his problem-solving skills regularly.`;
  }
  
  // Experience
  if (lowerMessage.match(/experience|background|work/)) {
    return `Tanjil has strong experience in full-stack development, specializing in ASP.NET and NestJS for backend, and React/Next.js for frontend. He has built enterprise-grade applications including a healthcare management system and an e-commerce platform. His focus is on clean architecture, SOLID principles, and scalable solutions.`;
  }
  
  // Frontend specific
  if (lowerMessage.match(/frontend|react|nextjs|next\.js/)) {
    return `Tanjil is highly skilled in frontend development with ${KNOWLEDGE_BASE.skills.frontend.join(", ")}. He builds modern, responsive web applications using React and Next.js with advanced state management and performance optimization.`;
  }
  
  // Backend specific
  if (lowerMessage.match(/backend|api|server|asp\.net|nestjs/)) {
    return `Tanjil specializes in backend development with ${KNOWLEDGE_BASE.skills.backend.join(", ")}. He has extensive experience building RESTful APIs, implementing 3-tier architecture, and following SOLID principles.`;
  }
  
  // Database
  if (lowerMessage.match(/database|sql|postgres|mysql/)) {
    return `Tanjil works with multiple database systems: ${KNOWLEDGE_BASE.skills.databases.join(", ")}. He's proficient in database design, optimization, and ORM frameworks like Entity Framework.`;
  }
  
  // Location
  if (lowerMessage.match(/location|where|live|from/)) {
    return `Tanjil is based in ${KNOWLEDGE_BASE.location}.`;
  }
  
  // Default response
  return `I'm here to help you learn about ${KNOWLEDGE_BASE.name}! You can ask me about his:\n\n- Skills and technologies\n- Projects and work\n- Education and background\n- Competitive programming\n- Contact information\n\nWhat would you like to know?`;
}

// System prompt for AI
const SYSTEM_PROMPT = `You are an AI assistant for Tanjil Bin Mohiuddin's portfolio. Answer questions about him based on this information:

${JSON.stringify(KNOWLEDGE_BASE, null, 2)}

Rules:
- Only answer questions about Tanjil
- Be helpful, friendly, and professional
- Keep responses concise but informative
- If asked about something not related to Tanjil, politely redirect
- Use the exact information from the knowledge base`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || message.trim() === "") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Try Hugging Face API first
    try {
      const response = await hf.chatCompletion({
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 300,
        temperature: 0.7,
      });

      const reply = response.choices[0]?.message?.content;
      
      if (reply && reply.trim()) {
        return NextResponse.json({
          response: reply.trim(),
        });
      }
      
      throw new Error("Empty response from AI");
    } catch (aiError) {
      console.log("AI API failed, using keyword fallback:", aiError);
      
      // Fallback to keyword-based responses
      const fallbackResponse = generateKeywordResponse(message);
      
      return NextResponse.json({
        response: fallbackResponse,
      });
    }
  } catch (error) {
    console.error("Chat API error:", error);
    
    // Last resort fallback
    return NextResponse.json({
      response: generateKeywordResponse(""),
    });
  }
}
