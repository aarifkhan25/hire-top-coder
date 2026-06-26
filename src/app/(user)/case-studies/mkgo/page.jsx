
import { Breadcrumb, CTABanner, FeatureGrid, Gallery, Hero1, OutcomeGrid,   Section1, Stat1Grid, TechStack, } from "@/components/site/Shared.jsx";
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


export default function MkgoPage() {
  return (
    <div className=" w-full ">
     <div className="pt-20 md:pt-28">
      <Breadcrumb 
               items={[
                 { label: "Home", to: "/" },
                 { label: "Case Studie" },
                 { label: "Mkgo" },
                ]}
                />
                </div> 
      <Hero1 
      
        category="Mobile Application"
        title="MKGO"
        subtitle="dedicated mobile application developed to streamline operations for drivers associated with Innoya Services, with a focus on Toulouse."
        image="/assets/case-1.png"
        imageAlt="Speakable platform hero screenshot"
        info={[
          { label: "Client", value: "Confidential" },
          { label: "Date", value: "—" },
          { label: "Category", value: "Mobile Application" },
          { label: "Tech Stack", value: "Flutter, Firebase, API" },
        ]}
      />

      <Section1   label="Project Brief" heading="Overview">
        <p className=" w-full text-[#b1afb8] text-base 2xl:text-lg xl:pr-30 2xl:pr-60">
         MKGO is a dedicated mobile application developed to streamline operations for drivers associated with Innoya Services, with a focus on Toulouse. The application aims to enhance the efficiency and responsiveness of driver scheduling and dispatching processes, ultimately improving service quality and customer satisfaction.
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
              title: "User Authentication",
              body: "Implement secure login mechanisms such as username/password.",
              icon: "home",
            },
            {
              title: "Managing User Roles and Permissions",
              body: "Define user roles (e.g., driver, dispatcher, administrator) and assign appropriate permissions to each role.",
              icon: "log-in",
            },
            {
              title: "Filtering Rides/Trips ",
              body: "Enable users to filter rides or trips based on various criteria such as region, trip type (e.g., pickup, delivery), driver availability, or trip status.",
              icon: "shield-check",
            },
            {
              title: "Trip Status Management",
              body: "Provide a user interface for drivers to view trip requests, accept or decline trips, and update trip statuses.",
              icon: "graduation-cap",
            },
            {
              title: "Trip Details",
              body: "Display comprehensive trip details including pickup/delivery locations, customer information, trip duration, and any special instructions or requirements.",
              icon: "user",
            },
            {
              title: "Notifications",
              body: "Send real-time notifications to drivers and dispatchers regarding trip requests, updates, and changes in trip status.",
              icon: "calendar",
            },
            {
              title: "Map Features",
              body: "Integrate mapping APIs to display trip routes, pickup/delivery locations, and current driver location.",
              icon: "credit-card",
            },
          ]}
        />
       </Section1 > 

      <Section1   label="Tech Stack" heading="Built With">
        <TechStack items={["Flutter", "Firebase", "Api"]} />
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
