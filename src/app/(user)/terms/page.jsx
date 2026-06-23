import Link from "next/link"
import { Reveal } from "@/components/site/Reveal";


  export const   metadata=  { title: "Terms of Service — Hire Top Coder" ,description: "Hire Top Coder terms of service. Read the rules and guidelines for using our platform." ,
       property: {"og:title": "Terms of Service — Hire Top Coder" ,"og:description": "Read the rules and guidelines for using the Hire Top Coder platform."
   }}
    


const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using the Hire Top Coder platform, you agree to be bound by these Terms. If you do not agree, please do not use our services.",
  },
  {
    title: "Use of the Platform",
    body: "You may use Hire Top Coder to discover and hire digital experts for legitimate business purposes. You agree not to misuse the platform, post false information, or attempt to circumvent our matching process.",
  },
  {
    title: "Expert Engagements",
    body: "Hire Top Coder facilitates connections between clients and independent experts. All project agreements are between you and the expert directly. Hire Top Coder is not a party to those agreements but provides tools to manage them.",
  },
  {
    title: "Payments & Refunds",
    body: "All payments are processed securely through our platform. Refunds are subject to the terms agreed in individual project scopes. Disputes should be raised within 7 days of project completion.",
  },
  {
    title: "Intellectual Property",
    body: "All content and work product delivered by experts through Hire Top Coder becomes your property upon full payment. Hire Top Coder platform content, branding, and code remain our intellectual property.",
  },
  {
    title: "Limitation of Liability",
    body: "Hire Top Coder is not liable for the quality of work delivered by independent experts beyond the dispute resolution process provided on the platform. Our maximum liability is limited to fees paid in the last 3 months.",
  },
  {
    title: "Termination",
    body: "We reserve the right to suspend or terminate accounts that violate these terms at our discretion without prior notice.",
  },
  {
    title: "Contact",
    body: "For legal enquiries: legal@hiretopcoder.com\nHire Top Coder Pvt. Ltd., Indore, Madhya Pradesh, India.",
  },
];

export default function TermsPage() {
  return (
   
      <div className="px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-[720px] pt-28 pb-0">
          <div className="flex items-center gap-2 text-sm text-white/40 font-medium">
            <Link href="/" className="hover:text-white/70 transition">Home</Link>
            <span>/</span>
            <span className="text-white/60">Terms of Service</span>
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
              Terms of Service
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-sm text-white/50 font-medium">
              Last updated: June 2025
            </p>
          </Reveal>
          <div className="mt-8 border-b border-white/10" />
        </div>

        {/* Content Cards */}
        <div className="mx-auto max-w-[720px] pb-[100px] space-y-6">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
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