"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, TrendingUp, ArrowRight, Sparkles, Lightbulb, Target, Zap, CheckCircle, Heart } from "lucide-react";

const tips = [
  { icon: Lightbulb, text: "Start building your professional network early - it's your biggest asset", color: "text-yellow-500" },
  { icon: Target, text: "Focus on skills that match market demand - Technology +45% growth", color: "text-blue-500" },
  { icon: Zap, text: "AI/ML roles are booming - consider upskilling in this area", color: "text-purple-500" },
  { icon: Heart, text: "Your passion matters - align career with what you love", color: "text-pink-500" },
  { icon: CheckCircle, text: "Build projects that solve real problems - they speak louder than grades", color: "text-green-500" },
];

const marketInsights = [
  { sector: "Technology", growth: "+45%", insight: "AI/ML and Cloud Computing leading growth", icon: Cpu },
  { sector: "Design", growth: "+35%", insight: "UX/UI and Product Design growing rapidly", icon: Sparkles },
  { sector: "Management", growth: "+28%", insight: "Product and Project Management in demand", icon: Target },
];

export default function Home() {
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Image src="/logo.png" alt="CareerOS Logo" width={40} height={40} />
            </div>
            <div>
              <span className="font-heading font-semibold text-xl tracking-wide">CareerOS</span>
              <p className="text-xs text-muted-foreground">Your Career Operating System</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/trends">
              <Button variant="ghost" size="sm">Market Insights</Button>
            </Link>
            <Link href="/onboarding">
              <Button size="sm" className="gap-2">
                Start Journey
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
                <Sparkles className="w-4 h-4" />
                Personalized Career Guidance
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight"
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
                className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
              >
                We understand every student is unique. Get personalized career insights, skill recommendations, and guidance tailored to your journey.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/onboarding">
                  <Button size="lg" className="text-lg px-8 py-6 gap-2">
                    Begin Your Journey
                    <ArrowRight className="w-5 h-5" />
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
                  AI-Powered Insights
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Personalized for You
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Always Free
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="relative"
            >
              <Card className="border-border/50 bg-gradient-to-br from-card to-background shadow-2xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-border/50">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-lg">Market Insight</p>
                        <p className="text-sm text-muted-foreground">Technology sector growing +45%</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">AI/ML</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[85%]" />
                          </div>
                          <span className="text-sm font-medium">85%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Cloud</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[72%]" />
                          </div>
                          <span className="text-sm font-medium">72%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">DevOps</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[68%]" />
                          </div>
                          <span className="text-sm font-medium">68%</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 text-center">
                      <p className="text-sm text-muted-foreground">
                        Based on your interests, we recommend focusing on these skills
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Flowing Tips Section */}
      <div className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="font-heading text-2xl font-semibold mb-2">Career Tips for You</h2>
            <p className="text-muted-foreground">Personalized guidance updated regularly</p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTip}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-background flex items-center justify-center flex-shrink-0`}>
                      {(() => {
                        const TipIcon = tips[currentTip].icon;
                        return <TipIcon className={`w-8 h-8 ${tips[currentTip].color}`} />;
                      })()}
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-medium">{tips[currentTip].text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-4">
            {tips.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentTip ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Market Insights Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-semibold mb-4">
              Market Insights Tailored for You
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understand where the opportunities are and align your skills accordingly
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {marketInsights.map((insight, index) => (
              <motion.div
                key={insight.sector}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="border-border/50 hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <insight.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold">{insight.sector}</h3>
                        <div className="flex items-center gap-1 text-green-600 font-medium">
                          <TrendingUp className="w-4 h-4" />
                          {insight.growth}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{insight.insight}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Explore {insight.sector}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Counseling Section */}
      <div className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="font-heading text-3xl font-semibold">
              We're Here to Guide You
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Every step of your career journey, we provide personalized guidance, motivation, and insights to help you succeed.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold">Personalized Goals</h3>
                <p className="text-sm text-muted-foreground">Set goals based on your interests and market trends</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold">Skill Roadmap</h3>
                <p className="text-sm text-muted-foreground">Step-by-step guidance to build in-demand skills</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold">Motivation</h3>
                <p className="text-sm text-muted-foreground">Stay motivated with personalized tips and encouragement</p>
              </div>
            </div>
            <Link href="/onboarding">
              <Button size="lg" className="text-lg px-8 py-6 mt-8">
                Start Your Personalized Journey
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
