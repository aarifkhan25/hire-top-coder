"use client"
import { Breadcrumb, ComparisonTable, CTABanner, FAQ, PageHero, ProfileCard, Section, SectionTitle } from "@/components/site/Shared";
import { useState } from "react";

const meta= [{ title: "Hire Mobile Developer — HireTopCoder" }] ;


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

export default function Page() {
  const [tab, setTab] = useState("cross");
  const set = tab === "ios" ? ios : tab === "android" ? android : cross;
  return (
    <   >
      <div className=" px-6 max-w-7xl mx-auto"><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Hire" }, { label: "Mobile Developer" }]} /></div>
      <PageHero eyebrow="Hire by Role" title={<>Hire <span className="text-primary">Mobile Developers</span></>} sub="Flutter, React Native, native iOS and Android — pick the right platform for your product." />
      <Section>
        <SectionTitle eyebrow="Compare" title="Flutter vs React Native" />
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
      </Section>
      <Section>
        <SectionTitle eyebrow="Profiles" title="By platform" />
        <div className="flex justify-center gap-2 mb-8">
          {([["cross", "Cross-platform"], ["ios", "iOS"], ["android", "Android"]] ).map(([k, l]) => (
            <button key={k} onClick={() => setTab(k)} className={`px-5 py-2 rounded-full text-sm font-medium ${tab === k ? "bg-primary text-white" : "bg-white/[0.04] text-foreground/70 hover:bg-white/[0.08]"}`}>{l}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-5">{set.map((d) => <ProfileCard key={d.name} {...d} />)}</div>
      </Section>
      <Section>
        <SectionTitle eyebrow="FAQ" title="Common questions" />
        <FAQ items={[
          { q: "Flutter or React Native?", a: "Flutter for animation-heavy and greenfield apps; React Native if your team already lives in JS/React." },
          { q: "Do you handle App Store submission?", a: "Yes — we handle store submission, screenshots, and review responses." },
          { q: "What about native modules?", a: "Our engineers write platform channels and native modules when needed." },
          { q: "Pricing?", a: "Senior mobile engineers: $70–$110/hr." },
        ]} />
      </Section>
      <CTABanner />
    </   >
  );
}
