
import React from 'react';

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  timeline: {
    month: string;
    topics: string[];
  }[];
  features: string[];
  colorClass: string;
  instructor?: {
    name: string;
    role: string;
    education?: string;
    bio: string;
    image: string;
    linkedin?: string;
  };
}

export interface InquiryFormData {
  name: string;
  phone: string;
  course: string;
  message: string;
}
