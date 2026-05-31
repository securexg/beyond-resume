"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, FileText, Wand2, ArrowRight, GraduationCap, Briefcase, TrendingUp } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Step-by-step guide to create your first resume",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Wand2,
    title: "AI Analysis",
    description: "Get instant feedback on your resume",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Career Insights",
    description: "Learn what employers are looking for",
    color: "bg-green-500/10 text-green-500",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-heading font-bold text-xl">CareerCraft</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/news">
              <Button variant="ghost" size="sm">Career News</Button>
            </Link>
            <Link href="/builder">
              <Button variant="ghost" size="sm">Resume Builder</Button>
            </Link>
            <Link href="/analyze">
              <Button size="sm" className="gap-2">
                Analyze Resume
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        
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
                <GraduationCap className="w-4 h-4" />
                Made for Students & Freshers
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                Craft Your
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Perfect Resume
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg"
              >
                Never made a resume before? No worries! CareerCraft guides you through every step with AI-powered suggestions tailored for freshers.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/builder">
                  <Button size="lg" className="text-lg px-8 py-6 gap-2">
                    <Wand2 className="w-5 h-5" />
                    Build My Resume
                  </Button>
                </Link>
                <Link href="/analyze">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 gap-2">
                    <FileText className="w-5 h-5" />
                    Analyze Existing
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
                  100% Free
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  No signup needed
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  AI-powered
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-card to-background rounded-3xl p-8 border border-border/50 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-border/50">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-muted-foreground">Computer Science Student</p>
                    </div>
                    <div className="ml-auto px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                      ATS Score: 92%
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-3 bg-muted rounded-full w-3/4" />
                    <div className="h-3 bg-muted rounded-full w-full" />
                    <div className="h-3 bg-muted rounded-full w-5/6" />
                    <div className="h-3 bg-muted rounded-full w-4/5" />
                  </div>
                  
                  <div className="pt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">React</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">Python</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">Teamwork</span>
                    <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs">+3 more</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
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
              Everything You Need to Land Your First Job
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From building your first resume to understanding what recruiters want
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Ready to Start Your Career Journey?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Join thousands of students who landed their dream jobs with CareerCraft
            </p>
            <Link href="/builder">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started — It&apos;s Free!
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
