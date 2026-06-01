"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Video,
  PenLine,
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Users,
  Layers,
} from "lucide-react";

const platforms = [
  {
    name: "YouTube",
    icon: Video,
    color: "from-red-500 to-orange-500",
    reach: "460M Indian users",
    monetization: "Ad Revenue + Sponsorships + Memberships",
    avgEarnings: "₹50K–5L/month (100K+ subs)",
    bestFor: "Long-form education, vlogs, tech, finance",
    link: "https://www.youtube.com/creator-academy",
  },
  {
    name: "Instagram",
    icon: Users,
    color: "from-pink-500 to-purple-500",
    reach: "230M Indian users",
    monetization: "Brand Collabs + Reels Bonus + Subscriptions",
    avgEarnings: "₹20K–3L/month (100K followers)",
    bestFor: "Lifestyle, fashion, food, fitness",
    link: "https://creators.instagram.com",
  },
  {
    name: "LinkedIn",
    icon: PenLine,
    color: "from-blue-500 to-cyan-500",
    reach: "110M Indian professionals",
    monetization: "Consulting + Courses + Job Offers",
    avgEarnings: "₹1L–20L/month (B2B creators)",
    bestFor: "Career advice, SaaS, entrepreneurship, finance",
    link: "https://www.linkedin.com/creators",
  },
  {
    name: "Substack / Newsletter",
    icon: PenLine,
    color: "from-amber-500 to-yellow-500",
    reach: "Niche but high-value audience",
    monetization: "Paid Subscriptions + Sponsorships",
    avgEarnings: "₹50K–5L/month (paid subscribers)",
    bestFor: "Deep dives, tech, finance, policy",
    link: "https://substack.com",
  },
  {
    name: "Podcast",
    icon: Layers,
    color: "from-green-500 to-teal-500",
    reach: "Growing: 57M Indian listeners",
    monetization: "Sponsorships + Patreon + Live Events",
    avgEarnings: "₹30K–3L/month (10K+ downloads/ep)",
    bestFor: "Interviews, business, spirituality, comedy",
    link: "https://creators.spotify.com",
  },
];

const careerPaths = [
  {
    title: "Solo Content Creator",
    timeline: "0–3 years to monetize",
    steps: ["Pick a niche", "Build on 1–2 platforms consistently", "Reach 10K followers → brand deals start", "100K → full-time income"],
    income: "₹30K–10L/month",
    risk: "High — long buildup",
  },
  {
    title: "Content Marketer at a Company",
    timeline: "Immediate (job)",
    steps: ["Build writing + SEO + video skills", "Join a startup or brand as Content Manager", "Lead content strategy at Series B+"],
    income: "₹8–35 LPA (salary)",
    risk: "Low",
  },
  {
    title: "UGC Creator (Brands pay you for content)",
    timeline: "3–6 months to first brand deal",
    steps: ["Build a portfolio of 5–10 sample videos/posts", "Pitch to D2C brands directly", "Scale to 10–15 brand deals/month"],
    income: "₹50K–3L/month",
    risk: "Low-Medium",
  },
  {
    title: "Creator Economy Agency",
    timeline: "1–2 years",
    steps: ["Grow your own channel first", "Manage other creators' channels", "Build a team → agency model"],
    income: "₹5L–50L+/month",
    risk: "Medium",
  },
];

const indianCreators = [
  { name: "Ankur Warikoo", niche: "Personal Finance & Entrepreneurship", platform: "YouTube + LinkedIn", followers: "5M+", income: "₹2–5Cr/year" },
  { name: "Nikhil Kamath", niche: "Business & Investing", platform: "YouTube + Podcast", followers: "3M+", income: "₹1–3Cr/year" },
  { name: "Ranveer Allahbadia (BeerBiceps)", niche: "Podcast & Motivation", platform: "YouTube", followers: "18M+", income: "₹5–10Cr/year" },
  { name: "Sharan Hegde (Finance With Sharan)", niche: "Personal Finance", platform: "Instagram + YouTube", followers: "4M+", income: "₹1–3Cr/year" },
  { name: "Karan Mehta (CA Rachana Ranade)", niche: "Stock Market Education", platform: "YouTube", followers: "8M+", income: "₹2–5Cr/year" },
  { name: "Prajakta Koli", niche: "Comedy & Lifestyle", platform: "YouTube + Instagram", followers: "10M+", income: "₹2–4Cr/year" },
];

const nicheIdeas = [
  { niche: "Personal Finance (India)", demand: "Explosive", why: "120M new investors since 2020" },
  { niche: "AI Tools & Productivity", demand: "Explosive", why: "Every professional wants to use AI" },
  { niche: "Career & Placement Coaching", demand: "High", why: "15M students graduate yearly in India" },
  { niche: "Vernacular (Hindi/Tamil/Telugu) Tech", demand: "Explosive", why: "700M internet users speak regional languages" },
  { niche: "Sustainable Lifestyle", demand: "Growing", why: "Gen Z audience is value-driven" },
  { niche: "UPSC / Govt Exam Content", demand: "High", why: "10M+ UPSC aspirants per year" },
  { niche: "Real Estate & Property India", demand: "High", why: "Largest purchase decision for Indians" },
  { niche: "Side Hustle & Freelancing India", demand: "High", why: "Post-layoffs, everyone wants an income backup" },
];

