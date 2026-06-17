"use client"
import { useState } from "react";

import { PageHero, Section, Card } from "@/components/site/Shared";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

  const meta= [{ title: "Contact — HireTopCoder" }]

export default function Page() {
  const [sent, setSent] = useState(false);
  return (
    <      >
      <PageHero eyebrow="Get in Touch" title={<>Let's <span className="text-primary">Talk</span></>} sub="Tell us about your project. We'll respond within 24 hours with a shortlist or a call." />
      <Section>
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8">
            {sent ? (
              <div className="text-center py-10">
                <div className="text-2xl font-bold text-white">Thanks — message received.</div>
                <div className="mt-2 text-foreground/60">We'll be in touch within 24 hours.</div>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <Field label="Name" type="text" />
                <Field label="Work email" type="email" />
                <Field label="Company" type="text" />
                <div>
                  <label className="text-[11px] uppercase tracking-[0.15em] text-foreground/50 font-bold">Project details</label>
                  <textarea rows={5} className="mt-2 w-full bg-black/40 border border-white/[0.08] rounded-lg px-3 py-2 text-white outline-none focus:border-primary/40" />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-[0.15em] text-foreground/50 font-bold">Budget range</label>
                  <select className="mt-2 w-full bg-black/40 border border-white/[0.08] rounded-lg px-3 py-2 text-white outline-none focus:border-primary/40">
                    <option>Under $25k</option><option>$25k – $75k</option><option>$75k – $200k</option><option>$200k+</option>
                  </select>
                </div>
                <button className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-3 rounded-full">Send message</button>
              </form>
            )}
          </Card>
          <div className="space-y-5">
            <Card>
              <div className="space-y-4">
                <div className="flex items-center gap-3"><Mail className="size-4 text-primary" /><a href="mailto:hello@hiretopcoder.com" className="text-white">hello@hiretopcoder.com</a></div>
                <div className="flex items-center gap-3"><Phone className="size-4 text-primary" /><span className="text-white">+1 (415) 555-0123</span></div>
              </div>
            </Card>
            <Card>
              <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-bold mb-4">Global Offices</div>
              <div className="grid grid-cols-2 gap-4">
                {[{ city: "Bangalore, IN", addr: "Indiranagar, 1st Stage" }, { city: "London, UK", addr: "Shoreditch, EC2A" }].map((o) => (
                  <div key={o.city} className="rounded-lg bg-black/40 border border-white/[0.06] p-4">
                    <div className="flex items-center gap-2 text-white font-medium"><MapPin className="size-4 text-primary" />{o.city}</div>
                    <div className="text-foreground/50 text-[12px] mt-1">{o.addr}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 aspect-[16/9] rounded-md bg-gradient-to-br from-primary/15 via-[#141418] to-[#0a0a0a] border border-white/[0.06] grid place-items-center text-foreground/40 text-sm">Map · 2 office pins</div>
            </Card>
            <Card className="border-primary/30 flex items-center gap-3">
              <Clock className="size-5 text-primary" />
              <div><div className="text-white font-medium">We respond within 24 hours</div><div className="text-foreground/55 text-sm">Mon–Fri, every business day.</div></div>
            </Card>
          </div>
        </div>
      </Section>
    </      >
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.15em] text-foreground/50 font-bold">{label}</label>
      <input type={type} required className="mt-2 w-full bg-black/40 border border-white/[0.08] rounded-lg px-3 py-2 text-white outline-none focus:border-primary/40" />
    </div>
  );
}
