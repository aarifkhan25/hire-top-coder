"use client";
import { FadeUp } from "@/components/site/FadeUp";
import { animate } from "framer-motion";
import {
  BarChart4,
  Brain,
  CheckCircle2,
  Hexagon,
  Info,
  Layers2,
  MessagesSquare, Sparkles,
  Zap
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaPlus as Plus } from "react-icons/fa6";
import {
  FiCalendar,
  FiClock
} from "react-icons/fi";

const headContent = {
  title: "AI Sector · Model Development · June 2025",
  heading: <>The Future of AI Design Is <span className="text-gradient-purple">Adaptive</span> : How Generative Interfaces Are Reshaping Every Product Surface</>,
  subheading: "Generative interfaces are no longer a concept — they are the new standard for AI-powered products. Here's what adaptive AI design means, why it matters, and how your SaaS product can benefit right now.",
  catg: [
    // { icon: <FiUser />, name: "HireTopCoder Team" },
    { icon: <FiCalendar />, name: "Published June 19, 2025" },
    { icon: <FiClock />, name: "8 min read" },
    // { icon: <FiTag />, name: " AI Design · SaaS · Model Development" },
  ],
};

const cardsContent = [
            { n: "$47B+", l: "AI design market projected by 2030" },
            { n: "3×", l: "Faster adoption with adaptive UI" },
            { n: "+62%", l: "User retention uplift reported" },
          ];
          const tocItems = [
    { name: "Introduction", icon: Info },
    { name: "Why It Matters", icon: BarChart4 },
    { name: "Business Benefits", icon: Hexagon },
    { name: "Getting Started", icon: Zap },
    { name: "Conclusion", icon: CheckCircle2 },
  ];


const ques1Content={
  question:"What Is Adaptive AI Design?",
  answer:["Adaptive AI design refers to a new generation of product interfaces that change, personalize, and respond dynamically based on user behavior, intent signals, and the outputs of generative AI models. Unlike  traditional static UI — where every user sees the same buttons, menus, and layouts — an adaptive interface learns and evolves, making each  user's experience uniquely relevant to them."," At its core, adaptive AI design merges two disciplines: user experience  design and AI model development. The result is a product surface that  doesn't just display information — it anticipates needs, surfaces the  right actions, and restructures itself in real time to serve the user's  current goal.","  For SaaS companies and AI tool builders in 2025, this is no longer optional. As generative AI capabilities become commoditized, the produc experience layer — the interface — becomes the primary differentiator."],
card: "Generative UI is not just about generating text — it's about generating the right interface, at the right moment, for the right user."
}


const ques2Content={
  question:"Why  Generative Interfaces Matter",
 
  FEATURES : [
    {

     name:"Context-aware layouts",des: "Context-aware layouts that rearrange based on task and role",icon:Layers2
  },
   {

    name:"AI-driven onboarding",des: "AI-driven onboarding that adapts to user profile and industry",icon:Brain
  },
   {

    name:"Conversational Navigation",des: "Conversational navigation replacing static menus",icon:MessagesSquare
  },
   {
    name:"Predictive UI",des: "Predictive UI elements that surface before users search",icon:Sparkles

  },

]
}




  const ques4Content = {
    question: "Business Benefits",
    tr: ["Object", "Metric Improment"],
    td: [
      ["Faster onboarding", "Up to 3x faster"],
      ["Feature discovery","67% increase"],
      ["Support tickets", "38% fewer"],
      ["User retention", "62% higher" ],
   
    ],
  };
const getting=[{id:"1",name:"Track behavior",des:"Implement telemetry to understand user intent sequences and common friction points in current static layouts."},{id:"2",name:"Build profiles",des:"Define personas based on technical proficiency and frequency of use rather than just demographic data."},{id:"3",name:"Introduce dashoboards",des:"Launch modular, widget-based views that users can personalize before the AI begins automated optimization."},{id:"4",name:"Continuosly optimize",des:`Use A/B testing specifically for AI-generated layouts to ensure the "adaptive" nature doesn't cause confusion.`},]

