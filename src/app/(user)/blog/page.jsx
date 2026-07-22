"use client"
import { AmbientGlow, CTA, PrimaryButton, SectionHead } from "@/components/site/PageShell";
import { Reveal, Stagger, StaggerItem, TiltCard } from "@/components/site/Reveal";
import { BookOpen, Clock, Download, FileSignature, Wrench } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import { LuArrowRight, LuClock } from "react-icons/lu";
const blog1 = "/assets/blog-1.png";
const blog2 = "/assets/blog-2.png";
const blog3 = "/assets/blog-3.png";
const blog4 = "/assets/blog-4.png";
const blog5 = "/assets/blog-5.png";
const blog6 = "/assets/blog-6.jfif";
const blog7 = "/assets/blog-7.jfif";
const blog8 = "/assets/blog-8.png"

const categories = ["AI", "Product Design", "SaaS", "Branding", "Development", "Startups", "Automation"];

const featured = {
  title: "The Future of AI Design Is Adaptive",
  desc: (<>
Generative interfaces are no longer a concept — they are the new standard for AI-powered products
  </>),
  cat: "AI · Report",
  time: "18 min read",
  img: blog1,
};

const posts = [
{
    cat: "AI Design",
    title: "The Future of AI Design Is Adaptive",
    excerpt: "How generative interfaces are reshaping every product surface.",
    img: blog1,
    read: "6 min",
    to:"/blog/ai-design "
  },
  {
    cat: "UX Trends",
    title: "UX Trends Defining 2026",
    excerpt: "Spatial layouts, kinetic type and ambient AI take center stage.",
    img: blog2,
    read: "5 min",
     to:"/blog/ux-trends"
  },
  {
    cat: "SaaS",
    title: "Building Premium SaaS Experiences",
    excerpt: "The craft framework behind today's most loved enterprise tools.",
    img: blog3,
    read: "8 min",
     to:"/blog/premium-saas "
  },
  {
    cat: "Product",
    title: "AI-Powered Product Development",
    excerpt:
      "From discovery to ship — orchestrating AI across the build cycle.",
    img: blog4,
    read: "7 min",
     to:"/blog/ai-product"
  },
  {cat: "Engineering",    title: "Shipping faster with small pods",    excerpt: "Why six-person teams outperform.",               img: blog6, read: "6 min" ,to:"/blog/shipping-faster"},
  {cat: "Branding",       title: "The new luxury of restraint",        excerpt: "Less is louder than ever.",                       img: blog8, read: "5 min" ,to:"/blog/branding"},
  {cat: "Startups",       title: "Hiring your first 10 with intention", excerpt: "Compounding the culture you want.",              img: blog7, read: "9 min",to:"/blog/hiring-intention" },
  {cat: "Automation",     title: "From prompts to pipelines",          excerpt: "Operationalizing AI inside the org.",            img: blog5, read: "7 min" ,to:"/blog/prompt-to-pipelines"},
];

const guides = [
  { t: "The Founder's Hiring Playbook",   d: "A 40-page deep dive into building elite product teams.", tag: "PDF · 40 pages",icon:BookOpen },
  { t: "AI Product Launch Checklist",      d: "Everything to ship a launch-worthy AI feature.",         tag: "Notion Template" ,icon:FileSignature},
  { t: "Brand System Starter Kit",         d: "Tokens, typography, and component scaffolding.",         tag: "Figma File",icon: Wrench },
];

