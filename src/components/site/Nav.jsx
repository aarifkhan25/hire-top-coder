"use client"
import  Link  from "next/link";
import {HiBars3 } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
import Image from "next/image"
const navLinks = [
  { to: "/hire", label: "Hire" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Resources" },
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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
   
  
  const toggleMobileMenu = () => {
    setOpen(!open);
   
  };

  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 px-4 sm:px-6 transition-all duration-500 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <nav
        className={`mx-auto max-w-7xl flex items-center justify-between rounded-full transition-all duration-500 ${
          scrolled
            ? "glass px-5  shadow-[0_8px_40px_-12px_oklch(0.62_0.26_305/0.5)]"
            : "px-1 "
        }`}
      >
        <div
         
          className="flex items-center "
        >
         <Link href="/" >
                    <Image 
                      width={500} 
                      height={500} 
                      src="/assets/logo1.png" 
                      alt="logo" 
                   
                      className=" w-[110px] h-[50px] lg:w-[130px] lg:h-[80px] hover:opacity-80 cursor-pointer object-contain" 
                    />
                  </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm  lg:text-lg font-bold text-foreground/85">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className="relative hover:text-white transition group"
              activeprops={{ className: "text-white" }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link href="/auth/login" className="hidden sm:inline-flex text-sm lg:text-lg font-bold px-5 py-2.5 rounded-full btn-glass text-white">
            Sign In
          </Link>
          <Link
            href="/starthiring"
            className="inline-flex items-center gap-1.5 text-sm lg:text-lg font-bold bg-white text-black rounded-full px-4 py-2 md:px-5 md:py-2.5 hover:bg-white/90 transition shadow-lg"
          >
            Start Hiring
          </Link>
          <button
            className="md:hidden grid place-items-center size-10 rounded-full btn-glass text-white cursor-pointer"
            
            aria-label="Menu"
          >
 {open ? (
                      <MdOutlineClose onClick={toggleMobileMenu} className="w-6 h-6" />
                    ) : (
                      <FiAlignJustify onClick={toggleMobileMenu} className="w-6 h-6" />
                    )}          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl mt-2 glass rounded-2xl p-4 flex flex-col gap-2">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-foreground/85 hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
