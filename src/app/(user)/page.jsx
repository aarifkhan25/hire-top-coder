"use client"
import { motion } from "framer-motion";
import {
  LuArrowRight,  LuSparkles, LuCheck, LuStar, LuZap, LuShieldCheck, LuGlobe, LuQuote, LuClock,
} from "react-icons/lu";
import Image from 'next/image'
const expert1 = "/assets/expert-1.jpg";
const expert2 = "/assets/expert-2.jpg";
const expert3 = "/assets/expert-3.jpg";
const expert4 = "/assets/expert-4.jpg";
const expert5 = "/assets/expert-5.jpg";
const work1 = "/assets/work-1.jpg";
const work2 = "/assets/work-2.jpg";
const work3 = "/assets/work-3.jpg";
const work4 = "/assets/work-4.jpg";
const work5 = "/assets/work-5.jpg";
const work6 = "/assets/work-6.jpg";
const blog1 = "/assets/blog-1.jpg";
const blog2 = "/assets/blog-2.jpg";
const blog3 = "/assets/blog-3.jpg";
const blog4 = "/assets/blog-4.jpg";


const experts = [
  { name: "Jane",   role: "GRAPHIC DESIGNER", img: expert1, accent: "oklch(0.70 0.22 305)" },
  { name: "Mark",   role: "DEVELOPER",        img: expert2, accent: "oklch(0.65 0.26 295)" },
  { name: "Mary",   role: "UI DESIGNER",      img: expert3, accent: "oklch(0.68 0.28 325)" },
  { name: "Amanda", role: "GROWTH MARKETER",  img: expert4, accent: "oklch(0.62 0.30 315)" },
  { name: "Sam",    role: "CHIEF OF STAFF",   img: expert5, accent: "oklch(0.55 0.28 305)" },
];

const brands = ["NORTHWIND", "VAULT", "HALO", "NEXUS", "PARETO", "ORBIT", "MERIDIAN", "AXIOM"];

const services = [
  { tag: "Most Hired", title: "Brand Identity System", price: "from $1,800", rating: 4.9, by: "Aria Studio" },
  { tag: "Trending",   title: "AI Chatbot Integration", price: "from $2,400", rating: 5.0, by: "Nexus.ai" },
  { tag: "Premium",    title: "SaaS Landing Page",      price: "from $3,200", rating: 4.9, by: "Northwind" },
  { tag: "New",        title: "Conversion Audit & Growth", price: "from $1,200", rating: 4.8, by: "Pareto Co." },
];

const works = [
  { title: "Nebula AI Analytics", category: "AI Dashboard", desc: "Realtime insights platform with predictive intelligence for global SaaS teams.",
    img: work1, stat1: "+312% activation", stat2: "12 wk delivery", span: "lg:col-span-2 lg:row-span-2" },
  { title: "Vault Cloud", category: "SaaS Website", desc: "High-conversion marketing site for an enterprise security platform.",
    img: work2, stat1: "2.4x signups", stat2: "9 days", span: "lg:col-span-2" },
  { title: "Halo Pay", category: "Mobile App Design", desc: "A premium banking app redesigned end-to-end with neon dark UI.",
    img: work3, stat1: "4.9★ app store", stat2: "iOS + Android", span: "" },
  { title: "Heron & Co.", category: "Branding Project", desc: "Editorial-grade visual identity for a luxury lifestyle agency.",
    img: work4, stat1: "12 deliverables", stat2: "6 wk sprint", span: "" },
  { title: "Orbit Workspace", category: "Web Platform", desc: "All-in-one collaboration platform built for elite product teams.",
    img: work5, stat1: "+58% retention", stat2: "B2B SaaS", span: "lg:col-span-2" },
  { title: "Pulse Flows", category: "AI Automation System", desc: "Multi-agent automation engine wiring tools into one workflow brain.",
    img: work6, stat1: "1.2M runs/mo", stat2: "API-first", span: "lg:col-span-2" },
];

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

