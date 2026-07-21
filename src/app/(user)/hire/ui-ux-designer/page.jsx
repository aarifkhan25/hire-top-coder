
"use client"
import { ChevronDown, Code2, Compass, Gem, Layers, Paintbrush, Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { HeadSection, Hero, } from "../ai-ml-engineer/page.jsx";
import { EngineersCard } from "../full-stack-developer/Full-Stack-DeveloperPage";
//  export const metadata= [{ title: "Hire UI/UX Designer — HireTopCoder" ,description: "Hire vetted UI/UX designers. Figma, prototyping,Photoshop, Canva,Lightroom, design systems." }]
const stackItems = [
  { name: "Figma", icon: Compass },
  { name: "Sketch", icon: Gem },
  { name: "Adobe XD", icon: Paintbrush },
  { name: "Principle", icon: Layers },
  { name: "Framer", icon: Code2 },
];
const engineers = [
  {
    name: "Alex Rivet",
    star:"4.5",projects:"42 Projects",
    title: "React, Node.js, AWS Cloud Architect",
    tags: ["INFRASTRUCTURE", "SECURITY"],
    img: "/assets/neha.png",btnname:"View Profile"
  },
  {
    name: "Sarah Chen",
    star:"5",projects:"58 Projects",
    title: "Next.js, Python, ML Engineering",
    tags: ["DEVOPS", "SYSTEM DESIGN"],
    img: "/assets/neha.png",btnname:"View Profile"
  },
  {
    name: "Marcus Thorne",
    star:"4.8",projects:"31 Projects",
    title: "Distributed Systems, Go, Kubernetes",
    tags: ["SCALE", "MICROSERVICES"],
    img: "/assets/neha.png",btnname:"View Profile"
  },
  // आप परीक्षण के लिए और कार्ड्स भी जोड़ सकते हैं:
 
];

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeniority, setSelectedSeniority] = useState("Seniority");
  return (
//  <main className=" w-full"  >
//       <div className="pt-20 md:pt-28 "><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Hire" }, { label: "UI/UX Designer" }]} /></div>
//       <PageHero
//         eyebrow="Hire by Role"
//         title={<>Hire Vetted <span className="text-primary">UI/UX Designers</span></>}
//         sub={<>Designers who ship — not just pretty mockups. Top 3% <br  className="hidden md:block"/> across product, brand, and design systems.</>}
//       ><div className="mt-5 md:mt-10 w-full flex justify-center">
//          <div className="w-full md:w-[70%]  glass rounded-full p-1 md:p-2 md:pl-5 flex items-center  gap-2 ring-purple">
//                <Search className="size-4 md:size-5 text-foreground/60 shrink-0" />
//                <input
//                  placeholder="Try ‘senior product designer for fintech SaaS’"
//                  className="flex-1 bg-transparent outline-none text-xs md:text-sm py-1.5 md:py-3 placeholder:text-foreground/45"
//                />
//                <button className="btn-primary-glow text-white font-bold rounded-full px-3 py-1.5  md:px-6 md:py-3 text-xs md:text-sm 1xl:text-base whitespace-nowrap">
//                  Search
//                </button>
//              </div>
//              </div>
//       </PageHero>
//       <Section className="  ">
//         <SectionTitle eyebrow="Profiles" title="Featured Designers" />
//         <div className="grid md:grid-cols-3 gap-5">{designers.map((d) => <ProfileCard key={d.name} {...d} />)}</div>
//       </Section>

//       <Section className="  ">
//         <SectionTitle eyebrow="Tools" title="Tools they master" />
//         <div className="flex flex-wrap justify-center gap-3 mt-5 md:mt-10">
//           {["Figma", "Sketch", "Adobe XD", "Framer", "Webflow", "Principle", "ProtoPie"].map((t) => (
//             <span key={t} className="px-4 py-2 rounded-full  border border-white/10  bg-primary/10 transition-colors hover:border-primary text-xs md:text-sm font-medium">{t}</span>
//           ))}
//         </div>
//       </Section>

//       <Section className="  ">
//         <SectionTitle eyebrow="Work" title="Past work samples" />
//         <div className="grid md:grid-cols-3 mt-10 gap-4">
//           {[1, 2, 3, 4, 5, 6].map((i) => (
//             <div key={i} className="aspect-[4/3] rounded-[10px] bg-gradient-to-br from-primary/20 via-[#141418] to-[#0a0a0a] border border-white/[0.06]" />
//           ))}
//         </div>
//       </Section>
      
//       <Section className="  ">
//          <div className="absolute left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
//       <div className="relative  w-full">
//         <SectionTitle eyebrow="Pricing" title="Simple rate card" />
//         <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto">
//           <Card><div className="text-[8px] md:text-[11px] uppercase tracking-[0.2em] text-primary font-bold">Hourly</div><div className="mt-3  text-2xl md:text-4xl font-extrabold text-white">$65–$110</div><div className="text-foreground/55 text-xs md:text-sm md:mt-1">per hour, all-in</div></Card>
//           <Card><div className="text-[8px] md:text-[11px] uppercase tracking-[0.2em] text-primary font-bold">Monthly</div><div className="mt-3 text-2xl md:text-4xl font-extrabold text-white">$6.4k–$11k</div><div className="text-foreground/55 text-xs md:text-sm md:mt-1">full-time, dedicated</div></Card>
//         </div></div>
//       </Section>

//       <Section className="  ">
//         <SectionTitle eyebrow="FAQ" title="Common questions" />
//         <FAQ items={[
//           { q: "How fast can a designer start?", a: "Most designers begin within 5 business days." },
//           { q: "Do designers handle research too?", a: "Yes — most senior designers run user interviews and usability tests." },
//           { q: "Can they work in our Figma workspace?", a: "Yes, we onboard to your design system from day one." },
//           { q: "Hourly or monthly — which is better?", a: "Monthly for ongoing product work, hourly for one-off sprints." },
//         ]} />
//       </Section>

//       <CTABanner />
//     </ main  >


<section className="w-full pt-30 md:pt-48 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25">
    <div className="">

 <Hero title="PREMIUM TALENT NETWORK" heading={<> Hire Vetted 

<span className="text-gradient-purple"> UI/UX Designers </span>

          </>} des={<>Access the top 1% of design talent. Our designers specialize in creating high- <br/>
conversion, technically sophisticated interfaces for global scale products.</>}  className=" flex justify-center items-center  text-center  mx-auto" />
<div className="mt-5 bg-[#100F15] border border-primary/20 rounded-2xl p-1 flex flex-col md:flex-row items-center gap-3 md:gap-0 shadow-2xl  max-w-3xl mx-auto">
          
          {/* Section 1: Text Search Input */}
          <div className="flex items-center gap-3.5 px-4 py-2.5 w-full md:flex-1">
            <Search className="w-5 h-5 text-primary shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by skill or industry..."
              className="w-full bg-transparent text-sm sm:text-base text-[#F4EFFB] placeholder-[#8E879A] focus:outline-none font-normal"
            />
          </div>

          {/* Vertical Divider (Hidden on mobile) */}
          <div className="hidden md:block w-[1px] h-9 bg-white/[0.08]" />

          {/* Section 2: Seniority Dropdown Filter */}
          <div className="relative w-full md:w-auto min-w-[200px]">
            <div className="flex items-center justify-between gap-3 px-5 py-2.5 cursor-pointer text-[#A6A0B0] hover:text-[#F4EFFB] transition-colors">
              <div className="flex items-center gap-3">
                <SlidersHorizontal className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm sm:text-base font-normal tracking-tight text-[#F4EFFB]">
                  {selectedSeniority}
                </span>
              </div>
              <ChevronDown className="w-4 h-4 text-[#8E879A] shrink-0" />
            </div>

            {/* Optional Select overlay for quick interactivity */}
            <select
              value={selectedSeniority}
              onChange={(e) => setSelectedSeniority(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer bg-transparent"
            >
              <option value="Seniority" className="bg-[#100F15] text-white">
                Seniority
              </option>
              <option value="Junior" className="bg-[#100F15] text-white">
                Junior
              </option>
              <option value="Mid-Level" className="bg-[#100F15] text-white">
                Mid-Level
              </option>
              <option value="Senior" className="bg-[#100F15] text-white">
                Senior
              </option>
              <option value="Lead" className="bg-[#100F15] text-white">
                Lead
              </option>
              <option value="Architect" className="bg-[#100F15] text-white">
                Architect
              </option>
            </select>
          </div>

          {/* Section 3: Action Button with Gradient Effect */}
          <div className="w-full md:w-auto shrink-0 md:pl-2">
            <button
              type="button"
              className="w-full md:w-auto px-7 py-3 sm:py-3.5 bg-primary text-[#1D063A] font-semibold text-sm sm:text-base rounded-2xl transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-lg shadow-purple-950/40"
            >
              Find Talent
            </button>
          </div>

        </div>
</div>

<div className="grid py-20 gap-15 lg:gap-30">
  <div className=" w-full  border-y border-white/50 py-5 mx-auto text-center">
        {/* Uppercase Small Section Title */}
        <h4 className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#8E879A] uppercase mb-10">
          STACK PROFICIENCY
        </h4>

        {/* Tech Stack Horizontal List */}
        <div className="flex flex-wrap items-center justify-center gap-6 ">
          {stackItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2.5 sm:gap-3 text-[#F4EFFB] hover:text-primary border border-white/10 bg-primary/10 transition-colors hover:border-primary rounded-full px-2 py-1.5 sm:px-4 sm:py-3  transition-colors duration-200 group cursor-pointer"
              >
                {/* Purple Tinted Icon */}
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#A855F7] stroke-[2] transition-transform duration-200 group-hover:scale-110" />

                {/* Tool Name */}
                <span className="text-sm sm:text-base font-bold tracking-tight">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
<div className="grid gap-15">

      <div className="flex justify-between items-center">
        <div>  <HeadSection name="Available Experts" des="Top designers available for immediate engagement." /></div>
        <div><p className="text-primary font-bold ">See All 120+ Expert</p></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     <EngineersCard filteredEngineers={engineers}/>
      </div>
</div>



</div>
</section>
  );
}
