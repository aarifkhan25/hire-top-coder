import { Breadcrumb, Card, CTABanner, FAQ, PageHero, Section, SectionTitle } from "@/components/site/Shared";
import { Briefcase, Building2, ShieldCheck, Users } from "lucide-react";


  const meta= [{ title: "Offshore Development Centre — HireTopCoder" }, { name: "description", content: "Build your own offshore engineering team using our GCC infrastructure." }] 
 

export default function Page() {
  return (
    <  >
      <div className="pt-28 px-6 max-w-7xl mx-auto"><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Services" }, { label: "Offshore Dev Centre" }]} /></div>
      <PageHero
        eyebrow="GCC Model"
        title={<>Offshore <span className="text-primary">Development Centre</span></>}
        sub="Set up your own Global Capability Centre in 90 days — talent, compliance, infrastructure, and management, all run by us."
      />
      <Section>
        <SectionTitle eyebrow="Model" title="The GCC Model Explained" />
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { Icon: Users, t: "Talent Pool", d: "Curated access to 10,000+ pre-vetted engineers." },
            { Icon: Building2, t: "Infrastructure", d: "Premium offices, devices, IT, and security." },
            { Icon: ShieldCheck, t: "Compliance", d: "GDPR, SOC 2, ISO 27001 baked in." },
            { Icon: Briefcase, t: "Management", d: "HR, payroll, retention handled end-to-end." },
          ].map(({ Icon, t, d }) => (
            <Card key={t}>
              <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center mb-4"><Icon className="size-5 text-primary" /></div>
              <div className="text-white font-medium mb-1">{t}</div>
              <div className="text-foreground/55 text-[13px] leading-relaxed">{d}</div>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="Timeline" title="90-Day Setup" />
        <div className="space-y-3 max-w-3xl mx-auto">
          {[
            { w: "Week 1–2", t: "Planning", d: "Org design, role mapping, location strategy." },
            { w: "Week 3–6", t: "Hiring", d: "Recruit & vet 80% of seed roles." },
            { w: "Week 7–10", t: "Infrastructure", d: "Office, devices, security, IT stack live." },
            { w: "Week 11–12", t: "Go-live", d: "Team online, first sprint shipped." },
          ].map((s) => (
            <Card key={s.w} className="flex gap-6 items-center">
              <div className="text-primary font-mono text-[12px] uppercase tracking-[0.15em] w-28 flex-shrink-0">{s.w}</div>
              <div>
                <div className="text-white font-medium">{s.t}</div>
                <div className="text-foreground/55 text-[13px]">{s.d}</div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="Cost" title="GCC vs In-house, side by side" />
        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          <Card><div className="text-[11px] uppercase tracking-[0.2em] text-foreground/40 mb-2">In-house (US)</div><div className="text-4xl font-extrabold text-white">$1.8M</div><div className="text-foreground/55 text-sm mt-2">Annual cost for 10 engineers + ops</div></Card>
          <Card className="border-primary/30"><div className="text-[11px] uppercase tracking-[0.2em] text-primary mb-2 font-bold">GCC with us</div><div className="text-4xl font-extrabold text-white">$680K</div><div className="text-foreground/55 text-sm mt-2">Same 10 engineers, fully managed</div></Card>
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="FAQ" title="Common questions" />
        <FAQ items={[
          { q: "Where are the offshore centres located?", a: "We operate hubs in Bangalore, Hyderabad, and Warsaw with managed delivery." },
          { q: "Who owns the entity?", a: "Both BOT (Build-Operate-Transfer) and full-management models available." },
          { q: "Compliance coverage?", a: "ISO 27001, SOC 2 Type II, GDPR, HIPAA where applicable." },
          { q: "Minimum team size?", a: "We typically start with 8+ engineers for GCC engagements." },
          { q: "Can we visit the centre?", a: "Always. Quarterly visits are encouraged." },
        ]} />
      </Section>
      <CTABanner />
    </  >
  );
}