const testimonials = [
  { q: "Hire Top Coder matched us with a senior team in 14 minutes. Shipped in 9 days.", a: "Lena Park",   r: "Head of Product, Vault" },
  { q: "The quality bar is unreal. It feels like a private members club for talent.", a: "Marcus Reid", r: "Founder, Halo Labs" },
  { q: "Cut our procurement cycle from 6 weeks to 2 days. Game over.", a: "Priya Shah", r: "COO, Northbeam" },
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
        <Services />
        <Portfolio />
        <How />
        <Stats />
        <Testimonials />
        <Blog />
        <CTA />
      </motion.main>
  
    </div>
  );
}



function PrimaryButton({ children, className = "" }) {
  return (
    <button className={`group inline-flex items-center gap-2 btn-primary-glow text-white font-bold tracking-tight rounded-full px-8 py-4 text-[15px] ${className}`}>
      {children}
      <LuArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
    </button>
  );
}

function GhostButton({ children, className = "" }) {
  return (
    <button className={`inline-flex items-center gap-2 btn-glass text-white font-bold tracking-tight rounded-full px-8 py-4 text-[15px] ${className}`}>
      {children}
    </button>
  );
}

function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[900px] rounded-full bg-primary/25 blur-[160px] animate-pulse-glow pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-3 md:px-4 py-1.5 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-primary border border-primary/40 bg-primary/10 mb-10 font-semibold">
          Build faster with elite digital experts
        </div>

        <h1 className="font-display font-extrabold leading-[0.95] text-[clamp(2.75rem,8vw,7.5rem)]">
          Hire elite <br />
          <span className="text-gradient-purple">digital experts.</span>
        </h1>

        <p className="mt-8 text-base md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
          The best designers, engineers, marketers and strategists in the world,
          ready to hire in 24 hours. AI-matched, human-vetted, and instantly available.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <PrimaryButton>Start Hiring</PrimaryButton>
          <GhostButton>Browse Experts</GhostButton>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-xs text-foreground/60 font-medium">
          <span>Backed by</span>
          <span className="inline-flex items-center gap-1.5 font-display font-bold text-white">
            <span className="size-5 grid place-items-center rounded bg-white text-black font-extrabold text-[11px]">Y</span>
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
      className="relative shrink-0 w-[280px] sm:w-[320px] rounded-3xl p-2 overflow-hidden"
      style={{ background: `linear-gradient(180deg, ${expert.accent}, transparent 60%)` }}
    >
      <div className="rounded-[1.25rem] overflow-hidden bg-black relative">
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 z-10 text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1 rounded-md font-bold"
          style={{ color: expert.accent, background: "rgba(0,0,0,0.55)", border: `1px solid ${expert.accent}` }}
        >
          {expert.role}
        </div>
        <Image priority={false}  src={expert.img} alt={`${expert.name}, ${expert.role}`} width={640} height={800} loading="lazy"
          className="w-full aspect-[4/5] object-cover" />
        <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black via-black/70 to-transparent">
          <div className="font-display text-3xl font-extrabold">{expert.name}</div>
          <div className="flex items-center gap-1 mt-1 text-xs text-foreground/80 font-medium">
            <LuStar className="size-3 fill-primary text-primary" /> 4.9 · Available now
          </div>
        </div>
      </div>
    </article>
  );
}

