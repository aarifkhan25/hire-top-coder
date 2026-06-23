"use client"
import { Breadcrumb, Card, ComparisonTable, CTABanner, PageHero, Section, SectionTitle } from "@/components/site/Shared";
import { useState } from "react";

export const metadata= { title: "Offshore Developer Rates 2026 — HireTopCoder" }

const rates = {
  India: { React: 55, Python: 60, DevOps: 70, AI: 90 },
  "Eastern Europe": { React: 70, Python: 75, DevOps: 85, AI: 110 },
  LATAM: { React: 75, Python: 80, DevOps: 90, AI: 115 },
};

export default function Page() {
  const [region, setRegion] = useState("India");
  const [role, setRole] = useState("React");
  const [hours, setHours] = useState(160);
  const rate = rates[region][role];
  const monthly = rate * hours;
  return (
 <main className="px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 w-full"    >
      <div className="pt-20 md:pt-28 "><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Resources" }, { label: "Dev Rates 2026" }]} /></div>
      <PageHero eyebrow="Guide · Updated June 2026" title={<>Offshore Developer <span className="text-primary">Rates 2026</span></>} sub="Benchmark rates for the regions and stacks that actually matter, refreshed quarterly." />
      <Section className="py-10  lg:py-28 2xl:py-35">
        <SectionTitle eyebrow="Region" title="Rate Comparison by Region" />
        <ComparisonTable
          headers={["Region", "Junior", "Mid", "Senior"]}
          rows={[
            ["India", "$30/hr", "$55/hr", "$85/hr"],
            ["Eastern Europe", "$45/hr", "$70/hr", "$110/hr"],
            ["LATAM", "$50/hr", "$75/hr", "$115/hr"],
          ]}
        />
      </Section>
      <Section className="py-10  lg:py-28 2xl:py-35">
        <SectionTitle eyebrow="Stack" title="Rate by Tech Stack" />
        <ComparisonTable
          headers={["Stack", "India", "Eastern Europe", "LATAM"]}
          rows={[
            ["React / Next.js", "$55", "$70", "$75"],
            ["Python / Django", "$60", "$75", "$80"],
            ["DevOps / Cloud", "$70", "$85", "$90"],
            ["AI / ML", "$90", "$110", "$115"],
          ]}
        />
      </Section>
      <Section className="py-10  lg:py-28 2xl:py-35">
          <div className="absolute left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
      <div className="relative  w-full">
        <SectionTitle eyebrow="Calculator" title="Estimate your monthly cost" />
        <Card className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="text-[9px] md:text-[11px] uppercase tracking-[0.15em] text-foreground/50 font-bold">Region</label>
              <select value={region} onChange={(e) => setRegion(e.target.value)} className=" md:mt-2 w-full bg-black/40 border border-white/[0.08] rounded-[8px] p-1.5 md:px-3 md:py-2 text-white text-sm md:text-base outline-none focus:border-primary/40">{Object.keys(rates).map((r) => <option key={r}>{r}</option>)}</select>
            </div>
            <div>
              <label className="text-[9px] md:text-[11px] uppercase tracking-[0.15em] text-foreground/50 font-bold">Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)} className=" md:mt-2 w-full bg-black/40 border border-white/[0.08] rounded-[8px] p-1.5 md:px-3 md:py-2 text-white text-sm md:text-base outline-none focus:border-primary/40">{Object.keys(rates[region]).map((r) => <option key={r}>{r}</option>)}</select>
            </div>
            <div>
              <label className="text-[9px] md:text-[11px] uppercase tracking-[0.15em] text-foreground/50 font-bold">Hours / mo</label>
              <input type="number" value={hours} onChange={(e) => setHours(+e.target.value || 0)} className=" md:mt-2 w-full bg-black/40 border border-white/[0.08] rounded-[8px] p-1.5 md:px-3 md:py-2 text-white text-sm md:text-base outline-none focus:border-primary/40" />
            </div>
          </div>
          <div className="mt-6  border-t border-white/[0.07] flex items-end justify-between">
            <div>
              <div className=" mt-1 text-[9px] md:text-[11px] uppercase tracking-[0.2em] text-primary font-bold">Estimated monthly</div>
              <div className="md:mt-1 text-2xl md:text-4xl font-extrabold text-white">${monthly.toLocaleString()}</div>
            </div>
            <div className="text-foreground/55 text-xs md:text-sm">@ ${rate}/hr · {hours}h</div>
          </div>
        </Card>
      </div></Section>
      <Section className="py-10  lg:py-28 2xl:py-35">
        <SectionTitle eyebrow="Insights" title="Key takeaways" />
        <div className="grid md:grid-cols-3 md:gap-5">
          {[
            { t: "Rates rose 7% YoY", d: "AI and DevOps roles drove most of the increase." },
            { t: "India still 35% cheaper", d: "Versus Eastern Europe at the senior level." },
            { t: "LATAM is fastest growing", d: "Demand from US clients up 60% since 2024." },
          ].map((c) => <Card key={c.t}><div className="text-white  font-medium text-sm md:text-base md:mb-2">{c.t}</div><div className="text-foreground/60 text-xs md:text-sm">{c.d}</div></Card>)}
        </div>
        <div className="text-center mt-5 md:mt-10"><button className="bg-white text-black font-bold text-xs md:text-base px-4 py-2 md:px-6 md:py-3 rounded-full">Get Full Report</button></div>
      </Section>
      <CTABanner />
    </   main >
  );
}