const ques6faqcontent = [
  {
    q: "What is adaptive AI design?",
    a: "Adaptive AI design refers to product interfaces that dynamically personalize and restructure themselves based on user behavior, intent signals, and generative model outputs — creating unique, context-aware experiences for each user rather than presenting everyone with the same static layout.",
  },
  {
    q: "How does generative UI differ from traditional UI?",
    a: "Traditional UI is static — the same layout is presented to every user. Generative UI, powered by AI models, creates and adapts interface components in real time, tailoring the experience to individual needs, workflows, and contexts. The interface becomes a living system rather than a fixed design artifact.",
  },
  {
    q: "Why is adaptive design important for AI model development?",
    a: "AI models are only as effective as the interfaces through which users interact with them. Adaptive design ensures the full capability of the model is accessible, discoverable, and personalized — dramatically improving usability, adoption, and long-term retention.",
  },
  {
    q: "What are the key benefits of generative interfaces for SaaS?",
    a: "Generative interfaces for SaaS products deliver faster onboarding, higher user retention, reduced support load, and stronger product-market fit by presenting users with exactly the features, actions, and information they need — exactly when they need them. Companies typically see 2–3× improvement in feature discovery and 40–60% improvement in 30-day retention.",
  },
  {
    q: "Which industries benefit most from adaptive AI design?",
    a: "SaaS platforms, healthcare technology, fintech, e-commerce, and enterprise software all see significant gains from adaptive AI design — particularly in reducing time-to-value and improving user engagement across complex, multi-step workflows.",
  },
]

const conclusioncontent={
  question:" Conclusion",
  answer:["The future of AI design is not about more buttons, better color palettes, or smoother animations. It is about interfaces that think —  that understand who is using them, what they are trying to accomplish, and how to help them get there faster and more confidently than any static design ever could.","Adaptive AI design and generative interfaces represent the next  fundamental shift in how software is experienced. For teams building  AI-powered products, the question is no longer whether to adopt adaptive  design — it is how quickly and how intelligently you can make the transition.","The products that win the next decade will not be the ones with the most powerful models. They will be the ones where the model and the interface become indistinguishable — where the design itself is intelligent."]
}



export default function AiDesignBlog() {
  return(<section className="px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 pt-20 md:pt-40 2xl:pt-50 pb-20 px-4">
  <Hero headContent={headContent}/>
<Main cardsContent={cardsContent} tocItems={tocItems} ques1Content={ques1Content}/>
    <div className=" grid gap-10 max-w-4xl">
<Question2 ques2Content={ques2Content}   />
<Question4 ques4Content={ques4Content} />
<Getting getting={getting} />
<Question6FAQ ques6faqcontent={ques6faqcontent}  />
 <Conclusion conclusioncontent={conclusioncontent}  />
    </div>
  </section>
  )
}

