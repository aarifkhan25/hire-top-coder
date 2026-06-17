"use client"
import { useState } from "react";

import { CTABanner, FAQ, PageHero, Section } from "@/components/site/Shared";
import { Search } from "lucide-react";

 const meta= [{ title: "FAQ — HireTopCoder" }] 
 

const groups = {
  General: [
    { q: "What is HireTopCoder?", a: "A curated marketplace connecting companies with vetted engineering talent." },
    { q: "How are you different from freelance platforms?", a: "We pre-vet every engineer through a 5-stage process and provide success management." },
  ],
  Pricing: [
    { q: "How does pricing work?", a: "Hourly or monthly retainer based on seniority and location. No recruiter fees." },
    { q: "Are there any setup fees?", a: "Never." },
  ],
  Process: [
    { q: "How fast can I hire?", a: "Most engagements start within 48–72 hours." },
    { q: "What if it doesn't work out?", a: "Free replacement within 7 days." },
  ],
  Tech: [
    { q: "What stacks do you cover?", a: "50+ stacks across web, mobile, AI, DevOps, and no-code." },
    { q: "Do you handle data security?", a: "Yes — GDPR, SOC 2 Type II, NDAs by default." },
  ],
};


export default function Page() {
  const [cat, setCat] = useState("General");
  const [query, setQuery] = useState("");
  const items = groups[cat].filter((i) => i.q.toLowerCase().includes(query.toLowerCase()));
  return (
    <    >
      <PageHero eyebrow="Help Centre" title={<>Frequently Asked <span className="text-primary">Questions</span></>} sub="Answers to what teams ask before, during, and after they hire with us.">
        <div className="max-w-xl mx-auto flex items-center gap-2 rounded-full bg-[#141418] border border-white/[0.08] px-4 py-2">
          <Search className="size-4 text-foreground/40" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search questions…" className="bg-transparent flex-1 outline-none text-sm text-white placeholder:text-foreground/30" />
        </div>
      </PageHero>
      <Section>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(Object.keys(groups)).map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`px-5 py-2 rounded-full text-sm font-medium transition ${cat === c ? "bg-gradient-to-r from-primary to-accent text-white" : "bg-white/[0.04] text-foreground/70 hover:bg-white/[0.08]"}`}>{c}</button>
          ))}
        </div>
        <FAQ items={items} />
      </Section>
      <CTABanner title="Still have questions?" sub="Hop on a quick call and get specific answers for your team." ctaLabel="Talk to Expert" />
    </    >
  );
}
