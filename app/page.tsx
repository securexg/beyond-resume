"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  MapPin,
  Mail,
  Globe,
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

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
                Your career partner{" "}
                <span className="bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent">
                  at every step.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed"
              >
                Whether you&apos;re exploring tech, non-tech, government jobs, or global opportunities — we guide you through market insights, resume building, interview prep, and career planning like a friend.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/career-quiz">
                  <Button size="lg" className="text-lg px-8 py-6 gap-2 bg-gradient-to-r from-violet-500 to-pink-500 text-white border-0">
                    <Sparkles className="w-5 h-5" />
                    Find Your Path
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
                  src="/images/pexels/hero-team.jpeg"
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

      {/* Domain Overview */}
      <div className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
              Explore Every Career Path
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you&apos;re in tech, non-tech, government, or looking to go global — we have resources tailored for you
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Tech Careers",
                description: "Software engineering, data science, AI/ML, DevOps — with salary trends, top hirers, and skills in demand.",
                href: "/trends",
                color: "from-cyan-500/20 to-blue-500/20",
                iconColor: "text-cyan-400",
              },
              {
                icon: Users,
                title: "Non-Tech Careers",
                description: "Sales, marketing, finance, operations — high-paying roles in India's startup ecosystem.",
                href: "/trends",
                color: "from-purple-500/20 to-pink-500/20",
                iconColor: "text-purple-400",
              },
              {
                icon: Shield,
                title: "Government Jobs",
                description: "UPSC, SSC, Banking, Railways — complete exam guides, eligibility, and preparation strategies.",
                href: "/govt-jobs",
                color: "from-orange-500/20 to-red-500/20",
                iconColor: "text-orange-400",
              },
              {
                icon: Globe,
                title: "Global Opportunities",
                description: "Work visas, study abroad, and PR pathways for Canada, Germany, UK, Australia, and more.",
                href: "/global",
                color: "from-green-500/20 to-teal-500/20",
                iconColor: "text-green-400",
              },
              {
                icon: BookOpen,
                title: "Content Creation",
                description: "Build a creator career — platforms, earnings, niche ideas, and tools for YouTube, LinkedIn, and more.",
                href: "/content-creation",
                color: "from-pink-500/20 to-rose-500/20",
                iconColor: "text-pink-400",
              },
              {
                icon: Target,
                title: "Interview Prep",
                description: "Practice behavioral, technical, and HR questions with AI-powered feedback and expert tips.",
                href: "/interview-prep",
                color: "from-indigo-500/20 to-violet-500/20",
                iconColor: "text-indigo-400",
              },
            ].map((domain, i) => {
              const DomainIcon = domain.icon;
              return (
                <motion.div
                  key={domain.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link href={domain.href}>
                    <Card className={`border-border/50 hover:shadow-lg transition-all h-full bg-gradient-to-br ${domain.color}`}>
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center mb-4 ${domain.iconColor}`}>
                          <DomainIcon className="w-6 h-6" />
                        </div>
                        <h3 className="font-heading font-semibold text-lg mb-2">{domain.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{domain.description}</p>
                        <div className="flex items-center text-primary text-sm font-medium mt-4">
                          Explore
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
              Your Guide, Your Friend
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              CareerOS isn&apos;t just a tool — it&apos;s your career companion. From your first resume to landing your dream job, we walk with you through every step: discovering your path, building skills, preparing for interviews, and navigating the job market. We believe career guidance should feel like a conversation with a friend who truly understands your goals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Personalized</h3>
                <p className="text-sm text-muted-foreground">Tailored recommendations based on your unique profile and goals</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">AI-Powered</h3>
                <p className="text-sm text-muted-foreground">Advanced AI analyzes your resume and suggests improvements</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Trusted</h3>
                <p className="text-sm text-muted-foreground">Built for Indian students with local market insights</p>
              </div>
            </div>
          </motion.div>
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
                          src={[
                            "/images/pexels/feat-resume-ats.jpeg",
                            "/images/pexels/feat-hiring-score.jpeg",
                            "/images/pexels/feat-market.jpeg",
                            "/images/pexels/feat-role-match.jpeg",
                            "/images/pexels/feat-skillgap.jpeg",
                            "/images/pexels/feat-interview-prep.jpeg",
                          ][index]}
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
                        src={index === 0 ? "/images/pexels/guide-firstjob.jpeg" :
                              index === 1 ? "/images/pexels/guide-midcareer.jpeg" :
                              "/images/pexels/guide-leadership.jpeg"}
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

      {/* Entrepreneurship Glimpse */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20">
                <Rocket className="w-3 h-3 mr-1" />
                Beyond Jobs
              </Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-medium">
                Career isn&apos;t just about{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">getting a job.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Entrepreneurship is a valid and powerful career path. You don&apos;t need a tech degree, an MBA, or a family business. From Ritesh Agarwal (OYO, started at 17) to Falguni Nayar (Nykaa, started at 49) — India&apos;s greatest entrepreneurs prove that all you need is resilience, vision, and the courage to start.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 rounded-lg bg-orange-500/5 border border-orange-500/10">
                  <p className="font-heading text-2xl font-semibold text-orange-400">100+</p>
                  <p className="text-xs text-muted-foreground">Indian Unicorns</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-orange-500/5 border border-orange-500/10">
                  <p className="font-heading text-2xl font-semibold text-orange-400">3rd</p>
                  <p className="text-xs text-muted-foreground">Largest Startup Ecosystem</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-orange-500/5 border border-orange-500/10">
                  <p className="font-heading text-2xl font-semibold text-orange-400">₹0</p>
                  <p className="text-xs text-muted-foreground">Required to Start</p>
                </div>
              </div>
              <Link href="/entrepreneurship">
                <Button className="gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white">
                  Explore Entrepreneur Stories
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl" />
              <Image
                src="/images/pexels/hero-entrepreneur.jpeg"
                alt="Entrepreneurship"
                width={600}
                height={400}
                className="relative rounded-3xl shadow-2xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Career Insights — Broader */}
      <div className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-medium mb-4">
              Career Insights — Tech, Non-Tech &amp; Beyond
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guides for every career path — placements, government exams, freelancing, entrepreneurship, creative fields, and more
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { slug: "cracking-campus-placements", title: "Cracking Campus Placements", category: "Campus", readTime: "8 min", image: "/images/pexels/art-campus.jpeg" },
              { slug: "government-job-preparation", title: "Government Job Preparation", category: "Government", readTime: "10 min", image: "/images/pexels/art-govtexam.jpeg" },
              { slug: "freelancing-career-guide", title: "Building a Freelancing Career", category: "Freelancing", readTime: "8 min", image: "/images/pexels/art-freelance.jpeg" },
              { slug: "creative-careers", title: "Creative Careers: Design & Media", category: "Creative", readTime: "7 min", image: "/images/pexels/art-creative.jpeg" },
              { slug: "entrepreneurship-mindset", title: "The Entrepreneurship Mindset", category: "Entrepreneurship", readTime: "8 min", image: "/images/pexels/art-entrepreneur.jpeg" },
              { slug: "remote-work-guide", title: "Remote Work & Global Jobs", category: "Remote Work", readTime: "6 min", image: "/images/pexels/art-remote.jpeg" },
            ].map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/insights/${article.slug}`}>
                  <Card className="border-border/50 bg-card/80 h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden group">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>
                    <CardContent className="p-6 space-y-3 -mt-12 relative">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                        <span className="text-xs text-muted-foreground">{article.readTime}</span>
                      </div>
                      <h3 className="font-heading font-semibold text-lg leading-tight">{article.title}</h3>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-10"
          >
            <Link href="/insights">
              <Button variant="outline" className="gap-2 text-base px-6 py-5">
                View All 11 Articles
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
              <Link href="/career-quiz">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 gap-2">
                  <Sparkles className="w-5 h-5" />
                  Find Your Path
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

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">CareerOS</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI-powered career intelligence platform for Indian students and professionals. Your guide to career success.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/trends" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Market Insights</Link>
                <Link href="/jobs" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Job Listings</Link>
                <Link href="/analyze" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Resume Analysis</Link>
                <Link href="/interview-prep" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Interview Prep</Link>
                <Link href="/entrepreneurship" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Entrepreneurship</Link>
                <Link href="/insights" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Career Insights</Link>
                <Link href="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  New Delhi, India
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@simplyplugged.com
                </p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} CareerOS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
