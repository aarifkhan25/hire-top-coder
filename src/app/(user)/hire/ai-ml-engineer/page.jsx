
import { Breadcrumb, Card, CTABanner, FAQ, PageHero, ProfileCard, Section, SectionTitle } from "@/components/site/Shared";

 export  const metadata= { title: "Hire AI/ML Engineers & LLM Specialists — HireTopCoder" }


const specs = ["LLM Integration", "Computer Vision", "NLP", "MLOps", "Automation", "Predictive Analytics", "RAG / Vector DBs", "Fine-Tuning"];
const devs = [
  { name: "Arjun T.", role: "Senior ML Engineer", years: 8, tags: ["PyTorch", "LangChain", "OpenAI"] },
  { name: "Sofia K.", role: "LLM Specialist", years: 5, tags: ["LangChain", "RAG", "Pinecone"] },
  { name: "Niko P.", role: "Computer Vision Lead", years: 9, tags: ["TensorFlow", "OpenCV", "ONNX"] },
  { name: "Riya M.", role: "MLOps Engineer", years: 6, tags: ["MLflow", "Kubeflow", "AWS"] },
  { name: "Daniel S.", role: "AI Engineer", years: 4, tags: ["LangGraph", "Anthropic", "Python"] },
  { name: "Aman G.", role: "NLP Engineer", years: 7, tags: ["Transformers", "spaCy", "PyTorch"] },
];

export default function Page() {
  return (
   <main className="px-4 sm:px-6 lg:px-15 1xl:px-20 2xl:px-25 w-full"    >
      <div className=" pt-20 md:pt-28"><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Hire" }, { label: "AI / ML Engineer" }]} /></div>
      <PageHero
        eyebrow="Hire by Role"
        title={<>Hire <span className="text-primary">AI / ML Engineers</span> & LLM Specialists</>}
        sub={<>Engineers who can ship production AI — not just<br/> notebooks. LLMs, vision, MLOps, automation.</>}
      />
      <Section className="py-10  lg:py-28 2xl:py-35">
        <SectionTitle eyebrow="Specializations" title="Pick the right specialization" />
        <div className="flex flex-wrap justify-center mt-10 gap-2">
          {specs.map((s) => (
            <span key={s} className="px-4 py-2 rounded-full border border-white/10  bg-primary/10 transition-colors hover:border-primary  text-primary hover:text-white text-[11px] md:text-[13px] font-medium">{s}</span>
          ))}
        </div>
      </Section>
      <Section className="py-10  lg:py-28 2xl:py-35">
        <SectionTitle eyebrow="Profiles" title="Featured AI Engineers" />
        <div className="grid md:grid-cols-3 gap-5">{devs.map((d) => <ProfileCard key={d.name} {...d} />)}</div>
      </Section>
      <Section className="py-10  lg:py-28 2xl:py-35">
        <div className="absolute left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
      <div className="relative  w-full">
        <SectionTitle eyebrow="Use Cases" title="Use cases we've shipped" />
      
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 items-stretch">
  {[
    { t: "Support chatbots", d: "RAG over docs with citations and fallback to humans." },
    { t: "Recommendation engines", d: "Hybrid models that lift conversion 2–4×." },
    { t: "Automation pipelines", d: "LangGraph + workflow orchestration for ops teams." },
    { t: "Document AI", d: "OCR + extraction with structured JSON output." },
  ].map((c) => (
    <Card key={c.t} className="h-full flex flex-col justify-between p-5">
      
      <div className="flex flex-col">
        <div className="text-white font-medium text-sm md:text-base mb-2">
          {c.t}
        </div>
        <div className="text-foreground/60 text-xs md:text-sm leading-relaxed">
          {c.d}
        </div>
      </div>
      
    
    </Card>
  ))}
</div>
        </div>
      </Section>
      <Section className="py-10  lg:py-28 2xl:py-35">
        <SectionTitle eyebrow="FAQ" title="Common questions" />
        <FAQ items={[
          { q: "Can they work on proprietary data?", a: "Yes — we sign NDAs and follow your data-handling policies." },
          { q: "Do they have research backgrounds?", a: "Many of our AI engineers hold MS/PhD from top programs." },
          { q: "Pricing for ML talent?", a: "Senior AI engineers range $90–$160/hr or $9k–$16k/mo." },
          { q: "Can they integrate with our stack?", a: "Comfortable across OpenAI, Anthropic, Bedrock, Vertex, and self-hosted." },
        ]} />
      </Section>
      <CTABanner />
    </main >
  );
}
