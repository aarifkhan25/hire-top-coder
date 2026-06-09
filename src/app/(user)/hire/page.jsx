"use client"
import {
  Search, Palette, Layout, Code2, Server, Layers, Brain, BarChart3,
  Cog, ShieldCheck, Megaphone, Briefcase, Check, Star, Clock, Zap,
} from "lucide-react";
import { PrimaryButton, GhostButton, SectionHead, AmbientGlow } from "@/components/site/PageShell";
import { Reveal, Stagger, StaggerItem, WordReveal, TiltCard, Parallax } from "@/components/site/Reveal";

const categories = [
  { icon: Palette,   label: "UI/UX Designers",     count: "320+" },
  { icon: Layout,    label: "Product Designers",   count: "210+" },
  { icon: Code2,     label: "Frontend Developers", count: "540+" },
  { icon: Server,    label: "Backend Developers",  count: "480+" },
  { icon: Layers,    label: "Full Stack Engineers",count: "390+" },
  { icon: Brain,     label: "AI Engineers",        count: "180+" },
  { icon: BarChart3, label: "Data Scientists",     count: "150+" },
  { icon: Cog,       label: "DevOps Engineers",    count: "120+" },
  { icon: ShieldCheck,label:"QA Engineers",        count: "200+" },
  { icon: Briefcase, label: "Project Managers",    count: "160+" },
  { icon: Megaphone, label: "Marketing Experts",   count: "280+" },
  { icon: Zap,       label: "Growth Consultants",  count: "110+" },
];

const steps = [
  { n: "01", t: "Submit Requirement", d: "Tell us your goals, stack and timeline in 2 minutes." },
  { n: "02", t: "Match With Experts", d: "Our AI shortlists the top 1% of vetted experts for you." },
  { n: "03", t: "Interview",          d: "Meet hand-picked candidates within 24 hours." },
  { n: "04", t: "Hire",               d: "Onboard with contracts, NDAs and payments handled." },
  { n: "05", t: "Scale Team",         d: "Expand seamlessly as your product grows." },
];

const why = [
  { t: "Top 1% Talent",     d: "Every expert clears a 5-stage technical and design assessment." },
  { t: "48-Hour Matching",  d: "From brief to first interview in under two business days." },
  { t: "Risk-Free Trial",   d: "Two-week trial period on every hire, no questions asked." },
  { t: "Dedicated Manager", d: "A success partner from kickoff to delivery." },
  { t: "Global Network",    d: "Experts across 40+ countries and every major timezone." },
  { t: "Transparent Pricing", d: "Flat, predictable rates with no hidden fees." },
];

const tests = [
  { q: "Hire Top Coder matched us with a senior team in 14 minutes. Shipped in 9 days.", a: "Lena Park", r: "Head of Product, Vault" },
  { q: "The quality bar is unreal. It feels like a private members club for talent.", a: "Marcus Reid", r: "Founder, Halo Labs" },
  { q: "Cut our procurement cycle from 6 weeks to 2 days. Game over.",        a: "Priya Shah", r: "COO, Northbeam" },
];

