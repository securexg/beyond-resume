"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

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
  }
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Career Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert guides tailored for the Indian job market and education system
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
                      src={index === 0 ? "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&h=200&q=80" :
                            index === 1 ? "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=400&h=200&q=80" :
                            index === 2 ? "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&h=200&q=80" :
                            index === 3 ? "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&h=200&q=80" :
                            index === 4 ? "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&h=200&q=80" :
                            "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&h=200&q=80"}
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
