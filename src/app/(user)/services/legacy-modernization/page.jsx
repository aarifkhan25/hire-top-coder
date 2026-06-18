import { Breadcrumb, Card, CTABanner, FAQ, PageHero, Section, SectionTitle, StatGrid, Stepper } from "@/components/site/Shared";
import { ArrowRight } from "lucide-react";


  const meta= [{ title: "Legacy Modernization — HireTopCoder" }, { name: "description", content: "Zero-downtime upgrades for outdated platforms." }] 


 export default function Page() {
  return (
    <main className="px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 w-full"  >
      <div className="pt-28 "><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Services" }, { label: "Legacy Modernization" }]} /></div>
      <PageHero
        eyebrow="Engineering Service"
        title={<>Zero-Downtime <span className="text-primary">Legacy Upgrades</span></>}
        sub={<>Modernize tired PHP, jQuery, or .NET stacks into cloud-native <br/> React/Node systems — without breaking production.</>}
      />
      <Section  className="py-28 2xl:py-35">
        <SectionTitle eyebrow="Approach" title="Our Modernization Approach" />
        <Stepper steps={[
          { title: "Audit & Assessment", desc: "Full codebase, infra, and risk audit in week 1." },
          { title: "Migration Planning", desc: "Strangler-fig roadmap with safe checkpoints." },
          { title: "Phased Rollout", desc: "Slice-by-slice migration behind feature flags." },
          { title: "Zero-Downtime Deploy", desc: "Blue/green cutovers with instant rollback." },
        ]} />
      </Section>

      <Section  className="py-28 2xl:py-35">
        <div className="absolute left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
      <div className="relative  w-full">
        <SectionTitle eyebrow="Outcomes" title="What our clients see" />
        <StatGrid stats={[
          { value: "60%", label: "Faster page loads" },
          { value: "40%", label: "Lower infra cost" },
          { value: "0", label: "Production downtime" },
          { value: "3×", label: "Deploy frequency" },
        ]} /></div>
      </Section>

      <Section  className="py-28 2xl:py-35">
        <SectionTitle eyebrow="Stacks" title="From → To" />
        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          <Card>
            <div className="text-[11px] uppercase tracking-[0.2em] text-foreground/40 mb-3 font-bold">Legacy (From)</div>
            {["PHP 5.x / WordPress", "jQuery + server templates", ".NET Framework 4.x", "Monolithic VMs", "Manual deploys"].map((s) => (
              <div key={s} className="text-foreground/75 py-2 border-b border-white/[0.04] last:border-0">{s}</div>
            ))}
          </Card>
          <Card className="border-primary/30">
            <div className="text-[11px] uppercase tracking-[0.2em] text-primary mb-3 font-bold flex items-center gap-2">Modern (To) <ArrowRight className="size-3" /></div>
            {["React / Next.js + TypeScript", "Node.js APIs / GraphQL", ".NET 8 + clean architecture", "Cloud-native containers", "CI/CD with rollback"].map((s) => (
              <div key={s} className="text-white/90 py-2 border-b border-white/[0.04] last:border-0">{s}</div>
            ))}
          </Card>
        </div>
      </Section>

      <Section  className="py-28 2xl:py-35">
        <SectionTitle eyebrow="FAQ" title="Common questions" />
        <FAQ items={[
          { q: "How long does a typical modernization take?", a: "Most engagements are 4–9 months, depending on surface area and team size." },
          { q: "Do you require code freeze during migration?", a: "No. We use strangler-fig and feature-flagged rollouts so feature work continues in parallel." },
          { q: "Can we keep some legacy components?", a: "Absolutely. We modernize what creates business value, not for its own sake." },
          { q: "What about data migration?", a: "Dual-write + backfill patterns with verifiable cutover criteria." },
          { q: "Do you train our internal team?", a: "Yes — knowledge-transfer is built into every milestone." },
        ]} />
      </Section>

     <CTABanner />
    </main  >
  );
}
