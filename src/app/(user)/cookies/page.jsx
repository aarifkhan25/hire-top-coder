import Link from "next/link";

import { Reveal } from "@/components/site/Reveal";

  export const   metadata=
      { title: "Cookie Policy — Hire Top Coder" ,description: "Hire Top Coder cookie policy. Learn how we use cookies and how you can manage them." ,


       property:{ "og:title": "Cookie Policy — Hire Top Coder","og:description":"Learn how Hire Top Coder uses cookies and how you can manage your preferences." }}
      
    


const cookieTypes = [
  { type: "Essential", purpose: "Required for login, security, and core features", duration: "Session" },
  { type: "Analytics", purpose: "Understand traffic, page views, and user behaviour", duration: "12 months" },
  { type: "Preferences", purpose: "Remember your settings and display preferences", duration: "6 months" },
  { type: "Marketing", purpose: "Relevant ads and campaign performance (opt-in only)", duration: "3 months" },
];

const sections = [
  {
    title: "What Are Cookies",
    body: "Cookies are small text files stored on your device when you visit a website. They help us remember your preferences and understand how you use our platform.",
  },
  {
    title: "Managing Your Cookies",
    body: "You can control or disable cookies at any time through your browser settings. Note that disabling essential cookies may affect platform functionality. For marketing cookies, you can opt out at any time via your account settings.",
  },
  {
    title: "Third-Party Cookies",
    body: "We use trusted third-party services including Google Analytics and Stripe, which may set their own cookies. These are governed by their respective privacy policies.",
  },
  {
    title: "Contact",
    body: "For cookie-related questions: privacy@hiretopcoder.com",
  },
];

 export default function CookiesPage() {
  return (
   
      <div className="px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-[720px] pt-28 pb-0">
          <div className="flex items-center gap-2 text-sm text-white/40 font-medium">
            <Link href="/" className="hover:text-white/70 transition">Home</Link>
            <span>/</span>
            <span className="text-white/60">Cookie Policy</span>
          </div>
        </div>

        {/* Header */}
        <div className="mx-auto max-w-[720px] text-center pt-16 pb-[60px]">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-primary border border-primary/40 bg-primary/10 mb-6 font-semibold">
              LEGAL
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Cookie Policy
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-sm text-white/50 font-medium">
              Last updated: June 2025
            </p>
          </Reveal>
          <div className="mt-8 border-b border-white/10" />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-[720px] pb-[100px] space-y-6">
          {/* Notice Banner */}
          <Reveal>
            <div className="bg-[rgba(167,139,250,0.08)] border border-[rgba(167,139,250,0.25)] rounded-[10px] px-5 py-3.5 text-[13px] text-white/[0.6] font-medium">
              By continuing to use Hire Top Coder, you consent to our use of cookies as described below.
            </div>
          </Reveal>

          {/* Types of Cookies — with table */}
          <Reveal delay={0.05}>
            <div className="bg-[#0d0d0d] border border-white/[0.08] rounded-xl p-8">
              <h2 className="text-base font-medium text-white mb-5">
                Types of Cookies We Use
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/[0.06]">
                      <th className="text-xs font-medium text-white/80 uppercase tracking-wider px-3 py-2.5 rounded-tl-lg">Type</th>
                      <th className="text-xs font-medium text-white/80 uppercase tracking-wider px-3 py-2.5">Purpose</th>
                      <th className="text-xs font-medium text-white/80 uppercase tracking-wider px-3 py-2.5 rounded-tr-lg">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieTypes.map((row, idx) => (
                      <tr
                        key={row.type}
                        className={`border-t border-white/[0.07] ${idx === cookieTypes.length - 1 ? "last:*:rounded-bl-lg last:*:rounded-br-lg" : ""}`}
                      >
                        <td className="px-3 py-3 text-[13px] text-white font-medium">{row.type}</td>
                        <td className="px-3 py-3 text-[13px] text-white/50">{row.purpose}</td>
                        <td className="px-3 py-3 text-[13px] text-white/50">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* Remaining sections */}
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={(i + 1) * 0.05}>
              <div className="bg-[#0d0d0d] border border-white/[0.08] rounded-xl p-8">
                <h2 className="text-base font-medium text-white mb-3">
                  {s.title}
                </h2>
                <p className="text-sm text-white/50 leading-[1.8] whitespace-pre-line">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    
  );
}