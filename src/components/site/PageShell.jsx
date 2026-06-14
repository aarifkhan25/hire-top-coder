"use client"
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Nav, ScrollProgress } from "./Nav.jsx";
import { Footer } from "./Footer.jsx";
import Link from "next/link";
import {
  LuArrowRight
} from "react-icons/lu";

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
     <Link href={href} className={`group inline-flex items-center gap-2 expert-btn text-[#381385] font-bold tracking-tight rounded-full px-4 py-2  md:px-8 md:py-4 font-[8px] md:text-[15px] 1xl:text-lg ${className}`}>
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
      className={`inline-flex items-center gap-2 btn-glass text-white font-bold tracking-tight rounded-full px-4 py-2  md:px-8 md:py-4 font-[8px] md:text-[15px]  1xl:text-lg ${className}`}
    >
      {children}
    </Link>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  align = "center",
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "text-center mx-auto" : "text-left"}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-4 font-bold`}
      >
        <span className="size-1 rounded-full bg-primary" /> {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-5xl font-extrabold leading-[1.05]"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 text-foreground/75 text-lg font-medium"
        >
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
