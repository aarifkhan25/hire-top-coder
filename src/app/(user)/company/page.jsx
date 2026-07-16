
import { Award, Compass, FileSignature, Flag, Gauge, Globe2, Heart, Network, ShieldCheck, Sparkles, Target, Users, Wallet } from "lucide-react";

import Image from "next/image";
import { AmbientGlow } from "../../../components/site/PageShell.jsx";
import { Parallax, Reveal, Stagger, StaggerItem, TiltCard, WordReveal } from "../../../components/site/Reveal.jsx";
import { CTA, SectionHead } from "../HomePage.jsx";


    // meta: [
    //   { title: "About HireTopCoder — Building Digital Excellence" },
    //   { name: "description", content: "HireTopCoder connects ambitious teams with elite digital experts globally. Learn our story, mission and values." },
    //   { property: "og:title", content: "About — HireTopCoder" },
    //   { property: "og:description", content: "Building digital excellence through a global network of curated, world-class experts." },
    // ],

const values = [
  { Icon: Award,    t: "Craft Above All",     d: "We obsess over the details others overlook." },
  { Icon: Heart,    t: "Human First",          d: "Behind every line of code is a person — and we lead with empathy." },
  { Icon: Sparkles, t: "Bias for Excellence",  d: "Good enough is never enough on this network." },
  { Icon: Compass,  t: "Long-Term Thinking",   d: "We build relationships, not transactions." },
];

const team = [
  { n: "Aarav Mehta",   r: "Founder & CEO",          img: "/assets/arun.png"},
  { n: "Lina Park",     r: "Head of Product",        img: "/assets/kajal.png"},
  { n: "Marcus Reid",   r: "Head of Talent",         img: "/assets/neha.png"},
  { n: "Sara Okafor",   r: "Head of Design",         img:"/assets/khushi.png" },
];

const reasons = [
  { t: "Vetted Network", d: "Less than 2% of applicants make it onto HireTopCoder.",i:Network },
  { t: "Speed",          d: "Most matches are made in under 48 hours." ,i:Gauge},
  { t: "Outcomes",       d: "Measured on impact, not hours.",i: Wallet},
  { t: "Global Coverage", d: "Experts across every timezone, ready when you are.",i: Globe2},
];

const reach = [
  { v: "42", l: "Countries",i:Flag },
  { v: "3,200+", l: "Experts" ,i: Users},
  { v: "1,240+", l: "Projects",i: FileSignature},
  { v: "98%", l: "Retention",i:ShieldCheck },
];

