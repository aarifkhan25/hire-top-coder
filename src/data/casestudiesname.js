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
              icon: "layout-dashboard",
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
          src: "/assets/case-studies/alesk/c1.png",
          alt: "ALESK admin dashboard screen",
        },
        {
          src: "/assets/case-studies/alesk/c7.png",
          alt: "ALESK financial charts screen",
        },
        {
          src: "/assets/case-studies/alesk/c8.png",
          alt: "ALESK service provider registration screen",
        },
        {
          src: "/assets/case-studies/alesk/c5.png",
          alt: "ALESK team management screen",
        },
        {
          src: "/assets/case-studies/alesk/c1.png",
          alt: "ALESK provider dashboard screen",
        },
        // {
        //   src: "/assets/case-studies/alesk/c3.png",
        //   alt: "ALESK chat module screen",
        // },
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
      image: "/assets/case-studies/speakable/img1.png",
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
          src: "/assets/case-studies/speakable/img4.png",
          alt: "Speakable admin panel screen",
        },
        {
          src: "/assets/case-studies/speakable/img6.png",
          alt: "Speakable student dashboard screen",
        },
        {
          src: "/assets/case-studies/speakable/img2.png",
          alt: "Speakable sign in screen",
        },
        {
          src: "/assets/case-studies/speakable/img3.png",
          alt: "Speakable teacher list screen",
        },
        {
          src: "/assets/case-studies/speakable/img5.png",
          alt: "Speakable teachers table screen",
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
              icon: "log-in",
            },
            {
              title: "Managing User Roles and Permissions:",
              body: "Define user roles (e.g., driver, dispatcher, administrator) and assign appropriate permissions to each role.",
              icon: "user-plus",
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
              icon: "search",
            },
            {
              title: "Messaging",
              body: "Users can have Real-time chat for communication between matched users.",
              icon: "message-square",
            },
            {
              title: "Location-Based Matching",
              body: "Users can see and match with people nearby.",
              icon: "mappin-check",
            },
            {
              title: "Swipe Feature",
              body: "Users can swipe right to like and left to pass on profiles.",
              icon: "swap",
            },
            {
              title: "Premium Features:",
              body: "Offer premium features through subscriptions (Add Free).",
              icon: "primium",
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
      image: "/assets/case-studies/casino/img1.png",
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
              icon: "game",
            },
            {
              title: "Log in and Register Module",
              body: " This module implements secure sign-in mechanisms, including username/password authentication.",
              icon: "log-in",
            },
            {
              title: "User Profile Details",
              body: "The user account dashboard provides comprehensive details, including User ID, Cashback Percentage.",
              icon: "users",
            },
            {
              title: "Wallet ",
              body: "The wallet feature empowers users by enabling currency exchange, conversion into Bitcoin.",
              icon: "credit-card",
            },
          
          ],
        },
      ],

      techstack: ["React.js", "Node.js", "MongoDB"],
      gallery: [
        {
          src: "/assets/case-studies/casino/img2.png",
          alt: "Casino login screen",
        },
        {
          src: "/assets/case-studies/casino/img3.png",
          alt: "Casino register screen",
        },
        {
          src: "/assets/case-studies/casino/img4.png",
          alt: "Casino games screen",
        },
        {
          src: "/assets/case-studies/casino/img5.png",
          alt: "Casino wallet screen",
        }
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
              icon: "shield-check",
            },
          
            {
              title: "DashBoard",
              body: "The Dashboard provides a concise overview of the child's performance.",
              icon: "layout-dashboard",
            },
            {
              title: "Sign in and sign up module",
              body: " This module implements secure sign-in mechanisms, including username/password authentication.",
              icon: "log-in",
            },
            {
              title: "Daily Quiz Module",
              body: "The daily quiz displays questions from the Brain Quest section that the child answered correctly.",
              icon: "graduation-cap",
            },
            {
              title: "Drag and Drop Modules  ",
              body: "In this interactive vocabulary matching activity, children match words with meanings.",
              icon: "primium",
            },
            {
              title: "Brain Quest Activity- ",
              body: "After attempting quiz questions specific to the story, users receive feedback on both correct and incorrect answers.",
              icon: "brain",
            },
            {
              title: "Genre ",
              body: "various types of stories. Users can select any option from the dropdown menu, and they will be directed to a page containing all the stories.",
              icon: "file-text",
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
      casestudiename: "ai",
      category: "Web Application",
      title: "Ai Chatbot",
      subtitle:
        "platform specializes in creating a Chabot for the company’s website to manage customer queries using AI.",
      image: "/assets/case-1.png",
      imageAlt: "ai platform hero screenshot",
      info: [
        { label: "Client", value: "Confidential" },
        { label: "Date", value: "—" },
        { label: "Category", value: "Web Application" },
        { label: "Tech Stack", value: "React.js, Node.js, MongoDB" },
      ],
      prag: ` This platform specializes in creating a Chatbot for the company’s website to manage customer queries using AI. It helps reduce manpower and handle multiple queries from different customers simultaneously. The company can add the most commonly asked questions with their corresponding answers to the Chabot. If the Chabot is unable to answer a particular question, an employee from the company is assigned to resolve the query.`,
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
              title: "Creating Chat Module",
              body: " The Company can add the most common questions that customers may have about the platform by providing answers upfront.",
              icon: "message-square",
            },
          
            {
              title: "Chat Bot Module",
              body: " In the Chabot section, the company can test the Chabot, generate the code for the questions and answers they created",
              icon: "chat bot",
            },
            {
              title: "Log in and Register Module",
              body: " This module implements secure sign-in mechanisms, including username/password authentication.",
              icon: "log-in",
            },
            {
              title: "Add user Role ",
              body: " In this section, a company can add its employees and assign roles. Then, they can grant access.",
              icon: "shield-check",
            },
            {
              title: "Employees Page Module  ",
              body: "In this interactive vocabulary matching activity, children match words with meanings.",
              icon: "user",
            },
            {
              title: "Payments Module  ",
              body: " The Company can view details about the payments made to subscribe to the particular Chabot AI platform.",
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
      casestudiename: "amicco",
      category: "Mobile Application",
      title: "Amicco",
      subtitle:
        "This application offers a streamlined solution for buyers, particularly those from garages, to communicate directly with sellers,",
      image: "/assets/case-2.png",
      imageAlt: "amicco App",
      info: [
        { label: "Client", value: "Confidential" },
        { label: "Date", value: "Jul 2023" },
        { label: "Category", value: "Dating App" },
        { label: "Tech Stack", value: "Flutter Flow, Firebase" },
      ],
      prag: ` This application offers a streamlined solution for buyers, particularly those from garages, to communicate directly with sellers, check product availability, and place orders for auto parts and automobiles. Buyers can personally select their preferred sellers, review available inventory, and add more items to their orders as needed. Additionally, they have the flexibility to cancel their orders at any time.`
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
              title: "Call and chat feature",
              body: "enabling buyers and sellers to communicate directly with each other for a seamless transaction experience.",
              icon: "message-square",
            },
            {
              title: "User authentication",
              body: "Employing robust user authentication mechanisms to guarantee secure access to the platform.",
              icon: "log-in",
            },
            {
              title: "User dashboard",
              body: " The user dashboard includes comprehensive order details, allowing users to view the status of all their orders.",
              icon: "layout-dashboard",
            },
            {
              title: "Seller Panel Dashboard",
              body: "The seller panel dashboard displays a list of orders from different garage buyers and owners, with a button that shows the status of each order.",
              icon: "layout-dashboard",
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
      casestudiename: "brokerremarks",
      category: "Web Application",
      title: "BrokerRemarks",
      subtitle:
        "Broker Remarks is a comprehensive real estate management web application designed to connect real estate agents and potential buyers seamlessly.",
      image: "/assets/case-studies/brokerRemarks/img.png",
      imageAlt: "BrokerRemarks platform hero screenshot",
      info: [
        { label: "Client", value: "Confidential" },
        { label: "Date", value: "—" },
        { label: "Category", value: "Web Application" },
        { label: "Tech Stack", value: "Bubble.io,React.js, Node.js, MongoDB" },
      ],
      prag: `Broker Remarks is a comprehensive real estate management web application designed to connect real estate agents and potential buyers seamlessly. The platform provides agents with the tools to list properties, manage leads, and track performance, while offering buyers an easy-to-use interface to search for and contact agents about available properties. With additional functionalities such as SMS notifications, voice calls via Twilio integration, and powerful subscription management, the platform ensures smooth and secure communication, lead management.`,
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
              title: "For Agents",
              body: " Access performance data, including property views, lead conversion rates, and engagement statistics to optimize sales efforts.",
              icon: "chat bot",
            },
          
            {
              title: "For Buyers",
              body: "Buyers can directly message agents or request a call using Twilio’s SMS and voice services to inquire about propertie",
              icon: "message-square",
            },
            {
              title: "For Super Admin",
              body: "The Super Admin monitors all leads, assigns them to agents, and reviews platform-wide performance and financial reports.",
              icon: "shield-check",
            },
            {
              title: "For Employees", 
              body: "Employees help with subscription updates, lead tracking, and offer basic analytics to agents.",
              icon: "users",
            },
            {
              title: "Twilio Integration for Enhanced Communication ",
              body: "Increase platform security by using Twilio for two-factor authentication to verify user identities and ensure safe transactions",
              icon: "log-in",
            },
            {
              title: "Chat System  ",
              body: "Buyers and agents can exchange messages directly via the platform, ensuring easy and secure communication.",
              icon: "message-circle",
            },
           
           
            {
              title: "Subscription Management",
              body: "Subscriptions can be set to automatically renew, with reminders sent via SMS.",
              icon: "primium",
            },
           
          
          ],
        },
      ],

      techstack: ["React.js", "Node.js", "MongoDB"],
      gallery: [
        
        {
          src: "/assets/case-studies/brokerRemarks/img1.png",
          alt: "Broker Remarks sign up screen",
        },
        {
      src: "/assets/case-studies/brokerRemarks/img3.png",
          alt: "Broker Remarks Dashboard screen",
        },
         {
          src: "/assets/case-studies/brokerRemarks/img5.png",
          alt: "Broker Remarks profile screen",
        },
        {
          src: "/assets/case-studies/brokerRemarks/img6.png",
          alt: "Broker Remarks subscription plans screen",
        },
        {
         src: "/assets/case-studies/brokerRemarks/img4.png",
          alt: "Broker Remarks questions screen",
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
      casestudiename: "mammuth",
      category: "Mobile Application",
      title: "Mammuth",
      subtitle:
        "a state-of-the-art job application platform tailored to make job hunting seamless and efficient.",
      image: "/assets/case-2.png",
      imageAlt: "amicco App",
      info: [
        { label: "Client", value: "Confidential" },
        { label: "Date", value: "Jul 2023" },
        { label: "Category", value: "Real State Mobile app" },
        { label: "Tech Stack", value: "Flutter Flow, Firebase" },
      ],
      prag: <>Mammuth is a state-of-the-art job application platform tailored to make job hunting seamless and efficient. The platform is designed to cater to the diverse needs of job seekers, whether they are freshers looking for their first opportunity or seasoned professionals exploring new horizons. Mammuth connects users directly with potential employers, making the job search process intuitive and hassle-free.<br/>Mammuth is not just a job application platform—it’s a comprehensive career development tool that helps users navigate their professional journeys with confidence. Whether it’s finding the right job or building skills for the future, Mammuth is the ultimate companion for today’s job seekers.</>
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
              title: "User KYC through UIDAI portal",
              body: "Leveraging the UIDAI portal for Know Your Customer (KYC) verification, adhering to regulatory standards and bolstering trust in user identities.",
              icon: "users",
            },
            {
              title: "User authentication",
              body: "Employing robust user authentication mechanisms to guarantee secure access to the platform.",
              icon: "log-in",
            },
            {
              title: "Personalized Dashboard for every User",
              body: "Offering a dynamic and customizable dashboard interface tailored to individual user preferences and requirements.",
              icon: "layout-dashboard",
            },
            {
              title: "Upcoming Services and Properties",
              body: "Providing comprehensive listings of forthcoming services and properties.",
              icon: "graduation-cap",
            },
           
            {
              title: "Safe & Secure payment Portal",
              body: "Ensuring the integrity and confidentiality of financial transactions through a state-of-the-art payment portal.",
              icon: "credit-card",
            },
           
            {
              title: "2-Types of payment options",
              body: "Offering two distinct payment options, including a 2.5% token amount or full payment,",
              icon: "shield-check",
            },
            {
              title: "Portfolio of every user",
              body: "Facilitating real-time monitoring and management of user portfolios, providing comprehensive insights into investment performance and asset allocation.",
              icon: "user",
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
      casestudiename: "mircromitti",
      category: "Mobile Application",
      title: "Micro Mitti",
      subtitle:
        "An Real Estate investment application. It is, Indore’s premier Prop-tech company, revolutionizing the landscape of real estate investments.",
      image: "/assets/case-2.png",
      imageAlt: "amicco App",
      info: [
        { label: "Client", value: "Confidential" },
        { label: "Date", value: "Jul 2023" },
        { label: "Category", value: "Real State Mobile app" },
        { label: "Tech Stack", value: "Flutter Flow, Firebase" },
      ],
      prag: `Micro Mitti's is an Real Estate investment application. It is, Indore’s premier Prop-tech company, revolutionizing the landscape of real estate investments. We empower our investors to stake a claim in prime real estate assets without the hefty price tag or the typical obligations that come with full-fledged property ownership.`
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
              title: "User KYC through UIDAI portal",
              body: "Leveraging the UIDAI portal for Know Your Customer (KYC) verification, adhering to regulatory standards and bolstering trust in user identities.",
              icon: "users",
            },
            {
              title: "User authentication",
              body: "Employing robust user authentication mechanisms to guarantee secure access to the platform.",
              icon: "log-in",
            },
            {
              title: "Personalized Dashboard for every User",
              body: "Offering a dynamic and customizable dashboard interface tailored to individual user preferences and requirements.",
              icon: "layout-dashboard",
            },
            {
              title: "Upcoming Services and Properties",
              body: "Providing comprehensive listings of forthcoming services and properties.",
              icon: "graduation-cap",
            },
           
            {
              title: "Safe & Secure payment Portal",
              body: "Ensuring the integrity and confidentiality of financial transactions through a state-of-the-art payment portal.",
              icon: "credit-card",
            },
           
            {
              title: "2-Types of payment options",
              body: "Offering two distinct payment options, including a 2.5% token amount or full payment,",
              icon: "shield-check",
            },
            {
              title: "Portfolio of every user",
              body: "Facilitating real-time monitoring and management of user portfolios, providing comprehensive insights into investment performance and asset allocation.",
              icon: "user",
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
      casestudiename: "parakh-jewellers",
      category: "Mobile Application",
      title: "Parakh Jewellers",
      subtitle:
        "This app facilitates investment in gold and silver, allowing users to invest at the current market prices.",
      image: "/assets/case-studies/parakh/img1.png",
      
      imageAlt: "amicco App",
      info: [
        { label: "Client", value: "Confidential" },
        { label: "Date", value: "Jul 2023" },
        { label: "Category", value: "investment in gold and silver" },
        { label: "Tech Stack", value: "Flutter Flow, Firebase" },
      ],
      prag: `This app facilitates investment in gold and silver, allowing users to invest at the current market prices. Users can opt for EMI payments with flexible timeframes, and no additional charges are applied. At the conclusion of the EMI period, the gold or silver is transferred to the user at the original purchase price.`
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
              title: "Admin Panel",
              body: "The admin can also edit user profiles, view a list of users with every detail of their transactions, savings, EMIs paid, and pending payments.",
              icon: "shield-check",
            },
            {
              title: "Main schemes",
              body: "app offers two schemes: one for purchasing gold and silver on EMI, and another for saving money and earning interest.",
              icon: "users",
            },
            {
              title: "User authentication",
              body: "Employing robust user authentication mechanisms to guarantee secure access to the platform.",
              icon: "log-in",
            },
            {
              title: "Passbook",
              body: " This feature displays all the details of transactions made in EMI and saving schemes.",
              icon: "file-text",
            },
            {
              title: "Social Hub",
              body: "This section includes advertisements on different platforms like Facebook, Instagram, YouTube, etc.",
              icon: "ads",
            },
           
            {
              title: "Dashboard",
              body: "It provides details of all remaining EMIs, paid EMI details, a breakdown of the detailed EMI, and instalment information.",
              icon: "layout-dashboard",
            },
           
            {
              title: "2-Types of payment options",
              body: "Offering two distinct payment options, including a 2.5% token amount or full payment,",
              icon: "credit-card",
            },
           
          
           
          ],
        },
      ],
      techstack: ["Flutter Flow", "Firebase"],
      gallery: [
        {
          src: "/assets/case-studies/parakh/img2.png",
          alt: "Parakh Jewellers  screen",
        },
        {
          src: "/assets/case-studies/parakh/img3.png",
          alt: "Parakh Jewellers start now screen",
        },
        {
          src: "/assets/case-studies/parakh/img4.png",
          alt: " Parakh Jewellersce what's new screen",
        },
         {
          src: "/assets/case-studies/parakh/img7.png",
          alt: "Parakh Jewellers rewards screen",
        },
        {
          src: "/assets/case-studies/parakh/img5.png",
          alt: "Parakh Jewellers invest Gold or Silver screen",
        },
        {
          src: "/assets/case-studies/parakh/img6.png",
          alt: "Parakh Jewellers dashboard screen",
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
      role:"mobile"
    },
     {
      casestudiename: "breathwrk",
      category: "Web Application",
      title: "Breathwrk – Wellness ",
      subtitle:
        "Breathwrk is the number one health and performance app, empowering users through scientifically backed breathing exercises to calm anxiety, improve focus, boost energy, and enhance sleep quality. ",
      image: "/assets/case-1.png",
      imageAlt: "Breathwrk platform hero screenshot",
      info: [
        { label: "Client", value: "Confidential" },
        { label: "Date", value: "—" },
        { label: "Category", value: "Web Application" },
        { label: "Tech Stack", value: "Framer motion,React.js, Node.js, MongoDB" },
      ],
      prag: `Breathwrk is the number one health and performance app, empowering users through scientifically backed breathing exercises to calm anxiety, improve focus, boost energy, and enhance sleep quality. The platform also extends its reach with corporate wellness programs, making mental and physical well-being accessible to individuals and organizations alike.The challenge was to build a responsive, user-friendly web platform that reflected Breathwrk’s brand identity and effectively supported its service offerings, including subscriptions, classes, and automation workflows—all while using GoHighLevel (GHL) as the foundational tool for CRM and marketing automation.`,
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
              title: "For Agents",
              body: " Access performance data, including property views, lead conversion rates, and engagement statistics to optimize sales efforts.",
              icon: "home",
            },
          
            {
              title: "For Buyers",
              body: "Buyers can directly message agents or request a call using Twilio’s SMS and voice services to inquire about propertie",
              icon: "credit-card",
            },
            {
              title: "For Super Admin",
              body: "The Super Admin monitors all leads, assigns them to agents, and reviews platform-wide performance and financial reports.",
              icon: "shield-check",
            },
            {
              title: "For Employees", 
              body: "Employees help with subscription updates, lead tracking, and offer basic analytics to agents.",
              icon: "users",
            },
            {
              title: "Twilio Integration for Enhanced Communication ",
              body: "Increase platform security by using Twilio for two-factor authentication to verify user identities and ensure safe transactions",
              icon: "log-in",
            },
            {
              title: "Chat System  ",
              body: "Buyers and agents can exchange messages directly via the platform, ensuring easy and secure communication.",
              icon: "message-square",
            },
           
           
            {
              title: "Subscription Management",
              body: "Subscriptions can be set to automatically renew, with reminders sent via SMS.",
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
      casestudiename: "chi",
      category: "Web Application",
      title: "CHI E-Commerce Platform",
      subtitle:
        "CHI Haircare is a globally recognized beauty brand that specializes in professional-grade hair styling tools, ammonia-free color systems, and a diverse line of haircare products.",
      image: "/assets/case-1.png",
      imageAlt: "CHI E-Commerce Platform hero screenshot",
      info: [
        { label: "Client", value: "Confidential" },
        { label: "Date", value: "—" },
        { label: "Category", value: "E-Commerce Web Application" },
        { label: "Tech Stack", value: "React.js, Node.js, MongoDB" },
      ],
      prag: `CHI Haircare is a globally recognized beauty brand that specializes in professional-grade hair styling tools, ammonia-free color systems, and a diverse line of haircare products. The official website, chi.com, is a robust, mobile-responsive e-commerce platform that connects directly with consumers, salon professionals, and resellers across the globe.The website is designed with a strong focus on usability and brand storytelling. It combines product discovery, seasonal promotions, and educational content in a clean, modern layout. With features like categorized collections, "Shop by Hair Need", and an interactive Hair Quiz, the platform provides a personalized and guided shopping experience for users with different hair types, concerns, and goals.CHI also uses the site to reflect its values of sustainability, ethical product development (cruelty-free, paraben/sulfate-free), and innovation, prominently showcasing their founder, Dr. Farouk Shami’s legacy. In addition to selling products, the platform includes blog articles, an education section, and private label information — expanding it beyond a typical e-commerce site into a brand hub and knowledge center.`,
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
              title: "User-Centered Design",
              body: "Designed the site structure based on user behaviors and shopping patterns, especially around hair needs and routines.",
              icon: "home",
            },
          
            {
              title: "Improved Product  Architecture",
              body: `Built a simplified navigation system: “Shop by Collection”, “Shop by Hair Concern”, and “Best Sellers”.`,
              icon: "home",
            },
            {
              title: "Emotional & Brand Stroytelling",
              body: "Integrated a Founder’s section to highlight Dr. Farouk Shami’s innovation legacy and Added a Sustainability/Environmental Beauty block to showcase CHI’s ethical practices",
              icon: "log-in",
            },
            {
              title: "Conversion-Focused Layout", 
              body: "Used bold, high-contrast CTAs (“Shop Now”, “Add to Cart”, “View Collection”) to guide user action.",
              icon: "shield-check",
            },
            {
              title: "Mobile-First  Optimization",
              body: "Prioritized responsive design with tap-friendly layouts, collapsible menus, and scrollable carousels.",
              icon: "graduation-cap",
            },
            {
              title: "Supportive  Content & Education",
              body: "Clear benefits and features on product cards (e.g., thermal protection, anti-frizz) Educational CTAs like “Take the Hair Quiz” and “Infused With Keratin” to reduce user hesitation.",
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
      casestudiename: "sundai",
      category: "Web Application",
      title: "Sundai",
      subtitle:
        "Sundae is a real estate platform helping homeowners sell houses in as-is condition, often during times of  financial difficulty  or urgency.",
      image: "/assets/case-1.png",
      imageAlt: "sundae platform hero screenshot",
      info: [
        { label: "Client", value: "Confidential" },
        { label: "Date", value: "—" },
        { label: "Category", value: "Web Application" },
        { label: "Tech Stack", value: "React.js, Node.js, MongoDB" },
      ],
      prag: `Sundae is a real estate platform helping homeowners sell houses in as-is condition, often during times of  financial difficulty  or urgency. Our goal was to create a seamless diital experience that made this process less intimidating and more transparent for users. The project focused on improving usability. building emotional trust, and supporting decisionmaking at every stage. We aimed to turn a complex and sensitive journey into one that feels simple, safe and empowering aligned with Sundae's core values of honesty. speed, and seller first service.`,
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
              title: "Creating Chat Module",
              body: " The Company can add the most common questions that customers may have about the platform by providing answers upfront.",
              icon: "message-square",
            },
          
            {
              title: "Chat Bot Module",
              body: " In the Chabot section, the company can test the Chabot, generate the code for the questions and answers they created",
              icon: "chat bot",
            },
            {
              title: "Log in and Register Module",
              body: " This module implements secure sign-in mechanisms, including username/password authentication.",
              icon: "log-in",
            },
            {
              title: "Add user Role ",
              body: " In this section, a company can add its employees and assign roles. Then, they can grant access.",
              icon: "shield-check",
            },
            {
              title: "Employees Page Module  ",
              body: "In this interactive vocabulary matching activity, children match words with meanings.",
              icon: "graduation-cap",
            },
            {
              title: "Payments Module  ",
              body: " The Company can view details about the payments made to subscribe to the particular Chabot AI platform.",
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
      casestudiename: "course-development",
      category: "Web Application",
      title: "Cource Development",
      subtitle:
        " Involved designing and implementing a complete course funnel, enrollment system, and automation workflow for the Garage Conversion Specialist Course using GoHighLevel (GHL).",
      image: "/assets/case-1.png",
      imageAlt: "sundae platform hero screenshot",
      info: [
        { label: "Client", value: "Confidential" },
        { label: "Date", value: "—" },
        { label: "Category", value: "Web Application" },
        { label: "Tech Stack", value: "React.js, Node.js, MongoDB" },
      ],
      prag: `This project involved designing and implementing a complete course funnel, enrollment system, and automation workflow for the Garage Conversion Specialist Course using GoHighLevel (GHL).The objective was to build a scalable, structured learning funnel that captures leads, nurtures them through email automation, converts them into paid students, and delivers course content efficiently—while clearly defining platform limitations and next steps.
`,
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
              title: "Creating Chat Module",
              body: " The Company can add the most common questions that customers may have about the platform by providing answers upfront.",
              icon: "message-square",
            },
          
            {
              title: "Chat Bot Module",
              body: " In the Chabot section, the company can test the Chabot, generate the code for the questions and answers they created",
              icon: "chat bot",
            },
            {
              title: "Log in and Register Module",
              body: " This module implements secure sign-in mechanisms, including username/password authentication.",
              icon: "log-in",
            },
            {
              title: "Add user Role ",
              body: " In this section, a company can add its employees and assign roles. Then, they can grant access.",
              icon: "shield-check",
            },
            {
              title: "Employees Page Module  ",
              body: "In this interactive vocabulary matching activity, children match words with meanings.",
              icon: "graduation-cap",
            },
            {
              title: "Payments Module  ",
              body: " The Company can view details about the payments made to subscribe to the particular Chabot AI platform.",
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
  ],
  
};