export function Hero({headContent}){
  return(<><div className="max-w-2xl">
   <FadeUp>
          <p className="text-[11px] 2xl:text-sm font-bold uppercase tracking-[1.5px]  text-primary">
            {headContent.title}
          </p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h1 className="text-[clamp(26px,4.5vw,34px)] 2xl:text-[clamp(28px,5vw,36px)] font-medium leading-tight text-white tracking-[-1px] mt-3.5">
            {headContent.heading}
          </h1>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-base text-white/50 leading-[1.7] mt-[18px]">
            {headContent.subheading}
          </p>
        </FadeUp>
  
  </div>
  <div className="flex items-center gap-5 border-y border-white/50 py-5 mt-5">
    <div className="flex gap-5">
       <div className="w-8 h-8 xl:w-10 xl:h-10 flex justify-center items-center shrink-0 border border-white/10 rounded-sm xl:rounded-md bg-primary/10 transition-colors hover:border-primary" >

                                          <span className="text-lg xl:text-2xl text-primary">H</span>
                                          </div>  
                                          <div className="">
                                            <h1 className="text-white text-sm xl:text-base">HireTopCoder Team</h1>
                                            <p className="text-white/50 text-xs xl:text-sm"> Strategic Insights Group</p>
                                          </div>
    </div>
    <div className=" flex gap-10">
      {headContent?.catg.map((c,i)=>(<span  key={i} className="inline-flex items-center gap-1.5 group">
          <span  className=" text-primary text-lg 2xl:text-2xl">{c.icon}</span>
          <span className="font-medium text-white/65 group-hover:text-white text-xs xl:text-sm">{c.name}</span>
        </span>
      ))
      
    }
  </div>
  </div>
  </>)
}




    export function Main({cardsContent,tocItems,ques1Content}){
      const [activeSection, setActiveSection] = useState("Introduction");
  const [email, setEmail] = useState("");
 const handleScroll = (sectionName) => {
    setActiveSection(sectionName);
    
    const targetId = sectionName.toLowerCase().replace(/\s+/g, "-");
    const element = document.getElementById(targetId);
    
    if (element) {
      // एलिमेंट की स्क्रीन पर सटीक पोजीशन पता करें
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      
      
      const navbarOffset = 120; 
      const targetScrollY = elementPosition - navbarOffset;

      
      animate(window.scrollY, targetScrollY, {
        type: "spring",
        stiffness: 50,   
        damping: 15,     
        mass: 0.8,
        onUpdate: (latest) => window.scrollTo(0, latest)       });
    }
  };
      return(<><div className="min-h-screen bg-[#07050a] text-[#938f99] font-sans antialiased selection:bg-[#a855f7]/30 selection:text-white">
      <div className="w-full px-4 py-8  grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* LEFT COLUMN: Image, Metrics, Content */}
        <div className="lg:col-span-2 flex flex-col gap-6 w-full">
          
          {/* Main 3D Tech Showcase Graphic Frame */}
          <div className="relative w-full aspect-[16/10] rounded-xl border border-white/[0.06] bg-[#120e16] overflow-hidden shadow-2xl shadow-purple-950/20">
            {/* 
              Placeholder matching dark purple matrix structure seen in visual grid.
              In production, replace with your local high-fidelity 3D layer compilation asset.
            */}
            <div className="absolute inset-0 bg-primary/10 z-10 pointer-events-none" />
            <div className="w-full h-full relative flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-cover bg-center opacity-80" />
              {/* Fallback structural content mockup layer */}
              <Image width="500" height="500" src="/assets/blog-1.png" alt="img" loading="lazy" className="w-full h-full rounded-lg bg-black/40 backdrop-blur-xs border border-white/5   "/>
   
            
            </div>
          </div>

          {/* Core Analytics Cards Block */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
           {cardsContent?.map((s) => (
            <div
              key={s.n}
              className="text-center bg-gradient-to-t from-black/80 to-transparent border group border-[oklch(0.62_0.26_305/0.15)] hover-glow-card rounded-text-xs rounded-sm p-10"
            >
              <div className="text-3xl 2xl:text-5xl font-semibold  text-primary tracking-[-0.5px]">
                {s.n}
              </div>
              <div className="text-xs 2xl:text-base text-white/40 mt-3 font-semibold group-hover:text-white leading-normal">
                {s.l}
              </div>
            </div>
          ))}
          </div>

          {/* Typography Article Text Content Layout */}
          <div id="introduction"  className="mt-2 flex flex-col gap-4 scroll-mt-32">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f4effa] font-sans">
  {ques1Content.question}
            </h1>

           {ques1Content.answer.map((ans,i)=>{
            return(
 <p key={i} className="text-sm sm:text-base text-[#a6a0b0] leading-relaxed font-normal">
            {ans}
            </p>
            )
           }) 
           
            }
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar Widgets (TOC, Bio, Subscription) */}
        <div className="flex flex-col gap-6 w-full lg:sticky lg:top-8">
          
          {/* Box 1: Table of Contents */}
          <div className="bg-primary/10 border border-white/[0.05] rounded-xl p-5 flex flex-col gap-4">
            <div>
              <h2 className="text-xl font-semibold text-white tracking-wide">
                Table of Contents
              </h2>
              <p className="text-[10px] font-bold tracking-widest text-white/50 uppercase mt-0.5">
                ARTICLE SECTIONS
              </p>
            </div>

            <nav className="flex flex-col gap-1">
              {tocItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.name;
                return (
                  <button
                    key={index}
         onClick={() => handleScroll(item.name)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-sm text-sm font-medium transition-all text-left group
                      ${isActive 
                        ? "bg-[#251f30] text-primary" 
                        : "text-[#a6a1b0] hover:bg-primary/50 hover:text-[#e4daf5]"
                      }`}
                  >
                    <IconComponent className={`w-4 h-4 shrink-0 transition-colors ${isActive ? "text-primary" : "text-[#7b7587] group-hover:text-purple-400"}`} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </nav>

            <button className="w-full mt-2 py-2.5 px-4 bg-primary border border-ring/30 hover:border-ring text-xs xl:text-sm cursor-pointer font-semibold text-white rounded-sm tracking-wide hover:bg-accent active:scale-[0.99] transition-all">
              Subscribe to Newsletter
            </button>
          </div>

          {/* Box 2: Author Bio Card */}
          <div className="bg-primary/10 border border-white/[0.05] rounded-xl p-5 flex flex-col gap-3">
            <span className="text-xs font-semibold text-white">
              Written by
            </span>
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-purple-950 border border-purple-500/20 shadow-inner shrink-0">
              
                <Image 
                  src="/assets/blog-1.png" 
                  alt="Alex Rivera"
                  fill
                  className="object-cover opacity-90  transition-all"
                  onError={(e) => {
                    // Fallback to stylized box safely if profile picture asset isn't mounted
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm font-semibold text-white leading-tight">
                  Alex Rivera
                </h4>
                <p className="text-xs text-white/50 font-medium mt-0.5">
                  Lead Product Designer
                </p>
              </div>
            </div>
          </div>

          {/* Box 3: Stay Informed Lead Gen Form */}
          <div className="bg-primary/10 border border-white/[0.05] rounded-xl p-5 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold text-white tracking-tight">
                Stay Informed
              </h3>
              <p className="text-xs text-white/50 leading-relaxed font-medium">
                Get the latest technical insights delivered weekly to your inbox.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2.5">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black border border-white/[0.08] focus:border-[#b487fc]/50 rounded-sm px-3.5 py-2.5 text-xs text-white placeholder-[#5d5866] focus:outline-hidden transition-all shadow-inner"
                required
              />
              <button 
                 className="w-full mt-2 py-2.5 px-4 bg-primary border border-ring/30 hover:border-ring text-xs xl:text-sm cursor-pointer font-semibold text-white rounded-sm tracking-wide hover:bg-accent active:scale-[0.99] transition-all">
              
                Subscribe Now
              </button>
            </form>
          </div>

        </div>

      </div>
    </div></>)
    }

    export function Question2({ques2Content}){
      return(<div id="why-it-matters"className="scroll-mt-32">
        <FadeUp>
                <h2
                  id="why"
                  className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-12 pt-6 border-t border-white/5 mb-5"
                >
                  {ques2Content?.question}
                </h2>
              </FadeUp>
              <FadeUp>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      { ques2Content?.FEATURES.map((f,i) => (
                        <div
                        key={i}
                          className="flex gap-3  items-center bg-[#0d0d0d]  group border border-primary/30 rounded-[9px] px-3.5 py-3.5   "
                        >
                          <f.icon className=" text-primary  w-7 h-7"/>
                          
                          <div className="flex flex-col gap-1  text-white/50 group-hover:text-white ">
                            <span  className="text-sm  2xl:text-lg text-white ">{f.name}</span>
                            <span className="text-xs  2xl:text-base">{f.des}</span>
                            
                          </div>
                        </div>
                      ))}
                    </div>
                        </FadeUp>
      </div>)
    }   
    export const Question4 = ({ques4Content}) => {
      return (
        <div id="business-benefits" className="scroll-mt-32">
          
          <FadeUp>
            <h2
              id="metrics"
              className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-12 pt-6 border-t border-white/5 mb-4"
            >
              {ques4Content?.question}
            </h2>
          </FadeUp>
       
          {/* Table Section */}
        <div className="overflow-x-auto rounded-[8px] my-6 border border-white/50">
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-[#141418] text-base 2xl:text-lg border-b border-white/50">
        {ques4Content?.tr.map((h) => (
          <th
            key={h}
            
            className="px-4 py-[11px] text-primary text-[11px] xl:text-sm font-bold text-center tracking-wider  last:border-r-0"
          >
            {h}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {ques4Content?.td.map((row, i) => (
        <tr
          key={i}
          className="border-b border-white/50 last:border-b-0 group hover:bg-[#141418]"
        >
          {row.map((cell, j) => (
            <td
              key={j}
            
              className="px-4 py-[11px] text-[13px] font-semibold group-hover:text-white text-white/90 text-center border-r border-white/5 last:border-r-0"
            >
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>
        </div>
      );
    };


    export const Getting=({getting})=>{
     return(<div id="getting-started" className="scroll-mt-32">
        <FadeUp>
                <h2
                  id="why"
                  className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-12 pt-6 border-t border-white/5 mb-4">
                  Getting Started
                </h2>
              </FadeUp>
              <FadeUp>
              <div className="grid  gap-5 mt-5 ">
                      { getting?.map((g) => (
                        <div
                        key={g.id}
                          className="flex gap-3  items-center   "
                        >
                       <div className="w-10 h-10 xl:w-12 xl:h-12 flex justify-center items-center shrink-0 border border-white/10 rounded-sm xl:rounded-md bg-primary/10 transition-colors group-hover:border-primary" >

                                          <span className="text-lg xl:text-2xl text-primary"> {g.id}</span>
                                          </div>  
                          
                          <div className="flex flex-col gap-1  text-white/50 group-hover:text-white ">
                            <span  className="text-base  2xl:text-xl text-white ">{g.name}</span>
                            <span className="text-sm  2xl:text-lg">{g.des}</span>
                            
                          </div>
                        </div>
                      ))}
                    </div>
                        </FadeUp>
      </div>)
    }
    export const Question6FAQ = ({ques6faqcontent}) => {
      const [openFaq, setOpenFaq] = useState(0);
      return (
        <div>
          {" "}
          <h2
            id="faq"
            className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-12 pt-6 border-t border-white/5 mb-7"
          >
           Frequently Asked Questions</h2>
          <div className="">
            {ques6faqcontent?.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <FadeUp key={f.q} delay={i * 0.06}>
                  <div className="bg-[#0d0d0d] border border-[oklch(0.62_0.26_305/0.15)] rounded-sm mb-2.5 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : i)}
                      className="w-full flex justify-between items-center text-left px-4.5 py-4 font-medium text-white text-[14.5px] cursor-pointer"
                    >
                      <span>{f.q}</span>
                      <Plus
                        size={18}
                        className={` text-primary shrink-0 ml-3 transition-transform duration-250 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4.5 pb-4 text-[13.5px] text-white/70 leading-[1.75]">
                        {f.a}
                      </div>
                    )}
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      );
    };



    export const Conclusion = ({conclusioncontent}) => {
  return (
    <div id="conclusion"  className="bg-[#0d0d0d] border border-[oklch(0.62_0.26_305/0.15)] rounded-sm p-10 scroll-mt-32">
      
      <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4">
       {conclusioncontent?.question}
      </h2>
       {
conclusioncontent?.answer.map((a, i) => (
        <p key={i} className="text-[15px] text-white/70 leading-[1.75] mb-5">
          {a}
        </p>
      ))}
    
    </div>
  );
};