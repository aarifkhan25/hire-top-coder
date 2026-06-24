
import { Breadcrumb, Card, ComparisonTable, CTABanner, PageHero, Section, SectionTitle } from "@/components/site/Shared";
import { Check, X } from "lucide-react";

export const metadata= { title: "Dedicated Developer vs Freelancer — HireTopCoder" }

 export default function Page() {
  return (
  <main className=" w-full"    >
      <div className=" pt-28 "><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Resources" }, { label: "Dedicated vs Freelancer" }]} /></div>
      <PageHero eyebrow="Guide 2026" title={<>Dedicated Developer vs <span className="text-primary">Freelancer</span></>} sub="The real differences — cost, control, quality, and what actually scales." />
      <Section className="  ">
        <SectionTitle eyebrow="Compare" title="Side-by-side" />
        <ComparisonTable
          headers={["Dimension", "Freelancer", "Dedicated Team"]}
          rows={[
            ["Cost", "Hourly, variable", "Predictable monthly"],
            ["Reliability", false, true],
            ["Communication", "Async only", "Daily standups"],
            ["IP Ownership", "Contract-dependent", "Yours by default"],
            ["Long-term scale", false, true],
            ["Quality control", "DIY", "Managed"],
            ["Availability", "Multi-client", "100% you"],
          ]}
        />
      </Section>
      <Section className="  ">
        <div className="absolute left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
              <div className="relative  w-full">
        <SectionTitle eyebrow="Pros & Cons" title="What each is good at" />
        <div className="grid md:grid-cols-2 md:gap-5">
          <Card>
            <div className="text-white text-sm md:text-base font-bold text-lg mb-4">Freelancer</div>
            <div className="space-y-2">
              {[["Cheap for short bursts", true], ["Flexible commitment", true], ["No long-term reliability", false], ["Limited accountability", false]].map(([t, ok], i) => (
                <div key={i} className="flex text-sm md:text-base items-center gap-2 text-foreground/80">{ok ? <Check className="size-3 md:size-4 text-primary" /> : <X className="size-3 md:size-4 text-foreground/40" />} <span className={ok ? "" : "text-foreground/55"}>{t}</span></div>
              ))}
            </div>
          </Card>
          <Card className="border-primary/30">
            <div className="text-white text-sm md:text-base font-bold text-lg mb-4">Dedicated Team</div>
            <div className="space-y-2">
              {[["Predictable cost", true], ["Ownership & IP", true], ["Daily standups & QBR", true], ["Higher upfront commitment", false]].map(([t, ok], i) => (
                <div key={i} className="flex items-center gap-2 text-sm md:text-base text-foreground/80">{ok ? <Check className="size-3 md:size-4 text-primary" /> : <X className="size-3 md:size-4 text-foreground/40" />} <span className={ok ? "" : "text-foreground/55"}>{t}</span></div>
              ))}
            </div>
          </Card>
        </div>
      </div></Section>
      <Section className="  ">
        <SectionTitle eyebrow="Decide" title="Which one fits you?" />
        <div className="w-full md:max-w-2xl md:mx-auto space-y-3">
          {[
            { q: "Is the project under 4 weeks?", y: "Freelancer", n: "Continue ↓" },
            { q: "Will you need ongoing iteration?", y: "Dedicated Team", n: "Continue ↓" },
            { q: "Do you care about IP & long-term ownership?", y: "Dedicated Team", n: "Freelancer" },
          ].map((step, i) => (
            <Card key={i}>
              <div className="text-white text-sm text-base font-medium mb-3">{step.q}</div>
              <div className="flex gap-3">
                <div className="flex-1 rounded-[8px] bg-primary/10 border border-primary/20 px-4 py-2 text-primary text-xs md:text-sm">Yes → <span className="font-bold text-[11px] md:text-sm">{step.y}</span></div>
                <div className="flex-1 rounded-[8px] bg-white/[0.04] border border-white/[0.08] px-4 py-2 text-foreground/70 text-xs md:text-sm">No → {step.n}</div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <CTABanner />
    </   main >
  );
}
