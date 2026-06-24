
import Link from "next/link";
   export  const metadata= 
      { title: "HireTopCoder — Case Studies" ,
     description:
       "Selected case studies from HireTopCoder — engineering teams that ship."
  };
    
 

const cases = [
  {
    slug: "speakable",
    title: "Speakable",
    tag: "Web Application",
    blurb: "Personalized English learning platform connecting students with teachers.",
    img: "/assets/case-1.png",
  },
  {
    slug: "alesk",
    title: "ALESK",
    tag: "Healthcare Platform",
    blurb: "Customer management platform for hospitals, clinics, and patients.",
    img: "/assets/case-2.png",
  },
];

export default function CaseStudies() {
  return (
    <div className="px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 w-full py-10 lg:py-28 2xl:py-35">
      <section className="w-full  pb-20">
        <span className="pill-accent inline-flex rounded-full text-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]">
          Case Studies
        </span>
        <h1 className="mt-5  text-4xl font-bold tracking-tight md:text-6xl">
          Real products. Senior <br/> engineers. Outcomes that <br/> hold up.
        </h1>
        <p className="mt-5  text-lg text-white/50">
          A look inside recent platforms we&apos;ve designed, built, and shipped end-to-end.
        </p>
      </section>

      <section className="w-full  ">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {cases.map((c) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="group overflow-hidden rounded-2xl border border-[oklch(0.62_0.26_305/0.15)] hover-glow-card  bg-card glass transition "
            >
              <img
                src={c.img}
                alt={`${c.title} preview`}
                className="aspect-[16/10] w-full object-cover "
              />
              <div className="p-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] ">
                  {c.tag}
                </div>
                <div className="mt-2 text-xl font-semibold  text-primary">{c.title}</div>
                <p className="mt-2 text-sm text-white/35">{c.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
