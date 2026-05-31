"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, GraduationCap, IndianRupee, TrendingUp } from "lucide-react";

export default function MBAGuide() {
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
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">Education</Badge>
            <span className="text-sm text-muted-foreground">9 min read</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">MBA &amp; Higher Education Career Guide</h1>
          <p className="text-lg text-muted-foreground">Is an MBA worth it? When to pursue higher education and how it impacts your career trajectory.</p>
        </motion.div>

        <div className="prose prose-invert max-w-none space-y-8">
          <Card className="border-blue-500/20 bg-blue-500/5">
            <CardContent className="p-6">
              <h3 className="font-heading text-lg font-medium mb-3 text-blue-400">Key Numbers</h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><IndianRupee className="w-4 h-4 text-blue-400" /> Average IIM placement: ₹28-35 LPA (2024)</div>
                <div className="flex items-center gap-2"><GraduationCap className="w-4 h-4 text-blue-400" /> 3 lakh+ students take CAT exam annually</div>
                <div className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-blue-400" /> MBA graduates earn 2-3x more after 5 years vs non-MBA peers</div>
                <div className="flex items-center gap-2"><IndianRupee className="w-4 h-4 text-blue-400" /> IIM fee: ₹20-25 lakh | Tier-2 MBA: ₹5-15 lakh</div>
              </div>
            </CardContent>
          </Card>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">When is an MBA Worth It?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="border-emerald-500/20 bg-emerald-500/5">
                <CardContent className="p-5">
                  <h3 className="font-medium text-emerald-400 mb-3">Worth It When:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                      "You want to switch from tech to management/consulting",
                      "You have 2-5 years of work experience",
                      "You can get into a top-20 B-school",
                      "You want to build a strong alumni network",
                      "You&apos;re targeting consulting, banking, or FMCG",
                      "Your employer sponsors the degree",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-red-500/20 bg-red-500/5">
                <CardContent className="p-5">
                  <h3 className="font-medium text-red-400 mb-3">Think Twice When:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                      "You have zero work experience",
                      "You&apos;re doing it because &ldquo;everyone does it&rdquo;",
                      "The B-school has poor placement records",
                      "You&apos;re taking a huge loan for a tier-3 college",
                      "You&apos;re already in a fast-growing career",
                      "You want to become an entrepreneur (MBA not required)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">MBA Exams in India</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { exam: "CAT", colleges: "IIMs, FMS, MDI, SPJIMR", prep: "6-12 months", cost: "₹2,400" },
                { exam: "XAT", colleges: "XLRI, XIMB, GIM", prep: "3-6 months (after CAT)", cost: "₹2,000" },
                { exam: "GMAT", colleges: "ISB, global B-schools", prep: "3-6 months", cost: "₹22,000" },
                { exam: "NMAT", colleges: "NMIMS, XIMB", prep: "2-3 months", cost: "₹2,800" },
              ].map((e, i) => (
                <Card key={i} className="border-border/50 bg-card/80">
                  <CardContent className="p-4">
                    <h4 className="font-medium">{e.exam}</h4>
                    <p className="text-sm text-blue-400 mt-1">{e.colleges}</p>
                    <p className="text-xs text-muted-foreground mt-1">Prep: {e.prep} | Fee: {e.cost}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">Alternatives to an MBA</h2>
            <p className="text-muted-foreground mb-4">An MBA is not the only path to career growth. Consider these alternatives:</p>
            <ul className="space-y-2">
              {[
                "CFA (Chartered Financial Analyst) — for finance careers, globally recognized",
                "PMP (Project Management Professional) — for operations and consulting",
                "Google/Meta Certifications — digital marketing, data analytics, UX design",
                "Executive MBA or Online MBA — ISB, IIMs offer 1-year programs for working professionals",
                "Startup experience — 2 years at a startup can teach you more than most MBA programs",
                "MS abroad — if you want to combine technical depth with business knowledge",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm"><CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">Career Paths After MBA</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { role: "Management Consulting", salary: "₹20-50 LPA" },
                { role: "Investment Banking", salary: "₹18-40 LPA" },
                { role: "Product Management", salary: "₹20-45 LPA" },
                { role: "Marketing Management", salary: "₹12-30 LPA" },
                { role: "Operations & Supply Chain", salary: "₹12-25 LPA" },
                { role: "Entrepreneurship", salary: "Variable (sky&apos;s the limit)" },
              ].map((c, i) => (
                <Card key={i} className="border-border/50 bg-card/80">
                  <CardContent className="p-3 text-center">
                    <p className="font-medium text-sm">{c.role}</p>
                    <p className="text-blue-400 text-xs mt-1">{c.salary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
