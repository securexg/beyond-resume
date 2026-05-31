"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ChevronRight, 
  ChevronLeft, 
  Link as LinkIcon, 
  FileText, 
  Wand2,
  Cpu,
  Building2,
  Briefcase,
  Globe,
  TrendingUp,
  DollarSign,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const segments = [
  { id: "tech", name: "Technology", icon: Cpu, color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  { id: "management", name: "Management", icon: Building2, color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
  { id: "design", name: "Design", icon: Briefcase, color: "bg-pink-500/10 text-pink-500 border-pink-500/20" },
  { id: "hr", name: "HR", icon: Globe, color: "bg-green-500/10 text-green-500 border-green-500/20" },
  { id: "marketing", name: "Marketing", icon: TrendingUp, color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
  { id: "finance", name: "Finance", icon: DollarSign, color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
];

const steps = [
  { id: "source", title: "Profile Source", description: "How would you like to provide your profile?" },
  { id: "interests", title: "Career Interests", description: "Select your career segments" },
  { id: "complete", title: "Setup Complete", description: "You're ready to explore" },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [source, setSource] = useState<"linkedin" | "resume" | "build" | null>(null);
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [selectedSegments, setSelectedSegments] = useState<string[]>([]);

  const toggleSegment = (id: string) => {
    setSelectedSegments(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleComplete = () => {
    localStorage.setItem("onboardingComplete", "true");
    localStorage.setItem("selectedSegments", JSON.stringify(selectedSegments));
    localStorage.setItem("profileSource", source || "");
    if (source === "linkedin") {
      localStorage.setItem("linkedinUrl", linkedinUrl);
      // Redirect to analyze page for LinkedIn users
      window.location.href = "/analyze";
    } else if (source === "resume") {
      window.location.href = "/analyze";
    } else {
      window.location.href = "/trends";
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="CareerOS" width={80} height={80} className="rounded-xl shadow-lg" />
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      index <= currentStep
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {index < currentStep ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-12 md:w-24 h-1 mx-2 transition-colors ${
                        index < currentStep ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="source"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl font-semibold">How would you like to start?</CardTitle>
                    <CardDescription>
                      Choose how you want to provide your profile information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div
                      onClick={() => setSource("linkedin")}
                      className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                        source === "linkedin"
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                          <LinkIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">LinkedIn Profile</h3>
                          <p className="text-sm text-muted-foreground">Import from your public LinkedIn profile</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </div>

                    {source === "linkedin" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="p-4 bg-muted/50 rounded-lg space-y-3"
                      >
                        <label className="text-sm font-medium">LinkedIn Public Profile URL</label>
                        <Input
                          placeholder="https://www.linkedin.com/in/yourprofile"
                          value={linkedinUrl}
                          onChange={(e) => setLinkedinUrl(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">
                          Make sure your LinkedIn profile is set to public
                        </p>
                      </motion.div>
                    )}

                    <div
                      onClick={() => setSource("resume")}
                      className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                        source === "resume"
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">Upload Resume</h3>
                          <p className="text-sm text-muted-foreground">Upload your existing resume (PDF)</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </div>

                    <div
                      onClick={() => setSource("build")}
                      className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                        source === "build"
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center">
                          <Wand2 className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">Build Resume</h3>
                          <p className="text-sm text-muted-foreground">Create a new resume with our builder</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <Button variant="ghost" disabled>
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={nextStep} disabled={!source}>
                        Next Step
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                key="interests"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl font-semibold">Select Your Career Interests</CardTitle>
                    <CardDescription>
                      Choose the segments you&apos;re interested in. We&apos;ll show relevant insights and trends.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {segments.map((segment) => (
                        <div
                          key={segment.id}
                          onClick={() => toggleSegment(segment.id)}
                          className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                            selectedSegments.includes(segment.id)
                              ? `${segment.color} border-current`
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl ${segment.color} flex items-center justify-center`}>
                              <segment.icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold">{segment.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                {selectedSegments.includes(segment.id) ? "Selected" : "Click to select"}
                              </p>
                            </div>
                            {selectedSegments.includes(segment.id) && (
                              <CheckCircle className="w-5 h-5 text-primary" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between pt-4">
                      <Button variant="outline" onClick={prevStep}>
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={nextStep} disabled={selectedSegments.length === 0}>
                        Next Step
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="complete"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <CardTitle className="font-heading text-2xl font-semibold">Setup Complete!</CardTitle>
                    <CardDescription>
                      You&apos;re all set to explore personalized career insights
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm">
                          Profile Source: <strong>{source === "linkedin" ? "LinkedIn" : source === "resume" ? "Resume Upload" : "Resume Builder"}</strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm">
                          Career Segments: <strong>{selectedSegments.length} selected</strong>
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <Button onClick={handleComplete} size="lg" className="gap-2">
                        Explore Job Listings
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                      <Link href="/trends">
                        <Button variant="outline" size="lg" className="w-full">
                          View Market Trends
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
