"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, CheckCircle, XCircle, TrendingUp, DollarSign, Target } from "lucide-react";
import Link from "next/link";

interface AnalysisResult {
  atsScore: number;
  keywordGaps: string[];
  strengths: string[];
  weaknesses: string[];
  skillRoadmap: {
    missingSkills: string[];
    learningResources: { skill: string; resource: string; timeEstimate: string }[];
    priority: "high" | "medium" | "low";
  };
  hiringProbability: {
    score: number;
    breakdown: {
      skillsMatch: number;
      experience: number;
      education: number;
      overall: number;
    };
    reasoning: string;
  };
  salaryRange: {
    min: number;
    max: number;
    average: number;
    context: string;
  };
  rewriteSuggestions: string[];
}

export default function ResultsPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<AnalysisResult | null>(null);
  const [targetRole, setTargetRole] = useState("");

  useEffect(() => {
    const analyzeResume = async () => {
      try {
        const resumeText = localStorage.getItem("resumeText");
        const role = localStorage.getItem("targetRole");
        
        if (!resumeText || !role) {
          setError("No resume data found. Please upload your resume first.");
          setLoading(false);
          return;
        }

        setTargetRole(role);

        const response = await fetch("/api/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ resumeText, targetRole: role }),
        });

        if (!response.ok) {
          throw new Error("Failed to analyze resume");
        }

        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    analyzeResume();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background font-sans flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 animate-spin mx-auto text-primary" />
          <p className="text-lg text-muted-foreground">Analyzing your resume...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background font-sans flex items-center justify-center px-4">
        <Card className="max-w-md border-destructive/50">
          <CardHeader>
            <CardTitle className="text-destructive">Error</CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/analyze">
              <Button variant="outline">Try Again</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="relative px-4 py-12">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                  Analysis Results
                </h1>
                <p className="text-lg text-muted-foreground">
                  Target Role: {targetRole}
                </p>
              </div>
              <Link href="/analyze">
                <Button variant="outline" size="lg">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  New Analysis
                </Button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Card className="border-border/50 bg-card/50 backdrop-blur h-full transition-shadow hover:shadow-lg hover:shadow-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Resume Analyzer
                    </CardTitle>
                    <CardDescription>ATS Score & Keyword Analysis</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-primary mb-2">
                        {data.atsScore}%
                      </div>
                      <p className="text-sm text-muted-foreground">ATS Compatibility Score</p>
                    </div>
                    <Progress value={data.atsScore} className="h-2" />
                    <div className="space-y-2">
                      <p className="font-medium text-sm">Strengths</p>
                      <div className="flex flex-wrap gap-2">
                        {data.strengths.map((strength, i) => (
                          <Badge key={i} variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/20">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {strength}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium text-sm">Weaknesses</p>
                      <div className="flex flex-wrap gap-2">
                        {data.weaknesses.map((weakness, i) => (
                          <Badge key={i} variant="secondary" className="bg-red-500/10 text-red-500 border-red-500/20">
                            <XCircle className="w-3 h-3 mr-1" />
                            {weakness}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium text-sm">Missing Keywords</p>
                      <div className="flex flex-wrap gap-2">
                        {data.keywordGaps.map((gap, i) => (
                          <Badge key={i} variant="outline">
                            {gap}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Card className="border-border/50 bg-card/50 backdrop-blur h-full transition-shadow hover:shadow-lg hover:shadow-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      Skill Gap Roadmap
                    </CardTitle>
                    <CardDescription>Learning Path & Resources</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Badge
                      variant={data.skillRoadmap.priority === "high" ? "destructive" : data.skillRoadmap.priority === "medium" ? "default" : "secondary"}
                    >
                      Priority: {data.skillRoadmap.priority}
                    </Badge>
                    <div className="space-y-2">
                      <p className="font-medium text-sm">Missing Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {data.skillRoadmap.missingSkills.map((skill, i) => (
                          <Badge key={i} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="font-medium text-sm">Learning Resources</p>
                      {data.skillRoadmap.learningResources.map((resource, i) => (
                        <div key={i} className="p-3 rounded-lg bg-background/50 border border-border/50">
                          <p className="font-medium text-sm">{resource.skill}</p>
                          <p className="text-xs text-muted-foreground mt-1">{resource.resource}</p>
                          <Badge variant="outline" className="mt-2 text-xs">
                            {resource.timeEstimate}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Card className="border-border/50 bg-card/50 backdrop-blur h-full transition-shadow hover:shadow-lg hover:shadow-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-primary" />
                      Hiring Probability
                    </CardTitle>
                    <CardDescription>Match Score & Salary Insights</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-primary mb-2">
                        {data.hiringProbability.score}%
                      </div>
                      <p className="text-sm text-muted-foreground">Hiring Probability</p>
                    </div>
                    <Progress value={data.hiringProbability.score} className="h-2" />
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Skills Match</span>
                        <span className="text-sm font-medium">{data.hiringProbability.breakdown.skillsMatch}%</span>
                      </div>
                      <Progress value={data.hiringProbability.breakdown.skillsMatch} className="h-1" />
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Experience</span>
                        <span className="text-sm font-medium">{data.hiringProbability.breakdown.experience}%</span>
                      </div>
                      <Progress value={data.hiringProbability.breakdown.experience} className="h-1" />
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Education</span>
                        <span className="text-sm font-medium">{data.hiringProbability.breakdown.education}%</span>
                      </div>
                      <Progress value={data.hiringProbability.breakdown.education} className="h-1" />
                    </div>
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <p className="text-sm font-medium mb-1">Expected Salary Range</p>
                      <p className="text-2xl font-bold">
                        ₹{data.salaryRange.min} - ₹{data.salaryRange.max} LPA
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{data.salaryRange.context}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur transition-shadow hover:shadow-lg hover:shadow-primary/5">
                <CardHeader>
                  <CardTitle>Rewrite Suggestions</CardTitle>
                  <CardDescription>AI-powered improvements for your resume</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {data.rewriteSuggestions.map((suggestion, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
