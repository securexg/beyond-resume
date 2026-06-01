"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  MapPin, 
  DollarSign, 
  Clock,
  Building2,
  ExternalLink,
} from "lucide-react";

const allJobs = [
  { id: 1, type: "tech", title: "AI/ML Engineer", company: "Google DeepMind India", location: "Bangalore", salary: "₹45-90 LPA", posted: "3h ago", source: "LinkedIn", sourceColor: "bg-blue-600", tags: ["PyTorch", "LLMs", "Python", "MLOps"], link: "https://www.linkedin.com/jobs/search/?keywords=AI+ML+Engineer+India" },
  { id: 2, type: "tech", title: "Senior SDE-II", company: "Amazon (Hyderabad)", location: "Hyderabad", salary: "₹40-70 LPA", posted: "1h ago", source: "Naukri", sourceColor: "bg-orange-600", tags: ["Java", "AWS", "Microservices", "System Design"], link: "https://www.naukri.com/amazon-jobs" },
  { id: 3, type: "tech", title: "DevOps / Platform Engineer", company: "Razorpay", location: "Bangalore", salary: "₹30-55 LPA", posted: "5h ago", source: "Wellfound", sourceColor: "bg-green-600", tags: ["Kubernetes", "Terraform", "AWS", "CI/CD"], link: "https://wellfound.com/company/razorpay/jobs" },
  { id: 4, type: "tech", title: "Data Engineer", company: "Walmart Global Tech", location: "Bangalore", salary: "₹28-50 LPA", posted: "2h ago", source: "LinkedIn", sourceColor: "bg-blue-600", tags: ["Spark", "dbt", "Snowflake", "Airflow"], link: "https://www.linkedin.com/jobs/search/?keywords=Data+Engineer+Walmart+India" },
  { id: 5, type: "tech", title: "Product Manager", company: "CRED", location: "Bangalore", salary: "₹30-60 LPA", posted: "4h ago", source: "Wellfound", sourceColor: "bg-green-600", tags: ["Product Strategy", "SQL", "A/B Testing", "Fintech"], link: "https://wellfound.com/company/cred-1/jobs" },
  { id: 6, type: "tech", title: "Cybersecurity Analyst", company: "Palo Alto Networks India", location: "Hyderabad", salary: "₹25-50 LPA", posted: "1d ago", source: "LinkedIn", sourceColor: "bg-blue-600", tags: ["SIEM", "Threat Hunting", "CISSP", "Zero Trust"], link: "https://www.linkedin.com/jobs/search/?keywords=Cybersecurity+Analyst+India" },
  { id: 7, type: "tech", title: "Full Stack Engineer", company: "Zepto", location: "Mumbai", salary: "₹25-45 LPA", posted: "6h ago", source: "Naukri", sourceColor: "bg-orange-600", tags: ["React", "Node.js", "TypeScript", "PostgreSQL"], link: "https://www.naukri.com/zepto-jobs" },
  { id: 8, type: "tech", title: "UX/Product Designer", company: "PhonePe", location: "Bangalore", salary: "₹20-40 LPA", posted: "8h ago", source: "Internshala", sourceColor: "bg-teal-600", tags: ["Figma", "User Research", "Design Systems", "UX"], link: "https://internshala.com/jobs/ux-design" },
  { id: 9, type: "non-tech", title: "Performance Marketing Manager", company: "Mamaearth", location: "Gurugram", salary: "₹18-32 LPA", posted: "2h ago", source: "Naukri", sourceColor: "bg-orange-600", tags: ["Meta Ads", "Google Ads", "CRO", "D2C"], link: "https://www.naukri.com/mamaearth-jobs" },
  { id: 10, type: "non-tech", title: "B2B Sales Manager", company: "Freshworks", location: "Chennai (Remote OK)", salary: "₹20-40 LPA", posted: "3h ago", source: "LinkedIn", sourceColor: "bg-blue-600", tags: ["SaaS Sales", "HubSpot", "Enterprise", "ARR"], link: "https://www.linkedin.com/jobs/search/?keywords=B2B+Sales+Freshworks" },
  { id: 11, type: "non-tech", title: "HR Business Partner", company: "Genpact", location: "Noida", salary: "₹12-22 LPA", posted: "1d ago", source: "Naukri", sourceColor: "bg-orange-600", tags: ["HRBP", "Darwinbox", "Talent Mgmt", "L&D"], link: "https://www.naukri.com/genpact-jobs" },
  { id: 12, type: "non-tech", title: "FP&A Analyst", company: "Groww", location: "Bangalore", salary: "₹18-35 LPA", posted: "5h ago", source: "LinkedIn", sourceColor: "bg-blue-600", tags: ["Financial Modeling", "Excel", "IFRS", "Fintech"], link: "https://www.linkedin.com/jobs/search/?keywords=FP%26A+Analyst+Groww" },
  { id: 13, type: "non-tech", title: "Operations Lead — Quick Commerce", company: "Blinkit (Zomato)", location: "Delhi NCR", salary: "₹15-28 LPA", posted: "4h ago", source: "Wellfound", sourceColor: "bg-green-600", tags: ["Ops", "P&L", "Last Mile", "Logistics"], link: "https://wellfound.com/company/blinkit/jobs" },
  { id: 14, type: "non-tech", title: "Corporate Lawyer", company: "AZB & Partners", location: "Mumbai", salary: "₹28-50 LPA", posted: "1d ago", source: "LinkedIn", sourceColor: "bg-blue-600", tags: ["M&A", "Contract Drafting", "SEBI", "Corporate Law"], link: "https://www.linkedin.com/jobs/search/?keywords=Corporate+Lawyer+Mumbai" },
  { id: 15, type: "non-tech", title: "Content Strategist", company: "Hotstar (Disney+)", location: "Mumbai (Hybrid)", salary: "₹15-28 LPA", posted: "7h ago", source: "Naukri", sourceColor: "bg-orange-600", tags: ["Content Strategy", "SEO", "OTT", "Copywriting"], link: "https://www.naukri.com/disney-hotstar-jobs" },
  { id: 16, type: "non-tech", title: "Healthcare Operations Manager", company: "Apollo Hospitals", location: "Hyderabad", salary: "₹12-22 LPA", posted: "2d ago", source: "LinkedIn", sourceColor: "bg-blue-600", tags: ["Hospital Ops", "NABH", "Patient Experience", "Healthcare"], link: "https://www.linkedin.com/jobs/search/?keywords=Healthcare+Operations+Apollo" },
];

