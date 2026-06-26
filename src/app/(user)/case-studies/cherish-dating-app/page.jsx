
import { Breadcrumb, CTABanner, FeatureGrid, Gallery, Hero1, OutcomeGrid, Section1, Stat1Grid, TechStack, } from "@/components/site/Shared.jsx";
export const metadata = {
  title: "Speakable — Case Study | HireTopCoder",
  description:
    "A personalized English learning platform connecting students in Poland with their ideal English teachers.",

  property: {
    "og:title": "Speakable — Case Study | HireTopCoder",
    "og:description":
      "Personalized English learning platform built with React, Node.js, and MongoDB.",
    "og:image": "/assets/logo1.png",
  },
};


export default function CherishDatingPage() {
  return (
    <div className=" w-full ">
     <div className="pt-20 md:pt-28">
      <Breadcrumb 
               items={[
                 { label: "Home", to: "/" },
                 { label: "Case Studie" },
                 { label: "Cherish Dating App" },
                ]}
                />
                </div> 
      <Hero1 
      
        category="Mobile  Application"
        title="Cherish Dating App"
        subtitle="mobile applications that help people find and connect with potential romantic partners or friends. Users will be able to create profiles with their photos and information."
        image="/assets/case-1.png"
        imageAlt="Chearish Dating  platform hero screenshot"
        info={[
          { label: "Client", value: "Confidential" },
          { label: "Date", value: "—" },
          { label: "Category", value: "Web Application" },
          { label: "Tech Stack", value: "Flutter,Firebase,Payment GateWay" },
        ]}
      />

      <Section1   label="Project Brief" heading="Overview">
        <p className=" w-full text-[#b1afb8] text-base 2xl:text-lg xl:pr-30 2xl:pr-60">
          Cherish Dating App is mobile applications that help people find and connect with potential romantic partners or friends. Users will be able to create profiles with their photos and information, and they can browse through other profiles to match with people who share their interests. The main Features of this app will be messaging, swiping, and location-based matching as per there preferred search criteria. It will be free as well as premium the premium will be added free and various other premium facilities. 
        </p>
       </Section1 > 

      <Section1   label="By the Numbers" heading="Key Stats">
        <Stat1Grid
          items={[
            { stat: "7", label: "Core Modules" },
            { stat: "3", label: "User Roles (Admin, Teacher, Student)" },
            {
              stat: "100%",
              label: "Live Calendar Scheduling",
              icon: "calendar",
            },
            { stat: "256", label: "Bit Secure Payments", icon: "shield-check" },
          ]}
        />
       </Section1 > 

      <Section1   label="What We Built" heading="Key Modules & Features">
        <FeatureGrid
          items={[
            {
              title: "Home Module",
              body: "Introduces available courses, instructors, and free trial options for new students.",
              icon: "home",
            },
            {
              title: "Sign In / Sign Up",
              body: "Secure username/password authentication with simple name, email, and password registration.",
              icon: "log-in",
            },
            {
              title: "Admin Panel",
              body: "Full control to add teachers and students, create packages and courses, set pricing, and manage bookings and inquiries.",
              icon: "shield-check",
            },
            {
              title: "Teacher Panel",
              body: "View assigned lectures, enrolled students, upcoming bookings, lecture timings, and session fees.",
              icon: "graduation-cap",
            },
            {
              title: "Student Panel",
              body: "Access booked lecture sessions, selected teachers, and full payment history for enrolled courses.",
              icon: "user",
            },
            {
              title: "Calendar Module",
              body: "Students select lecture timing while teachers manage and update their availability in real time.",
              icon: "calendar",
            },
            {
              title: "Payment Module",
              body: "Secure, trusted payment methods for purchasing courses with full transaction integrity.",
              icon: "credit-card",
            },
          ]}
        />
       </Section1 > 

      <Section1   label="Tech Stack" heading="Built With">
        <TechStack items={["React.js", "Node.js", "MongoDB"]} />
       </Section1 > 

      <Section1   label="Project Screenshots" heading="See It In Action">
        <Gallery
          images={[
            {
              src: "/assets/logo1.png",
              alt: "Speakable sign up screen",
            },
            {
              src: "/assets/logo1.png",
              alt: "Speakable sign in screen",
            },
            {
              src: "/assets/logo1.png",
              alt: "Speakable teacher list screen",
            },
            {
              src: "/assets/logo1.png",
              alt: "Speakable admin panel screen",
            },
            {
              src: "/assets/logo1.png",
              alt: "Speakable teacher panel screen",
            },
            {
              src: "/assets/logo1.png",
              alt: "Speakable student panel screen",
            },
          ]}
          wide={{
            src: "/assets/logo1.png",
            alt: "Speakable calendar module screen",
          }}
        />
       </Section1 > 

      <Section1   label="The Results" heading="Impact & Outcomes">
        <OutcomeGrid
          items={[
            {
              metric: "2x",
              title: "Streamlined Booking",
              body: "Simplified the process for students to find and book sessions with the right teacher.",
            },
            {
              metric: "100%",
              title: "Flexible Learning",
              body: "Enabled fully customizable schedules for both students and teachers through the calendar module.",
            },
            {
              metric: "PCI",
              title: "Secure Payments",
              body: "Trusted payment processing built directly into the platform for course purchases.",
            },
          ]}
        />
       </Section1 > 

    

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
