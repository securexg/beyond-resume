"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Globe, Wifi, Clock, IndianRupee } from "lucide-react";

export default function RemoteWorkGuide() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <article className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <Link href="/insights">
          <motion.div whileHover={{ x: -3 }} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 cursor-pointer">
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </motion.div>
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 mb-10">
          <div className="flex items-center gap-3">
            <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">Remote Work</Badge>
            <span className="text-sm text-muted-foreground">6 min read</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">Remote Work &amp; Global Opportunities</h1>
          <p className="text-lg text-muted-foreground">How to land remote jobs with global companies, build a remote work routine, and grow your career from anywhere.</p>
        </motion.div>

        <div className="prose prose-invert max-w-none space-y-8">
          <Card className="border-cyan-500/20 bg-cyan-500/5">
            <CardContent className="p-6">
              <h3 className="font-heading text-lg font-medium mb-3 text-cyan-400">Remote Work in Numbers</h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-cyan-400" /> 68% of Indian tech workers prefer remote or hybrid work</div>
                <div className="flex items-center gap-2"><IndianRupee className="w-4 h-4 text-cyan-400" /> Remote workers for US companies earn 2-5x Indian market rates</div>
                <div className="flex items-center gap-2"><Wifi className="w-4 h-4 text-cyan-400" /> India is the #1 source of remote tech talent globally</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-cyan-400" /> Remote workers save 2-3 hours daily on commute</div>
              </div>
            </CardContent>
          </Card>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">Remote Jobs Beyond Tech</h2>
            <p className="text-muted-foreground mb-4">Remote work is not just for software engineers. These roles are in high demand remotely:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { role: "Content Writer/Copywriter", pay: "₹5-25 LPA" },
                { role: "Social Media Manager", pay: "₹4-15 LPA" },
                { role: "Customer Success Manager", pay: "₹6-20 LPA" },
                { role: "Virtual Assistant", pay: "₹3-10 LPA" },
                { role: "Online Tutor/Teacher", pay: "₹4-15 LPA" },
                { role: "Graphic/UI Designer", pay: "₹5-25 LPA" },
                { role: "Recruiter/HR (Remote)", pay: "₹5-18 LPA" },
                { role: "Bookkeeper/Accountant", pay: "₹4-12 LPA" },
              ].map((r, i) => (
                <Card key={i} className="border-border/50 bg-card/80">
                  <CardContent className="p-3 flex justify-between items-center">
                    <span className="text-sm font-medium">{r.role}</span>
                    <span className="text-cyan-400 text-xs">{r.pay}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">Where to Find Remote Jobs</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { name: "Remote.co", focus: "All remote roles" },
                { name: "We Work Remotely", focus: "Tech & design" },
                { name: "FlexJobs", focus: "Verified remote jobs" },
                { name: "Remotive", focus: "Tech startups" },
                { name: "AngelList/Wellfound", focus: "Startup jobs" },
                { name: "LinkedIn (Remote filter)", focus: "All industries" },
                { name: "Toptal", focus: "Premium freelance" },
                { name: "Turing", focus: "Indian dev talent" },
                { name: "Arc.dev", focus: "Developer jobs" },
              ].map((p, i) => (
                <Card key={i} className="border-border/50 bg-card/80">
                  <CardContent className="p-3 text-center">
                    <p className="font-medium text-sm">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.focus}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">Building a Remote Work Setup</h2>
            <ul className="space-y-2">
              {[
                "Reliable internet — minimum 50 Mbps with a backup connection (mobile hotspot)",
                "Dedicated workspace — even a small desk corner signals to your brain it&apos;s work time",
                "Good webcam and microphone — ₹2,000-5,000 investment makes a huge difference in calls",
                "Time zone awareness — if working with US/EU teams, overlap hours are crucial",
                "Async communication skills — clear written communication is more important than being online 24/7",
                "Project management tools — Notion, Trello, or Asana to stay organized",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm"><CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">Challenges &amp; How to Overcome Them</h2>
            <div className="space-y-3">
              {[
                { challenge: "Loneliness & isolation", fix: "Join co-working spaces 1-2 days/week, attend virtual team events, find a remote work buddy" },
                { challenge: "Work-life blur", fix: "Set strict work hours, use separate browser profiles, log off at a fixed time" },
                { challenge: "Career visibility", fix: "Over-communicate wins, write weekly updates, speak up in meetings" },
                { challenge: "Distractions at home", fix: "Use the Pomodoro technique, noise-canceling headphones, communicate boundaries with family" },
              ].map((item, i) => (
                <Card key={i} className="border-border/50 bg-card/80">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-sm text-cyan-400">{item.challenge}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{item.fix}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">Tax Tips for Remote Workers in India</h2>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>If working for a foreign company as a contractor, you&apos;re classified as a freelancer — file under &ldquo;Income from Business or Profession&rdquo;</li>
              <li>Register for GST if your annual income exceeds ₹20 lakh (₹10 lakh for certain states)</li>
              <li>Claim deductions for home office expenses — internet, equipment, electricity (proportional)</li>
              <li>Use the DTAA (Double Taxation Avoidance Agreement) if your employer country has one with India</li>
              <li>Keep detailed records of all foreign income receipts via wire transfer or PayPal/Wise</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
