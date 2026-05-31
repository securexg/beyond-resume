"use client";

import Image from "next/image";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Rocket,
  Lightbulb,
  CheckCircle,
  XCircle,
  Star,
  Globe,
  MapPin,
  Quote,
} from "lucide-react";

const indianEntrepreneurs = [
  {
    name: "Ritesh Agarwal",
    company: "OYO Rooms",
    story: "Dropped out of college at 17, started OYO with a single hotel in Gurgaon. Built it into the world&apos;s third-largest hotel chain by rooms. No tech degree, no MBA — just relentless hustle and a clear vision.",
    lesson: "You don&apos;t need a degree to build a billion-dollar company. Start small, solve a real problem.",
    age: "Started at 17",
  },
  {
    name: "Falguni Nayar",
    company: "Nykaa",
    story: "Left a successful 20-year career in investment banking at age 49 to start Nykaa. Built India&apos;s largest beauty e-commerce platform. Became India&apos;s richest self-made woman billionaire.",
    lesson: "It&apos;s never too late to start. Domain expertise and timing matter more than age.",
    age: "Started at 49",
  },
  {
    name: "Bhavish Aggarwal",
    company: "Ola",
    story: "IIT Bombay graduate who started Ola after a bad cab experience. Grew it to compete with Uber in India. Now leading Ola Electric, India&apos;s largest EV company.",
    lesson: "Personal frustrations are often the best startup ideas. Solve your own problem first.",
    age: "Started at 25",
  },
  {
    name: "Vineeta Singh",
    company: "SUGAR Cosmetics",
    story: "IIM Ahmedabad graduate who turned down a Rs 1 crore job offer to build SUGAR Cosmetics. Started from her living room, now a Rs 500+ crore brand. Shark Tank India judge.",
    lesson: "Saying no to the safe path takes courage. Build for an underserved audience.",
    age: "Started at 27",
  },
  {
    name: "Deepinder Goyal",
    company: "Zomato",
    story: "Started as a simple PDF menu listing for office colleagues at Bain &amp; Company. Grew Zomato into a Rs 1 lakh crore food-tech giant. Survived multiple near-death moments.",
    lesson: "Start with the simplest version of your idea. Perfection kills startups.",
    age: "Started at 26",
  },
  {
    name: "Kiran Mazumdar-Shaw",
    company: "Biocon",
    story: "Started Biocon in a garage in Bangalore with Rs 10,000 in 1978. Banks refused to lend to a woman entrepreneur. Today Biocon is a Rs 40,000+ crore biopharmaceutical giant.",
    lesson: "Rejection is fuel. When banks say no, prove them wrong with results.",
    age: "Started at 25",
  },
];

const globalEntrepreneurs = [
  {
    name: "Sara Blakely",
    company: "Spanx",
    story: "Was selling fax machines door-to-door before starting Spanx with $5,000 savings. No business education, no fashion experience. Became the youngest self-made female billionaire.",
    lesson: "You don&apos;t need industry experience. Fresh eyes see opportunities experts miss.",
    age: "Started at 29",
  },
  {
    name: "Jack Ma",
    company: "Alibaba",
    story: "Failed college entrance exams twice, rejected from 30 jobs including KFC. Started Alibaba from his apartment. Built it into the world&apos;s largest e-commerce platform.",
    lesson: "Failure is just practice. Every rejection is redirection.",
    age: "Started at 35",
  },
  {
    name: "Richard Branson",
    company: "Virgin Group",
    story: "Dyslexic, dropped out of school at 16. Started with a student magazine, then a mail-order record business. Today Virgin Group has 400+ companies across multiple industries.",
    lesson: "Your perceived weaknesses can become your greatest strengths.",
    age: "Started at 16",
  },
  {
    name: "Oprah Winfrey",
    company: "OWN / Harpo Productions",
    story: "Born into poverty, faced abuse and hardship. Started as a local news anchor, built a media empire worth $2.5 billion. Proof that your background doesn&apos;t define your future.",
    lesson: "Your story is your superpower. Authenticity builds the strongest brands.",
    age: "Started at 32",
  },
  {
    name: "Elon Musk",
    company: "Tesla, SpaceX, X",
    story: "Immigrant from South Africa, slept in his office, nearly went bankrupt multiple times with both Tesla and SpaceX in 2008. Now building rockets and electric cars at scale.",
    lesson: "Bet on yourself when nobody else will. Conviction outlasts capital.",
    age: "Started PayPal at 28",
  },
  {
    name: "Whitney Wolfe Herd",
    company: "Bumble",
    story: "Left Tinder after co-founding it, faced public legal battles. Built Bumble into a $8 billion dating app where women make the first move. Became youngest female CEO to take a company public.",
    lesson: "Your setbacks can fuel your greatest comeback. Reinvent the rules.",
    age: "Started at 25",
  },
];

