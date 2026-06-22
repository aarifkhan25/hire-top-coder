
import { Breadcrumb, Card, CTABanner, FAQ, PageHero, ProfileCard, Section, SectionTitle } from "@/components/site/Shared";
import { Search } from "lucide-react";

 const meta= [{ title: "Hire UI/UX Designer — HireTopCoder" }, { name: "description", content: "Hire vetted UI/UX designers. Figma, prototyping, design systems." }]

const designers = [
  { name: "Anya R.", role: "Senior UI/UX Designer", years: 7, tags: ["Figma", "Prototyping", "Design Systems"] },
  { name: "Marco D.", role: "Product Designer", years: 5, tags: ["Figma", "Webflow", "Motion"] },
  { name: "Priya S.", role: "UX Lead", years: 9, tags: ["Research", "Figma", "Accessibility"] },
  { name: "Liam K.", role: "Visual Designer", years: 6, tags: ["Brand", "Figma", "Framer"] },
  { name: "Sara N.", role: "Mobile Designer", years: 5, tags: ["iOS HIG", "Material", "Figma"] },
  { name: "Diego M.", role: "Design Engineer", years: 6, tags: ["Figma", "React", "Storybook"] },
];

export default function Page() {
  return (
 <main className="px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 w-full"  >
      <div className="pt-20 md:pt-28 "><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Hire" }, { label: "UI/UX Designer" }]} /></div>
      <PageHero
        eyebrow="Hire by Role"
        title={<>Hire Vetted <span className="text-primary">UI/UX Designers</span></>}
        sub={<>Designers who ship — not just pretty mockups. Top 3% <br  className="hidden md:block"/> across product, brand, and design systems.</>}
      ><div className="mt-5 md:mt-10 w-full flex justify-center">
         <div className="w-full md:w-[70%]  glass rounded-full p-1 md:p-2 md:pl-5 flex items-center  gap-2 ring-purple">
               <Search className="size-4 md:size-5 text-foreground/60 shrink-0" />
               <input
                 placeholder="Try ‘senior product designer for fintech SaaS’"
                 className="flex-1 bg-transparent outline-none text-xs md:text-sm py-1.5 md:py-3 placeholder:text-foreground/45"
               />
               <button className="btn-primary-glow text-white font-bold rounded-full px-3 py-1.5  md:px-6 md:py-3 text-xs md:text-sm 1xl:text-base whitespace-nowrap">
                 Search
               </button>
             </div>
             </div>
      </PageHero>
      <Section className="py-10 lg:py-28 2xl:py-35">
        <SectionTitle eyebrow="Profiles" title="Featured Designers" />
        <div className="grid md:grid-cols-3 gap-5">{designers.map((d) => <ProfileCard key={d.name} {...d} />)}</div>
      </Section>

      <Section className="py-10 lg:py-28 2xl:py-35">
        <SectionTitle eyebrow="Tools" title="Tools they master" />
        <div className="flex flex-wrap justify-center gap-3 mt-5 md:mt-10">
          {["Figma", "Sketch", "Adobe XD", "Framer", "Webflow", "Principle", "ProtoPie"].map((t) => (
            <span key={t} className="px-4 py-2 rounded-full  border border-white/10  bg-primary/10 transition-colors hover:border-primary text-xs md:text-sm font-medium">{t}</span>
          ))}
        </div>
      </Section>

      <Section className="py-10 lg:py-28 2xl:py-35">
        <SectionTitle eyebrow="Work" title="Past work samples" />
        <div className="grid md:grid-cols-3 mt-10 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-[4/3] rounded-[10px] bg-gradient-to-br from-primary/20 via-[#141418] to-[#0a0a0a] border border-white/[0.06]" />
          ))}
        </div>
      </Section>
      
      <Section className="py-10 lg:py-28 2xl:py-35">
         <div className="absolute left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
      <div className="relative  w-full">
        <SectionTitle eyebrow="Pricing" title="Simple rate card" />
        <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto">
          <Card><div className="text-[8px] md:text-[11px] uppercase tracking-[0.2em] text-primary font-bold">Hourly</div><div className="mt-3  text-2xl md:text-4xl font-extrabold text-white">$65–$110</div><div className="text-foreground/55 text-xs md:text-sm md:mt-1">per hour, all-in</div></Card>
          <Card><div className="text-[8px] md:text-[11px] uppercase tracking-[0.2em] text-primary font-bold">Monthly</div><div className="mt-3 text-2xl md:text-4xl font-extrabold text-white">$6.4k–$11k</div><div className="text-foreground/55 text-xs md:text-sm md:mt-1">full-time, dedicated</div></Card>
        </div></div>
      </Section>

      <Section className="py-10 lg:py-28 2xl:py-35">
        <SectionTitle eyebrow="FAQ" title="Common questions" />
        <FAQ items={[
          { q: "How fast can a designer start?", a: "Most designers begin within 5 business days." },
          { q: "Do designers handle research too?", a: "Yes — most senior designers run user interviews and usability tests." },
          { q: "Can they work in our Figma workspace?", a: "Yes, we onboard to your design system from day one." },
          { q: "Hourly or monthly — which is better?", a: "Monthly for ongoing product work, hourly for one-off sprints." },
        ]} />
      </Section>

      <CTABanner />
    </ main  >
  );
}
