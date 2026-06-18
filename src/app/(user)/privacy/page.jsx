import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";



    const meta= [
      { title: "Privacy Policy — Hire Top Coder" },
      { name: "description", content: "Hire Top Coder privacy policy. Learn how we collect, use, and protect your personal data." },
      { property: "og:title", content: "Privacy Policy — Hire Top Coder" },
      { property: "og:description", content: "Learn how Hire Top Coder collects, uses, and protects your personal data." },
    ];
  

const sections = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly to us, including when you create an account, submit a project brief, or contact us. This includes name, email address, company name, payment information, and communications. We also collect usage data, device information, and cookies automatically when you use our platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to match you with the right experts, process payments, send service-related communications, improve our platform, and comply with legal obligations. We do not sell your personal data to third parties.",
  },
  {
    title: "Sharing Your Information",
    body: "We share your information only with vetted experts you choose to engage, payment processors, and service providers who help us operate the platform. All third parties are bound by confidentiality agreements.",
  },
  {
    title: "Cookies & Tracking",
    body: "We use cookies to remember your preferences, analyse site traffic, and improve your experience. You can control cookie settings through your browser or our cookie preference centre.",
  },
  {
    title: "Your Rights",
    body: "You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at privacy@Hire Top Coder.com.",
  },
  {
    title: "Contact Us",
    body: "For privacy-related questions: privacy@hiretopcoder.com\nHire Top Coder Pvt. Ltd., Indore, Madhya Pradesh, India.",
  },
];

export default function PrivacyPage() {
  return (

      <div className="px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-[720px] pt-28 pb-0">
          <div className="flex items-center gap-2 text-sm text-white/40 font-medium">
            <Link href="/" className="hover:text-white/70 transition">Home</Link>
            <span>/</span>
            <span className="text-white/60">Privacy Policy</span>
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
              Privacy Policy
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