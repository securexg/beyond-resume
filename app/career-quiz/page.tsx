"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  GraduationCap,
  Briefcase,
  Building2,
  Landmark,
  Users,
  Palette,
  Sparkles,
  RefreshCw,
} from "lucide-react";

const careerPaths = [
  {
    id: "tech",
    name: "Tech Jobs",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
    description: "Software engineering, data science, product management, and tech roles",
    link: "/jobs",
  },
  {
    id: "non-tech",
    name: "Non-Tech Jobs",
    icon: Users,
    color: "from-green-500 to-teal-500",
    bgColor: "bg-green-500/10",
    textColor: "text-green-400",
    description: "Marketing, sales, HR, operations, finance, and traditional corporate roles",
    link: "/jobs",
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship",
    icon: Sparkles,
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-400",
    description: "Start your own business, startup, or venture",
    link: "/entrepreneurship",
  },
  {
    id: "govt",
    name: "Govt Jobs",
    icon: Landmark,
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-400",
    description: "Civil services, PSU, banking, and government examinations",
    link: "/insights/government-job-preparation",
  },
  {
    id: "family-business",
    name: "Family Business",
    icon: Building2,
    color: "from-pink-500 to-red-500",
    bgColor: "bg-pink-500/10",
    textColor: "text-pink-400",
    description: "Join or scale an existing family business",
    link: "/insights",
  },
  {
    id: "freelancing",
    name: "Freelancing",
    icon: ArrowRight,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    textColor: "text-yellow-400",
    description: "Independent work, consulting, and gig economy",
    link: "/insights/freelancing-career-guide",
  },
  {
    id: "creative",
    name: "Creative Careers",
    icon: Palette,
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-500/10",
    textColor: "text-rose-400",
    description: "Design, content, media, arts, and creative fields",
    link: "/insights/creative-careers",
  },
];

const questions = [
  {
    id: "stage",
    title: "What's your current life stage?",
    type: "single",
    options: [
      { value: "student", label: "Student (10th, 12th, or college)" },
      { value: "fresh_grad", label: "Fresh Graduate" },
      { value: "working", label: "Working Professional" },
      { value: "switcher", label: "Career Switcher" },
      { value: "exploring", label: "Exploring new options" },
    ],
  },
  {
    id: "education",
    title: "What's your highest education?",
    type: "single",
    options: [
      { value: "school", label: "10th/12th" },
      { value: "diploma", label: "Diploma" },
      { value: "bachelor", label: "Bachelor's Degree" },
      { value: "master", label: "Master's Degree" },
      { value: "phd", label: "PhD" },
      { value: "none", label: "No formal degree" },
    ],
  },
  {
    id: "passions",
    title: "What are you passionate about? (Select all that apply)",
    type: "multi",
    options: [
      { value: "tech", label: "Technology & Coding" },
      { value: "business", label: "Business & Finance" },
      { value: "creative", label: "Creative Arts & Design" },
      { value: "public_service", label: "Public Service & Governance" },
      { value: "teaching", label: "Teaching & Education" },
      { value: "healthcare", label: "Healthcare & Medicine" },
      { value: "social", label: "Social Impact & NGO" },
      { value: "sports", label: "Sports & Fitness" },
    ],
  },
  {
    id: "goal",
    title: "What's your primary career goal?",
    type: "single",
    options: [
      { value: "stability", label: "Stability & job security" },
      { value: "income", label: "High income potential" },
      { value: "freedom", label: "Freedom & flexibility" },
      { value: "impact", label: "Impact & purpose" },
      { value: "own", label: "Build something of my own" },
    ],
  },
  {
    id: "risk",
    title: "What's your risk tolerance?",
    type: "single",
    options: [
      { value: "low", label: "Low — prefer guaranteed salary" },
      { value: "medium", label: "Medium — open to calculated risks" },
      { value: "high", label: "High — willing to bet on myself" },
    ],
  },
  {
    id: "work_style",
    title: "What work style do you prefer?",
    type: "single",
    options: [
      { value: "structured", label: "Structured 9-5" },
      { value: "flexible", label: "Flexible remote work" },
      { value: "self_directed", label: "Self-directed" },
      { value: "team", label: "Team-based collaborative" },
    ],
  },
  {
    id: "financial",
    title: "What's your financial situation?",
    type: "single",
    options: [
      { value: "immediate", label: "Need immediate income" },
      { value: "prep", label: "Can invest 1-2 years in preparation" },
      { value: "bootstrap", label: "Have savings to bootstrap" },
      { value: "support", label: "Family support available" },
    ],
  },
  {
    id: "timeline",
    title: "What's your timeline?",
    type: "single",
    options: [
      { value: "now", label: "Ready to start now" },
      { value: "6months", label: "6 months preparation" },
      { value: "1-2years", label: "1-2 year plan" },
      { value: "long", label: "Long-term (3+ years)" },
    ],
  },
  {
    id: "family_business",
    title: "Do you have a family business?",
    type: "single",
    options: [
      { value: "yes_join", label: "Yes, I can join it" },
      { value: "yes_start", label: "Yes, interested in starting with family" },
      { value: "no", label: "No" },
      { value: "maybe", label: "Maybe, exploring options" },
    ],
  },
  {
    id: "priorities",
    title: "Rank your top 3 career priorities",
    type: "ranking",
    options: [
      { value: "tech", label: "Tech Jobs" },
      { value: "non-tech", label: "Non-Tech Jobs" },
      { value: "entrepreneurship", label: "Entrepreneurship" },
      { value: "govt", label: "Govt Jobs" },
      { value: "family-business", label: "Family Business" },
      { value: "freelancing", label: "Freelancing" },
      { value: "creative", label: "Creative Careers" },
    ],
  },
];

