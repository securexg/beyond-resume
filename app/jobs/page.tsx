"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  ArrowRight, 
  Building2, 
  ExternalLink,
  Filter,
  Menu,
  X,
} from "lucide-react";

const sampleJobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Google",
    location: "Bangalore, India",
    salary: "₹35-50 LPA",
    posted: "2h ago",
    source: "LinkedIn",
    sourceColor: "bg-blue-600",
    tags: ["React", "TypeScript", "Cloud"],
    link: "https://www.linkedin.com/jobs",
  },
  {
    id: 2,
    title: "Marketing Manager",
    company: "Unilever",
    location: "Mumbai, India",
    salary: "₹18-30 LPA",
    posted: "5h ago",
    source: "Indeed",
    sourceColor: "bg-purple-600",
    tags: ["Digital Marketing", "Brand Strategy", "Analytics"],
    link: "https://www.indeed.com",
  },
  {
    id: 3,
    title: "Financial Analyst",
    company: "HDFC Bank",
    location: "Delhi, India",
    salary: "₹15-25 LPA",
    posted: "1d ago",
    source: "Naukri",
    sourceColor: "bg-orange-600",
    tags: ["Financial Modeling", "Excel", "Risk Analysis"],
    link: "https://www.naukri.com",
  },
  {
    id: 4,
    title: "Medical Officer",
    company: "Apollo Hospitals",
    location: "Chennai, India",
    salary: "₹12-20 LPA",
    posted: "1d ago",
    source: "LinkedIn",
    sourceColor: "bg-blue-600",
    tags: ["MBBS", "Patient Care", "Medical Records"],
    link: "https://www.linkedin.com/jobs",
  },
  {
    id: 5,
    title: "Supply Chain Manager",
    company: "Reliance Industries",
    location: "Ahmedabad, India",
    salary: "₹20-35 LPA",
    posted: "2d ago",
    source: "Indeed",
    sourceColor: "bg-purple-600",
    tags: ["Logistics", "Inventory", "Vendor Management"],
    link: "https://www.indeed.com",
  },
  {
    id: 6,
    title: "Corporate Lawyer",
    company: "AZB Partners",
    location: "Mumbai, India",
    salary: "₹25-40 LPA",
    posted: "3h ago",
    source: "LinkedIn",
    sourceColor: "bg-blue-600",
    tags: ["Corporate Law", "Contracts", "Compliance"],
    link: "https://www.linkedin.com/jobs",
  },
  {
    id: 7,
    title: "Sales Executive",
    company: "Tata Motors",
    location: "Pune, India",
    salary: "₹10-18 LPA",
    posted: "1d ago",
    source: "Naukri",
    sourceColor: "bg-orange-600",
    tags: ["B2B Sales", "Client Relations", "Negotiation"],
    link: "https://www.naukri.com",
  },
  {
    id: 8,
    title: "High School Teacher",
    company: "Delhi Public School",
    location: "Delhi, India",
    salary: "₹8-15 LPA",
    posted: "2d ago",
    source: "LinkedIn",
    sourceColor: "bg-blue-600",
    tags: ["Teaching", "Curriculum", "Student Mentoring"],
    link: "https://www.linkedin.com/jobs",
  },
  {
    id: 9,
    title: "Quality Engineer",
    company: "L&T",
    location: "Chennai, India",
    salary: "₹12-22 LPA",
    posted: "4h ago",
    source: "Indeed",
    sourceColor: "bg-purple-600",
    tags: ["Quality Control", "Testing", "ISO Standards"],
    link: "https://www.indeed.com",
  },
  {
    id: 10,
    title: "UX Designer",
    company: "Microsoft",
    location: "Remote",
    salary: "₹20-35 LPA",
    posted: "1d ago",
    source: "Google Jobs",
    sourceColor: "bg-green-600",
    tags: ["Figma", "User Research", "Prototyping"],
    link: "https://www.google.com/about/careers",
  },
  {
    id: 11,
    title: "Product Manager",
    company: "Amazon",
    location: "Hyderabad, India",
    salary: "₹25-40 LPA",
    posted: "5h ago",
    source: "LinkedIn",
    sourceColor: "bg-blue-600",
    tags: ["Strategy", "Agile", "Analytics"],
    link: "https://www.linkedin.com/jobs",
  },
  {
    id: 12,
    title: "Nurse",
    company: "Fortis Healthcare",
    location: "Bangalore, India",
    salary: "₹6-12 LPA",
    posted: "6h ago",
    source: "Naukri",
    sourceColor: "bg-orange-600",
    tags: ["Patient Care", "Medical Assistance", "BLS"],
    link: "https://www.naukri.com",
  },
];

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredJobs = sampleJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSource = !selectedSource || job.source === selectedSource;
    return matchesSearch && matchesSource;
  });

  const sources = [...new Set(sampleJobs.map(job => job.source))];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="w-full bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-16 sm:h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image 
              src="/logo.png" 
              alt="CareerOS" 
              width={320} 
              height={80} 
              className="h-16 sm:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-2">
            <Link href="/trends">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">Market Insights</Button>
              </motion.div>
            </Link>
            <Link href="/analyze">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">Resume Analysis</Button>
              </motion.div>
            </Link>
            <Link href="/interview-prep">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">Interview Prep</Button>
              </motion.div>
            </Link>
            <Link href="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" className="gap-2 ml-2">
                  Home
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="sm:hidden border-b border-border/50 bg-background/95 backdrop-blur-xl"
            >
              <div className="px-4 py-4 space-y-2">
                <Link href="/trends" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">Market Insights</Button>
                </Link>
                <Link href="/analyze" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">Resume Analysis</Button>
                </Link>
                <Link href="/interview-prep" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">Interview Prep</Button>
                </Link>
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full gap-2">
                    Home
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="pt-16 sm:pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-2">
              Personalized Job Matches
            </h1>
            <p className="text-muted-foreground">
              Curated opportunities matched to your profile and interests
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-8"
          >
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&h=400&q=80"
                alt="Job search workspace"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 space-y-4"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search jobs by title or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedSource === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSource(null)}
              >
                All Sources
              </Button>
              {sources.map(source => (
                <Button
                  key={source}
                  variant={selectedSource === source ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSource(source)}
                >
                  {source}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Jobs Grid */}
          <div className="grid gap-4">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -3 }}
              >
                <Card className="hover:shadow-md transition-shadow border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-heading text-lg font-semibold">{job.title}</h3>
                          <Badge className={`${job.sourceColor} text-white text-xs`}>
                            {job.source}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {job.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm mb-3">
                          <div className="flex items-center gap-1 text-green-600 font-medium">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {job.posted}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {job.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0"
                      >
                        <Button size="sm" className="gap-2">
                          Apply
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">No jobs found matching your criteria</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
