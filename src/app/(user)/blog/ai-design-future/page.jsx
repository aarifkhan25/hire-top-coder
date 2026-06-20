"use client";
import { FadeUp } from "@/components/site/FadeUp";
import { Breadcrumb, CTABanner } from "@/components/site/Shared";
// import {   } from "@/components/site/ ";
import Link from "next/link";
import { useState } from "react";
import { FaPlus as Plus } from "react-icons/fa6";
import {
  FiCalendar,
  FiClock,
  FiTag,
  FiUser
} from "react-icons/fi";
import { PiSparkleFill } from "react-icons/pi";

const headContent = {
  title: "AI Sector · Model Development · June 2025",
  heading: "The Future of AI Design Is Adaptive: How Generative Interfaces Are Reshaping Every Product Surface",
  subheading: "Generative interfaces are no longer a concept — they are the new standard for AI-powered products. Here's what adaptive AI design means, why it matters, and how your SaaS product can benefit right now.",
  catg: [
    { icon: <FiUser />, name: "HireTopCoder Team" },
    { icon: <FiCalendar />, name: "Published June 19, 2025" },
    { icon: <FiClock />, name: "8 min read" },
    { icon: <FiTag />, name: " AI Design · SaaS · Model Development" },
  ],
};

const cardsContent = [
            { n: "$47B+", l: "AI design market projected by 2030" },
            { n: "3×", l: "Faster adoption with adaptive UI" },
            { n: "+62%", l: "User retention uplift reported" },
          ];

const questionsContent={
  article:"  In This Article",
   TOC : [
  { id: "what", label: "What Is Adaptive AI Design?" },
  {
    id: "why",
    label: "Why Generative Interfaces Are Reshaping Product Surfaces",
  },
  {
    id: "role",
    label: "The Role of AI Model Development in Interface Intelligence",
  },
  { id: "metrics", label: "How Adaptive Design Improves Key SaaS Metrics" },
  {
    id: "framework",
    label: "Implementing Adaptive AI Design: A Practical Framework",
  },
  { id: "faq", label: "Frequently Asked Questions" },
]
};

const ques1Content={
  question:"What Is Adaptive AI Design?",
  answer:["Adaptive AI design refers to a new generation of product interfaces that change, personalize, and respond dynamically based on user behavior, intent signals, and the outputs of generative AI models. Unlike  traditional static UI — where every user sees the same buttons, menus, and layouts — an adaptive interface learns and evolves, making each  user's experience uniquely relevant to them."," At its core, adaptive AI design merges two disciplines: user experience  design and AI model development. The result is a product surface that  doesn't just display information — it anticipates needs, surfaces the  right actions, and restructures itself in real time to serve the user's  current goal.","  For SaaS companies and AI tool builders in 2025, this is no longer optional. As generative AI capabilities become commoditized, the produc experience layer — the interface — becomes the primary differentiator."],
card: "Generative UI is not just about generating text — it's about generating the right interface, at the right moment, for the right user."
}


const ques2Content={
  question:"Why Generative Interfaces Are Reshaping Product Surfaces",
  answer:["The shift from static to generative interfaces is being driven by three converging forces: the maturity of large language models, rising user  expectations for personalization, and the explosion of multi-modal AI applications."," Traditional UI design operates on assumptions — designers predict what users will need and build fixed paths. But real users behave unpredictably. They come from different industries, have different skill levels, and arrive at your product with wildly different goals. A static interface forces every user through the same tunnel, regardless of fit."," Generative interfaces dissolve this constraint entirely. Instead of a fixed tunnel, the product surface becomes a responsive environment — one that reads context, understands intent, and presents exactly what theuser needs in that moment."],
  heading:"Key capabilities of generative interface design:",
  FEATURES : [
  "Context-aware layouts that rearrange based on task and role",
  "AI-driven onboarding that adapts to user profile and industry",
  "Conversational navigation replacing static menus",
  "Predictive UI elements that surface before users search",
  "Real-time content generation within the interface itself",
  "Dynamic forms that simplify based on prior user answers",
]
}


