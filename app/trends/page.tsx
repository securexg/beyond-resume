"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  Globe, 
  MapPin, 
  ArrowUp,
  ArrowRight,
} from "lucide-react";

const techTrends = [
  {
    category: "Artificial Intelligence & ML",
    growth: "+68%",
    status: "hot",
    description: "Generative AI, LLMs, MLOps driving massive hiring across startups and MNCs",
    topRoles: ["ML Engineer", "AI/LLM Engineer", "Data Scientist", "Prompt Engineer"],
    avgSalary: "₹20-80 LPA",
    topCompanies: ["Google", "Microsoft", "Flipkart AI", "Sarvam AI", "Krutrim"],
    skillsInDemand: ["Python", "PyTorch", "LangChain", "AWS SageMaker"],
  },
  {
    category: "Software Development",
    growth: "+42%",
    status: "high",
    description: "Full-stack and backend roles remain the backbone of India's tech economy",
    topRoles: ["Software Engineer", "Backend Dev", "Full Stack Dev", "DevOps Engineer"],
    avgSalary: "₹12-55 LPA",
    topCompanies: ["Amazon", "Infosys", "TCS", "Razorpay", "Zepto"],
    skillsInDemand: ["React", "Node.js", "Go", "Kubernetes", "TypeScript"],
  },
  {
    category: "Cloud & DevOps",
    growth: "+55%",
    status: "hot",
    description: "Cloud migration and infrastructure-as-code boom across enterprise India",
    topRoles: ["Cloud Architect", "SRE", "DevOps Engineer", "Platform Engineer"],
    avgSalary: "₹18-70 LPA",
    topCompanies: ["AWS India", "Azure", "Wipro Cloud", "Accenture", "HCL"],
    skillsInDemand: ["AWS", "Terraform", "Docker", "Jenkins", "GCP"],
  },
  {
    category: "Cybersecurity",
    growth: "+60%",
    status: "hot",
    description: "India's digital boom creating serious demand for security professionals",
    topRoles: ["Security Analyst", "Ethical Hacker", "SOC Engineer", "Cloud Security"],
    avgSalary: "₹15-65 LPA",
    topCompanies: ["Palo Alto", "IBM Security", "KPMG", "Deloitte", "TCS CISO"],
    skillsInDemand: ["SIEM", "Penetration Testing", "CISSP", "Zero Trust"],
  },
  {
    category: "Data Engineering & Analytics",
    growth: "+50%",
    status: "hot",
    description: "Every Indian business now needs data pipelines and dashboards",
    topRoles: ["Data Engineer", "Analytics Engineer", "BI Developer", "Data Analyst"],
    avgSalary: "₹14-55 LPA",
    topCompanies: ["Walmart Global Tech", "PhonePe", "Swiggy", "Meesho", "Juspay"],
    skillsInDemand: ["Spark", "dbt", "Snowflake", "Airflow", "Power BI"],
  },
  {
    category: "Product Management",
    growth: "+38%",
    status: "high",
    description: "India's startup boom making PMs one of the most in-demand roles",
    topRoles: ["Product Manager", "APM", "Senior PM", "Product Analyst"],
    avgSalary: "₹18-70 LPA",
    topCompanies: ["Zomato", "CRED", "Groww", "Nykaa", "Ola"],
    skillsInDemand: ["Product Strategy", "SQL", "A/B Testing", "Figma"],
  },
  {
    category: "UI/UX Design",
    growth: "+35%",
    status: "high",
    description: "Design-led companies creating demand for product designers",
    topRoles: ["UI Designer", "UX Researcher", "Product Designer", "Design Lead"],
    avgSalary: "₹10-40 LPA",
    topCompanies: ["Freshworks", "CRED", "Slice", "Plum", "Razorpay"],
    skillsInDemand: ["Figma", "Prototyping", "User Research", "Design Systems"],
  },
  {
    category: "Blockchain & Web3",
    growth: "+30%",
    status: "medium",
    description: "Niche but high-paying domain with global remote opportunities",
    topRoles: ["Solidity Dev", "Smart Contract Auditor", "Web3 Product Manager"],
    avgSalary: "₹20-80 LPA",
    topCompanies: ["CoinDCX", "WazirX", "Mudrex", "Polygon", "Remote global"],
    skillsInDemand: ["Solidity", "Rust", "Ethereum", "DeFi protocols"],
  },
];

