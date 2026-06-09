"use client"
import Link from "next/link";
import { LuSparkles, LuMail, LuGlobe } from "react-icons/lu";
import Image from "next/image"
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
      { to: "/about", label: "Careers" },
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
    <footer className="relative border-t border-border/40 px-4 sm:px-6 pt-20 pb-10 mt-10 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2">
            <div
         
          className="flex items-center "
        >
         <Link href="/" >
                    <Image 
                      width={500} 
                      height={500} 
                      src="/assets/logo1.png" 
                      alt="logo" 
                   laoding="lazy"
                      className=" w-[110px] h-[50px] lg:w-[120px] lg:h-[60px] 1xl:w-[130px] 1xl:h-[80px]  cursor-pointer object-contain" 
                    />
                  </Link>
        </div>

            <p className="mt-4 text-foreground/65 text-sm max-w-xs font-medium">
              The curated marketplace where ambitious teams meet elite digital experts.
            </p>
            <div className="mt-6 flex gap-2">
              {[LuSparkles, LuMail, LuGlobe].map((Icon, i) => (
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
              <ul className="space-y-3 text-sm 1xl:text-base text-foreground/75 font-medium">
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
        <div className="pt-8 border-t border-border/40 flex flex-wrap items-center justify-between gap-4 text-sm text-foreground/60 font-medium">
          <div>© 2026 hire top coder. Crafted for the elite.</div>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">
            Built with obsession.
          </div>
        </div>
      </div>
    </footer>
  );
}