const entrepreneurDos = [
  "Start before you feel ready — the perfect moment never comes",
  "Validate your idea with real customers before building anything",
  "Keep your burn rate low — survive long enough to find product-market fit",
  "Build a team that complements your weaknesses",
  "Focus on one problem and solve it exceptionally well",
  "Learn to sell — every founder is a salesperson",
  "Network genuinely, not transactionally",
  "Read voraciously — books, case studies, competitor analyses",
  "Embrace failure as data, not defeat",
  "Take care of your mental and physical health",
];

const entrepreneurDonts = [
  "Don&apos;t quit your job on day one — validate first, leap second",
  "Don&apos;t chase funding before finding a real problem to solve",
  "Don&apos;t copy someone else&apos;s business model blindly",
  "Don&apos;t ignore unit economics — revenue without profit is vanity",
  "Don&apos;t hire too fast — small teams move faster",
  "Don&apos;t ignore customer feedback because you &ldquo;know better&rdquo;",
  "Don&apos;t compare your chapter 1 to someone else&apos;s chapter 20",
  "Don&apos;t neglect legal basics — register your company, get contracts right",
  "Don&apos;t burn bridges — the startup ecosystem is small",
  "Don&apos;t forget: most overnight successes took 10 years",
];

const pathway = [
  { step: "1", title: "Identify a Real Problem", description: "Talk to 50+ potential customers. Find a pain point people will pay to solve. The best ideas come from lived experience." },
  { step: "2", title: "Validate Before Building", description: "Create a landing page, run ads, take pre-orders. Prove demand before writing a single line of code or investing money." },
  { step: "3", title: "Build an MVP", description: "Minimum Viable Product — the simplest version that solves the core problem. Ship fast, learn faster. Perfection is the enemy." },
  { step: "4", title: "Find Your First 10 Customers", description: "These are your most important customers. Serve them personally. Their feedback shapes everything that follows." },
  { step: "5", title: "Iterate Based on Data", description: "Track metrics that matter — retention, NPS, unit economics. Pivot if needed. Most successful companies pivoted at least once." },
  { step: "6", title: "Build a Team", description: "Hire for culture and hunger over credentials. A small team of A-players beats a large team of B-players every time." },
  { step: "7", title: "Scale What Works", description: "Once you have product-market fit (customers coming back and referring others), pour fuel on the fire. This is when funding makes sense." },
];

const skillsNeeded = [
  { skill: "Resilience", description: "Ability to bounce back from failures, rejections, and setbacks repeatedly" },
  { skill: "Resourcefulness", description: "Making the most of limited resources — time, money, people" },
  { skill: "Communication", description: "Convincing customers, investors, and employees to believe in your vision" },
  { skill: "Decision Making", description: "Making fast decisions with incomplete information — analysis paralysis kills startups" },
  { skill: "Adaptability", description: "Pivoting strategy when data shows your original plan isn&apos;t working" },
  { skill: "Empathy", description: "Deeply understanding customer pain points and team dynamics" },
];

