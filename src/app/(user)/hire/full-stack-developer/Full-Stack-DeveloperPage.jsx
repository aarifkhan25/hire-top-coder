"use client"
import { Reveal } from "@/components/site/Reveal.jsx";

import { GhostButton, PrimaryButton } from "@/components/site/PageShell.jsx";
import { Atom, BadgeCheck, Cloud, Code2, Compass, Filter, Flame, Gauge, Server, ShieldCheck, Star, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FAQ, HeadSection, Hero } from "../ai-ml-engineer/page.jsx";


const engineers = [
  {
    name: "Alex Rivet",
    role: "Senior",
    badgeText: "SENIOR",
    title: "React, Node.js, AWS Cloud Architect",
    tags: ["INFRASTRUCTURE", "SECURITY"],
    img: "/assets/neha.png",
    btnname:"View Full Resume"
  },
  {
    name: "Sarah Chen",
    role: "Lead",
    badgeText: "LEAD",
    title: "Next.js, Python, ML Engineering",
    tags: ["DEVOPS", "SYSTEM DESIGN"],
    img: "/assets/neha.png",btnname:"View Full Resume"
  },
  {
    name: "Marcus Thorne",
    role: "Architect",
    badgeText: "ARCHITECT",
    title: "Distributed Systems, Go, Kubernetes",
    tags: ["SCALE", "MICROSERVICES"],
    img: "/assets/neha.png",btnname:"View Full Resume"
  },
  // आप परीक्षण के लिए और कार्ड्स भी जोड़ सकते हैं:
  {
    name: "David Miller",
    role: "Senior",
    badgeText: "SENIOR",
    title: "Vue.js, Express, PostgreSQL Specialist",
    tags: ["FRONTEND", "DATABASE"],
    img: "/assets/neha.png",btnname:"View Full Resume"
  },
];

const filters = [
  { label: "Senior", rate: "$85 - $120/hr" },
  { label: "Lead", rate: "$120 - $160/hr" },
  { label: "Architect", rate: "$180+/hr" },
];



const stacks = [{name:"React + Node",icon:Atom},{name:"Next.js + Python",icon:Server},{name:"TypeScript Expert",icon:Code2},{name:"Go + Vue",icon:Flame},{name:"PostgreSQL + AWS",icon:Cloud}];
const features= [
  {
    icon: Compass,
    title: "Architectural Clarity",
    description:
      "Developers who design APIs while knowing exactly how they'll be consumed in the UI.",
  },
  {
    icon: Gauge,
    title: "Reduced Latency",
    description:
      "Faster iteration cycles by removing communication overhead between specialized teams.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Security",
    description:
      "Holistic security implementations that cover both the data layer and the client interface.",
  },
  {
    icon: TrendingUp,
    title: "Single-Point Ownership",
    description:
      "One expert responsible for a feature from database schema to user interaction.",
  },
];
const tableData = [
  {
    capability: "Hourly Rate Range",
    standard: "$60 - $85",
    elite: "$85 - $125",
    architect: "$130 - $180",
  },
  {
    capability: "Years of Experience",
    standard: "3 - 5 Years",
    elite: "5 - 8 Years",
    architect: "8+ Years",
  },
  {
    capability: "System Design Vetting",
    standard: "Core Knowledge",
    elite: "Advanced Scalability",
    architect: "Enterprise Mastery",
  },
  {
    capability: "Infrastructure Skills",
    standard: "Basic CI/CD",
    elite: "Full Cloud Native",
    architect: "K8s & Hybrid Cloud",
  },
];
const faqData = [
  {
    id: 1,
    question: "How do you vet your Full Stack Developer?",
    answer:
      "Every candidate undergoes a multi-stage technical screening including deep-dives into mathematical fundamentals, live coding of neural architectures, and a portfolio review of production-grade deployments. We only accept the top 1% of applicants.",
  },
  {
    id: 2,
    question: "Can I hire a whole squade of Full Stack Developer?",
    answer:
      "Yes, our engineers are globally distributed and flexible. We match you with technical leaders who guarantee a minimum of 4 hours of direct working overlap with your core team's local time zone.",
  },
  {
    id: 3,
    question: "Do you support specialized hardware stacks (NVIDIA/TPU)?",
    answer:
      "Absolutely. Our specialists have hands-on experience optimizing workloads across NVIDIA H100/A100 clusters, Google TPUs, and specialized edge hardware like AWS Inferentia and Apple Silicon.",
  }]
