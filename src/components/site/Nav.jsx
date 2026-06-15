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

const navData = [
  { 
    name: "Services", 
    href: '/about', 
    subItems: [
      { name: "Our Mission", href: "/about/mission" },
      { name: "Press", href: "/about/press" },
    ]
  }, 
  { 
    name: "Hire Developers", 
    href: "/hire", 
    isMega: true, 
    subItems: [
      { 
        title: "Company stages", 
        links: [
          { name: "Early-Stage-Startups", href: "/hire/stages/early-stage-startups" },
        ] 
      },
      { 
        title: "Categories", 
        links: [
          { name: "Design", href: "/hire/categories/design" },
        ] 
      },
      { 
        title: "Industries", 
        links: [
          { name: "AI & Machine Learning", href: "/hire/industries/ai-machine-learning" },
        ] 
      }
    ]
  }, 
  { 
    name: "Resources", 
    href: '/resources',
    subItems: [ 
      { name: "Blogs", href: "/resources/blogs" },
      { name: "FAQ", href: "/resources/faq" },
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

      {/* navbar*/}
      <nav
        onMouseLeave={() => setHoveredIndex(null)}
        className={`w-full flex items-center justify-between transition-all duration-500 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 ${
          isScrolled
            ? "bg-[oklch(0.14_0.02_290/0.6)] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)] border-b border-[oklch(0.62_0.26_305/0.15)]  shadow-[0_8px_40px_-12px_oklch(0.62_0.26_305/0.5)]"
            : " bg-[#0d0d0d]/10"
        }`}
      >
         <div className="flex justify-between items-center gap-10 lg:gap-20 text-xs lg:text-sm 1xl:text-lg font-bold text-foreground/85">
        <div className="">
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
                className="py-5" // थोड़ा पैडिंग स्पेस ताकि माउस न हटे
              >
                <Link 
                  href={item.href || "#"}
                  data-aos="fade-down"
                  className="relative hover:text-white transition group flex items-center gap-1 text-sm lg:text-base 2xl:text-lg font-mulish font-semibold cursor-pointer text-foreground/85"
                >
                  <span className="flex justify-center items-center gap-1">
                    {item.name}
                    {item.subItems && (
                      <FiChevronDown className={`w-3 h-3 transition-transform duration-200 ${hoveredIndex === i ? 'rotate-180' : ''}`} />
                    )}
                  </span>
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* 🛠️ फुल-विड्थ ग्लोइंग ड्रॉपडाउन सिस्टम */}
                <AnimatePresence>
                  {hoveredIndex === i && item.subItems && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={`fixed left-0 right-0 ${isScrolled
            ?"top-[63px] 2xl:top-[83px]":"top-[100px] 2xl:top-[120px]"}   w-full z-50 pointer-events-auto bg-black/40 backdrop-blur-md border-b border-white/10 px-6 sm:px-10 lg:px-15 1xl:px-20 2xl:px-25 py-12 overflow-hidden`}
                    >
                      {/* 🌌 आपके कोड का ओरिजिनल ग्रेडिएंट ब्लर इफ़ेक्ट (बैकग्राउंड में रहेगा) */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow pointer-events-none z-0" />
                      {/* 📄 कंटेंट बॉक्स (ग्रेडिएंट ग्लो के ऊपर साफ दिखेगा) */}
                      <div className="relative max-w-7xl mx-auto z-10 py-20">
                        {item.isMega ? (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                            {item.subItems.map((group, groupIdx) => (
                              <div key={groupIdx} className="flex flex-col gap-3">
                                <h3 className="text-xs uppercase tracking-wider font-jb-mono text-primary font-bold">
                                  {group.title}
                                </h3>
                                <div className="flex flex-col gap-2">
                                  {group.links.map((subLink, subIdx) => (
                                    <Link
                                      key={subIdx}
                                      href={subLink.href || "#"}
                                      onClick={() => setHoveredIndex(null)}
                                      className="text-sm font-medium font-mulish text-foreground/80 hover:text-white transition-colors py-1 block"
                                    >
                                      {subLink.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          // नॉर्मल सर्विसेज/रिसोर्सेज के लिए भी फुल विड्थ में हॉरिजॉन्टल लेआउट
                          <div className="flex flex-row items-center gap-12 lg:gap-16">
                            {item.subItems.map((subItem, subIdx) => (
                              <Link
                                key={subIdx}
                                href={subItem.href || "#"}
                                onClick={() => setHoveredIndex(null)}
                                className="text-sm lg:text-base font-semibold font-mulish text-gray-300 hover:text-white transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div></div>
    

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
        <div className="flex flex-col px-6 py-6 gap-2 overflow-y-auto h-full pb-20">
          {navData?.map((item, i) => (
            <div key={i} className="flex flex-col w-full border-b border-white/5 py-2">
              <div 
                onClick={() => item.subItems ? toggleMobileDropdown(i) : closeMobileMenu()}
                className="p-2 hover:text-gray-400 cursor-pointer text-white w-full text-lg font-mulish font-semibold flex justify-between items-center"
              >
                {item.subItems ? (
                  <span className="w-full flex justify-between items-center">
                    {item.name}
                    <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen === i ? 'rotate-180' : ''}`} />
                  </span>
                ) : (
                  <Link href={item.href || "#"} className="w-full">{item.name}</Link>
                )}
              </div>
              
              {item.subItems && mobileDropdownOpen === i && (
                <div className="pl-4 flex flex-col gap-2 mt-1 bg-white/5 p-3 rounded-lg transition-all">
                  {item.isMega ? (
                    item.subItems.map((group, gIdx) => (
                      <div key={gIdx} className="mb-2">
                        <p className="text-[10px] font-jb-mono text-gray-500 uppercase tracking-wider mb-1">{group.title}</p>
                        {group.links.map((subLink, sIdx) => (
                          <Link key={sIdx} href={subLink.href || "#"} onClick={closeMobileMenu} className="text-sm font-mulish text-gray-400 hover:text-white py-1 block">
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    ))
                  ) : (
                    item.subItems.map((subItem, subIdx) => (
                      <Link key={subIdx} href={subItem.href || "#"} onClick={closeMobileMenu} className="text-sm font-mulish text-gray-400 hover:text-white py-1 block">
                        {subItem.name}
                      </Link>
                    ))
                  )}
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