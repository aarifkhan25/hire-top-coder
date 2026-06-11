import Link from "next/link"

import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram, FaDribbble, FaMapMarkerAlt, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";
import {GhostButton} from "./PageShell.jsx"
import Image from "next/image"
import logo from "@/assets/logo1.png";
 
const services = [

  "UI/UX Design", "Full-Stack Development", "Mobile App Development",

  "AI / ML Engineering", "DevOps & Cloud", "No-Code Development",

  "Graphic Design", "Growth Marketing",

];
 
const hireRoles = [

  "Hire UI/UX Designer", "Hire Full-Stack Dev", "Hire AI Engineer",

  "Hire Mobile Dev", "Hire DevOps Engineer", "Hire No-Code Dev",

  "View All Roles →",

];
 
const companyLinks= [

  { label: "About Us", to: "/about" },

  { label: "Our Portfolio", to: "/work" },

  { label: "Careers", to: "/careers" },

  { label: "How We Vet", to: "/about" },

  { label: "Blog & Insights", to: "/resources" },

  { label: "Privacy Policy", to: "/privacy" },

  { label: "Terms of Service", to: "/terms" },

  { label: "Cookie Policy", to: "/cookies" },

];
 
const stats = [

  { n: "120+", l: "Experts Available" },

  { n: "500+", l: "Projects Delivered" },

  { n: "98%",  l: "Client Satisfaction" },

  { n: "24hr", l: "Average Match Time" },

];
 
const socials = [FaLinkedinIn, FaTwitter, FaGithub, FaInstagram, FaDribbble];
 
export  function Footer() {

  return (
<footer className="w-full bg-[#0A0A0A]] border-t border-white/[0.07] mt-20">
<div className="w-full px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25  pt-20">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 ">

          {/* Brand */}
<div className="lg:col-span-4">
<Link href="/" className="inline-flex items-center">
<Image width={500} height={500} laoding="lazy" src={logo} alt="HireTopCoder logo" className="w-[110px] h-[50px] lg:w-[120px] lg:h-[60px] 1xl:w-[130px] 1xl:h-[80px] 2xl:w-[190px] 2xl:h-[100px]" />
</Link>
<p className="mt-4 text-[14px] text-white/45 hover:text-[#F0EDFF] leading-[1.8] w-full">

              We match elite offshore developers, designers, and AI engineers to startups and businesses worldwide. Human-vetted, AI-matched, ready in 24 hours.
</p>
<div className="mt-6 flex gap-3">

              {socials.map((Icon, i) => (
<a key={i} href="#" className="size-9 grid place-items-center rounded-lg bg-[#141414] border border-white/[0.07] text-white/30 hover:text-[#F0EDFF] transition">
<Icon className="size-4" />
</a>

              ))}
</div>
<div className="mt-6 flex flex-wrap gap-2.5">

              {["ISO 9001", "GDPR", "NDA Protected"].map((b) => (
<span key={b} className="text-[11px] px-3 py-1 rounded-full bg-[#141414] border border-white/[0.07] text-white/30 hover:text-[#F0EDFF]">

                  {b}
</span>

              ))}
</div>
</div>
 
          {/* Services */}
<div className="lg:col-span-2">
<FooterColTitle>Services</FooterColTitle>
<ul className="space-y-2.5">

              {services.map((s) => (
<li key={s}><a href="#" className="text-[14px] text-foreground/75 hover:text-white/50 transition">{s}</a></li>

              ))}
</ul>
</div>
 
          {/* Hire by Role */}
<div className="lg:col-span-2">
<FooterColTitle>Hire by Role</FooterColTitle>
<ul className="space-y-2.5">

              {hireRoles.map((s) => (
<li key={s}><Link href="/hire" className="text-[14px] text-foreground/75 hover:text-white/50transition">{s}</Link></li>

              ))}
</ul>
</div>
 
          {/* Company */}
<div className="lg:col-span-2">
<FooterColTitle>Company</FooterColTitle>
<ul className="space-y-2.5">

              {companyLinks.map((s) => (
<li key={s.label}><Link href={s.to} className="text-[14px] text-foreground/75 hover:text-white/50 transition">{s.label}</Link></li>

              ))}
</ul>
</div>
 
          {/* Contact */}
<div className="lg:col-span-2">
<FooterColTitle>Get in Touch</FooterColTitle>
<ul className="space-y-3 text-[13px] text-white/45">
<li className="flex items-start gap-2"><FaMapMarkerAlt className="size-4 mt-0.5 text-white/35 shrink-0" /><span>Indore, Madhya Pradesh, India</span></li>
<li className="flex items-start gap-2"><FaRegEnvelope className="size-4 mt-0.5 text-white/35 shrink-0" /><span>contact@hirertopcodercom</span></li>
<li className="flex items-start gap-2"><FaPhoneAlt className="size-4 mt-0.5 text-white/35 shrink-0" /><span>+91 98765 43210</span></li>
</ul>
<div className="mt-5">
<div className="text-[11px] text-white/35 uppercase tracking-wider">Response time</div>
<div className="text-[13px] text-white font-medium mt-0.5">&lt; 2 hours</div>
</div>
<GhostButton className="mt-5">

              Book a Call 
</GhostButton>


</div>
</div>
 
        {/* Stats strip */}
<div className="mt-16 -mx-6 lg:-mx-14 bg-[#0d0d0d] px-6 lg:px-14 py-6">
<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.07]">

            {stats.map((s, i) => (
<div key={i} className="px-4 first:pl-0">
<div className="text-[28px] font-medium tracking-[-0.02em] text-white">{s.n}</div>
<div className="text-[12px] text-white/35 mt-0.5">{s.l}</div>
</div>

            ))}
</div>
</div>
 
        {/* Bottom bar */}
<div className="border-t border-white/[0.07] py-6 flex flex-wrap items-center justify-between gap-3 text-[13px]">
<div className="text-white/30">© 2025 HireTopCoder. All rights reserved.</div>
<div className="text-white/20 text-[12px]">Made with ❤️ in Indore, India</div>
<div className="flex gap-5 text-white/35">
<Link href="/privacy" className="hover:text-[#F0EDFF]">Privacy Policy</Link>
<Link href="/terms" className="hover:text-[#F0EDFF]">Terms of Service</Link>
<Link href="/cookies" className="hover:text-[#F0EDFF]">Cookies</Link>
</div>
</div>
</div>
</footer>

  );

}
 
function FooterColTitle({ children }) {

  return (
<div className="text-xs  uppercase tracking-[0.2em] text-primary mb-5 font-medium">

      {children}
</div>

  );

}
 