"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  ArrowRight,
  Sparkles,
  Lightbulb,
  Target,
  Zap,
  CheckCircle,
  Heart,
  FileText,
  GraduationCap,
  BarChart3,
  BookOpen,
  Users,
  Brain,
  Shield,
  Rocket,
  Menu,
  X,
} from "lucide-react";

const tips = [
  { icon: Lightbulb, text: "80% of jobs are filled through networking — start building connections early", color: "text-yellow-400" },
  { icon: Target, text: "Professionals with strong portfolios see 45% more interview callbacks", color: "text-cyan-400" },
  { icon: Zap, text: "Candidates with ATS-optimized resumes are 3x more likely to get interviews", color: "text-purple-400" },
  { icon: Heart, text: "Companies hiring for culture fit value passion projects — showcase yours", color: "text-pink-400" },
  { icon: CheckCircle, text: "Mock interviews improve success rate by 60% — practice with our prep tool", color: "text-emerald-400" },
  { icon: Brain, text: "Top recruiters spend 7 seconds on a resume — make every word count", color: "text-orange-400" },
];

const platformFeatures = [
  {
    icon: FileText,
    title: "Resume & ATS Analysis",
    description: "Upload your resume and get an instant ATS score, keyword gaps, and rewrite suggestions powered by AI.",
    href: "/analyze",
    color: "from-cyan-500/20 to-teal-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: BarChart3,
    title: "Hiring Probability Score",
    description: "Know your chances before you apply. Get a breakdown of skills match, experience, and education fit.",
    href: "/analyze",
    color: "from-purple-500/20 to-violet-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Explore hiring trends, salary benchmarks, and growth opportunities across all industries and locations.",
    href: "/trends",
    color: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: Target,
    title: "Role Recommendations",
    description: "Based on your skills, we suggest the best-fit roles you might not have considered.",
    href: "/analyze",
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-400",
  },
  {
    icon: BookOpen,
    title: "Skill Gap Roadmap",
    description: "Discover missing skills and get curated learning resources with time estimates to close the gap.",
    href: "/analyze",
    color: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: GraduationCap,
    title: "Interview Preparation",
    description: "Practice behavioral, technical, and HR questions with expert tips tailored to your target role.",
    href: "/interview-prep",
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
  },
];

const careerGuides = [
  {
    icon: Shield,
    title: "First Job After College?",
    points: [
      "Start with internships — 70% convert to full-time offers",
      "Build 2-3 strong projects that solve real problems",
      "Tailor your resume for each application",
      "Practice the STAR method for behavioral interviews",
    ],
  },
  {
    icon: Rocket,
    title: "Switching Careers?",
    points: [
      "Identify transferable skills from your current role",
      "Take 1-2 certifications in your target domain",
      "Network with professionals in the new field",
      "Start with bridge roles that use both skill sets",
    ],
  },
  {
    icon: Users,
    title: "Want a Higher Salary?",
    points: [
      "Research market rates on Glassdoor and Naukri",
      "Quantify your achievements with numbers",
      "Upskill in high-demand areas (AI, Cloud, Product)",
      "Negotiate with competing offers when possible",
    ],
  },
];

const marketInsights = [
  { sector: "Technology", growth: "+45%", roles: "Software Engineer, Product Manager, Data Analyst", salary: "₹15-50 LPA", color: "border-cyan-500/30" },
  { sector: "Healthcare", growth: "+38%", roles: "Doctor, Nurse, Medical Researcher, Healthcare Admin", salary: "₹8-40 LPA", color: "border-emerald-500/30" },
  { sector: "Finance", growth: "+32%", roles: "Financial Analyst, Investment Banker, Accountant, Risk Manager", salary: "₹12-45 LPA", color: "border-blue-500/30" },
  { sector: "Marketing", growth: "+35%", roles: "Digital Marketer, Brand Manager, Content Strategist, SEO Specialist", salary: "₹8-30 LPA", color: "border-purple-500/30" },
  { sector: "Education", growth: "+28%", roles: "Teacher, Professor, EdTech Specialist, Curriculum Designer", salary: "₹6-25 LPA", color: "border-orange-500/30" },
  { sector: "Manufacturing", growth: "+25%", roles: "Production Manager, Quality Engineer, Supply Chain Analyst", salary: "₹10-35 LPA", color: "border-pink-500/30" },
  { sector: "Legal", growth: "+30%", roles: "Corporate Lawyer, Legal Counsel, Compliance Officer, Patent Attorney", salary: "₹15-50 LPA", color: "border-indigo-500/30" },
  { sector: "Sales", growth: "+40%", roles: "Sales Manager, Business Development, Account Executive, Sales Analyst", salary: "₹10-40 LPA", color: "border-rose-500/30" },
];

