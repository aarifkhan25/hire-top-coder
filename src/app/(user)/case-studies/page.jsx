"use client"
import { Card, PageHero, PurplePill, Section } from "@/components/site/Shared";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import { useState } from "react";

const  meta= [{ title: "Case Studies — HireTopCoder" }];
export const studies = [
  { slug: "broker-remarks", title: "Broker Remarks", industry: "SaaS", stat: "60% faster onboarding", stack: ["React", "Firebase"] },
  { slug: "mkgo-transport", title: "MKGO Transport", industry: "Mobile", stat: "Shipped in 8 weeks", stack: ["Flutter", "Firebase"] },
  { slug: "rolling-star-casino", title: "Rolling Star Casino", industry: "Gaming", stat: "Built in 10 weeks", stack: ["React", "Node"] },
  { slug: "workla", title: "Workla", industry: "SaaS", stat: "3× signups in 60 days", stack: ["Next.js", "Postgres"] },
  { slug: "code-conspirators", title: "Code Conspirators", industry: "Education", stat: "40k students onboarded", stack: ["React", "Stripe"] },
  { slug: "wizz-air", title: "Wizz Air", industry: "Travel", stat: "30% lift in conversions", stack: ["React Native"] },
  { slug: "tairo", title: "Tairo", industry: "FinTech", stat: "Series A delivered", stack: ["Next.js", "AWS"] },
  { slug: "cheshire-cats", title: "Cheshire Cats", industry: "Gaming", stat: "Live in 3 stores", stack: ["Unity"] },
  { slug: "olesya", title: "Olesya", industry: "Real Estate", stat: "12 weeks to launch", stack: ["React", "Node"] },
  { slug: "themi", title: "Themi", industry: "EdTech", stat: "AI-powered classroom", stack: ["LLM", "Next.js"] },
  { slug: "fundli", title: "Fundli", industry: "FinTech", stat: "MVP in 6 weeks", stack: ["Flutter", "Firebase"] },
];

const industries = ["All", "SaaS", "Mobile", "FinTech", "Gaming", "Real Estate", "Travel", "EdTech", "Education"];

export default function Page() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? studies : studies.filter((s) => s.industry === filter);
  return (
    <     >
      <PageHero eyebrow="Selected Work" title={<>Our Work, <span className="text-primary">Proven Results</span></>} sub="A few of the products our experts have shipped. Real teams, real outcomes." />
      <Section>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {industries.map((i) => (
            <button key={i} onClick={() => setFilter(i)} className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition ${filter === i ? "bg-primary text-white" : "bg-white/[0.04] text-foreground/70 hover:bg-white/[0.08]"}`}>{i}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {filtered.map((s) => (
            <Link key={s.slug} href="/case-studies/$slug" params={{ slug: s.slug }}>
              <Card className="h-full hover:border-primary/30 hover:-translate-y-1 transition-all">
                <div className="aspect-[16/10] rounded-md bg-gradient-to-br from-primary/25 via-[#141418] to-[#0a0a0a] border border-white/[0.04] mb-4" />
                <PurplePill>{s.industry}</PurplePill>
                <div className="mt-3 text-white font-medium text-lg">{s.title}</div>
                <div className="mt-1 text-foreground/55 text-sm">{s.stat}</div>
                <div className="mt-4 flex flex-wrap gap-1.5">{s.stack.map((t) => <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-foreground/70">{t}</span>)}</div>
                <div className="mt-4 text-primary text-sm flex items-center gap-1 font-medium">Read case study <ArrowRight className="size-4" /></div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </     >
  );
}
