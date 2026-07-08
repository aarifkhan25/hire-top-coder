"use client"
import { ArrowUpRight, Globe2, Users, Briefcase, Layers } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { PrimaryButton, GhostButton, SectionHead, AmbientGlow } from "@/components/site/PageShell";
import { Reveal, Stagger, StaggerItem, WordReveal, TiltCard, Parallax } from "@/components/site/Reveal";
import Image from "next/image"
import  Link from  "next/link"
const work1 = "/assets/work-1.jpg";
const work2 = "/assets/work-2.jpg";
const work3 = "/assets/work-3.png";
const work4 = "/assets/work-4.png";
const work5 = "/assets/work-5.jpg";
const work6 = "/assets/work-6.jpg";
const work7 = "/assets/work-7.jpg";
const work8 = "/assets/work-8.jpg";
const work9 = "/assets/work-9.jpg";
const work10 = "/assets/work-10.png";
const work11 = "/assets/work-11.jpg";

const projects = [
  { title: "Alesk", category: "Management System", desc: "Alesk is a comprehensive, user-friendly customer management system", img: "/assets/case-2.png", results: "3x faster workflow", span: "lg:col-span-2 lg:row-span-2",href:"/case-studies/alesk" },
  { title: "Code Conspirators", category: "Web Design", desc: "Bold agency website with immersive 3D hero and brand storytelling.", img: work2, results: "High-impact brand", span: "" ,href:"/case-studies/speakable"},
  { title: "MKGO Transport", category: "Mobile App", desc: "Flutter-based ride-booking app for city commutes in Toulouse.", img: work3, results: "iOS & Android", span: "" ,href:"/case-studies/mkgo"},
  { title: "Rolling Star Casino", category: "Web App", desc: "Full-featured online casino platform built in React JS.", img:work4, results: "Multi-game platform", span: "lg:col-span-2",href:"/case-studies/casino" },
  { title: "Wizz Air Integration", category: "Travel Platform", desc: "Flight booking and deals platform with multi-city search.", img: work5, results: "Booking platform", span: "",href:"/case-studies/alesk" },
  { title: "Workla", category: "Mobile App", desc: "Task management mobile app with calendar and team collaboration.", img: work6, results: "Cross-platform", span: "" ,href:"/case-studies/alesk"},
  { title: "Code Conspirators — Outdoors", category: "Landing Page", desc: "Event landing page for the 2025 DSC Convention with lead capture.", img: work7, results: "High-conversion event LP", span: "lg:col-span-2",href:"/case-studies/alesk" },
  { title: "Tairo Real Estate", category: "Real Estate Platform", desc: "Property search platform with listings, agent profiles and geolocation filters.", img: work8, results: "24 yrs expertise", span: "",href:"/case-studies/alesk" },
  { title: "Cheshire Cats Club", category: "NFT / Web3", desc: "NFT collectibles launch site with countdown, roadmap and OpenSea integration.", img: work9, results: "Web3 launch", span: "",href:"/case-studies/alesk" },
  { title: "Olesya Cloud Technology", category: "IT / Cloud", desc: "Multi-page IT solutions and managed services website for cloud infrastructure.", img: work10, results: "Cloud infrastructure", span: "lg:col-span-2",href:"/case-studies/alesk" },
  { title: "Themi — Truth Platform", category: "Content Platform", desc: "Dark editorial content website with cinematic image layouts and immersive storytelling.", img: work11, results: "Editorial design", span: "",href:"/case-studies/alesk" },
];

const industries = [
  "Fintech", "Healthcare", "E-commerce", "SaaS", "AI & ML", "EdTech",
  "Media", "Travel", "Real Estate", "Climate", "Crypto", "Gaming",
];

const caseStudies = [
  { c: "Speakable", t: "This platform provides a personalized English learning experience", d: "A personalized English learning platform connecting students in Poland with their ideal English teachers.", img: "/assets/work-12.png",href:"/case-studies/speakable"},
  { c: "Alesk",   t: "ALESK is a comprehensive, user-friendly customer management system", d: "A comprehensive healthcare customer management platform connecting patients, doctors, and clinics across the Portuguese-speaking community.", img: "/assets/case-2.png",href:"/case-studies/alesk"},
];

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

const metrics = [
  { v: 1240, suf: "+", l: "Projects Delivered",  Icon: Briefcase },
  { v: 480,  suf: "+", l: "Clients Served",      Icon: Users },
  { v: 42,   suf: "",  l: "Countries Reached",   Icon: Globe2 },
  { v: 3200, suf: "+", l: "Expert Network",      Icon: Layers },
];

