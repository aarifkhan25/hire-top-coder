"use client"
import { AmbientGlow, GhostButton, PrimaryButton, SectionHead } from "@/components/site/PageShell";
import { Reveal, Stagger, StaggerItem, TiltCard } from "@/components/site/Reveal";
import { ArrowUpRight, BookOpen, Clock, Download } from "lucide-react";
import Image from 'next/image';
const blog1 = "/assets/blog-1.png";
const blog2 = "/assets/blog-2.png";
const blog3 = "/assets/blog-3.png";
const blog4 = "/assets/blog-4.png";

const categories = ["AI", "Product Design", "SaaS", "Branding", "Development", "Startups", "Automation"];

const featured = {
  title: "The Future of AI Design Is Adaptive",
  desc: (<>
Generative interfaces are no longer a concept — they are the new standard for AI-powered products
  </>),
  cat: "AI · Report",
  time: "18 min read",
  img: blog1,
};

const articles = [
  { c: "Product Design", t: "Designing for the agentic web",       d: "Patterns for interfaces where AI does the work.", img: blog2, time: "8 min" },
  { c: "SaaS",            t: "Pricing in the era of AI margins",   d: "How leading SaaS teams are re-pricing.",         img: blog3, time: "11 min" },
  { c: "Engineering",     t: "Shipping faster with small pods",    d: "Why six-person teams outperform.",               img: blog4, time: "6 min" },
  { c: "Branding",        t: "The new luxury of restraint",        d: "Less is louder than ever.",                       img: blog2, time: "5 min" },
  { c: "Startups",        t: "Hiring your first 10 with intention", d: "Compounding the culture you want.",              img: blog3, time: "9 min" },
  { c: "Automation",      t: "From prompts to pipelines",          d: "Operationalizing AI inside the org.",            img: blog1, time: "7 min" },
];

const guides = [
  { t: "The Founder's Hiring Playbook",   d: "A 40-page deep dive into building elite product teams.", tag: "PDF · 40 pages" },
  { t: "AI Product Launch Checklist",      d: "Everything to ship a launch-worthy AI feature.",         tag: "Notion Template" },
  { t: "Brand System Starter Kit",         d: "Tokens, typography, and component scaffolding.",         tag: "Figma File" },
];