export default function Home() {
  const [currentTip, setCurrentTip] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 h-16 sm:h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image 
              src="/logo.png" 
              alt="CareerOS" 
              width={160} 
              height={40} 
              className="h-8 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
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
            <Link href="/onboarding">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" className="gap-2 ml-2">
                  Get Started
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
                <Link href="/onboarding" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 sm:pt-28 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-base font-light"
              >
                <Sparkles className="w-4 h-4" />
                AI Career Intelligence Platform
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1]"
              >
                Don&apos;t just search jobs{" "}
                <span className="bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent">
                  engineer your career.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed"
              >
                CareerOS fuses your profile, job market trends, and AI to deliver personalized role recommendations, skill-gap analysis, and interview prep — acting as your true career advisor.
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
                <Link href="/analyze">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 gap-2">
                    <FileText className="w-5 h-5" />
                    Analyze Resume
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex items-center gap-6 text-base text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  AI-Powered
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  Personalized
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  Always Free
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=500&q=80"
                  alt="Career professionals working together"
                  width={600}
                  height={500}
                  className="relative rounded-3xl shadow-2xl object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Flowing Tips */}
      <div className="py-12 border-y border-border/30">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTip}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center flex-shrink-0">
                {(() => {
                  const TipIcon = tips[currentTip].icon;
                  return <TipIcon className={`w-6 h-6 ${tips[currentTip].color}`} />;
                })()}
              </div>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Career Tip:</span>{" "}
                {tips[currentTip].text}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-1.5 mt-4">
            {tips.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === currentTip ? "bg-primary w-6" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Platform Features - What CareerOS Does */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-medium mb-4">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                Land Your Dream Role
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From resume analysis to interview prep — CareerOS covers every step of your career journey
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={feature.href}>
                    <Card className="border-border/50 hover:border-primary/30 bg-card/50 hover:bg-card transition-all duration-300 h-full group cursor-pointer overflow-hidden">
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={feature.href === "/analyze" ? "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=400&h=200&q=80" :
                                feature.href === "/trends" ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=200&q=80" :
                                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&h=200&q=80"}
                          alt={feature.title}
                          width={400}
                          height={200}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      </div>
                      <CardContent className="p-6 space-y-4 -mt-12 relative">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                          <FeatureIcon className={`w-7 h-7 ${feature.iconColor}`} />
                        </div>
                        <h3 className="font-heading font-normal text-xl group-hover:text-primary transition-colors">{feature.title}</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Career Guides */}
      <div className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-medium mb-4">
              Actionable Career Guides
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practical advice for wherever you are in your career journey
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerGuides.map((guide, index) => {
              const GuideIcon = guide.icon;
              return (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-border/50 bg-card/80 h-full overflow-hidden group">
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src={index === 0 ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&h=150&q=80" :
                              index === 1 ? "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&h=150&q=80" :
                              "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&h=150&q=80"}
                        alt={guide.title}
                        width={400}
                        height={150}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>
                    <CardContent className="p-6 space-y-5 -mt-10 relative">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center shadow-lg">
                          <GuideIcon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-heading font-normal text-lg">{guide.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {guide.points.map((point, pi) => (
                          <li key={pi} className="flex items-start gap-2.5 text-base text-muted-foreground">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Market Snapshot */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-medium mb-4">
              Job Market Snapshot
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Growth trends, top roles, and salary benchmarks across all industries
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {marketInsights.map((insight, index) => (
              <motion.div
                key={insight.sector}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className={`border ${insight.color} bg-card/50 h-full transition-all duration-300`}>
                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading font-normal text-base">{insight.sector}</h3>
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 + 0.3, type: "spring" }}
                        className="text-emerald-500 font-semibold text-base"
                      >
                        {insight.growth}
                      </motion.span>
                    </div>
                    <p className="text-sm text-muted-foreground">{insight.roles}</p>
                    <div className="pt-2 border-t border-border/30">
                      <p className="text-sm text-muted-foreground">Avg Salary</p>
                      <p className="font-normal text-base text-primary">{insight.salary}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8"
          >
            <Link href="/trends">
              <Button variant="outline" className="gap-2 text-base px-6 py-5">
                Explore Full Market Trends
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl font-medium"
            >
              Ready to Take Control of Your Career?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-xl mx-auto"
            >
              Upload your resume, discover your strengths, close skill gaps, and prepare for interviews — all in one place.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Link href="/onboarding">
                <Button size="lg" className="text-lg px-8 py-6 gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/interview-prep">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Practice Interviews
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
