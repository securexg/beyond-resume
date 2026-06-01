"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Briefcase,
  GraduationCap,
  FileText,
  ArrowRight,
  ExternalLink,
  MapPin,
  TrendingUp,
} from "lucide-react";

type Tab = "work" | "study" | "pr";

const countries = [
  {
    flag: "🇨🇦",
    name: "Canada",
    tagline: "Top choice for Indian immigrants — strong PR pathway",
    work: {
      permits: ["Express Entry (skilled workers)", "Provincial Nominee Program (PNP)", "Intra-company Transfer (ICT)"],
      avgSalary: "CAD 60,000–120,000",
      inDemand: ["Software Engineers", "Healthcare Workers", "Civil Engineers", "Accountants"],
      topCities: ["Toronto", "Vancouver", "Calgary", "Ottawa"],
    },
    study: {
      topUniversities: ["University of Toronto", "UBC", "McGill", "Waterloo"],
      avgTuition: "CAD 25,000–45,000/yr",
      popularPrograms: ["Computer Science", "Business Analytics", "Engineering", "Data Science"],
      postStudyWork: "PGWP up to 3 years",
    },
    pr: {
      pathways: ["Express Entry (Federal Skilled Worker)", "Canadian Experience Class", "PNP"],
      processingTime: "6–12 months via Express Entry",
      eligibility: "Work experience + language score (IELTS 7+ recommended)",
      officialLink: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    },
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    tagline: "High quality of life, vibrant tech and healthcare sectors",
    work: {
      permits: ["Skilled Independent Visa (189)", "Employer Sponsored (482)", "Working Holiday (417)"],
      avgSalary: "AUD 70,000–130,000",
      inDemand: ["Software Developers", "Nurses", "Civil Engineers", "Accountants"],
      topCities: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    },
    study: {
      topUniversities: ["University of Melbourne", "ANU", "UNSW", "Monash"],
      avgTuition: "AUD 30,000–50,000/yr",
      popularPrograms: ["IT & Computing", "Engineering", "Accounting", "Health Sciences"],
      postStudyWork: "2–4 years (485 visa) based on qualification level",
    },
    pr: {
      pathways: ["Skilled Independent (189)", "State Nomination (190)", "Employer Sponsored (186)"],
      processingTime: "8–18 months",
      eligibility: "Points test: age, skills, English, qualifications",
      officialLink: "https://immi.homeaffairs.gov.au",
    },
  },
  {
    flag: "🇩🇪",
    name: "Germany",
    tagline: "Europe's economic powerhouse — strong engineering demand",
    work: {
      permits: ["EU Blue Card (fast track for skilled)", "Job Seeker Visa", "Chancenkarte (Points-based from 2024)"],
      avgSalary: "€45,000–95,000",
      inDemand: ["Software Engineers", "Mechanical Engineers", "Doctors", "IT Architects"],
      topCities: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
    },
    study: {
      topUniversities: ["TU Munich", "LMU Munich", "Heidelberg", "KIT"],
      avgTuition: "€0–1,500/semester (public universities)",
      popularPrograms: ["Engineering", "Computer Science", "MBA", "Automotive Tech"],
      postStudyWork: "18 months job search visa after graduation",
    },
    pr: {
      pathways: ["Settlement Permit after 4 years work", "EU Blue Card holders — 21 months"],
      processingTime: "4–5 years work first, then settlement",
      eligibility: "Recognized degree + job offer + B1 German (or B2 for fast-track)",
      officialLink: "https://www.make-it-in-germany.com",
    },
  },
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    tagline: "Skilled Worker visa pathway with no points test",
    work: {
      permits: ["Skilled Worker Visa", "Graduate Visa (post-study)", "Global Talent Visa"],
      avgSalary: "£40,000–90,000",
      inDemand: ["Software Engineers", "Nurses", "Doctors", "Data Scientists"],
      topCities: ["London", "Manchester", "Edinburgh", "Birmingham"],
    },
    study: {
      topUniversities: ["Oxford", "Cambridge", "Imperial", "UCL", "Edinburgh"],
      avgTuition: "£15,000–35,000/yr",
      popularPrograms: ["Computer Science", "Finance", "Law", "Data Science", "MBA"],
      postStudyWork: "Graduate Visa — 2 years (3 years for PhD)",
    },
    pr: {
      pathways: ["Indefinite Leave to Remain (ILR) after 5 years continuous residence"],
      processingTime: "5 years of qualifying work visa",
      eligibility: "Continuous lawful residence + life in UK test + language",
      officialLink: "https://www.gov.uk/skilled-worker-visa",
    },
  },
  {
    flag: "🇸🇬",
    name: "Singapore",
    tagline: "Asia's financial hub — no language barrier, high salaries",
    work: {
      permits: ["Employment Pass (EP) — professionals", "S Pass — mid-skilled", "Tech.Pass"],
      avgSalary: "SGD 60,000–150,000",
      inDemand: ["Software Engineers", "Finance Professionals", "Risk Analysts", "Product Managers"],
      topCities: ["Singapore (city-state)"],
    },
    study: {
      topUniversities: ["NUS", "NTU", "SMU", "SUTD"],
      avgTuition: "SGD 30,000–55,000/yr",
      popularPrograms: ["Computer Science", "Business", "Engineering", "Finance"],
      postStudyWork: "Can apply for Employment Pass after graduation",
    },
    pr: {
      pathways: ["Permanent Resident via Employment Pass", "Global Investor Programme"],
      processingTime: "6–18 months after 2+ years on EP",
      eligibility: "Strong employer support, consistent employment, no criminal record",
      officialLink: "https://www.mom.gov.sg",
    },
  },
  {
    flag: "🇳🇿",
    name: "New Zealand",
    tagline: "Welcoming, safe, and growing IT and healthcare sectors",
    work: {
      permits: ["Skilled Migrant Category Resident Visa", "Accredited Employer Work Visa (AEWV)"],
      avgSalary: "NZD 60,000–110,000",
      inDemand: ["Software Engineers", "Nurses", "Construction Engineers", "Teachers"],
      topCities: ["Auckland", "Wellington", "Christchurch"],
    },
    study: {
      topUniversities: ["University of Auckland", "Victoria University", "Canterbury"],
      avgTuition: "NZD 25,000–40,000/yr",
      popularPrograms: ["IT", "Engineering", "Business", "Health Sciences"],
      postStudyWork: "Up to 3 years post-study work visa",
    },
    pr: {
      pathways: ["Skilled Migrant Category (points-based)", "Residence from Work"],
      processingTime: "12–24 months",
      eligibility: "Points test — age, skilled employment, qualifications, experience",
      officialLink: "https://www.immigration.govt.nz",
    },
  },
  {
    flag: "🇦🇪",
    name: "UAE / Dubai",
    tagline: "Tax-free salaries, fast setup, and thriving Indian community",
    work: {
      permits: ["Employment Residence Visa (sponsored by employer)", "Golden Visa (self-sponsored)"],
      avgSalary: "AED 100,000–300,000 (tax-free)",
      inDemand: ["Finance Professionals", "Engineers", "IT Managers", "Healthcare", "Hospitality"],
      topCities: ["Dubai", "Abu Dhabi", "Sharjah"],
    },
    study: {
      topUniversities: ["NYU Abu Dhabi", "Manipal Dubai", "University of Wollongong Dubai"],
      avgTuition: "AED 40,000–100,000/yr",
      popularPrograms: ["Business", "Engineering", "Finance", "Hospitality"],
      postStudyWork: "Graduate visa available post-completion",
    },
    pr: {
      pathways: ["Golden Visa (10 years) for skilled professionals, investors, doctors", "Long-Term Visa (5 years)"],
      processingTime: "1–3 months",
      eligibility: "Salary > AED 30,000/month OR exceptional talent OR investment",
      officialLink: "https://gdrfad.gov.ae/en",
    },
  },
  {
    flag: "🇺🇸",
    name: "United States",
    tagline: "World's largest job market — but long Green Card wait for Indians",
    work: {
      permits: ["H-1B Visa (lottery-based)", "L-1 Intra-company Transfer", "O-1 Extraordinary Ability"],
      avgSalary: "USD 90,000–200,000",
      inDemand: ["Software Engineers", "Data Scientists", "Doctors", "Finance Professionals"],
      topCities: ["San Francisco", "New York", "Seattle", "Austin", "Boston"],
    },
    study: {
      topUniversities: ["MIT", "Stanford", "Carnegie Mellon", "Georgia Tech", "Columbia"],
      avgTuition: "USD 40,000–70,000/yr",
      popularPrograms: ["CS / AI", "MBA", "Data Science", "Electrical Engineering"],
      postStudyWork: "OPT: 12 months (3 years for STEM graduates)",
    },
    pr: {
      pathways: ["EB-2 / EB-3 Employment-Based Green Card", "EB-1 for extraordinary ability"],
      processingTime: "⚠️ 50–100+ year backlog for Indians in EB-2/EB-3",
      eligibility: "PERM labor certification + employer sponsorship",
      officialLink: "https://travel.state.gov/content/travel/en/us-visas/immigrate.html",
    },
  },
];

