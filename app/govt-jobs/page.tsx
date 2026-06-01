"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  BookOpen,
  Building2,
  Search,
  ExternalLink,
  ArrowRight,
  Users,
} from "lucide-react";

type Category = "all" | "central" | "banking" | "defence" | "railways" | "state" | "psu";

const exams = [
  {
    id: 1,
    name: "UPSC Civil Services (IAS/IPS/IFS)",
    category: "central",
    brief: "Gateway to the most prestigious Group A services in India — IAS, IPS, IFS, IRS and 20+ other services.",
    eligibility: "Any graduate (any stream). Age: 21–32 (OBC: 35, SC/ST: 37). Max attempts: 6 (Gen), 9 (OBC), unlimited (SC/ST).",
    vacancies: "~1,100 per year",
    salary: "₹56,100–₹2,50,000 + perks (7th Pay Commission)",
    officialLink: "https://upsc.gov.in",
    examDate: "Prelims: June | Mains: Sept–Oct",
    difficulty: "Extremely High",
  },
  {
    id: 2,
    name: "SSC CGL (Combined Graduate Level)",
    category: "central",
    brief: "Recruitment to Group B & C posts in central government ministries like Income Tax Officer, CBI Sub-Inspector, Auditor.",
    eligibility: "Graduate in any stream. Age: 18–32.",
    vacancies: "~10,000–25,000 per year",
    salary: "₹25,500–₹1,12,400 (Pay Level 4–8)",
    officialLink: "https://ssc.nic.in",
    examDate: "Tier-I: March/April | Tier-II: June",
    difficulty: "High",
  },
  {
    id: 3,
    name: "SSC CHSL (10+2 Level)",
    category: "central",
    brief: "For posts like LDC, Data Entry Operator, Postal Assistant in central government offices.",
    eligibility: "12th pass. Age: 18–27.",
    vacancies: "~4,000–7,000 per year",
    salary: "₹19,900–₹63,200 (Pay Level 2–4)",
    officialLink: "https://ssc.nic.in",
    examDate: "Tier-I: March–June",
    difficulty: "Medium",
  },
  {
    id: 4,
    name: "IBPS PO (Probationary Officer)",
    category: "banking",
    brief: "Recruitment of Probationary Officers in 11 public sector banks including PNB, Bank of Baroda, Canara Bank.",
    eligibility: "Graduate (60% preferred). Age: 20–30.",
    vacancies: "~4,000–6,000 per year",
    salary: "₹23,700–₹42,020 + allowances (~₹52,000 in-hand)",
    officialLink: "https://ibps.in",
    examDate: "Prelims: Oct | Mains: Nov | Interview: Jan",
    difficulty: "High",
  },
  {
    id: 5,
    name: "IBPS Clerk",
    category: "banking",
    brief: "Junior Associates (Customer Support & Sales) in public sector banks.",
    eligibility: "Graduate. Age: 20–28.",
    vacancies: "~6,000–12,000 per year",
    salary: "₹19,900–₹47,920 + allowances (~₹26,000 in-hand)",
    officialLink: "https://ibps.in",
    examDate: "Prelims: Aug | Mains: Oct",
    difficulty: "Medium",
  },
  {
    id: 6,
    name: "SBI PO",
    category: "banking",
    brief: "Most coveted banking exam for Probationary Officers at State Bank of India.",
    eligibility: "Graduate. Age: 21–30.",
    vacancies: "~2,000 per year",
    salary: "₹27,620–₹53,490 + allowances (~₹65,000 in-hand)",
    officialLink: "https://sbi.co.in/careers",
    examDate: "Prelims: Nov/Dec | Mains: Jan | Interview: Feb/March",
    difficulty: "Very High",
  },
  {
    id: 7,
    name: "RBI Grade B Officer",
    category: "banking",
    brief: "Officer cadre in Reserve Bank of India — one of the most prestigious banking roles.",
    eligibility: "Graduate (60%+). Age: 21–30. MBA/Economics preferred.",
    vacancies: "~200–300 per year",
    salary: "₹35,150–₹62,400 + HRA + perks (~₹75,000–1L in-hand)",
    officialLink: "https://rbi.org.in",
    examDate: "Phase-I: April | Phase-II: June",
    difficulty: "Very High",
  },
  {
    id: 8,
    name: "NDA (National Defence Academy)",
    category: "defence",
    brief: "Entry to Indian Army, Navy, and Air Force for 10+2 students.",
    eligibility: "10+2 (PCM for Navy/Air Force). Age: 16.5–19.5. Only unmarried males.",
    vacancies: "~400 per cycle (2 per year)",
    salary: "During training: ₹56,100 + allowances as Lieutenant",
    officialLink: "https://upsc.gov.in",
    examDate: "April & September",
    difficulty: "High",
  },
  {
    id: 9,
    name: "CDS (Combined Defence Services)",
    category: "defence",
    brief: "Entry to Indian Military Academy, Naval Academy, Air Force Academy and Officers Training Academy.",
    eligibility: "Graduate. Age: 19–25 (varies by service).",
    vacancies: "~450 per cycle (2 per year)",
    salary: "₹56,100 as Lieutenant + all military perks",
    officialLink: "https://upsc.gov.in",
    examDate: "February & November",
    difficulty: "High",
  },
  {
    id: 10,
    name: "CAPF AC (Central Armed Police Forces)",
    category: "defence",
    brief: "Assistant Commandant in BSF, CRPF, CISF, ITBP, SSB.",
    eligibility: "Graduate. Age: 20–25.",
    vacancies: "~200–300 per year",
    salary: "₹56,100 + additional police/security allowances",
    officialLink: "https://upsc.gov.in",
    examDate: "August",
    difficulty: "High",
  },
  {
    id: 11,
    name: "RRB NTPC (Non-Technical Popular Categories)",
    category: "railways",
    brief: "Recruitment for stations master, goods guard, commercial clerk, junior accounts assistant in Indian Railways.",
    eligibility: "Graduate (some posts 12th pass). Age: 18–33.",
    vacancies: "~35,000–1,00,000 per cycle",
    salary: "₹19,900–₹35,400 + railway perks",
    officialLink: "https://indianrailways.gov.in",
    examDate: "CBT-1: Apr/May | CBT-2: Jun/Jul",
    difficulty: "Medium",
  },
  {
    id: 12,
    name: "RRB ALP (Assistant Loco Pilot)",
    category: "railways",
    brief: "Operate electric/diesel locomotives across Indian Railways network.",
    eligibility: "10th + ITI/Diploma in relevant trade. Age: 18–28.",
    vacancies: "~20,000–70,000 per cycle",
    salary: "₹19,900–₹35,400 + running allowances",
    officialLink: "https://indianrailways.gov.in",
    examDate: "Stage-1: March/April",
    difficulty: "Medium",
  },
  {
    id: 13,
    name: "GATE (Graduate Aptitude Test in Engineering)",
    category: "psu",
    brief: "Gateway to PSU jobs (ONGC, BHEL, IOCL, GAIL, NTPC) and M.Tech admissions at IITs/NITs.",
    eligibility: "B.Tech/B.E/M.Sc in relevant stream. No age limit.",
    vacancies: "PSU — 500–3,000 (varies by year and company)",
    salary: "₹40,000–₹1,60,000 depending on PSU",
    officialLink: "https://gate2025.iitr.ac.in",
    examDate: "February",
    difficulty: "Very High",
  },
  {
    id: 14,
    name: "ONGC / BHEL / IOCL Direct Recruitment",
    category: "psu",
    brief: "Direct recruitment (Apprentice, Engineer, Officer) in top Maharatna PSUs without GATE for some posts.",
    eligibility: "B.Tech/MBA/CA depending on post. Age: 18–30.",
    vacancies: "100–5,000 depending on company and year",
    salary: "₹40,000–₹1,60,000 + perks",
    officialLink: "https://ongcindia.com/careers",
    examDate: "Varies by company",
    difficulty: "High",
  },
  {
    id: 15,
    name: "MPSC / BPSC / UPPSC (State PSC)",
    category: "state",
    brief: "State-level civil services exams for DSP, Tehsildar, BDO, SDO, and other Group A/B state government posts.",
    eligibility: "Graduate. Age limits vary by state (typically 21–35).",
    vacancies: "100–3,000 per state per year",
    salary: "₹25,000–₹1,00,000 depending on post and state",
    officialLink: "https://mpsc.gov.in",
    examDate: "Varies by state (check official state PSC website)",
    difficulty: "High",
  },
  {
    id: 16,
    name: "TNPSC (Tamil Nadu Public Service Commission)",
    category: "state",
    brief: "Recruitment for Group 1, 2, 4 posts in Tamil Nadu government — very popular in South India.",
    eligibility: "Graduate or 12th pass depending on group. Tamil Nadu domicile preferred.",
    vacancies: "2,000–10,000 per year across groups",
    salary: "₹15,700–₹67,000",
    officialLink: "https://www.tnpsc.gov.in",
    examDate: "Varies by group",
    difficulty: "Medium–High",
  },
];