const sourceLinks: Record<string, string> = {
  LinkedIn: "https://www.linkedin.com/jobs",
  Naukri: "https://www.naukri.com",
  Wellfound: "https://wellfound.com/jobs",
  Internshala: "https://internshala.com/jobs",
};

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [jobType, setJobType] = useState<"all" | "tech" | "non-tech">("all");

  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = jobType === "all" || job.type === jobType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <div className="pt-16 sm:pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-2">
              Job Listings — India 2025
            </h1>
            <p className="text-muted-foreground">
              Current openings across Tech and Non-Tech sectors. Links go directly to official job boards.
            </p>
          </motion.div>

          {/* Job board links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {Object.entries(sourceLinks).map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer">
                <Badge variant="outline" className="cursor-pointer hover:bg-accent gap-1 py-1 px-3">
                  <ExternalLink className="w-3 h-3" />
                  {name}
                </Badge>
              </a>
            ))}
          </motion.div>

          {/* Search + Type Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 space-y-3"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by role, company, or skill..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="inline-flex p-1 bg-muted rounded-lg h-fit">
                {(["all", "tech", "non-tech"] as const).map((t) => (
                  <Button
                    key={t}
                    variant={jobType === t ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setJobType(t)}
                    className="capitalize"
                  >
                    {t === "all" ? "All Jobs" : t === "tech" ? "Tech" : "Non-Tech"}
                  </Button>
                ))}
              </div>
            </div>
            <p className="text-xs text-muted-foreground">{filteredJobs.length} jobs found</p>
          </motion.div>

          {/* Jobs Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={jobType + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-4"
            >
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                >
                  <Card className="hover:shadow-md transition-shadow border-border/50">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <h3 className="font-heading text-base font-semibold">{job.title}</h3>
                            <Badge className={`${job.sourceColor} text-white text-xs`}>
                              {job.source}
                            </Badge>
                            <Badge variant="outline" className={`text-xs ${job.type === "tech" ? "border-blue-400 text-blue-400" : "border-green-400 text-green-400"}`}>
                              {job.type === "tech" ? "Tech" : "Non-Tech"}
                            </Badge>
                          </div>

                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-2">
                            <div className="flex items-center gap-1">
                              <Building2 className="w-3.5 h-3.5" />
                              {job.company}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1 text-green-500 font-semibold">
                              <DollarSign className="w-3.5 h-3.5" />
                              {job.salary}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {job.posted}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1.5">
                            {job.tags.map(tag => (
                              <Badge key={tag} variant="secondary" className="text-xs py-0">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <a href={job.link} target="_blank" rel="noopener noreferrer" className="shrink-0">
                          <Button size="sm" className="gap-1.5">
                            Apply
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No jobs found. Try a different search or filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
