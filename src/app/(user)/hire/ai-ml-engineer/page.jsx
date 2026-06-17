
import { PageHero, Section, SectionTitle, Card, ProfileCard, FAQ, CTABanner, Breadcrumb } from "@/components/site/Shared";

 const meta= [{ title: "Hire AI/ML Engineers & LLM Specialists — HireTopCoder" }] 


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
    < >
      <div className=" px-6 max-w-7xl mx-auto"><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Hire" }, { label: "AI / ML Engineer" }]} /></div>
      <PageHero
        eyebrow="Hire by Role"
        title={<>Hire <span className="text-primary">AI / ML Engineers</span> & LLM Specialists</>}
        sub="Engineers who can ship production AI — not just notebooks. LLMs, vision, MLOps, automation."
      />
      <Section>
        <SectionTitle eyebrow="Specializations" title="Pick the right specialization" />
        <div className="flex flex-wrap justify-center gap-2">
          {specs.map((s) => (
            <span key={s} className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[13px] font-medium">{s}</span>
          ))}
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="Profiles" title="Featured AI Engineers" />
        <div className="grid md:grid-cols-3 gap-5">{devs.map((d) => <ProfileCard key={d.name} {...d} />)}</div>
      </Section>
      <Section>
        <SectionTitle eyebrow="Use Cases" title="Use cases we've shipped" />
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { t: "Support chatbots", d: "RAG over docs with citations and fallback to humans." },
            { t: "Recommendation engines", d: "Hybrid models that lift conversion 2–4×." },
            { t: "Automation pipelines", d: "LangGraph + workflow orchestration for ops teams." },
            { t: "Document AI", d: "OCR + extraction with structured JSON output." },
          ].map((c) => <Card key={c.t}><div className="text-white font-medium mb-2">{c.t}</div><div className="text-foreground/60 text-sm leading-relaxed">{c.d}</div></Card>)}
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="FAQ" title="Common questions" />
        <FAQ items={[
          { q: "Can they work on proprietary data?", a: "Yes — we sign NDAs and follow your data-handling policies." },
          { q: "Do they have research backgrounds?", a: "Many of our AI engineers hold MS/PhD from top programs." },
          { q: "Pricing for ML talent?", a: "Senior AI engineers range $90–$160/hr or $9k–$16k/mo." },
          { q: "Can they integrate with our stack?", a: "Comfortable across OpenAI, Anthropic, Bedrock, Vertex, and self-hosted." },
        ]} />
      </Section>
      <CTABanner />
    </ >
  );
}
