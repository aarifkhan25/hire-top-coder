


  const  meta=[
      { title: "Careers — HireTopCoder" },
      { name: "description", content: "Join the HireTopCoder team. Remote-first roles across engineering, design, and growth." },
    ];

const culture = [
  { e: "🌐", t: "Remote-first", d: "Work from anywhere. We care about output, not office hours." },
  { e: "⚡", t: "Move fast", d: "Small team, big impact. Ship weekly, learn daily." },
  { e: "🤝", t: "High ownership", d: "You own your work end to end. No micromanagement." },
];

const jobs = [
  { t: "Senior Full-Stack Engineer", dept: "Engineering", loc: "Remote", type: "Full-time" },
  { t: "Product Designer (UI/UX)", dept: "Design", loc: "Remote", type: "Full-time" },
  { t: "Growth Marketing Manager", dept: "Marketing", loc: "Remote", type: "Full-time" },
  { t: "Talent Acquisition Lead", dept: "Operations", loc: "Remote", type: "Full-time" },
  { t: "AI/ML Engineer", dept: "Engineering", loc: "Remote", type: "Contract" },
];

export default function CareersPage() {
  const pill = (text, purple = false) => (
    <span
      style={{
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 20,
        padding: "3px 10px",
        fontSize: 11,
        color: purple ? "oklch(0.62 0.26 305)" : "rgba(255,255,255,0.6)",
        background: purple ? "rgba(167,139,250,0.08)" : "transparent",
      }}
    >
      {text}
    </span>
  );

  return (
    
      <div style={{ backgroundColor: "#070707", fontFamily: "Inter, sans-serif" }} className="px-4 sm:px-6 pt-[120px] pb-[100px]">
        {/* HERO */}
        <div className="max-w-3xl mx-auto text-center pb-12">
          <div style={{   fontSize: 11, letterSpacing: 2, fontWeight: 600 }} className="uppercase text-primary">
            JOIN OUR TEAM
          </div>
          <h1 style={{ fontSize: 48, fontWeight: 500, color: "#fff", letterSpacing: "-1.5px", marginTop: 16, lineHeight: 1.05 }}>
            Build the future of work.
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", maxWidth: 500, margin: "16px auto 0" }}>
            We're a remote-first team helping the world access elite digital talent. Come build something that matters.
          </p>
        </div>

        {/* CULTURE */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {culture.map((c) => (
            <div
              key={c.t}
              style={{
                background: "#0d0d0d",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: 24,
              }}
            >
              <div style={{ fontSize: 28 }}>{c.e}</div>
              <div style={{ color: "#fff", fontSize: 16, fontWeight: 600, marginTop: 12 }}>{c.t}</div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, marginTop: 6 }}>{c.d}</div>
            </div>
          ))}
        </div>

        {/* OPEN ROLES */}
        <div className="mx-auto max-w-5xl">
          <h2 style={{ fontSize: 28, color: "#fff", fontWeight: 500 }}>Open Positions</h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginTop: 6, marginBottom: 24 }}>
            We're hiring across product, engineering, and growth.
          </p>
          <div className="space-y-3">
            {jobs.map((j) => (
              <div
                key={j.t}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                style={{
                  background: "#0d0d0d",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "24px 28px",
                }}
              >
                <div>
                  <div style={{ color: "#fff", fontSize: 16, fontWeight: 500 }}>{j.t}</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {pill(j.dept, true)}
                    {pill(j.loc)}
                    {pill(j.type)}
                  </div>
                </div>
                <a
                  href="#"
                  style={{
                    background: "#fff",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: 13,
                    padding: "8px 20px",
                    borderRadius: 8,
                    textDecoration: "none",
                    alignSelf: "flex-start",
                  }}
                >
                  Apply Now →
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-8" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
            Don't see your role? Send your resume to{" "}
            <a href="mailto:careers@hiretopcoder.com" style={{   fontWeight: 700 }} className="text-primary">
              careers@hiretopcoder.com
            </a>
          </div>
        </div>
      </div>

  );
}
