"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Cpu, Globe, Briefcase, Building2, ArrowRight, Link as LinkIcon, TrendingUp, Search, DollarSign } from "lucide-react";

const segments = [
  { name: "Technology", icon: Cpu, color: "bg-blue-500/10 text-blue-500" },
  { name: "Management", icon: Building2, color: "bg-purple-500/10 text-purple-500" },
  { name: "Design", icon: Briefcase, color: "bg-pink-500/10 text-pink-500" },
  { name: "HR", icon: Globe, color: "bg-green-500/10 text-green-500" },
  { name: "Marketing", icon: TrendingUp, color: "bg-orange-500/10 text-orange-500" },
  { name: "Finance", icon: DollarSign, color: "bg-yellow-500/10 text-yellow-500" },
];

const jobSources = [
  { name: "LinkedIn", icon: LinkIcon, color: "bg-blue-600" },
  { name: "Google Jobs", icon: Search, color: "bg-green-600" },
  { name: "Indeed", icon: Briefcase, color: "bg-purple-600" },
  { name: "Naukri", icon: Globe, color: "bg-orange-600" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-heading font-bold text-xl">CareerOS</span>
              <p className="text-xs text-muted-foreground">Your Career Operating System</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/jobs">
              <Button variant="ghost" size="sm">Job Listings</Button>
            </Link>
            <Link href="/trends">
              <Button variant="ghost" size="sm">Market Trends</Button>
            </Link>
            <Link href="/onboarding">
              <Button size="sm" className="gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                <Globe className="w-4 h-4" />
                India & Global Market Insights
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                Your Career
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Operating System
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg"
              >
                Comprehensive career platform with real-time job listings, market trends, and AI-powered guidance across Technology, Management, Design, HR, and more.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/onboarding">
                  <Button size="lg" className="text-lg px-8 py-6 gap-2">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/jobs">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 gap-2">
                    <Search className="w-5 h-5" />
                    Browse Jobs
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex items-center gap-6 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Real-time Listings
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Market Trends
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  AI-Powered
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-card to-background rounded-2xl p-6 border border-border/50 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Senior Software Engineer</p>
                        <p className="text-sm text-muted-foreground">Google • Bangalore</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">₹35-50 LPA</p>
                      <p className="text-xs text-muted-foreground">Posted 2h ago</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">React</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">TypeScript</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">Cloud</span>
                  </div>

                  <div className="pt-2">
                    <Button className="w-full" size="sm">Apply via LinkedIn</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Segments Section */}
      <div className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Career Segments
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore opportunities across multiple industries with tailored insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {segments.map((segment, i) => (
              <motion.div
                key={segment.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                    <div className={`w-12 h-12 rounded-xl ${segment.color} flex items-center justify-center`}>
                      <segment.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-semibold">{segment.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Sources Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Aggregated Job Listings
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access millions of job opportunities from top platforms in one place
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobSources.map((source, i) => (
              <motion.div
                key={source.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl ${source.color} flex items-center justify-center flex-shrink-0`}>
                      <source.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold">{source.name}</h3>
                      <p className="text-sm text-muted-foreground">Real-time listings</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Join thousands of professionals who found their dream jobs through CareerOS
            </p>
            <Link href="/onboarding">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
