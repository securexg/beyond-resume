"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Sparkles, Newspaper, TrendingUp, AlertCircle } from "lucide-react";

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  source: string;
  snippet: string;
  category: string;
}

const sampleNews: NewsItem[] = [
  {
    title: "AI Revolution: How Machine Learning is Reshaping Entry-Level Jobs in 2024",
    link: "https://www.google.com/search?q=AI+impact+on+entry+level+jobs+2024",
    pubDate: "2024-12-28",
    source: "Tech Career Daily",
    snippet: "New graduates are finding that AI literacy is becoming as important as traditional technical skills. Companies are prioritizing candidates who can work alongside AI tools.",
    category: "AI Impact"
  },
  {
    title: "Top 10 Skills Freshers Need to Land Their First Tech Job in India",
    link: "https://www.google.com/search?q=top+skills+for+freshers+india+2024",
    pubDate: "2024-12-26",
    source: "India Careers",
    snippet: "From Python to prompt engineering, these skills are making Indian freshers more employable. Cloud computing and data analytics continue to dominate employer wish lists.",
    category: "Skills"
  },
  {
    title: "Remote Work vs Office: What Fresh Graduates Prefer in 2024",
    link: "https://www.google.com/search?q=remote+work+fresh+graduates+2024+trends",
    pubDate: "2024-12-24",
    source: "Future of Work",
    snippet: "A new survey reveals that 68% of fresh graduates prefer hybrid work models. Companies are adapting their recruitment strategies to attract young talent.",
    category: "Work Culture"
  },
  {
    title: "Entry-Level Salaries in Tech: 2024 Report Shows Promising Growth",
    link: "https://www.google.com/search?q=entry+level+tech+salaries+2024+india",
    pubDate: "2024-12-22",
    source: "Salary Insights",
    snippet: "Average starting salaries for software engineers in India have grown by 15% this year. AI/ML roles command the highest premiums for freshers.",
    category: "Salary"
  },
  {
    title: "How to Beat ATS Systems: Resume Tips from Hiring Managers",
    link: "https://www.google.com/search?q=ATS+resume+tips+hiring+managers+2024",
    pubDate: "2024-12-20",
    source: "Hiring Insider",
    snippet: "Recruiters reveal what makes a resume pass ATS filters. Keywords, formatting, and clear section headers make all the difference.",
    category: "Resume Tips"
  },
  {
    title: "Gen Z in the Workplace: What Employers Need to Know",
    link: "https://www.google.com/search?q=Gen+Z+workplace+expectations+2024",
    pubDate: "2024-12-18",
    source: "Workforce Trends",
    snippet: "The newest generation of workers prioritizes growth opportunities and work-life balance over traditional job security measures.",
    category: "Career Trends"
  }
];

export default function NewsPage() {
  const [news] = useState<NewsItem[]>(sampleNews);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(news.map(item => item.category))];
  
  const filteredNews = selectedCategory 
    ? news.filter(item => item.category === selectedCategory)
    : news;

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-bold text-xl">CareerCraft</span>
            </Link>
          </div>
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Newspaper className="w-4 h-4" />
              Career News & Insights
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
              Stay Ahead in Your Career Journey
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Latest news on AI impact, hiring trends, and career opportunities for students and freshers
            </p>
          </motion.div>

          {/* Alert Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <Card className="border-amber-500/20 bg-amber-500/5">
              <CardContent className="p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">AI is Changing How Companies Hire</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    76% of companies now use AI in their hiring process. Learn how to optimize your resume for AI screening systems.
                  </p>
                  <Link href="/analyze">
                    <Button variant="link" size="sm" className="p-0 h-auto mt-1">
                      Analyze your resume →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-8 justify-center"
          >
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All News
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* News Grid */}
          <div className="grid gap-4">
            {filteredNews.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-md transition-shadow border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{item.category}</Badge>
                          <span className="text-xs text-muted-foreground">{item.source}</span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{item.pubDate}</span>
                        </div>
                        <h3 className="font-heading text-lg font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.snippet}
                        </p>
                      </div>
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-shrink-0"
                      >
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Trending Topics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <CardTitle className="font-heading">Trending Career Topics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["AI in Hiring", "Remote Work", "Entry Level Jobs", "Resume Tips", "Interview Prep", "Skill Development", "LinkedIn Optimization", "Salary Negotiation"].map(topic => (
                    <a
                      key={topic}
                      href={`https://www.google.com/search?q=${encodeURIComponent(topic + " 2024")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">
                        {topic}
                      </Badge>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Ready to apply what you&apos;ve learned?
            </p>
            <Link href="/builder">
              <Button size="lg">
                Build Your Resume Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