export default function BlogPage() {
  return (
    <main className="px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 w-full">
      {/* HERO */}
     <section className="relative pt-20 pb-10 md:pt-40 lg:pb-20 overflow-hidden">
  <AmbientGlow />
  <div className="relative w-full  text-center ">
    
    {/* 1. बैज (Badge) सेक्शन */}
    <Reveal>
      <div className="inline-flex items-center gap-2 rounded-full px-3 md:px-4 py-1.5 text-[6px] sm:text-[8px] md:text-[10px] md:text-xs 2xl:text-sm font-sans uppercase tracking-[0.2em] text-primary border border-primary/40 bg-primary/10 mb-5 md:mb-10 font-semibold">
        The Hire Top Coder Field Notes
      </div>
    </Reveal>
  
    {/* 2. मुख्य हेडिंग (H1) सेक्शन */}
    {/* 🛠️ फ़िक्स: H1 को Reveal के अंदर डाला ताकि इसका लेआउट फ्लो कंपाइलर न तोड़े */}
   <Reveal delay={0.15}>
  <h1 
    className="font-bold leading-[1.15] text-white block w-full text-center overflow-visible"
    style={{
      fontSize: 'clamp(2rem, 6vw, 8rem)', 
    }}
  >
    Insights, Trends & <br />
    
    <span 
      className="bg-clip-text text-transparent inline-block mt-2 md:mt-4 pb-4 overflow-visible"
      style={{
        backgroundImage: 'linear-gradient(135deg, oklch(0.85 0.18 305), oklch(0.65 0.28 320))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: 'inherit',
      }}
    >
      Digital Innovation
    </span>
  </h1>
</Reveal>

    {/* 3. सब-पैराग्राफ सेक्शन */}
    <Reveal delay={0.3}>
      <p className=" md:mt-12 text-sm md:text-base lg:text-xl text-[#b1afb8] max-w-3xl mx-auto leading-relaxed font-normal">
        Playbooks, essays, and downloadable resources from the experts
        building the next generation of digital products.
      </p>
    </Reveal>

  </div>
</section>

      {/* FEATURED ARTICLE */}
      <section className="relative py-10 lg:py-20">
        <div className="w-full xl:px-20 2xl:px-40 ">
          <Reveal>
            <TiltCard className="group relative rounded-3xl overflow-hidden border border-border/40 hover-glow-card cursor-pointer">
              <div className="grid md:grid-cols-2 ">
                <div className=" relative aspect-[16/11] md:aspect-auto overflow-hidden ">
                  <Image width={500} height={500}   priority={false}  src={featured.img} alt={featured.title}
                    className="size-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1400ms]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                </div>
                <div className=" p-6 md:p-8  xl:p-12 2xl:p-25  flex flex-col justify-center    glass">
                  <div className="text-[9px] md:text-[11px] xl:text-xs 2xl:text-base font-mono uppercase tracking-[0.25em] text-primary font-bold">Featured · {featured.cat}</div>
                  <h2 className="mt-2 md:mt-4 text-xl md:text-3xl lg:text-4xl 2xl:text-[38px] font-extrabold tracking-tight leading-tight">{featured.title}</h2>
                  <p className="mt-2 md:mt-4 text-foreground/75 text-[11px] md:text-xs lg:text-base 2xl:text-lg font-medium">{featured.desc}</p>
                  <div className="mt-2 md:mt-6 flex items-center gap-4 text-sm 2xl:text-base text-foreground/65 font-medium">
                    <span className="inline-flex items-center text-xs   lg:text-base 2xl:text-lg md:gap-1.5"><Clock className="size-2.5 md:size-3.5" />{featured.time}</span>
                    <span>·</span>
                    <span className="text-xs  lg:text-base 2xl:text-lg">By the Hire Top Coder </span>
                  </div>
                  <div className="mt-5 md:mt-8">
                    <PrimaryButton href="/blog/ai-design ">Read the Report</PrimaryButton>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="relative ">
        <Stagger className="w-full   flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <StaggerItem key={c}>
              <button className="glass rounded-full px-5 py-2 text-xs md:text-sm font-semibold  border border-white/10  bg-primary/10 transition-colors hover:border-primary  text-[#F0EDFF]  ">
                {c}
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* LATEST BLOGS */}
    <section
          id="blog"
          className=" py-10 lg:py-20 overflow-hidden  bg-[#0A0A0A]   "
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full bg-primary/10 blur-[160px] pointer-events-none" />
            <Reveal> <div className="relative w-full">
            <SectionHead
              eyebrow="Insights & innovation"
              title={
                <>
                  Insights, trends &{" "}
                  <span className="text-gradient-purple">digital innovation.</span>
                </>
              }
              sub="Explore the latest thoughts on design, AI, branding, product development and modern digital experiences."
            />
         
              <div className="mt-8 md:mt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {posts.map((p) => (
                  <article
                    key={p.title}
                    className="group glass rounded-2xl hover-glow-card flex flex-col isolation-isolate"
                  >
                    <div className="aspect-[4/3] rounded-t-2xl overflow-hidden relative bg-[#0A0A0A] select-none">
                      <Image
                        priority={false}
                        loading="lazy"
                        src={p.img}
                        alt={p.title}
                        width={1024}
                        height={1024}
                        /* 3. 'will-change-transform' और 'style' में backface-visibility जोड़ने से ब्राउज़र पिक्सल को कभी मिस-अलाइन नहीं करेगा */
                        className="size-full object-cover group-hover:scale-110 will-change-transform transition-transform duration-700 pointer-events-none"
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                      <span className="absolute top-3 left-3 text-[8px] md:text-[10px] uppercase tracking-widest bg-primary/30 border border-primary/60 backdrop-blur text-white px-2.5 py-1 rounded-full font-bold">
                        {p.cat}
                      </span>
                    </div>
    
                    <div className="p-3 md:p-5 flex-1 flex flex-col rounded-b-2xl bg-[#0A0A0A]/40 mt-[-2px] relative z-20 pt-[22px]">
                      <h3 className=" text-base md:text-lg 2xl:text-xl font-semibold leading-snug group-hover:text-primary transition">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-[10px] md:text-xs 2xl:text-sm text-foreground/75 font-medium leading-relaxed flex-1 group-hover:text-white">
                        {p.excerpt}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-[10px] md:text-xs text-foreground/60 font-medium">
                          <LuClock className="size-3.5" /> {p.read}
                        </span>
                        <Link href={p.to} className="inline-flex items-center gap-1 text-xs md:text-sm font-bold text-primary group-hover:gap-2 transition-all">
                          Read More <LuArrowRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
          </div>
            </Reveal>
        
       
        </section>

      {/* GUIDES */}
      <section className="relative py-10 lg:py-20">
        <SectionHead eyebrow="Guides & Resources" title="Tools your team can actually use" />
        <Stagger className="mt-6 md:mt-14 w-full   grid md:grid-cols-3 gap-4">
          {guides.map((g) => (
            <StaggerItem key={g.t}>
              <TiltCard className="glass rounded-2xl p-5 lg:p-7 group h-full hover-glow-card flex flex-col">
                <div className=" w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center shrink-0 border border-white/10 rounded-sm xl:rounded-md bg-primary/10 transition-colors group-hover:border-primary" >
                  <g.icon className="text-sm p-1 md:p-0 md:text-lg xl:text-2xl text-primary" />
                </div>
                <div className="mt-3 text-base md:text-lg  2xl:text-xl font-bold tracking-tight">{g.t}</div>
                <p className="mt-2 text-xs  md:text-sm 2xl:text-base text-foreground/70 font-medium flex-1">{g.d}</p>
                <div className="mt-3 lg:mt-6 flex items-center justify-between">
                  <span className="text-[8px] md:text-[11px] 2xl:text-sm font-mono uppercase tracking-[0.2em] text-primary font-bold">{g.tag}</span>
                  <button className="size-8 md:size-10 grid place-items-center rounded-full btn-glass text-white">
                    <Download className="size-3 md:size-4" />
                  </button>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* NEWSLETTER */}
         <CTA title={<>Ready to put these ideas to  <span className="text-gradient-purple">work</span>?</>} des="  One sharp essay every Sunday. Built for operators." btn1name="Hire An Expert" btn1href="/"  btn2name="Talk To Expert" btn2href="/" className="py-10 lg:py-20" />
  
    </main>
  );
}
