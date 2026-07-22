"use client"
import { CTA } from "@/components/site/PageShell.jsx";
import { Reveal } from "@/components/site/Reveal.jsx";
import { ComparisonTable, ProfileCard } from "@/components/site/Shared";
import { Atom, Code2, Server } from "lucide-react";
import { useState } from "react";
import { FAQ, HeadSection, Hero } from "../ai-ml-engineer/page.jsx";




const stacks = [{name:"React Native",icon:Atom},{name:"Firebase",icon:Server},{name:"Flutter",icon:Code2}];
const ios = [
  { name: "Kenji T.", role: "Senior iOS Engineer", years: 9, tags: ["Swift", "SwiftUI", "Combine"] },
  { name: "Aisha B.", role: "iOS Developer", years: 5, tags: ["Swift", "UIKit"] },
];
const android = [
  { name: "Pavel D.", role: "Senior Android Engineer", years: 8, tags: ["Kotlin", "Jetpack Compose"] },
  { name: "Linh N.", role: "Android Developer", years: 4, tags: ["Kotlin", "Coroutines"] },
];
const cross = [
  { name: "Carlos R.", role: "Flutter Lead", years: 7, tags: ["Flutter", "Dart", "Riverpod"] },
  { name: "Hana O.", role: "React Native Engineer", years: 6, tags: ["RN", "Expo", "TypeScript"] },
];

const faqData = [
 {id:1, question: "Flutter or React Native?", answer: "Flutter for animation-heavy and greenfield apps; React Native if your team already lives in JS/React." },
          {id:2, question: "Do you handle App Store submission?", answer: "Yes — we handle store submission, screenshots, and review responses." },
          {id:3, question: "What about native modules?", answer: "Our engineers write platform channels and native modules when needed." },
          {id:4, question: "Pricing?", answer: "Senior mobile engineers: $70–$110/hr." },]

export default function MobileDeveloperPage() {
  // const [tab, setTab] = useState("cross");
  // const set = tab === "ios" ? ios : tab === "android" ? android : cross;
  // return (
  //   <main className=" w-full"    >
  //     <div className=" pt-20 md:pt-28"><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Hire" }, { label: "Mobile Developer" }]} /></div>
  //     <PageHero eyebrow="Hire by Role" title={<>Hire <span className="text-primary">Mobile Developers</span></>} sub={<>Flutter, React Native, native iOS and Android — pick the  right <br className="hidden md:block" /> platform for your product.</>} />
  //     <Section className="  ">
  //       <SectionTitle eyebrow="Compare" title="Flutter vs React Native" />
  //       <ComparisonTable
  //         headers={["Dimension", "Flutter", "React Native"]}
  //         rows={[
  //           ["Performance", "Compiled to native (fastest)", "JS bridge (very good)"],
  //           ["Time to market", "Fast for greenfield", "Fastest if you have web team"],
  //           ["Ecosystem", "Widget-rich, Google-backed", "Massive, npm-backed"],
  //           ["Cost", "Single codebase", "Single codebase"],
  //           ["Best for", "Pixel-perfect, animations", "Existing React teams"],
  //         ]}
  //       />
  //     </Section>
  //     <Section className="  ">
  //       <SectionTitle eyebrow="Profiles" title="By platform" />
  //       <div className="flex justify-center  gap-2 mt-10">
  //         {([["cross", "Cross-platform"], ["ios", "iOS"], ["android", "Android"]] ).map(([k, l]) => (
  //           <button key={k} onClick={() => setTab(k)} className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium ${tab === k ? "bg-primary text-white" : "bg-white/[0.04] text-foreground/70 hover:bg-white/[0.08]"}`}>{l}</button>
  //         ))}
  //       </div>
  //       <div className="grid md:grid-cols-3 gap-5">{set.map((d) => <ProfileCard key={d.name} {...d} />)}</div>
  //     </Section>
  //     <Section className="  ">
  //       <SectionTitle eyebrow="FAQ" title="Common questions" />
  //       <FAQ items={[
  //         { q: "Flutter or React Native?", a: "Flutter for animation-heavy and greenfield apps; React Native if your team already lives in JS/React." },
  //         { q: "Do you handle App Store submission?", a: "Yes — we handle store submission, screenshots, and review responses." },
  //         { q: "What about native modules?", a: "Our engineers write platform channels and native modules when needed." },
  //         { q: "Pricing?", a: "Senior mobile engineers: $70–$110/hr." },
  //       ]} />
  //     </Section>
  //     <CTABanner />
  //   </main >
  // );
    const [tab, setTab] = useState("cross");
  const set = tab === "ios" ? ios : tab === "android" ? android : cross;
  return(  <section className="w-full pt-30 md:pt-48 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25">
      <div className="">
  
   <Hero title="Hire by Role" heading={<> Hire <span className="text-gradient-purple">Mobile Developers</span>
            </>} des={<>Flutter, React Native, native iOS and Android — pick the  right <br className="hidden md:block" /> platform for your product.</>}  className=" flex justify-center items-center  text-center  mx-auto" />
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
      

  

  
  <div className="">
    <HeadSection title="Compare" name="Flutter vs React Native"  className=" flex justify-center items-center  text-center max-w-2xl mx-auto" />
   <Reveal>
     <ComparisonTable
          headers={["Dimension", "Flutter", "React Native"]}
          rows={[
            ["Performance", "Compiled to native (fastest)", "JS bridge (very good)"],
            ["Time to market", "Fast for greenfield", "Fastest if you have web team"],
            ["Ecosystem", "Widget-rich, Google-backed", "Massive, npm-backed"],
            ["Cost", "Single codebase", "Single codebase"],
            ["Best for", "Pixel-perfect, animations", "Existing React teams"],
          ]}
        />
    </Reveal> 
  </div>
  <div className="  ">
         <HeadSection title="Profiles" name="By platform"  className=" flex justify-center items-center  text-center max-w-2xl mx-auto" />
         <div className="flex justify-center  gap-2 mt-10">
        {([["cross", "Cross-platform"], ["ios", "iOS"], ["android", "Android"]] ).map(([k, l]) => (
             <button key={k} onClick={() => setTab(k)} className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium ${tab === k ? "bg-primary text-white" : "bg-white/[0.04] text-foreground/70 hover:bg-white/[0.08]"}`}>{l}</button>
           ))}
         </div>
         <div className="grid md:grid-cols-3 gap-5">{set.map((d) => <ProfileCard key={d.name} {...d} />)}</div>
       </div>
  <FAQ faqData={faqData} />
   <CTA title={<>Ready to get <span className="text-gradient-purple"> started</span>?</>} des="Talk to a vetted expert today and ship faster." btn1name="Talk to Expert" btn1href="/"  />
  
      </div>
    </section>)
}
