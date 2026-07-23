import { CTA } from "@/components/site/PageShell.jsx";
import { Reveal } from "@/components/site/Reveal.jsx";
import { ArrowRight, CheckCircle2, Gauge, History, Network, Puzzle, Rocket, Search, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FAQ, HeadSection, Hero } from "../../hire/ai-ml-engineer/page.jsx";
const steps= [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We analyze your stack, workflow, and cultural requirements to define the ideal candidate profile.",
  },
  {
    icon: Network,
    title: "Matching",
    description:
      "Proprietary vetting filters top 1% engineers who match your project needs and team dynamics.",
  },
  {
    icon: Rocket,
    title: "Onboarding",
    description:
      "Swift integration with your tools. Your new team begins shipping production-ready code in 14 days.",
  },
  {
    icon: TrendingUp,
    title: "Management",
    description:
      "Continuous success oversight to ensure performance metrics are met and long-term goals reached.",
  },
];
const cards= [
  {
    icon: Gauge,
    title: "Scaling Startups",
    description:
      "Accelerate your product roadmap without the overhead of internal HR pipelines. Plug in a ready-to-run squad.",
  },
  {
    icon: History,
    title: "Long-term Projects",
    description:
      "Stability matters for multi-year initiatives. Retain top institutional knowledge with dedicated full-time talent.",
  },
  {
    icon: Puzzle,
    title: "Feature Development",
    description:
      "Spin up a focused team to tackle a specific product vertical or platform migration without distraction.",
  },
];
const features = [
  { text: "Zero Recruitment Fees" },
  { text: "Direct Developer Access" },
  { text: "Flexible Team Scaling" },
];
const faqData = [
  {
    id: 1,
    question: "How quickly can we start?",
    answer:
      "Every candidate undergoes a multi-stage technical screening including deep-dives into mathematical fundamentals, live coding of neural architectures, and a portfolio review of production-grade deployments. We only accept the top 1% of applicants.",
  },
  {
    id: 2,
    question: "Do I manage the developers directly?",
    answer:
      "Yes, our engineers are globally distributed and flexible. We match you with technical leaders who guarantee a minimum of 4 hours of direct working overlap with your core team's local time zone.",
  },
  {
    id: 3,
    question: "How do you handle time-zone differences?",
    answer:
      "Absolutely. Our specialists have hands-on experience optimizing workloads across NVIDIA H100/A100 clusters, Google TPUs, and specialized edge hardware like AWS Inferentia and Apple Silicon.",
  }]
// export const metadata={ title: "Dedicated Expert Teams — HireTopCoder" ,description: "Full-time developers assigned solely to your project. Long-term ownership, predictable cost." }

