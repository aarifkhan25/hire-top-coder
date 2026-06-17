
import { PageHero, Section, SectionTitle, Card, ComparisonTable, CTABanner, Breadcrumb } from "@/components/site/Shared";
import { Check, X } from "lucide-react";

const meta= [{ title: "Dedicated Developer vs Freelancer — HireTopCoder" }] ;

 export default function Page() {
  return (
    <    >
      <div className=" px-6 max-w-7xl mx-auto"><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Resources" }, { label: "Dedicated vs Freelancer" }]} /></div>
      <PageHero eyebrow="Guide 2026" title={<>Dedicated Developer vs <span className="text-primary">Freelancer</span></>} sub="The real differences — cost, control, quality, and what actually scales." />
      <Section>
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
      <Section>
        <SectionTitle eyebrow="Pros & Cons" title="What each is good at" />
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <div className="text-white font-bold text-lg mb-4">Freelancer</div>
            <div className="space-y-2">
              {[["Cheap for short bursts", true], ["Flexible commitment", true], ["No long-term reliability", false], ["Limited accountability", false]].map(([t, ok], i) => (
                <div key={i} className="flex items-center gap-2 text-foreground/80">{ok ? <Check className="size-4 text-primary" /> : <X className="size-4 text-foreground/40" />} <span className={ok ? "" : "text-foreground/55"}>{t}</span></div>
              ))}
            </div>
          </Card>
          <Card className="border-primary/30">
            <div className="text-white font-bold text-lg mb-4">Dedicated Team</div>
            <div className="space-y-2">
              {[["Predictable cost", true], ["Ownership & IP", true], ["Daily standups & QBR", true], ["Higher upfront commitment", false]].map(([t, ok], i) => (
                <div key={i} className="flex items-center gap-2 text-foreground/80">{ok ? <Check className="size-4 text-primary" /> : <X className="size-4 text-foreground/40" />} <span className={ok ? "" : "text-foreground/55"}>{t}</span></div>
              ))}
            </div>
          </Card>
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="Decide" title="Which one fits you?" />
        <div className="max-w-2xl mx-auto space-y-3">
          {[
            { q: "Is the project under 4 weeks?", y: "Freelancer", n: "Continue ↓" },
            { q: "Will you need ongoing iteration?", y: "Dedicated Team", n: "Continue ↓" },
            { q: "Do you care about IP & long-term ownership?", y: "Dedicated Team", n: "Freelancer" },
          ].map((step, i) => (
            <Card key={i}>
              <div className="text-white font-medium mb-3">{step.q}</div>
              <div className="flex gap-3">
                <div className="flex-1 rounded-lg bg-primary/10 border border-primary/20 px-4 py-2 text-primary text-sm">Yes → <span className="font-bold">{step.y}</span></div>
                <div className="flex-1 rounded-lg bg-white/[0.04] border border-white/[0.08] px-4 py-2 text-foreground/70 text-sm">No → {step.n}</div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <CTABanner />
    </    >
  );
}
