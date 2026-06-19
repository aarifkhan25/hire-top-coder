
import {
  Breadcrumb,
  CTABanner,
  FeatureGrid,
  Gallery,
  Hero,
  OutcomeGrid,
  Quote,
  Related,
  Section,
  StatGrid,
  TechStack,
} from "@/components/site/CaseStudy";
import {
  Building2,
  Monitor,
} from "lucide-react";

    const meta= [
      { title: "ALESK — Case Study | HireTopCoder" },
      {
        name: "description",
        content:
          "A comprehensive healthcare customer management platform connecting patients, doctors, and clinics across the Portuguese-speaking community.",
      },
      { property: "og:title", content: "ALESK — Case Study | HireTopCoder" },
      {
        property: "og:description",
        content: "Healthcare customer management platform built with Flutter Flow and Firebase.",
      },
      {
        property: "og:image",
        content: "https://placehold.co/1200x630/141418/a78bfa?text=ALESK",
      },
    ]
 

export default function AleskPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 w-full ">
      <Breadcrumb current="ALESK" />
      <Hero
        category="Mobile · Web · Desktop Application"
        title="ALESK"
        subtitle="A comprehensive healthcare customer management platform connecting patients, doctors, and clinics across the Portuguese-speaking community."
        image="https://placehold.co/1600x900/141418/a78bfa?text=ALESK"
        imageAlt="ALESK healthcare platform hero screenshot"
        info={[
          { label: "Client", value: "Confidential" },
          { label: "Date", value: "Jul 2023" },
          { label: "Category", value: "Healthcare Platform" },
          { label: "Tech Stack", value: "Flutter Flow, Firebase" },
        ]}
      />

      <Section label="Project Brief" heading="Overview">
        <p className="max-w-3xl text-body">
          ALESK is a comprehensive, user-friendly customer management system built for healthcare
          service providers — hospitals and clinics — serving the Portuguese-speaking community. The
          platform gives patients easy access to nearby healthcare services, detailed doctor
          expertise, and authentic reviews to support informed decisions. It operates across three
          distinct ends: a Super User Admin, healthcare service providers, and patients.
        </p>
      </Section>

      <Section label="By the Numbers" heading="Key Stats">
        <StatGrid
          items={[
            { stat: "3", label: "Platform User Types", icon: "users" },
            { stat: "3", label: "Mobile, Web & Desktop", icon: "layers" },
            { stat: "100%", label: "Real-Time Financial Reporting", icon: "activity" },
            { stat: "24/7", label: "Built-In Chat & Communication", icon: "message-circle" },
          ]}
        />
      </Section>

      <Section label="What We Built" heading="Key Modules & Features">
        <div className="space-y-14">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
              <Monitor size={16} /> Super Admin Modules
            </div>
            <FeatureGrid
              items={[
                { title: "Admin Dashboard", body: "Centralized view of account balance, invoicing, receivables, and newly added service providers.", icon: "layout-dashboard" },
                { title: "User Management", body: "Register new service providers and control access levels across the platform.", icon: "users" },
                { title: "Financial Reports", body: "Searchable financial reports by date, county, and provider with PDF/CSV export.", icon: "file-bar-chart-2" },
                { title: "Content Management", body: "Manage each service provider's homepage — carousels, plans, specialties, and videos.", icon: "file-text" },
                { title: "Plans & Pricing", body: "Create and assign paid plans with varying pricing and feature sets.", icon: "credit-card" },
                { title: "Agreements", body: "Track agreement status across all providers with downloadable reports.", icon: "file-signature" },
              ]}
            />
          </div>
          <div>
            <div className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
              <Building2 size={16} /> Service Provider Modules
            </div>
            <FeatureGrid
              items={[
                { title: "Provider Dashboard", body: "Quick-access launchpad summarizing essential operational information.", icon: "rocket" },
                { title: "Registration", body: "Complete personal, address, and specialization details during onboarding.", icon: "clipboard-list" },
                { title: "Legal Entity Setup", body: "Register business identity as a hospital, clinic, or company.", icon: "building2" },
                { title: "Team Management", body: "Add health professionals and showcase their expertise to patients.", icon: "user-plus" },
                { title: "Financial Tracking", body: "View extracts, receivables, and transfers with visual pie charts.", icon: "pie-chart" },
                { title: "Integrated Chat", body: "Real-time communication between team members and professionals.", icon: "message-square" },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section label="Tech Stack" heading="Built With">
        <TechStack items={["Flutter Flow", "Firebase"]} />
      </Section>

      <Section label="Project Screenshots" heading="See It In Action">
        <Gallery
          images={[
            { src: "https://placehold.co/1600x1000/141418/a78bfa?text=Admin+Dashboard", alt: "ALESK admin dashboard screen" },
            { src: "https://placehold.co/1600x1000/141418/a78bfa?text=Financial+Charts", alt: "ALESK financial charts screen" },
            { src: "https://placehold.co/1600x1000/141418/a78bfa?text=Provider+Registration", alt: "ALESK service provider registration screen" },
            { src: "https://placehold.co/1600x1000/141418/a78bfa?text=My+Team", alt: "ALESK team management screen" },
            { src: "https://placehold.co/1600x1000/141418/a78bfa?text=Provider+Dashboard", alt: "ALESK provider dashboard screen" },
            { src: "https://placehold.co/1600x1000/141418/a78bfa?text=Chat", alt: "ALESK chat module screen" },
          ]}
        />
      </Section>

      <Section label="The Results" heading="Impact & Outcomes">
        <OutcomeGrid
          items={[
            { metric: "1", title: "Centralized Operations", body: "Unified admin control across hospitals, clinics, and laboratories from a single dashboard." },
            { metric: "3x", title: "Faster Onboarding", body: "Streamlined registration flow for both service providers and their teams." },
            { metric: "100%", title: "Transparent Finances", body: "Clear, exportable financial reporting for every provider and consumer." },
          ]}
        />
      </Section>

      <Quote
        text="[Client testimonial goes here — replace with actual feedback]"
        name="Client Name"
        role="Founder, Company"
        avatar="https://placehold.co/160x160/141418/a78bfa?text=Client"
      />

      <Section label="Explore More" heading="Related Case Studies">
        <Related
          items={[
            { src: "https://placehold.co/800x500/141418/a78bfa?text=Speakable", alt: "Speakable case study thumbnail", title: "Speakable", href: "/case-studies/speakable" },
            { src: "https://placehold.co/800x500/141418/a78bfa?text=MKGO", alt: "MKGO case study thumbnail", title: "MKGO", href: "#" },
            { src: "https://placehold.co/800x500/141418/a78bfa?text=Parakh+Jewellers", alt: "Parakh Jewellers case study thumbnail", title: "Parakh Jewellers", href: "#" },
          ]}
        />
      </Section>

      <CTABanner />
    </div>
  );
}
