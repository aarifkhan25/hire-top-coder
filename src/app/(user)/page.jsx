"use client"
import Link from "next/link";
import {useRef,useState,useEffect} from "react"
import { motion, useScroll, useTransform } from "framer-motion";
import {
  LuArrowRight,  LuSparkles, LuCheck, LuStar, LuZap, LuShieldCheck, LuGlobe, LuQuote, LuClock,
} from "react-icons/lu";

import { FiTrendingUp } from 'react-icons/fi';
import { BsStopwatch, BsPeople, BsLightningCharge, BsShieldCheck, BsGraphUp } from 'react-icons/bs'
import {GhostButton,PrimaryButton} from "@/components/site/PageShell.jsx";
import {Reveal} from "@/components/site/Reveal.jsx"
import { FaStar, FaQuoteLeft } from 'react-icons/fa';


import Image from 'next/image'
const expert1 = "/assets/expert-1.jpg";
const expert2 = "/assets/expert-2.jpg";
const expert3 = "/assets/expert-3.jpg";
const expert4 = "/assets/expert-4.jpg";
const expert5 = "/assets/expert-5.jpg";
const work1 = "/assets/work-1.jpg";
const work2 = "/assets/work-2.jpg";
const work3 = "/assets/work-3.png";
const work4 = "/assets/work-4.png";
const work5 = "/assets/work-5.jpg";
const work6 = "/assets/work-6.jpg";
const blog1 = "/assets/blog-1.png";
const blog2 = "/assets/blog-2.png";
const blog3 = "/assets/blog-3.png";
const blog4 = "/assets/blog-4.png";


const experts = [
  { name: "Shubhash Sahu",   role: "Flutter Developer", img: '/assets/subhash.png', accent: "oklch(0.65 0.28 320)"},
  { name: "Rahul Jaiswal",   role: "ux designer",        img: '/assets/rahul2.png', accent: "oklch(0.65 0.28 320)"  },
  { name: "Maynak Yadav",   role: "angular developer",      img: '/assets/mayanky.png', accent: "oklch(0.65 0.28 320)" },
  { name: "Khushi Gupta", role: "Wordpress developer",  img: '/assets/khushi.png', accent: "oklch(0.65 0.28 320)" },

  { name: "Aarif Khan",    role: "Ract js trainee",   img: '/assets/aarif2.jpeg', accent: "oklch(0.65 0.28 320)" },

    { name: "Arun Singh", role: "Team Head",  img: '/assets/arun.png', accent: "oklch(0.65 0.28 320)" },
      { name: "Kajal Gurjar",    role: "full stack developer",   img: '/assets/kajal.png', accent: "oklch(0.65 0.28 320)" },
        { name: "Akansha Soni",    role: "ui/ux designer",   img: '/assets/Aakansha.png', accent: "oklch(0.65 0.28 320)" },

    { name: "Neha Rathore", role: "wordpress developer",  img: '/assets/neha.png', accent: "oklch(0.65 0.28 320)" },
      { name: "Sumit Varma",    role: "BDE",   img: '/assets/sumit.png', accent: "oklch(0.65 0.28 320)" },
];

const brands = [{img:"/assets/clogo1.png"},{img:"/assets/clogo2.png"},{img:"/assets/clogo3.png"},{img:"/assets/clogo4.png"},{img:"/assets/clogo5.png"},{img:"/assets/clogo6.png"},{img:"/assets/clogo7.png"},{img:"/assets/clogo8.png"},];

const services = [
  { tag: "Most Hired", title: "Brand Identity System", price: "from $1,800", rating: 4.9, by: "Aria Studio" },
  { tag: "Trending",   title: "AI Chatbot Integration", price: "from $2,400", rating: 5.0, by: "Nexus.ai" },
  { tag: "Premium",    title: "SaaS Landing Page",      price: "from $3,200", rating: 4.9, by: "Northwind" },
  { tag: "New",        title: "Conversion Audit & Growth", price: "from $1,200", rating: 4.8, by: "Pareto Co." },
];