const tools = [
  { name: "CapCut", use: "Mobile video editing — free, powerful" },
  { name: "Canva", use: "Thumbnails, carousels, social graphics" },
  { name: "Notion", use: "Content calendar, idea bank, scripts" },
  { name: "Descript", use: "Podcast + video editing with AI" },
  { name: "TubeBuddy", use: "YouTube SEO, keyword research" },
  { name: "Opus Clip", use: "Auto-clip long videos into shorts" },
  { name: "Beehiiv", use: "Professional newsletter platform" },
  { name: "Gumroad / Topmate", use: "Sell courses, calls, digital products" },
];

const demandColor: Record<string, string> = {
  Explosive: "bg-red-500",
  High: "bg-green-500",
  Growing: "bg-yellow-500",
};

export default function ContentCreationPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <div className="pt-16 sm:pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <Video className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Creator Economy 2025</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-3">Content Creation Careers</h1>
            <p className="text-muted-foreground max-w-2xl">
              India&apos;s creator economy is now worth $50B+ globally. Whether you want to go full-time or monetize part-time — here&apos;s everything you need to know.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          >
            {[
              { label: "Indian Creators", value: "80M+" },
              { label: "Creator Economy (Global)", value: "$250B" },
              { label: "Avg Brand Deal (100K subs)", value: "₹30K–2L" },
              { label: "Top Creator Income", value: "₹10Cr+/yr" },
            ].map((s) => (
              <Card key={s.label} className="border-border/40 text-center p-4">
                <p className="font-heading text-2xl font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </Card>
            ))}
          </motion.div>

          {/* Platforms */}
          <section className="mb-12">
            <h2 className="font-heading text-xl font-semibold mb-4">Platforms & Earnings</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {platforms.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Card className="border-border/50 hover:shadow-md transition-shadow h-full">
                      <CardHeader className="pb-2">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center mb-2`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <CardTitle className="text-base">{p.name}</CardTitle>
                        <CardDescription className="text-xs">{p.reach}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2 pt-0 text-xs">
                        <div>
                          <span className="text-muted-foreground">Best for: </span>{p.bestFor}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Monetization: </span>{p.monetization}
                        </div>
                        <div className="flex justify-between items-center pt-1.5 border-t border-border/50">
                          <span className="text-green-500 font-semibold">{p.avgEarnings}</span>
                          <a href={p.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline">
                            Learn <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Career Paths */}
          <section className="mb-12">
            <h2 className="font-heading text-xl font-semibold mb-4">Career Paths in Content</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {careerPaths.map((path, i) => (
                <motion.div
                  key={path.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Card className="border-border/50 h-full">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base">{path.title}</CardTitle>
                        <Badge variant="outline" className="text-xs">{path.risk} Risk</Badge>
                      </div>
                      <CardDescription className="text-xs">{path.timeline}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 pt-0">
                      <ol className="space-y-1">
                        {path.steps.map((s, si) => (
                          <li key={si} className="text-xs flex gap-2">
                            <span className="text-primary font-bold shrink-0">{si + 1}.</span>{s}
                          </li>
                        ))}
                      </ol>
                      <div className="pt-1.5 border-t border-border/50">
                        <span className="text-xs text-muted-foreground">Income Range: </span>
                        <span className="text-xs font-semibold text-green-500">{path.income}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Niche Ideas */}
          <section className="mb-12">
            <h2 className="font-heading text-xl font-semibold mb-4">🔥 High-Demand Niches for Indian Creators</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {nicheIdeas.map((n, i) => (
                <motion.div
                  key={n.niche}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="border-border/50 p-4 h-full">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-sm font-medium">{n.niche}</p>
                      <Badge className={`${demandColor[n.demand]} text-white text-xs shrink-0`}>{n.demand}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{n.why}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Indian Creator Stories */}
          <section className="mb-12">
            <h2 className="font-heading text-xl font-semibold mb-4">🇮🇳 Indian Creator Success Stories</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {indianCreators.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Card className="border-border/50 p-4">
                    <p className="font-semibold text-sm mb-1">{c.name}</p>
                    <p className="text-xs text-muted-foreground mb-2">{c.niche}</p>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      <Badge variant="secondary" className="text-xs">{c.platform}</Badge>
                      <Badge variant="secondary" className="text-xs">{c.followers}</Badge>
                    </div>
                    <div className="flex justify-between border-t border-border/50 pt-2">
                      <span className="text-xs text-muted-foreground">Est. Income</span>
                      <span className="text-xs font-semibold text-green-500">{c.income}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Tools */}
          <section className="mb-12">
            <h2 className="font-heading text-xl font-semibold mb-4">Essential Creator Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {tools.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Card className="border-border/50 p-3 text-center">
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{t.use}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-center"
          >
            <p className="text-muted-foreground mb-4">Ready to start your creator journey?</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/career-quiz">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-violet-500 to-pink-500 text-white border-0">
                  Find Your Path
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/insights">
                <Button variant="outline" size="lg" className="gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Read Career Insights
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
