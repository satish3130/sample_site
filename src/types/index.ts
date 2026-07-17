export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  id: number;
  icon: string; // MuiIcon name
  title: string; // Destination/Feature name
  description: string;
  color: string;
  image?: string; // Image URL for destinations
  rating?: number; // 1-5 rating
  price?: string; // Starting price
  duration?: string; // Duration of stay
  category?: string; // e.g. "Beach", "Cultural", "Safari"
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
  features: string[]; // Package inclusions
  cta: string;
  popular?: boolean;
  color: string;
  image?: string; // Package image
  duration?: string; // Package duration (e.g. "8 Days")
  rating?: number; // Package rating
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
  image: string; // Icon or Image category
  author: string;
  authorAvatar: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