const works= [
  { title: "Broker Remarks", category: "SaaS Web App",
    desc: "Real estate listing platform that eliminates repetitive agent questions with a streamlined property details system.",
    img:work1, stat1: "3x faster", stat2: "listing workflow", span: "lg:col-span-2 lg:row-span-2" },
  { title: "Code Conspirators", category: "Web Design",
    desc: "Bold agency website with immersive 3D hero and strong brand storytelling for a digital marketing and development firm.",
    img: work2, stat1: "High-impact", stat2: "brand presence", span: "lg:col-span-2" },
 
  { title: "Rolling Star Casino", category: "Web App",
    desc: "Full-featured online casino platform built in React JS with games including Roulette, Blackjack, Slots and Aviator.",
    img: work4, stat1: "React JS", stat2: "Multi-game platform", span: "lg:col-span-2" },
  { title: "Wizz Air Integration", category: "Travel Platform",
    desc: "Flight booking and deals platform with multi-city search, fare finder, hotel integration and promotional campaign pages.",
    img: work5, stat1: "Multi-service", stat2: "booking platform", span: "lg:col-span-2" },
  { title: "Workla", category: "Mobile App",
    desc: "Task management mobile app with quick notes, tasklist, calendar view and team collaboration features built for productivity.",
    img: work6, stat1: "Cross-platform", stat2: "team productivity", span: "lg:col-span-2"
  }];
   

const posts = [
  { cat: "AI Design",    title: "The Future of AI Design Is Adaptive",       excerpt: "How generative interfaces are reshaping every product surface.",     img: blog1, read: "6 min" },
  { cat: "UX Trends",    title: "UX Trends Defining 2026",                   excerpt: "Spatial layouts, kinetic type and ambient AI take center stage.",    img: blog2, read: "5 min" },
  { cat: "SaaS",         title: "Building Premium SaaS Experiences",         excerpt: "The craft framework behind today's most loved enterprise tools.",   img: blog3, read: "8 min" },
  { cat: "Product",      title: "AI-Powered Product Development",            excerpt: "From discovery to ship — orchestrating AI across the build cycle.", img: blog4, read: "7 min" },
];

const steps = [
  { n: "01", t: "Describe your need", d: "Tell us what you're building. Our AI maps it to the right expertise in seconds." },
  { n: "02", t: "Match in minutes",   d: "Receive a curated shortlist of vetted experts ranked by fit and outcome." },
  { n: "03", t: "Hire & ship",        d: "Chat, scope and launch — contracts, milestones and payments built-in." },
];