const ques3Content={question:"The Role of AI Model Development in Interface Intelligence",
  answer:["Adaptive AI design is only as powerful as the model behind it. AI model development teams are now responsible not just for training accurate models, but for ensuring those models can communicate intent, uncertainty, and suggestions through the interface layer.", "This has created a new discipline: model-aware UX design. In this  approach, designers work directly with the model's output space —  understanding what the model knows, what it can infer, and how to  present model-generated content in ways that feel natural, trustworthy, and useful.","The most successful AI products in 2025 — from productivity tools to  enterprise analytics platforms — share a common trait: the interface is designed as a direct extension of the model. Every suggestion, every auto-completed field, every reordered dashboard widget is a model output expressed through design language."]}



  const ques4Content = {
    question: "How Adaptive Design Improves Key SaaS Metrics",
    answer:
      "Beyond the theoretical elegance, adaptive AI design delivers measurable results across the metrics that matter most to SaaS businesses:",
    tr: ["Metric", "Traditional UI", "Adaptive AI UI", "Impact"],
    td: [
      ["Time to first value", "4–7 days", "Under 24 hours", "High"],
      ["Feature discovery rate", "23%", "67%", "High"],
      ["Support ticket volume", "Baseline", "–38% average", "High"],
      ["30-day user retention", "Baseline", "+62% uplift", "High"],
      ["Onboarding completion rate", "34%", "71%", "Medium"],
    ],
    answer1:
      "These numbers are not accidents. They result from the fundamental alignment between what a user needs and what the interface presents. Adaptive design reduces cognitive load, eliminates irrelevant choices, and creates a sense of the product \"just working\" — which is the highest form of UX success.",
  };

  const ques5Content = {
    question: "Implementing Adaptive AI Design: A Practical Framework",
    answer:
      "For teams ready to move from static to adaptive interfaces, the journey typically follows four phases:",
    phase: [
      {
        name: "Phase 1 — Instrument your current interface",
        content:
          "Before you can adapt, you must understand how users actually navigate your product. Implement behavioral analytics, session recording, and intent signals across every surface. This data becomes the training signal for your adaptive layer.",
      },
      {
        name: "Phase 2 — Define your context model",
        content:
          "Identify the key dimensions of user context that should drive adaptation: role, industry, workflow stage, expertise level, recent actions, and stated goals. These dimensions form the input space for your adaptive system.",
      },
      {
        name: "Phase 3 — Build model-driven UI components",
        content:
          "Start with high-impact, low-risk surfaces: search results, onboarding flows, dashboard layouts, and notification systems. Replace static defaults with model-generated outputs. Test rigorously and measure against your baseline metrics.",
      },
      {
        name: "Phase 4 — Close the feedback loop",
        content:
          "Adaptive design is not a one-time build. The model must continuously learn from user interactions, implicit signals, and explicit feedback. Build pipelines that update your context model and retrain your interface intelligence layer on a regular cadence.",
      },
    ],
  };




const KEYWORDS = [
  "adaptive AI design",
  "generative UI",
  "AI model development",
  "AI product design 2025",
  "intelligent interface design",
  "AI SaaS UX",
  "generative interface",
  "AI-driven product surface",
  "conversational UI trends",
  "future of AI interfaces",
  "context-aware UI",
  "AI onboarding design",
];



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
  question:" Conclusion: Design Is Now a Model Problem",
  answer:["The future of AI design is not about more buttons, better color palettes, or smoother animations. It is about interfaces that think —  that understand who is using them, what they are trying to accomplish, and how to help them get there faster and more confidently than any static design ever could.","Adaptive AI design and generative interfaces represent the next  fundamental shift in how software is experienced. For teams building  AI-powered products, the question is no longer whether to adopt adaptive  design — it is how quickly and how intelligently you can make the transition.","The products that win the next decade will not be the ones with the most powerful models. They will be the ones where the model and the interface become indistinguishable — where the design itself is intelligent."]
}

const authercontent={
  word:"HT",heading:"HireTopCoder Team",subheading:" We write about AI model development, product design, and the future of intelligent software.",href:"/blog"
}

