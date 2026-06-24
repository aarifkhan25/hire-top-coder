
import { Breadcrumb, Card, ComparisonTable, CTABanner, FAQ, PageHero, Section, SectionTitle } from "@/components/site/Shared";


export const metadata =  { title: "IT Staff Augmentation — HireTopCoder", description : "Plug vetted engineers into your existing team in 48–72 hours." }


export default function Page() {
  return (
    <main className=" w-full"    >
      <div className="pt-20 md:pt-28 "><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Services" }, { label: "Staff Augmentation" }]} /></div>
      <PageHero
        eyebrow="Delivery Model"
        title={<>IT <span className="text-primary">Staff Augmentation</span></>}
        sub={<>Plug vetted engineers directly into your existing  team — your <br className="hidden md:block" /> tools,  your process, your timeline.</>}
      />
      <Section  className="   ">
        <SectionTitle eyebrow="When To Use" title="The right scenarios" />
        <div className="grid md:grid-cols-3 gap-2 md:gap-5">
          {[
            { t: "Burst capacity", d: "Quarter-end push or feature launch that your team can't absorb alone." },
            { t: "Specialized skill gap", d: "You need a Rust, ML, or DevOps specialist for 3–6 months — not forever." },
            { t: "Backfill while hiring", d: "Bridge the 90-day gap between an open role and a permanent hire." },
          ].map((c) => <Card key={c.t}><div className="text-white text-xs md:text-base font-medium mb-2">{c.t}</div><div className="text-foreground/60 text-[10px] md:text-sm leading-relaxed">{c.d}</div></Card>)}
        </div>
      </Section>

      <Section className="   ">
        <SectionTitle eyebrow="Compare" title="Staff Augmentation vs Dedicated Teams" />
        <ComparisonTable
          headers={["Dimension", "Staff Augmentation", "Dedicated Team"]}
          rows={[
            ["Cost", "Hourly / monthly per engineer", "Fixed monthly retainer"],
            ["Control", "You manage day-to-day", "We co-manage with you"],
            ["Flexibility", "Scale up/down weekly", "Quarterly commitments"],
            ["Timeline", "Best for 1–6 months", "Best for 6+ months"],
            ["Onboarding", "48–72 hours", "5–7 business days"],
          ]}
        />
      </Section>


      <Section className="   ">
         <div className="absolute left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
      <div className="relative  w-full">
        <SectionTitle eyebrow="Timeline" title="From request to engineer online" />
        <div className="grid md:grid-cols-4 md:gap-4">
          {[
            { h: "Hour 0", t: "Brief call", d: "30 minutes to define the role & skills." },
            { h: "Hour 24", t: "Shortlist", d: "3 vetted profiles in your inbox." },
            { h: "Hour 48", t: "Interviews", d: "Technical screen with your team." },
            { h: "Hour 72", t: "Online", d: "Engineer in your tools, shipping code." },
          ].map((s, i) => (
            <Card key={i}>
              <div className="text-[8px] md:text-[11px] uppercase tracking-[0.2em] text-primary font-bold md:mb-2">{s.h}</div>
              <div className="text-white text-xs md:text-base font-medium mb-1">{s.t}</div>
              <div className="text-foreground/55 text-[10px] md:text-[13px]">{s.d}</div>
            </Card>
          ))}
        </div></div>
      </Section>
      <Section className="   ">
        <SectionTitle eyebrow="FAQ" title="Common questions" />
        <FAQ items={[
          { q: "Minimum engagement length?", a: "We typically engage for a minimum of 4 weeks." },
          { q: "Who manages the engineer day-to-day?", a: "You do. The engineer joins your standups, sprints, and review process." },
          { q: "What time zones do you cover?", a: "Engineers are available in overlap windows for US, EU, and APAC schedules." },
          { q: "How does pricing work?", a: "Transparent monthly rates per engineer based on seniority and stack." },
          { q: "Can I convert to a full-time hire?", a: "Yes — after 6 months a conversion fee applies, and the engineer becomes yours." },
        ]} />
      </Section>

     <CTABanner />
    </  main >
  );
}