export default function BlogPage() {
  return (
    <main className="px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 w-full">
      {/* HERO */}
     <section className="relative pt-20 pb-10 lg:pt-40 lg:pb-20 overflow-hidden">
  <AmbientGlow />
  <div className="relative w-full text-center ">
    
    {/* 1. बैज (Badge) सेक्शन */}
    <Reveal>
      <div className="inline-flex items-center gap-2 rounded-full px-3 md:px-4 py-1.5 text-[6px] sm:text-[8px] md:text-[10px] md:text-xs 2xl:text-sm font-sans uppercase tracking-[0.2em] text-primary border border-primary/40 bg-primary/10 mb-5 md:mb-10 font-semibold">
        The Hire Top Coder Field Notes
      </div>
    </Reveal>
  
    {/* 2. मुख्य हेडिंग (H1) सेक्शन */}
    {/* 🛠️ फ़िक्स: H1 को Reveal के अंदर डाला ताकि इसका लेआउट फ्लो कंपाइलर न तोड़े */}
   <Reveal delay={0.15}>
  <h1 
    className="font-bold leading-[1.15] text-white block w-full text-center overflow-visible"
    style={{
      fontSize: 'clamp(2rem, 6vw, 8rem)', 
    }}
  >
    Insights, Trends & <br />
    
    {/* 🛠️ फ़िक्स: pb-4 और overflow-visible जोड़ा ताकि 'g' का निचला हिस्सा बिल्कुल न कटे */}
    <span 
      className="bg-clip-text text-transparent inline-block mt-2 md:mt-4 pb-4 overflow-visible"
      style={{
        backgroundImage: 'linear-gradient(135deg, oklch(0.85 0.18 305), oklch(0.65 0.28 320))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: 'inherit',
      }}
    >
      Digital Innovation
    </span>
  </h1>
</Reveal>

    {/* 3. सब-पैराग्राफ सेक्शन */}
    <Reveal delay={0.3}>
      <p className=" md:mt-12 text-sm md:text-base lg:text-xl text-[#b1afb8] max-w-3xl mx-auto leading-relaxed font-normal">
        Playbooks, essays, and downloadable resources from the experts
        building the next generation of digital products.
      </p>
    </Reveal>

  </div>
</section>

      {/* FEATURED ARTICLE */}
      <section className="relative py-10 lg:py-28 2xl:py-35">
        <div className="w-full xl:px-20 2xl:px-40 ">
          <Reveal>
            <TiltCard className="group relative rounded-3xl overflow-hidden border border-border/40 hover-glow-card cursor-pointer">
              <div className="grid md:grid-cols-2 ">
                <div className="relative aspect-[16/11] md:aspect-auto overflow-hidden order-2 md:order-1">
                  <Image width={500} height={500}   priority={false}  src={featured.img} alt={featured.title}
                    className="size-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1400ms]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                </div>
                <div className="p-6 md:p-8  xl:p-12 2xl:p-25  flex flex-col justify-center order-1 md:order-2   glass">
                  <div className="text-[9px] md:text-[11px] xl:text-xs 2xl:text-base font-mono uppercase tracking-[0.25em] text-primary font-bold">Featured · {featured.cat}</div>
                  <h2 className="mt-2 md:mt-4 text-xl md:text-3xl lg:text-4xl 2xl:text-[38px] font-extrabold tracking-tight leading-tight">{featured.title}</h2>
                  <p className="mt-2 md:mt-4 text-foreground/75 text-[11px] md:text-xs lg:text-base 2xl:text-lg font-medium">{featured.desc}</p>
                  <div className="mt-2 md:mt-6 flex items-center gap-4 text-sm 2xl:text-base text-foreground/65 font-medium">
                    <span className="inline-flex items-center text-xs   lg:text-base 2xl:text-lg md:gap-1.5"><Clock className="size-2.5 md:size-3.5" />{featured.time}</span>
                    <span>·</span>
                    <span className="text-xs  lg:text-base 2xl:text-lg">By the Hire Top Coder </span>
                  </div>
                  <div className="mt-5 md:mt-8">
                    <PrimaryButton href="/blog ">Read the Report</PrimaryButton>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="relative ">
        <Stagger className="w-full   flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <StaggerItem key={c}>
              <button className="glass rounded-full px-5 py-2 text-xs md:text-sm font-semibold  border border-white/10  bg-primary/10 transition-colors hover:border-primary  text-[#F0EDFF]  ">
                {c}
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* LATEST BLOGS */}
      <section className="relative py-10 lg:py-28 2xl:py-35">
        <SectionHead eyebrow="Latest" title={<>Fresh from the <span className="text-gradient-purple">network</span></>} />
        <Stagger className="mt-6 md:mt-14 w-full   grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((a) => (
            <StaggerItem key={a.t}>
              <TiltCard className="group glass rounded-3xl overflow-hidden hover-glow-card cursor-pointer h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image width={500} height={500}   priority={false}  src={a.img} alt={a.t}
                    className="size-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1200ms]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-4 md:p-6">
                  <div className="text-[8px] md:text-[11px] 2xl:text-sm font-mono uppercase tracking-[0.25em] text-primary font-bold">{a.c}</div>
                  <h3 className="mt-3 text-base  md:text-xl 2xl:text-[22px] font-bold tracking-tight leading-snug">{a.t}</h3>
                  <p className="mt-2 text-xs md:text-sm 2xl:text-base text-foreground/70 font-medium">{a.d}</p>
                  <div className="mt-3 md:mt-5 flex items-center  justify-between text-sm">
                    <span className="text-foreground/60 inline-flex text-sm  md:text-base 2xl:text-lg items-center gap-1.5"><Clock className="size-3 md:size-3.5" />{a.time}</span>
                    <ArrowUpRight className="size-4 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* GUIDES */}
      <section className="relative py-10 lg:py-28 2xl:py-35">
        <SectionHead eyebrow="Guides & Resources" title="Tools your team can actually use" />
        <Stagger className="mt-6 md:mt-14 w-full   grid md:grid-cols-3 gap-4">
          {guides.map((g) => (
            <StaggerItem key={g.t}>
              <TiltCard className="glass rounded-2xl p-5 md:p-7 h-full hover-glow-card flex flex-col">
                <BookOpen className="size-5 md:size-6 text-primary mb-4" />
                <div className="text-base md:text-lg  2xl:text-xl font-bold tracking-tight">{g.t}</div>
                <p className="mt-2 text-xs  md:text-sm 2xl:text-base text-foreground/70 font-medium flex-1">{g.d}</p>
                <div className="mt-3 md:mt-6 flex items-center justify-between">
                  <span className="text-[8px] md:text-[11px] 2xl:text-sm font-mono uppercase tracking-[0.2em] text-primary font-bold">{g.tag}</span>
                  <button className="size-8 md:size-10 grid place-items-center rounded-full btn-glass text-white">
                    <Download className="size-3 md:size-4" />
                  </button>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* NEWSLETTER */}
   <section className="relative flex justify-center items-center py-10 lg:py-28 2xl:py-35">
  <div className="relative w-full max-full max-w-3xl glass rounded-[2rem] p-7 md:p-14 text-center overflow-hidden ring-purple">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 pointer-events-none" />
    <div className="relative">
      
      <h2 className="text-[26px] md:text-4xl lg:text-5xl font-bold leading-[1.05]">
         Ready to put these ideas to <span className="text-gradient-purple">work</span>
      </h2>
        <p className="mt-4 text-foreground/75 text-xs md:text-sm lg:text-base 1xl:text-xl  font-normal">
        One sharp essay every Sunday. Built for operators.
      </p>
      
    <div className="mt-5 md:mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton>Hire an Expert</PrimaryButton>
            <GhostButton>Browse All Articles</GhostButton>
          </div>
     
      
    </div>
  </div>
</section>
    </main>
  );
}
