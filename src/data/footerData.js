
import { AiOutlineGlobal } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const footerData={
     services : [

  "UI/UX Design", "Full-Stack Development", "Mobile App Development",

  "AI / ML Engineering", "DevOps & Cloud", "No-Code Development",

  "Graphic Design", "Growth Marketing",

],
 
 hireRoles : [

  "Hire UI/UX Designer", "Hire Full-Stack Dev", "Hire AI Engineer",

  "Hire Mobile Dev", "Hire DevOps Engineer", "Hire No-Code Dev",

  "View All Roles →",

],
 
 companyLinks : [

  { label: "About Us", to: "/about" },

  { label: "Our Portfolio", to: "/work" },

  { label: "Careers", to: "/careers" },

  { label: "How We Vet", to: "/about" },

  { label: "Blog & Insights", to: "/resources" },

  { label: "Privacy Policy", to: "/privacy" },

  { label: "Terms of Service", to: "/terms" },

  { label: "Cookie Policy", to: "/cookies" },

],

 stats : [

  { n: "120+", l: "Experts Available" },

  { n: "500+", l: "Projects Delivered" },

  { n: "98%",  l: "Client Satisfaction" },

  { n: "24hr", l: "Average Match Time" },

],
 
 socials : [FaLinkedinIn, FaXTwitter, FaGithub, FaInstagram, AiOutlineGlobal],
  resourceLinks :[
  {
    id: 1,
    title: 'Get a Developer Cost Estimate',
    description: 'Calculate your team\'s total cost of engagement',
  },
  {
    id: 2,
    title: 'Engineering Hiring Insights',
    description: 'Monthly guide for CTOs, founders, and tech leads',
  },
  {
    id: 3,
    title: 'Free Project Scoping Template',
    description: 'Define scope before your first expert call',
  },
]
}