
import React from 'react';
import { BrainCircuit, Languages, Building2, Star, ShieldCheck, HeartPulse } from 'lucide-react';
import { Course } from './types';
import Instructor1 from './assets/profile.png';
import Sabras from './assets/sabras.jpeg';
import Sabran from './assets/sabran.jpeg';
import Girl from './assets/girl.jpg';
import CAD from './assets/CAD-Class.png';
import WebDevPdf from './assets/Web Development Modules.pdf';
import Class4 from './assets/class4.jpeg';
import EnglishClass from './assets/English.png';
import Instructor2 from './assets/english1.png';
import Instructor3 from './assets/feros.jpg';

export const COURSES: Course[] = [
  {
    id: 'ai-dev',
    title: 'AI-Assisted Web Development',
    subtitle: 'Vibe Coding & AI Agents',
    description: 'Master the art of building production-ready websites using Natural Language with vibe coding. Learn to orchestrate AI Agents with Cursor, Antigravity, AIStudio and Lovable.',
    icon: <BrainCircuit className="w-8 h-8" />,
    duration: '3 Months Certificate',
    colorClass: 'from-blue-900 to-blue-700',
    modulePdf: WebDevPdf,
    features: ['HTML5 & Semantic Web', 'Responsive Design (Bootstrap)', 'Vibe Coding', 'AI-Assisted Debugging', 'Git and Github', 'Web Hosting'],
    timeline: [
      {
        month: 'Month 1', topics: ["Introduction to Web Technologies & AI Fundamentals",
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
      education: "BICT(Hons)",
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
    modulePdf: '#',
    features: ['Business Writing', 'Public Speaking', 'Mock Interviews', 'Email Etiquette'],
    timeline: [
      { month: 'Month 1', topics: ['Introduction to Communication', '* Parts of Speech (Nouns, Pronouns,Verbs,)', 'Professional Vocabulary & Grammar', 'Tenses: Basics & Usage', 'Constructing Clear Sentences', 'Effective Listening Skills'] },
      { month: 'Month 2', topics: ['Business Writing Skills', 'Email Writing (Formal & Informal)', 'Email Etiquette & Tone', 'Report Writing (Structure & Format)', 'Grammar for Written Communication', 'Editing & Proofreading Skills'] },
      { month: 'Month 3', topics: ['Presentation Skills', 'Presentation on Tenses & Usage', 'Public Speaking & Confidence Building', 'Interview Skills & Preparation', 'Mock Interviews (Individual & Group)', 'Feedback & CommunicationImprovement'] }
    ],
    instructor: {
      name: "SAJEEHA BANU",
      role: "ENGLISH INSTRUCTOR",
      education: "HNDE & BA IN ENGLISH",
      bio: "English Instructor with strong expertise in English language teaching and soft skills development, currently serving at NAITA Sri Lanka.With over 6 years of diverse teaching experience across primary and vocational education, I specialize in workplace communication, learner- centered instruction, and preparing technical/ vocational trainees for career success",
      image: Instructor2,
      linkedin: "#"
    }
  },
  {
    id: 'cad-bs',
    title: 'CAD & Building Studies',
    subtitle: 'AutoCAD & MEP Engineering',
    description: 'Specialize in technical design. Learn industry-standard AutoCAD and the complexities of Mechanical, Electrical, and Plumbing (MEP) systems.',
    icon: <Building2 className="w-8 h-8" />,
    duration: '3 Months Certificate',
    colorClass: 'from-blue-800 to-amber-600',
    modulePdf: '#',
    features: ['2D/3D AutoCAD', 'MEP Design', 'Electrical Load Calc', 'HVAC Systems'],
    timeline: [
      { month: 'Month 1', topics: ['AutoCAD Essentials', 'Geometric Construction', 'Dimensioning & Layering'] },
      { month: 'Month 2', topics: ['Mechanical & Plumbing Systems', 'Reading Blueprints', 'Material Standards'] },
      { month: 'Month 3', topics: ['Electrical Systems Layout', 'MEP Project Coordination', 'Industry Portfolio Creation'] }
    ],
    instructor: {
      name: "Mohamed Feros",
      role: "Architect,Freelancer",
      education: "BSc in Architecture",
      bio: "Architect with 5+ years of experience in building modern designs and MEP systems. Currently freelancing in fiverr.",
      image: Instructor3,
      linkedin: "#"
    }
  }
];

export const TESTIMONIALS = [
  {
    name: "Mohamed Sabran",
    role: "Student, Freelancer",
    content: "The AI Development course changed how I code. I went from struggling with syntax to building full production ready websites in weeks using AI agents.",
    avatar: Sabras
  },
  {
    name: "Rozana",
    role: "Student, Freelancer",
    content: "The English for Professionals course gave me the confidence to lead international meetings. Highly recommended for corporate staff.",
    avatar: Girl
  },
  {
    name: "Mohamed Sabras",
    role: "Student, Freelancer",
    content: "Detailed and practical CAD training. The Building Services modules were exactly what I needed for my current role in Dubai.",
    avatar: Sabran
  }
];

export const PARTNERS = [
  "Swiss-Barakah Charity", "Barakah Education Center", "TVEC-Ongoing"
];

export const WHATSAPP_NUMBER = "+94771380123";
export const LOCATION = "Kinniya, Sri Lanka";

export const NEWS_FEED = [
  {
    id: 1,
    author: "Barakah Education Center",
    date: "2 hours ago",
    content: "Exciting news! Our AI-Assisted Web Development course (Batch 2) is now open for enrollment. Learn to build production-ready sites with AI agents. 🚀 #AI #WebDev #FutureSkills",
    image: Class4,
    likes: 154,
    comments: 50
  },
  {
    id: 2,
    author: "Barakah Education Center",
    date: "1 month ago",
    content: "Highlights from our recent English for Professionals workshop! Our students are mastering corporate communication with confidence. 🤝 #ProfessionalEnglish #CareerGrowth",
    image: EnglishClass,
    likes: 142,
    comments: 12
  },
  {
    id: 3,
    author: "Barakah Education Center",
    date: "3 days ago",
    content: "Deep dive into AutoCAD & MEP Engineering. Practical sessions are where the real learning happens!  #Engineering #CAD #SkillBuilding",
    image: CAD,
    likes: 180,
    comments: 13
  }
];
