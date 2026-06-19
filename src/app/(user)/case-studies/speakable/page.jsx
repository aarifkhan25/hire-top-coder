"use client"
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
    const  meta= [
      { title: "Speakable — Case Study | HireTopCoder" },
      {
        name: "description",
        content:
          "A personalized English learning platform connecting students in Poland with their ideal English teachers.",
      },
      { property: "og:title", content: "Speakable — Case Study | HireTopCoder" },
      {
        property: "og:description",
        content: "Personalized English learning platform built with React, Node.js, and MongoDB.",
      },
      {
        property: "og:image",
        content: "https://placehold.co/1200x630/141418/a78bfa?text=Speakable",
      },
    ]


export default function SpeakablePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 w-full ">
      <Breadcrumb current="Speakable" />
      <Hero
        category="Web Application"
        title="Speakable"
        subtitle="A personalized English learning platform connecting students in Poland with their ideal English teachers."
        image="https://placehold.co/1600x900/141418/a78bfa?text=Speakable"
        imageAlt="Speakable platform hero screenshot"
        info={[
          { label: "Client", value: "Confidential" },
          { label: "Date", value: "—" },
          { label: "Category", value: "Web Application" },
          { label: "Tech Stack", value: "React.js, Node.js, MongoDB" },
        ]}
      />

      <Section label="Project Brief" heading="Overview">
        <p className="max-w-3xl text-body">
          This platform provides a personalized English learning experience tailored for people in
          Poland. Users can book one-on-one sessions with their preferred teachers, choosing courses
          based on their personal preferences and learning goals. It offers full flexibility and
          customization, letting learners pick instructors who suit their style and schedule
          sessions at their convenience — a structured yet personalized way to improve English
          skills.
        </p>
      </Section>

      <Section label="By the Numbers" heading="Key Stats">
        <StatGrid
          items={[
            { stat: "7", label: "Core Modules" },
            { stat: "3", label: "User Roles (Admin, Teacher, Student)" },
            { stat: "100%", label: "Live Calendar Scheduling", icon: "calendar" },
            { stat: "256", label: "Bit Secure Payments", icon: "shield-check" },
          ]}
        />
      </Section>

      <Section label="What We Built" heading="Key Modules & Features">
        <FeatureGrid
          items={[
            { title: "Home Module", body: "Introduces available courses, instructors, and free trial options for new students.", icon: "home" },
            { title: "Sign In / Sign Up", body: "Secure username/password authentication with simple name, email, and password registration.", icon: "log-in" },
            { title: "Admin Panel", body: "Full control to add teachers and students, create packages and courses, set pricing, and manage bookings and inquiries.", icon: "shield-check" },
            { title: "Teacher Panel", body: "View assigned lectures, enrolled students, upcoming bookings, lecture timings, and session fees.", icon: "graduation-cap" },
            { title: "Student Panel", body: "Access booked lecture sessions, selected teachers, and full payment history for enrolled courses.", icon: "user" },
            { title: "Calendar Module", body: "Students select lecture timing while teachers manage and update their availability in real time.", icon: "calendar" },
            { title: "Payment Module", body: "Secure, trusted payment methods for purchasing courses with full transaction integrity.", icon: "credit-card" },
          ]}
        />
      </Section>

      <Section label="Tech Stack" heading="Built With">
        <TechStack items={["React.js", "Node.js", "MongoDB"]} />
      </Section>

      <Section label="Project Screenshots" heading="See It In Action">
        <Gallery
          images={[
            { src: "https://placehold.co/1600x1000/141418/a78bfa?text=Sign+Up", alt: "Speakable sign up screen" },
            { src: "https://placehold.co/1600x1000/141418/a78bfa?text=Sign+In", alt: "Speakable sign in screen" },
            { src: "https://placehold.co/1600x1000/141418/a78bfa?text=Teacher+List", alt: "Speakable teacher list screen" },
            { src: "https://placehold.co/1600x1000/141418/a78bfa?text=Admin+Panel", alt: "Speakable admin panel screen" },
            { src: "https://placehold.co/1600x1000/141418/a78bfa?text=Teacher+Panel", alt: "Speakable teacher panel screen" },
            { src: "https://placehold.co/1600x1000/141418/a78bfa?text=Student+Panel", alt: "Speakable student panel screen" },
          ]}
          wide={{
            src: "https://placehold.co/2400x1000/141418/a78bfa?text=Calendar",
            alt: "Speakable calendar module screen",
          }}
        />
      </Section>

      <Section label="The Results" heading="Impact & Outcomes">
        <OutcomeGrid
          items={[
            { metric: "2x", title: "Streamlined Booking", body: "Simplified the process for students to find and book sessions with the right teacher." },
            { metric: "100%", title: "Flexible Learning", body: "Enabled fully customizable schedules for both students and teachers through the calendar module." },
            { metric: "PCI", title: "Secure Payments", body: "Trusted payment processing built directly into the platform for course purchases." },
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
            { src: "https://placehold.co/800x500/141418/a78bfa?text=ALESK", alt: "ALESK case study thumbnail", title: "ALESK", href: "/case-studies/alesk" },
            { src: "https://placehold.co/800x500/141418/a78bfa?text=MKGO", alt: "MKGO case study thumbnail", title: "MKGO", href: "#" },
            { src: "https://placehold.co/800x500/141418/a78bfa?text=Casino", alt: "Casino case study thumbnail", title: "Casino", href: "#" },
          ]}
        />
      </Section>

      <CTABanner />
    </div>
  );
}
