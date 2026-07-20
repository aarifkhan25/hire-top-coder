
"use client"
import { CTA, GhostButton, PrimaryButton } from "@/components/site/PageShell.jsx";
import { Reveal } from "@/components/site/Reveal.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Bot, Brain, ChartNoAxesCombined, ChevronDown, Database, Eye, MessageSquare } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
// export  const metadata= { title: "Hire AI/ML Engineers & LLM Specialists — HireTopCoder" }


const techspecialization = [{name:"LLM Fine-tuning",icon:MessageSquare}, {name:"Computer Vision",icon:Eye},{name: "NLP",icon:Brain}, {name:"MLOps",icon:Database},{name: "Rainforcement Learning",icon:Bot}, {name:"Predictive Analytics",icon:ChartNoAxesCombined}];
const engineersData = [
  {
    name: "Alex V.",
    role: "SENIOR ML SCIENTIST",
    avatarUrl:
      "/assets/kajal.png",
    description:
      "Specializing in LLM quantization and deployment of distributed training systems at scale. Former Lead Researcher at a tier-1 autonomous vehicle firm.",
    tags: ["PyTorch", "OpenAI API", "Kubernetes", "HuggingFace"],
  },
  {
    name: "Sarah L.",
    role: "NLP SPECIALIST",
    avatarUrl:
      "/assets/kajal.png",
    description:
      "Expert in building RAG systems and multi-modal AI agents. Deep experience with vector databases and semantic search optimization for enterprise.",
    tags: ["LangChain", "Pinecone", "TensorFlow", "FastAPI"],
  },
  {
    name: "Marcus K.",
    role: "COMPUTER VISION ENGINEER",
    avatarUrl:
      "/assets/kajal.png",
    description:
      "Focused on real-time object detection and edge computing. Background in medical imaging and industrial robotics automation.",
    tags: ["YOLOv8", "OpenCV", "C++", "CUDA"],
  },
];
const faqData = [
  {
    id: 1,
    question: "How do you vet your AI/ML engineers?",
    answer:
      "Every candidate undergoes a multi-stage technical screening including deep-dives into mathematical fundamentals, live coding of neural architectures, and a portfolio review of production-grade deployments. We only accept the top 1% of applicants.",
  },
  {
    id: 2,
    question: "Can engineers work in our specific time zone?",
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
  return (
//    <main className=" w-full"    >
//       <div className=" pt-20 md:pt-28"><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Hire" }, { label: "AI / ML Engineer" }]} /></div>
//       <PageHero
//         eyebrow="Hire by Role"
//         title={<>Hire <span className="text-primary">AI / ML Engineers</span> & LLM Specialists</>}
//         sub={<>Engineers who can ship production AI — not just<br/> notebooks. LLMs, vision, MLOps, automation.</>}
//       />
//       <Section className="  ">
//         <SectionTitle eyebrow="Specializations" title="Pick the right specialization" />
//         <div className="flex flex-wrap justify-center mt-10 gap-2">
//           {specs.map((s) => (
//             <span key={s} className="px-4 py-2 rounded-full border border-white/10  bg-primary/10 transition-colors hover:border-primary  text-primary hover:text-white text-[11px] md:text-[13px] font-medium">{s}</span>
//           ))}
//         </div>
//       </Section>
//       <Section className="  ">
//         <SectionTitle eyebrow="Profiles" title="Featured AI Engineers" />
//         <div className="grid md:grid-cols-3 gap-5">{devs.map((d) => <ProfileCard key={d.name} {...d} />)}</div>
//       </Section>
//       <Section className="  ">
//         <div className="absolute left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
//       <div className="relative  w-full">
//         <SectionTitle eyebrow="Use Cases" title="Use cases we've shipped" />
      
// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 items-stretch">
//   {[
//     { t: "Support chatbots", d: "RAG over docs with citations and fallback to humans." },
//     { t: "Recommendation engines", d: "Hybrid models that lift conversion 2–4×." },
//     { t: "Automation pipelines", d: "LangGraph + workflow orchestration for ops teams." },
//     { t: "Document AI", d: "OCR + extraction with structured JSON output." },
//   ].map((c) => (
//     <Card key={c.t} className="h-full flex flex-col justify-between p-5">
      
//       <div className="flex flex-col">
//         <div className="text-white font-medium text-sm md:text-base mb-2">
//           {c.t}
//         </div>
//         <div className="text-foreground/60 text-xs md:text-sm leading-relaxed">
//           {c.d}
//         </div>
//       </div>
      
    
//     </Card>
//   ))}
// </div>
//         </div>
//       </Section>
//       <Section className="  ">
//         <SectionTitle eyebrow="FAQ" title="Common questions" />
//         <FAQ items={[
//           { q: "Can they work on proprietary data?", a: "Yes — we sign NDAs and follow your data-handling policies." },
//           { q: "Do they have research backgrounds?", a: "Many of our AI engineers hold MS/PhD from top programs." },
//           { q: "Pricing for ML talent?", a: "Senior AI engineers range $90–$160/hr or $9k–$16k/mo." },
//           { q: "Can they integrate with our stack?", a: "Comfortable across OpenAI, Anthropic, Bedrock, Vertex, and self-hosted." },
//         ]} />
//       </Section>
//       <CTABanner />
//     </main >

<section className="  w-full pt-30 md:pt-48 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25" >
  <Hero title="elight talent network" heading={<> Hire  <span className="text-gradient-purple">AI/Ml Engineers </span><br /> &
          LLM Specialist</>} des={<> Deploy production-ready artificial intelligence. From Large Language Models <br/>
to Computer Vision, we source the top 1% of technical talent to scale your <br/>
intelligent infrastructure.</>} btn1name="Shedule Technical Discovery" btn1href="/" btn2name="Browse Talent" btn2href="/" />
<div className="grid pt-10 pb-20 lg:mt-25 gap-15 lg:gap-30">


  <TechSpecialization techspecialization={techspecialization}/>
  
  <FeaturedEngineer/>
  <UseCases/>
  <FAQ/>
  <CTA title={<>Ready to scale <span className="text-gradient-purple"> your AI capabilities</span>?</>} des="Book a consultation with our technical talent directors to define your hiring
roadmap and see matched profiles within 48 hours." btn1name="Hire an AI Expert" btn1href="/" btn2name="View Pricing Plans" btn2href="/" />
</div>

</section>
  );
}


export function Hero({title,heading,des,btn1href,btn1name,btn2href,btn2name,className}){
  return(<div className={` ${className}`}>
    <div className=" ">
      <div className="inline-flex items-center gap-2 rounded-full px-3 md:px-4 py-1.5 text-[8px] md:text-[10px] md:text-xs 2xl:text-sm font-sans uppercase tracking-[0.2em] text-primary border border-primary/40 bg-primary/10 mb-5  font-semibold">
          {title}
        </div>
         <h1  className="font-display text-2xl md:text-3xl lg:text-7xl font-bold leading-[1.05]">
       {heading}
        </h1>
                <p className="mt-6  text-sm md:text-base lg:text-xl  text-[#b1afb8]  leading-relaxed font-normal">
                {des}
                </p>
               { btn1href && <div className="mt-5 md:mt-10 flex flex-wrap items-center  gap-3">
                          <PrimaryButton href={btn1href}>{btn1name}</PrimaryButton>
                          <GhostButton href={btn2href}>{btn2name}</GhostButton>
                        </div>}
    </div>
  </div>)
}

export function HeadSection({name,des,className}){
  return(<Reveal>

   <div className={` grid ${className}`}>
 
  <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.05]" >{name}</h2>
   { des && <p className="mt-2 text-foreground/75 text-xs md:text-base lg:text-xl  font-normal">{des}</p>}
  
  </div>
  </Reveal>
  
  )
}

