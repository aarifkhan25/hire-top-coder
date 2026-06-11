"use client"
import Link from "next/link";
import { HiSparkles, HiEnvelope, HiOutlineGlobeAlt } from "react-icons/hi2";
import Image from "next/image"

import { AiOutlineSend } from "react-icons/ai";
const cols = [
  {
    title: "Platform",
    links: [
      { to: "/hire", label: "Hire Experts" },
      { to: "/work", label: "Selected Work" },
      { to: "/resources", label: "Resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/careers", label: "Careers" },
      { to: "/about", label: "Press" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy" },
      { to: "/terms", label: "Terms" },
      { to: "/cookies", label: "Cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 pt-10 md:pt-20  bg-[#0A0A0A] overflow-hidden">
      <div className="" />
      <div className="relative w-full">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2">
            <div
         
          className="flex items-start "
        >
         <Link href="/" >
                    <Image 
                      width={500} 
                      height={500} 
                      src="/assets/logo1.png" 
                      alt="logo" 
            loading="eager"
                      className=" w-[110px] h-[50px] lg:w-[120px] lg:h-[60px] 1xl:w-[130px] 1xl:h-[80px] 2xl:w-[150px] 2xl:h-[100px] cursor-pointer object-contain" 
                    />
                  </Link>
        </div>

            <p className="mt-4 text-foreground/65 text-sm max-w-xs font-medium">
              Elite technical talent for the world's most
innovative companies. Fast, reliable, and
premium.
            </p>
            <div className="mt-6 flex gap-2">
              {[HiSparkles, HiEnvelope, HiOutlineGlobeAlt].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-10 grid place-items-center rounded-full btn-glass text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs 1xl:text-sm font-mono uppercase tracking-[0.25em] text-primary font-bold mb-4">
                {c.title}
              </div>
              <ul className="space-y-4 text-sm 1xl:text-[17px] text-foreground/75 font-medium">
                {c.links.map((l, i) => (
                  <li key={i}>
                    <Link href={l.to} className="hover:text-white transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mb-10" >
              <div className="text-xs 1xl:text-sm font-mono uppercase tracking-[0.25em] text-primary font-bold mb-4">
        Newsletter
              </div>
        <p className="mt-4 text-foreground/65 text-sm max-w-xs font-medium">
              Get the latest technical insights delivered
weekly.
            </p>
            <div className=" w-full md:w-[60%]">
        
        {/* Form Container */}
        <form  className="relative mt-4 flex items-center w-full group">
          
          {/* Input Box */}
          <input
       
           
       
            placeholder="Email address"
            required
        
            className="w-full bg-[#110e1b] text-white text-[15px] sm:text-[16px] placeholder-[#4f4b66] pl-6 pr-20 py-4 rounded-[14px] border border-[oklch(0.62_0.26_305/0.15)] outline-none transition-all duration-300 focus:border-[#583794] focus:shadow-[0_0_15px_rgba(88,55,148,0.2)] disabled:opacity-60"
          />

          {/* Connected Button on Right Side */}
          <button
            type="submit"
          
            aria-label="Subscribe to newsletter"
            className="absolute right-[2px] top-[2px] bottom-[2px] px-5 bg-[#cebdff] hover:bg-[#b39df7] active:scale-95 text-[#2e1d4d] font-semibold rounded-r-[12px] flex items-center justify-center transition-all duration-200 disabled:opacity-50 h-[calc(100%-4px)]"
          >
          
           
              <AiOutlineSend className="text-xl lg:text-3xl transform rotate-0" />
         
          </button>
        </form>

        {/* Success / Error Messages Handler */}
       
      </div>
        </div>
        <div className="pt-8 border-t-2  border-gray-800 flex flex-wrap items-center justify-between gap-4 text-sm text-foreground/60 font-medium">
          <div>© 2026 hire top coder. Crafted for the elite.</div>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">
            Built with obsession.
          </div>
        </div>
      </div>
    </footer>
  );
}
