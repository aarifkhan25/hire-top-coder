import {
  BsGraphUp,
  BsLightningCharge,
  BsPeople,
  BsStopwatch
} from "react-icons/bs";
import { FiLayers, FiTrendingUp } from "react-icons/fi";
import { MdPayment } from "react-icons/md";

const expert1 = "/assets/expert-1.jpg";
const expert2 = "/assets/expert-2.jpg";
const blog1 = "/assets/blog-1.png";
const blog2 = "/assets/blog-2.png";
const blog3 = "/assets/blog-3.png";
const blog4 = "/assets/blog-4.png";

const port3image="/assets/case-studies/micromitti/img1.png";

export const  homeData = {
 experts : [

  {
    name: "Rahul J.",
    role: "ux designer",
    img: "/assets/rahul2.png",
    accent: "oklch(0.65 0.28 320)",
  },
  {
    name: "Mayank Y.",
    role: "Angular developer",
    img: "/assets/mayanky.png",
    accent: "oklch(0.65 0.28 320)",
  },
  {
    name: "Khushi G.",
    role: "Wordpress developer",
    img: "/assets/khushi.png",
    accent: "oklch(0.65 0.28 320)",
  },

  {
    name: "Aarif K.",
    role: "Ract js trainee",
    img: "/assets/aarif2.jpeg",
    accent: "oklch(0.65 0.28 320)",
  },

  {
    name: "Arun S.",
    role: "Team Head",
    img: "/assets/arun.png",
    accent: "oklch(0.65 0.28 320)",
  },
  {
    name: "Kajal G.",
    role: "full stack developer",
    img: "/assets/kajal.png",
    accent: "oklch(0.65 0.28 320)",
  },
  {
    name: "Akansha S.",
    role: "ui/ux designer",
    img: "/assets/Aakansha.png",
    accent: "oklch(0.65 0.28 320)",
  },

  {
    name: "Neha R.",
    role: "wordpress developer",
    img: "/assets/neha.png",
    accent: "oklch(0.65 0.28 320)",
  },
  {
    name: "Sumit V.",
    role: "Business Development Executive",
    img: "/assets/sumit.png",
    accent: "oklch(0.65 0.28 320)",
  },
  {
    name: "Dev P.",
    role: "Flutter Trainee",
    img: "/assets/dev.png",
    accent: "oklch(0.65 0.28 320)",
  },
  // {
  //   name: "Nilofar A.",
  //   role: "Business Development Executive",
  //   img: "/assets/nilofar.png",
  //   accent: "oklch(0.65 0.28 320)",
  // }, 
],

 brands : [
  { img: "/assets/clogo3.png" },
  { img: "/assets/clogo4.png" },
  { img: "/assets/clogo5.png" },
  { img: "/assets/clogo6.png" },
  { img: "/assets/clogo7.png" },
  { img: "/assets/clogo8.png" },
    { img: "/assets/img1.png" },
  { img: "/assets/img2.png" },
  { img: "/assets/img3.png" },
],



 posts : [
  {
    cat: "AI Design",
    title: "The Future of AI Design Is Adaptive",
    excerpt: "How generative interfaces are reshaping every product surface.",
    img: blog1,
    read: "6 min",
    to:"/blog/ai-design "
  },
  {
    cat: "UX Trends",
    title: "UX Trends Defining 2026",
    excerpt: "Spatial layouts, kinetic type and ambient AI take center stage.",
    img: blog2,
    read: "5 min",
     to:"/blog/ux-trends "
  },
  {
    cat: "SaaS",
    title: "Building Premium SaaS Experiences",
    excerpt: "The craft framework behind today's most loved enterprise tools.",
    img: blog3,
    read: "8 min",
     to:"/blog/premium-saas"
  },
  {
    cat: "Product",
    title: "AI-Powered Product Development",
    excerpt:
      "From discovery to ship — orchestrating AI across the build cycle.",
    img: blog4,
    read: "7 min",
     to:"/blog/ai-product"
  },
],



 testimonials : [
  {
    id: 1,
    stars: 5,
    quote:
      '"HireTopCoder transformed our development cycle. We went from a 3-month hiring process to shipping in under 48 hours. The caliber of talent is truly world-class."',
    avatar: expert2, // High-quality avatar placeholder
    name: "James Wilson",
    role: "CTO, TechScale AI",
  },
  {
    id: 2,
    stars: 5,
    quote:
      '"Finding high-quality UI designers was our biggest bottleneck. HireTopCoder matched us with a senior lead who understood our vision from day one. Highly recommended for fast-growing startups."',
    avatar: expert1, // High-quality avatar placeholder
    name: "Sarah Chen",
    role: "Product Lead, Velocity Labs",
  },
  {
    id: 3,
    stars: 4,
    quote:
      '"HireTopCoder transformed our development cycle. We went from a 3-month hiring process to shipping in under 48 hours. The caliber of talent is truly world-class."',
    avatar: expert2, // High-quality avatar placeholder
    name: "James Wilson",
    role: "CTO, TechScale AI",
  },
],
 portfolioItems : [
  {
    id: 1,
    image: "/assets/case-studies/speakable/img1.png",
    title:
      "Speakable provides a personalized English learning experience ",
    paragraphs: [
  "This platform provides a personalized English learning experience tailored for people in Poland. Users can book one-on-one sessions with their preferred teachers.",
    ],
    metrics: [
      {
        id: "m1",
        value: "3",
        label: "User Roles",
        icon: <BsPeople  />,
      },
      {
        id: "m2",
        value: "256",
        label: "Secure Payments",
        icon: <MdPayment />,
      },
      {
        id: "m3",
        value: "100%",
        label: "Live Calendar Scheduling",
        icon: <  BsStopwatch />,
      },
    ], href:"/case-studies/speakable",
    testimonial:
      "“HireDeveloper didn't just send us a developer - they sent us a problem solver. The onboarding was seamless amd with 48 hours he was already pushing commits.”",
  },
  {
    id: 2,
    image: "/assets/case-studies/alesk/img1.png", 
    title:
      "Alesk is a comprehensive, user-friendly customer management system ",
    paragraphs: [
      "A comprehensive healthcare customer management platform connecting patients, doctors, and clinics across the Portuguese-speaking community.",
    
    ],
    metrics: [
      { id: "m4", value: "3", label: "Platform User Types", icon: <BsPeople /> },
      {
        id: "m5",
        value: "4",
        label: "Mobile, Web & Desktop",
        icon: <FiLayers />,
      },
      {
        id: "m6",
        value: "100%",
        label: "Financial Reporting",
        icon: <BsGraphUp />,
      },
    ],
    href:"/case-studies/alesk",
    testimonial:
      "“The enterprise AI solution delivered by their engineering branch completely overhauled our predictive indexing latency benchmarks within the targeted deadline.”",
  },
  {
    id: 3,
    image: port3image, 
    title: "An Real Estate investment application. It is, Indore’s premier Prop-tech company.",
    paragraphs: [
      "Micro Mitti's is an Real Estate investment application. It is, Indore’s premier Prop-tech company, revolutionizing the landscape of real estate investments.",
    ],
    metrics: [
      { id: "m7", value: "10M+", label: "Active Sessions", icon: <BsPeople /> },
      {
        id: "m8",
        value: "92%",
        label: "Server Cost Cut",
        icon: <FiTrendingUp />,
      },
      {
        id: "m9",
        value: "0.4s",
        label: "TTFB Performance",
        icon: <BsLightningCharge />,
      },
    ], href:"/case-studies/mircromitti",
    testimonial:
      "“Micro Mitti has transformed the way users approach real estate investments. The platform provides a seamless experience with secure transactions, verified opportunities, and complete control over investment portfolios”",
  },
]
}