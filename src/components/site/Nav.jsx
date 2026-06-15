"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FiAlignJustify, FiChevronDown } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { ArrowRight } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

// 🌌 पूरी तरह डायनामिक 3-कॉलम मेगा मेनू डेटा स्ट्रक्चर
const navData = [
  { 
    name: "Services", 
    href: '/about', 
    dropdownTitle: "Services.",
    dropdownDesc: "End-to end digital engineering built around your product goals.",
    featuredCard: {
      tag: "Case Study SAAS",
      title: "Broker Remarks - listing Platform Rebuild",
      desc: "Reduced agent onboarding time by 60% with a streamlined React + Firebase architecture.",
      actionText: "Read case study",
      href: "/work/case-study"
    },
    columns: [
      {
        title: "Delivery Models",
        links: [
          { name: "Dedicated Expert Teams", desc: "A full-time developer assigned only to year project", href: "/services/dedicated-teams" },
          { name: "IT Staff Augmentation", desc: "Plug vetted engineers into your existing team", href: "/services/staff-augmentation" },
          { name: "Offshore Development Center", desc: "Build your own offshore team with our infrastructure", href: "/services/offshore-center" }
        ]
      },
      {
        title: "Engineering Services",
        links: [
          { name: "Legacy System Modernization", desc: "Zero-Downtime upgrades for outdated platforms", href: "/services/modernization" },
          { name: "MVP Development", desc: "Investor ready product in 12 weeks", href: "/services/mvp-development" },
          { name: "Scale Your Engineering team", desc: "Add 3-30 engineers in 48-72 hours", href: "/services/scale-team" }
        ]
      }
    ]
  }, 
  { 
    name: "Hire Developers", 
    href: "/hire", 
    dropdownTitle: "Hire Talent.",
    dropdownDesc: "Access the top 1% elite developers, fully vetted and ready to scale.",
    featuredCard: {
      tag: "Vetting Process",
      title: "Rigorous 5-Step Talent Assessment",
      desc: "Only the absolute best technical talent makes it through our multi-stage live coding and architectural tests.",
      actionText: "Learn about vetting",
      href: "/hire/vetting"
    },
    columns: [
      {
        title: "By Domain & Roles",
        links: [
          { name: "Early-Stage Startups Talent", desc: "Flexible, agile engineers expert in product iteration", href: "/hire/stages/early-stage-startups" },
          { name: "UI/UX & Product Designers", desc: "Crafting beautiful, high-converting modern user journeys", href: "/hire/categories/design" },
          { name: "Full Stack Engineers", desc: "Proficient in modern web stacks (MERN, Next.js, Python)", href: "/hire/categories/full-stack" }
        ]
      },
      {
        title: "By Industry Specialization",
        links: [
          { name: "AI & Machine Learning", desc: "Engineers specializing in LLMs, PyTorch, and NLP models", href: "/hire/industries/ai-machine-learning" },
          { name: "Fintech & Blockchain", desc: "Secure architecture expert developers for financial apps", href: "/hire/industries/fintech" },
          { name: "SaaS & Cloud Platforms", desc: "Scaling microservices and distributed cloud networks", href: "/hire/industries/saas" }
        ]
      }
    ]
  }, 
  { 
    name: "Resources", 
    href: '/resources',
    dropdownTitle: "Resources.",
    dropdownDesc: "Gain insights, read updates, and explore technical breakdowns.",
    featuredCard: {
      tag: "Latest Insights",
      title: "The 2026 Tech Stack Playbook",
      desc: "An in-depth whitepaper on which frameworks are driving maximum ROI for enterprise projects.",
      actionText: "Download playbook",
      href: "/resources/playbook"
    },
    columns: [
      {
        title: "Knowledge Hub",
        links: [
          { name: "Engineering Blogs", desc: "Deep dives into architecture, performance, and code", href: "/resources/blogs" },
          { name: "Client Case Studies", desc: "Real success stories from global tech companies", href: "/resources/case-studies" },
          { name: "Whitepapers", desc: "Technical guides on security and microservices", href: "/resources/whitepapers" }
        ]
      },
      {
        title: "Support & Help",
        links: [
          { name: "Frequently Asked Questions", desc: "Clear answers about hiring, billing, and trial phases", href: "/resources/faq" },
          { name: "Developer Documentation", desc: "Integration protocols and infrastructure standards", href: "/resources/docs" }
        ]
      }
    ]
  },
  { 
    name: "Company",
    href: '/work',
  }, 
];

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX: x, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-gradient-to-r from-primary via-accent to-primary"
    />
  );
}

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileDropdownOpen(null); 
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  };

  const toggleMobileDropdown = (index) => {
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);
  };

  return (
    <header className="w-full fixed top-0 inset-x-0 z-50 transition-all duration-500">
      <ScrollProgress />
      
      <div className="w-full h-auto hidden md:block border-b border-white/5">
        {/* contact section */}
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 py-2 bg-[#0A0A0A]">
          <div className="text-xs lg:text-sm font-sans text-foreground/85">
            Trusted by 500+ clients worldwide
          </div>
          <div className="flex justify-between items-center font-sans gap-2 lg:gap-5">
            <div className="flex justify-center items-center gap-2 hover:text-white text-xs lg:text-sm text-foreground/85">
              <MdOutlinePhoneInTalk className="w-5 h-5" /> <p>+91 12345 67890</p>
            </div>
            <div className="flex justify-center items-center gap-2 hover:text-white text-xs lg:text-sm text-foreground/85">
              <MdOutlineMarkEmailUnread className="w-5 h-5" /> <p>contact@hiretopcoder.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* navbar */}
      <nav
        onMouseLeave={() => setHoveredIndex(null)}
        className={`w-full flex items-center justify-between transition-all duration-500 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 ${
          isScrolled
            ? "bg-[oklch(0.14_0.02_290/0.6)] md:-mt-[2px] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)] border-b border-[oklch(0.62_0.26_305/0.15)]  shadow-[0_8px_40px_-12px_oklch(0.62_0.26_305/0.5)]"
            : " bg-[#0d0d0d]/10"
        }`}
      >
        <div className="flex justify-between items-center gap-10 lg:gap-20 text-xs lg:text-sm 1xl:text-lg font-bold text-foreground/85">
          <div>
            <Link href="/" onClick={closeMobileMenu}>
              <Image 
                width={500} 
                height={500} 
                src="/assets/logo1.png" 
                alt="logo" 
                loading="eager"
                className="w-[110px] h-[50px] lg:w-[120px] lg:h-[60px] 1xl:w-[130px] 1xl:h-[80px] 2xl:w-[150px] 2xl:h-[100px] cursor-pointer object-contain" 
              />
            </Link>
          </div>

          {/* डेस्कटॉप मेनू */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 static h-full">
            {navData?.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                className="py-5"
              >
                <Link 
                  href={item.href || "#"}
                  data-aos="fade-down"
                  className="relative hover:text-white transition group flex items-center gap-1 text-sm lg:text-base 2xl:text-lg font-mulish font-semibold cursor-pointer text-foreground/85"
                >
                  <span className="flex justify-center items-center gap-1">
                    {item.name}
                    {item.columns && (
                      <FiChevronDown className={`w-3 h-3 transition-transform duration-200 ${hoveredIndex === i ? 'rotate-180' : ''}`} />
                    )}
                  </span>
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* 🛠️ डायनामिक यूनिफॉर्म मेगा ड्रॉपडाउन सिस्टम */}
                <AnimatePresence>
                  {hoveredIndex === i && item.columns && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={`fixed left-0 right-0 ${isScrolled
                        ? "top-[63px] 2xl:top-[100px]" : "top-[100px] 2xl:top-[120px]"} w-full z-50 pointer-events-auto bg-[#0a0612]/95 backdrop-blur-md border-b border-white/10 px-6 sm:px-10 lg:px-15 1xl:px-20 2xl:px-25 py-10 overflow-hidden`}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow pointer-events-none z-0" />
                      
                      <div className="relative w-full z-10 text-left">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                          
                          {/* 1. Left Column: Title & Dynamic Featured Box */}
                          <div className="lg:col-span-4 border-r border-white/10 pr-8 flex flex-col justify-between text-left">
                            <div>
                              <h3 className="text-xl font-bold text-white tracking-tight font-mulish mb-1">{item.dropdownTitle}</h3>
                              <p className="text-xs text-gray-400 font-medium leading-relaxed font-mulish mb-6">
                                {item.dropdownDesc}
                              </p>
                            </div>
                            
                            {/* Featured Card UI Box */}
                            {item.featuredCard && (
                              <div className="bg-black border border-white/5 rounded-[8px] p-5 flex flex-col gap-2.5 text-left">
                                <span className="text-[10px] font-bold text-[#b07eff] tracking-wider uppercase">
                                  {item.featuredCard.tag}
                                </span>
                                <h4 className="text-sm font-bold text-white leading-snug font-mulish">
                                  {item.featuredCard.title}
                                </h4>
                                <p className="text-[11px] text-gray-400 leading-normal font-sans">
                                  {item.featuredCard.desc}
                                </p>
                                <Link href={item.featuredCard.href} className="text-[11px] font-bold text-[#b07eff] hover:underline mt-2 inline-block">
                                  {item.featuredCard.actionText}
                                </Link>
                              </div>
                            )}
                          </div>

                          {/* 2. Right Columns: Standardized Split Layout (2 Columns) */}
                          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 pl-4">
                            {item.columns.map((col, colIdx) => (
                              <div key={colIdx} className="flex flex-col gap-5 text-left">
                                <h4 className="text-xs font-semibold tracking-wider text-gray-500 uppercase font-sans">
                                  {col.title}
                                </h4>
                                <div className="flex flex-col gap-5">
                                  {col.links.map((link, linkIdx) => (
                                    <Link key={linkIdx} href={link.href} onClick={() => setHoveredIndex(null)} className="flex items-start gap-4 group text-left">
                                      {/* स्क्वायर डिज़ाइन बॉक्स (जैसे इमेज में है) */}
                                      <div className="w-10 h-10 shrink-0 border border-white/10 rounded-md bg-white/5 transition-colors group-hover:border-[#b07eff]/40" />
                                      <div>
                                        <h5 className="text-sm font-bold text-white group-hover:text-primary transition-colors font-mulish">
                                          {link.name}
                                        </h5>
                                        <p className="text-xs text-gray-400 mt-0.5 leading-normal">
                                          {link.desc}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* राइट साइड बटन्स */}
        <div data-aos="fade-down" className="flex items-center gap-2">
          <Link href="/signin" className="hidden group sm:inline-flex items-center gap-2 text-sm lg:text-base 2xl:text-lg font-bold px-5 py-2 rounded-full expert-btn text-[#381385]">
            Talk to Expert <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button
            className="md:hidden grid place-items-center size-10 rounded-full btn-glass text-white cursor-pointer"
            aria-label="Menu"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <MdOutlineClose className="w-6 h-6" /> : <FiAlignJustify className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* मोबाइल रेस्पॉन्सिव ओवरले */}
      <div 
        className={`md:hidden fixed inset-0 top-[50px] h-[calc(100vh-50px)] w-full bg-black/95 backdrop-blur-md z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-2 overflow-y-auto h-full pb-20 text-left">
          {navData?.map((item, i) => (
            <div key={i} className="flex flex-col w-full border-b border-white/5 py-2 text-left">
              <div 
                onClick={() => item.columns ? toggleMobileDropdown(i) : closeMobileMenu()}
                className="p-2 hover:text-gray-400 cursor-pointer text-white w-full text-lg font-mulish font-semibold flex justify-between items-center text-left"
              >
                {item.columns ? (
                  <span className="w-full flex justify-between items-center text-left">
                    {item.name}
                    <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen === i ? 'rotate-180' : ''}`} />
                  </span>
                ) : (
                  <Link href={item.href || "#"} className="w-full text-left">{item.name}</Link>
                )}
              </div>
              
              {item.columns && mobileDropdownOpen === i && (
                <div className="pl-4 flex flex-col gap-2 mt-1 bg-white/5 p-3 rounded-lg transition-all text-left">
                  {item.columns.map((col, cIdx) => (
                    <div key={cIdx} className="mb-3 text-left">
                      <p className="text-[10px] font-sans text-gray-500 uppercase tracking-wider font-bold mb-1">{col.title}</p>
                      {col.links.map((link, lIdx) => (
                        <Link key={lIdx} href={link.href} onClick={closeMobileMenu} className="text-sm font-mulish text-gray-400 hover:text-white py-1 block pl-2">
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/starthiring" onClick={closeMobileMenu} className="mt-6 sm:hidden bg-white text-black font-bold text-center py-2.5 px-6 rounded-full text-base cursor-pointer">
            Talk To Expert
          </Link>
        </div>
      </div>
    </header> 
  );
}