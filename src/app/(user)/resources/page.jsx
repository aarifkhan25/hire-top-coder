"use client"
import { ArrowUpRight, BookOpen, Download, Mail, Clock } from "lucide-react";
import { PrimaryButton, GhostButton, SectionHead, AmbientGlow } from "@/components/site/PageShell";
import { Reveal, Stagger, StaggerItem, WordReveal, TiltCard } from "@/components/site/Reveal";
import Image from 'next/image'
const blog1 = "/assets/blog-1.jpg";
const blog2 = "/assets/blog-2.jpg";
const blog3 = "/assets/blog-3.jpg";
const blog4 = "/assets/blog-4.jpg";

const categories = ["AI", "Product Design", "SaaS", "Branding", "Development", "Startups", "Automation"];

const featured = {
  title: "The 2026 State of AI Product Teams",
  desc: "How elite product teams are restructuring around generative AI — pulled from interviews with 120+ founders and CTOs.",
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

export default function ResourcesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-20 px-4 overflow-hidden">
        <AmbientGlow />
        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full px-3 md:px-4 py-1.5 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-primary border border-primary/40 bg-primary/10 mb-10 font-semibold">
              The Hire Top Coder Field Notes
            </div>
          </Reveal>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.02] tracking-tight">
            <WordReveal text="Insights, Trends &" />
            <br />
            <span className="text-gradient-purple"><WordReveal text="Digital Innovation" /></span>
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/75 font-medium">
              Playbooks, essays, and downloadable resources from the experts
              building the next generation of digital products.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="relative py-10 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <TiltCard className="group relative rounded-3xl overflow-hidden border border-border/40 hover-glow-card cursor-pointer">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[16/11] md:aspect-auto overflow-hidden">
                  <Image  priority={false}  src={featured.img} alt={featured.title}
                    className="size-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1400ms]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center glass">
                  <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary font-bold">Featured · {featured.cat}</div>
                  <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">{featured.title}</h2>
                  <p className="mt-4 text-foreground/75 font-medium">{featured.desc}</p>
                  <div className="mt-6 flex items-center gap-4 text-sm text-foreground/65 font-medium">
                    <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5" />{featured.time}</span>
                    <span>·</span>
                    <span>By the Hire Top Coder Studio</span>
                  </div>
                  <div className="mt-8">
                    <PrimaryButton>Read the Report</PrimaryButton>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="relative py-16 px-4 sm:px-6">
        <Stagger className="mx-auto max-w-5xl flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <StaggerItem key={c}>
              <button className="glass rounded-full px-5 py-2 text-sm font-semibold text-foreground/85 hover:text-white transition">
                {c}
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* LATEST BLOGS */}
      <section className="relative py-16 px-4 sm:px-6">
        <SectionHead eyebrow="Latest" title={<>Fresh from the <span className="text-gradient-purple">network</span></>} />
        <Stagger className="mt-14 mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((a) => (
            <StaggerItem key={a.t}>
              <TiltCard className="group glass rounded-3xl overflow-hidden hover-glow-card cursor-pointer h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image  priority={false}  src={a.img} alt={a.t}
                    className="size-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1200ms]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary font-bold">{a.c}</div>
                  <h3 className="mt-3 text-xl font-bold tracking-tight leading-snug">{a.t}</h3>
                  <p className="mt-2 text-sm text-foreground/70 font-medium">{a.d}</p>
                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="text-foreground/60 inline-flex items-center gap-1.5"><Clock className="size-3.5" />{a.time}</span>
                    <ArrowUpRight className="size-4 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* GUIDES */}
      <section className="relative py-24 px-4 sm:px-6">
        <SectionHead eyebrow="Guides & Resources" title="Tools your team can actually use" />
        <Stagger className="mt-14 mx-auto max-w-6xl grid md:grid-cols-3 gap-4">
          {guides.map((g) => (
            <StaggerItem key={g.t}>
              <TiltCard className="glass rounded-2xl p-7 h-full hover-glow-card flex flex-col">
                <BookOpen className="size-6 text-primary mb-4" />
                <div className="text-lg font-bold tracking-tight">{g.t}</div>
                <p className="mt-2 text-sm text-foreground/70 font-medium flex-1">{g.d}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary font-bold">{g.tag}</span>
                  <button className="size-10 grid place-items-center rounded-full btn-glass text-white">
                    <Download className="size-4" />
                  </button>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* NEWSLETTER */}
      <section className="relative py-24 px-4 sm:px-6">
        <div className="relative mx-auto max-w-3xl glass rounded-[2rem] p-10 md:p-14 text-center overflow-hidden ring-purple">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 pointer-events-none" />
          <div className="relative">
            <Mail className="size-7 mx-auto text-primary mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              The <span className="text-gradient-purple">Hire Top Coder Brief</span>
            </h2>
            <p className="mt-3 text-foreground/75 font-medium">
              One sharp essay every Sunday. Built for operators.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 w-full glass rounded-full px-5 py-3 text-sm outline-none focus:border-primary/60 placeholder:text-foreground/45"
              />
              <button className="btn-primary-glow text-white font-bold rounded-full px-6 py-3 text-xs md:text-sm 1xl:text-base w-full sm:w-auto">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 sm:px-6">
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Ready to put these ideas to <span className="text-gradient-purple">work?</span>
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton>Hire an Expert</PrimaryButton>
            <GhostButton>Browse All Articles</GhostButton>
          </div>
        </div>
      </section>
    </>
  );
}
