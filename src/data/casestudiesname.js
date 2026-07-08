export const allCaseStudiesData = {
  case_studies: [
    {
      casestudiename: "alesk",
      category: "Mobile · Web · Desktop Application",
      title: "ALESK",
      subtitle:
        "A comprehensive healthcare customer management platform connecting patients, doctors, and clinics across the Portuguese-speaking community.",
      image: "/assets/case-2.png",
      imageAlt: "ALESK healthcare platform ",
      info: [
        { label: "Client", value: "Confidential" },
        { label: "Date", value: "Jul 2023" },
        { label: "Category", value: "Healthcare Platform" },
        { label: "Tech Stack", value: "Flutter Flow, Firebase" },
      ],
      prag: ` ALESK is a comprehensive, user-friendly customer management system
          built for healthcare service providers — hospitals and clinics —
          serving the Portuguese-speaking community. The platform gives patients
          easy access to nearby healthcare services, detailed doctor expertise,
          and authentic reviews to support informed decisions. It operates
          across three distinct ends: a Super User Admin, healthcare service
          providers, and patients.`,
      state1grid: [
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
      ],
      modules: [
        {
          icon: "users",
          label: "Super Admin Modules",
          featureGird1: [
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
          ],
        },
        {
          icon: "Building2",
          label: "Service Provider Modules",
          featureGird2: [
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
          ],
        },
      ],

      techstack: ["Flutter Flow", "Firebase"],
      gallery: [
        {
          src: "/assets/c1.png",
          alt: "ALESK admin dashboard screen",
        },
        {
          src: "/assets/c7.png",
          alt: "ALESK financial charts screen",
        },
        {
          src: "/assets/c8.png",
          alt: "ALESK service provider registration screen",
        },
        {
          src: "/assets/c5.png",
          alt: "ALESK team management screen",
        },
        {
          src: "/assets/c1.png",
          alt: "ALESK provider dashboard screen",
        },
        {
          src: "/assets/c3.png",
          alt: "ALESK chat module screen",
        },
      ],
      outcome: [
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
      ],
    },
    {
      casestudiename: "speakable",
      category: "Web Application",
      title: "Speakable",
      subtitle:
        "A personalized English learning platform connecting students in Poland with their ideal English teachers.",
      image: "/assets/case-1.png",
      imageAlt: "Speakable platform hero screenshot",
      info: [
        { label: "Client", value: "Confidential" },
        { label: "Date", value: "—" },
        { label: "Category", value: "Web Application" },
        { label: "Tech Stack", value: "React.js, Node.js, MongoDB" },
      ],
      prag: `  This platform provides a personalized English learning experience
          tailored for people in Poland. Users can book one-on-one sessions with
          their preferred teachers, choosing courses based on their personal
          preferences and learning goals. It offers full flexibility and
          customization, letting learners pick instructors who suit their style
          and schedule sessions at their convenience — a structured yet
          personalized way to improve English skills.`,
      state1grid: [
        { stat: "7", label: "Core Modules" },
        { stat: "3", label: "User Roles (Admin, Teacher, Student)" },
        {
          stat: "100%",
          label: "Live Calendar Scheduling",
          icon: "calendar",
        },
        { stat: "256", label: "Bit Secure Payments", icon: "shield-check" },
      ],
      modules: [
        {
          featureGird1: [
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
          ],
        },
      ],

      techstack: ["React.js", "Node.js", "MongoDB"],
      gallery: [
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
      ],
      outcome: [
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
      ],
    },
    {
      casestudiename: "mkgo",
      category: "Mobile Application",
      title: "MKGO",
      subtitle:
        "A dedicated mobile application developed to streamline operations for drivers associated with Innoya Services.",
      image: "/assets/case-1.png",
      imageAlt: "MKGO platform hero ",
      info: [
        { label: "Client", value: "Confidential" },
        { label: "Date", value: "—" },
        { label: "Category", value: "Mobile Application" },
        { label: "Tech Stack", value: "Flutter, Firebase, API" },
      ],
      prag: `  MKGO is a dedicated mobile application developed to streamline operations for drivers associated with Innoya Services, with a focus on Toulouse. The application aims to enhance the efficiency and responsiveness of driver scheduling and dispatching processes, ultimately improving service quality and customer satisfaction.`,
      state1grid: [
        { stat: "7", label: "Core Modules" },
        { stat: "3", label: "User Roles (Admin, Teacher, Student)" },
        {
          stat: "100%",
          label: "Live Calendar Scheduling",
          icon: "calendar",
        },
        { stat: "256", label: "Bit Secure Payments", icon: "shield-check" },
      ],
      modules: [
        {
          featureGird1: [
            {
              title: "User Authentication",
              body: `Implement secure login mechanisms such as username/password.
Ensure authentication protocols comply with industry standards to protect user data.
`,
              icon: "users",
            },
            {
              title: "Managing User Roles and Permissions:",
              body: "Define user roles (e.g., driver, dispatcher, administrator) and assign appropriate permissions to each role.",
              icon: "users",
            },
            {
              title: "Filtering Rides/Trips",
              body: "Enable users to filter rides or trips based on various criteria such as region, trip type (e.g., pickup, delivery), driver availability, or trip status.",
              icon: "shield-check",
            },
            {
              title: "Trip Status Management",
              body: "Provide a user interface for drivers to view trip requests, accept or decline trips, and update trip statuses.",
              icon: "graduation-cap",
            },
            {
              title: "Map Feature",
              body: "Integrate mapping APIs to display trip routes, pickup/delivery locations, and current driver location.",
              icon: "user",
            },
            {
              title: "WebView for Viewing PDFs",
              body: "Implement additional functionalities within the WebView, such as zooming, scrolling, and downloading PDF files for offline viewing.",
              icon: "calendar",
            },
            {
              title: "Expense Report",
              body: "Allow drivers to record and track expenses incurred during trips, such as fuel, tolls, parking fees, and vehicle maintenance.",
              icon: "credit-card",
            },
          ],
        },
      ],

      techstack: ["Flutter", "Firebase", "API"],
      gallery: [
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
      ],
      outcome: [
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
      ],
    },
    {
      casestudiename: "cherish-dating-app",
      category: "Mobile Application",
      title: "Cherish Dating App",
      subtitle:
        " mobile applications that help people find and connect with potential romantic partners or friends.",
      image: "/assets/case-2.png",
      imageAlt: "Cherish Dating App",
      info: [
        { label: "Client", value: "Confidential" },
        { label: "Date", value: "Jul 2023" },
        { label: "Category", value: "Dating App" },
        { label: "Tech Stack", value: "Flutter Flow, Firebase" },
      ],
      prag: ` Cherish Dating App is mobile applications that help people find and connect with potential romantic partners or friends. Users will be able to create profiles with their photos and information, and they can browse through other profiles to match with people who share their interests. The main Features of this app will be messaging, swiping, and location-based matching as per there preferred search criteria. It will be free as well as premium the premium will be added free and various other premium facilities. `
,
      state1grid: [
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
      ],
     
  modules: [
        {
          featureGird1: [
            {
              title: "User Profiles",
              body: " Users create profiles with photos and personal information.",
              icon: "users",
            },
            {
              title: "Search and Filters",
              body: " Users can also search for specific profiles and apply filters.",
              icon: "log-in",
            },
            {
              title: "Messaging",
              body: "Users can have Real-time chat for communication between matched users.",
              icon: "shield-check",
            },
            {
              title: "Location-Based Matching",
              body: "Users can see and match with people nearby.",
              icon: "graduation-cap",
            },
            {
              title: "Swipe Feature",
              body: "Users can swipe right to like and left to pass on profiles.",
              icon: "user",
            },
            {
              title: "Premium Features:",
              body: "Offer premium features through subscriptions (Add Free).",
              icon: "calendar",
            },
            {
              title: "Payment Module",
              body: "Secure, trusted payment gateways for in-app purchases and subscriptions.",
              icon: "credit-card",
            },
          ],
        },
      ],
      techstack: ["Flutter Flow", "Firebase"],
      gallery: [
        {
          src: "/assets/c1.png",
          alt: "ALESK admin dashboard screen",
        },
        {
          src: "/assets/c7.png",
          alt: "ALESK financial charts screen",
        },
        {
          src: "/assets/c8.png",
          alt: "ALESK service provider registration screen",
        },
        {
          src: "/assets/c5.png",
          alt: "ALESK team management screen",
        },
        {
          src: "/assets/c1.png",
          alt: "ALESK provider dashboard screen",
        },
        {
          src: "/assets/c3.png",
          alt: "ALESK chat module screen",
        },
      ],
      outcome: [
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
      ],
    },
    {
      casestudiename: "casino",
      category: "Web Application",
      title: "Rolling Star Casino",
      subtitle:
        "allow users to play various games using cryptocurrencies like Bitcoin, Ethereum, or others.",
      image: "/assets/case-1.png",
      imageAlt: "Rolling Star Casino platform hero screenshot",
      info: [
        { label: "Client", value: "Confidential" },
        { label: "Date", value: "—" },
        { label: "Category", value: "Web Application" },
        { label: "Tech Stack", value: "React.js, Node.js, MongoDB" },
      ],
      prag: ` These platforms typically allow users to play various games using cryptocurrencies like Bitcoin, Ethereum, or others. Players can win more cryptocurrency by playing these games and can then choose to exchange it for other cryptocurrencies, convert it into real currency, or withdraw it to their bank accounts. This platform offers a plethora of thrilling games and features designed to elevate user gaming experience to new heights.`,
      state1grid: [
        { stat: "7", label: "Core Modules" },
        { stat: "3", label: "User Roles (Admin, Teacher, Student)" },
        {
          stat: "100%",
          label: "Live Calendar Scheduling",
          icon: "calendar",
        },
        { stat: "256", label: "Bit Secure Payments", icon: "shield-check" },
      ],
      modules: [
        {
          featureGird1: [
            {
              title: "Game Module",
              body: "User explores a game page, featuring an array of captivating options for every gaming enthusiast.",
              icon: "home",
            },
            {
              title: "Log in and Register Module",
              body: " This module implements secure sign-in mechanisms, including username/password authentication.",
              icon: "log-in",
            },
            {
              title: "User Profile Details",
              body: "The user account dashboard provides comprehensive details, including User ID, Cashback Percentage.",
              icon: "shield-check",
            },
            {
              title: "Wallet ",
              body: "The wallet feature empowers users by enabling currency exchange, conversion into Bitcoin.",
              icon: "graduation-cap",
            },
          
          ],
        },
      ],

      techstack: ["React.js", "Node.js", "MongoDB"],
      gallery: [
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
      ],
      outcome: [
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
      ],
    },
    {
      casestudiename: "brainlylingo",
      category: "Web Application",
      title: "BrainlyLingo",
      subtitle:
        " designed for children, offering an immersive learning experience through diverse genre stories.",
      image: "/assets/case-1.png",
      imageAlt: "BrainlyLingo platform hero screenshot",
      info: [
        { label: "Client", value: "Confidential" },
        { label: "Date", value: "—" },
        { label: "Category", value: "Web Application" },
        { label: "Tech Stack", value: "React.js, Node.js, MongoDB" },
      ],
      prag: ` This web application is designed for children, offering an immersive learning experience through diverse genre stories, accompanied by engaging activities like drag-and-drop and story-specific quizzes, with a primary emphasis on fostering vocabulary acquisition and enhancing reading comprehension in an enjoyable manner.`,
      state1grid: [
        { stat: "7", label: "Core Modules" },
        { stat: "3", label: "User Roles (Admin, Teacher, Student)" },
        {
          stat: "100%",
          label: "Live Calendar Scheduling",
          icon: "calendar",
        },
        { stat: "256", label: "Bit Secure Payments", icon: "shield-check" },
      ],
      modules: [
        {
          featureGird1: [
              {
              title: "Admin panel",
              body: " Within the admin panel, administrators possess full access to all stories, enabling the addition of essential data.",
              icon: "home",
            },
          
            {
              title: "Dash Board",
              body: "The Dashboard provides a concise overview of the child's performance.",
              icon: "home",
            },
            {
              title: "Sign in and sign up module",
              body: " This module implements secure sign-in mechanisms, including username/password authentication.",
              icon: "log-in",
            },
            {
              title: "Daily Quiz Module",
              body: "The daily quiz displays questions from the Brain Quest section that the child answered correctly.",
              icon: "shield-check",
            },
            {
              title: "Drag and Drop Modules  ",
              body: "In this interactive vocabulary matching activity, children match words with meanings.",
              icon: "graduation-cap",
            },
            {
              title: "Brain Quest Activity- ",
              body: "After attempting quiz questions specific to the story, users receive feedback on both correct and incorrect answers.",
              icon: "graduation-cap",
            },
            {
              title: "Genre ",
              body: "various types of stories. Users can select any option from the dropdown menu, and they will be directed to a page containing all the stories.",
              icon: "graduation-cap",
            },
          
          ],
        },
      ],

      techstack: ["React.js", "Node.js", "MongoDB"],
      gallery: [
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
      ],
      outcome: [
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
      ],
    },
  ],
  
};
