"use client"
import { PrimaryButton } from "@/components/site/PageShell.jsx";

import {
  Activity,
  ArrowDownUp,
  ArrowRight,
  Atom,
  Bot,
  Brain,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChessQueen,
  ChevronDown,
  ClipboardList,
  Cloud,
  Code2,
  CreditCard,
  Database,
  FileBarChart2,
  FileSignature,
  FileText,
  Flame,
  Gem,
  GraduationCap,
  Home,
  Layers,
  LayoutDashboard,
  LogIn,
  MapPinCheck,
  Megaphone,
  MessageCircle,
  MessageSquare,
  Motorbike,
  Palette,
  PieChart,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  User,
  UserPlus,
  Users,
  Video,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { CountUp } from "./CaseReveal.jsx";
import { Reveal } from "./Reveal";
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
  "tailwind css":Palette,
};

const ICONS = {
  home: Home,
  "log-in": LogIn,
  shield: ShieldCheck,
  "shield-check": ShieldCheck,
  "graduation-cap": GraduationCap,
  "user": User,
  users: Users,
  calendar: Calendar,
  search: Search,
  swap: ArrowDownUp,
  "mappin-check": MapPinCheck,
"primium": Gem,
"game":ChessQueen,
"brain":Brain,
"chat bot":Bot,
"ads": Megaphone,
"filter-rides":Motorbike,
"video-call":Video,
  "credit-card": CreditCard,
  trendingup: TrendingUp,
  "trending-up": TrendingUp,
  checkcircle: CheckCircle2,
  "check-circle": CheckCircle2,
  "users": User,
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
  "building2": Building2,
  "user-plus": UserPlus,
  "pie-chart": PieChart,
};
export function PageHero({
  eyebrow,
  title,
  sub,
  children,
}) {
  return (
    <section className="relative py-10 md:py-20  overflow-hidden">
      <div className="absolute  md:top-20 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
      <div className="relative w-full text-center">
        {eyebrow && (
 <div className="inline-flex items-center gap-2 text-[8px] md:text-[10px] lg:text-sm 2xl:text-base font-sans uppercase tracking-[0.25em] text-primary mb-4 font-bold">
            <span className="size-1 rounded-full bg-primary" /> {eyebrow}
          </div>
        )}
        <Reveal>
        <h1 className="font-display font-bold leading-[0.95] text-[clamp(2.6rem,8vw,7rem)] md:text-[clamp(2.75rem,8vw,7.5rem)] 2xl:text-[clamp(3rem,9vw,8.5rem)]">
            {title}
          </h1>
        </Reveal>
        {sub && (
          <Reveal delay={0.1}>
           <p className="mt-6 md:mt-12 text-xs sm:text-sm lg:text-base 1xl:text-xl  text-[#b1afb8] max-w-3xl mx-auto leading-relaxed font-normal">
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
   
      <section className={`relative  px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25   py-10  lg:py-28 2xl:py-35   ${className}`}>
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
    <Reveal>
    <div className="text-center ">
      {eyebrow && (
       <div className="inline-flex items-center gap-2 text-[8px] md:text-[10px] md:text-xs 2xl:text-sm font-sans uppercase tracking-[0.25em] text-primary mb-4 font-bold">
          <span className="size-1 rounded-full bg-primary" /> {eyebrow}
        </div>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.05]">{title}</h2>
      {sub && (
     <p className="mt-4 text-foreground/75 text-xs md:text-base lg:text-xl  font-normal">
          {sub}
        </p>
      )}
    </div>
    </Reveal>
  );
}

export function Card({
  children,
  className = "",
}) {
  return (
    <Reveal>
      <div
        className={` bg-gradient-to-t from-black/80 to-transparent rounded-[16px] border border-[oklch(0.62_0.26_305/0.15)] hover-glow-card p-3 md:p-6 mt-5 md:mt-10 ${className}`}
      >
        {children}
      </div>
    </Reveal>
  );
}

export function PurplePill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full px-3 md:px-4 py-1.5 text-[6px] sm:text-[8px] md:text-[10px] md:text-xs 2xl:text-sm font-sans uppercase tracking-[0.2em] text-primary border border-primary/40 bg-primary/10  font-semibold">
      {children}
    </span>
  );
}

export function FAQ({
  items,
}) {
  const [open, setOpen] = useState(0);
  return (
    
    <div className="w-full mt-5 md:mt-10  divide-y divide-white/[0.07] rounded-[10px] bg-[#0d0d0d] border border-white/[0.07]">
      {items.map((item, i) => (
        <div key={i} className="px-3 md:px-6">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between cursor-pointer py-3 md:py-5 text-left text-xs md:text-base text-white font-medium"
          >
            <span>{item.q}</span>
            <ChevronDown
              className={`size-3 md:size-4 text-primary transition-transform  ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <p className="pb-2 md:pb-5 text-foreground/65 text-[11px] md:text-[15px] leading-relaxed">
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
  to = "/contact"
}) {
  return (
    <section className="relative px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25   py-10  lg:py-28 2xl:py-35   ">
      <Reveal>
      <div className="mx-auto max-w-5xl relative rounded-3xl glass p-5 md:p-12 lg:p-16 text-center overflow-hidden glow-purple-strong">
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-primary/30 blur-[120px]" />
        <div className="relative text-center">
          <h3 className="text-[26px] md:text-4xl lg:text-5xl font-extrabold text-gradient-purple leading-tight">{title}</h3>
          <p className="mt-3 md:mt-5 text-foreground/80 max-w-xl mx-auto font-normal text-xs md:text-sm lg:text-base">{sub}</p>
        <PrimaryButton href={to} className="mt-4 md:mt-8">
          {ctaLabel}
        </PrimaryButton>
        </div>
      </div></Reveal>
    </section>
  );
}

export function Breadcrumb({ items }) {
  return (
    <div className="text-[10px] md:text-sm text-foreground/45 mb-3 md:mb-6 px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25   ">
      {items.map((it, i) => (
        <span key={i}>
          {it.to ? (
            <Link href={it.to} className="hover:text-white transition">
              {it.label}
            </Link>
          ) : (
            <span className="text-foreground/70 capitalize">{it.label}</span>
          )}
          {i < items.length - 1 && <span className=" mx-1 md:mx-2">/</span>}
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
    <Reveal>
    <div className="overflow-hidden mt-5  md:mt-10 rounded-[10px] border border-white/[0.07] bg-[#0d0d0d]">
      <table className="w-full overflow-y-scroll text-sm">
        <thead>
          <tr className="border-b border-white/[0.07] bg-white/[0.02]">
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-5 py-4 text-left text-[8px] md:text-[11px] font-mono uppercase tracking-[0.2em] text-primary font-bold"
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
                <td key={ci} className="p-2 md:px-5 text-[10px] md:text-base md:py-4 text-foreground/80">
                  {typeof cell === "boolean" ? (
                    cell ? (
                      <Check className="size-3 md:size-4 text-primary" />
                    ) : (
                      <X className="size-3 md:size-4 text-white" />
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
    </div></Reveal>
  );
}

export function Stepper({
  steps,
}) {
  return (
    <Reveal>
    <div className="grid md:grid-cols-4 gap-2 md:gap-4">
      {steps.map((s, i) => (
        <Reveal key={i} delay={i * 0.08}>
          <Card className="h-full">
            <div className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center shrink-0 border border-white/10 rounded-md bg-primary/10 transition-colors hover:border-primary text-xs md:text-base mb-3 md:mb-5" >
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="text-sm md:text-lg 2xl:text-xl font-semibold leading-snug group-hover:text-primary transition md:mb-2">{s.title}</div>
            <div className="text-[10px] md:text-xs 2xl:text-sm text-foreground/75 font-medium leading-relaxed flex-1 group-hover:text-white">{s.desc}</div>
          </Card>
        </Reveal>
      ))}
    </div></Reveal>
  );
}

export function StatGrid({
  stats,
}) {
  return (
    <Reveal>
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4">
        {stats.map((s, i) => (
          <Card key={i} className="text-center">
            <div className="text-[24px] md:text-[28px] 2xl:text-4xl  font-extrabold tracking-tight text-gradient-purple">
              {s.value}
            </div>
          <div className="text-[10px] md:text-xs font-semibold text-white/35 md:mt-2">
            {s.label}
          </div>
        </Card>
      ))}
    </div></Reveal>
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


// case study section

export function Related({
  items,
}) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {items.map((it, i) => (
        <Reveal key={it.title} >
          <Link
            href={it.href}
            className="bg-gradient-to-t from-black/80 to-transparent rounded-[16px] border border-[oklch(0.62_0.26_305/0.15)] hover-glow-card group block overflow-hidden rounded-2xl"
          >
            <div className="overflow-hidden">
              <Image height="500" width="500" 
                src={it.src}
                alt={it.alt}
                className={`aspect-[16/10] w-full ${it.obj} transition duration-700 group-hover:scale-105`}
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <div className="text-base font-semibold text-white">{it.title}</div>
              <span className="mt-1 inline-flex items-center gap-1 text-xs text-primary hover:underline">
                View case study <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}



const OUTCOME_ICONS = [TrendingUp, Zap, ShieldCheck, Sparkles, CheckCircle2, Flame];

export function OutcomeGrid({
  items,
}) {

  const outcomeItems = items ?? [];

  if (outcomeItems.length === 0) {
    return null;
  }
  
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {outcomeItems.map((it, i) => {
        const Icon = OUTCOME_ICONS[i % OUTCOME_ICONS.length];
        const parsed = parseStat(it.metric);
        return (
          <Reveal key={it.title} >
            <div className="bg-gradient-to-t from-black/80 to-transparent rounded-[16px] border border-[oklch(0.62_0.26_305/0.15)] hover-glow-card group relative h-full overflow-hidden p-7">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(circle at 100% 0%, rgba(167,139,250,0.18), transparent 50%)",
                }}
              />
              <div className="relative">
               {/* <div className="w-10 h-10 flex justify-center items-center shrink-0 border border-white/10 rounded-md bg-primary/10 transition-colors group-hover:border-primary" >
                  <Icon size={22} className="text-primary"  />
                </div> */}
                {it.metric && (
                  <div className="mt-5 text-3xl font-bold text-primary">
                      {parsed.num !== null && Number.isInteger(parsed.num) && parsed.num <= 9999 ? (
                  <CountUp value={parsed.num} prefix={parsed.prefix} suffix={parsed.suffix} />
                ) : (
                  it.metric
                )}
                    %</div>
                )}
                <div className="mt-3 text-lg font-semibold text-white">{it.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/35">{it.body}</p>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}


// export function Gallery({
//   images,
  
//   role
// }) {
//   return (
//     <div className="space-y-6">
//       <div className={`grid grid-cols-1 gap-6  ${role === "mobile" ?  "sm:grid-cols-2 md:grid-cols-3" : "md:grid-cols-2"}`}>
//         {images.map((img, i) => (
//           <Reveal key={img.alt} >
//             <div className="bg-gradient-to-t from-black/80 to-transparent rounded-[16px] border border-[oklch(0.62_0.26_305/0.15)] hover-glow-card group   relative overflow-hidden rounded-2xl p-2">
//               <div className="overflow-hidden rounded-xl">
//                 <Image height="500" width="500" 
//                   src={img.src}
//                   alt={img.alt}
//                   className={`aspect-[16/10] w-full h-full   ${role === "mobile" ?"object-contain":  "object-cover transition duration-700 group-hover:scale-105"} `}
//                   loading="lazy"
//                 />
//               </div>
//               <div className={`p-3 text-xs 2xl:text-base  text-white/35 group-hover:text-white ${role === "mobile" ?"text-center":"text-start"}`}>{img.alt}</div>
//             </div>
//           </Reveal>
//         ))}
//       </div>
    
//     </div>
//   );
// }

export function Gallery({ images, role }) {

  const cul_breakPoints =
    role === "mobile"
      ? { 350: 2, 750: 3, 1200: 5 }
      : { 350: 1, 750: 2,};


  const gutt_breakPoints =role === "mobile"? {350: "40px",

    750: "60px",
    1200:"90px"
   

  }: {
    350: "12px",
    750: "50px",
    900: "24px",
    1200: "50px",
  };

  return (<>
    {role==="mobile"? (<section className="h-full py-10    flex items-center justify-center">
     
      <div className="w-full  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 2xl:gap-10 items-start justify-center">
        {images.map((screen,i) => (
          <div
            key={i}
            className={`relative group transition-all duration-300 hover:scale-[1.02] ${screen.desktopOffset}`}
          >
      

              {/* Internal Screen Area */}
              <div className="relative w-full aspect-[9/19.5]   overflow-hidden">
                <Image
                  src={screen.src}
                  alt="hello"
                  fill
   
                  className="object-cover w-[80%] h-auto rounded-2xl "
                  priority={i<= 5}
                />
              </div>

            
          </div>
        ))}
      </div>
    </section>):(<ResponsiveMasonry
      columnsCountBreakPoints={cul_breakPoints}
      gutterBreakPoints={gutt_breakPoints}
    >
    
      <Masonry>
        {images?.map((image, i) => (
          <Image
            key={i}
            height={500}
            width={500}
            src={image.src}
            style={{ width: "100%", height: "auto", display: "block" }}
            alt= "screen Images"
            loading="lazy"
            className={`transition duration-400 hover:scale-110 ${role==="mobile"?"rounded-2xl":""} `}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>)}</>
    
  );
}

export function TechStack({ items }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((t, i) => {
        const Icon = TECH_ICONS[t.toLowerCase()] ?? Wrench;
        return (
          <Reveal key={t} >
            <div className="w-full flex gap-2 justify-center items-center shrink-0 border border-white/10  bg-primary/10 transition-colors hover:border-primary px-3 py-2 rounded-full" >
              <Icon  className="text-primary text-base md:text-2xl" />
             <span className="text-sm md:text-base">{t}</span> 
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
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:px-10 xl:px-20 2xl:px-30">
      {items.map((f, i) => {
        const Icon = typeof f.icon === "string"
          ? ICONS[f.icon.toLowerCase()] ?? CheckCircle2
          : f.icon ?? CheckCircle2;
        return (
          <Reveal key={f.title} >
            <div className="bg-gradient-to-t from-black/80 to-transparent rounded-[16px] border border-[oklch(0.62_0.26_305/0.15)] hover-glow-card group relative h-full overflow-hidden rounded-2xl p-6">
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition duration-500 group-hover:opacity-60"
                style={{
                  background:
                    "radial-gradient(circle, rgba(167,139,250,0.5), transparent 70%)",
                }}
              />
             <div className="w-10 h-10 mb-4 flex justify-center items-center shrink-0 border border-white/10 rounded-md bg-primary/10 transition-colors group-hover:border-primary" >
                <Icon size={20} className="text-primary"  />
              </div>
              <div className="text-[15px] md:text-base  text-start font-semibold text-primary">{f.title}</div>
              <p className="md:mt-2 text-[13px] md:text-sm text-start leading-relaxed text-[#b1afb8]">{f.body}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

function parseStat(s) {
  const m = s.match(/^([^\d-]*)(-?\d+(?:\.\d+)?)(.*)$/);
  if (!m) return { num: null, prefix: "", suffix: "" };
  return { num: parseFloat(m[2]), prefix: m[1], suffix: m[3] };
}
export function Stat1Grid({
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
          <Reveal key={s.label} >
            <div className="bg-gradient-to-t from-black/80 to-transparent rounded-[16px] border border-[oklch(0.62_0.26_305/0.15)] hover-glow-card group relative h-full overflow-hidden rounded-2xl p-6">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-50 blur-2xl transition group-hover:opacity-80"
                style={{
                  background:
                    "radial-gradient(circle, rgba(167,139,250,0.45), transparent 70%)",
                }}
              />
             <div className="w-10 h-10 mb-4 flex justify-center items-center shrink-0 border border-white/10 rounded-md bg-primary/10 transition-colors group-hover:border-primary" >
                <Icon size={16} className="text-primary"  />
              </div>
              <div className="text-3xl font-bold tracking-tight text-gradient-purple md:text-4xl">
                {parsed.num !== null && Number.isInteger(parsed.num) && parsed.num <= 9999 ? (
                  <CountUp value={parsed.num} prefix={parsed.prefix} suffix={parsed.suffix} />
                ) : (
                  s.stat
                )}
              </div>
              <div className="mt-2 text-sm text-white/35">{s.label}</div> 
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export function Section1({
  label,
  heading,
  children,
  className = "",
  id,
  pos
}) {
  return (
    <section id={id} className={`w-full px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 py-10 lg:py-20 ${className}`}>
    <div className={`  gap-10 lg:gap-20 ${pos==="flex"?"flex ":"grid text-center"} `}>
    <div> {label && (
        <Reveal>
          <div className="text-[11px] md:text-xs  font-semibold uppercase tracking-[0.18em] text-primary">
            {label}
          </div>
        </Reveal>
      )}
      {heading && (
        <Reveal >
        <div>

          <h2 className=" text-xl md:text-2xl font-bold tracking-tight text-white md:text-4xl">
            {heading}
          </h2>
        </div>
        </Reveal>
      )}</div>
      <Reveal >
        <div className="">{children}</div>
      </Reveal>
      </div>
    </section>
  );
}


export function InfoRow({
  items,
}) {
  return (
    <div className="mt-10 grid grid-cols-2  divide-y divide-border border-y border-border md:grid-cols-4 md:divide-x md:divide-y-0">
      {items.map((it, i) => (
        <Reveal key={it.label} >
          <div className=" p-5">
            <div className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              {it.label}
            </div>
            <div className="mt-2 text-xs md:text-sm text-white/35 hover:text-white">{it.value}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Hero1({
  category,
  title,
  subtitle,
  image,
  imageAlt,
  info,
}) {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25  ">
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
        <span className="pill-accent text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em]">
          <Sparkles size={12} /> {category}
        </span>
      </Reveal>
      <Reveal >
        <h1 className="mt-5 text-3xl font-bold tracking-tight md:text-6xl">
          <span className="text-gradient-purple">
            {title}
          </span>
        </h1>
      </Reveal>
      <Reveal >
        <p className="mt-5 max-w-3xl text-sm  md:text-lg text-[#b1afb8]">{subtitle}</p>
      </Reveal>
      <InfoRow items={info} />
      <Reveal >
        <div className="glow-border mt-12 overflow-hidden  ">
          <Image height="500" width="500" 
            src={image}
            alt={imageAlt}
            className="aspect-video w-full object-cover rounded-2xl"
            loading="lazy"
          />
        </div>
      </Reveal>
    </section>
  );
}