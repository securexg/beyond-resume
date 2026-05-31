"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, IndianRupee, Globe, Users, Clock } from "lucide-react";

export default function FreelancingGuide() {
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
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Freelancing</Badge>
            <span className="text-sm text-muted-foreground">8 min read</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">Building a Freelancing Career in India</h1>
          <p className="text-lg text-muted-foreground">How to start, find clients, set pricing, and build a sustainable independent career — no office required.</p>
        </motion.div>

        <div className="prose prose-invert max-w-none space-y-8">
          <Card className="border-emerald-500/20 bg-emerald-500/5">
            <CardContent className="p-6">
              <h3 className="font-heading text-lg font-medium mb-3 text-emerald-400">Key Numbers</h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><IndianRupee className="w-4 h-4 text-emerald-400" /> India has 15 million+ freelancers — second largest globally after the US</div>
                <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-emerald-400" /> Indian freelancers earned $3.5 billion+ from global platforms in 2024</div>
                <div className="flex items-center gap-2"><Users className="w-4 h-4 text-emerald-400" /> 73% of freelancers in India are under 30 years old</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /> Average freelancer earns 40-60% more than a salaried equivalent after 2 years</div>
              </div>
            </CardContent>
          </Card>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">Who Can Freelance?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Freelancing is not just for coders. Some of the highest-earning freelance categories in India are non-tech:</p>
            <ul className="space-y-2">
              {[
                "Content Writing & Copywriting — blogs, SEO content, ad copy, social media",
                "Graphic Design — logos, social media graphics, packaging, UI design",
                "Video Editing — YouTube, reels, corporate videos, wedding edits",
                "Digital Marketing — SEO, social media management, email campaigns",
                "Translation & Transcription — especially Hindi-English pairs",
                "Virtual Assistance — calendar management, data entry, email management",
                "Accounting & Bookkeeping — GST filing, Tally, QuickBooks",
                "Teaching & Tutoring — online tutoring for Indian and global students",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">Getting Started: Step by Step</h2>
            <div className="space-y-4">
              {[
                { title: "Pick Your Skill", desc: "Choose one skill you can deliver consistently. Don't try to be a jack of all trades initially. A focused niche gets more clients." },
                { title: "Build a Portfolio", desc: "Create 3-5 sample projects even if unpaid. Use Behance for design, GitHub for code, Medium for writing. Your portfolio is your resume." },
                { title: "Set Up Profiles", desc: "Register on Upwork, Fiverr, Toptal (for premium), and Indian platforms like Flexiple, Truelancer. A complete profile with a professional photo gets 40% more responses." },
                { title: "Start Low, Raise Fast", desc: "Your first 5 projects should be priced low to get reviews. After 10+ reviews with 5-star ratings, increase rates by 30-50%." },
                { title: "Build Direct Clients", desc: "Platforms take 10-20% commission. After building a reputation, use LinkedIn and cold emails to find direct clients. This is where the real money is." },
              ].map((step, i) => (
                <Card key={i} className="border-border/50 bg-card/80">
                  <CardContent className="p-5">
                    <h3 className="font-heading font-medium mb-1">{i + 1}. {step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">Pricing Guide for Indian Freelancers</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { skill: "Content Writing", range: "₹1-5 per word (English)", tip: "Charge per word or per article, not hourly" },
                { skill: "Graphic Design", range: "₹2,000-15,000 per project", tip: "Logo design, social media kits, branding packages" },
                { skill: "Video Editing", range: "₹3,000-20,000 per video", tip: "YouTube videos, reels, corporate videos" },
                { skill: "Web Development", range: "₹15,000-1,00,000 per project", tip: "WordPress sites to custom React apps" },
                { skill: "Digital Marketing", range: "₹10,000-50,000 per month", tip: "Monthly retainer model works best" },
                { skill: "Virtual Assistance", range: "₹300-800 per hour", tip: "International clients pay 2-3x more" },
              ].map((item, i) => (
                <Card key={i} className="border-border/50 bg-card/80">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-sm">{item.skill}</h4>
                    <p className="text-emerald-400 text-sm font-medium mt-1">{item.range}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.tip}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">Common Mistakes to Avoid</h2>
            <ul className="space-y-2">
              {[
                "Working without a contract — always have scope, timeline, and payment terms in writing",
                "Undercharging forever — raise rates every 6 months as your skills improve",
                "Not saving for taxes — set aside 20-30% of income for GST and income tax",
                "Ignoring client communication — respond within 24 hours, always",
                "Taking every project — say no to bad-fit clients. Your time is your most valuable asset",
                "No financial buffer — keep 3-6 months of expenses saved before going full-time freelance",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-red-400 mt-0.5">✗</span> {item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">Best Platforms for Indian Freelancers</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { name: "Upwork", type: "Global, all skills" },
                { name: "Fiverr", type: "Task-based, creative" },
                { name: "Toptal", type: "Premium, tech only" },
                { name: "Flexiple", type: "India, tech/design" },
                { name: "Contra", type: "No commission" },
                { name: "LinkedIn", type: "Direct clients" },
              ].map((p, i) => (
                <Card key={i} className="border-border/50 bg-card/80">
                  <CardContent className="p-3 text-center">
                    <p className="font-medium text-sm">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.type}</p>
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
