import type { NavLink, Feature, Stat, Testimonial, PricingPlan, TeamMember, BlogPost, FAQItem } from '../types';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const features: Feature[] = [
  {
    id: 1,
    icon: 'RocketLaunch',
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance. Deploy your projects in seconds with zero-config setup.',
    color: '#6C63FF',
  },
  {
    id: 2,
    icon: 'Shield',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and advanced security protocols keep your data safe 24/7.',
    color: '#FF6584',
  },
  {
    id: 3,
    icon: 'Tune',
    title: 'Fully Customizable',
    description: 'Adapt every component to match your brand identity with our powerful theming engine.',
    color: '#43D9A3',
  },
  {
    id: 4,
    icon: 'Analytics',
    title: 'Real-Time Analytics',
    description: "Get deep insights into your users' behavior with our advanced analytics dashboard.",
    color: '#FFA726',
  },
  {
    id: 5,
    icon: 'CloudSync',
    title: 'Cloud Sync',
    description: "Sync data across all devices instantly. Work offline, sync when you're back online.",
    color: '#29B6F6',
  },
  {
    id: 6,
    icon: 'Groups',
    title: 'Team Collaboration',
    description: 'Built for teams. Real-time collaboration tools that keep everyone aligned.',
    color: '#AB47BC',
  },
];

export const stats: Stat[] = [
  { value: '50K+', label: 'Happy Customers', icon: 'People' },
  { value: '99.9%', label: 'Uptime SLA', icon: 'CloudDone' },
  { value: '150+', label: 'Countries', icon: 'Public' },
  { value: '4.9★', label: 'Average Rating', icon: 'Star' },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechNova Inc.',
    avatar: 'SJ',
    rating: 5,
    text: 'This platform completely transformed our workflow. The reusable components saved us weeks of development time. Absolutely stellar product!',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Lead Developer',
    company: 'CodeCraft Studios',
    avatar: 'MC',
    rating: 5,
    text: 'The Material UI integration is seamless. I love how every component is consistent, accessible, and beautifully designed out of the box.',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Product Manager',
    company: 'FinEdge Solutions',
    avatar: 'PS',
    rating: 5,
    text: 'Our team adoption was instant. The documentation is superb and the support team is incredibly responsive. 10/10 would recommend!',
  },
  {
    id: 4,
    name: 'Alex Rivera',
    role: 'Founder',
    company: 'StartupHub',
    avatar: 'AR',
    rating: 5,
    text: 'We went from idea to production in 2 weeks. The pre-built components and theming system are genuinely game-changing for startups.',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: 'Starter',
    price: '₹ 999',
    period: '/month',
    description: 'Perfect for individuals and small projects.',
    features: [
      '5 Projects',
      '2 Team Members',
      '10 GB Storage',
      'Basic Analytics',
      'Email Support',
    ],
    cta: 'Get Started Free',
    color: '#6C63FF',
  },

  {
    id: 3,
    name: 'Enterprise',
    price: '₹ 2999',
    period: '/month',
    description: 'For large-scale enterprise deployments.',
    features: [
      'Unlimited Everything',
      'Unlimited Team Members',
      '1 TB Storage',
      'AI-Powered Analytics',
      '24/7 Dedicated Support',
      'SSO & Advanced Security',
      'SLA Guarantee',
      'Custom Integrations',
    ],
    cta: 'Contact Sales',
    color: '#43D9A3',
  },
];

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Emma Williams',
    role: 'CEO & Co-Founder',
    avatar: 'EW',
    bio: 'Former Google engineer passionate about building developer tools that actually work.',
    socials: { twitter: '#', linkedin: '#', github: '#' },
  },
  {
    id: 2,
    name: 'David Kim',
    role: 'CTO & Co-Founder',
    avatar: 'DK',
    bio: '15 years in distributed systems. Obsessed with performance and elegant code.',
    socials: { twitter: '#', linkedin: '#', github: '#' },
  },
  {
    id: 3,
    name: 'Aisha Patel',
    role: 'Head of Design',
    avatar: 'AP',
    bio: 'Award-winning UX designer who believes great products start with great empathy.',
    socials: { twitter: '#', linkedin: '#' },
  },
  {
    id: 4,
    name: 'James Torres',
    role: 'VP of Engineering',
    avatar: 'JT',
    bio: 'Open-source contributor and full-stack developer with a love for TypeScript.',
    socials: { linkedin: '#', github: '#' },
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Reusable Components with Material UI',
    excerpt: 'Learn how to create a scalable component library using Material UI that your entire team can use.',
    category: 'Engineering',
    date: 'Jul 10, 2026',
    readTime: '5 min read',
    image: 'engineering',
    author: 'David Kim',
    authorAvatar: 'DK',
  },
  {
    id: 2,
    title: 'The Future of Design Systems in 2026',
    excerpt: 'Explore the latest trends shaping modern design systems and how to stay ahead of the curve.',
    category: 'Design',
    date: 'Jul 5, 2026',
    readTime: '7 min read',
    image: 'design',
    author: 'Aisha Patel',
    authorAvatar: 'AP',
  },
  {
    id: 3,
    title: 'Scaling Your React App to 1 Million Users',
    excerpt: 'Real-world strategies for performance optimization and scalable architecture in React applications.',
    category: 'Performance',
    date: 'Jun 28, 2026',
    readTime: '10 min read',
    image: 'performance',
    author: 'James Torres',
    authorAvatar: 'JT',
  },
];

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'How do I get started with the free plan?',
    answer: 'Simply click "Get Started Free" and create your account. No credit card required. You\'ll have immediate access to all Starter features.',
  },
  {
    id: 2,
    question: 'Can I upgrade or downgrade my plan at any time?',
    answer: 'Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately and billing is prorated.',
  },
  {
    id: 3,
    question: 'Do you offer a free trial for Pro and Enterprise plans?',
    answer: 'Absolutely! We offer a 14-day free trial for the Pro plan. For Enterprise, contact our sales team for a custom demo and trial.',
  },
  {
    id: 4,
    question: 'What kind of support do you provide?',
    answer: 'Starter users get email support. Pro users get priority support within 4 hours. Enterprise customers get dedicated 24/7 support with a named account manager.',
  },
  {
    id: 5,
    question: 'Is my data secure?',
    answer: 'Security is our top priority. All data is encrypted at rest and in transit using AES-256 and TLS 1.3. We are SOC 2 Type II and GDPR compliant.',
  },
];