const nonTechTrends = [
  {
    category: "Digital Marketing",
    growth: "+48%",
    status: "hot",
    description: "Performance marketing, SEO, and content are booming across D2C brands",
    topRoles: ["Performance Marketer", "SEO Specialist", "Content Strategist", "Growth Manager"],
    avgSalary: "₹8-35 LPA",
    topCompanies: ["Mamaearth", "Boat", "Lenskart", "Nykaa", "Urban Company"],
    skillsInDemand: ["Meta Ads", "Google Ads", "SEO", "Analytics", "CRM tools"],
  },
  {
    category: "Sales & Business Development",
    growth: "+45%",
    status: "hot",
    description: "B2B SaaS and fintech creating high-paying sales roles",
    topRoles: ["B2B Sales Manager", "Account Executive", "SDR", "Partnerships"],
    avgSalary: "₹10-45 LPA",
    topCompanies: ["Zoho", "Freshworks", "BrowserStack", "Chargebee", "LeadSquared"],
    skillsInDemand: ["HubSpot", "Salesforce", "Cold Outreach", "Enterprise Sales"],
  },
  {
    category: "Human Resources",
    growth: "+32%",
    status: "high",
    description: "HR Business Partners and talent acquisition in high demand",
    topRoles: ["HRBP", "Talent Acquisition", "L&D Manager", "Compensation Analyst"],
    avgSalary: "₹8-30 LPA",
    topCompanies: ["Byju's HR", "Infosys BPO", "Genpact", "Wipro HR", "Accenture"],
    skillsInDemand: ["Workday", "Darwinbox", "Talent Analytics", "HR Strategy"],
  },
  {
    category: "Finance & Accounting",
    growth: "+36%",
    status: "high",
    description: "CFO offices and fintech expanding FP&A and treasury teams",
    topRoles: ["FP&A Analyst", "CA", "Finance Manager", "Investment Analyst"],
    avgSalary: "₹12-55 LPA",
    topCompanies: ["HDFC Bank", "Kotak", "Angel One", "Zerodha", "Groww"],
    skillsInDemand: ["Excel", "SAP", "Tally", "IFRS", "Financial Modeling"],
  },
  {
    category: "Operations & Supply Chain",
    growth: "+38%",
    status: "high",
    description: "Quick commerce and logistics creating ops roles across India",
    topRoles: ["Operations Manager", "Supply Chain Analyst", "Category Manager", "Warehouse Lead"],
    avgSalary: "₹10-40 LPA",
    topCompanies: ["Blinkit", "Swiggy Instamart", "Delhivery", "Shadowfax", "Flipkart"],
    skillsInDemand: ["ERP", "Six Sigma", "Inventory Management", "Lean Ops"],
  },
  {
    category: "Healthcare & Allied",
    growth: "+40%",
    status: "high",
    description: "Hospital chains and healthtech startups hiring across India",
    topRoles: ["Healthcare Admin", "Medical Coder", "Health Data Analyst", "Hospital Manager"],
    avgSalary: "₹8-35 LPA",
    topCompanies: ["Apollo", "Fortis", "Practo", "Healthifyme", "Mfine"],
    skillsInDemand: ["Medical Coding", "NABH standards", "Healthcare Analytics"],
  },
  {
    category: "Legal & Compliance",
    growth: "+30%",
    status: "medium",
    description: "Corporate law, SEBI compliance and IP law in demand",
    topRoles: ["Corporate Lawyer", "Compliance Officer", "Legal Counsel", "IP Attorney"],
    avgSalary: "₹15-60 LPA",
    topCompanies: ["Cyril Amarchand", "AZB & Partners", "Khaitan & Co", "LIC Legal"],
    skillsInDemand: ["Contract Drafting", "SEBI Regulations", "IP Law", "Due Diligence"],
  },
  {
    category: "Media & Content",
    growth: "+52%",
    status: "hot",
    description: "OTT, digital media and brand content exploding in India",
    topRoles: ["Content Writer", "Video Editor", "Social Media Manager", "Journalist"],
    avgSalary: "₹6-30 LPA",
    topCompanies: ["Netflix India", "Hotstar", "The Wire", "Times Internet", "Inshorts"],
    skillsInDemand: ["Video Editing", "Adobe Suite", "Copywriting", "Social Strategy"],
  },
];