export default function FullStackDeveloperPage() {
  
  return (
  //  <main className=" w-full"    >
  //     <div className=" pt-20 md:pt-28"><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Hire" }, { label: "Full-Stack Developer" }]} /></div>
  //     <PageHero
  //       eyebrow="Hire by Role"
  //       title={<>Hire <span className="text-primary">Full-Stack Developers</span></>}
  //       sub={<>Senior engineers who ship across the stack — from <br/> React to infra — without hand-holding.</>}
  //     >
  //       <div className="max-w-xl mx-auto flex items-center gap-2 rounded-full bg-[#141418] border border-white/[0.08] px-4 py-2">
  //         <Search className="size-4 text-foreground/40" />
  //         <input placeholder="Search by stack or industry…" className="bg-transparent flex-1 outline-none text-sm text-white placeholder:text-foreground/30" />
  //       </div>
  //       <div className="mt-5 flex flex-wrap justify-center gap-2">
  //         {stacks.map((s) => (
  //           <button key={s} onClick={() => setStack(s)} className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition ${stack === s ? "bg-primary text-white" : "bg-white/[0.04] text-foreground/70 hover:bg-white/[0.08]"}`}>{s}</button>
  //         ))}
  //       </div>
  //     </PageHero>
  //     <Section className="  ">
  //       <SectionTitle eyebrow="Profiles" title="Featured Engineers" />
  //       <div className="grid md:grid-cols-3 gap-5">{devs.map((d) => <ProfileCard key={d.name} {...d} />)}</div>
  //     </Section>

  //     <Section className="  ">
  //       <SectionTitle eyebrow="Seniority" title="Filter by level" />
  //       <ComparisonTable
  //         headers={["Level", "Experience", "Hourly", "Monthly"]}
  //         rows={[
  //           ["Junior", "1–3 yrs", "$35–$50", "$3.5k–$5k"],
  //           ["Mid-level", "3–5 yrs", "$50–$75", "$5k–$7.5k"],
  //           ["Senior", "5–8 yrs", "$75–$110", "$7.5k–$11k"],
  //           ["Lead / Architect", "8+ yrs", "$110–$160", "$11k–$16k"],
  //         ]}
  //       />
  //     </Section>

  //     <Section className="  ">
  //        <div className="absolute left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
  //     <div className="relative  w-full">
  //       <SectionTitle eyebrow="Why" title="Why hire full-stack" />
  //       <div className="grid md:grid-cols-3 md:gap-5">
  //         {[
  //           { t: "One engineer, full ownership", d: "From DB to UI — no handoff overhead." },
  //           { t: "Faster iteration", d: "Ship features end-to-end inside one sprint." },
  //           { t: "Better architecture", d: "Decisions are made with the whole stack in mind." },
  //         ].map((c) => <Card key={c.t}><div className="text-white font-medium text-sm md:text-base md:mb-2">{c.t}</div><div className="text-foreground/60 text-xs md:text-sm leading-relaxed">{c.d}</div></Card>)}
  //       </div></div>
  //     </Section>

  //     <Section className="  ">
  //       <SectionTitle eyebrow="FAQ" title="Common questions" />
  //       <FAQ items={[
  //         { q: "Can a single engineer really cover full-stack?", a: "Yes — our senior engineers consistently ship production features end-to-end." },
  //         { q: "How do you screen for breadth and depth?", a: "Live coding across frontend, backend, and infra plus a take-home with real production constraints." },
  //         { q: "What stacks do you focus on?", a: "React, Next.js, Node.js, Python, .NET, plus modern cloud (AWS, GCP, Vercel)." },
  //         { q: "Time to start?", a: "5–7 business days." },
  //       ]} />
  //     </Section>

  //     <CTABanner />
  //   </  main >
  <section className="w-full pt-30 md:pt-48 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25">
    <div className="">

 <Hero title="ENGINEERING EXCELLENCE" heading={<> Hire 

<span className="text-gradient-purple"> Full-Stack Developers </span><br/>
Who Scale Your Vision 
          </>} des={<> Access the top 1% of full-stack talent. Vetted for architectural precision, code <br />
cleanliness, and rapid delivery across modern stacks.</>}  className=" flex justify-center items-center  text-center  mx-auto" />
<div className="mt-5 flex flex-wrap justify-center items-center gap-1 md:gap-3 max-w-3xl mx-auto">
  {stacks?.map((tech, i) => (
    <Reveal key={i} className="last:col-start-2">
      <div className="w-full flex gap-1 sm:gap-2 justify-center items-center shrink-0 border border-white/10 bg-primary/10 transition-colors hover:border-primary px-2 py-1.5 sm:px-4 sm:py-3 rounded-xl">
        <tech.icon className="text-primary text-[10px] sm:text-base lg:text-2xl" />
        <span className="text-[13px] sm:text-sm lg:text-base">{tech.name}</span>
      </div>
    </Reveal>
  ))}
</div>
    </div>

  <div className="grid pt-10 pb-20 lg:mt-25 gap-15 lg:gap-30">
    
<SeniorFilter engineers={engineers} filters={filters}/>

<div>
<Reveal>
<div className="flex justify-between items-center ">
 <div className=""><p className="uppercase text-sm text-primary">why full stack</p>
<h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-[1.05]" >Engineers who understand the whole <br/>
system build better products.</h2></div>
 <div className=""> <p className=" text-white/50 ">Eliminate the friction between front-end and back- <br/>
end silos with developers who own the entire <br/>
lifecycle.</p>
 </div>
</div>

<Card features={features}/>
</Reveal>
</div>

<div className="">
  <HeadSection name="Transparent Engineering Rates" des="No hidden fees. Premium talent at global market rates." className=" flex justify-center items-center  text-center max-w-2xl mx-auto" />
 <Reveal>
  <CapabiliyTable tableData={tableData}/>
  </Reveal> 
</div>

<FAQ faqData={faqData} />
  <CTABanner title={<>Ready to ship <span className="text-gradient-purple"> better Code</span>?</>} des="Start interviewing the world's best full-stack engineers in as little as
48 hours." btn1name="Shedule a Call" btn1href="/" btn2name="Browese Talent" btn2href="/" />

    </div>
  </section>
  );
}

