
import Link from "next/link"


    const meta= [
      { title: "Forgot Password — Hire Top Coder" },
      { name: "description", content: "Reset your Hire Top Coder password." },
    ];


export default function ForgotPasswordPage() {
  return (
 
    <div
      className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6"
      style={{ backgroundColor: "#070707", fontFamily: "Inter, sans-serif" }}
    >
      <div className="w-full max-w-[420px]">
        <h1 style={{ fontSize: 28, fontWeight: 500, color: "#fff", letterSpacing: "-0.8px" }}>
          Reset your password
        </h1>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginTop: 8, marginBottom: 24 }}>
          Enter your email and we'll send you a reset link.
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <label style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 6, display: "block" }}>
            Email address
          </label>
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full focus:!border-[#a78bfa] focus:outline-none"
            style={{
              background: "#0d0d0d",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
              padding: "11px 14px",
              color: "white",
              fontSize: 14,
            }}
          />
          <button
            type="submit"
            className="w-full mt-6 hover:!bg-[#b49bfb] transition-colors"
            style={{
              background: "#a78bfa",
              color: "white",
              fontSize: 14,
              fontWeight: 500,
              padding: 12,
              borderRadius: 8,
              border: "none",
            }}
          >
            Send reset link →
          </button>
        </form>
        <div className="text-center mt-6">
          <Link href="/signin" style={{ color: "#a78bfa", fontSize: 13 }}>
            ← Back to Sign In
          </Link>
        </div>
      </div>
    </div>
    
  );
}

