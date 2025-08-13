import { Star, Award, ShieldCheck, LucideIcon } from 'lucide-react';

export interface Experience {
  company: string;
  duration: string;
  role: string;
  desc: string;
  dotColor: string;
}

export interface IconAndText {
  icon: LucideIcon;
  name: string;
}

export interface Blog {
  image: string;
  button: string;
  name: string;
  date: string;
  title: string;
}

export interface PortfolioItem {
  image: string;
  title: string;
  href: string;
  desc: string;
}

export interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
}

export interface CardData {
  title: string;
  imageSrc: string;
}



export const experiences: Experience[] = [
  {
    company: "Storable – Digital Marketing Strategy Revamp",
    duration: "Jan. 2024 – Mar. 2024",
    role: " Conducted market analysis",
    desc: "Projected a 30% increase in qualified leads by refining digital marketingtactics.",
    dotColor: "bg-[#FD853A]",
  },
  {
    company: "Ferrero – GTM Strategy for Social Celebrations",
    duration: "Sept. 2023 – Dec. 2023",
    role: "Led a 10-member team in qualitative research",
    desc: ": Created a GTM plan that connected Ferrero’s brand to new-age celebrationtrends and drove engagement.",
    dotColor: "bg-[#1D2939]",
  },
  {
    company: "Fullscoop Digital Pvt. Ltd.",
    duration: "Jun. 2022 – Jun. 2023",
    role: "Digital Marketing Manager",
    desc: "Led a 5-member performance marketing team across 15+ hospitality brands including Radisson and Marriott, improving campaign KPIs by30% through full-funnel strategy, cross-channel execution, and stakeholder alignment",
    dotColor: "bg-[#FD853A]",
  },

  {
    company: "Women in Big Data",
    duration: "Jun. 2025 – Present",
    role: "Social Media Manager – Volunteer",
    desc: " Grew the “AI for Healthcare” LinkedIn community by 25% and increased monthly engagement by 30% by analyzing audience insights,iterating content formats, and optimizing posting cadence.",
    dotColor: "bg-[#FD853A]",
  },
];

// export const buttons: string[] = [
//   "Landing Page",
//   "Product Design",
//   "Animation",
//   "Glassmorphism",
//   "Cards",
// ];

// export const iconAndText: IconAndText[] = [
//   {
//     icon: Star,
//     name: "4.9 Average Rating",
//   },
//   {
//     icon: Award,
//     name: "25+ Winning Awards",
//   },
//   {
//     icon: ShieldCheck,
//     name: "Certified Product Design",
//   },
// ];

export const skills: string[] = [
  "SEO",
  "SEM",
  "paid media",
  "CRM automation",
  "SaaS",
  "Google Analytics",
  "HubSpot Digital Marketing",
  " Social Media Marketing",
];

export const blogs: Blog[] = [
  {
    image: "",
    button: "Explore",
    name: "Akrati Malviya",
    date: "10 Nov, 2024",
    title: "Storable – Digital Marketing Strategy Revamp",
  },
  {
    image: "",
    button: "Explore",
    name: "Sarah Johnson",
    date: "12 Dec, 2024",
    title: "Mastering Tailwind: Tips for Clean UI Development",
  },
  {
    image: "",
    button: "Explore",
    name: "John Doe",
    date: "1 Jan, 2025",
    title: "Modern Web Development in 2025",
  },
];

export const portfolioData: PortfolioItem[] = [
  {
    image: "/Frame 26.svg",
    title: "Lirante 1",
    href: "/project-1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
  },
  {
    image: "/Frame 26.svg",
    title: "Lirante 2",
    href: "/project-2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
  },
  {
    image: "/Frame 26.svg",
    title: "Lirante 3",
    href: "/project-3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
  },
  {
    image: "/Frame 26.svg",
    title: "Lirante 4",
    href: "/project-4",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
  },
];

// export const reviews: Review[] = [
//   {
//     name: "Mahesh Pokale",
//     role: "Web Designer",
//     rating: 5,
//     text: "Consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
//   },
//   {
//     name: "Sarah Johnson",
//     role: "Product Manager",
//     rating: 4,
//     text: "Excellent work! Very professional and meets deadlines consistently. Highly recommended for design and development projects.",
//   },
//   {
//     name: "John Doe",
//     role: "UI/UX Lead",
//     rating: 5,
//     text: "Top quality design and coding. Strong attention to detail and highly collaborative throughout the project lifecycle.",
//   },
//   {
//     name: "Aryan Sharma",
//     role: "Software Engineer",
//     rating: 4,
//     text: "Innovative approach, clean design, and prompt delivery. Will work together again for sure!",
//   },
// ];

// export const cardData: CardData[] = [
//   { title: "Jewellery Design", imageSrc: "/Rectangle 7.svg" },
//   { title: "Mehndi Expert", imageSrc: "/Rectangle 7.svg" },
//   { title: "Fashion Designer", imageSrc: "/Rectangle 7.svg" },
//   { title: "Craft Expert", imageSrc: "/Rectangle 7.svg" },
//   { title: "Beauty & Imitation", imageSrc: "/Rectangle 7.svg" },
//   { title: "Designer Studio", imageSrc: "/Rectangle 7.svg" },
// ];
