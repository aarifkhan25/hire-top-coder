"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LuArrowRight, LuClock, LuStar } from "react-icons/lu";

import { CTA, GhostButton, PrimaryButton, SectionHead } from "../../components/site/PageShell.jsx";
import { Reveal } from "../../components/site/Reveal.jsx";
import { homeData } from "../../data/home/homeData.js";

import { FaQuoteLeft, FaStar } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
const {experts,brands,posts,testimonials,portfolioItems}=homeData
export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-foreground overflow-hidden">
      <motion.main
        initial={{ opacity: 0, filter: "blur(14px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Hero />
        <ExpertsRow />
        <Marquee />

        <Portfolio />

        <Testimonials />
        <Blog />
        <CTA title={<> Your next hire is  <span className="text-gradient-purple"> one <br className="hidden md:block"/> search away.</span></>} des="  Join thousands of teams shipping faster with the world's most curated talent network." btn1name="Start Hiring Talent" btn1href="/hire" btn2name="Become an Expert" btn2href="/contact" />
     
      </motion.main>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-20 md:pt-40 2xl:pt-50 pb-20 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[900px] rounded-full bg-primary/25 blur-[160px] animate-pulse-glow pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)] pointer-events-none" />

      <div className="relative w-full text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-3 md:px-4 py-1.5 text-[8px] md:text-[10px] md:text-xs 2xl:text-sm font-sans uppercase tracking-[0.2em] text-primary border border-primary/40 bg-primary/10 mb-5 md:mb-10 font-semibold">
          Build faster with elite digital experts
        </div>

        <h1 className="font-display font-bold leading-[0.95] text-[clamp(2.6rem,8vw,7rem)] md:text-[clamp(2.75rem,8vw,7.5rem)] 2xl:text-[clamp(3rem,9vw,8.5rem)]">
          Hire elite <br />
          <span className="text-gradient-purple">digital experts.</span>
        </h1>

        <p className="mt-6 md:mt-12 text-sm md:text-base lg:text-xl  text-[#b1afb8] max-w-3xl mx-auto leading-relaxed font-normal">
          The best designers, engineers, marketers and strategists in the world,
          ready to hire in 24 hours. AI-matched, human-vetted, and instantly
          available.
        </p>

        <div className="mt-5 md:mt-10 flex flex-wrap items-center justify-center gap-3">
          <PrimaryButton>Start Hiring</PrimaryButton>
          <GhostButton href="/contact">Talk to Experts</GhostButton>
        </div>

        <div className=" mt-5 md:mt-10 flex items-center justify-center gap-3 text-sm 1xl:text-base text-foreground/60 font-medium">
          <span>Backed by</span>
          <span className="inline-flex items-center gap-1.5 font-display font-bold text-white">
            <span className="size-5 grid place-items-center rounded bg-white text-black font-extrabold text-xs 1xl:text-sm">
              Y
            </span>
            Combinator
          </span>
        </div>
      </div>
    </section>
  );
}

function ExpertsRow() {
  return (
    <section id="experts" className="relative -mt-4 pb-24 ">
      <div className="absolute inset-x-0 top-0 h-32  z-10 pointer-events-none" />
      <div className="flex gap-5 animate-scroll-cards w-max px-4">
        {[...experts, ...experts].map((e, i) => (
          <ExpertCard key={i} expert={e} />
        ))}
      </div>
    </section>
  );
}

function ExpertCard({ expert }) {
  return (
    <article
      className="relative shrink-0 w-[280px] sm:w-[320px] md:w-[350px] 1xl:w-[380px] rounded-3xl p-2 "
      style={{
        background: `linear-gradient(180deg, ${expert.accent}, transparent 60%)`,
      }}
    >
      {/* 🛠️ स्टेप 1: बैज को हमने overflow-hidden वाले डिब से बाहर निकाल दिया */}
      {/* -top-2 या -top-1 करके आप इसे जितना चाहें उतना ऊपर कार्ड की बॉर्डर के पार दिखा सकते हैं */}
      <div
        className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 text-[8px] md:text-[9px] 2xl:text-[11px] font-sans uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-md font-bold whitespace-nowrap shadow-xl"
        style={{
          color: expert.accent,
          background: "#f9e5ff",
          border: `1px solid ${expert.accent}`,
        }}
      >
        {expert.role}
      </div>

     
      <div className="rounded-[1.25rem] overflow-hidden bg-black relative w-full h-full">
        <Image width={500} height={500}
          src={expert.img}
          alt={`${expert.name}, ${expert.role}`}
          height={800}
          width={640}
          loading="lazy"
          className="w-full aspect-[4/5] object-cover"
        />

        <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black via-black/70 to-transparent">
          <div className="font-display text-3xl font-extrabold text-white">
            {expert.name}
          </div>
          <div className="flex items-center gap-1 mt-1 text-xs text-foreground/80 font-medium">
            <LuStar className="size-3 fill-[#f5a623] text-[#f5a623]" /> 5 ·
            Available now
          </div>
        </div>
      </div>
    </article>
  );
}

