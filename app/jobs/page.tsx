"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Search, 
  MapPin, 
  DollarSign, 
  Clock, 
  Building2, 
  ExternalLink,
  Filter
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
    title: "Product Manager",
    company: "Amazon",
    location: "Hyderabad, India",
    salary: "₹25-40 LPA",
    posted: "5h ago",
    source: "Indeed",
    sourceColor: "bg-purple-600",
    tags: ["Strategy", "Agile", "Analytics"],
    link: "https://www.indeed.com",
  },
  {
    id: 3,
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
    id: 4,
    title: "Data Scientist",
    company: "Flipkart",
    location: "Bangalore, India",
    salary: "₹30-45 LPA",
    posted: "1d ago",
    source: "Naukri",
    sourceColor: "bg-orange-600",
    tags: ["Python", "ML", "SQL"],
    link: "https://www.naukri.com",
  },
  {
    id: 5,
    title: "HR Business Partner",
    company: "TCS",
    location: "Mumbai, India",
    salary: "₹15-25 LPA",
    posted: "2d ago",
    source: "LinkedIn",
    sourceColor: "bg-blue-600",
    tags: ["People Management", "Recruitment", "HR Policies"],
    link: "https://www.linkedin.com/jobs",
  },
  {
    id: 6,
    title: "Marketing Manager",
    company: "Zomato",
    location: "Gurugram, India",
    salary: "₹18-30 LPA",
    posted: "2d ago",
    source: "Indeed",
    sourceColor: "bg-purple-600",
    tags: ["Digital Marketing", "Brand Strategy", "Analytics"],
    link: "https://www.indeed.com",
  },
];

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSource, setSelectedSource] = useState<string | null>(null);

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
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="CareerOS" width={44} height={44} className="rounded-lg" />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/trends">
              <Button variant="ghost" size="sm">Market Trends</Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm">Home</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4">
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

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 space-y-4"
          >
            <div className="flex gap-4">
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
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
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {job.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm mb-3">
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