export default function CaseStudyPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-20 px-4 overflow-hidden">
        <AmbientGlow />
        <div className="relative w-full text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full px-3 md:px-4 py-1.5 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-primary border border-primary/40 bg-primary/10 mb-10 font-semibold">
              Selected Work · 2024–2026
            </div>
          </Reveal>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.02] tracking-tight">
            <WordReveal text="Work That" />
            <br />
            <span className="text-gradient-purple"><WordReveal text="Delivers Results" /></span>
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-6 w-full text-lg text-foreground/75 font-medium">
              Explore digital products, AI systems, SaaS platforms, websites,
              branding projects and modern experiences built by Hire Top Coder experts.
            </p>
          </Reveal>
        </div>
      </section>

       {/* PROJECTS BENTO */}
          <section className="relative py-16 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25">
            <Stagger className="w-full grid lg:grid-cols-3 lg:auto-rows-[280px] gap-4">
              {projects?.map((p) => (
                <StaggerItem key={p.title} className={p?.span}>
                  <TiltCard className="group relative h-full min-h-[280px] rounded-3xl overflow-hidden border border-border/40 hover-glow-card cursor-pointer">
                    <Image width={500} height={500} src={p?.img} alt={p?.title}   loading="eager"
                      className="absolute inset-0 size-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1200ms]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                    <div className="absolute inset-0 p-7 flex flex-col justify-end">
                      <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary font-bold">{p?.category}</div>
                      <h3 className="mt-2 text-2xl font-extrabold tracking-tight">{p?.title}</h3>
                      <p className="mt-1 text-sm text-foreground/75 font-medium line-clamp-2">{p?.desc}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs font-bold text-white/85 glass px-3 py-1 rounded-full">{p?.results}</span>
                        <Link href={p?.href} className="size-9 grid place-items-center rounded-full glass text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all">
                          <ArrowUpRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </Stagger>
          </section>
    
          {/* CASE STUDIES */}
          <section className="relative py-24 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25">
            <SectionHead eyebrow="Case Studies" title={<>Stories behind the <span className="text-gradient-purple">outcomes</span></>} />
            <div className="mt-14 w-full space-y-6">
              {caseStudies?.map((cs, i) => (
                <Reveal key={cs.t} delay={i * 0.1}>
                  <div className="group relative grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden glass hover-glow-card">
                    <div className={`relative h-72 md:h-[420px] overflow-hidden ${i % 2 ? "md:order-2" : ""}`}>
                      <Image width={500} height={500} src={cs?.img} alt={cs?.t}   loading="eager"
                        className="size-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1400ms]" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary font-bold">{cs?.c}</div>
                      <h3 className="mt-3 text-3xl font-extrabold tracking-tight leading-tight">{cs?.t}</h3>
                      <p className="mt-4 text-foreground/75 font-medium">{cs?.d}</p>
                      <div className="mt-6">
                        <GhostButton href={cs?.href}>Read Case Study</GhostButton>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

      {/* INDUSTRIES */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25">
        <SectionHead eyebrow="Industries Served" title="Trusted across every vertical" />
        <Stagger className="mt-14 w-full flex flex-wrap justify-center gap-3">
          {industries.map((ind) => (
            <StaggerItem key={ind}>
              <div className="glass rounded-full px-5 py-2.5 text-sm font-semibold text-foreground/85 hover:text-white hover:border-primary/60 transition">
                {ind}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* METRICS */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 overflow-hidden">
        <Parallax speed={50} className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full bg-primary/15 blur-[160px]" />
        </Parallax>
        <SectionHead eyebrow="By the Numbers" title={<>Outcomes at <span className="text-gradient-purple">scale</span></>} />
        <Stagger className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics?.map((m) => (
            <StaggerItem key={m.l}>
              <div className="glass rounded-2xl p-7 text-center hover-glow-card">
                <m.Icon className="size-5 w-full  text-primary mb-3" />
                <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient-purple">
                  <Counter to={m.v} suffix={m.suf} />
                </div>
                <div className="mt-2 text-sm text-foreground/70 font-medium">{m.l}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25">
        <div className="relative w-full glass rounded-[2.5rem] p-12 md:p-16 text-center overflow-hidden ring-purple">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-accent/25 pointer-events-none" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-primary/30 blur-[140px] animate-pulse-glow pointer-events-none" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Have a project in mind? <span className="text-gradient-purple">Let's build it.</span>
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton>Start a Project</PrimaryButton>
              <GhostButton>View All Work</GhostButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}