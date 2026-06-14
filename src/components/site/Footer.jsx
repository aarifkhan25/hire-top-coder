import Link from "next/link"

import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram, FaDribbble, FaMapMarkerAlt, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";
import {GhostButton} from "./PageShell.jsx"
import Image from "next/image"
import logo from "@/assets/logo1.png";
 import { FiCalculator, FiBookOpen, FiFileText } from 'react-icons/fi';

const resourceLinks = [
  {
    id: 1,
    title: 'Get a Developer Cost Estimate',
    description: 'Calculate your team\'s total cost of engagement',
    icon: <FiCalculator />,
  },
  {
    id: 2,
    title: 'Engineering Hiring Insights',
    description: 'Monthly guide for CTOs, founders, and tech leads',
    icon: <FiBookOpen />,
  },
  {
    id: 3,
    title: 'Free Project Scoping Template',
    description: 'Define scope before your first expert call',
    icon: <FiFileText />,
  },
];

const trustMetrics = [
  '500+ Projects Delivered Across All Technologies',
  '100+ Happy Enterprise Clients',
  'ISO 9001 Quality Certified',
  'GDPR &amp; NDA Protected',
  'Serving Clients in 15+ Countries',
];
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
  <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* =========================================================
            LEFT COLUMN - INTERACTIVE RESOURCES (Takes 8 Columns)
            ========================================================= */}
        <div className="lg:col-span-8 w-full flex flex-col">
          {resourceLinks.map((item, index) => (
            <div key={item.id} className="w-full">
              {/* Row Link Item Container */}
              <a
                href="#"
                className="group flex items-center gap-5 py-6 w-full text-left transition-all duration-300 rounded-xl hover:bg-white/[0.02] hover:px-2"
              >
                {/* Translucent Dark Purple Icon Box wrapper */}
                <div className="w-14 h-14 shrink-0 bg-[#161224]/60 border border-[#2e234d]/60 rounded-[12px] flex items-center justify-center text-[#9987d9] text-xl transition-all duration-300 group-hover:border-[#4c3591] group-hover:bg-[#1a142e] group-hover:text-[#b1a2f0] shadow-inner">
                  {item.icon}
                </div>

                {/* Vertical Stacked Text Info */}
                <div className="space-y-1">
                  <h3 className="text-white font-semibold text-[16px] sm:text-[17px] tracking-wide transition-colors duration-200 group-hover:text-[#c5b3fa]">
                    {item.title}
                  </h3>
                  <p className="text-[#696575] text-[13px] sm:text-[14px] font-normal leading-normal group-hover:text-[#8d889e] transition-colors duration-200">
                    {item.description}
                  </p>
                </div>
              </a>

              {/* Faint Horizontal Divider between elements (Excluding the last item) */}
              {index < resourceLinks.length - 1 && (
                <div className="w-full h-[1px] bg-[#14121c]/80" />
              )}
            </div>
          ))}
        </div>

        {/* =========================================================
            RIGHT COLUMN - TRUST & CREDIBILITY METRICS (Takes 4 Columns)
            ========================================================= */}
        <div className="lg:col-span-4 w-full lg:border-l lg:border-[#14121c]/80 lg:pl-12 flex flex-col justify-center space-y-5 py-4">
          {trustMetrics.map((metric, index) => (
            <div 
              key={index}
              className="text-[#84818c] text-[14px] sm:text-[15px] font-medium tracking-wide transition-colors duration-300 hover:text-white flex items-center gap-3 cursor-default"
            >
              {/* Subtle list indicator dot */}
              <span className="w-1 h-1 rounded-full bg-[#403b52]" />
              <span dangerouslySetInnerHTML={{ __html: metric }} />
            </div>
          ))}
        </div>

      </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 ">

          {/* Brand */}
<div className=" w-full lg:col-span-4">
<Link href="/" className="block">
  {/* लोगो को दबने से बचाने के लिए wrapper div */}
  <div className="relative w-[140px] h-[45px] sm:w-[160px] sm:h-[50px] md:w-[180px] md:h-[55px] lg:w-[200px] lg:h-[60px]">
    <Image 
      src={logo} 
      alt="HireTopCoder logo" 
      fill
      loading="lazy" 
      className="object-contain object-left" 
    />
  </div>
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
 