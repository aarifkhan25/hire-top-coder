"use client"
import { ArrowRight, Check, ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  sub,
  children,
}) {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl text-center">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-primary font-bold mb-5">
            <span className="size-1 rounded-full bg-primary" /> {eyebrow}
          </div>
        )}
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            {title}
          </h1>
        </Reveal>
        {sub && (
          <Reveal delay={0.1}>
            <p className="mt-6 text-foreground/70 text-lg max-w-2xl mx-auto font-medium">
              {sub}
            </p>
          </Reveal>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
}) {
  return (
    <section className={`relative px-6 py-20 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  sub,
}) {
  return (
    <div className="text-center mb-14">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-primary font-bold mb-4">
          <span className="size-1 rounded-full bg-primary" /> {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h2>
      {sub && (
        <p className="mt-4 text-foreground/65 text-lg max-w-2xl mx-auto font-medium">
          {sub}
        </p>
      )}
    </div>
  );
}

export function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`rounded-[10px] bg-[#141418] border border-white/[0.07] p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export function PurplePill({ children }) {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] text-primary bg-primary/10 border border-primary/20">
      {children}
    </span>
  );
}

export function FAQ({
  items,
}) {
  const [open, setOpen] = useState(0);
  return (
    <div className="max-w-3xl mx-auto divide-y divide-white/[0.07] rounded-[10px] bg-[#0d0d0d] border border-white/[0.07]">
      {items.map((item, i) => (
        <div key={i} className="px-6">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left text-white font-medium"
          >
            <span>{item.q}</span>
            <ChevronDown
              className={`size-4 text-primary transition-transform ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <p className="pb-5 text-foreground/65 text-[15px] leading-relaxed">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export function CTABanner({
  title = "Ready to get started?",
  sub = "Talk to a vetted expert today and ship faster.",
  ctaLabel = "Talk to Expert",
  to = "/contact",
}) {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-5xl relative rounded-2xl bg-[#0d0d0d] border border-primary/30 p-10 md:p-14 overflow-hidden shadow-[0_0_60px_-10px_oklch(0.62_0.26_305/0.35)]">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-primary/20 blur-[140px] pointer-events-none" />
        <div className="relative text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h3>
          <p className="mt-3 text-foreground/65 max-w-xl mx-auto">{sub}</p>
          <Link
            href={to}
            className="mt-8 inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-white/90 transition"
          >
            {ctaLabel} <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumb({ items }) {
  return (
    <div className="text-sm text-foreground/45 mb-6">
      {items.map((it, i) => (
        <span key={i}>
          {it.to ? (
            <Link href={it.to} className="hover:text-white transition">
              {it.label}
            </Link>
          ) : (
            <span className="text-foreground/70">{it.label}</span>
          )}
          {i < items.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </div>
  );
}

export function ComparisonTable({
  headers,
  rows,
}) {
  return (
    <div className="overflow-hidden rounded-[10px] border border-white/[0.07] bg-[#0d0d0d]">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/[0.07] bg-white/[0.02]">
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-5 py-4 text-left text-[11px] font-mono uppercase tracking-[0.2em] text-primary font-bold"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-white/[0.05] last:border-0">
              {row.map((cell, ci) => (
                <td key={ci} className="px-5 py-4 text-foreground/80">
                  {typeof cell === "boolean" ? (
                    cell ? (
                      <Check className="size-4 text-primary" />
                    ) : (
                      <X className="size-4 text-foreground/30" />
                    )
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Stepper({
  steps,
}) {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {steps.map((s, i) => (
        <Reveal key={i} delay={i * 0.08}>
          <Card className="h-full">
            <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center text-primary font-bold mb-4">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="text-white font-medium mb-2">{s.title}</div>
            <div className="text-foreground/55 text-[13px] leading-relaxed">{s.desc}</div>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

export function StatGrid({
  stats,
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <Card key={i} className="text-center">
          <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {s.value}
          </div>
          <div className="mt-2 text-[12px] uppercase tracking-[0.15em] text-foreground/50 font-mono">
            {s.label}
          </div>
        </Card>
      ))}
    </div>
  );
}

export function ProfileCard({
  name,
  role,
  years,
  tags,
  rating = 4.9,
}) {
  const initial = name.charAt(0);
  return (
    <Card className="group hover:border-primary/30 transition">
      <div className="flex items-center gap-3 mb-4">
        <div className="size-12 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-white font-bold">
          {initial}
        </div>
        <div>
          <div className="text-white font-medium text-[15px]">{name}</div>
          <div className="text-foreground/50 text-[12px]">{role}</div>
        </div>
      </div>
      <div className="flex items-center gap-3 text-[12px] text-foreground/60 mb-4">
        <span>{years}y exp</span>
        <span className="text-foreground/30">•</span>
        <span className="text-primary">★ {rating}</span>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-foreground/70"
          >
            {t}
          </span>
        ))}
      </div>
      <button className="w-full text-[13px] font-bold py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white hover:bg-white/[0.08] transition">
        View Profile
      </button>
    </Card>
  );
}