const tabConfig: { key: Tab; label: string; icon: React.ElementType }[] = [
  { key: "work", label: "Work Visa", icon: Briefcase },
  { key: "study", label: "Study Abroad", icon: GraduationCap },
  { key: "pr", label: "PR / Visa Info", icon: FileText },
];

export default function GlobalPage() {
  const [activeTab, setActiveTab] = useState<Tab>("work");

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <div className="pt-16 sm:pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">For Indian Professionals</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-3">
              Global Opportunities
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Country-by-country guide covering Work Visas, Study options, and PR pathways — curated for Indians looking to work or study abroad.
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
              { label: "Countries Covered", value: "8" },
              { label: "Visa Pathways", value: "25+" },
              { label: "Avg Salary Range", value: "$60K–$150K" },
              { label: "Indian Diaspora Abroad", value: "32M+" },
            ].map((s) => (
              <Card key={s.label} className="border-border/40 text-center p-4">
                <p className="font-heading text-2xl font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </Card>
            ))}
          </motion.div>

          {/* Tab switcher */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mb-6"
          >
            <div className="inline-flex p-1 bg-muted rounded-lg">
              {tabConfig.map(({ key, label, icon: Icon }) => (
                <Button
                  key={key}
                  variant={activeTab === key ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab(key)}
                  className="gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Country cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {countries.map((c, i) => {
                const info = c[activeTab];
                return (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Card className="border-border/50 hover:shadow-md transition-shadow h-full">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl">{c.flag}</span>
                          <div>
                            <CardTitle className="font-heading text-base">{c.name}</CardTitle>
                            <CardDescription className="text-xs">{c.tagline}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3 pt-0 text-sm">
                        {activeTab === "work" && (
                          <>
                            <div>
                              <p className="text-xs font-medium text-muted-foreground mb-1">Visa Permits</p>
                              <ul className="space-y-0.5">
                                {(info as typeof c.work).permits.map(p => (
                                  <li key={p} className="text-xs flex items-start gap-1">
                                    <span className="text-primary mt-0.5">•</span>{p}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-muted-foreground mb-1">In-Demand Roles</p>
                              <div className="flex flex-wrap gap-1">
                                {(info as typeof c.work).inDemand.map(r => (
                                  <Badge key={r} variant="secondary" className="text-xs py-0">{r}</Badge>
                                ))}
                              </div>
                            </div>
                            <div className="flex justify-between pt-2 border-t border-border/50">
                              <span className="text-xs text-muted-foreground">Avg Salary</span>
                              <span className="text-xs font-semibold text-green-500">{(info as typeof c.work).avgSalary}</span>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-muted-foreground mb-1">Top Cities</p>
                              <p className="text-xs">{(info as typeof c.work).topCities.join(", ")}</p>
                            </div>
                          </>
                        )}
                        {activeTab === "study" && (
                          <>
                            <div>
                              <p className="text-xs font-medium text-muted-foreground mb-1">Top Universities</p>
                              <div className="flex flex-wrap gap-1">
                                {(info as typeof c.study).topUniversities.map(u => (
                                  <Badge key={u} variant="secondary" className="text-xs py-0">{u}</Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-muted-foreground mb-1">Popular Programs</p>
                              <p className="text-xs">{(info as typeof c.study).popularPrograms.join(", ")}</p>
                            </div>
                            <div className="flex justify-between pt-2 border-t border-border/50">
                              <span className="text-xs text-muted-foreground">Avg Tuition</span>
                              <span className="text-xs font-semibold text-primary">{(info as typeof c.study).avgTuition}</span>
                            </div>
                            <div className="bg-muted/50 rounded-md px-2 py-1.5">
                              <p className="text-xs"><span className="font-medium">Post-Study Work:</span> {(info as typeof c.study).postStudyWork}</p>
                            </div>
                          </>
                        )}
                        {activeTab === "pr" && (
                          <>
                            <div>
                              <p className="text-xs font-medium text-muted-foreground mb-1">PR Pathways</p>
                              <ul className="space-y-0.5">
                                {(info as typeof c.pr).pathways.map(p => (
                                  <li key={p} className="text-xs flex items-start gap-1">
                                    <span className="text-primary mt-0.5">•</span>{p}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-muted/50 rounded-md px-2 py-1.5 space-y-1">
                              <p className="text-xs"><span className="font-medium">Timeline:</span> {(info as typeof c.pr).processingTime}</p>
                              <p className="text-xs"><span className="font-medium">Eligibility:</span> {(info as typeof c.pr).eligibility}</p>
                            </div>
                            <a
                              href={(info as typeof c.pr).officialLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-primary hover:underline"
                            >
                              <ExternalLink className="w-3 h-3" />
                              Official Immigration Website
                            </a>
                          </>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">Preparing for your global move?</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/analyze">
                <Button size="lg" className="gap-2">
                  Optimize Your Resume
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/career-quiz">
                <Button variant="outline" size="lg" className="gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Find Your Career Path
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