export default function HirePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-24 px-4 overflow-hidden">
        <AmbientGlow />
        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full px-3 md:px-4 py-1.5 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-primary border border-primary/40 bg-primary/10 mb-10 font-semibold">
              Hire in 48 hours · Vetted · On demand
            </div>
          </Reveal>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.02] tracking-tight">
            <WordReveal text="Hire Elite Digital" />
            <br />
            <span className="text-gradient-purple">
              <WordReveal text="Experts On Demand" />
            </span>
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/75 font-medium">
              Connect with top-tier developers, designers, AI specialists,
              marketers and consultants — matched to your brief in minutes.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-10 mx-auto max-w-2xl glass rounded-full p-2 pl-5 flex items-center gap-2 ring-purple">
              <Search className="size-5 text-foreground/60 shrink-0" />
              <input
                placeholder="Try ‘senior product designer for fintech SaaS’"
                className="flex-1 bg-transparent outline-none text-sm py-3 placeholder:text-foreground/45"
              />
              <button className="btn-primary-glow text-white font-bold rounded-full px-6 py-3  text-xs md:text-sm 1xl:text-base">
                Match me
              </button>
            </div>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {["Designers", "Engineers", "AI Experts", "Marketers", "PMs"].map((t) => (
                <span key={t} className="text-xs font-semibold px-3.5 py-1.5 rounded-full glass text-foreground/80">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="relative py-24 px-4 sm:px-6">
        <SectionHead
          eyebrow="Expert Categories"
          title={<>The full spectrum of <span className="text-gradient-purple">digital expertise</span></>}
          sub="Hand-picked specialists across every discipline your roadmap demands."
        />
        <Stagger className="mt-14 mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((c) => (
            <StaggerItem key={c.label}>
              <TiltCard className="hover-glow-card glass rounded-2xl p-6 h-full cursor-pointer">
                <div className="flex items-center justify-between mb-6">
                  <div className="size-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 grid place-items-center border border-primary/30">
                    <c.icon className="size-5 text-white" />
                  </div>
                  <span className="text-[11px] font-mono text-primary font-bold">{c.count}</span>
                </div>
                <div className="text-lg font-bold tracking-tight">{c.label}</div>
                <div className="mt-1 text-sm text-foreground/60 font-medium">Available now · Avg 4.9★</div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* HOW IT WORKS - timeline */}
      <section className="relative py-24 px-4 sm:px-6">
        <SectionHead
          eyebrow="How Hiring Works"
          title={<>From brief to <span className="text-gradient-purple">hired</span> in 5 steps</>}
        />
        <div className="relative mt-16 mx-auto max-w-4xl">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          <Stagger className="space-y-10">
            {steps.map((s, i) => (
              <StaggerItem key={s.n} className={`relative md:flex md:items-center ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                <div className="md:w-1/2 pl-16 md:pl-0 md:px-10">
                  <div className="glass rounded-2xl p-6 hover-glow-card">
                    <div className="font-mono text-[11px] tracking-[0.25em] text-primary font-bold mb-2">STEP {s.n}</div>
                    <h3 className="text-xl font-bold tracking-tight">{s.t}</h3>
                    <p className="mt-2 text-foreground/70 font-medium">{s.d}</p>
                  </div>
                </div>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 size-4 rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-black glow-purple" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHY */}
      <section className="relative py-24 px-4 sm:px-6">
        <Parallax speed={40} className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 right-0 size-[500px] rounded-full bg-accent/15 blur-[140px]" />
        </Parallax>
        <SectionHead
          eyebrow="Why Hire Top Coder"
          title={<>Built for teams that <span className="text-gradient-purple">ship faster</span></>}
        />
        <Stagger className="mt-14 mx-auto max-w-6xl grid md:grid-cols-3 gap-4">
          {why.map((w) => (
            <StaggerItem key={w.t}>
              <TiltCard className="glass rounded-2xl p-7 h-full hover-glow-card">
                <Check className="size-5 text-primary mb-4" />
                <div className="text-lg font-bold tracking-tight">{w.t}</div>
                <p className="mt-2 text-sm text-foreground/70 font-medium">{w.d}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24 px-4 sm:px-6">
        <SectionHead eyebrow="Client Voices" title="Loved by teams shipping at the frontier" />
        <Stagger className="mt-14 mx-auto max-w-6xl grid md:grid-cols-3 gap-4">
          {tests.map((t) => (
            <StaggerItem key={t.a}>
              <div className="glass rounded-2xl p-7 h-full hover-glow-card">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/85 font-medium leading-relaxed">“{t.q}”</p>
                <div className="mt-6 pt-5 border-t border-border/40">
                  <div className="font-bold">{t.a}</div>
                  <div className="text-sm text-foreground/60">{t.r}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-4 sm:px-6">
        <div className="relative mx-auto max-w-4xl glass rounded-[2.5rem] p-12 md:p-16 text-center overflow-hidden ring-purple">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-accent/25 pointer-events-none" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-primary/30 blur-[140px] animate-pulse-glow pointer-events-none" />
          <div className="relative">
            <Clock className="size-8 mx-auto text-primary mb-4" />
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Your next hire is <span className="text-gradient-purple">48 hours away</span>
            </h2>
            <p className="mt-4 text-foreground/75 font-medium">Brief us today. Interview tomorrow.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton>Start Hiring Talent</PrimaryButton>
              <GhostButton>Talk to an Advisor</GhostButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
