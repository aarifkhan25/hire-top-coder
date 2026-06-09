import Link from 'next/link'



    const meta= [
      { title: "Sign Up — Hire Top Coder" },
      { name: "description", content: "Create your Hire Top Coder account." },
    ];


export default function SignUpPage() {
  return (
  
    <div
      className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6"
      style={{ backgroundColor: "#070707", fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-md text-center">
        <h1 style={{ fontSize: 32, fontWeight: 500, color: "#fff", letterSpacing: "-0.8px" }}>
          Create your account
        </h1>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginTop: 12 }}>
          Sign up is coming soon. Get in touch to join the early Hire Top Coder network.
        </p>
        <Link
          href="/signin"
          className="inline-block mt-8"
          style={{
            background: "#a78bfa",
            color: "white",
            fontSize: 14,
            fontWeight: 500,
            padding: "12px 24px",
            borderRadius: 8,
          }}
        >
          ← Back to Sign In
        </Link>
      </div>
    </div>

  );
}

