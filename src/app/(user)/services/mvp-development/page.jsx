
import { Breadcrumb, Card, CTABanner, FAQ, PageHero, PurplePill, Section, SectionTitle, Stepper } from "@/components/site/Shared";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

  const meta= [{ title: "MVP Development in 12 Weeks — HireTopCoder" }, { name: "description", content: "Investor-ready MVP shipped in 12 weeks. Strategy, design, build, ship." }]


 export default function Page() {
  return (
    < main className="px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 w-full" >
      <div className="pt-20 md:pt-28 "><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Services" }, { label: "MVP Development" }]} /></div>
      <PageHero
        eyebrow="Engineering Service"
        title={<>Investor-Ready <span className="text-primary">MVP in 12 Weeks</span></>}
        sub={<>Strategy, design, code, QA, and launch — one team, one timeline, <br/>one outcome you can show to investors.</>}
      />
      <Section   className=" py-10  lg:py-28 2xl:py-35">
        <SectionTitle eyebrow="Included" title="What's in the box" />
        <div className="grid md:grid-cols-3 gap-3 w-full mt-5 md:mt-10">
          {["Product strategy", "UI/UX design", "Full-stack development", "QA & testing", "Deployment & DevOps", "Technical documentation"].map((f) => (
            <div key={f} className="flex items-center gap-2 md:gap-3 p-2 md:p-4 rounded-[10px] bg-[#141418] border border-white/[0.07]">
              <Check className="size-3 md:size-4 text-primary" />
              <span className="text-foreground/85 text-sm md:text-base">{f}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section   className=" py-10  lg:py-28 2xl:py-35">
        <div className="absolute left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
      <div className="relative  w-full">
        <SectionTitle eyebrow="Timeline" title="12-Week Roadmap" />
        <Stepper steps={[
          { title: "Weeks 1–2 · Discovery", desc: "Product brief, user flows, success metrics locked." },
          { title: "Weeks 3–6 · Design + Build", desc: "Hi-fi designs and core architecture in parallel." },
          { title: "Weeks 7–10 · Development", desc: "Feature build-out, integrations, internal demos." },
          { title: "Weeks 11–12 · Test + Launch", desc: "QA, polish, production deploy, handoff." },
        ]} /></div>
      </Section>


      <Section   className=" py-10  lg:py-28 2xl:py-35">
        <SectionTitle eyebrow="Tech" title="Tech Stack We Use" />
        <div className="flex flex-wrap justify-center gap-3 mt-10 max-w-xl mx-auto">
          {["React", "Next.js", "Node.js", "Flutter", "React Native", "Firebase", "AWS", "PostgreSQL", "Stripe", "OpenAI"].map((t) => (
            <span key={t} className="px-4 py-2 text-[10px] md:text-xs 2xl:text-sm rounded-full border border-white/10  bg-primary/10 transition-colors hover:border-primary font-semibold text-[#F0EDFF]">{t}</span>
          ))}
        </div>
      </Section>


      <Section   className=" py-10  lg:py-28 2xl:py-35">
        <div className="absolute left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
      <div className="relative  w-full">
        <SectionTitle eyebrow="Output" title="Investor-Ready Output" />
        <div className="grid md:grid-cols-3 md:gap-5">
          {[
            { t: "Pitch-ready demo", d: "Live, polished product to demo on screen-share or stage." },
            { t: "Codebase ownership", d: "Full repo access, clean commits, transferable architecture." },
            { t: "Scalability docs", d: "Architecture diagrams and scale-up plan you can hand to your CTO." },
          ].map((c) => <Card key={c.t}><div className="text-white  font-medium text-xs md:text-base md:mb-2">{c.t}</div><div className="text-foreground/60 text-[10px] md:text-sm leading-relaxed">{c.d}</div></Card>)}
        </div></div>
      </Section>

      <Section   className=" py-10  lg:py-28 2xl:py-35">
        <div className="max-w-2xl mx-auto"> <Link href="/case-studies/mkgo-transport"><Card className="hover:border-primary/30 transition">
          <PurplePill>Case Study · Mobile</PurplePill>
          <div className="mt-3 text-sm md:text-xl text-white font-medium">MKGO Transport — Flutter MVP</div>
          <div className="mt-2 text-foreground/60 text-xs md:text-base leading-relaxed">Full ride-booking app shipped in 8 weeks with real-time scheduling, Firebase backend, and a live pilot in 3 cities.</div>
          <div className="mt-2 md:mt-4 text-primary text-[10px] md:text-sm flex items-center gap-1 font-medium">Read case study <ArrowRight className="size-3 md:size-4" /></div>
        </Card></Link></div>
      </Section>

      <Section   className=" py-10  lg:py-28 2xl:py-35">
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
    </main  >
  );
}