const testimonials=[
  {
    id: 1,
    stars: 5,
    quote: '"HireTopCoder transformed our development cycle. We went from a 3-month hiring process to shipping in under 48 hours. The caliber of talent is truly world-class."',
    avatar: expert2, // High-quality avatar placeholder
    name: 'James Wilson',
    role: 'CTO, TechScale AI',
  },
  {
    id: 2,
    stars: 5,
    quote: '"Finding high-quality UI designers was our biggest bottleneck. HireTopCoder matched us with a senior lead who understood our vision from day one. Highly recommended for fast-growing startups."',
    avatar:expert1, // High-quality avatar placeholder
    name: 'Sarah Chen',
    role: 'Product Lead, Velocity Labs',
  },
];
const portfolioItems = [
  {
    id: 1,
    image: "/assets/work-12.png",
    title: "Sales CRM Modernization: 30% Faster Deal Cycles & Reduced Operational Costs",
    paragraphs: [
      "The client was struggling with a fragment CRM system, duplicated leads, and lack of visibility into their",
      "The client was struggling with a fragment CRM system, duplicated leads, and lack of visibility into their",
      "The client was struggling with a fragment CRM system, duplicated leads, and lack of visibility into their"
    ],
    metrics: [
      { id: "m1", value: "30%", label: "Faster Deal Cycles", icon: <FiTrendingUp /> },
      { id: "m2", value: "99.5%", label: "Forecast Accuracy", icon: <BsStopwatch /> },
      { id: "m3", value: "99.5%", label: "Forecast Accuracy", icon: <BsPeople /> }
    ],
    testimonial: "“HireDeveloper didn't just send us a developer - they sent us a problem solver. The onboarding was seamless amd with 48 hours he was already pushing commits.”"
  },
  {
    id: 2,
    image: "/assets/work-10.png", // अपनी दूसरी इमेज का पाथ यहाँ डालें
    title: "AI Financial Analytics: 45% Increase in Operational Portfolio Yields",
    paragraphs: [
      "The hedge fund required high-speed real-time ingestion arrays to parse unstructured transactional pipelines",
      "The hedge fund required high-speed real-time ingestion arrays to parse unstructured transactional pipelines",
      "The hedge fund required high-speed real-time ingestion arrays to parse unstructured transactional pipelines"
    ],
    metrics: [
      { id: "m4", value: "45%", label: "Portfolio Yield", icon: <BsGraphUp /> },
      { id: "m5", value: "4x", label: "Processing Speed", icon: <BsLightningCharge /> },
      { id: "m6", value: "Zero", label: "Compliance Risk", icon: <BsShieldCheck /> }
    ],
    testimonial: "“The enterprise AI solution delivered by their engineering branch completely overhauled our predictive indexing latency benchmarks within the targeted deadline.”"
  },
  {
    id: 3,
    image: "/assets/work-12.png", // अपनी तीसरी इमेज का पाथ यहाँ डालें
    title: "Next-Gen E-Commerce Stack: Scaled to 10M+ Monthly Active Sessions",
    paragraphs: [
      "Legacy infrastructure limitations were inducing high bounce rates during seasonal concurrent user surges",
      "Legacy infrastructure limitations were inducing high bounce rates during seasonal concurrent user surges",
      "Legacy infrastructure limitations were inducing high bounce rates during seasonal concurrent user surges"
    ],
    metrics: [
      { id: "m7", value: "10M+", label: "Active Sessions", icon: <BsPeople /> },
      { id: "m8", value: "92%", label: "Server Cost Cut", icon: <FiTrendingUp /> },
      { id: "m9", value: "0.4s", label: "TTFB Performance", icon: <BsLightningCharge /> }
    ],
    testimonial: "“Our transaction capacity quadrupled overnight without a single microservice failure. Absolute mastery over cloud-native serverless system design.”"
  }
];
export default function Index() {
  return (
    <div className="min-h-screen bg-black text-foreground overflow-hidden">
     
      
      <motion.main
        initial={{ opacity: 0, filter: "blur(14px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >

        <Hero />
        <ExpertsRow />
        <Marquee />
      
        <Portfolio />
       
        <Testimonials />
        <Blog />
        <CTA />
    
      
      </motion.main>
  
    </div>
  );
}







function Hero() {
  return (
    <section className="relative pt-20 md:pt-40 2xl:pt-50 pb-20 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[900px] rounded-full bg-primary/25 blur-[160px] animate-pulse-glow pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)] pointer-events-none" />

      <div className="relative w-full text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-3 md:px-4 py-1.5 text-[8px] md:text-[10px] md:text-xs 2xl:text-sm font-sans uppercase tracking-[0.2em] text-primary border border-primary/40 bg-primary/10 mb-10 font-semibold">
          Build faster with elite digital experts
        </div>

        <h1 className="font-display font-bold leading-[0.95] text-[clamp(2.75rem,8vw,7.5rem)] 2xl:text-[clamp(3rem,9vw,8.5rem)]">
          Hire elite <br />
          <span className="text-gradient-purple">digital experts.</span>
        </h1>

        <p className="mt-12 text-sm md:text-base lg:text-xl  text-[#b1afb8] max-w-3xl mx-auto leading-relaxed font-normal">
          The best designers, engineers, marketers and strategists in the world,
          ready to hire in 24 hours. AI-matched, human-vetted, and instantly available.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <PrimaryButton >
                      Start Hiring
                    </PrimaryButton>
          <GhostButton>Talk to Experts</GhostButton>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-sm 1xl:text-base text-foreground/60 font-medium">
          <span>Backed by</span>
          <span className="inline-flex items-center gap-1.5 font-display font-bold text-white">
            <span className="size-5 grid place-items-center rounded bg-white text-black font-extrabold text-xs 1xl:text-sm">Y</span>
            Combinator
          </span>
        </div>
      </div>
    </section>
  );
}

function ExpertsRow() {
  return (
    <section id="experts" className="relative -mt-4 pb-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32  z-10 pointer-events-none" />
      <div className="flex gap-5 animate-scroll-cards w-max px-4">
        {[...experts, ...experts].map((e, i) => (
          <ExpertCard key={i} expert={e} />
        ))}
      </div>
    </section>
  );
}

function ExpertCard({ expert }) {
  return (
    <article
      className="relative shrink-0 w-[280px] sm:w-[320px] md:w-[350px] 1xl:w-[380px] rounded-3xl p-2 overflow-hidden"
      style={{ background: `linear-gradient(180deg, ${expert.accent}, transparent 60%)` }}
    >
      <div className="rounded-[1.25rem] overflow-hidden bg-black relative">
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 z-10 text-[6px] md:text-[7px] lg:text-[8px] font-sans uppercase tracking-[0.2em] px-3 py-1 rounded-md font-bold"
          style={{ color: expert.accent, background: "#f9e5ff", border: `1px solid ${expert.accent}` }}
        >
          {expert.role}
        </div>
        <img src={expert.img} alt={`${expert.name}, ${expert.role}`} width={640} height={800} loading="lazy"
          className="w-full aspect-[4/5] object-cover" />
        <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black via-black/70 to-transparent">
          <div className="font-display  text-3xl font-extrabold">{expert.name}</div>
         
        </div>
      </div>
    </article>
  );
}

function Marquee() {
  return (
    <section className="relative py-12 border  border-y border-border/80 overflow-hidden">
      <div className="text-center text-xs uppercase tracking-[0.3em] text-foreground/50 mb-6 font-semibold">
        Trusted by teams shipping with Hire Top Coder
      </div>
     
        <div className="flex gap-16 md:gap-24 animate-scroll-cards  w-max">
          {[...brands, ...brands].map((b, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center shrink-0 w-[120px] h-[50px] relative gray-scale-logo"
            >
              <Image 
                src={b.img} 
                alt="company logo" 
                fill
                sizes="120px"
                className="object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
    </section>
  );
}


function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // ऑटोमैटिक स्क्रॉल/चेंज मैकेनिज्म (हर 5 सेकंड में)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // फ़ेड आउट शुरू करें
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length);
        setIsFading(false); // फ़ेड इन करें
      }, 300); // 300ms ट्रांजिशन डिले
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentCard = portfolioItems[currentIndex];

  return (
    <section id="portfolio" className="relative py-28 2xl:py-35 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 overflow-hidden bg-[#0A0A0A]">
      <div className="absolute top-1/3 -left-32 size-[500px] rounded-full bg-primary/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -right-32 size-[500px] rounded-full bg-accent/15 blur-[140px] pointer-events-none" />
      
      <div className="relative w-full">
        <SectionHead
          eyebrow="Featured work"
          title={<>Selected work that <span className="text-gradient-purple">speaks <br className="hidden md:block"/> for itself.</span></>}
          sub="Explore premium digital experiences, AI platforms, websites and modern products crafted by Hire Top Coder experts."
        />

        <div className="w-full overflow-hidden mt-14">
        

          <div 
            className="flex w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
            {portfolioItems.map((item) => (
              <div 
              key={item.id} 
              className="w-full shrink-0 grid grid-cols-1 lg:grid-cols-12 items-stretch p-5 btn-glass rounded-sm"
              >
                
                {/* left VISUAL SIDE */}
                <div className="lg:col-span-5 flex justify-center items-center overflow-hidden shadow-2xl min-h-[300px] lg:min-h-[400px]">
                  <Image 
                    width={500} 
                    height={500}
                    loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover lg:rounded-tl-sm lg:rounded-bl-sm"
                  />
                </div>

                {/* right CONTENT SIDE */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-8 pl-5 py-10 lg:pl-10">
                  
                  {/* Typography Header Section */}
                  <div className="space-y-4">
                    <h2 className="text-xl md:text-3xl lg:text-4xl 2xl:text-[42px] font-bold tracking-tight text-white leading-[1.2]">
                      {item.title}
                    </h2>
                    
                    <div className="text-[#a1a1aa] text-[10px] lg:text-[13px] 1xl:text-base leading-[1.6] space-y-1">
                      {item.paragraphs.map((p, pIndex) => (
                        <p key={pIndex}>{p}</p>
                      ))}
                    </div>
                  </div>

                  {/* Metric Stats Cards Layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {item.metrics.map((metric) => (
                      <div key={metric.id} className="bg-gradient-to-t from-black/80 to-transparent border border-[oklch(0.62_0.26_305/0.15)] hover-glow-card rounded-xl p-5 flex items-center gap-4">
                        <div className="text-primary text-3xl">
                          {metric.icon}
                        </div>
                        <div>
                          <span className="block text-2xl font-bold text-white tracking-tight">{metric.value}</span>
                          <span className="block text-[#71717a] text-xs font-medium mt-0.5">{metric.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial Box */}
                  <div className="bg-gradient-to-t from-black/80 to-transparent border-l-[6px] border-primary hover-glow-card rounded-xl p-6 relative overflow-hidden">
                    <p className="text-[#d4d4d8] text-xs lg:text-[13px] 1xl:text-base leading-[1.6] font-normal">
                      {item.testimonial}
                    </p>
                  </div>

                  {/* Bottom Link Trigger & Dot Indicators */}
                  <div className="pt-2 flex items-center justify-between">
                    <a
                      href="#"
                      className="inline-block text-primary text-[16px] font-semibold tracking-wide underline underline-offset-8 decoration-primary transition-all duration-200"
                    >
                      Read Full Case Study
                    </a>

                    {/* स्लाइडिंग इंडिकेटर डॉट्स (नीचे दाईं तरफ) */}
                    <div className="flex items-center gap-1.5 pr-2">
                      {portfolioItems.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-5 bg-primary" : "w-1.5 bg-neutral-700 hover:bg-neutral-500"}`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
           

        </div>

      </div>

      <div className="mt-12 flex justify-center">
        <Reveal>

        <GhostButton>View All Case Studies</GhostButton>
        </Reveal>
      </div>
    </section>
  );
}


function Testimonials() {
  return (
    <section className="relative py-28 2xl:py-35 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25    ">
      <div className="w-full">
        <SectionHead
          eyebrow="Trusted by builders"
          title={<>The new standard for <span className="text-gradient-purple">hiring talent.</span></>}
        />
       <div className="grid grid-cols-1 pt-20 md:grid-cols-2 gap-5 lg:gap-10 items-stretch">
          
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="group relative bg-gradient-to-t from-black/80 to-transparent rounded-[16px] border border-[oklch(0.62_0.26_305/0.15)] hover-glow-card p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 "
            >
              <div>
                {/* 5-Star Rating Section */}
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(review.stars)].map((_, index) => (
                    <FaStar 
                      key={index} 
                      className="text-[#f5a623] text-base lg:text-2xl 2xl:text-3xl" 
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Styled Big Quote Icon */}
                <div className="text-primary text-2xl lg:text-3xl mb-4">
                  <FaQuoteLeft className="" />
                </div>

                {/* Review Text Body */}
                <p className="text-[#b1afb8] text-[15px] sm:text-base lg:text-lg 2xl:text-xl leading-[1.7] tracking-wide font-normal italic">
                  {review.quote}
                </p>
              </div>

              {/* Bottom Profile Footer Section */}
              <div className="mt-10">
                {/* Separator Line */}
                <div className="w-full h-[2px] bg-[oklch(0.62_0.26_305/0.15)] mb-6" />
                
              
                <div className="flex items-center gap-4">
             
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-1 ring-[#3a2763] group-hover:ring-[#583794] transition-all duration-500">
                    <Image  width={500} height={500}
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover "
                    />
                  </div>
                  
                  {/* Name and Designation */}
                  <div>
                    <h3 className="text-white text-[16px] font-semibold tracking-wide leading-snug">
                      {review.name}
                    </h3>
                    <p className="text-[#726e7e] text-[13px] font-medium mt-0.5 group-hover:text-[#908b9c] transition-colors duration-500">
                      {review.role}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section id="blog" className="relative py-28 2xl:py-35 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 overflow-hidden  bg-[#0A0A0A]   ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full bg-primary/10 blur-[160px] pointer-events-none" />
      <div className="relative w-full">
        <SectionHead
          eyebrow="Insights & innovation"
          title={<>Insights, trends & <span className="text-gradient-purple">digital innovation.</span></>}
          sub="Explore the latest thoughts on design, AI, branding, product development and modern digital experiences."
        />
    <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
  {posts.map((p) => (

    <article key={p.title} className="group glass rounded-2xl hover-glow-card flex flex-col isolation-isolate">
      

      <div className="aspect-[4/3] rounded-t-2xl overflow-hidden relative bg-[#0A0A0A] select-none">
        <Image  
          priority={false} 
          loading="lazy" 
          src={p.img} 
          alt={p.title}  
          width={1024} 
          height={1024}
          /* 3. 'will-change-transform' और 'style' में backface-visibility जोड़ने से ब्राउज़र पिक्सल को कभी मिस-अलाइन नहीं करेगा */
          className="size-full object-cover group-hover:scale-110 will-change-transform transition-transform duration-700 pointer-events-none" 
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-primary/30 border border-primary/60 backdrop-blur text-white px-2.5 py-1 rounded-full font-bold">
          {p.cat}
        </span>
      </div>

   
      <div className="p-5 flex-1 flex flex-col rounded-b-2xl bg-[#0A0A0A]/40 mt-[-2px] relative z-20 pt-[22px]">
        <h3 className=" text-lg 2xl:text-xl font-semibold leading-snug group-hover:text-primary transition">
          {p.title}
        </h3>
        <p className="mt-2 text-sm text-foreground/75 font-medium leading-relaxed flex-1 group-hover:text-white">
          {p.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs text-foreground/60 font-medium">
            <LuClock className="size-3.5" /> {p.read}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
            Read More <LuArrowRight className="size-3.5" />
          </span>
        </div>
      </div>

    </article>
  ))}
</div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-28 2xl:py-35 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25    ">
      <Reveal>
      <div className="mx-auto max-w-5xl relative rounded-3xl glass p-12 md:p-16 text-center overflow-hidden glow-purple-strong">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-primary/30 blur-[120px]" />
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Your next hire is <br /><span className="text-gradient-purple">one search away.</span>
          </h2>
          <p className="mt-5 text-foreground/80 max-w-xl mx-auto font-normal text-sm md:text-base lg:text-xl ">
            Join thousands of teams shipping faster with the world's most curated talent network.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <PrimaryButton>Start Hiring Talent</PrimaryButton>
            <GhostButton>Become an Expert</GhostButton>
          </div>
        </div>
      </div></Reveal>
    </section>
  );
}



function SectionHead({
  eyebrow, title, sub,
}) {
  return (
    <Reveal>
    <div className="text-center max-w-2xl mx-auto">
      <div className="inline-flex items-center gap-2 text-[8px] md:text-[10px] md:text-xs 2xl:text-sm font-sans uppercase tracking-[0.25em] text-primary mb-4 font-bold">
        <span className="size-1 rounded-full bg-primary" /> {eyebrow}
      </div>
      <h2 className="text-3xl md:text-5xl font-bold leading-[1.05]">{title}</h2>
      {sub && <p className="mt-4 text-foreground/75 text-sm md:text-base lg:text-xl  font-normal">{sub}</p>}
    </div>
    </Reveal>
  );
}