export default function CareerQuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const handleAnswer = (questionId: string, value: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleMultiSelect = (questionId: string, value: string) => {
    setAnswers((prev) => {
      const current = prev[questionId] || [];
      const updated = current.includes(value)
        ? current.filter((v: string) => v !== value)
        : [...current, value];
      return { ...prev, [questionId]: updated };
    });
  };

  const handleRanking = (value: string, direction: "up" | "down") => {
    setAnswers((prev) => {
      const current = prev.priorities || [];
      const index = current.indexOf(value);
      if (index === -1 && current.length < 3) {
        return { ...prev, priorities: [...current, value] };
      }
      if (direction === "up" && index > 0) {
        const newRanking = [...current];
        [newRanking[index], newRanking[index - 1]] = [newRanking[index - 1], newRanking[index]];
        return { ...prev, priorities: newRanking };
      }
      if (direction === "down" && index < current.length - 1) {
        const newRanking = [...current];
        [newRanking[index], newRanking[index + 1]] = [newRanking[index + 1], newRanking[index]];
        return { ...prev, priorities: newRanking };
      }
      return prev;
    });
  };

  const calculateResults = () => {
    const scores: Record<string, number> = {
      tech: 0,
      "non-tech": 0,
      entrepreneurship: 0,
      govt: 0,
      "family-business": 0,
      freelancing: 0,
      creative: 0,
    };

    // Stage scoring
    if (answers.stage === "student") {
      scores.govt += 15;
      scores.tech += 10;
      scores["non-tech"] += 10;
    } else if (answers.stage === "fresh_grad") {
      scores.tech += 15;
      scores["non-tech"] += 15;
      scores.entrepreneurship += 10;
    } else if (answers.stage === "working") {
      scores["non-tech"] += 10;
      scores.entrepreneurship += 15;
      scores["family-business"] += 10;
    } else if (answers.stage === "switcher") {
      scores.entrepreneurship += 15;
      scores.freelancing += 10;
      scores.creative += 10;
    }

    // Education scoring
    if (answers.education === "bachelor" || answers.education === "master") {
      scores.tech += 15;
      scores["non-tech"] += 15;
      scores.govt += 10;
    } else if (answers.education === "phd") {
      scores.govt += 20;
      scores.tech += 10;
    } else if (answers.education === "none" || answers.education === "school") {
      scores.entrepreneurship += 15;
      scores.freelancing += 15;
      scores.creative += 10;
    }

    // Passions scoring
    const passions = answers.passions || [];
    if (passions.includes("tech")) scores.tech += 20;
    if (passions.includes("business")) {
      scores.entrepreneurship += 15;
      scores["non-tech"] += 10;
    }
    if (passions.includes("creative")) {
      scores.creative += 20;
      scores.freelancing += 10;
    }
    if (passions.includes("public_service")) scores.govt += 20;
    if (passions.includes("teaching")) scores.govt += 10;
    if (passions.includes("healthcare")) scores.govt += 15;
    if (passions.includes("social")) scores.govt += 10;

    // Goal scoring
    if (answers.goal === "stability") {
      scores.govt += 20;
      scores["non-tech"] += 15;
    } else if (answers.goal === "income") {
      scores.tech += 15;
      scores.entrepreneurship += 20;
    } else if (answers.goal === "freedom") {
      scores.freelancing += 20;
      scores.entrepreneurship += 15;
    } else if (answers.goal === "impact") {
      scores.govt += 15;
      scores.entrepreneurship += 15;
    } else if (answers.goal === "own") {
      scores.entrepreneurship += 25;
      scores["family-business"] += 15;
    }

    // Risk scoring
    if (answers.risk === "low") {
      scores.govt += 20;
      scores["non-tech"] += 15;
    } else if (answers.risk === "medium") {
      scores.tech += 15;
      scores["non-tech"] += 10;
    } else if (answers.risk === "high") {
      scores.entrepreneurship += 25;
      scores.freelancing += 15;
    }

    // Work style scoring
    if (answers.work_style === "structured") {
      scores.govt += 15;
      scores["non-tech"] += 15;
    } else if (answers.work_style === "flexible") {
      scores.tech += 15;
      scores.freelancing += 15;
    } else if (answers.work_style === "self_directed") {
      scores.entrepreneurship += 20;
      scores.freelancing += 15;
    } else if (answers.work_style === "team") {
      scores["non-tech"] += 15;
      scores.tech += 10;
    }

    // Financial scoring
    if (answers.financial === "immediate") {
      scores["non-tech"] += 15;
      scores.govt += 10;
    } else if (answers.financial === "prep") {
      scores.govt += 20;
      scores.tech += 15;
    } else if (answers.financial === "bootstrap") {
      scores.entrepreneurship += 20;
      scores.freelancing += 15;
    } else if (answers.financial === "support") {
      scores.entrepreneurship += 15;
      scores["family-business"] += 15;
    }

    // Timeline scoring
    if (answers.timeline === "now") {
      scores["non-tech"] += 15;
      scores.freelancing += 10;
    } else if (answers.timeline === "6months") {
      scores.tech += 15;
      scores.govt += 10;
    } else if (answers.timeline === "1-2years") {
      scores.govt += 20;
      scores.entrepreneurship += 15;
    } else if (answers.timeline === "long") {
      scores.govt += 20;
      scores.entrepreneurship += 15;
    }

    // Family business scoring
    if (answers.family_business === "yes_join" || answers.family_business === "yes_start") {
      scores["family-business"] += 30;
    }

    // Priority ranking bonus
    const priorities = answers.priorities || [];
    priorities.forEach((p: string, idx: number) => {
      const bonus = (3 - idx) * 10;
      if (scores[p] !== undefined) scores[p] += bonus;
    });

    // Convert to percentages
    const maxScore = Math.max(...Object.values(scores));
    const results = careerPaths
      .map((path) => ({
        ...path,
        score: scores[path.id] || 0,
        percentage: maxScore > 0 ? Math.round((scores[path.id] / maxScore) * 100) : 0,
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 3);

    setResults(results);
    setShowResults(true);
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleRetake = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setResults([]);
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <div className="pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          {!showResults ? (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    Question {currentStep + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Question Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-border/50 bg-card/80">
                    <CardContent className="p-8">
                      <h2 className="font-heading text-2xl md:text-3xl font-medium mb-8">
                        {currentQuestion.title}
                      </h2>

                      {currentQuestion.type === "single" && (
                        <div className="space-y-3">
                          {currentQuestion.options.map((option) => (
                            <button
                              key={option.value}
                              onClick={() => handleAnswer(currentQuestion.id, option.value)}
                              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                                answers[currentQuestion.id] === option.value
                                  ? "border-primary bg-primary/10"
                                  : "border-border/50 hover:border-border hover:bg-muted/50"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium">{option.label}</span>
                                {answers[currentQuestion.id] === option.value && (
                                  <CheckCircle className="w-5 h-5 text-primary" />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      )}

                      {currentQuestion.type === "multi" && (
                        <div className="space-y-3">
                          {currentQuestion.options.map((option) => {
                            const isSelected = (answers[currentQuestion.id] || []).includes(option.value);
                            return (
                              <button
                                key={option.value}
                                onClick={() => handleMultiSelect(currentQuestion.id, option.value)}
                                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                                  isSelected
                                    ? "border-primary bg-primary/10"
                                    : "border-border/50 hover:border-border hover:bg-muted/50"
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-medium">{option.label}</span>
                                  {isSelected && <CheckCircle className="w-5 h-5 text-primary" />}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {currentQuestion.type === "ranking" && (
                        <div className="space-y-3">
                          {currentQuestion.options.map((option) => {
                            const ranking = (answers.priorities || []).indexOf(option.value);
                            const isSelected = ranking !== -1;
                            return (
                              <div
                                key={option.value}
                                className={`p-4 rounded-lg border-2 transition-all ${
                                  isSelected
                                    ? "border-primary bg-primary/10"
                                    : "border-border/50"
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    {isSelected && (
                                      <Badge className="bg-primary text-primary-foreground">
                                        #{ranking + 1}
                                      </Badge>
                                    )}
                                    <span className="font-medium">{option.label}</span>
                                  </div>
                                  <div className="flex gap-2">
                                    <button
                                      onClick={() => handleRanking(option.value, "up")}
                                      disabled={!isSelected || ranking === 0}
                                      className="p-1 rounded hover:bg-muted disabled:opacity-30"
                                    >
                                      <ArrowLeft className="w-4 h-4" />
                                    </button>
                                    <button
                                      onClick={() => handleRanking(option.value, "down")}
                                      disabled={!isSelected || ranking === 2}
                                      className="p-1 rounded hover:bg-muted disabled:opacity-30"
                                    >
                                      <ArrowRight className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                          <p className="text-sm text-muted-foreground mt-4">
                            Select up to 3 options and rank them by priority
                          </p>
                        </div>
                      )}

                      {/* Navigation */}
                      <div className="flex justify-between mt-8">
                        <Button
                          variant="outline"
                          onClick={handlePrevious}
                          disabled={currentStep === 0}
                        >
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Previous
                        </Button>
                        <Button
                          onClick={handleNext}
                          disabled={
                            currentQuestion.type === "multi" &&
                            (!answers[currentQuestion.id] || answers[currentQuestion.id].length === 0)
                          }
                        >
                          {currentStep === questions.length - 1 ? "See Results" : "Next"}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            /* Results */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-white">
                  Your Career Path Results
                </Badge>
                <h1 className="font-heading text-3xl md:text-4xl font-medium mb-4">
                  Based on your answers, here are your top career paths
                </h1>
                <p className="text-muted-foreground">
                  These recommendations are based on your stage, passions, goals, and priorities
                </p>
              </div>

              <div className="space-y-4">
                {results.map((result, index) => {
                  const Icon = result.icon;
                  return (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className={`border-2 ${index === 0 ? "border-primary" : "border-border/50"}`}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-4">
                              <div className={`p-3 rounded-lg ${result.bgColor}`}>
                                <Icon className={`w-6 h-6 ${result.textColor}`} />
                              </div>
                              <div>
                                <h3 className="font-heading text-xl font-semibold">{result.name}</h3>
                                <p className="text-sm text-muted-foreground">{result.description}</p>
                              </div>
                            </div>
                            <Badge className={`bg-gradient-to-r ${result.color} text-white`}>
                              {result.percentage}% Match
                            </Badge>
                          </div>
                          <Link href={result.link}>
                            <Button className="w-full gap-2">
                              Explore {result.name}
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              <div className="text-center pt-8">
                <Button variant="outline" onClick={handleRetake} className="gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Retake Quiz
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
