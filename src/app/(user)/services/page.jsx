"use client"
import { Compass, Target, Heart, Sparkles, Globe2, Users, Award, Building2 } from "lucide-react";
import { PrimaryButton, GhostButton, SectionHead, AmbientGlow } from "@/components/site/PageShell";
import { Reveal, Stagger, StaggerItem, WordReveal, TiltCard, Parallax } from "@/components/site/Reveal";
import Image from 'next/image'
const expert1 = "/assets/kajal.jpg";
const expert2 = "/assets/dev.jpg";
const expert3 = "/assets/rahul.jpg";
const expert4 = "/assets/sales.jpg";

const values = [
  { Icon: Award,    t: "Craft Above All",     d: "We obsess over the details others overlook." },
  { Icon: Heart,    t: "Human First",          d: "Behind every line of code is a person — and we lead with empathy." },
  { Icon: Sparkles, t: "Bias for Excellence",  d: "Good enough is never enough on this network." },
  { Icon: Compass,  t: "Long-Term Thinking",   d: "We build relationships, not transactions." },
];

const team = [
  { n: "Aarav Mehta",   r: "Founder & CEO",          img: expert2 },
  { n: "Lina Park",     r: "Head of Product",        img: expert3 },
  { n: "Marcus Reid",   r: "Head of Talent",         img: expert4 },
  { n: "Sara Okafor",   r: "Head of Design",         img: expert1 },
];

const reasons = [
  { t: "Vetted Network", d: "Less than 2% of applicants make it onto Hire Top Coder." },
  { t: "Speed",          d: "Most matches are made in under 48 hours." },
  { t: "Outcomes",       d: "Measured on impact, not hours." },
  { t: "Global Coverage", d: "Experts across every timezone, ready when you are." },
];

const reach = [
  { v: "42", l: "Countries" },
  { v: "3,200+", l: "Experts" },
  { v: "1,240+", l: "Projects" },
  { v: "98%", l: "Retention" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-24 px-4 overflow-hidden">
        <AmbientGlow />
        <div className="relative  w-full text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full px-3 md:px-4 py-1.5 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-primary border border-primary/40 bg-primary/10 mb-10 font-semibold">
              Our Story
            </div>
          </Reveal>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.02] tracking-tight">
            <WordReveal text="Building Digital" />
            <br />
            <span className="text-gradient-purple"><WordReveal text="Excellence Globally" /></span>
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-6   w-full text-lg text-foreground/75 font-medium">
              Hire Top Coder is a curated network of elite digital experts helping the
              world's most ambitious teams design, build and scale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25">
        <div className=" w-full grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary font-bold mb-3">Our Story</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              From a small studio to a <span className="text-gradient-purple">global network</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="space-y-4 text-foreground/80 font-medium leading-relaxed">
              <p>
                Hire Top Coder started in 2019 as a tiny collective of designers and
                engineers shipping products for venture-backed startups. Within
                three years it grew into a global network spanning 40+ countries.
              </p>
              <p>
                Today, Hire Top Coder powers digital teams at fast-moving startups and
                enterprises alike — combining boutique craft with on-demand scale.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25">
        <SectionHead eyebrow="Mission & Vision" title={<>What drives us <span className="text-gradient-purple">forward</span></>} />
        <Stagger className="mt-14  w-full grid md:grid-cols-2 gap-4">
          {[
            { Icon: Target, t: "Mission", d: "Make world-class digital talent instantly accessible to every ambitious team on Earth." },
            { Icon: Compass, t: "Vision", d: "A future where geography no longer limits what a small team can build." },
          ].map((x) => (
            <StaggerItem key={x.t}>
              <TiltCard className="glass rounded-3xl p-10 h-full hover-glow-card">
                <x.Icon className="size-7 text-primary mb-5" />
                <div className="text-2xl font-extrabold tracking-tight">{x.t}</div>
                <p className="mt-3 text-foreground/75 font-medium">{x.d}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* VALUES */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25">
        <SectionHead eyebrow="Core Values" title="The principles we live by" />
        <Stagger className="mt-14  w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v) => (
            <StaggerItem key={v.t}>
              <TiltCard className="glass rounded-2xl p-7 h-full hover-glow-card">
                <v.Icon className="size-5 text-primary mb-4" />
                <div className="text-lg font-bold tracking-tight">{v.t}</div>
                <p className="mt-2 text-sm text-foreground/70 font-medium">{v.d}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* TEAM */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25">
        <SectionHead eyebrow="Leadership" title={<>Meet the team behind <span className="text-gradient-purple">Hire Top Coder</span></>} />
        <Stagger className="mt-14  w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((m) => (
            <StaggerItem key={m.n}>
              <TiltCard className="group glass rounded-3xl overflow-hidden hover-glow-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image width={500} height={500}    priority={false}  src={m.img} alt={m.n}
                    className="size-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1200ms]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="text-lg font-bold tracking-tight">{m.n}</div>
                  <div className="text-sm text-foreground/65 font-medium">{m.r}</div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* WHY */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25">
        <Parallax speed={40} className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 size-[480px] rounded-full bg-accent/15 blur-[140px]" />
        </Parallax>
        <SectionHead eyebrow="Why Clients Choose Us" title="Built for serious teams" />
        <Stagger className="mt-14  w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((r) => (
            <StaggerItem key={r.t}>
              <div className="glass rounded-2xl p-6 hover-glow-card h-full">
                <Building2 className="size-5 text-primary mb-4" />
                <div className="font-bold">{r.t}</div>
                <p className="mt-2 text-sm text-foreground/70 font-medium">{r.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* GLOBAL REACH */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 overflow-hidden">
        <SectionHead eyebrow="Global Reach" title={<>A network <span className="text-gradient-purple">without borders</span></>} />
        <Stagger className="mt-14  w-full grid grid-cols-2 md:grid-cols-4 gap-4">
          {reach.map((m) => (
            <StaggerItem key={m.l}>
              <div className="glass rounded-2xl p-7 text-center hover-glow-card">
                <Globe2 className="size-5  w-full text-primary mb-3" />
                <div className="text-4xl font-extrabold tracking-tight text-gradient-purple">{m.v}</div>
                <div className="mt-2 text-sm text-foreground/70 font-medium">{m.l}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25">
        <div className="relative  w-full  glass rounded-[2.5rem] p-12 md:p-16 text-center overflow-hidden ring-purple">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-accent/25 pointer-events-none" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-primary/30 blur-[140px] animate-pulse-glow pointer-events-none" />
          <div className="relative">
            <Users className="size-8  w-full text-primary mb-4" />
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Let's build <span className="text-gradient-purple">something together</span>
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton>Start Hiring</PrimaryButton>
              <GhostButton>Join the Network</GhostButton>
            </div>
          </div>
        </div>
      </section>
 </>
  );
}
