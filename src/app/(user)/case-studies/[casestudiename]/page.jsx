"use Client";
import { Breadcrumb, CTABanner, FeatureGrid, Gallery, Hero1, Section1, TechStack } from "@/components/site/Shared.jsx";
import { allCaseStudiesData } from "@/data/casestudiesname.js";
import { use } from "react";
import NotFoundPage from "../../../not-found.jsx";
// export const metadata = {
//   title: "ALESK — Case Study | HireTopCoder",

//   description:
//     "A comprehensive healthcare customer management platform connecting patients, doctors, and clinics across the Portuguese-speaking community.",

//   property: {
//     "og:title": "ALESK — Case Study | HireTopCoder",
//     "og:description":
//       "Healthcare customer management platform built with Flutter Flow and Firebase.",
//     "og:image": "/assets/logo1.png",
//   },
// };

export default function CaseStudiesMainPage({params}) {
const {casestudiename}=use(params);
const filterCaseStudy=allCaseStudiesData.case_studies.filter((item)=>item.casestudiename===casestudiename);

  return (
    <div>
      {filterCaseStudy.length > 0 ? (
    filterCaseStudy?.map((item) => (
    <div className=" w-full " key={item.casestudiename}>
    <div className="pt-20 md:pt-28">
         <Breadcrumb 
                  items={[
                    { label: "Home", to: "/" },
                    { label: "Case Studie" },
                    { label: item.title },
                   ]}
                   />
                   </div> 
      <Hero1
        category={item.category}
        title={item.title}
        subtitle={item.subtitle}
        image={item.image}
        imageAlt={item.imageAlt}
        info={item.info}
      />

      <Section1 label="Project Brief" heading="Overview">
       <p className=" w-full text-[#b1afb8] text-[13px] font-semibold md:text-base 2xl:text-lg xl:pr-30 2xl:pr-60">
         {item.prag}
        </p>
      </Section1>

      {/* <Section1 label="By the Numbers" heading="Key Stats">
        <Stat1Grid
          items={item.state1grid}
        />
      </Section1> */}

      <Section1 label="What We Built" heading="Key Modules & Features">
        <div className="space-y-14">
          {item.modules?.length > 0 &&
            item.modules.map((module, index) => (
              <div key={`${module.label || "module"}-${index}`}>
                {module.icon && (
                  <div className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    <span className="text-base">{module.icon}</span>
                    {module.label}
                  </div>
                )}

                {module.featureGird1 && <FeatureGrid items={module.featureGird1} />}
                {module.featureGird2 && <FeatureGrid items={module.featureGird2} />}
              </div>
            ))}
        </div>
      </Section1>

      <Section1 label="Tech Stack" heading="Built With">
        <TechStack items={item.techstack} />
      </Section1>

      <Section1 label="Project Screenshots" heading="See It In Action">
        <Gallery
          images={item.gallery}
          role={item.role}
        />
      </Section1>

      {/* <Section1 label="The Results" heading="Impact & Outcomes">
        <OutcomeGrid
          items={item.outcome}
        />
      </Section1> */}

   

     
<CTABanner
            title="Have a similar project in mind?"
            sub="Let's discuss how we can bring it to life.

"
            ctaLabel="Talk To Expert"
            to="/contact"
          />
    </div>
  )

)):<NotFoundPage className=""/>}
  </div>
  






)}
