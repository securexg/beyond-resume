"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Palette, Camera, Pen, Film, Music } from "lucide-react";

export default function CreativeCareers() {
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
            <Badge className="bg-pink-500/10 text-pink-400 border-pink-500/20">Creative</Badge>
            <span className="text-sm text-muted-foreground">7 min read</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">Creative Careers: Design, Content &amp; Media</h1>
          <p className="text-lg text-muted-foreground">Breaking into design, content writing, filmmaking, photography, and other creative fields — with real Indian context.</p>
        </motion.div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">Creative Careers Are Real Careers</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Indian creative economy is booming. With the rise of social media, OTT platforms, D2C brands, and content marketing, creative professionals are in higher demand than ever. The notion that &ldquo;creative fields don&apos;t pay well&rdquo; is outdated — top content creators, designers, and filmmakers in India earn more than many IT professionals.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">Top Creative Career Paths</h2>
            <div className="space-y-4">
              {[
                { icon: Palette, title: "Graphic & UI/UX Design", salary: "₹4-25 LPA", desc: "Brand design, app/web design, social media graphics. Tools: Figma, Adobe Suite, Canva Pro. India has a shortage of good UI/UX designers — demand is extremely high.", path: "Learn design fundamentals → Build portfolio (10+ projects) → Internship/freelance → Full-time or agency" },
                { icon: Pen, title: "Content Writing & Copywriting", salary: "₹3-18 LPA", desc: "Blog writing, SEO content, ad copy, scriptwriting, technical writing. Every company needs content. Over 5 lakh content jobs were posted in India in 2024.", path: "Start a blog/Medium → Guest post → Build portfolio → Apply to agencies or go freelance" },
                { icon: Film, title: "Video Production & Editing", salary: "₹4-20 LPA", desc: "YouTube, Instagram reels, corporate videos, short films, OTT content. India&apos;s OTT market is worth ₹25,000+ crore. Video editors and producers are in massive demand.", path: "Learn editing (Premiere/DaVinci) → Edit for free/cheap → Build reel → YouTube/agency work" },
                { icon: Camera, title: "Photography", salary: "₹3-15 LPA", desc: "Wedding photography (₹50K-5L per event), product photography for e-commerce, food photography, portrait and fashion shoots.", path: "Learn basics → Assist a photographer → Build portfolio → Specialize in a niche" },
                { icon: Music, title: "Music & Audio Production", salary: "₹3-20 LPA", desc: "Podcast editing, jingle creation, background scores, sound design. With 100M+ podcast listeners in India, audio is the next frontier.", path: "Learn DAW (Logic/FL Studio) → Produce samples → Collaborate → Commercial work" },
              ].map((career, i) => {
                const Icon = career.icon;
                return (
                  <Card key={i} className="border-border/50 bg-card/80">
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-pink-500/15 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-pink-400" />
                        </div>
                        <div>
                          <h3 className="font-heading font-medium">{career.title}</h3>
                          <span className="text-pink-400 text-sm">{career.salary}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{career.desc}</p>
                      <div className="p-3 rounded-lg bg-pink-500/5 border border-pink-500/10">
                        <p className="text-xs text-pink-300/90"><strong>Pathway:</strong> {career.path}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">How to Build a Creative Portfolio</h2>
            <ul className="space-y-2">
              {[
                "Quality over quantity — 5-8 strong pieces beat 50 mediocre ones",
                "Show process, not just results — clients love seeing how you think",
                "Include real or realistic projects — mock briefs for real brands work great",
                "Use Behance, Dribbble (design), Contently (writing), Vimeo (video)",
                "Get a personal website — even a simple one shows professionalism",
                "Update every 3 months — stale portfolios lose opportunities",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm"><CheckCircle className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" />{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">Where to Find Creative Jobs in India</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { name: "Behance Jobs", type: "Design roles" },
                { name: "LinkedIn", type: "All creative roles" },
                { name: "AngelList", type: "Startup creative roles" },
                { name: "Pepper Content", type: "Content writing" },
                { name: "YourDOST Careers", type: "Creative + mental health" },
                { name: "Instagram DMs", type: "Direct client outreach" },
              ].map((p, i) => (
                <Card key={i} className="border-border/50 bg-card/80">
                  <CardContent className="p-3">
                    <p className="font-medium text-sm">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.type}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">Real Talk: Challenges in Creative Careers</h2>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><strong>Family pressure:</strong> Many Indian families still see creative careers as &ldquo;not real jobs.&rdquo; Build proof — show income, show growth.</li>
              <li><strong>Irregular income:</strong> Especially early on. Keep a 6-month buffer and diversify income streams.</li>
              <li><strong>Imposter syndrome:</strong> Every creative professional faces this. Ship work, get feedback, improve. Repeat.</li>
              <li><strong>Burnout:</strong> Creative work is emotionally draining. Set boundaries, take breaks, protect your energy.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