export default function CompanyPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-20 md:pt-40 2xl:pt-50 pb-20 px-4 overflow-hidden">
        <AmbientGlow />

        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal>
        <div className="inline-flex items-center gap-2 rounded-full px-3 md:px-4 py-1.5 text-[8px] md:text-[10px] md:text-xs 2xl:text-sm font-sans uppercase tracking-[0.2em] text-primary border border-primary/40 bg-primary/10 mb-5  font-semibold">
              Our Story
            </div>
          </Reveal>
         <h1 className="font-display font-bold leading-[0.95] text-[clamp(2.6rem,8vw,7rem)] md:text-[clamp(2.75rem,8vw,7.5rem)] 2xl:text-[clamp(3rem,9vw,8.5rem)]">
            <WordReveal text="Building Digital" />
            <br />
            <span className="text-gradient-purple"><WordReveal text="Excellence Globally" /></span>
          </h1>
          <Reveal delay={0.3}>
        <p className="mt-3 md:mt-5 text-xs sm:text-sm md:text-base lg:text-xl  text-[#b1afb8] max-w-3xl mx-auto leading-relaxed font-normal">
              HireTopCoder is a curated network of elite digital experts helping the
              world's most ambitious teams design, build and scale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="relative px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 py-10 lg:py-20">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-[8px] md:text-[10px] lg:text-xs 2xl:text-sm font-sans uppercase tracking-[0.25em] text-primary mb-4 font-bold">Our Story</div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight leading-tight">
              From a small studio to a <span className="text-gradient-purple">global network</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="space-y-4 text-foreground/75 text-xs md:text-sm lg:text-lg  font-normal">
              <p>
                HireTopCoder started in 2019 as a tiny collective of designers and
                engineers shipping products for venture-backed startups. Within
                three years it grew into a global network spanning 40+ countries.
              </p>
              <p>
                Today, HireTopCoder powers digital teams at fast-moving startups and
                enterprises alike — combining boutique craft with on-demand scale.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="relative px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 py-10 lg:py-20">
        <SectionHead eyebrow="Mission & Vision" title={<>What drives us <span className="text-gradient-purple">forward</span></>} />
        <Stagger className="mt-14 mx-auto max-w-5xl grid md:grid-cols-2 gap-4">
          {[
            { Icon: Target, t: "Mission", d: "Make world-class digital talent instantly accessible to every ambitious team on Earth." },
            { Icon: Compass, t: "Vision", d: "A future where geography no longer limits what a small team can build." },
          ].map((x) => (
            <StaggerItem key={x.t}>
              <TiltCard className="glass group rounded-3xl p-10 h-full hover-glow-card">
                <div className="w-8 h-8 xl:w-10 xl:h-10 flex justify-center items-center shrink-0 border border-white/10 rounded-sm xl:rounded-md bg-primary/10 transition-colors group-hover:border-primary" >

                                          <span className="text-lg xl:text-2xl text-primary"> <x.Icon /></span>
                                          </div>  
                <div className="mt-2 text-2xl font-extrabold tracking-tight">{x.t}</div>
                <p className="mt-3 text-foreground/75 font-medium">{x.d}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* VALUES */}
      <section className="relative px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 py-10 lg:py-20">
        <SectionHead eyebrow="Core Values" title="The principles we live by" />
        <Stagger className="mt-14 w-full grid md:grid-cols-3 xl:grid-cols-4 gap-4">
          {values.map((v) => (
            <StaggerItem key={v.t}>
              <TiltCard className="glass group rounded-2xl p-7 h-full hover-glow-card">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center shrink-0 border border-white/10 rounded-sm xl:rounded-md bg-primary/10 transition-colors group-hover:border-primary" >
                  <v.Icon className="text-sm p-1 md:p-0 md:text-lg xl:text-2xl text-primary" />
                </div>
                <div className="mt-2 text-lg font-bold tracking-tight">{v.t}</div>
                <p className="mt-2 text-sm text-foreground/70 font-medium">{v.d}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* TEAM */}
      <section className="relative px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 py-10 lg:py-20">
        <SectionHead eyebrow="Leadership" title={<>Meet the team behind <span className="text-gradient-purple">HireTopCoder</span></>} />
        <Stagger className="mt-14 w-full grid sm:grid-cols-2  md:grid-cols-4 gap-4">
          {team.map((m) => (
            <StaggerItem key={m.n}>
              <TiltCard className="group glass rounded-3xl overflow-hidden hover-glow-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                 <Image height="500" width="500" loading="lazy" src={m.img} alt={m.n}
                    className="size-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1200ms]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <div className=" text-sm lg:text-base xl:text-lg font-bold tracking-tight">{m.n}</div>
                  <div className="text-[10px] lg:text-xs xl:text-sm text-foreground/65 font-medium">{m.r}</div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* WHY */}
      <section className="relative px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 py-10 lg:py-20">
        <Parallax speed={40} className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 size-[480px] rounded-full bg-accent/15 blur-[140px]" />
        </Parallax>
        <SectionHead eyebrow="Why Clients Choose Us" title="Built for serious teams" />
        <Stagger className="mt-14 w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reasons.map((r) => (
            <StaggerItem key={r.t}>
              <div className="glass group rounded-2xl p-6 hover-glow-card h-full">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center shrink-0 border border-white/10 rounded-sm xl:rounded-md bg-primary/10 transition-colors group-hover:border-primary" >
                  <r.i className="text-sm md:text-lg xl:text-2xl p-1 md:p-0 text-primary" />
                </div>
              
                <div className="mt-2 font-bold">{r.t}</div>
                <p className="mt-2 text-sm text-foreground/70 font-medium">{r.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* GLOBAL REACH */}
      <section className="relative px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 py-10 lg:py-20 overflow-hidden">
        <SectionHead eyebrow="Global Reach" title={<>A network <span className="text-gradient-purple">without borders</span></>} />
        <Stagger className="mt-14 mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4">
          {reach.map((m) => (
            <StaggerItem key={m.l}>
              <div className="glass group rounded-2xl p-5 lg:p-7 text-center hover-glow-card">
                 <div className="w-8 h-8 sm:w-10  sm:h-10 mx-auto flex justify-center items-center shrink-0 border border-white/10 rounded-sm xl:rounded-md bg-primary/10 transition-colors group-hover:border-primary" >
                  <m.i className="text-sm md:text-lg xl:text-2xl p-1 md:p-0 text-primary" />
                </div>
                <div className="mt-2 text-3xl lg:text-4xl font-extrabold tracking-tight text-gradient-purple">{m.v}</div>
                <div className="mt-2 text-xs lg:text-sm text-foreground/70 font-medium">{m.l}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* CTA */}
         
        <CTA title={<>Let's build <span className="text-gradient-purple">something together</span></>}  btn1name="Start Hiring Talent" btn1href="/" btn2name="Join The Network" btn2href="/" />
    
    </>
  );
}
