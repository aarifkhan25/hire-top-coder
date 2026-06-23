import { Breadcrumb, Card, CTABanner, FAQ, PageHero, Section, SectionTitle } from "@/components/site/Shared";
import { Briefcase, Building2, ShieldCheck, Users } from "lucide-react";


  export  const metadata= { title: "Offshore Development Centre — HireTopCoder" ,description: "Build your own offshore engineering team using our GCC infrastructure." }
 

export default function Page() {
  return (
     <main className="px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 w-full" >
      <div className=" pt-20 md:pt-28 "><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Services" }, { label: "Offshore Dev Centre" }]} /></div>
      <PageHero
        eyebrow="GCC Model"
        title={<>Offshore <span className="text-primary">Development Centre</span></>}
        sub={<>Set up your own Global Capability Centre in 90 days — talent, compliance <br/> infrastructure, and management, all run by us.</>}
      />
      <Section className=" py-10  lg:py-28 2xl:py-35">
        <SectionTitle eyebrow="Model" title="The GCC Model Explained" />
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { Icon: Users, t: "Talent Pool", d: "Curated access to 10,000+ pre-vetted engineers." },
            { Icon: Building2, t: "Infrastructure", d: "Premium offices, devices, IT, and security." },
            { Icon: ShieldCheck, t: "Compliance", d: "GDPR, SOC 2, ISO 27001 baked in." },
            { Icon: Briefcase, t: "Management", d: "HR, payroll, retention handled end-to-end." },
          ].map(({ Icon, t, d }) => (
            <Card key={t}>
                   <div className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center shrink-0 border border-white/10 rounded-md bg-primary/10 transition-colors hover:border-primary mb-2 md:mb-5" >
              <Icon className="size-4 md:size-5 text-primary" />
            </div>
            <div className="text-sm md:text-lg 2xl:text-xl font-semibold leading-snug group-hover:text-primary transition md:mb-2">{t}</div>
            <div className="text-[8px] md:text-xs 2xl:text-sm text-foreground/75 font-medium leading-relaxed flex-1 group-hover:text-white">{d}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className=" py-10  lg:py-28 2xl:py-35">
        
        <SectionTitle eyebrow="Timeline" title="90-Day Setup" />
        <div className="space-y-3 w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 lg:px-20 1xl:px-40">
          {[
            { w: "Week 1–2", t: "Planning", d: "Org design, role mapping, location strategy." },
            { w: "Week 3–6", t: "Hiring", d: "Recruit & vet 80% of seed roles." },
            { w: "Week 7–10", t: "Infrastructure", d: "Office, devices, security, IT stack live." },
            { w: "Week 11–12", t: "Go-live", d: "Team online, first sprint shipped." },
          ].map((s) => (
            <Card key={s.w} className="flex md:gap-6 items-center">
              <div className="text-primary font-sans font-semibold text-[10px]  md:text-xs uppercase tracking-[0.15em] w-28 flex-shrink-0">{s.w}</div>
              <div>
                <div className="text-white text-xs md:text-base font-semibold">{s.t}</div>
                <div className="text-foreground/55 text-[10px] md:text-[13px] font-medium">{s.d}</div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className=" py-10  lg:py-28 2xl:py-35">
         <div className="absolute left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
      <div className="relative  w-full">
        <SectionTitle eyebrow="Cost" title="GCC vs In-house, side by side" />
        <div className="grid md:grid-cols-2 md:gap-5 max-w-3xl mx-auto">
          <Card><div className="text-[8px] md:text-[11px] uppercase tracking-[0.2em] text-foreground/40 mb-2">In-house (US)</div><div className="text-2xl md:text-4xl font-extrabold text-white">$1.8M</div><div className="text-foreground/55 text-[10px] md:text-sm mt-2">Annual cost for 10 engineers + ops</div></Card>
          <Card className="border-primary/30"><div className="text-[8px] text-[11px] uppercase tracking-[0.2em] text-primary mb-2 font-bold">GCC with us</div><div className="text-2xl md:text-4xl font-extrabold text-white">$680K</div><div className="text-foreground/55 text-[10px] md:text-sm mt-2">Same 10 engineers, fully managed</div></Card>
        </div></div>
      </Section>

      <Section className=" py-10  lg:py-28 2xl:py-35">
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
    </main  >
  );
}