const meta1 = [
  {
    title:
      "The Future of AI Design Is Adaptive | Generative UI & AI Model Development 2025",
  },
  {
    name: "description",
    content:
      "Discover how adaptive AI design and generative interfaces are reshaping every product surface in 2025. Learn the key strategies for AI model development, intelligent UI, and SaaS product design.",
  },
  {
    name: "keywords",
    content:
      "adaptive AI design, generative UI, AI model development, intelligent interface design, AI SaaS UX, conversational UI, AI product design 2025, future of AI interfaces, generative interface, AI-driven product surface",
  },
  { name: "author", content: "HireTopCoder" },
  { name: "robots", content: "index, follow" },
  { property: "og:type", content: "article" },
  {
    property: "og:title",
    content: "The Future of AI Design Is Adaptive | Generative Interfaces 2025",
  },
  {
    property: "og:description",
    content:
      "How generative interfaces are reshaping every product surface — from dashboards to chat, onboarding to analytics.",
  },
  { property: "og:site_name", content: "HireTopCoder" },
  { property: "og:url", content: "/blog/adaptive-ai-design-future" },
  { property: "article:published_time", content: "2025-06-19T00:00:00Z" },
  { property: "article:section", content: "AI & Technology" },
  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "The Future of AI Design Is Adaptive | Generative Interfaces 2025",
  },
  {
    name: "twitter:description",
    content:
      "How generative interfaces are reshaping every product surface — from dashboards to chat, onboarding to analytics.",
  },
];
const meta2 = [{ rel: "canonical", href: "/blog/adaptive-ai-design-future" }];
const meta3 = [
  {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline:
        "The Future of AI Design Is Adaptive: How Generative Interfaces Are Reshaping Every Product Surface",
      description:
        "How adaptive AI design and generative interfaces are reshaping every product surface in 2025.",
      author: { "@type": "Organization", name: "HireTopCoder" },
      publisher: { "@type": "Organization", name: "HireTopCoder" },
      datePublished: "2025-06-19",
      wordCount: 1550,
    }),
  },
  {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: ques6faqcontent.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    }),
  },
  {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Adaptive AI Design",
          item: "/blog/adaptive-ai-design-future",
        },
      ],
    }),
  },
];

export default function BlogPost() {
  return (
    <>
      <article className="mx-auto pt-30 max-w-[760px] px-5 pt-14 pb-20">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "Blog" },
            { label: "Adaptive AI Design" },
          ]}
        />
        <HeroHead headContent={headContent} />

        {/* Stats */}
        <Cards cardsContent={cardsContent} />

        {/* TOC (Table of Contents) */}
        <Questions questionsContent={questionsContent} />

        {/* BODY */}
        {/* questions*/}
        <Question1 ques1Content={ques1Content} />

        <Question2 ques2Content={ques2Content}/>
        <Question3 ques3Content={ques3Content}/>
        <Question4 ques4Content={ques4Content}/>
        <Question5 ques5Content={ques5Content}/>

        {/* Keyword pills */}
        <Keywords KEYWORDS={KEYWORDS} />

        {/* FAQ */}
        <Question6FAQ ques6faqcontent={ques6faqcontent} />

        {/* Conclusion */}
        <Conclusion conclusioncontent={conclusioncontent} />

        {/* CTA Box */}
        <FadeUp>
          <CTABanner
            title="Ready to Build Adaptive AI Experiences?"
            sub="Talk to our team about integrating intelligent, generative UI into your product today."
            ctaLabel="Get in Touch"
            to="/contact"
          />
        </FadeUp>
        {/* Author Card */}
        <ArticleAuthorCard authercontent={authercontent} />
      </article>
    </>
  );
}