function Marquee() {
  return (
    <section className="relative py-12 border-y border-border/40 overflow-hidden">
      <div className="text-center text-xs uppercase tracking-[0.3em] text-foreground/50 mb-6 font-semibold">
        Trusted by teams shipping with Hire Top Coder
      </div>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((b, i) => (
          <span key={i} className="mx-10 font-display font-bold text-xl text-foreground/50 tracking-[0.3em]">
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
      <div className="mx-auto max-w-7xl">
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
    <section id="portfolio" className="relative py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-1/3 -left-32 size-[500px] rounded-full bg-primary/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -right-32 size-[500px] rounded-full bg-accent/15 blur-[140px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Featured work"
          title={<>Selected work that <span className="text-gradient-purple">speaks for itself.</span></>}
          sub="Explore premium digital experiences, AI platforms, websites and modern products crafted by Hire Top Coder experts."
        />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[260px] gap-5">
          {works.map((w) => (
            <WorkCard key={w.title} w={w} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <GhostButton>View All Case Studies</GhostButton>
        </div>
      </div>
    </section>
  );
}

function WorkCard({ w }) {
  return (
    <article
      className={`group relative rounded-3xl overflow-hidden glass hover-glow-card ${w.span}`}
    >
      <Image  priority={false} loading ="lazy"
        src={w.img}
        alt={w.title}
   
        width={1024}
        height={1024}
        className="absolute inset-0 size-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="absolute inset-x-0 top-0 p-5 flex items-start justify-between">
        <span className="text-[10px] uppercase tracking-[0.25em] font-bold bg-primary/25 text-white border border-primary/50 backdrop-blur px-3 py-1.5 rounded-full">
          {w.category}
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 space-y-3">
        <h3 className="font-display text-2xl md:text-3xl font-extrabold leading-tight">{w.title}</h3>
        <p className="text-sm text-foreground/80 leading-relaxed max-w-md font-medium">{w.desc}</p>
        <div className="flex items-center gap-4 text-[11px] text-foreground/70 font-mono uppercase tracking-wider pt-1">
          <span className="flex items-center gap-1.5"><span className="size-1 rounded-full bg-primary" />{w.stat1}</span>
          <span className="flex items-center gap-1.5"><span className="size-1 rounded-full bg-accent" />{w.stat2}</span>
        </div>
        <div className="pt-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
            View Case Study <LuArrowRight className="size-4" />
          </span>
        </div>
      </div>
      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5 group-hover:ring-primary/40 transition-all duration-500 pointer-events-none" />
    </article>
  );
}

function How() {
  return (
    <section id="how" className="relative py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="How Hire Top Coder works"
          title={<>From brief to <span className="text-gradient-purple">brilliance</span> in minutes.</>}
          sub="A cinematic hiring experience, powered by AI-curated matching."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-5 relative">
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((s) => (
            <div key={s.n} className="relative glass rounded-2xl p-8">
              <div className="font-mono text-xs text-primary mb-4 font-bold">{s.n}</div>
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
    <section id="enterprise" className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
    <section className="relative py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Trusted by builders"
          title={<>The new standard for <span className="text-gradient-purple">hiring talent.</span></>}
        />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure key={t.a} className="glass rounded-2xl p-7 relative hover-glow-card">
              <LuQuote className="size-7 text-primary/70 mb-4" />
              <blockquote className="text-lg leading-relaxed font-medium">"{t.q}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                <div>
                  <div className="font-bold text-sm">{t.a}</div>
                  <div className="text-xs text-foreground/70 font-medium">{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section id="blog" className="relative py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full bg-primary/10 blur-[160px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Insights & innovation"
          title={<>Insights, trends & <span className="text-gradient-purple">digital innovation.</span></>}
          sub="Explore the latest thoughts on design, AI, branding, product development and modern digital experiences."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((p) => (
            <article key={p.title} className="group glass rounded-2xl overflow-hidden hover-glow-card flex flex-col">
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image width={500} height={500} priority={false} loading ="lazy" src={p.img} alt={p.title} loading="lazy" width={1024} height={1024}
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
    <section className="relative py-28 px-4 sm:px-6">
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
      <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-4 font-bold">
        <span className="size-1 rounded-full bg-primary" /> {eyebrow}
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.05]">{title}</h2>
      {sub && <p className="mt-4 text-foreground/75 text-lg font-medium">{sub}</p>}
    </div>
  );
}