export default function EntrepreneurshipPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <div className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-background to-amber-500/5" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20">
                <Rocket className="w-3 h-3 mr-1" />
                Beyond Jobs — Build Your Own Path
              </Badge>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.1]">
                Entrepreneurship{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  isn&apos;t a career choice.
                </span>
                <br />
                <span className="text-3xl sm:text-4xl text-muted-foreground font-light">
                  It&apos;s a mindset.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                You don&apos;t need a specific degree, a perfect resume, or a tech background.
                Entrepreneurship demands a completely different skill set — resilience, vision, and the courage to start.
                Here are stories, lessons, and a practical roadmap to help you begin.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl" />
              <Image
                src="/images/pexels/hero-entrepreneur.jpeg"
                alt="Entrepreneurship"
                width={600}
                height={400}
                className="relative rounded-3xl shadow-2xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* The Entrepreneurial Skillset */}
      <div className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-medium mb-4">
              A Different{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Skill Set</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Entrepreneurship doesn&apos;t need your college CGPA or a polished resume.
              It needs these skills — and none of them are taught in classrooms.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsNeeded.map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="border-border/50 bg-card/80 h-full">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/15 flex items-center justify-center">
                        <Star className="w-5 h-5 text-orange-400" />
                      </div>
                      <h3 className="font-heading font-medium text-lg">{item.skill}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Indian Entrepreneurs */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-orange-400" />
              <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20">Made in India</Badge>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-medium mb-4">
              Indian Entrepreneurs Who{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Rewrote the Rules</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From garage startups to billion-dollar empires — these founders prove that India breeds world-class entrepreneurs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {indianEntrepreneurs.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="border-border/50 bg-card/80 h-full hover:border-orange-500/30 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-heading font-medium text-lg">{person.name}</h3>
                        <p className="text-orange-400 text-sm font-medium">{person.company}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">{person.age}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{person.story}</p>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-orange-500/5 border border-orange-500/10">
                      <Lightbulb className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                      <p className="text-sm text-orange-300/90">{person.lesson}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Entrepreneurs */}
      <div className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-blue-400" />
              <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">Global Icons</Badge>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-medium mb-4">
              Global Entrepreneurs Who{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Changed the World</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From fax machine saleswomen to rocket builders — proof that entrepreneurship has no prerequisites.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalEntrepreneurs.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="border-border/50 bg-card/80 h-full hover:border-blue-500/30 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-heading font-medium text-lg">{person.name}</h3>
                        <p className="text-blue-400 text-sm font-medium">{person.company}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">{person.age}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{person.story}</p>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-500/5 border border-blue-500/10">
                      <Lightbulb className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                      <p className="text-sm text-blue-300/90">{person.lesson}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pathway */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-medium mb-4">
              The Startup{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Pathway</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A practical, no-nonsense roadmap from idea to product-market fit.
            </p>
          </motion.div>

          <div className="space-y-6">
            {pathway.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="border-border/50 bg-card/80">
                  <CardContent className="p-6 flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-heading font-medium text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Do's and Don'ts */}
      <div className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-medium mb-4">
              The{" "}
              <span className="text-emerald-400">Do&apos;s</span> &amp;{" "}
              <span className="text-red-400">Don&apos;ts</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Honest, practical guidelines from founders who&apos;ve been through it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Do's */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-emerald-500/20 bg-emerald-500/5 h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <h3 className="font-heading font-medium text-xl text-emerald-400">Do&apos;s</h3>
                  </div>
                  <ul className="space-y-3">
                    {entrepreneurDos.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Don'ts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-red-500/20 bg-red-500/5 h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-6 h-6 text-red-400" />
                    <h3 className="font-heading font-medium text-xl text-red-400">Don&apos;ts</h3>
                  </div>
                  <ul className="space-y-3">
                    {entrepreneurDonts.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Quote */}
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Quote className="w-10 h-10 text-orange-400 mx-auto" />
            <blockquote className="font-heading text-2xl sm:text-3xl font-light text-muted-foreground italic leading-relaxed">
              &ldquo;The biggest risk is not taking any risk. In a world that&apos;s changing really quickly, the only strategy that is guaranteed to fail is not taking risks.&rdquo;
            </blockquote>
            <p className="text-orange-400 font-medium">— Mark Zuckerberg</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
