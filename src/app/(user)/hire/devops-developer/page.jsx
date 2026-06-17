
import { PageHero, Section, SectionTitle, ProfileCard, FAQ, CTABanner, Breadcrumb, ComparisonTable } from "@/components/site/Shared";
import { Cloud, Box, Settings, GitBranch, Layers, ShieldCheck } from "lucide-react";
 const meta= [{ title: "Hire DevOps Engineer — HireTopCoder" }] 


const devs = [
  { name: "Wei C.", role: "Senior DevOps Engineer", years: 8, tags: ["AWS", "Kubernetes", "Terraform"] },
  { name: "Jonas E.", role: "Platform Engineer", years: 7, tags: ["GCP", "Helm", "ArgoCD"] },
  { name: "Meera D.", role: "SRE", years: 6, tags: ["Observability", "Datadog", "k8s"] },
];

export default function Page() {
  return (
    <   >
      <div className="pt-28 px-6 max-w-7xl mx-auto"><Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Hire" }, { label: "DevOps Engineer" }]} /></div>
      <PageHero eyebrow="Hire by Role" title={<>Hire <span className="text-primary">DevOps Engineers</span></>} sub="Cloud, containers, pipelines, and reliability — engineers who turn deploys into a non-event." />
      <Section>
        <SectionTitle eyebrow="Skills" title="Core competencies" />
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { I: Cloud, t: "AWS / GCP / Azure" }, { I: Box, t: "Docker & Containers" }, { I: Layers, t: "Kubernetes / Helm" },
            { I: GitBranch, t: "CI/CD Pipelines" }, { I: Settings, t: "Terraform / Pulumi" }, { I: ShieldCheck, t: "Security & Compliance" },
          ].map(({ I, t }) => (
            <div key={t} className="rounded-[10px] bg-[#141418] border border-white/[0.07] p-5 flex items-center gap-3">
              <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center"><I className="size-5 text-primary" /></div>
              <div className="text-white font-medium">{t}</div>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="Profiles" title="Featured DevOps Engineers" />
        <div className="grid md:grid-cols-3 gap-5">{devs.map((d) => <ProfileCard key={d.name} {...d} />)}</div>
      </Section>
      <Section>
        <SectionTitle eyebrow="Pricing" title="Cost guide" />
        <ComparisonTable
          headers={["Region", "Mid", "Senior", "Lead"]}
          rows={[
            ["India", "$45/hr", "$70/hr", "$95/hr"],
            ["Eastern Europe", "$55/hr", "$85/hr", "$115/hr"],
            ["LATAM", "$60/hr", "$90/hr", "$120/hr"],
          ]}
        />
      </Section>
      <Section>
        <SectionTitle eyebrow="FAQ" title="Common questions" />
        <FAQ items={[
          { q: "Can they own our cloud account end-to-end?", a: "Yes — including audit, cost optimization, and IaC." },
          { q: "On-call coverage?", a: "Available as an add-on with documented runbooks." },
          { q: "Multi-cloud?", a: "Most of our DevOps engineers are dual-cloud certified." },
        ]} />
      </Section>
      <CTABanner />
    </   >
  );
}
