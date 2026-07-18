"use client"
import { useState } from "react";

import { Card, PageHero, Section } from "@/components/site/Shared";
import { Clock, Mail, MapPin, Phone } from "lucide-react";



export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <   main className=" w-full"   >
      <PageHero eyebrow="Get in Touch" title={<>Let's <span className="text-gradient-purple">Talk</span></>} sub="Tell us about your project. We'll respond within 24 hours with a shortlist or a call." />
      <Section>
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="md:p-8">
            {sent ? (
              <div className="text-center py-10">
                <div className="text-xl md:text-2xl font-bold text-white">Thanks — message received.</div>
                <div className="md:mt-2 text-xs md:text-base text-foreground/60">We'll be in touch within 24 hours.</div>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <Field label="Name" type="text" />
                <Field label="Work email" type="email" />
                <Field label="Company" type="text" />
                <div>
                  <label className="text-[11px] uppercase tracking-[0.15em] text-white font-bold">Project details</label>
                  <textarea rows={5} className="mt-2 w-full bg-black/40 border border-primary/50 rounded-lg px-3 py-2 text-white outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-white font-bold">Budget range</label>
                  <select className="md:mt-2 w-full bg-black/40 border border-primary/50 rounded-[8px] text-xs md:text-base p-1.5 md:px-3 md:py-2 text-white outline-none focus:border-primary cursor-pointer">
                    <option>Under $25k</option><option>$25k – $75k</option><option>$75k – $200k</option><option>$200k+</option>
                  </select>
                </div>
                <button className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-3 text-sm md:text-base rounded-xl cursor-pointer">Send message</button>
              </form>
            )}
          </Card>
          <div className="space-y-5">
            <Card>
              <div className="space-y-4">
                <div className="flex items-center gap-3"><Mail className=" size-4 text-primary" /><a href="mailto:hello@hiretopcoder.com" className="text-white text-sm md:text-base">hello@hiretopcoder.com</a></div>
                <div className="flex items-center gap-3"><Phone className=" size-4 text-primary" /><span className="text-white text-sm md:text-base">+1 (415) 555-0123</span></div>
              </div>
            </Card>
            <Card>
              <div className="text-[8px] md:text-[11px] uppercase tracking-[0.2em] text-primary font-bold mb-4">Global Offices</div>
              <div className="grid grid-cols-2 md:gap-4">
                {[{ city: "Bangalore, IN", addr: "Indiranagar, 1st Stage" }, { city: "London, UK", addr: "Shoreditch, EC2A" }].map((o) => (
                  <div key={o.city} className="rounded-lg bg-black/40 border border-white/[0.06] p-4">
                    <div className="flex items-center gap-2 text-white text-xs md:text-base font-medium"><MapPin className="size-4 text-primary" />{o.city}</div>
                    <div className="text-foreground/50 text-[10px] md:text-xs mt-1">{o.addr}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 aspect-[16/9] rounded-md bg-gradient-to-br from-primary/15 via-[#141418] to-[#0a0a0a] border border-white/[0.06] grid place-items-center text-foreground/40 text-sm">Map · 2 office pins</div>
            </Card>
            <Card className="border-primary/30 flex items-center gap-3">
              <Clock className="size-5 text-primary" />
              <div><div className="text-white text-sm md:text-base font-medium">We respond within 24 hours</div><div className="text-foreground/55 text-xs md:text-sm">Mon–Fri, every business day.</div></div>
            </Card>
          </div>
        </div>
      </Section>
    </    main  >
  );
}

function Field({ label, type }) {
  return (
    <div>
      <label className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-white font-bold">{label}</label>
      <input type={type} required className="md:mt-2 w-full bg-black/40 border border-primary/50 rounded-[8px] p-1.5  md:px-3 md:py-2 text-white outline-none focus:border-primary" />
    </div>
  );
}
