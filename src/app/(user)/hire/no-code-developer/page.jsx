
import { PageHero, Section, SectionTitle, Card, ProfileCard, FAQ, CTABanner, Breadcrumb } from "@/components/site/Shared";

const meta= [{ title: "Hire No-Code Developer — HireTopCoder" }] 

const specs = ["Bubble", "Webflow", "n8n", "Zapier", "Airtable", "Glide", "Softr", "Make"];
const devs = [
  { name: "Olivia P.", role: "Webflow Specialist", years: 5, tags: ["Webflow", "CMS", "Memberstack"] },
  { name: "Ravi K.", role: "Bubble Developer", years: 4, tags: ["Bubble", "Stripe", "APIs"] },
  { name: "Tanvi A.", role: "Automation Engineer", years: 6, tags: ["n8n", "Zapier", "Make"] },
];

 export default function Page() {
  return (
    <   >
      <div className="pt-28 px-6 max-w-7xl mx-auto"><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Hire" }, { label: "No-Code Developer" }]} /></div>
      <PageHero eyebrow="Hire by Role" title={<>Hire <span className="text-primary">No-Code Developers</span></>} sub="Ship MVPs, internal tools, and automations in days — not months." />
      <Section>
        <SectionTitle eyebrow="Specializations" title="Tools we cover" />
        <div className="flex flex-wrap justify-center gap-2">
          {specs.map((s) => <span key={s} className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[13px] font-medium">{s}</span>)}
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="Profiles" title="Featured No-Code Builders" />
        <div className="grid md:grid-cols-3 gap-5">{devs.map((d) => <ProfileCard key={d.name} {...d} />)}</div>
      </Section>
      <Section>
        <SectionTitle eyebrow="Use Cases" title="What we build" />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: "Internal tools", d: "CRUD dashboards on Airtable + Softr in under a week." },
            { t: "MVP landing pages", d: "Webflow sites with Stripe and analytics, ready to launch." },
            { t: "Automation workflows", d: "Multi-step n8n / Zapier flows replacing ops headcount." },
          ].map((c) => <Card key={c.t}><div className="text-white font-medium mb-2">{c.t}</div><div className="text-foreground/60 text-sm leading-relaxed">{c.d}</div></Card>)}
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="FAQ" title="Common questions" />
        <FAQ items={[
          { q: "When is no-code the wrong fit?", a: "Highly custom UX, complex permissions, or massive scale — we'll tell you upfront." },
          { q: "Can you migrate later to code?", a: "Yes — we plan exit paths from day one." },
          { q: "Pricing?", a: "$35–$85/hr depending on platform and seniority." },
        ]} />
      </Section>
      <CTABanner />
    </   >
  );
}
