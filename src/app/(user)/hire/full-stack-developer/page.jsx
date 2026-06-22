"use client"
import { useState } from "react";

import { Breadcrumb, Card, ComparisonTable, CTABanner, FAQ, PageHero, ProfileCard, Section, SectionTitle } from "@/components/site/Shared";
import { Search } from "lucide-react";

const meta= [{ title: "Hire Full-Stack Developer — HireTopCoder" }, { name: "description", content: "Hire vetted full-stack developers. React, Node, Python, MERN." }] 


const devs = [
  { name: "Ravi P.", role: "Senior Full-Stack", years: 8, tags: ["React", "Node", "AWS"] },
  { name: "Elena V.", role: "Lead Engineer", years: 11, tags: ["Next.js", "GraphQL", "GCP"] },
  { name: "Tom J.", role: "Mid Full-Stack", years: 4, tags: ["MERN", "TypeScript"] },
  { name: "Kavya I.", role: "Senior Full-Stack", years: 7, tags: ["Python", "Django", "React"] },
  { name: "Hugo F.", role: "Junior Engineer", years: 2, tags: ["React", "Node"] },
  { name: "Mei L.", role: "Senior Full-Stack", years: 6, tags: ["Vue", "NestJS", "Postgres"] },
];

const stacks = ["All", "React", "Node", "Python", "MERN", "Next.js"];

export default function Page() {
  const [stack, setStack] = useState("All");
  return (
   <main className="px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 w-full"    >
      <div className=" pt-20 md:pt-28"><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Hire" }, { label: "Full-Stack Developer" }]} /></div>
      <PageHero
        eyebrow="Hire by Role"
        title={<>Hire <span className="text-primary">Full-Stack Developers</span></>}
        sub={<>Senior engineers who ship across the stack — from <br/> React to infra — without hand-holding.</>}
      >
        <div className="max-w-xl mx-auto flex items-center gap-2 rounded-full bg-[#141418] border border-white/[0.08] px-4 py-2">
          <Search className="size-4 text-foreground/40" />
          <input placeholder="Search by stack or industry…" className="bg-transparent flex-1 outline-none text-sm text-white placeholder:text-foreground/30" />
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {stacks.map((s) => (
            <button key={s} onClick={() => setStack(s)} className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition ${stack === s ? "bg-primary text-white" : "bg-white/[0.04] text-foreground/70 hover:bg-white/[0.08]"}`}>{s}</button>
          ))}
        </div>
      </PageHero>
      <Section className="py-10  lg:py-28 2xl:py-35">
        <SectionTitle eyebrow="Profiles" title="Featured Engineers" />
        <div className="grid md:grid-cols-3 gap-5">{devs.map((d) => <ProfileCard key={d.name} {...d} />)}</div>
      </Section>

      <Section className="py-10  lg:py-28 2xl:py-35">
        <SectionTitle eyebrow="Seniority" title="Filter by level" />
        <ComparisonTable
          headers={["Level", "Experience", "Hourly", "Monthly"]}
          rows={[
            ["Junior", "1–3 yrs", "$35–$50", "$3.5k–$5k"],
            ["Mid-level", "3–5 yrs", "$50–$75", "$5k–$7.5k"],
            ["Senior", "5–8 yrs", "$75–$110", "$7.5k–$11k"],
            ["Lead / Architect", "8+ yrs", "$110–$160", "$11k–$16k"],
          ]}
        />
      </Section>

      <Section className="py-10  lg:py-28 2xl:py-35">
         <div className="absolute left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
      <div className="relative  w-full">
        <SectionTitle eyebrow="Why" title="Why hire full-stack" />
        <div className="grid md:grid-cols-3 md:gap-5">
          {[
            { t: "One engineer, full ownership", d: "From DB to UI — no handoff overhead." },
            { t: "Faster iteration", d: "Ship features end-to-end inside one sprint." },
            { t: "Better architecture", d: "Decisions are made with the whole stack in mind." },
          ].map((c) => <Card key={c.t}><div className="text-white font-medium text-sm md:text-base md:mb-2">{c.t}</div><div className="text-foreground/60 text-xs md:text-sm leading-relaxed">{c.d}</div></Card>)}
        </div></div>
      </Section>

      <Section className="py-10  lg:py-28 2xl:py-35">
        <SectionTitle eyebrow="FAQ" title="Common questions" />
        <FAQ items={[
          { q: "Can a single engineer really cover full-stack?", a: "Yes — our senior engineers consistently ship production features end-to-end." },
          { q: "How do you screen for breadth and depth?", a: "Live coding across frontend, backend, and infra plus a take-home with real production constraints." },
          { q: "What stacks do you focus on?", a: "React, Next.js, Node.js, Python, .NET, plus modern cloud (AWS, GCP, Vercel)." },
          { q: "Time to start?", a: "5–7 business days." },
        ]} />
      </Section>

      <CTABanner />
    </  main >
  );
}
