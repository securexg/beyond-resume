"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  GraduationCap,
  MessageSquare,
  Users,
  Brain,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const interviewCategories = [
  {
    id: "behavioral",
    name: "Behavioral Questions",
    icon: Users,
    color: "bg-blue-500/10 text-blue-500",
    questions: [
      { q: "Tell me about a time you led a challenging project.", tip: "Use the STAR method: Situation, Task, Action, Result. Quantify your impact." },
      { q: "Describe a conflict with a teammate and how you resolved it.", tip: "Focus on empathy, communication, and the positive outcome." },
      { q: "What is your biggest professional achievement?", tip: "Pick something measurable and relevant to the role you are applying for." },
      { q: "How do you handle tight deadlines and pressure?", tip: "Show planning skills, prioritization, and calm under pressure." },
    ],
  },
  {
    id: "role",
    name: "Role-Specific Knowledge",
    icon: GraduationCap,
    color: "bg-purple-500/10 text-purple-500",
    questions: [
      { q: "What are the key trends in your industry right now?", tip: "Research recent developments, technologies, or market shifts relevant to your field." },
      { q: "How do you stay updated with industry best practices?", tip: "Mention publications, conferences, courses, or professional networks you follow." },
      { q: "What tools or software are essential for this role?", tip: "List industry-standard tools and explain your proficiency with each." },
      { q: "How would you handle a common challenge in this role?", tip: "Demonstrate domain knowledge and practical problem-solving approach." },
    ],
  },
  {
    id: "problemsolving",
    name: "Problem Solving",
    icon: Brain,
    color: "bg-green-500/10 text-green-500",
    questions: [
      { q: "How would you approach a declining performance metric?", tip: "Show structured thinking: data analysis, hypothesis, testing, iteration." },
      { q: "Describe a complex problem you solved recently.", tip: "Walk through your analysis, decision process, and the outcome." },
      { q: "How do you prioritize competing tasks or projects?", tip: "Use frameworks like impact vs effort, urgency vs importance, or stakeholder needs." },
      { q: "Tell me about a time you had to make a decision with incomplete information.", tip: "Show how you assess risk, gather data, and make informed decisions." },
    ],
  },
  {
    id: "hr",
    name: "HR / Culture Fit",
    icon: MessageSquare,
    color: "bg-orange-500/10 text-orange-500",
    questions: [
      { q: "Why do you want to work at this company?", tip: "Research the company. Mention specific products, values, or mission that resonate." },
      { q: "Where do you see yourself in 5 years?", tip: "Show ambition aligned with the company growth trajectory." },
      { q: "What are your salary expectations?", tip: "Research market rates on Glassdoor/Naukri. Give a range, not a fixed number." },
      { q: "Why are you leaving your current role?", tip: "Stay positive. Focus on growth opportunities, not complaints." },
    ],
  },
];

export default function InterviewPrepPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("behavioral");
  const [completedQuestions, setCompletedQuestions] = useState<string[]>([]);

  const toggleCategory = (id: string) => {
    setExpandedCategory(prev => prev === id ? null : id);
  };

  const toggleQuestion = (q: string) => {
    setCompletedQuestions(prev =>
      prev.includes(q) ? prev.filter(item => item !== q) : [...prev, q]
    );
  };

  const totalQuestions = interviewCategories.reduce((acc, cat) => acc + cat.questions.length, 0);
  const progress = Math.round((completedQuestions.length / totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-400 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              <Image src="/logo.png" alt="CareerOS" width={120} height={120} className="relative rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300" />
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/analyze">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Resume Analysis
                </Button>
              </motion.div>
            </Link>
            <Link href="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="sm">Home</Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4 flex-col sm:flex-row sm:items-start">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="font-heading text-3xl md:text-4xl font-semibold">
                  Interview Preparation
                </h1>
                <p className="text-muted-foreground">
                  Personalized practice questions and tips for your target role
                </p>
              </div>
            </div>

            {/* Progress */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Your Progress</span>
                  <span className="text-sm text-muted-foreground">
                    {completedQuestions.length}/{totalQuestions} questions practiced
                  </span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Categories */}
          <div className="space-y-4">
            {interviewCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              const isExpanded = expandedCategory === category.id;
              const categoryCompleted = category.questions.filter(q => completedQuestions.includes(q.q)).length;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                >
                  <Card className="border-border/50">
                    <div
                      className="p-6 cursor-pointer flex items-center justify-between"
                      onClick={() => toggleCategory(category.id)}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center`}>
                          <CategoryIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-lg">{category.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {categoryCompleted}/{category.questions.length} completed
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">{category.questions.length} questions</Badge>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>

                    {isExpanded && (
                      <CardContent className="pt-0 space-y-3">
                        {category.questions.map((item, qi) => {
                          const isDone = completedQuestions.includes(item.q);
                          return (
                            <div
                              key={qi}
                              className={`p-4 rounded-lg border transition-colors ${
                                isDone
                                  ? "border-green-500/30 bg-green-500/5"
                                  : "border-border/50 bg-background/50"
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleQuestion(item.q);
                                  }}
                                  className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                                    isDone
                                      ? "border-green-500 bg-green-500 text-white"
                                      : "border-muted-foreground"
                                  }`}
                                >
                                  {isDone && <CheckCircle className="w-3 h-3" />}
                                </button>
                                <div className="flex-1">
                                  <p className={`font-medium text-sm ${isDone ? "line-through text-muted-foreground" : ""}`}>
                                    {item.q}
                                  </p>
                                  <div className="mt-2 p-2 bg-muted/50 rounded text-xs text-muted-foreground">
                                    <span className="font-medium text-primary">Tip:</span> {item.tip}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Motivation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-6 text-center space-y-3">
                <GraduationCap className="w-10 h-10 text-primary mx-auto" />
                <h3 className="font-heading font-semibold text-lg">You&apos;re Doing Great!</h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Practice makes perfect. Review each question, rehearse your answers out loud, and remember - confidence comes from preparation.
                </p>
                <Link href="/analyze">
                  <Button variant="outline" className="mt-2">
                    Analyze Another Resume
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