export function EngineersCard({filteredEngineers}){
  return(<> {filteredEngineers.map((e, i) => (
          <div
            key={i}
            className="bg-[#0f0f0f] border border-primary/10 hover:border-primary p-6 rounded transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="relative">
                <Image
                  src={e.img}
                  alt={e.name}
                  width={64}
                  height={64}
                  className="rounded-xl object-cover w-16 h-16  border border-primary"
                />
              {e.badgeText &&  <BadgeCheck className="absolute -bottom-1 -right-1 w-5 h-5 text-primary bg-black rounded-full" />}
              </div>
             {e.badgeText &&  <span className="bg-[#1a1a1a] text-[10px] font-bold tracking-widest px-3 py-1 rounded text-primary border border-primary/10 hover:text-white hover:border-primary">
                {e.badgeText}
              </span>}
              {e.star && <div className="flex flex-col  items-start"><p className="flex justify-center items-center gap-1 text-[#FFFF00] text-base"><Star className="size-3"/> {e.star}</p><p className="text-white/50 text-xs font-semibold">{e.projects}</p></div>}
            </div>

            <h3 className="text-2xl font-semibold mb-1">{e.name}</h3>
            <p className="text-gray-400 mb-6">{e.title}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {e.tags.map((t) => (
                <span
                  key={t}
                  className="bg-[#1a1a1a] text-[10px] font-bold px-3 py-1 rounded text-gray-400 tracking-wider border border-white/5 hover:text-white hover:border-primary"
                >
                  {t}
                </span>
              ))}
            </div>

            <button className="w-full py-3 border border-white/10 rounded text-sm font-medium hover:bg-purple-950/20 hover:border-purple-500/40 text-gray-200 transition-colors cursor-pointer">
              {e.btnname}
            </button>
          </div>
        ))}</>)

}
export function SeniorFilter({engineers,filters}){
  
  const [activeFilter, setActiveFilter] = useState("Senior");


  const filteredEngineers = engineers.filter(
    (engineer) => engineer.role === activeFilter
  );
  
  return (<div className="bg-[#0a0a0a] text-white p-8 font-sans w-full">
      {/* Header & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12  border-y border-white/50 py-5">
        <div className="flex items-center gap-3 text-xl font-medium">
          <Filter className="text-xl lg:text-3xl text-primary" />
          Filter by Seniority Level
        </div>

        {/* Dynamic Clickable Filter Buttons */}
        <div className="flex bg-[#111] p-1 rounded-sm border border-white/10 w-fit">
          {filters.map((f) => {
            const isActive = activeFilter === f.label;
            return (
              <button
                key={f.label}
                onClick={() => setActiveFilter(f.label)}
                className={`px-5 py-2.5 rounded-sm text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-[#252525] shadow-lg border border-primary"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                <span
                  className={`text-base xL:text-lg font-bold ${
                    isActive ? "text-primary" : "text-white"
                  }`}
                >
                  {f.label}
                </span>
                <span className="text-gray-400">{f.rate}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filtered Cards Grid */}
      <Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       <EngineersCard filteredEngineers={filteredEngineers}/>
      </div></Reveal>

      {/* Empty State Guard: अगर किसी फ़िल्टर का डाटा न मिले */}
      {filteredEngineers.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          No engineers found for this seniority level.
        </div>
      )}
    </div>)
};
export function Card({features}){
return (<div className=" mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  ">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 sm:p-9 lg:p-10  border border-primary/50 hover:border-primary  flex flex-col justify-start  group hover:bg-white/[0.02] rounded transition-colors duration-300"
              >
                {/* Icon Section */}
                <div className="mb-5">
                  <Icon
                    className="w-8 h-8 text-primary stroke-[1.75]"
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-[22px] font-semibold text-[#F4EFFB] tracking-tight leading-snug mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A6A0B0] leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>)
}

export function CapabiliyTable({tableData}){
  return(<div className="mt-15 w-full mx-auto overflow-hidden rounded border border-white/[0.08] shadow-2xl bg-[#0B090E]">
        {/* Table Container for horizontal scrolling on smaller screens */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-xs sm:text-sm">
            {/* Table Header */}
            <thead>
              <tr className="bg-[#1A1821] text-[#F4EFFB] border-b border-white/[0.08]">
                <th className="py-5 px-6 font-semibold text-base sm:text-lg tracking-tight w-1/4">
                  Capability
                </th>
                <th className="py-5 px-6 font-semibold text-base sm:text-lg tracking-tight w-1/4">
                  Standard (Mid)
                </th>
                <th className="py-5 px-6 font-semibold text-base sm:text-lg tracking-tight text-primary w-1/4">
                  Elite (Senior)
                </th>
                <th className="py-5 px-6 font-semibold text-base sm:text-lg tracking-tight w-1/4">
                  Architect
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-white/[0.06] text-[#A6A0B0]">
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-white/[0.02] transition-colors duration-150"
                >
                  {/* Capability Label */}
                  <td className="py-5 px-6 font-medium text-[#D1CBD8] whitespace-nowrap">
                    {row.capability}
                  </td>

                  {/* Standard (Mid) */}
                  <td className="py-5 px-6 whitespace-nowrap">
                    {row.standard}
                  </td>

                  {/* Elite (Senior) - Highlighted Column */}
                  <td className="py-5 px-6 font-bold text-primary whitespace-nowrap">
                    {row.elite}
                  </td>

                  {/* Architect */}
                  <td className="py-5 px-6 whitespace-nowrap">
                    {row.architect}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>)
}
export function CTABanner({title,des,btn1name,btn1href,btn2name,btn2href}){
  return(<><section className="relative  px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 py-10 lg:py-20    ">
      <Reveal>
        <div className=" relative rounded-3xl glass py-6 px-5 sm:py-8 md:py-12 lg:py-16 text-center overflow-hidden glow-purple-strong">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-primary/30 blur-[120px]" />
          <div className="relative flex justify-between">
            <div className="">
            <h2 className="text-[26px] md:text-4xl lg:text-5xl font-bold sm:font-extrabold leading-tight">
{title}
            </h2>
            {des && <p className="mt-3  text-foreground/80  font-normal text-xs md:text-sm lg:text-base 1xl:text-xl ">
            {des}
            </p>}</div> 
            <div className="mt-5 md:mt-9 flex flex-wrap gap-3 justify-center">
              <PrimaryButton href={btn1href} >{btn1name}</PrimaryButton>
              <GhostButton href={btn2href} >{btn2name}</GhostButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  </>)
}