export function ImpactPill({ value }) {
  const isHigh = value === "High" || value?.startsWith("+");
  
  return (
    <span
      className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold tracking-[0.5px] uppercase ${
        isHigh 
          ? "bg-green-500/12 text-[#4ade80]" 
          : "bg-amber-500/12 text-[#fbbf24]"
      }`}
    >
      {value}
    </span>
  );
}

export const HeroHead = ({ headContent }) => {
  return (
    <>
      {/* Header */}
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

      {/* Meta row */}
      <div className="flex flex-wrap gap-[18px] border-t border-b border-white/5 py-4 my-7 text-[12px] text-white/35">
      {headContent?.catg.map((c,i)=>(<span  key={i} className="inline-flex items-center gap-1.5 group">
          <span  className=" text-primary text-base 2xl:text-xl">{c.icon}</span>
          <span className="font-medium text-white/65 group-hover:text-white">{c.name}</span>
        </span>
      ))

      }
        
      </div>
    </>
  );
};
export const Cards = ({cardsContent}) => {
  return (
    <>
      <FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[14px] mb-10">
          {cardsContent?.map((s) => (
            <div
              key={s.n}
              className="text-center bg-gradient-to-t from-black/80 to-transparent border group border-[oklch(0.62_0.26_305/0.15)] hover-glow-card rounded-text-xs rounded-xl px-4 py-5"
            >
              <div className="text-[26px] 2xl:text-4xl font-semibold  text-primary tracking-[-0.5px]">
                {s.n}
              </div>
              <div className="text-[11px] 2xl:text-base text-white/40 mt-3 font-semibold group-hover:text-white leading-normal">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </FadeUp>
    </>
  );
};
export const Questions = ({questionsContent}) => {
  return (
    <FadeUp>
      <div className="bg-gradient-to-t from-black/80 to-transparent border border-[oklch(0.62_0.26_305/0.15)] hover-glow-card  rounded-xl px-5.5 py-5 mb-8">
        <div className="text-[11px] lg:text-sm 2xl:text-base uppercase text-white tracking-[1.5px] font-bold">
          {questionsContent?.article}

        </div>
        <ul className="mt-3 flex flex-col gap-2">
          {questionsContent?.TOC.map((t) => (
            <li key={t.id}>
              <a
                href={`#${t.id}`}
                className="text-[13px] 2xl:text-sm text-white/50 font-semibold hover:text-primary transition-colors"
              >
                {t.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </FadeUp>
  );
};
export const Question1 = ({ques1Content}) => {
  return (
    <>
      {" "}
      <FadeUp>
        <h2
          id="what"
          className="text-xl 2xl:text-2xl font-semibold text-white tracking-tight mt-9 mb-4"
        >
        {ques1Content?.question}
        </h2>
      </FadeUp>
       {
ques1Content?.answer.map((a, i) => (
        <p key={i} className="text-[15px] text-white/70 leading-[1.75] mb-5">
          {a}
        </p>
      ))}
     
      {/* Blockquote / Callout */}
      <div className={`${ques1Content?.role==="hide"?"hidden":"block"} bg-[#a78bfa]/5 border-l-3 border-primary rounded-r-xl px-5.5 py-4.5 my-7 text-[15px] italic font-medium text-white/75 leading-[1.7]`}>
       {ques1Content?.card} 
      </div>
    </>
  );
};
export const Question2 = ({ques2Content}) => {
  return (
    <>
      {" "}
      <FadeUp>
        <h2
          id="why"
          className="text-xl 2xl:text-2xl font-semibold text-white tracking-tight mt-12 pt-6 border-t border-white/5 mb-4"
        >
          {ques2Content?.question}
        </h2>
      </FadeUp>
      {
ques2Content?.answer.map((a, i) => (
        <p key={i} className="text-[15px] text-white/70 leading-[1.75] mb-5">
          {a}
        </p>
      ))}
    
      <h3 className="text-base font-semibold text-white/90 mt-7 mb-3">
       {ques2Content?.heading}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3 mb-8">
        { ques2Content?.FEATURES.map((f) => (
          <div
            key={f}
            className="flex gap-3 justify-center items-center bg-[#0d0d0d]  group border border-primary/30 rounded-[9px] px-3.5 py-3.5   "
          >
            <div className=" text-primary  w-7 h-7">
              <PiSparkleFill className="  w-7 h-7" />
            </div>
            <div className="text-[13.5px] 2xl:text-base text-white/50 group-hover:text-white ">
              {" "}
              {f}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export const Question3 = ({ques3Content}) => {
  return (
    <>
      {" "}
      <FadeUp>
        <h2
          id="role"
          className="text-xl 2xl:text-2xl font-semibold text-white tracking-tight mt-12 pt-6 border-t border-white/5 mb-4"
        >
          {ques3Content?.question}
        </h2>
      </FadeUp>
      {
ques3Content?.answer.map((a, i) => (
        <p key={i} className="text-[15px] text-white/70 leading-[1.75] mb-5">
          {a}
        </p>
      ))}
     
    </>
  );
};
export const Question4 = ({ques4Content}) => {
  return (
    <>
      {" "}
      <FadeUp>
        <h2
          id="metrics"
          className="text-xl 2xl:text-2xl font-semibold text-white tracking-tight mt-12 pt-6 border-t border-white/5 mb-4"
        >
          {ques4Content?.question}
        </h2>
      </FadeUp>
      <p className="text-[15px] text-white/70 leading-[1.75] mb-4">
       {ques4Content?.answer}
      </p>
      {/* Table Section */}
      <div className="overflow-x-auto   my-6">
        <table className="w-full border-collapse min-w-[560px]">
          <thead>
            <tr className="bg-[#141418] text-base 2xl:text-lg border-b border-primary">
              {ques4Content?.tr.map(
                (h) => (
                  <th
                    key={h}
                    className="px-4 py-[11px]  text-primary text-[11px] uppercase font-bold text-left tracking-wider"
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {ques4Content?.td.map((row, i) => (
              <tr
                key={row[0]}
                className={`border-b border-white/5 last:border-b-0 group hover:bg-[#141418] ${
                  i % 2 === 1 ? "bg-white/[0.015]" : "bg-transparent"
                }`}
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="px-4 py-[11px] text-[13px] font-semibold group-hover:text-white text-white/55"
                  >
                    {j === 3 ? <ImpactPill value={cell} /> : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={`${ques4Content?.role ==="hide"?"hidden":"block"} text-[15px] text-white/70 leading-[1.75] mb-8`}>
       {ques4Content?.answer1}
      </p>
    </>
  );
};
export const Question5 = ({ques5Content}) => {
  return (
    <>
      {" "}
      <FadeUp>
        <h2
          id="framework"
          className="text-xl  2xl:text-2xl font-semibold text-white tracking-tight mt-12 pt-6 border-t border-white/5 mb-4"
        >
          {ques5Content?.question}
        </h2>
      </FadeUp>
      <p className="text-[15px] text-white/70 leading-[1.75] mb-5">
        {ques5Content?.answer}
      </p>
      {ques5Content?.phase.map((curE, i) => (
        <div key={i}>
          <h3 className="text-base font-semibold text-white/90 mt-6 mb-2">
            {curE.name}
          </h3>
          <p className="text-[15px] text-white/70 leading-[1.75] mb-5">
            {curE.content}
          </p>
        </div>
      ))}
    </>
  );
};

export const Keywords = ({KEYWORDS}) => {
  return (
    <>
      {" "}
      <h2 className="text-xl 2xl:text-2xl font-semibold text-white tracking-tight mt-12 pt-6 border-t border-white/5 mb-3">
        Target Keywords for This Article
      </h2>
      <div className="flex flex-wrap gap-2 mt-3.5 mb-7">
        {KEYWORDS.map((k) => (
          <span
            key={k}
            className="border border-white/10  bg-primary/10 transition-colors hover:border-primary text-primary  hover:text-[#F0EDFF] text-[12px] 2xl:text-sm font-semibold px-3.5 py-1.5 rounded-full"
          >
            {k}
          </span>
        ))}
      </div>
    </>
  );
};
export const Question6FAQ = ({ques6faqcontent}) => {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <>
      {" "}
      <h2
        id="faq"
        className="text-xl 2xl:text-2xl font-semibold text-white tracking-tight mt-12 pt-6 border-t border-white/5 mb-4"
      >
       Frequently Asked Questions</h2>
      <div className="mt-4 mb-8">
        {ques6faqcontent?.map((f, i) => {
          const isOpen = openFaq === i;
          return (
            <FadeUp key={f.q} delay={i * 0.06}>
              <div className="bg-[#0d0d0d] border border-white/5 rounded-sm mb-2.5 overflow-hidden">
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
    </>
  );
};
export const Conclusion = ({conclusioncontent}) => {
  return (
    <>
      {" "}
      <h2 className="text-xl 2xl:text-2xl font-semibold text-white tracking-tight mt-12 pt-6 border-t border-white/5 mb-4">
       {conclusioncontent?.question}
      </h2>
       {
conclusioncontent?.answer.map((a, i) => (
        <p key={i} className="text-[15px] text-white/70 leading-[1.75] mb-5">
          {a}
        </p>
      ))}
    
    </>
  );
};

export const ArticleAuthorCard = ({authercontent}) => {
  return (
    <>
      {" "}
      <FadeUp>
        <div className="flex items-center gap-3.5 bg-[#0d0d0d] border border-primary rounded-xl p-5">
          <div className="grid place-items-center shrink-0 w-12 h-12 2xl:w-15 2xl:h-15 border border-primary rounded-full bg-[#a78bfa]/15  text-primary font-semibold text-[14px] 2xl:text-lg">
            {authercontent?.word}
          </div>

          <div className=" grid min-w-0">
            <div className="text-[14px] 2xl:text-xl text-white font-medium">
              {authercontent?.heading}
            </div>
            <div className="text-[12.5px] 2xl:text-base text-white/40 mt-0.5 font-semibold leading-[1.55]">
             {authercontent?.subheading}
            </div>
            <div>
              <Link
                href={authercontent?.href}
                className=" text-xs 2xl:text-sm font-semibold text-primary hover:underline"
              >
                Read more articles →
              </Link>
            </div>
          </div>
        </div>
      </FadeUp>
    </>
  );
};
