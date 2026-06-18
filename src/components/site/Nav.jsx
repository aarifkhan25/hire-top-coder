"use client";
import { headerData } from "@/data/headerData";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiArrowRight as ArrowRight, FiAlignJustify, FiChevronDown } from "react-icons/fi";
import { MdOutlineClose, MdOutlineMarkEmailUnread, MdOutlinePhoneInTalk } from "react-icons/md";



const {navData}=headerData

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });
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
const pathname = usePathname()
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
              <MdOutlinePhoneInTalk className="w-5 h-5" />{" "}
              <p>+91 12345 67890</p>
            </div>
            <div className="flex justify-center items-center gap-2 hover:text-white text-xs lg:text-sm text-foreground/85">
              <MdOutlineMarkEmailUnread className="w-5 h-5" />{" "}
              <p>contact@hiretopcoder.com</p>
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
        <div className="flex justify-between items-center gap-10 lg:gap-20 text-xs lg:text-sm 1xl:text-lg font-bold text-foreground/85 w-full">
          <div className="flex justify-between items-center gap-10 lg:gap-20 text-xs lg:text-sm 1xl:text-lg font-bold text-foreground/85">
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

            {/* डेस्कटॉप मेनू */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6 static h-full">
              {navData?.map((item, i) => {
                const isActive = pathname === item.href || (item.columns && item.columns.some(col => col.links.some(link => link.href === pathname))) || (item.isResourcesTemplate && (pathname.startsWith("/resources") || pathname === "/faq"));
                return(<div
                  key={i}
                  onMouseEnter={() => setHoveredIndex(i)}
                  className="py-5"
                >
                  <Link
                    href={item.href || "/"}
                    data-aos="fade-down"
                    className={`relative   transition group flex items-center gap-1 text-sm lg:text-base 2xl:text-lg font-mulish font-semibold cursor-pointer `}
                  >
                    <span className={`${isActive ?"text-primary hover:text-gradient-purple":"hover:text-white text-foreground/85"} flex justify-center items-center gap-1`}>
                      {item.name}
                      {(item.columns || item.isResourcesTemplate) && (
                        <FiChevronDown
                          className={`w-3 h-3 transition-transform duration-200 ${hoveredIndex === i ? "rotate-180" : ""}`}
                        />
                      )}
                    </span>
                    <span className={`absolute -bottom-1 left-0 h-px w-0 ${isActive ?"bg-gray-400":"bg-gradient-to-r from-primary to-accent"}  transition-all duration-300 group-hover:w-full`} />
                  </Link>

                  <AnimatePresence>
                    {hoveredIndex === i &&
                      (item.columns || item.isResourcesTemplate) && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className={`fixed left-0 right-0 ${
                            isScrolled
                              ? "top-[63px] 2xl:top-[100px]"
                              : "top-[100px] 2xl:top-[120px]"
                          } w-full z-50 pointer-events-auto bg-[#0a0612]/95 backdrop-blur-md border-b border-white/10 px-6 sm:px-10 lg:px-15 1xl:px-20 2xl:pl-25 2xl:pr-130 py-10 overflow-hidden`}
                        >
                          {/* बैकग्राउंड ग्लो इफेक्ट */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow pointer-events-none z-0" />

                          <div className="relative w-full  z-10 text-left">
                            {/* 🛠️ कंडीशनल रेंडरिंग: नया स्पेशल Resources टेम्पलेट (As per resources.png) */}
                            {item.isResourcesTemplate ? (
                              <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 2xl:gap-15 items-stretch">
                                {/* 1. Left Section: Title + Delivery Models Links */}
                                <div className="flex flex-col w-full justify-start text-left">
                                  <div>
                                    <h3 className="text-xl 2xl:text-[22px] font-bold text-white tracking-tight font-mulish mb-2">
                                      {item.dropdownTitle}
                                    </h3>
                                    <p className="text-xs 2xl:text-sm text-gray-400 font-medium leading-relaxed font-mulish mb-8">
                                      {item.dropdownDesc}
                                    </p>
                                  </div>

                                  {/* एक्स्ट्रा सब-यूनिट: Delivery Models */}
                                  <div className="flex flex-col gap-10 mt-2">
                                    <h4 className="text-xs 2xl:text-sm font-semibold tracking-wider text-white uppercase font-sans">
                                      {item.leftSubTitle}
                                    </h4>
                                    <div className="flex flex-col gap-10">
                                      {item.leftLinks?.map((link, lIdx) => (
                                        <Link
                                          key={lIdx}
                                          href={link.href}
                                          onClick={() => setHoveredIndex(null)}
                                          className="flex items-start gap-5 group text-left w-full"
                                        >
 <div className="w-10 h-10 flex justify-center items-center shrink-0 border border-white/10 rounded-md bg-primary/10 transition-colors group-hover:border-primary" >

                                          <span className="text-2xl text-primary">{link.icon}</span>
                                          </div>                                          <div className="flex-1">
                                            <h5 className="text-sm 2xl:text-base font-semibold text-white group-hover:text-primary transition-colors font-mulish leading-tight">
                                              {link.name}
                                            </h5>
                                            <p className="text-xs 2xl:text-sm text-gray-400 mt-1 font-medium group-hover:text-white">
                                              {link.desc}
                                            </p>
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                {/* 2. Middle Section: LEARN Column */}
                                {item.columns?.map((col, colIdx) => (
                                  <div
                                    key={colIdx}
                                    className="flex flex-col gap-10 text-left w-full"
                                  >
                                    <h4 className="text-xs 2xl:text-sm font-semibold tracking-wider text-white uppercase font-sans">
                                      {col.title}
                                    </h4>
                                    <div className="flex flex-col gap-10">
                                      {col.links?.map((link, linkIdx) => (
                                        <Link
                                          key={linkIdx}
                                          href={link.href}
                                          onClick={() => setHoveredIndex(null)}
                                          className="flex items-start gap-5 group text-left w-full"
                                        >
                                          
                                          <div className="w-10 h-10 flex justify-center items-center shrink-0 border border-white/10 rounded-md bg-primary/10 transition-colors group-hover:border-primary" >

                                          <span className="text-2xl text-primary">{link.icon}</span>
                                          </div>
                                          <div className="flex-1">
                                            <h5 className="text-sm 2xl:text-base font-semibold text-white group-hover:text-primary transition-colors font-mulish leading-tight">
                                              {link.name}
                                            </h5>
                                            <p className="text-xs 2xl:text-sm text-gray-400 mt-1 font-medium group-hover:text-white">
                                              {link.desc}
                                            </p>
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}

                                {/* 3. Right Section: PROOF AND COMPARISION 2x2 Grid (Takes 2 Columns of layout) */}
                                <div className="lg:col-span-2 flex flex-col gap-5 w-full">
                                  <h4 className="text-xs 2xl:text-sm font-semibold tracking-wider text-white uppercase font-sans">
                                    {item.proofSection.title}
                                  </h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                                    {item.proofSection.cards?.map(
                                      (card, cIdx) => (
                                        <div
                                          key={cIdx}
                                          className="bg-black border border-[oklch(0.62_0.26_305/0.15)] rounded-[8px] p-5 flex flex-col justify-between items-start text-left min-h-[160px]  transition-all group"
                                        >
                                          <div className="w-full">
                                            <span className="text-[10px] 2xl:text-xs font-bold text-primary tracking-wider uppercase block mb-1">
                                              {card.tag}
                                            </span>
                                            <h4 className="text-sm 2xl:text-base font-semibold text-white leading-snug font-mulish mb-2 ">
                                              {card.title}
                                            </h4>
                                            {card.meta && (
                                              <p className="text-xs 2xl:text-sm text-gray-500 font-medium font-sans flex items-center gap-1.5 ">
                                                {card.meta}
                                              </p>
                                            )}
                                          </div>
                                          <Link
                                            href={card.href}
                                            className="text-[11px] 2xl:text-xs  font-bold text-primary hover:underline mt-4 inline-block"
                                          >
                                            Read case study
                                          </Link>
                                        </div>
                                      ),
                                    )}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              /* 🌟 पुराने ऑप्शंस (Services & Hire Developers) का मूल 4-कॉलम लेआउट सुरक्षित */
                              <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 2xl:gap-15 items-stretch">
                                <div className="border-r border-white/10 pr-10 2xl:pr-5 flex flex-col w-full text-left">
                                  <div>
                                    <h3 className="text-xl 2xl:text-[22px] font-bold text-white tracking-tight font-mulish mb-1">
                                      {item.dropdownTitle}
                                    </h3>
                                    <p className="text-xs 2xl:text-sm text-gray-400 hover:text-white font-medium leading-relaxed font-mulish mb-6">
                                      {item.dropdownDesc}
                                    </p>
                                  </div>

                                  {item.featuredCard && (
                                    <div className="bg-black border border-[oklch(0.62_0.26_305/0.15)] rounded-[8px] p-4 flex flex-col gap-2.5 text-left">
                                      <span className="text-[10px] 2xl:text-xs font-bold text-primary tracking-wider uppercase">
                                        {item.featuredCard.tag}
                                      </span>
                                      <h4 className="text-sm 2xl:text-base font-semibold text-white leading-snug font-mulish">
                                        {item.featuredCard.title}
                                      </h4>
                                      <p className="text-xs 2xl:text-sm text-gray-400 font-medium font-sans">
                                        {item.featuredCard.desc}
                                      </p>
                                      <Link
                                        href={item.featuredCard.href}
                                        className="text-[11px] 2xl:text-xs font-bold text-primary hover:underline mt-2 inline-block"
                                      >
                                        {item.featuredCard.actionText}
                                      </Link>
                                    </div>
                                  )}
                                </div>

                                {item.columns?.map((col, colIdx) => (
                                  <div
                                    key={colIdx}
                                    className="flex flex-col gap-10 text-left w-full"
                                  >
                                    <h4 className="text-xs 2xl:text-sm font-semibold tracking-wider text-white/90 uppercase font-sans">
                                      {col.title}
                                    </h4>

                                    {col.title === "Hire By Technology" ? (
                                      <div className="flex md:mt-3 1xl:mt-0 gap-10">
                                        <div className="flex flex-col gap-10">
                                          {col?.links?.map((link, linkIdx) => (
                                            <Link
                                              key={linkIdx}
                                              href={link.href}
                                              onClick={() =>
                                                setHoveredIndex(null)
                                              }
                                              className="flex  items-center gap-3 group text-left"
                                            >
                                             <div className="w-10 h-10 flex justify-center items-center shrink-0 border border-white/10 rounded-md bg-primary/10 transition-colors group-hover:border-primary" >

                                          <span className="text-2xl text-primary">{link.icon}</span>
                                          </div>
                                              <div>
                                                <h5 className="text-sm 2xl:text-base font-semibold text-white group-hover:text-primary transition-colors font-mulish">
                                                  {link.name}
                                                </h5>
                                                
                                              </div>
                                            </Link>
                                          ))}
                                        </div>
                                        <div className="flex flex-col gap-10">
                                          {col?.links1?.map((link, linkIdx) => (
                                            <Link
                                              key={linkIdx}
                                              href={link.href}
                                              onClick={() =>
                                                setHoveredIndex(null)
                                              }
                                              className="flex items-center gap-3 group text-left"
                                            >
                                             <div className="w-10 h-10 flex justify-center items-center shrink-0 border border-white/10 rounded-md bg-primary/10 transition-colors group-hover:border-primary" >

                                          <span className="text-2xl text-primary">{link.icon}</span>
                                          </div>
                                              <div>
                                                <h5 className="text-sm 2xl:text-base font-semibold text-white group-hover:text-primary transition-colors font-mulish">
                                                  {link.name}
                                                </h5>
                                              </div>
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="flex flex-col gap-10">
                                        {col.links?.map((link, linkIdx) => (
                                          <Link
                                            key={linkIdx}
                                            href={link.href}
                                            onClick={() =>
                                              setHoveredIndex(null)
                                            }
                                            className="flex items-center gap-3 group text-left"
                                          >
                                           <div className="w-10 h-10 flex justify-center items-center shrink-0 border border-white/10 rounded-md bg-primary/10 transition-colors group-hover:border-primary" >

                                          <span className="text-2xl text-primary">{link.icon}</span>
                                          </div>
                                            <div>
                                              <h5 className="text-sm 2xl:text-base font-semibold text-white group-hover:text-primary transition-colors font-mulish">
                                                {link.name}
                                              </h5>
                                              <p className="text-xs 2xl:text-sm text-gray-400 mt-0.5 font-medium group-hover:text-white">
                                                {link.desc}
                                              </p>
                                            </div>
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </div>
              )})}
            </div>
          </div>
          {/* राइट साइड बटन्स */}
          <div data-aos="fade-down" className="flex items-center gap-2">
            <Link
              href="/signin"
              className="hidden group sm:inline-flex items-center gap-2 text-sm lg:text-base 2xl:text-lg font-bold px-5 py-2 rounded-full expert-btn text-[#381385]"
            >
              Talk to Expert{" "}
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              className="md:hidden grid place-items-center size-10 rounded-full btn-glass text-white cursor-pointer"
              aria-label="Menu"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <MdOutlineClose className="w-6 h-6" />
              ) : (
                <FiAlignJustify className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* मोबाइल रेस्पॉन्सिव ओवरले */}
      <div
        className={`md:hidden fixed inset-0 top-[50px] h-[calc(100vh-50px)] w-full bg-black/95 backdrop-blur-md z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-2 overflow-y-auto h-full pb-20 text-left">
          {navData?.map((item, i) => (
            <div
              key={i}
              className="flex flex-col w-full border-b border-white/5 py-2 text-left"
            >
              <div
                onClick={() =>
                  item.columns || item.isResourcesTemplate
                    ? toggleMobileDropdown(i)
                    : closeMobileMenu()
                }
                className="p-2 hover:text-gray-400 cursor-pointer text-white w-full text-lg font-mulish font-semibold flex justify-between items-center text-left"
              >
                {item.columns || item.isResourcesTemplate ? (
                  <span className="w-full flex justify-between items-center text-left">
                    {item.name}
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen === i ? "rotate-180" : ""}`}
                    />
                  </span>
                ) : (
                  <Link href={item.href || "#"} className="w-full text-left">
                    {item.name}
                  </Link>
                )}
              </div>

              {/* मोबाइल सब-मेन्यू */}
              {(item.columns || item.isResourcesTemplate) &&
                mobileDropdownOpen === i && (
                  <div className="pl-4 flex flex-col gap-2 mt-1 bg-white/5 p-3 rounded-lg transition-all text-left">
                    {item.isResourcesTemplate ? (
                      <>
                        <p className="text-[10px] font-sans text-gray-500 uppercase tracking-wider font-bold mb-1">
                          Delivery Models
                        </p>
                        {item.leftLinks?.map((link, lIdx) => (
                          <Link
                            key={lIdx}
                            href={link.href}
                            onClick={closeMobileMenu}
                            className="text-sm font-mulish text-gray-400 hover:text-white py-1 block pl-2"
                          >
                            {link.name}
                          </Link>
                        ))}
                        <p className="text-[10px] font-sans text-gray-500 uppercase tracking-wider font-bold mt-2 mb-1">
                          Learn
                        </p>
                        {item.columns[0].links?.map((link, lIdx) => (
                          <Link
                            key={lIdx}
                            href={link.href}
                            onClick={closeMobileMenu}
                            className="text-sm font-mulish text-gray-400 hover:text-white py-1 block pl-2"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </>
                    ) : (
                      item.columns?.map((col, cIdx) => (
                        <div key={cIdx} className="mb-3 text-left">
                          <p className="text-[10px] font-sans text-gray-500 uppercase tracking-wider font-bold mb-1">
                            {col.title}
                          </p>
                          {col.links?.map((link, lIdx) => (
                            <Link
                              key={lIdx}
                              href={link.href}
                              onClick={closeMobileMenu}
                              className="text-sm font-mulish text-gray-400 hover:text-white py-1 block pl-2"
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      ))
                    )}
                  </div>
                )}
            </div>
          ))}
          <Link
            href="/starthiring"
            onClick={closeMobileMenu}
            className="mt-6 sm:hidden bg-white text-black font-bold text-center py-2.5 px-6 rounded-full text-base cursor-pointer"
          >
            Talk To Expert
          </Link>
        </div>
      </div>
    </header>
  );
}