function Marquee() {
  return (
    <section className="relative py-6 lg:py-12 border  border-y border-border/80 overflow-hidden">
      <div className="text-center text-[10px] md:text-xs uppercase tracking-[0.3em] text-foreground/50 mb-6 font-semibold">
        Trusted by teams shipping <br className="block lg:hidden"/> with Hire Top Coder
      </div>

      <div className="flex gap-10   md:gap-17 1xl:gap-24 animate-scroll-cards py-5 md:py-10  w-max">
        {[...brands, ...brands].map((b, i) => (
          <div
            key={i}
            className="flex items-center justify-center shrink-0 w-[80px] h-[30px]  md:w-[120px] md:h-[50px] 2xl:w-[175px] 2xl:h-[75px] relative gray-scale-logo"
          >
            <Image
              src={b.img}
              alt="company logo"
              fill
              sizes="120px"
              className="object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);

  // अनंत लूप के लिए: अंत में पहले आइटम की एक कॉपी जोड़ रहे हैं
  const extendedItems = [...portfolioItems, portfolioItems[0]];

  useEffect(() => {
    // ऑटोमैटिक स्लाइडर शुरू करें
    timeoutRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsTransitioning(true);
    }, 5000);

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [portfolioItems.length]);

  useEffect(() => {
    if (currentIndex === extendedItems.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
    }
  }, [currentIndex, extendedItems.length]);

  useEffect(() => {
    if (!isTransitioning && currentIndex === 0) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning, currentIndex]);

  const handleDotClick = (idx) => {
    setIsTransitioning(true);
    setCurrentIndex(idx);
  };

  return (
    <section
      id="portfolio"
      className="relative px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 py-10 lg:py-20 overflow-hidden bg-[#0A0A0A]"
    >
      <div className="absolute top-1/3 -left-32 size-[500px] rounded-full bg-primary/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -right-32 size-[500px] rounded-full bg-accent/15 blur-[140px] pointer-events-none" />

      <div className="relative w-full">
        <SectionHead
          eyebrow="Featured work"
          title={
            <>
              Selected work that{" "}
              <span className="text-gradient-purple">
                speaks <br className="hidden md:block" /> for itself.
              </span>
            </>
          }
          sub="Explore premium digital experiences, AI platforms, websites and modern products crafted by Hire Top Coder experts."
        />

        <div className="w-full overflow-hidden mt-14">
    <div
  className={`flex flex-row w-full ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
  style={{ 
    transform: `translateX(-${currentIndex * 100}%)`,
    transitionProperty: isTransitioning ? 'transform' : 'none' 
  }}
>
  {extendedItems.map((item, index) => (
    <div
      key={`${item.id}-${index}`}
     
      className="w-full shrink-0 grid grid-cols-1 lg:grid-cols-12 items-stretch p-5 md:py-5 md:px-10 lg:px-5 xl:px-10 2xl:px-20 bg-[oklch(0.18_0.02_290_/_0.7)] backdrop-blur-[18px] border border-[oklch(0.62_0.26_305/0.15)] rounded-2xl overflow-hidden transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1)"
    >
     
      <div className="lg:col-span-5 flex justify-center items-center overflow-hidden shadow-2xl min-h-[250px] md:h-[40vh] lg:h-full  lg:min-h-[400px] rounded-t-2xl rounded-b-none lg:rounded-l-2xl lg:rounded-r-none">
        <Image 
          width={500} 
          height={500}
          loading="lazy"
          src={item.image}
          alt={item.title}
         
          className="w-full h-full object-cover rounded-t-2xl rounded-b-none lg:rounded-l-2xl lg:rounded-r-none"
        />
      </div>

      {/* right CONTENT SIDE */}
      <div className="lg:col-span-7 flex flex-col justify-between pt-5 lg:pl-5   xl:p-10 2xl:p-20 h-auto lg:h-full space-y-4 lg:space-y-8">
        
        {/* Typography Header Section */}
        <div className="space-y-4">
          <h2 className="text-base md:text-2xl lg:text-[34px] 2xl:text-[40px] font-medium tracking-tight text-white leading-[1.2]">
            {item.title}
          </h2>

          <div className="text-[#a1a1aa] text-[11px] md:text-xs lg:text-[11px] xl:text-xs 1xl:text-base 1xl:text-lg leading-[1.6] space-y-1">
            {item.paragraphs.map((p, pIndex) => (
              <p key={pIndex}>{p}</p>
            ))}
          </div>
        </div>

        {/* Metric Stats Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {item.metrics.map((metric) => (
            <div
              key={metric.id}
              className="bg-gradient-to-t from-black/80 to-transparent border border-[oklch(0.62_0.26_305/0.15)] hover-glow-card rounded-xl p-3 md:p-5 lg:p-2 xl:p-5 flex items-center gap-2 md:gap-4"
            >
              <div className="text-primary text-2xl md:text-3xl shrink-0">
                {metric.icon}
              </div>
              <div className="flex gap-3 justify-center items-center md:gap-0 md:grid">
                <span className="block text-sm md:text-base lg:text-lg xl:text-base 1xl:text-2xl font-bold text-white tracking-tight">
                  {metric.value}
                </span>
                <span className="block text-[#71717a] text-[10px] md:text-xs 1xl:text-base font-medium mt-0.5">
                  {metric.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Box */}
        <div className="bg-gradient-to-t from-black/80 to-transparent border-l-[3px] md:border-l-[6px] rounded-xl border-primary hover-glow-card rounded-r-xl p-3 xl:p-6 relative overflow-hidden">
          <p className="text-[#d4d4d8] text-[11px] md:text-xs 1xl:text-base leading-[1.6] font-normal">
            {item.testimonial}
          </p>
        </div>

        {/* Bottom Link Trigger & Dot Indicators */}
        <div className="pt-2 flex items-center justify-between">
          <Link
            href={item.href}
            className="inline-block text-primary text-xs md:text-sm xl:text-base font-semibold tracking-wide hover:underline hover:underline-offset-8 decoration-primary transition-all duration-200"
          >
            Read Full Case Study
          </Link>

          <div className="flex items-center gap-1.5 pr-2">
            {portfolioItems.map((_, idx) => {
              const isActive =
                idx === currentIndex ||
                (currentIndex === portfolioItems.length && idx === 0);
              return (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${isActive ? "w-3 md:w-5 bg-primary" : "w-1 md:w-1.5 bg-neutral-700 hover:bg-neutral-500"}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>

      <div className="mt-5 md:mt-12 flex justify-center">
        
          <GhostButton href="/case-studies">View All Case Studies</GhostButton>
       
      </div>
    </section>
  );
}

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef(null);

  // अनंत लूप के लिए: अंत में पहले दो आइटम्स की कॉपी जोड़ रहे हैं ताकि स्लाइड स्मूथ रहे
  const extendedItems =
    testimonials.length > 0
      ? [...testimonials, ...testimonials.slice(0, 2)]
      : [];

  useEffect(() => {
    const updateIsMobile = () => {
      if (typeof window === "undefined") return;
      setIsMobile(window.innerWidth < 768);
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  useEffect(() => {
    if (testimonials.length <= 2) return;

    // ऑटोमैटिक स्लाइडर शुरू करें
    timeoutRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsTransitioning(true);
    }, 5000);

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [testimonials.length]);

  // जब स्लाइडर आखिरी डुप्लिकेट्स पर पहुंचे, तो बिना एनीमेशन के पहले कार्ड्स पर कूदें
  useEffect(() => {
    if (currentIndex === testimonials.length) {
      const snapTimeout = setTimeout(() => {
        setIsTransitioning(false); // एनीमेशन बंद करें
        setCurrentIndex(0); // चुपके से पहले कार्ड पर जाएँ
      }, 700); // transition-duration (700ms)

      return () => clearTimeout(snapTimeout);
    }
  }, [currentIndex, testimonials.length]);

  // एनीमेशन रीसेट होने के बाद वापस चालू करें
  useEffect(() => {
    if (!isTransitioning && currentIndex === 0) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning, currentIndex]);

  const handleDotClick = (idx) => {
    setIsTransitioning(true);
    setCurrentIndex(idx);
  };

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="relative  px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 py-10 lg:py-20 overflow-hidden bg-[#0A0A0A]"
    >
      
      <div className="w-full">
       
          <SectionHead
            eyebrow="Trusted by builders"
            title={
              <>
                The new standard for{" "}
                <span className="text-gradient-purple">hiring talent.</span>
              </>
            }
          />
       

        {/* मुख्य स्लाइडर रैपर */}
        <div className="w-full overflow-hidden pt-10 lg:pt-20">
          {/* स्लाइडिंग ट्रैक - मोबाइल पर 1 कार्ड, md स्क्रीन से 2 कार्ड्स दिखेंगे */}
          <div
            className={`flex flex-row w-full ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{
              transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)`,
              transitionProperty: isTransitioning ? "transform" : "none",
            }}
          >
            {extendedItems.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="w-full md:w-1/2 shrink-0 p-1.5 md:p-2.5 lg:p-5" // यहाँ चौड़ाई आपके ओरिजिनल grid-cols-2 जैसी है
              > <div className="group relative bg-gradient-to-t from-black/80 to-transparent rounded-[16px] border border-[oklch(0.62_0.26_305/0.15)] hover-glow-card p-4 sm:p-6 md:p-10 flex flex-col justify-between transition-all duration-500 h-full">
               
                  <div>
                    {/* 5-Star Rating Section */}
                    <div className="flex items-center gap-1 md:gap-2 mb-6">
                      {[...Array(review.stars || 5)].map((_, idx) => (
                        <FaStar
                          key={idx}
                          className="text-[#f5a623] text-sm  md:text-base lg:text-2xl 2xl:text-3xl"
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    {/* Styled Big Quote Icon */}
                    <div className="text-primary text-base md:text-2xl lg:text-3xl mb-2 md:mb-4">
                      <FaQuoteLeft />
                    </div>

                    {/* Review Text Body */}
                    <p className="text-[#b1afb8] text-xs sm:text-sm lg:text-lg 2xl:text-xl leading-[1.7] tracking-wide font-normal italic">
                      {review.quote}
                    </p>
                  </div>

                  {/* Bottom Profile Footer Section */}
                  <div className="mt-5 lg:mt-10">
                    {/* Separator Line */}
                    <div className="w-full h-[1px] md:h-[2px] bg-[oklch(0.62_0.26_305/0.15)] mb-3 md:mb-6" />

                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden ring-1 ring-[#3a2763] group-hover:ring-[#583794] transition-all duration-500">
                        <Image width={500} height={500}
                          src={review.avatar}
                          alt={review.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      {/* Name and Designation */}
                      <div>
                        <h3 className="text-white text-xs  md:text-[16px] font-semibold tracking-wide leading-snug">
                          {review.name}
                        </h3>
                        <p className="text-[#726e7e] text-[8px] md:text-[13px] font-medium mt-0.5 group-hover:text-[#908b9c] transition-colors duration-500">
                          {review.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

   
        <div className="flex items-center justify-center gap-1 md:gap-1.5  mt-5 md:mt-10">
          {testimonials.map((_, idx) => {
            const isActive =
              idx === currentIndex ||
              (currentIndex === testimonials.length && idx === 0);
            return (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${isActive ? "w-3 md:w-5 bg-primary" : " w-1 md:w-1.5 bg-neutral-700 hover:bg-neutral-500"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section
      id="blog"
      className="relative  px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 py-10 lg:py-20 overflow-hidden  bg-[#0A0A0A]   "
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
     
          <div className="mt-8 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {posts.map((p) => (
              <article
                key={p.title}
                className="group glass rounded-2xl hover-glow-card flex flex-col "
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
    
    <div className="mt-5 md:mt-12 flex justify-center">
        
          <PrimaryButton href="/blog">View All Blogs</PrimaryButton>
       
      </div>
    </section>
  );
}

