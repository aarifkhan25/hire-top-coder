
import { PageHero, Section, SectionTitle, Card, Stepper, FAQ, CTABanner, PurplePill, Breadcrumb } from "@/components/site/Shared";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

  const meta= [{ title: "MVP Development in 12 Weeks — HireTopCoder" }, { name: "description", content: "Investor-ready MVP shipped in 12 weeks. Strategy, design, build, ship." }]


 export default function Page() {
  return (
    < >
      <div className="pt-28 px-6 max-w-7xl mx-auto"><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Services" }, { label: "MVP Development" }]} /></div>
      <PageHero
        eyebrow="Engineering Service"
        title={<>Investor-Ready <span className="text-primary">MVP in 12 Weeks</span></>}
        sub="Strategy, design, code, QA, and launch — one team, one timeline, one outcome you can show to investors."
      />
      <Section>
        <SectionTitle eyebrow="Included" title="What's in the box" />
        <div className="grid md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {["Product strategy", "UI/UX design", "Full-stack development", "QA & testing", "Deployment & DevOps", "Technical documentation"].map((f) => (
            <div key={f} className="flex items-center gap-3 p-4 rounded-[10px] bg-[#141418] border border-white/[0.07]">
              <Check className="size-4 text-primary" />
              <span className="text-foreground/85">{f}</span>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="Timeline" title="12-Week Roadmap" />
        <Stepper steps={[
          { title: "Weeks 1–2 · Discovery", desc: "Product brief, user flows, success metrics locked." },
          { title: "Weeks 3–6 · Design + Build", desc: "Hi-fi designs and core architecture in parallel." },
          { title: "Weeks 7–10 · Development", desc: "Feature build-out, integrations, internal demos." },
          { title: "Weeks 11–12 · Test + Launch", desc: "QA, polish, production deploy, handoff." },
        ]} />
      </Section>
      <Section>
        <SectionTitle eyebrow="Tech" title="Tech Stack We Use" />
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {["React", "Next.js", "Node.js", "Flutter", "React Native", "Firebase", "AWS", "PostgreSQL", "Stripe", "OpenAI"].map((t) => (
            <span key={t} className="px-4 py-2 rounded-full bg-[#141418] border border-white/[0.07] text-foreground/80 text-sm font-medium">{t}</span>
          ))}
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="Output" title="Investor-Ready Output" />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: "Pitch-ready demo", d: "Live, polished product to demo on screen-share or stage." },
            { t: "Codebase ownership", d: "Full repo access, clean commits, transferable architecture." },
            { t: "Scalability docs", d: "Architecture diagrams and scale-up plan you can hand to your CTO." },
          ].map((c) => <Card key={c.t}><div className="text-white font-medium mb-2">{c.t}</div><div className="text-foreground/60 text-sm leading-relaxed">{c.d}</div></Card>)}
        </div>
      </Section>
      <Section>
        <div className="max-w-2xl mx-auto"> <Link href="/case-studies/mkgo-transport"><Card className="hover:border-primary/30 transition">
          <PurplePill>Case Study · Mobile</PurplePill>
          <div className="mt-3 text-xl text-white font-medium">MKGO Transport — Flutter MVP</div>
          <div className="mt-2 text-foreground/60 leading-relaxed">Full ride-booking app shipped in 8 weeks with real-time scheduling, Firebase backend, and a live pilot in 3 cities.</div>
          <div className="mt-4 text-primary text-sm flex items-center gap-1 font-medium">Read case study <ArrowRight className="size-4" /></div>
        </Card></Link></div>
      </Section>
      <Section>
        <SectionTitle eyebrow="FAQ" title="Common questions" />
        <FAQ items={[
          { q: "What if scope changes mid-flight?", a: "We re-baseline at week 6. Small changes are absorbed; large ones add timeline transparently." },
          { q: "What's the typical price?", a: "MVPs land between $45k and $95k depending on platform and integrations." },
          { q: "Who owns the IP?", a: "100% yours from day one." },
          { q: "Can you maintain the MVP after launch?", a: "Yes — we transition into a dedicated team engagement seamlessly." },
          { q: "Do you sign NDAs before discovery?", a: "Always. Mutual NDA is the first document we sign." },
        ]} />
      </Section>
      <CTABanner />
    </ >
  );
}
