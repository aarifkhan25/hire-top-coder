"use client"
import {
  Activity,
  ArrowRight,
  Atom,
  Building2,
  Calendar,
  CheckCircle2,
  ClipboardList,
  Cloud,
  Code2,
  CreditCard,
  Database,
  FileBarChart2,
  FileSignature,
  FileText,
  Flame,
  GraduationCap,
  Home,
  Layers,
  LayoutDashboard,
  LogIn,
  MessageCircle,
  MessageSquare,
  PieChart,
  Quote as QuoteIcon,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  User,
  UserPlus,
  Users,
  Wrench,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CountUp, Reveal } from "./CaseReveal.jsx";

const ICONS = {
  home: Home,
  "log-in": LogIn,
  shield: ShieldCheck,
  "shield-check": ShieldCheck,
  "graduation-cap": GraduationCap,
  user: User,
  users: Users,
  calendar: Calendar,
  "credit-card": CreditCard,
  trendingup: TrendingUp,
  "trending-up": TrendingUp,
  checkcircle: CheckCircle2,
  "check-circle": CheckCircle2,
  cloud: Cloud,
  code: Code2,
  database: Database,
  flame: Flame,
  server: Server,
  smartphone: Smartphone,
  sparkles: Sparkles,
  wrench: Wrench,
  zap: Zap,
  layers: Layers,
  activity: Activity,
  "message-circle": MessageCircle,
  "message-square": MessageSquare,
  "layout-dashboard": LayoutDashboard,
  "file-bar-chart-2": FileBarChart2,
  "file-text": FileText,
  "file-signature": FileSignature,
  rocket: Rocket,
  "clipboard-list": ClipboardList,
  building2: Building2,
  "user-plus": UserPlus,
  "pie-chart": PieChart,
};



export function Section({
  label,
  heading,
  children,
  className = "",
  id,
}) {
  return (
    <section id={id} className={`w-full py-28 2xl:py-35 ${className}`}>
      {label && (
        <Reveal>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {label}
          </div>
        </Reveal>
      )}
      {heading && (
        <Reveal delay={80}>
          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-4xl">
            {heading}
          </h2>
        </Reveal>
      )}
      <Reveal delay={140}>
        <div className="mt-10">{children}</div>
      </Reveal>
    </section>
  );
}

export function Breadcrumb({ current }) {
  return (
    <div className="w-full  pt-30 text-[13px] text-muted-foreground">
      <Link href="/" className="hover:text-accent">Home</Link>
      <span className="mx-2 opacity-50">/</span>
      <Link href="/case-studies/speakable" className="hover:text-accent">Case Studies</Link>
      <span className="mx-2 opacity-50">/</span>
      <span className="text-foreground/80">{current}</span>
    </div>
  );
}

