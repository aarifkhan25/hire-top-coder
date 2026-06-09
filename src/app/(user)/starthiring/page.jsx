"use client"
import { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link"


   const meta= [
      { title: "Start Hiring — HireTopCoder" },
      { name: "description", content: "Tell us what you need. We'll match you with the right expert — vetted, available, and ready to ship." },
    ];
  
const roles = [
  { t: "UI/UX Designer", d: "Figma, prototyping, design systems" },
  { t: "Full-Stack Dev", d: "React, Node, cloud architecture" },
  { t: "AI / ML Engineer", d: "LLMs, automation, data pipelines" },
  { t: "Mobile Developer", d: "Flutter, React Native, iOS/Android" },
  { t: "DevOps Engineer", d: "AWS, CI/CD, infrastructure" },
  { t: "No-Code Developer", d: "Bubble, Webflow, n8n" },
  { t: "Graphic Designer", d: "Branding, illustration, motion" },
  { t: "Growth Marketer", d: "SEO, ads, conversion strategy" },
];

const trust = [
  { t: "120+ Experts", d: "Across 15+ tech stacks" },
  { t: "24hr Matching", d: "Human-reviewed, not just AI-filtered" },
  { t: "98% Satisfaction", d: "Across 500+ completed projects" },
];

export default function HirePage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const stepLabel = (n, label) => (
    <span style={{ color: step >= n ? "#a78bfa" : "rgba(255,255,255,0.2)" }}>
      {n} · {label}
    </span>
  );

  const fieldStyle = {
    background: "#141414",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 10,
    padding: "11px 14px",
    color: "white",
    fontSize: 14,
    width: "100%",
  };
  const labelStyle= {
    fontSize: 12,
    color: "rgba(255,255,255,0.5)",
    marginBottom: 6,
    display: "block",
  };

  return (
    
      <div style={{ backgroundColor: "#070707", fontFamily: "Inter, sans-serif" }} className="px-4 sm:px-6 pt-[120px] pb-[60px]">
        {/* HERO */}
        <div className="max-w-3xl mx-auto text-center">
          <div style={{ color: "#a78bfa", fontSize: 11, letterSpacing: 2, fontWeight: 600 }} className="uppercase">
            GET MATCHED IN 24 HOURS
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 500, color: "#fff", letterSpacing: "-1.5px", marginTop: 16, lineHeight: 1.05 }}>
            Tell us what you need.
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", maxWidth: 480, margin: "16px auto 0" }}>
            We'll match you with the right expert — vetted, available, and ready to ship.
          </p>
        </div>

        {/* FORM CARD */}
        <div
          className="mx-auto mt-12"
          style={{
            background: "#0d0d0d",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            padding: 40,
            maxWidth: 640,
          }}
        >
          {!submitted && (
            <div style={{ fontSize: 12, marginBottom: 28, display: "flex", gap: 12, alignItems: "center", justifyContent: "center", fontWeight: 600 }}>
              {stepLabel(1, "Role")}
              <span style={{ flex: "0 0 30px", height: 1, background: "rgba(255,255,255,0.1)" }} />
              {stepLabel(2, "Project")}
              <span style={{ flex: "0 0 30px", height: 1, background: "rgba(255,255,255,0.1)" }} />
              {stepLabel(3, "Contact")}
            </div>
          )}

          {submitted ? (
            <div className="text-center py-6">
              <div
                className="mx-auto grid place-items-center"
                style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(167,139,250,0.15)", border: "1px solid #a78bfa" }}
              >
                <Check className="size-7" style={{ color: "#a78bfa" }} />
              </div>
              <h2 style={{ fontSize: 24, color: "#fff", marginTop: 20 }}>You're on the list!</h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginTop: 8 }}>
                We'll send matched profiles within 24 hours. Check your email.
              </p>
              <Link href="/" style={{ color: "#a78bfa", fontSize: 13, display: "inline-block", marginTop: 18, fontWeight: 700 }}>
                ← Back to home
              </Link>
            </div>
          ) : step === 1 ? (
            <>
              <h3 style={{ fontSize: 18, color: "#fff", fontWeight: 500 }}>What role do you need?</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 4, marginBottom: 20 }}>Select the type of expert</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {roles.map((r) => {
                  const selected = role === r.t;
                  return (
                    <button
                      key={r.t}
                      onClick={() => setRole(r.t)}
                      style={{
                        background: selected ? "rgba(167,139,250,0.08)" : "#141414",
                        border: `1px solid ${selected ? "#a78bfa" : "rgba(255,255,255,0.08)"}`,
                        borderRadius: 10,
                        padding: 16,
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                    >
                      <div style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>{r.t}</div>
                      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginTop: 4 }}>{r.d}</div>
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setStep(2)}
                disabled={!role}
                className="hover:!bg-[#b49bfb] transition-colors"
                style={{
                  background: role ? "#a78bfa" : "rgba(167,139,250,0.3)",
                  color: "white",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: 12,
                  borderRadius: 8,
                  border: "none",
                  width: "100%",
                  marginTop: 24,
                  cursor: role ? "pointer" : "not-allowed",
                }}
              >
                Next →
              </button>
            </>
          ) : step === 2 ? (
            <form onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
              <h3 style={{ fontSize: 18, color: "#fff", fontWeight: 500 }}>Project details</h3>
              <div className="space-y-4 mt-5">
                <div>
                  <label style={labelStyle}>Project type</label>
                  <select style={fieldStyle}>
                    <option>New product</option><option>Existing product</option><option>MVP</option><option>Redesign</option><option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Timeline</label>
                  <select style={fieldStyle}>
                    <option>ASAP</option><option>1–2 weeks</option><option>1 month</option><option>3+ months</option><option>Flexible</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Budget range</label>
                  <select style={fieldStyle}>
                    <option>Under $1k</option><option>$1k–$5k</option><option>$5k–$20k</option><option>$20k+</option><option>Not sure</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Describe your project</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you're building, the problem you're solving, and any tech preferences..."
                    style={{ ...fieldStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  style={{ background: "transparent", color: "rgba(255,255,255,0.7)", fontWeight: 700, fontSize: 14, padding: "12px 18px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, cursor: "pointer" }}
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="hover:!bg-[#b49bfb] transition-colors"
                  style={{ background: "#a78bfa", color: "white", fontWeight: 700, fontSize: 14, padding: "12px 28px", borderRadius: 8, border: "none", cursor: "pointer", flex: 1 }}
                >
                  Next →
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <h3 style={{ fontSize: 18, color: "#fff", fontWeight: 500 }}>Almost there</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 4, marginBottom: 20 }}>
                We'll reach out within 24 hours with matched profiles.
              </p>
              <div className="space-y-4">
                <div><label style={labelStyle}>Full name</label><input required style={fieldStyle} /></div>
                <div><label style={labelStyle}>Work email</label><input required type="email" style={fieldStyle} /></div>
                <div><label style={labelStyle}>Company name (optional)</label><input style={fieldStyle} /></div>
                <div><label style={labelStyle}>Phone number (optional)</label><input style={fieldStyle} /></div>
              </div>
              <button
                type="submit"
                className="hover:!bg-[#b49bfb] transition-colors"
                style={{ background: "#a78bfa", color: "white", fontWeight: 700, fontSize: 15, padding: 14, borderRadius: 8, border: "none", width: "100%", marginTop: 24, cursor: "pointer" }}
              >
                Get Matched Now →
              </button>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textAlign: "center", marginTop: 14 }}>
                🔒 No spam. No commitment. 3 matched profiles within 24 hours.
              </p>
              <div className="flex justify-start mt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  style={{ background: "transparent", color: "rgba(255,255,255,0.7)", fontWeight: 700, fontSize: 13, border: "none", cursor: "pointer" }}
                >
                  ← Back
                </button>
              </div>
            </form>
          )}
        </div>

        {/* TRUST */}
        <div className="mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-4" style={{ maxWidth: 640 }}>
          {trust.map((c) => (
            <div
              key={c.t}
              style={{
                background: "#0d0d0d",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: 20,
                textAlign: "center",
              }}
            >
              <div style={{ color: "#fff", fontSize: 15, fontWeight: 600 }}>{c.t}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginTop: 6 }}>{c.d}</div>
            </div>
          ))}
        </div>
      </div>
   
  );
}
