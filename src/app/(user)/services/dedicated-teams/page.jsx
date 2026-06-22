import { PrimaryButton } from "@/components/site/PageShell.jsx";
import { Breadcrumb, Card, CTABanner, FAQ, PageHero, PurplePill, Section, SectionTitle, Stepper } from "@/components/site/Shared";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";



const meta=[{ title: "Dedicated Expert Teams — HireTopCoder" }, { name: "description", content: "Full-time developers assigned solely to your project. Long-term ownership, predictable cost." }] 

export default function Page() {
  return (
   <main className="px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 w-full">
      <div className="pt-20 md:pt-28   "><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Services" }, { label: "Dedicated Teams" }]} /></div>
      <PageHero
        eyebrow="Delivery Model"
        title={<>Dedicated <span className="text-primary">Expert Teams</span></>}
        sub={<>A full-time developer assigned solely to your project — embedded <br className="hidden md:block"/> in your workflow, owning outcomes end-to-end.</>}
      />

      <Section className=" py-10  lg:py-28 2xl:py-35">
        <SectionTitle eyebrow="Process" title="How It Works" />
        <Stepper steps={[
          { title: "Discovery", desc: "We map your goals, stack, and team culture in a 30-minute call." },
          { title: "Matching", desc: "Receive 3 hand-picked profiles within 48 hours." },
          { title: "Onboarding", desc: "Engineer joins your tooling, standups, and codebase in week 1." },
          { title: "Ongoing Management", desc: "Dedicated success manager keeps velocity and quality on track." },
        ]} />
      </Section>

      <Section className=" py-10  lg:py-28 2xl:py-35">
         <div className="absolute left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
      <div className="relative  w-full">
        <SectionTitle eyebrow="Ideal For" title="Who this is built for" />
        <div className="grid md:grid-cols-3  md:gap-5">
          {[
            { t: "Scaling startups", d: "Post-seed teams shipping weekly who need senior firepower without a full hire." },
            { t: "Long-term projects", d: "6+ month roadmaps where context and ownership compound week over week." },
            { t: "Ongoing feature dev", d: "Teams running parallel feature streams that need a steady, embedded engineer." },
          ]?.map((c) => <Card key={c.t}><div className="text-white text-xs md:text-base font-medium mb-2">{c.t}</div><div className="text-foreground/60 text-[10px] md:text-sm leading-relaxed">{c.d}</div></Card>)}
        </div>
        </div>
      </Section>


      <Section className=" py-10  lg:py-28 2xl:py-35">
        <SectionTitle eyebrow="Pricing" title="Simple monthly retainer" sub="One predictable invoice. No recruiter fees. No surprises." />
        <div className="max-w-2xl mx-auto"><Card className="p-5 md:p-10">
          <div className="text-[8px] md:text-[11px] uppercase tracking-[0.2em] text-primary font-bold">Dedicated Engineer</div>
          <div className="mt-3 flex items-end gap-2"><div className="text-3xl md:text-5xl font-extrabold text-white">$4,800</div><div className="text-foreground/50 text-xs md:text-base pb-2">/ month</div></div>
          <div className="mt-2 text-foreground/55 text-[10px] md:text-sm">Senior-level · 160 hrs/mo · 30-day exit</div>
          <ul className="mt-3 md:mt-6 space-y-3">
            {["Full-time engineer dedicated to one client", "Replacement guarantee within 7 days", "Dedicated success manager + weekly QBR", "All IP & code ownership transferred to you", "No recruiter or platform fees"]?.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-foreground/80 text-xs md:text-base"><Check className="size-3 md:size-4 text-primary  mt-0.5 flex-shrink-0" />{f}</li>
            ))}
          <PrimaryButton>Talk to Expert</PrimaryButton>         </ul>

        </Card></div>
      </Section>


      <Section className=" py-10  lg:py-28 2xl:py-35">
        <div className="absolute left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
      <div className="relative  w-full">
        <SectionTitle eyebrow="Proof" title="Real outcomes" />
        <div className="max-w-2xl mx-auto"><Link href="/case-studies/broker-remarks" className="block"><Card className="hover:border-primary/30 transition">
          <PurplePill>Case Study · SaaS</PurplePill>
          <div className="mt-3 text-base md:text-xl text-white font-medium">Broker Remarks — Listing Platform Rebuild</div>
          <div className="mt-2 text-foreground/60 text-xs md:text-base leading-relaxed">Reduced agent onboarding time by 60% with a streamlined React + Firebase architecture, shipped in 12 weeks by a 2-engineer dedicated team.</div>
          <div className="mt-4 text-primary text-[10px] md:text-sm flex items-center gap-1 font-medium">Read case study <ArrowRight className="size-3 md:size-4" /></div>
        </Card></Link></div></div>
      </Section>


      <Section className="lg:px-30  py-10  lg:py-28 2xl:py-35">
        <SectionTitle eyebrow="FAQ" title="Common questions" />
        <FAQ items={[
          { q: "How quickly can an engineer start?", a: "Most dedicated engineers begin within 5–7 business days after we sign the agreement." },
          { q: "What happens if it doesn't work out?", a: "Replacement is guaranteed within 7 days at no extra cost. You can also exit with 30-day notice." },
          { q: "Who owns the code and IP?", a: "100% of code, IP, and assets are yours from day one — transferred via your repo and contracts." },
          { q: "Can I scale the team up later?", a: "Yes — add engineers in 48–72 hours through the same agreement." },
          { q: "Are engineers truly full-time on my project?", a: "Yes. Each engineer is contractually allocated 100% to a single client at any time." },
        ]} />
      </Section>


     <CTABanner />
    </main>
  );
}
