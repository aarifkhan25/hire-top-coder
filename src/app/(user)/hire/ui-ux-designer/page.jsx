
"use client"
import { CTA } from "@/components/site/PageShell.jsx";
import { Reveal } from "@/components/site/Reveal.jsx";
import { CheckCircle2, ChevronDown, Code2, Compass, Gem, Layers, Paintbrush, Search, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FAQ, HeadSection, Hero } from "../ai-ml-engineer/page.jsx";
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
const mainShowcase ={
  category: "FinTech Dashboard",
  title: "Global Asset Management System",
  image:
    "/assets/blog-2.png",
};

const sideShowcases=  [
  {
    title: "Retail Mobile UX",
    image:
      "/assets/blog-2.png",
  },
  {
    title: "Design System Architecture",
    image:
      "/assets/blog-2.png",
  },
];
const features= [
  { text: "8+ Years Industry Experience" },
  { text: "Full-stack UI & UX Capabilities" },
  { text: "Native Level Communication" },
  { text: "Project Lead Potential" },
];
const faqData = [
  {
    id: 1,
    question: "How do you vet your UI/UX designers?",
    answer:
      "Our vetting process includes a portfolio review by senior design leads, a live visual design challenge, a technical UX case study presentation, and a communication and culture-fit interview. Only 3% of applicants are admitted.",
  },
  {
    id: 2,
    question: "Can I hire a whole squade of Ui/Ux Developer?",
    answer:
      "Yes, our engineers are globally distributed and flexible. We match you with technical leaders who guarantee a minimum of 4 hours of direct working overlap with your core team's local time zone.",
  },
  {
    id: 3,
    question: "Do you support specialized hardware stacks (NVIDIA/TPU)?",
    answer:
      "Absolutely. Our specialists have hands-on experience optimizing workloads across NVIDIA H100/A100 clusters, Google TPUs, and specialized edge hardware like AWS Inferentia and Apple Silicon.",
  }]
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
          <div className="hidden md:block w-[1px] h-9 bg-primary/50" />

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
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary stroke-[2] transition-transform duration-200 group-hover:scale-110" />

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
      <Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     <EngineersCard filteredEngineers={engineers}/>
      </div></Reveal>
</div>

<div className="grid gap-15">
    <HeadSection name="Crafted by Our Talent" des="Witness the precision and technical excellence of designs delivered through
our network." className=" flex justify-center items-center  text-center max-w-2xl mx-auto" />
<Reveal>
<div className=" w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* ================= LEFT MAIN SHOWCASE CARD (Spans 2 columns) ================= */}
        <div className="lg:col-span-2 relative group overflow-hidden rounded border border-primary/50 bg-[#100F15] h-[380px] sm:h-[460px] lg:h-[520px]">
          {/* Background Image with Dark Grayscale / Ambient Effect */}
          <Image
            src={mainShowcase.image}
            alt={mainShowcase.title}
            fill
            className="object-cover object-center grayscale contrast-125 brightness-[0.4] group-hover:scale-105 group-hover:brightness-[0.5] transition-all duration-500 ease-out"
          />

          {/* Dark Overlay Gradient for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08070C] via-black/40 to-transparent pointer-events-none" />

          {/* Content Positioned at Bottom Left */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 z-10">
            {/* Tag / Category */}
            <span className="text-xs sm:text-sm font-semibold text-primary tracking-wide mb-2 block">
              {mainShowcase.category}
            </span>

            {/* Main Title */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F4EFFB] tracking-tight">
              {mainShowcase.title}
            </h3>
          </div>
        </div>

        {/* ================= RIGHT SIDE CARDS (Stacked Vertically) ================= */}
        <div className="lg:col-span-1 flex flex-col gap-5 h-full justify-between">
          {sideShowcases.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded border border-primary/50 bg-[#100F15] h-[180px] sm:h-[220px] lg:h-[250px] w-full"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center grayscale contrast-125 brightness-[0.4] group-hover:scale-105 group-hover:brightness-[0.5] transition-all duration-500 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08070C]/90 via-black/30 to-transparent pointer-events-none" />

              {/* Title Positioned at Bottom Left */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                <h4 className="text-base sm:text-lg font-bold text-[#F4EFFB] tracking-tight">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div></Reveal>

</div>
<Reveal>
<div className=" w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4  items-center border-b border-white/50 pb-20">
        
        {/* ================= LEFT CONTENT SECTION ================= */}
        <div className=" flex flex-col justify-center">
          {/* Main Section Title */}
        <HeadSection name="Transparent Engagement" des="We offer flexible engagement models tailored to your project scope.
No hidden fees, just elite talent billed simply." />

          {/* Step Items */}
          <div className="space-y-8 mt-10">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#1A1821] text-white flex items-center justify-center font-semibold text-sm shrink-0 border border-primary/50">
                1
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#F4EFFB] mb-1">
                  Vetting Guaranteed
                </h3>
                <p className="text-xs sm:text-sm text-[#8E879A] leading-relaxed">
                  Every designer passes a 4-stage visual and technical assessment.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#1A1821] text-white flex items-center justify-center font-semibold text-sm shrink-0 border border-primary/50">
                2
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#F4EFFB] mb-1">
                  Seamless Integration
                </h3>
                <p className="text-xs sm:text-sm text-[#8E879A] leading-relaxed">
                  Talent joins your Slack, Jira, and Figma within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT PRICING CARD ================= */}
        
        <div className=" flex justify-center lg:justify-end">
          
          <div className="relative w-full max-w-md bg-[#100F15] border border-primary/50 hover:border-primary rounded-sm p-8 sm:p-10 shadow-2xl overflow-hidden">
            
            {/* Top Right Badge: MOST POPULAR */}
            <div className="absolute top-0 right-0">
              <span className="bg-primary text-[#1D063A] text-[10px] font-bold tracking-wider uppercase px-3 py-1.5  block">
                MOST POPULAR
              </span>
            </div>

            {/* Card Heading */}
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F4EFFB] mb-4">
              Senior Designer Rate
            </h3>

            {/* Price & Unit */}
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F4EFFB]">
                $85-125
              </span>
              <span className="text-sm text-[#8E879A] font-medium">
                / hour
              </span>
            </div>

            {/* Feature Checklist */}
            <ul className="space-y-4 mb-8">
              {features.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm text-[#D1CBD8] hover:text-white font-normal">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Primary Action Button */}
            <button
              type="button"
              className="w-full py-4 bg-primary hover:bg-[#9333EA] hover:text-white text-[#1D063A] font-bold text-sm sm:text-base rounded transition-all duration-200 active:scale-[0.99] cursor-pointer shadow-lg shadow-purple-950/30 mb-4"
            >
              Start Trial Now
            </button>

            {/* Disclaimer Subtext */}
            <p className="text-[11px] sm:text-xs text-[#8E879A] text-center font-normal">
              Risk-free trial period for first week of engagement.
            </p>
          </div>
        </div>

      </div></Reveal>

      <FAQ faqData={faqData} />
       <CTA title={<>Ready to elevate <span className="text-gradient-purple">  your product</span>?</>} des="Schedule a call with a talent expert today and get a curated
shortlist of designers in 24 hours." btn1name="Book a Strategy Call" btn1href="/" btn2name="View All Designers" btn2href="/" />

</div>
</section>
  );
}
