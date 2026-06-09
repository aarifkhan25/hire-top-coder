"use client"
import Link from "next/link"
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

   const meta=[
      { title: "Sign In — Hire Top Coder" },
      { name: "description", content: "Sign in to your Hire Top Coder account to hire elite digital experts." },
      { property: "og:title", content: "Sign In — Hire Top Coder" },
      { property: "og:description", content: "Sign in to your Hire Top Coder account." },
    ];


export default function SignInPage() {
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);

  return (

    <div
      className="flex min-h-[calc(100vh-80px)]"
      style={{ backgroundColor: "#070707", fontFamily: "Inter, sans-serif" }}
    >
      {/* LEFT COLUMN */}
      <aside
        className="hidden md:flex flex-col justify-between w-[45%]"
        style={{
          backgroundColor: "#0d0d0d",
          borderRight: "1px solid rgba(255,255,255,0.07)",
          padding: "60px 48px",
        }}
      >
        <div>
          <div className="text-2xl text-white tracking-tight">
            <span className="font-bold">Mx</span>
            <span className="font-normal">pertz</span>
          </div>
          <p className="mt-2" style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}>
            Hire elite digital experts.
          </p>
        </div>

        <div className="flex-1 flex items-center">
          <div
            className="w-full relative"
            style={{
              background: "rgba(167,139,250,0.06)",
              border: "1px solid rgba(167,139,250,0.15)",
              borderRadius: 12,
              padding: 28,
            }}
          >
            <div
              className="absolute left-0 top-0 bottom-0"
              style={{ width: 3, background: "#a78bfa", borderRadius: "12px 0 0 12px" }}
            />
            <p
              className="italic"
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.8,
              }}
            >
              "We hired a full-stack developer through Hire Top Coder in under 24 hours.
              The quality was exceptional — better than any platform we've tried."
            </p>
            <div className="flex items-center gap-3 mt-5">
              <div
                className="grid place-items-center rounded-full"
                style={{
                  width: 38,
                  height: 38,
                  background: "rgba(167,139,250,0.2)",
                  color: "white",
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                RK
              </div>
              <div>
                <div style={{ fontSize: 14, color: "white", fontWeight: 500 }}>Rahul K.</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
                  Founder, Fundli.ai
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 flex-wrap">
          {["✦ 120+ Experts", "✦ 24hr Match", "✦ 98% Satisfaction"].map((t) => (
            <span
              key={t}
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 20,
                padding: "6px 14px",
                fontSize: 12,
                color: "rgba(255,255,255,0.4)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </aside>

      {/* RIGHT COLUMN */}
      <main
        className="flex-1 flex flex-col justify-center"
        style={{ padding: "60px 48px", backgroundColor: "#070707" }}
      >
        <div className="w-full max-w-[420px] mx-auto">
          <div className="text-right mb-8" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "#a78bfa" }}>
              Sign up →
            </Link>
          </div>

          {/* Mobile logo */}
          <div className="md:hidden mb-8 text-2xl text-white">
            <span className="font-bold">Mx</span>
            <span className="font-normal">pertz</span>
          </div>

          <h1
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: "#fff",
              letterSpacing: "-0.8px",
              lineHeight: 1.2,
            }}
          >
            Welcome back
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginTop: 8, marginBottom: 32 }}>
            Sign in to your Hire Top Coder account
          </p>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 transition-colors hover:!border-white/20"
            style={{
              background: "#0d0d0d",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
              padding: "11px 20px",
              fontSize: 14,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <div className="flex items-center gap-3" style={{ margin: "20px 0" }}>
            <div className="flex-1" style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>or</span>
            <div className="flex-1" style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />
          </div>

          <form className="flex flex-col gap-[14px]" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="email"
                className="block"
                style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="w-full focus:!border-[#a78bfa] focus:outline-none transition-colors"
                style={{
                  background: "#0d0d0d",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8,
                  padding: "11px 14px",
                  color: "white",
                  fontSize: 14,
                }}
              />
            </div>

            <div>
              <div className="flex items-center justify-between" style={{ marginBottom: 6 }}>
                <label htmlFor="password" style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                  Password
                </label>
                <Link href="/forget-password" style={{ color: "#a78bfa", fontSize: 12 }}>
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPw ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full focus:!border-[#a78bfa] focus:outline-none transition-colors"
                  style={{
                    background: "#0d0d0d",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 8,
                    padding: "11px 40px 11px 14px",
                    color: "white",
                    fontSize: 14,
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                  aria-label="Toggle password visibility"
                >
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer select-none" style={{ marginTop: 4 }}>
              <span
                onClick={() => setRemember((v) => !v)}
                className="grid place-items-center transition-colors"
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 4,
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: remember ? "#a78bfa" : "transparent",
                }}
              >
                {remember && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </span>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="sr-only"
              />
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
                Remember me for 30 days
              </span>
            </label>

            <button
              type="submit"
              className="w-full transition-colors hover:!bg-[#b49bfb]"
              style={{
                background: "#a78bfa",
                color: "white",
                fontSize: 14,
                fontWeight: 500,
                padding: 12,
                borderRadius: 8,
                border: "none",
                marginTop: 24,
              }}
            >
              Sign In →
            </button>
          </form>

          <p
            className="text-center"
            style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 24 }}
          >
            By signing in, you agree to our{" "}
            <Link href="/terms" style={{ color: "#a78bfa" }}>
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" style={{ color: "#a78bfa" }}>
              Privacy Policy
            </Link>
          </p>
        </div>
      </main>
    </div>

  );
}