export function InfoRow({
  items,
}) {
  return (
    <div className="mt-10 grid grid-cols-2 divide-y divide-border border-y border-border md:grid-cols-4 md:divide-x md:divide-y-0">
      {items.map((it, i) => (
        <Reveal key={it.label} delay={i * 80}>
          <div className=" py-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {it.label}
            </div>
            <div className="mt-2 text-sm text-foreground">{it.value}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Hero({
  category,
  title,
  subtitle,
  image,
  imageAlt,
  info,
}) {
  return (
    <section className="relative w-full  pt-10 pb-20">
      {/* ambient purple glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(167,139,250,0.35), rgba(124,58,237,0.18) 40%, transparent 70%)",
        }}
      />
      <Reveal>
        <span className="pill-accent inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]">
          <Sparkles size={12} /> {category}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
          <span className="bg-gradient-to-r from-white via-white to-[#c4b5fd] bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
      </Reveal>
      <Reveal delay={140}>
        <p className="mt-5 max-w-3xl text-lg text-body">{subtitle}</p>
      </Reveal>
      <InfoRow items={info} />
      <Reveal delay={200}>
        <div className="glow-border mt-12 overflow-hidden rounded-2xl">
           <Image width={500} height={500}
            src={image}
            alt={imageAlt}
            className="aspect-video w-full object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}

function parseStat(s) {
  const m = s.match(/^([^\d-]*)(-?\d+(?:\.\d+)?)(.*)$/);
  if (!m) return { num: null, prefix: "", suffix: "" };
  return { num: parseFloat(m[2]), prefix: m[1], suffix: m[3] };
}

export function StatGrid({
  items,
}) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map((s, i) => {
        const Icon = typeof s.icon === "string"
          ? ICONS[s.icon.toLowerCase()] ?? TrendingUp
          : s.icon ?? TrendingUp;
        const parsed = parseStat(s.stat);
        return (
          <Reveal key={s.label} delay={i * 90}>
            <div className="glass-card glass-card-hover group relative h-full overflow-hidden rounded-2xl p-6">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-50 blur-2xl transition group-hover:opacity-80"
                style={{
                  background:
                    "radial-gradient(circle, rgba(167,139,250,0.45), transparent 70%)",
                }}
              />
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                <Icon size={16} />
              </div>
              <div className="text-3xl font-bold tracking-tight text-accent md:text-4xl">
                {parsed.num !== null && Number.isInteger(parsed.num) && parsed.num <= 9999 ? (
                  <CountUp value={parsed.num} prefix={parsed.prefix} suffix={parsed.suffix} />
                ) : (
                  s.stat
                )}
              </div>
              <div className="mt-2 text-sm text-body">{s.label}</div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export function FeatureGrid({
  items,
}) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((f, i) => {
        const Icon = typeof f.icon === "string"
          ? ICONS[f.icon.toLowerCase()] ?? CheckCircle2
          : f.icon ?? CheckCircle2;
        return (
          <Reveal key={f.title} delay={(i % 3) * 100}>
            <div className="glass-card glass-card-hover group relative h-full overflow-hidden rounded-2xl p-6">
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition duration-500 group-hover:opacity-60"
                style={{
                  background:
                    "radial-gradient(circle, rgba(167,139,250,0.5), transparent 70%)",
                }}
              />
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-gradient-to-br from-accent/25 to-accent/5 text-accent shadow-[0_0_30px_-5px_rgba(167,139,250,0.5)]">
                <Icon size={20} />
              </div>
              <div className="text-base font-semibold text-foreground">{f.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-body">{f.body}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

const TECH_ICONS = {
  react: Atom,
  "react.js": Atom,
  "node.js": Server,
  node: Server,
  mongodb: Database,
  postgres: Database,
  postgresql: Database,
  firebase: Flame,
  "flutter flow": Smartphone,
  flutter: Smartphone,
  aws: Cloud,
  gcp: Cloud,
  azure: Cloud,
  typescript: Code2,
  javascript: Code2,
};

export function TechStack({ items }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((t, i) => {
        const Icon = TECH_ICONS[t.toLowerCase()] ?? Wrench;
        return (
          <Reveal key={t} delay={i * 70}>
            <span className="glass-card glass-card-hover inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-foreground">
              <Icon size={14} className="text-accent" />
              {t}
            </span>
          </Reveal>
        );
      })}
    </div>
  );
}

export function Gallery({
  images,
  wide,
}) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {images.map((img, i) => (
          <Reveal key={img.alt} delay={(i % 2) * 120}>
            <div className="glass-card glass-card-hover group relative overflow-hidden rounded-2xl p-2">
              <div className="overflow-hidden rounded-xl">
                 <Image width={500} height={500}
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-3 py-3 text-xs text-muted-foreground">{img.alt}</div>
            </div>
          </Reveal>
        ))}
      </div>
      {wide && (
        <Reveal>
          <div className="glass-card glass-card-hover overflow-hidden rounded-2xl p-2">
            <div className="overflow-hidden rounded-xl">
               <Image width={500} height={500}
                src={wide.src}
                alt={wide.alt}
                className="aspect-[24/10] w-full object-cover"
              />
            </div>
            <div className="px-3 py-3 text-xs text-muted-foreground">{wide.alt}</div>
          </div>
        </Reveal>
      )}
    </div>
  );
}

const OUTCOME_ICONS = [TrendingUp, Zap, ShieldCheck, Sparkles, CheckCircle2, Flame];

export function OutcomeGrid({
  items,
}) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {items.map((it, i) => {
        const Icon = OUTCOME_ICONS[i % OUTCOME_ICONS.length];
        return (
          <Reveal key={it.title} delay={i * 120}>
            <div className="glass-card glass-card-hover group relative h-full overflow-hidden rounded-2xl p-7">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(circle at 100% 0%, rgba(167,139,250,0.18), transparent 50%)",
                }}
              />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/30 to-transparent text-accent shadow-[0_0_40px_-8px_rgba(167,139,250,0.8)]">
                  <Icon size={22} />
                </div>
                {it.metric && (
                  <div className="mt-5 text-3xl font-bold text-accent">{it.metric}</div>
                )}
                <div className="mt-3 text-lg font-semibold text-foreground">{it.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-body">{it.body}</p>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-accent/40 via-accent/10 to-transparent" />
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export function Quote({
  text,
  name,
  role,
  avatar,
}) {
  return (
    <section className="w-full py-28 2xl:py-35">
      <Reveal>
        <div className="glass-card relative overflow-hidden rounded-3xl p-10 md:p-14">
          <QuoteIcon
            className="absolute right-8 top-8 text-accent/20"
            size={80}
          />
          <p className="relative mt-4 max-w-3xl text-xl text-foreground/90 md:text-2xl">
            {text}
          </p>
          <div className="relative mt-8 flex items-center gap-4">
             <Image width={500} height={500}
              src={avatar}
              alt="Client avatar"
              className="h-12 w-12 rounded-full border border-accent/30 object-cover"
            />
            <div>
              <div className="text-sm font-semibold">{name}</div>
              <div className="text-xs text-muted-foreground">{role}</div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Related({
  items,
}) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {items.map((it, i) => (
        <Reveal key={it.title} delay={i * 100}>
          <a
            href={it.href}
            className="glass-card glass-card-hover group block overflow-hidden rounded-2xl"
          >
            <div className="overflow-hidden">
               <Image width={500} height={500}
                src={it.src}
                alt={it.alt}
                className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <div className="text-base font-semibold">{it.title}</div>
              <div className="mt-1 inline-flex items-center gap-1 text-xs text-accent">
                View case study <ArrowRight size={12} />
              </div>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

export function CTABanner() {
  return (
    <section className="w-full  py-28 2xl:py-35">
      <Reveal>
        <div className="glow-border glass-card relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse, rgba(167,139,250,0.4), transparent 70%)",
            }}
          />
          <h3 className="relative text-2xl font-bold md:text-4xl">
            Have a similar project in mind?
          </h3>
          <p className="relative mt-3 text-body">
            Let&apos;s discuss how we can bring it to life.
          </p>
          <a
            href="#contact"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-cta  py-3 text-sm font-semibold text-cta-foreground transition hover:opacity-90"
          >
            Talk to Expert <ArrowRight size={14} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