export function TechSpecialization({techspecialization}){
  return( <div className="">
<HeadSection name="Technical Specializations" des="Deep expertise across the entire intelligence stack." />
<Reveal>

  <div className="mt-10 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 justify-center gap-5 items-stretch">
  {techspecialization?.map((tech, i) => (
    <div
    key={i}
    className="glass rounded-2xl p-5 lg:p-7 text-center hover-glow-card h-full flex flex-col justify-center items-center"
    >
      <tech.icon className="size-5 lg:size-8 w-full mx-auto text-primary mb-3" />
      <div className="mt-2 text-[11px] md:text-xs lg:text-sm text-foreground/70 font-medium">
        {tech.name}
      </div>
    </div>
  ))}
</div>
  </Reveal>
  </div>
  )
}

const EngineerCard= ({
  name,
  role,
  avatarUrl,
  description,
  tags,
  onViewVetting,
}) => {
  return (
    <div className="flex flex-col justify-between h-full glass rounded-[8px] p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-purple-950/10">
      <div>
        {/* Top Header Section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-purple-500/20 bg-purple-950/20 shrink-0">
            <Image
              src={avatarUrl}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-white tracking-tight">
              {name}
            </h3>
            <span className="text-[11px] font-bold text-primary tracking-wider uppercase mt-0.5">
              {role}
            </span>
          </div>
        </div>

        {/* Bio / Description */}
        <p className="text-sm text-white/50 leading-relaxed font-normal mb-8">
          {description}
        </p>
      </div>

      <div>
        {/* Skill Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 text-xs text-[#C4C0CC] bg-[#191720] border border-white/[0.06] rounded-[4px] hover:text-white hover:border-primary font-medium tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={onViewVetting}
          className="w-full py-3 px-4 bg-[#15131B] hover:bg-[#1C1826] border border-[#3B2C54] hover:border-primary hover:text-white text-sm font-semibold text-[#E9DFFA] rounded-[4px] tracking-wide transition-all duration-200 active:scale-[0.99] cursor-pointer"
        >
          View Technical Vetting
        </button>
      </div>
    </div>
  );
};
export function FeaturedEngineer(){
  return(<div className="">
<HeadSection name="Featured Engineers" des="Available for immediate hire. Fully vetted technical leaders with a track record of
shipping production AI models." className="     flex justify-center items-center  text-center max-w-2xl mx-auto" />
<div className="mt-10 w-full  flex items-center justify-center font-sans antialiased">
      <div className="max-w-7xl w-full mx-auto">
        {/* Responsive Grid Layout */}
        <Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 lg:gap-10 items-stretch">
          {engineersData.map((engineer, idx) => (
            <EngineerCard
            key={idx}
            {...engineer}
            onViewVetting={() =>
              console.log(`Viewing vetting for ${engineer.name}`)
            }
            />
          ))}
        </div>
          </Reveal>
      </div>
    </div>
  </div>)
}

