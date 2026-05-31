"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowLeft, Rocket, CheckCircle, ArrowRight } from "lucide-react";

export default function EntrepreneurshipMindset() {
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
            <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20">Entrepreneurship</Badge>
            <span className="text-sm text-muted-foreground">8 min read</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">The Entrepreneurship Mindset</h1>
          <p className="text-lg text-muted-foreground">Why entrepreneurship is a valid career path and what it really takes — no tech degree, no MBA, no family business required.</p>
        </motion.div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">Entrepreneurship is Not a &ldquo;Plan B&rdquo;</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In India, the default career advice is: &ldquo;Get a good job.&rdquo; Engineering, medicine, government, or MBA — these are seen as the only valid paths. Entrepreneurship is treated as what you do when nothing else works out.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              That&apos;s wrong. Entrepreneurship is a deliberate choice — a different career path with its own rules, skill set, and rewards. India has 100+ unicorn startups, and many founders started with nothing but an idea and the courage to try.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">You Don&apos;t Need Permission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Here&apos;s what you DON&apos;T need to start a business in India:</p>
            <ul className="space-y-2">
              {[
                "A tech background — Falguni Nayar (Nykaa) was a banker, Vineeta Singh (SUGAR) studied at IIM",
                "A business family — Ritesh Agarwal (OYO) came from a small town in Odisha",
                "Lots of capital — Zerodha started with ₹0 marketing budget and grew to a ₹1 lakh crore company",
                "An MBA — Bhavish Aggarwal (Ola) started right after IIT, Jack Ma failed college entrance exams",
                "A perfect idea — most great companies pivoted 2-3 times before finding what works",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm"><CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">The Real Skill Set of Entrepreneurs</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { skill: "Resilience", desc: "You will hear &ldquo;no&rdquo; 100 times before your first &ldquo;yes.&rdquo; The ability to keep going is everything." },
                { skill: "Selling", desc: "Every founder is a salesperson. Selling your idea to customers, investors, and your own team." },
                { skill: "Speed", desc: "Ship fast, learn faster. Perfect is the enemy of done. Get your product out and iterate." },
                { skill: "Resourcefulness", desc: "Making ₹10 do the work of ₹100. Creative problem-solving with limited resources." },
                { skill: "Empathy", desc: "Understanding your customer&apos;s pain so deeply that the solution becomes obvious." },
                { skill: "Storytelling", desc: "Investors don&apos;t fund products — they fund stories. Learn to tell yours compellingly." },
              ].map((s, i) => (
                <Card key={i} className="border-border/50 bg-card/80">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-orange-400">{s.skill}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">Types of Businesses You Can Start</h2>
            <p className="text-muted-foreground mb-4">Not every business needs to be a tech startup or require VC funding:</p>
            <div className="space-y-3">
              {[
                { type: "Service Business", examples: "Consulting, coaching, tutoring, design agency, content studio", cost: "₹0-50K to start" },
                { type: "Product Business", examples: "D2C brand, handmade goods, food products, apparel", cost: "₹1-10L to start" },
                { type: "Tech Startup", examples: "SaaS, app, marketplace, AI tool", cost: "₹0-5L (if you can code)" },
                { type: "Content Business", examples: "YouTube channel, newsletter, podcast, online course", cost: "₹0-20K to start" },
                { type: "Local Business", examples: "Cafe, gym, salon, co-working space, tuition center", cost: "₹5-50L to start" },
              ].map((b, i) => (
                <Card key={i} className="border-border/50 bg-card/80">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-sm">{b.type}</h4>
                      <span className="text-orange-400 text-xs">{b.cost}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{b.examples}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-medium mb-4">First Steps to Take Today</h2>
            <ol className="space-y-3">
              {[
                "Write down 5 problems you face daily — your startup idea might be in that list",
                "Talk to 10 people about those problems — validate before building",
                "Read &ldquo;Zero to One&rdquo; by Peter Thiel and &ldquo;The Lean Startup&rdquo; by Eric Ries",
                "Follow Indian founders on Twitter/LinkedIn — Kunal Shah, Nithin Kamath, Vineeta Singh",
                "Start a side project while keeping your job — don&apos;t quit until you have traction",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-xs flex items-center justify-center shrink-0 font-medium">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </section>

          <Card className="border-orange-500/20 bg-orange-500/5">
            <CardContent className="p-6 text-center space-y-3">
              <Rocket className="w-8 h-8 text-orange-400 mx-auto" />
              <h3 className="font-heading text-lg font-medium">Want to Dive Deeper?</h3>
              <p className="text-sm text-muted-foreground">Read stories of Indian and global entrepreneurs who built empires from scratch.</p>
              <Link href="/entrepreneurship" className="inline-flex items-center gap-2 text-orange-400 text-sm font-medium hover:underline">
                Explore Entrepreneurship Stories <ArrowRight className="w-4 h-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </article>
    </div>
  );
}