const categories: { key: Category; label: string; icon: React.ElementType }[] = [
  { key: "all", label: "All Exams", icon: BookOpen },
  { key: "central", label: "Central Govt", icon: Shield },
  { key: "banking", label: "Banking", icon: Building2 },
  { key: "defence", label: "Defence", icon: Shield },
  { key: "railways", label: "Railways", icon: Building2 },
  { key: "psu", label: "PSU / GATE", icon: Building2 },
  { key: "state", label: "State Govt", icon: Users },
];

const difficultyColor: Record<string, string> = {
  "Extremely High": "bg-red-600",
  "Very High": "bg-red-500",
  "High": "bg-orange-500",
  "Medium": "bg-yellow-500",
  "Medium–High": "bg-orange-400",
};

export default function GovtJobsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = exams.filter(e => {
    const matchesCat = activeCategory === "all" || e.category === activeCategory;
    const matchesSearch = e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.brief.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <div className="pt-16 sm:pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">India Government Jobs 2025</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-3">
              Government Job Exams
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Comprehensive guide to India&apos;s major competitive exams — eligibility, vacancies, salary and official links for Central, Banking, Defence, Railways, PSU and State exams.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {[
              { label: "Exams Covered", value: "16+" },
              { label: "UPSC Aspirants / year", value: "10M+" },
              { label: "Govt Job Vacancies / yr", value: "5L+" },
              { label: "Avg Entry Salary", value: "₹25K–56K" },
            ].map((s) => (
              <Card key={s.label} className="border-border/40 text-center p-4">
                <p className="font-heading text-2xl font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </Card>
            ))}
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mb-4"
          >
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search exams..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </motion.div>

          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mb-6 flex flex-wrap gap-2"
          >
            {categories.map(({ key, label, icon: Icon }) => (
              <Button
                key={key}
                variant={activeCategory === key ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(key)}
                className="gap-1.5"
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </Button>
            ))}
          </motion.div>

          <p className="text-xs text-muted-foreground mb-4">{filtered.length} exam{filtered.length !== 1 ? "s" : ""} found</p>

          {/* Exam cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filtered.map((exam, i) => (
                <motion.div
                  key={exam.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Card className="border-border/50 hover:shadow-md transition-shadow h-full">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-sm font-semibold leading-snug">{exam.name}</CardTitle>
                        <Badge className={`${difficultyColor[exam.difficulty]} text-white text-xs shrink-0`}>
                          {exam.difficulty}
                        </Badge>
                      </div>
                      <CardDescription className="text-xs">{exam.brief}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 pt-0 text-xs">
                      <div className="space-y-1.5 bg-muted/40 rounded-md p-2.5">
                        <div><span className="font-medium">Eligibility: </span><span className="text-muted-foreground">{exam.eligibility}</span></div>
                        <div><span className="font-medium">Vacancies: </span><span className="text-muted-foreground">{exam.vacancies}</span></div>
                        <div><span className="font-medium">Exam Date: </span><span className="text-muted-foreground">{exam.examDate}</span></div>
                      </div>
                      <div className="flex justify-between items-center pt-1 border-t border-border/50">
                        <div>
                          <span className="text-muted-foreground">Salary: </span>
                          <span className="font-semibold text-green-500">{exam.salary}</span>
                        </div>
                        <a
                          href={exam.officialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-primary hover:underline"
                        >
                          Official <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">No exams found. Try a different search.</div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">Preparing for a government exam?</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/interview-prep">
                <Button size="lg" className="gap-2">
                  Practice Interview / GD
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/analyze">
                <Button variant="outline" size="lg" className="gap-2">
                  Optimize Your Resume
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
