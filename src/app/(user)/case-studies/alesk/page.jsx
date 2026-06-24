import { Breadcrumb, CTABanner, FeatureGrid, Gallery, Hero1, OutcomeGrid, Quote, Related, Section1, Stat1Grid, TechStack } from "@/components/site/Shared.jsx";
import { Building2, Monitor } from "lucide-react";

export const metadata = {
  title: "ALESK — Case Study | HireTopCoder",

  description:
    "A comprehensive healthcare customer management platform connecting patients, doctors, and clinics across the Portuguese-speaking community.",

  property: {
    "og:title": "ALESK — Case Study | HireTopCoder",
    "og:description":
      "Healthcare customer management platform built with Flutter Flow and Firebase.",
    "og:image": "/assets/logo1.png",
  },
};

export default function AleskPage() {
  return (
    <div className=" w-full ">
    <div className="pt-20 md:pt-28">
         <Breadcrumb 
                  items={[
                    { label: "Home", to: "/" },
                    { label: "Case Studie" },
                    { label: "Alesk" },
                   ]}
                   />
                   </div> 
      <Hero1
        category="Mobile · Web · Desktop Application"
        title="ALESK"
        subtitle="A comprehensive healthcare customer management platform connecting patients, doctors, and clinics across the Portuguese-speaking community."
        image="/assets/case-2.png"
        imageAlt="ALESK healthcare platform hero screenshot"
        info={[
          { label: "Client", value: "Confidential" },
          { label: "Date", value: "Jul 2023" },
          { label: "Category", value: "Healthcare Platform" },
          { label: "Tech Stack", value: "Flutter Flow, Firebase" },
        ]}
      />

      <Section1 label="Project Brief" heading="Overview">
       <p className=" w-full text-[#b1afb8] text-base 2xl:text-lg xl:pr-30 2xl:pr-60">
          ALESK is a comprehensive, user-friendly customer management system
          built for healthcare service providers — hospitals and clinics —
          serving the Portuguese-speaking community. The platform gives patients
          easy access to nearby healthcare services, detailed doctor expertise,
          and authentic reviews to support informed decisions. It operates
          across three distinct ends: a Super User Admin, healthcare service
          providers, and patients.
        </p>
      </Section1>

      <Section1 label="By the Numbers" heading="Key Stats">
        <Stat1Grid
          items={[
            { stat: "3", label: "Platform User Types", icon: "users" },
            { stat: "3", label: "Mobile, Web & Desktop", icon: "layers" },
            {
              stat: "100%",
              label: "Real-Time Financial Reporting",
              icon: "activity",
            },
            {
              stat: "24/7",
              label: "Built-In Chat & Communication",
              icon: "message-circle",
            },
          ]}
        />
      </Section1>

      <Section1 label="What We Built" heading="Key Modules & Features">
        <div className="space-y-14">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
              <Monitor size={16} /> Super Admin Modules
            </div>
            <FeatureGrid
              items={[
                {
                  title: "Admin Dashboard",
                  body: "Centralized view of account balance, invoicing, receivables, and newly added service providers.",
                  icon: "layout-dashboard",
                },
                {
                  title: "User Management",
                  body: "Register new service providers and control access levels across the platform.",
                  icon: "users",
                },
                {
                  title: "Financial Reports",
                  body: "Searchable financial reports by date, county, and provider with PDF/CSV export.",
                  icon: "file-bar-chart-2",
                },
                {
                  title: "Content Management",
                  body: "Manage each service provider's homepage — carousels, plans, specialties, and videos.",
                  icon: "file-text",
                },
                {
                  title: "Plans & Pricing",
                  body: "Create and assign paid plans with varying pricing and feature sets.",
                  icon: "credit-card",
                },
                {
                  title: "Agreements",
                  body: "Track agreement status across all providers with downloadable reports.",
                  icon: "file-signature",
                },
              ]}
            />
          </div>
          <div>
            <div className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              <Building2 size={16} /> Service Provider Modules
            </div>
            <FeatureGrid
              items={[
                {
                  title: "Provider Dashboard",
                  body: "Quick-access launchpad summarizing essential operational information.",
                  icon: "rocket",
                },
                {
                  title: "Registration",
                  body: "Complete personal, address, and specialization details during onboarding.",
                  icon: "clipboard-list",
                },
                {
                  title: "Legal Entity Setup",
                  body: "Register business identity as a hospital, clinic, or company.",
                  icon: "building2",
                },
                {
                  title: "Team Management",
                  body: "Add health professionals and showcase their expertise to patients.",
                  icon: "user-plus",
                },
                {
                  title: "Financial Tracking",
                  body: "View extracts, receivables, and transfers with visual pie charts.",
                  icon: "pie-chart",
                },
                {
                  title: "Integrated Chat",
                  body: "Real-time communication between team members and professionals.",
                  icon: "message-square",
                },
              ]}
            />
          </div>
        </div>
      </Section1>

      <Section1 label="Tech Stack" heading="Built With">
        <TechStack items={["Flutter Flow", "Firebase"]} />
      </Section1>

      <Section1 label="Project Screenshots" heading="See It In Action">
        <Gallery
          images={[
            {
              src: "/assets/logo1.png",
              alt: "ALESK admin dashboard screen",
            },
            {
              src: "/assets/logo1.png",
              alt: "ALESK financial charts screen",
            },
            {
              src: "/assets/logo1.png",
              alt: "ALESK service provider registration screen",
            },
            {
              src: "/assets/logo1.png",
              alt: "ALESK team management screen",
            },
            {
              src: "/assets/logo1.png",
              alt: "ALESK provider dashboard screen",
            },
            {
              src: "/assets/logo1.png",
              alt: "ALESK chat module screen",
            },
          ]}
        />
      </Section1>

      <Section1 label="The Results" heading="Impact & Outcomes">
        <OutcomeGrid
          items={[
            {
              metric: "1",
              title: "Centralized Operations",
              body: "Unified admin control across hospitals, clinics, and laboratories from a single dashboard.",
            },
            {
              metric: "3x",
              title: "Faster Onboarding",
              body: "Streamlined registration flow for both service providers and their teams.",
            },
            {
              metric: "100%",
              title: "Transparent Finances",
              body: "Clear, exportable financial reporting for every provider and consumer.",
            },
          ]}
        />
      </Section1>

      <Quote
        text="[Client testimonial goes here — replace with actual feedback]"
        name="Client Name"
        role="Founder, Company"
        avatar="/assets/logo1.png"
      />

      <Section1 label="Explore More" heading="Related Case Studies">
        <Related
          items={[
            {
              src: "/assets/logo1.png",
              alt: "Speakable case study thumbnail",
              title: "Speakable",
              href: "/case-studies/speakable",
            },
            {
              src: "/assets/logo1.png",
              alt: "MKGO case study thumbnail",
              title: "MKGO",
              href: "#",
            },
            {
              src: "/assets/logo1.png",
              alt: "Parakh Jewellers case study thumbnail",
              title: "Parakh Jewellers",
              href: "#",
            },
          ]}
        />
      </Section1>
<CTABanner
            title="Have a similar project in mind?"
            sub="Let's discuss how we can bring it to life.

"
            ctaLabel="Talk To Expert"
            to="/contact"
          />
    </div>
  );
}
