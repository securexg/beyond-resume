"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articleImages: Record<string, string> = {
  "cracking-campus-placements": "/images/pexels/art-campus.jpeg",
  "building-first-resume": "/images/pexels/art-resume.jpeg",
  "mastering-dsa": "/images/pexels/art-coding.jpeg",
  "government-job-preparation": "/images/pexels/art-govtexam.jpeg",
  "linkedin-optimization": "/images/pexels/art-linkedin.jpeg",
  "salary-negotiation": "/images/pexels/art-salary.jpeg",
  "freelancing-career-guide": "/images/pexels/art-freelance.jpeg",
  "creative-careers": "/images/pexels/art-creative.jpeg",
  "mba-career-guide": "/images/pexels/art-mba.jpeg",
  "remote-work-guide": "/images/pexels/art-remote.jpeg",
  "entrepreneurship-mindset": "/images/pexels/art-entrepreneur.jpeg",
};

const articles = [
  {
    slug: "cracking-campus-placements",
    title: "Cracking Campus Placements",
    description: "Complete guide to ace campus interviews at top Indian companies like TCS, Infosys, Wipro, and startups.",
    category: "Campus",
    readTime: "8 min read",
    isInternal: true
  },
  {
    slug: "building-first-resume",
    title: "Building Your First Resume",
    description: "Step-by-step guide for freshers with no experience - how to highlight projects, skills, and achievements.",
    category: "Resume",
    readTime: "6 min read",
    isInternal: true
  },
  {
    slug: "mastering-dsa",
    title: "Mastering DSA for Indian Tech Giants",
    description: "Essential data structures and algorithms topics for FAANG and top Indian company interviews.",
    category: "Technical",
    readTime: "12 min read",
    isInternal: true
  },
  {
    slug: "government-job-preparation",
    title: "Government Job Preparation",
    description: "Complete roadmap for SSC, Banking, Railways, and UPSC exams with study strategies.",
    category: "Government",
    readTime: "10 min read",
    isInternal: true
  },
  {
    slug: "linkedin-optimization",
    title: "LinkedIn Profile Optimization",
    description: "How to create a LinkedIn profile that attracts recruiters from Indian and global companies.",
    category: "Personal Branding",
    readTime: "7 min read",
    isInternal: true
  },
  {
    slug: "salary-negotiation",
    title: "Salary Negotiation in India",
    description: "Tips for negotiating salary at Indian companies - understanding market rates and benefits.",
    category: "Career Growth",
    readTime: "5 min read",
    isInternal: true
  },
  {
    slug: "freelancing-career-guide",
    title: "Building a Freelancing Career in India",
    description: "How to start freelancing, find clients, set pricing, and build a sustainable independent career.",
    category: "Freelancing",
    readTime: "8 min read",
    isInternal: true
  },
  {
    slug: "creative-careers",
    title: "Creative Careers: Design, Content & Media",
    description: "Breaking into design, content writing, filmmaking, photography, and other creative fields.",
    category: "Creative",
    readTime: "7 min read",
    isInternal: true
  },
  {
    slug: "mba-career-guide",
    title: "MBA & Higher Education Career Guide",
    description: "Is an MBA worth it? When to pursue higher education and how it impacts your career trajectory.",
    category: "Education",
    readTime: "9 min read",
    isInternal: true
  },
  {
    slug: "remote-work-guide",
    title: "Remote Work & Global Opportunities",
    description: "How to land remote jobs with global companies, build a remote work routine, and grow your career remotely.",
    category: "Remote Work",
    readTime: "6 min read",
    isInternal: true
  },
  {
    slug: "entrepreneurship-mindset",
    title: "The Entrepreneurship Mindset",
    description: "Why entrepreneurship is a valid career path and what it takes — no tech degree required.",
    category: "Entrepreneurship",
    readTime: "8 min read",
    isInternal: true
  },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Career Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert guides for tech, non-tech, government, freelancing, entrepreneurship, and creative careers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Link href={`/insights/${article.slug}`}>
                <Card className="border-border/50 bg-card/80 h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden group">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={articleImages[article.slug] || "/images/pexels/art-campus.jpeg"}
                      alt={article.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <CardContent className="p-6 space-y-4 -mt-12 relative">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg leading-tight">{article.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{article.description}</p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