export default function Page() {
  return (
  //  <main className=" w-full">
  //     <div className="pt-20 md:pt-28   "><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Services" }, { label: "Dedicated Teams" }]} /></div>
  //     <PageHero
  //       eyebrow="Delivery Model"
  //       title={<>Dedicated <span className="text-gradient-purple">Expert Teams</span></>}
  //       sub={<>A full-time developer assigned solely to your project — embedded <br className="hidden md:block"/> in your workflow, owning outcomes end-to-end.</>}
  //     notpt="notpt"
  //     />

  //     <Section className="  ">
  //       <SectionTitle eyebrow="Process" title="How It Works" />
  //       <Stepper steps={[
  //         { title: "Discovery", desc: "We map your goals, stack, and team culture in a 30-minute call." },
  //         { title: "Matching", desc: "Receive 3 hand-picked profiles within 48 hours." },
  //         { title: "Onboarding", desc: "Engineer joins your tooling, standups, and codebase in week 1." },
  //         { title: "Ongoing Management", desc: "Dedicated success manager keeps velocity and quality on track." },
  //       ]} />
  //     </Section>

  //     <Section className="  ">
  //        <div className="absolute left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
  //     <div className="relative  w-full">
  //       <SectionTitle eyebrow="Ideal For" title="Who this is built for" />
  //       <div className="grid md:grid-cols-3  md:gap-5">
  //         {[
  //           { t: "Scaling startups", d: "Post-seed teams shipping weekly who need senior firepower without a full hire." },
  //           { t: "Long-term projects", d: "6+ month roadmaps where context and ownership compound week over week." },
  //           { t: "Ongoing feature dev", d: "Teams running parallel feature streams that need a steady, embedded engineer." },
  //         ]?.map((c) => <Card key={c.t}><div className="text-white text-xs md:text-base font-medium mb-2">{c.t}</div><div className="text-foreground/60 text-[10px] md:text-sm leading-relaxed">{c.d}</div></Card>)}
  //       </div>
  //       </div>
  //     </Section>


  //     <Section className="  ">
  //       <SectionTitle eyebrow="Pricing" title="Simple monthly retainer" sub="One predictable invoice. No recruiter fees. No surprises." />
  //       <div className="max-w-2xl mx-auto"><Card className="p-5 md:p-10">
  //         <div className="text-[8px] md:text-[11px] uppercase tracking-[0.2em] text-primary font-bold">Dedicated Engineer</div>
  //         <div className="mt-3 flex items-end gap-2"><div className="text-3xl md:text-5xl font-extrabold text-white">$4,800</div><div className="text-foreground/50 text-xs md:text-base pb-2">/ month</div></div>
  //         <div className="mt-2 text-foreground/55 text-[10px] md:text-sm">Senior-level · 160 hrs/mo · 30-day exit</div>
  //         <ul className="mt-3 md:mt-6 space-y-3">
  //           {["Full-time engineer dedicated to one client", "Replacement guarantee within 7 days", "Dedicated success manager + weekly QBR", "All IP & code ownership transferred to you", "No recruiter or platform fees"]?.map((f) => (
  //             <li key={f} className="flex items-start gap-2 text-sm text-foreground/80 text-xs md:text-base"><Check className="size-3 md:size-4 text-primary  mt-0.5 flex-shrink-0" />{f}</li>
  //           ))}
  //         <PrimaryButton>Talk to Expert</PrimaryButton>         </ul>

  //       </Card></div>
  //     </Section>


  //     <Section className="  ">
  //       <div className="absolute left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
  //     <div className="relative  w-full">
  //       <SectionTitle eyebrow="Proof" title="Real outcomes" />
  //       <div className="max-w-2xl mx-auto"><Link href="/case-studies/brokerremarks" className="block"><Card className="hover:border-primary/30 transition">
  //         <PurplePill>Case Study · SaaS</PurplePill>
  //         <div className="mt-3 text-base md:text-xl text-white font-medium">Broker Remarks — Listing Platform Rebuild</div>
  //         <div className="mt-2 text-foreground/60 text-xs md:text-base leading-relaxed">Reduced agent onboarding time by 60% with a streamlined React + Firebase architecture, shipped in 12 weeks by a 2-engineer dedicated team.</div>
  //         <div className="mt-4 text-primary text-[10px] md:text-sm flex items-center gap-1 font-medium">Read case study <ArrowRight className="size-3 md:size-4" /></div>
  //       </Card></Link></div></div>
  //     </Section>


  //     <Section className="lg:px-30   ">
  //       <SectionTitle eyebrow="FAQ" title="Common questions" />
  //       <FAQ items={[
  //         { q: "How quickly can an engineer start?", a: "Most dedicated engineers begin within 5–7 business days after we sign the agreement." },
  //         { q: "What happens if it doesn't work out?", a: "Replacement is guaranteed within 7 days at no extra cost. You can also exit with 30-day notice." },
  //         { q: "Who owns the code and IP?", a: "100% of code, IP, and assets are yours from day one — transferred via your repo and contracts." },
  //         { q: "Can I scale the team up later?", a: "Yes — add engineers in 48–72 hours through the same agreement." },
  //         { q: "Are engineers truly full-time on my project?", a: "Yes. Each engineer is contractually allocated 100% to a single client at any time." },
  //       ]} />
  //     </Section>


  //    <CTABanner />
  //   </main>
  <section className="  w-full pt-30 md:pt-48 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25" >
    <Hero  heading={<> Dedicated   <span className="text-gradient-purple">Expert Teams </span></>} des={<>Eliminate the friction of hiring. Get full-time, high-performance developer <br/>
teams hand-selected for your technical ecosystem and cultural values.</>} btn1name="Build Your Team" btn1href="/hire" btn2name="View Process" btn2href="/" className=" flex justify-center items-center  text-center  mx-auto" className1="justify-center" />
  <div className="grid pt-10 pb-20 lg:mt-25 gap-15 lg:gap-30">
    <Reveal>
<div className="grid justify-center items-center gap-15 pt-15 border-t border-white/50">
  <div>
<h2 className="text-2xl md:text-3xl lg:text-5xl text-center font-bold leading-[1.05]" >How Its Work</h2>
  </div>
  <div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
         <WorkCard steps={steps}/>
        </div>
  </div>

</div></Reveal>

<div className="grid justify-center items-center gap-15">
  <HeadSection name="Ideal For" des="Specialized teams for specific engineering milestones." />
<Reveal>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <IdealCard cards={cards}/>
        </div>
</Reveal>

</div>

<div className="px-4 sm:px-10 lg:px-20 1xl:px-30 2xl:px-45">
  <Reveal>
<div className="bg-[#121118] border border-primary/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Left Column: Details & Features */}
          <div className="flex-1 p-8 sm:p-10 flex flex-col justify-between">
              <HeadSection name="Monthly Retainer Model" des=" Simple, predictable billing with no hidden fees. Focus on
                engineering outcomes while we handle administration,
                benefits, and payroll." />
            

            {/* Checklist */}
            <ul className="space-y-4 mt-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm sm:text-base text-[#D1CBD8] font-normal">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vertical Divider (Hidden on mobile) */}
          <div className="hidden md:block w-[1px] bg-white/[0.08] my-6" />

          {/* Right Column: Pricing & Action CTA */}
          <div className="w-full md:w-[320px] lg:w-[360px] bg-[#171620] md:bg-transparent p-8 sm:p-10 flex flex-col items-center justify-center text-center shrink-0 border-t md:border-t-0 border-white/[0.08]">
            {/* Small Header Tag */}
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-2">
              STARTS FROM
            </span>

            {/* Price */}
            <div className="text-4xl sm:text-5xl font-extrabold text-[#F4EFFB] tracking-tight mb-2">
              $4,800
            </div>

            {/* Price Subtext */}
            <p className="text-xs sm:text-sm text-[#8E879A] font-normal mb-8">
              Per developer / month
            </p>

            {/* CTA Button */}
            <button
              type="button"
              className="w-full py-3.5 px-6 bg-primary hover:bg-[#A855F7] text-[#1D063A] font-bold text-sm sm:text-base rounded transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-lg shadow-purple-950/30"
            >
              Request Quote
            </button>
          </div>

        </div></Reveal>
        </div>

<div className="grid gap-15 ">
         <div className="flex justify-between items-center">
        <div>  <HeadSection title="Case Study" name="Sucess With Broker Remarks" /></div>
        <div><Link href="/case-studies"  className="text-primary font-bold hover:underline ">Expore More Stories</Link></div>
      </div>
      <div className="">
        <div className="bg-[#121118] border border-primary/50 hover:border-primary rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
          
          {/* ================= LEFT SIDE: DARK IMAGE / RACK ILLUSTARTION ================= */}
          <div className="lg:col-span-7 relative min-h-[260px] lg:min-h-full bg-[#09080E] flex items-center justify-center overflow-hidden">
            {/* Dark server rack / tech hardware background image */}
            <Image
              src="/assets/case-studies/brokerRemarks/img.png"
              alt="Server Racks"
              fill
              className="object-cover object-center "
            />

            {/* Subtle Gradient Overlay to Blend Ends */}
           
          </div>

          {/* ================= RIGHT SIDE: TESTIMONIAL & STATS ================= */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-[#14131D] border-t lg:border-t-0 lg:border-l border-white/[0.08]">
            
            {/* Quote Box */}
            <div className="bg-[#191823] border-l-2 border-primary p-6 rounded-r-xl mb-8">
              <p className="text-base sm:text-lg text-[#F4EFFB] font-medium italic leading-relaxed">
                &ldquo;The dedicated squad from HireTopCoder integrated seamlessly into our Slack and Jira. It felt like they were in the same room.&rdquo;
              </p>
            </div>

            {/* Author Profile Info */}
            <div className="flex items-center gap-4 mb-8">
              {/* Avatar Placeholder / Image */}
              <div className="w-11 h-11 rounded-xl bg-[#252332] border border-white/[0.08] shrink-0 overflow-hidden flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">DC</span>
              </div>

              {/* Name & Role */}
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-bold text-[#F4EFFB]">
                  David Chen
                </span>
                <span className="text-xs text-[#8E879A] font-medium">
                  CTO, Broker Remarks
                </span>
              </div>
            </div>

            {/* Key Metrics Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Metric 1 */}
              <div className="border border-primary/50 bg-[#181722] rounded-xl p-4 flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#F4EFFB] tracking-tight mb-1">
                  40%
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#8E879A] uppercase tracking-wider">
                  OPS REDUCTION
                </span>
              </div>

              {/* Metric 2 */}
              <div className="border border-primary/50 bg-[#181722] rounded-xl p-4 flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#F4EFFB] tracking-tight mb-1">
                  3x
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#8E879A] uppercase tracking-wider">
                  DEPLOYMENT SPEED
                </span>
              </div>
            </div>

          </div>

        </div></div>
      
      
      </div>

      <FAQ faqData={faqData} />
        <CTA title={<>Ready to Build Your  <span className="text-gradient-purple">Elite Squad</span>?</>} des="Get a tailored proposal and team roadmap from our delivery experts within 24 hours." btn2name="Talk To Expert" btn2href="/contact" />
  </div>
  </section>
  );
}

export function WorkCard({steps}){
  return(<> {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={index} className="flex flex-col relative group">
                {/* Top Row: Rounded Icon Box & Connecting Line */}
                <div className="flex items-center mb-6 w-full">
                  {/* Icon Box with Subtle Border & Glow */}
                   <div className="w-8 h-8 xl:w-10 xl:h-10 flex justify-center items-center shrink-0 border border-white/10 rounded-sm xl:rounded-md bg-primary/10 transition-colors group-hover:border-primary" >

                                          <Icon className="text-lg xl:text-2xl text-primary"/>
                                          </div>   

                  {/* Horizontal Connecting Line (hidden on last item & mobile) */}
                  {!isLast && (
                    <div className="hidden lg:block h-[1px] w-10 flex-1 bg-white/50 ml-2" />
                  )}
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold tracking-tight text-[#F4EFFB] mb-2.5">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-[#8E879A] leading-relaxed font-normal max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}</>)
}

export function IdealCard({cards}){
  return(<>  {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="bg-primary/10 border border-primary/50 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-primary transition-all duration-300 group cursor-pointer"
              >
                {/* Top Section: Icon, Title & Description */}
                <div>
                  {/* Icon */}
                  <div className="mb-6">
                    <Icon className="w-6 h-6 text-primary stroke-[2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F4EFFB] mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#8E879A] leading-relaxed font-normal mb-8">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Section: Divider & Footer Action */}
                <div>
                  <div className="w-full h-[1px] bg-primary/50 mb-5" />
                  <div className="flex items-center justify-between text-[#F4EFFB] text-xs sm:text-sm font-medium group-hover:text-primary transition-colors duration-200">
                    <span>Details</span>
                    <ArrowRight className="w-4 h-4 text-[#F4EFFB] group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>
              </div>
            );
          })}</>)
}
