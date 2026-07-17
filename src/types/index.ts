export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  color: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  authorAvatar: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