const statusColor: Record<string, string> = {
  hot: "bg-red-500",
  high: "bg-green-500",
  medium: "bg-yellow-500",
};

const statusLabel: Record<string, string> = {
  hot: "🔥 Hot",
  high: "High Demand",
  medium: "Growing",
};

function TrendCard({ trend, index }: { trend: typeof techTrends[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
    >
      <Card className="border-border/50 hover:shadow-md transition-shadow h-full">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="font-heading text-base">{trend.category}</CardTitle>
            <Badge className={`${statusColor[trend.status]} text-white shrink-0 text-xs`}>
              {statusLabel[trend.status]}
            </Badge>
          </div>
          <CardDescription className="text-xs">{trend.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 pt-0">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">YoY Growth</span>
            <div className="flex items-center gap-1 text-green-500 font-semibold text-sm">
              <ArrowUp className="w-3 h-3" />
              {trend.growth}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium mb-1.5 text-muted-foreground">Top Roles</p>
            <div className="flex flex-wrap gap-1.5">
              {trend.topRoles.map(role => (
                <Badge key={role} variant="secondary" className="text-xs py-0">
                  {role}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium mb-1.5 text-muted-foreground">Top Companies Hiring</p>
            <div className="flex flex-wrap gap-1.5">
              {trend.topCompanies.map(c => (
                <span key={c} className="text-xs bg-muted px-2 py-0.5 rounded-full">{c}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium mb-1.5 text-muted-foreground">Skills in Demand</p>
            <div className="flex flex-wrap gap-1.5">
              {trend.skillsInDemand.map(s => (
                <span key={s} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{s}</span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border/50">
            <span className="text-xs text-muted-foreground">Avg Salary (India)</span>
            <span className="text-green-500 font-semibold text-sm">{trend.avgSalary}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function TrendsPage() {
  const [sector, setSector] = useState<"tech" | "nontech">("tech");

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <div className="pt-16 sm:pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">India Market Insights 2025</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-2">
              Job Market Trends
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Live sector-by-sector breakdown of India&apos;s job market — salaries, top hirers, and skills in demand for Tech and Non-Tech careers.
            </p>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {[
              { label: "Active Openings", value: "2.4M+" },
              { label: "Avg Salary Growth", value: "+18% YoY" },
              { label: "Remote Jobs", value: "34%" },
              { label: "Top Hiring City", value: "Bangalore" },
            ].map((stat) => (
              <Card key={stat.label} className="border-border/40 bg-card/60 text-center p-4">
                <p className="font-heading text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </Card>
            ))}
          </motion.div>

          {/* Tech / Non-Tech tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-6"
          >
            <div className="inline-flex p-1 bg-muted rounded-lg">
              <Button
                variant={sector === "tech" ? "default" : "ghost"}
                size="sm"
                onClick={() => setSector("tech")}
                className="gap-2"
              >
                <TrendingUp className="w-4 h-4" />
                Tech Sector
              </Button>
              <Button
                variant={sector === "nontech" ? "default" : "ghost"}
                size="sm"
                onClick={() => setSector("nontech")}
                className="gap-2"
              >
                <Globe className="w-4 h-4" />
                Non-Tech Sector
              </Button>
            </div>
          </motion.div>

          {/* Overview banner */}
          <motion.div
            key={sector}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">
                    {sector === "tech"
                      ? "Tech Sector — India Q1 2025"
                      : "Non-Tech Sector — India Q1 2025"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {sector === "tech"
                      ? "AI/ML, Cloud and Cybersecurity leading growth. India added 320,000 tech jobs in Q4 2024 alone."
                      : "Digital Marketing, Sales & Ops booming. Non-tech roles now account for 58% of total Indian job postings."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cards grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={sector}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {(sector === "tech" ? techTrends : nonTechTrends).map((trend, index) => (
                <TrendCard key={trend.category} trend={trend} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">Ready to apply these insights?</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/jobs">
                <Button size="lg" className="gap-2">
                  Browse Job Listings
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/global">
                <Button variant="outline" size="lg" className="gap-2">
                  <Globe className="w-4 h-4" />
                  Global Opportunities
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
