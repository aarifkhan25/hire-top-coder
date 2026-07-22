"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import {
  LuArrowRight
} from "react-icons/lu";
import { Footer } from "./Footer.jsx";
import { Nav, ScrollProgress } from "./Nav.jsx";
import { Reveal } from "./Reveal.jsx";
export function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-black text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Nav />
      <motion.main
        initial={{ opacity: 0, filter: "blur(14px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}

export function PrimaryButton({
  children,
  className = "",
  href="/",
  ...rest
}) {
  return (
     <Link href={href} className={`group inline-flex items-center gap-2 expert-btn text-[#381385] font-bold tracking-tight rounded-full px-3 py-2 md:px-6 md:py-3  lg:px-8 lg:py-4 text-xs md:text-[15px] lg:text-base 1xl:text-lg  2xl:text-[22px] ${className}`}>
      {children}
      <LuArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
    </Link >
  );
}

export function GhostButton({
  href="/",
  children,
  className = "",
  ...rest
}) {
  return (
    <Link href={href}
      {...rest}
      className={`group inline-flex items-center gap-2 btn-glass text-white font-bold tracking-tight rounded-full px-3 py-2 md:px-6 md:py-3  lg:px-8 lg:py-4 text-xs md:text-[15px] lg:text-base  1xl:text-lg 2xl:text-[22px] ${className}`}
    >
      {children}      <LuArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />

    </Link>
  );
}

 export function SectionHead({ eyebrow, title, sub }) {
  return (
   
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        
        className="inline-flex items-center gap-2 text-[8px] md:text-[10px] lg:text-xs 2xl:text-sm font-sans uppercase tracking-[0.25em] text-primary mb-2 xl:mb-4 font-bold">
          <span className="size-1 rounded-full bg-primary" /> {eyebrow}
        </motion.div>
        < motion.h2
        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
         className="text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.05]">
          {title}
        </motion.h2>
        {sub && (
          <motion.p initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
           className="mt-3 xl:mt-4 text-foreground/75 text-xs md:text-base lg:text-xl  font-normal">
            {sub}
          </motion.p>
        )}
      </div>
    
  );
}

export function AmbientGlow() {
  return (
    <>
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-1/2 -translate-x-1/2 size-[800px] rounded-full bg-primary/25 blur-[160px] pointer-events-none"
      />
      <div className="absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)] pointer-events-none" />
    </>
  );
}
export  function CTA({title,des,btn1name,btn1href,btn2name,btn2href}) {
  return (
    <section className="relative  px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 py-10 lg:py-20    ">
      <Reveal>
        <div className="mx-auto max-w-5xl relative rounded-3xl glass p-6 sm:p-8 md:p-12 lg:p-16 text-center overflow-hidden glow-purple-strong">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-primary/30 blur-[120px]" />
          <div className="relative">
            <h2 className="text-[26px] md:text-4xl lg:text-5xl font-bold sm:font-extrabold leading-tight">
{title}
            </h2>
            {des && <p className="mt-3 md:mt-5 text-foreground/80 max-w-xl mx-auto font-normal text-xs md:text-sm lg:text-base 1xl:text-xl ">
            {des}
            </p> }
            <div className="mt-5 md:mt-9 flex flex-wrap gap-3 justify-center">
             {btn1name && <PrimaryButton href={btn1href} >{btn1name}</PrimaryButton>}
             {btn2name && <GhostButton href={btn2href} >{btn2name}</GhostButton>}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
