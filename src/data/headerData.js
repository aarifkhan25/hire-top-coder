import { FaAndroid, FaAws, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { FaWebflow } from "react-icons/fa6";
import {
  FiBarChart2 as BarChart3, // Creative/Magic alternative
  FiBookOpen as BookOpen, FiCpu as Brain, // Puzzle/Component design representation
  FiBriefcase as Building2, // Drawing/Writing representation
  FiLayers as Calculator, FiCode as Code2, // Functional grid calculation design
  FiFileText as FileText, FiLayout as Layout, FiEdit3 as PenLine, FiPackage as Puzzle, // Corporate/Building alternative
  FiRefreshCw as RefreshCw, // AI/Brain/Core representation
  FiSmartphone as Smartphone, FiTrendingUp as TrendingUp, FiUsers as Users
} from "react-icons/fi";
import { IoIosRocket as Rocket } from "react-icons/io";
export const headerData={
 navData : [
  {
    name: "Services",
   
    dropdownTitle: "Services.",
    dropdownDesc:
      "End-to end digital engineering built around your product goals.",
    featuredCard: {
      tag: "Case Study SAAS",
      title: "Broker Remarks - listing Platform Rebuild",
      desc: "Reduced agent onboarding time by 60% with a streamlined React + Firebase architecture.",
      actionText: "Read case study",
      href: "/services/case-study",
    },
    columns: [
      {
        title: "Delivery Models",
        links: [
          { icon:<Users/>,
            name: "Dedicated Expert Teams",
            desc: "A full-time developer assigned only to year project",
            href: "/services/dedicated-teams",
          },
          { icon:<Puzzle/>,
            name: "IT Staff Augmentation",
            desc: "Plug vetted engineers into your existing team",
            href: "/services/staff-augmentation",
          },
          
          { icon:<Building2/>,
            name: "Offshore Development Center",
            desc: "Build your own offshore team with our infrastructure",
            href: "/services/offshore-dev-centre",
          },
        ],
      },
      {
        title: "Engineering Services",
        links: [
          { icon :<RefreshCw/>,
            name: "Legacy System Modernization",
            desc: "Zero-Downtime upgrades for outdated platforms",
            href: "/services/legacy-modernization",
          },
          {icon :<Rocket/>,
            name: "MVP Development",
            desc: "Investor ready product in 12 weeks",
            href: "/services/mvp-development",
          },
          {icon :<TrendingUp/>,
            name: "Scale Your Engineering team",
            desc: "Add 3-30 engineers in 48-72 hours",
            href: "/hire",
          },
        ],
      },
    ],
  },
  {
    name: "Hire Developers",
 
    dropdownTitle: "Hire Developers.",
    dropdownDesc:
      "Experts across 50+ technologies. Cover any stack, any role, any stage.",
    featuredCard: {
      tag: "Case Study Mobile",
      title: "MKGO Transport - Flutter App",
      desc: "Full ride-booking app shipped in 8 Weeks with the react time sheduling.",
      actionText: "Read case study",
      href: "/hire/vetting",
    },
    columns: [
      {
        title: "Delivery Models",
        links: [
          {icon:<Layout/>,
            name: "UI/UX  Designers",
            desc: "Crafting beautiful, high-converting modern user journeys",
            href: "/hire/ui-ux-designer",
          },
          {icon:<Code2/>,
            name: "Full Stack Developer",
            desc: "Proficient in modern web stacks (MERN, Next.js, Python)",
            href: "/hire/full-stack-developer",
          },
          {icon:<Brain/>,
            name: "AI-ML Engeeners",
            desc: "Proficient in modern web stacks (MERN, Next.js, Python)",
            href: "/hire/ai-ml-engineer",
          },
          {icon:<Smartphone/>,
            name: "Mobile Developers",
            desc: "Crafting beautiful, high-converting modern user journeys",
            href: "/hire/mobile-developer",
          },
        ],
      },
      {
        title: "Hire By Technology",
        links: [
          { icon:<FaReact/>, name: "React", desc: "", href: "/" },
          {  icon:<FaPython/>,  name: "Python/AI", desc: "", href: "/" },
          { icon:<FaAndroid />,  name: "Android", desc: "", href: "/" },
        ],
        links1: [
          {icon:<FaNodeJs />,  name: "Node JS", desc: "", href: "/" },
          {icon:<FaAws />,  name: "AWS", desc: "", href: "/" },

          {icon:<FaWebflow/>,  name: "Webflow", desc: "", href: "/" },
        ],
      },
    ],
  },
  {
    name: "Resources",
  
    dropdownTitle: "Resources",
    dropdownDesc:
      "Guides, Tools, and insights to help you hire smarter and build faster",
    isResourcesTemplate: true, // स्पेशल लेआउट को ट्रिगर करने के लिए फ्लैग
    leftSubTitle: "Delivery Models",
    leftLinks: [
      {icon:<Calculator/>,
        name: "Developer",
        desc: "Calculate your Total cost of hire",
          href: "/resources/offshore-dev-rates",
      },
      {icon:<FileText/>,
        name: "Free Scoping template",
        desc: "Define your project before the first call",
        href: "/resources",
      },
    ],
    columns: [
      {
        title: "LEARN",
        links: [
          {icon:<BookOpen/>,
            name: "Hiring Guides& FAQs",
            desc: "Everything you need before hiring",
            href: "/faq",
          },
          {icon:<BarChart3/>,
            name: "Offshore Dev Rates 2025",
            desc: "India vs eastern Europe vs LATAM",
            href: "/resources/offshore-dev-rates",
          },
          { icon:<PenLine/>,
            name: "Blog & Insights",
            desc: "Tech tips Hiring guides industry trends",
            href: "/blog",
          },
        ],
      },
    ],
    proofSection: {
      title: "PROOF AND COMPARISION",
      cards: [
        {
          tag: "CASE STUDY",
          title: "Broker Remarks - listing Platform Rebuild",
          meta: <>Flutter - Firebase <span className="text-primary">•</span>6 weeks</>,
          href: "/",
        },
        {
          tag: "GUIDE 2025",
          title: "Dedicated Dev vs Freelancer - The Real difference",
          meta: "8 min read",
          href: "/resources/dedicated-vs-freelancer",
        },
        {
          tag: "COMPARISION",
          title: "Staff Augmentation vs dedicated Team",
          meta: "5 min Read",
          href: "/services/staff-augmentation",
        },
        {
          tag: "CASE STUDY",
          title: "Rolling Star Casino-Full React Platform",
          meta: <>React JS  <span className="text-primary">•</span>10 weeks </>,
          href: "/",
        },
      ],
    },
  },
  {
    name: "Company",
    href: "/company",
  },
]
}