
import React from 'react';
import { BrainCircuit, Languages, Building2, Star, ShieldCheck, HeartPulse } from 'lucide-react';
import { Course } from './types';
import Instructor1 from './assets/profile.png';
import Sabras from './assets/sabras.jpeg';
import Sabran from './assets/sabran.jpeg';
import Girl from './assets/girl.jpg';

export const COURSES: Course[] = [
  {
    id: 'ai-dev',
    title: 'AI-Powered Web Development',
    subtitle: 'Vibe Coding & AI Agents',
    description: 'Master the art of building production-ready websites using Natural Language. Learn to orchestrate AI Agents with Cursor, Antigravity, AIStudio and Lovable.',
    icon: <BrainCircuit className="w-8 h-8" />,
    duration: '3 Months Certificate',
    colorClass: 'from-blue-900 to-blue-700',
    features: ['HTML5 & Semantic Web', 'Responsive Design (Bootstrap)', 'JS DOM Manipulation', 'AI-Assisted Debugging', 'Web Hosting & Git'],
    timeline: [
      {
        month: 'Month 1', topics: ["Introduction to Client-Server Models & Dev Environments",
          "HTML5 Fundamentals: Structure, Forms, and Semantic Tags",
          "CSS Essentials: Box Model, Flexbox, and Grid Layouts",
          "Mini Project: Personal Profile & Styled Portfolio Page"]
      },
      {
        month: 'Month 2', topics: [
          "JavaScript Fundamentals: Logic, Functions, and Operators",
          "DOM Manipulation & Interactive Elements",
          "Form Validation and Basic Animations",
          "Industry Frameworks: Introduction to Bootstrap"
        ]
      },
      {
        month: 'Month 3', topics: [
          "AI Tools: Prompting ChatGPT for Brainstorming & Debugging",
          "AI Content Generation & No-Code/Low-Code Platforms",
          "Version Control with Git and Deployment via GitHub Pages",
          "Final Capstone Project: Full Business or Portfolio Website"
        ]
      }
    ],
    instructor: {
      name: "Ihjas Abdullah",
      role: "Integration Lead",
      bio: "Software Engineer with 3+ years of experience in building modern web applications and AI-integrated systems. Specialized in full-stack development using React, Next.js, and Agentic AI workflows. passionate about teaching and empowering the next generation of developers.",
      image: Instructor1,
      linkedin: "https://www.linkedin.com/in/ihjasabdullah/"
    }
  },
  {
    id: 'english-pro',
    title: 'Communication English',
    subtitle: 'Professional & Corporate Readiness',
    description: 'Elevate your professional presence. Focus on business writing, high-impact public speaking, and corporate communication skills for the global market.',
    icon: <Languages className="w-8 h-8" />,
    duration: '3 Months Certificate',
    colorClass: 'from-amber-600 to-amber-500',
    features: ['Business Writing', 'Public Speaking', 'Mock Interviews', 'Email Etiquette'],
    timeline: [
      { month: 'Month 1', topics: ['Professional Vocabulary & Grammar', 'Effective Listening', 'Constructing Clear Messages'] },
      { month: 'Month 2', topics: ['Business Writing (Emails, Reports)', 'Presentation Skills', 'Negotiation Techniques'] },
      { month: 'Month 3', topics: ['Corporate Etiquette', 'Mock Global Meetings', 'Final Fluency Assessment'] }
    ]
  },
  {
    id: 'cad-bs',
    title: 'CAD & Building Services',
    subtitle: 'AutoCAD & MEP Engineering',
    description: 'Specialize in technical design. Learn industry-standard AutoCAD and the complexities of Mechanical, Electrical, and Plumbing (MEP) systems.',
    icon: <Building2 className="w-8 h-8" />,
    duration: '3 Months Certificate',
    colorClass: 'from-blue-800 to-amber-600',
    features: ['2D/3D AutoCAD', 'MEP Design', 'Electrical Load Calc', 'HVAC Systems'],
    timeline: [
      { month: 'Month 1', topics: ['AutoCAD Essentials', 'Geometric Construction', 'Dimensioning & Layering'] },
      { month: 'Month 2', topics: ['Mechanical & Plumbing Systems', 'Reading Blueprints', 'Material Standards'] },
      { month: 'Month 3', topics: ['Electrical Systems Layout', 'MEP Project Coordination', 'Industry Portfolio Creation'] }
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: "Mohamed Sabran",
    role: "Web developer",
    content: "The AI Development course changed how I code. I went from struggling with syntax to building full production ready websites in weeks using AI agents.",
    avatar:Sabras
  },
  {
    name: "Sarah Fathima",
    role: "Project Coordinator",
    content: "The English for Professionals course gave me the confidence to lead international meetings. Highly recommended for corporate staff.",
    avatar: Girl
  },
  {
    name: "Mohamed Sabras",
    role: "MEP Engineer",
    content: "Detailed and practical CAD training. The Building Services modules were exactly what I needed for my current role in Dubai.",
    avatar: Sabran
  }
];

export const PARTNERS = [
  "barakah Charity", "British Council", "TVEC"
];

export const WHATSAPP_NUMBER = "+94766313173";
export const LOCATION = "Kinniya, Sri Lanka";
