"use client"
import Link from "next/link";
import {useRef} from "react"
import { motion, useScroll, useTransform } from "framer-motion";
import {
  LuArrowRight,  LuSparkles, LuCheck, LuStar, LuZap, LuShieldCheck, LuGlobe, LuQuote, LuClock,
} from "react-icons/lu";
import { FiTrendingUp, FiClock, FiUsers, FiArrowRight } from 'react-icons/fi';
import {GhostButton} from "@/components/site/PageShell.jsx"
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
const blog1 = "/assets/blog-1.jpg";
const blog2 = "/assets/blog-2.jpg";
const blog3 = "/assets/blog-3.jpg";
const blog4 = "/assets/blog-4.jpg";


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

const brands = ["NORTHWIND", "VAULT", "HALO", "NEXUS", "PARETO", "ORBIT", "MERIDIAN", "AXIOM"];

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
        {/* <Services /> */}
        <Portfolio />
        {/* <How /> */}
        {/* <Stats /> */}
        <Testimonials />
        <Blog />
        <CTA />
        {/* <Testimonial/> */}
      </motion.main>
  
    </div>
  );
}



function PrimaryButton({ children, className = "" }) {
  return (
    <Link href="/starthiring" className={`group inline-flex items-center gap-2 expert-btn text-[#381385] font-bold tracking-tight rounded-full px-8 py-4 text-[15px] 1xl:text-lg ${className}`}>
      {children}
      <LuArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
    </Link >
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

        <p className="mt-12 text-sm md:text-base lg:text-xl 2xl:text-[22px] text-[#b1afb8] max-w-3xl mx-auto leading-relaxed font-medium">
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
      <div className="flex animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((b, i) => (
          <span key={i} className="mx-10 font-display font-bold text-xl text-[
oklab(0.979998 0.000858366 -0.00490087 / 0.5)] tracking-[0.3em]">
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-28 px-4 sm:px-6">
      <div className="w-full">
        <SectionHead
          eyebrow="Signature services"
          title={<>Hand-picked, <span className="text-gradient-purple">ready to ship.</span></>}
          sub="Fixed-scope packages from our top 1% — launch in days, not quarters."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <article key={s.title} className="group relative glass rounded-2xl overflow-hidden hover-glow-card">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/40 via-accent/20 to-black relative overflow-hidden">
                <div className="absolute inset-0 bg-dots opacity-40" />
                <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-white text-black px-2.5 py-1 rounded-full font-extrabold">
                  {s.tag}
                </div>
                <div className="absolute inset-0 grid place-items-center">
                  < LuSparkles className="size-14 text-white/80 animate-float" />
                </div>
              </div>
              <div className="p-5">
                <div className="text-xs text-foreground/60 mb-1 font-medium">{s.by}</div>
                <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition">{s.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs">
                    <LuStar className="size-3.5 fill-primary text-primary" />
                    <span className="font-semibold">{s.rating}</span>
                  </div>
                  <div className="text-sm font-display font-extrabold text-white">{s.price}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 2xl:py-35 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 overflow-hidden  bg-[#0A0A0A]    ">
        <div className="absolute top-1/3 -left-32 size-[500px] rounded-full bg-primary/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -right-32 size-[500px] rounded-full bg-accent/15 blur-[140px] pointer-events-none" />
      <div className="relative w-full">
        <SectionHead
          eyebrow="Featured work"
          title={<>Selected work that <span className="text-gradient-purple">speaks <br className="hidden md:block"/> for itself.</span></>}
          sub="Explore premium digital experiences, AI platforms, websites and modern products crafted by Hire Top Coder experts."
        />
   <div className=" mt-10 lg:mt-20 w-full h-full md:h-[600px] 2xl:h-[800px]  btn-glass rounded-[24px] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
        
        {/* =========================================================
            LEFT COLUMN - CONTENT & METRICS SECTION
            ========================================================= */}
        <div className="p-5 md:p-8 lg:p-12 2xl:p-16 flex flex-col justify-between space-y-10 order-2">
          
          {/* टॉप टैग और हेडिंग */}
          <div className="space-y-5">
            <span className="uppercase bg-primary/25 text-white border border-primary/50 backdrop-blur text-[10px] 1xl:text-xs font-semibold px-3 py-1.5 rounded-md tracking-wide">
              CRM Transformation
            </span>
            <h2 className="text-white text-xl md:text-2xl lg:text-3xl 2xl:text-[36px] font-bold leading-[1.3] mt-5 tracking-tight">
              Sales CRM Modernization: 30% Faster Deal Cycles &amp; Reduced Operational Costs
            </h2>
            <p className="text-[#a0b3cc] text-xs lg:text-[15px] 1xl:text-[16px] leading-[1.6] font-normal">
              The client was struggling with a fragmented CRM system, duplicate leads, and lack of visibility into their sales pipeline. We re-architected their CRM using a scalable cloud-based solution, streamlined workflows, and integrated all customer touchpoints into a unified system.
            </p>
          </div>

          {/* मिडिल सेक्शन - 3 ब्लॉक मैट्रिक्स ग्रिड */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* मीट्रिक 1 */}
            <div className="bg-gradient-to-t from-black/80 to-transparent rounded-[16px] border border-[oklch(0.62_0.26_305/0.15)] hover-glow-card rounded-xl p-2  md:p-3 1xl:p-5 flex flex-col justify-between space-y-4 ">
              <FiTrendingUp className="text-primary text-xs lg:text-base 2xl:text-xl" />
              <div>
                <span className="block text-white text text-base lg:text-xl-2xl:2xl font-bold tracking-tight">30%</span>
                <span className="block text-[#a0b3cc] text text-[10px] -1xl:xs mt-1 font-medium">Faster Deal Cycles</span>
              </div>
            </div>

            {/* मीट्रिक 2 */}
            <div className="bg-gradient-to-t from-black/80 to-transparent rounded-[16px] border border-[oklch(0.62_0.26_305/0.15)] hover-glow-card rounded-xl p-2  md:p-3 1xl:p-5 flex flex-col justify-between space-y-4 ">
              <FiClock className="text-primary text-xs lg:text-base 2xl:text-xl" />
              <div>
                <span className="block text-white text-base lg:text-xl 2xl:text-2xl font-bold tracking-tight">99.5%</span>
                <span className="block text-[#a0b3cc] text-[10px]  1xl:text-xs mt-1 font-medium">Forecast Accuracy</span>
              </div>
            </div>

            {/* मीट्रिक 3 */}
            <div className="bg-gradient-to-t from-black/80 to-transparent rounded-[16px] border border-[oklch(0.62_0.26_305/0.15)] hover-glow-card rounded-xl p-2  md:p-3 1xl:p-5 flex flex-col justify-between space-y-4 ">
              <FiUsers className="text-primary text-xs lg:text-base 2xl:text-xl" />
              <div>
                <span className="block text-white text-base lg:text-xl 2xl:text-2xl font-bold tracking-tight">0</span>
                <span className="block text-[#a0b3cc] text-[10px]  1xl:text-xs mt-1 font-medium">Duplicate Leads</span>
              </div>
            </div>
          </div>

          {/* बॉटम सेक्शन - टेस्टीमोनियल ब्लॉक */}
          {/* <div className="bg-[#0f2545] border-l-2 border-[#ff6a42] rounded-r-xl p-6 space-y-3">
            <p className="text-[#d0e0f5] text-[14px] sm:text-[15px] leading-[1.6] italic font-normal">
              &ldquo;HireDeveloper didn&apos;t just send us a developer — they sent us a problem solver. The onboarding was seamless and within 48 hours he was already pushing commits.&rdquo;
            </p>
            <span className="block text-primary text-sm font-semibold tracking-wide">
              Eduardo Rangel
            </span>
          </div> */}

          {/* एक्शन लिंक */}
          <div className="pt-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary  font-semibold text-xs lg:text-sm tracking-wide group transition-colors duration-200"
            >
              Read Full Case Study
              <FiArrowRight className="transform group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

        </div>

        {/* =========================================================
            RIGHT COLUMN - IMAGE OVERLAY SECTION
            ========================================================= */}
        <div className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-full w-full bg-[#0d1f39] order-1">
          {/* इमेज लेयर */}
          <Image width={500} height={500} loading="lazy"
            src={work1} 
            alt="Hand holding a smartphone showing analytics app dashboard"
            className="w-full h-full object-cover object-center"
          />
          
          {/* टॉप राइट फ़्लोटिंग बैच */}
          <div className="absolute top-6 right-6 z-10">
            <span className="uppercase bg-primary/25 text-white border border-primary/50 backdrop-blur text-[10px] 1xl:text-xs font-semibold px-3 py-1.5 rounded-md tracking-wide">
              Sales CRM
            </span>
          </div>
        </div>
</div>
      </div>
  <div className="mt-12 flex justify-center">
          <GhostButton>View All Case Studies</GhostButton>
        </div>
    </section>
  );
}


function How() {
  return (
    <section id="how" className="relative py-28 px-4 sm:px-6">
      <div className="w-full">
        <SectionHead
          eyebrow="How Hire Top Coder works"
          title={<>From brief to <span className="text-gradient-purple">brilliance</span> in minutes.</>}
          sub="A cinematic hiring experience, powered by AI-curated matching."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-5 relative">
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((s) => (
            <div key={s.n} className="relative glass rounded-2xl p-8">
              <div className=" font-sans text-xs text-primary mb-4 font-bold">{s.n}</div>
              <h3 className="text-2xl font-bold mb-3">{s.t}</h3>
              <p className="text-foreground/75 font-medium leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { i: LuShieldCheck, t: "Vetted & verified", d: "Every expert passes a 5-stage screening." },
    { i: LuZap,         t: "47s avg. match",    d: "AI matching, human curation." },
    { i: LuGlobe,      t: "Worldwide reach",   d: "Talent across 72 countries, 24/7." },
    { i: LuCheck,       t: "Outcome guarantee", d: "Pay only when milestones land." },
  ];
  return (
    <section id="enterprise" className="relative py-20 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25">
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((x) => (
          <div key={x.t} className="glass rounded-2xl p-6 flex gap-4 items-start">
            <div className="size-10 rounded-lg bg-primary/20 grid place-items-center shrink-0 border border-primary/30">
              <x.i className="size-5 text-primary" />
            </div>
            <div>
              <div className="font-bold">{x.t}</div>
              <div className="text-sm text-foreground/70 mt-1 font-medium">{x.d}</div>
            </div>
          </div>
        ))}
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
            <article key={p.title} className="group glass rounded-2xl overflow-hidden hover-glow-card flex flex-col">
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image  priority={false} loading ="lazy" src={p.img} alt={p.title}  width={1024} height={1024}
                  className="size-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-primary/30 border border-primary/60 backdrop-blur text-white px-2.5 py-1 rounded-full font-bold">
                  {p.cat}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-display text-lg font-extrabold leading-snug group-hover:text-primary transition">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/75 font-medium leading-relaxed flex-1">{p.excerpt}</p>
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
      <div className="mx-auto max-w-5xl relative rounded-3xl glass p-12 md:p-16 text-center overflow-hidden glow-purple-strong">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-primary/30 blur-[120px]" />
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Your next hire is <br /><span className="text-gradient-purple">one search away.</span>
          </h2>
          <p className="mt-5 text-foreground/80 max-w-xl mx-auto font-medium text-lg">
            Join thousands of teams shipping faster with the world's most curated talent network.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <PrimaryButton>Start Hiring Talent</PrimaryButton>
            <GhostButton>Become an Expert</GhostButton>
          </div>
        </div>
      </div>
    </section>
  );
}



function SectionHead({
  eyebrow, title, sub,
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="inline-flex items-center gap-2 text-[8px] md:text-[10px] md:text-xs 2xl:text-sm font-sans uppercase tracking-[0.25em] text-primary mb-4 font-bold">
        <span className="size-1 rounded-full bg-primary" /> {eyebrow}
      </div>
      <h2 className="text-3xl md:text-5xl font-bold leading-[1.05]">{title}</h2>
      {sub && <p className="mt-4 text-foreground/75 text-sm md:text-base lg:text-xl 2xl:text-[22px] font-medium">{sub}</p>}
    </div>
  );
}