export function UseCases(){
  return(<div>
    <HeadSection name="Use Cases We've Solved" des="Real-world AI deployment examples from our talent network."  />
        <Reveal>
    <div className=" mt-10 w-full  grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* ================= CARD 1: Enterprise AI Chatbots (Large Top Left) ================= */}
        <div className="lg:col-span-8 bg-[#111015] border border-primary/10 rounded-2xl p-7 sm:p-8 relative overflow-hidden flex flex-col justify-between group hover:border-primary transition-all duration-300">
          
          {/* Subtle Watermark Icon in background */}
          <div className="absolute -bottom-4 -right-6 opacity-50 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-primary">
            <MessageSquare className="w-37 h-37 sm:w-48 sm:h-48 stroke-[1.25]" />
          </div>

          <div className="relative z-10 max-w-xl">
            {/* Title */}
            <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight">
              Enterprise AI Chatbots
            </h3>

            {/* Description */}
            <p className="mt-3 text-xs sm:text-sm text-[#A6A0B0] leading-relaxed font-normal">
              Implemented custom LLM agents for a Fortune 500 company, reducing support ticket volume by 65% while maintaining a 98% accuracy rate using RAG architecture.
            </p>
          </div>

          {/* Action Link */}
          <div className="mt-8 sm:mt-12 relative z-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-[#C084FC] transition-colors duration-200"
            >
              <span>Read Case Study</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

       {/* ================= CARD 2: Automated Quality Control (Top Right) ================= */}
<div className="lg:col-span-4 bg-[#111015] border border-primary/10 rounded-2xl p-7 sm:p-8 flex flex-col justify-between group hover:border-primary transition-all duration-300">
  <div>
    {/* Title */}
    <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight">
      Automated Quality Control
    </h3>

    {/* Description */}
    <p className="mt-3 text-xs sm:text-sm text-[#A6A0B0] leading-relaxed font-normal">
      Real-time computer vision system for manufacturing assembly lines.
    </p>
  </div>

  {/* Progress / Metric Bar with Scroll Animation */}
  <div className="mt-8 sm:mt-10">
    <div className="w-full bg-[#1F1C28] h-2 rounded-full overflow-hidden">
      {/* 🚀 Framer Motion Progress Bar Animation */}
      <motion.div
        className="bg-primary h-full rounded-full"
        initial={{ width: "0%" }}
        whileInView={{ width: "90.4%" }}
        viewport={{ once: true, amount: 0.5 }} // screen me 50% aane pr animation start hoga aur ek hi baar chalega
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
    
    <div className="mt-3 flex justify-between items-center text-[10px] sm:text-xs font-bold text-[#A6A0B0] tracking-widest uppercase">
      <span>ACCURACY: 99.4%</span>
    </div>
  </div>
</div>

        {/* ================= CARD 3: Predictive Logistics (Bottom Left) ================= */}
        <div className="lg:col-span-4 bg-[#111015] border border-primary/10 rounded-2xl p-7 sm:p-8 relative overflow-hidden flex flex-col justify-center group hover:border-primary transition-all duration-300">
          {/* Purple Accent Bar on Left Border */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-2xl" />

          <div className="pl-2">
            {/* Title */}
            <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight">
              Predictive Logistics
            </h3>

            {/* Description */}
            <p className="mt-3 text-xs sm:text-sm text-[#A6A0B0] leading-relaxed font-normal">
              Supply chain optimization models that reduced fuel costs by 12% across a fleet of 500+ vehicles.
            </p>
          </div>
        </div>

        {/* ================= CARD 4: Generative Design Assets (Bottom Right) ================= */}
        <div className="lg:col-span-8 bg-[#111015] border border-primary/10 rounded-2xl p-7 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group hover:border-primary transition-all duration-300">
          <div className="max-w-md">
            {/* Title */}
            <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight">
              Generative Design Assets
            </h3>

            {/* Description */}
            <p className="mt-3 text-xs sm:text-sm text-[#A6A0B0] leading-relaxed font-normal">
              Custom Stable Diffusion pipelines for a major gaming studio to automate texture generation for open-world environments.
            </p>
          </div>

          {/* Abstract Wave Graphic Box */}
          <div className="relative w-full sm:w-48 h-28 sm:h-28 rounded-[4px] overflow-hidden border border-primary/10 shrink-0 bg-black/40">
            <Image
              src="/assets/case-studies/ai/img1.png"
              alt="Generative Design Assets"
              fill
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            {/* Neon overlay effect matching the artwork in the screenshot */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-transparent to-cyan-500/20 mix-blend-screen pointer-events-none" />
          </div>

        </div>
      </div>
        </Reveal>
  </div>)
}

export function FAQ(){
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (<div><HeadSection name="Frequently Asked Questions"  className=" flex justify-center items-center  text-center " />
  
  <div className="mt-10 max-w-4xl w-full mx-auto space-y-4">
        {faqData.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className={`bg-[#111015] border rounded-[6px] overflow-hidden transition-colors duration-300 ${
                isOpen
                  ? "border-primary/10"
                  : "border-primary/20 hover:border-primary"
              }`}
            >
              {/* Accordion Header / Question */}
              <button
                onClick={() => toggleFaq(item.id)}
                className="w-full text-left px-6 py-5 sm:px-7 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <span className="text-base sm:text-lg font-medium text-[#F4EFFB] tracking-tight">
                  {item.question}
                </span>

                {/* Animated Chevron Icon */}
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="shrink-0 text-primary"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              {/* Accordion Body / Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 pb-6 pt-0 sm:px-7 sm:pb-7 text-xs sm:text-sm text-[#A6A0B0] leading-relaxed font-normal max-w-3xl">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      </div>)
}
