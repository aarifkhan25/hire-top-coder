"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1];

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  as: As = "div",
}) {
  const MotionTag = motion.create(As);
  return (
    <MotionTag
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease, delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function Stagger({
  children,
  className = "",
  delay = 0.05,
}) {
  const v = {
    hidden: {},
    show: { transition: { staggerChildren: delay, delayChildren: 0.05 } },
  };
  return (
    <motion.div
      variants={v}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  y = 24,
}) {
  const v = {
    hidden: { opacity: 0, y, filter: "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease } },
  };
  return (
    <motion.div variants={v} className={className}>
      {children}
    </motion.div>
  );
}

export function WordReveal({
  text,
  className = "",
}) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease, delay: i * 0.06 }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Parallax({
  children,
  speed = 60,
  className = "",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export function TiltCard({
  children,
  className = "",
}) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.35s cubic-bezier(.2,.8,.2,1)" }}
      className={`relative ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), oklch(0.62 0.26 305 / 0.25), transparent 60%)",
        }}
      />
      {children}
    </div>
  );
}
