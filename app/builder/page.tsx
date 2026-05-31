"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ChevronRight, 
  ChevronLeft, 
  User, 
  GraduationCap, 
  Briefcase, 
  Wrench, 
  Award,
  Sparkles,
  CheckCircle,
  Download
} from "lucide-react";

const steps = [
  { id: "personal", title: "Personal Info", icon: User },
  { id: "education", title: "Education", icon: GraduationCap },
  { id: "experience", title: "Experience", icon: Briefcase },
  { id: "skills", title: "Skills", icon: Wrench },
  { id: "projects", title: "Projects", icon: Award },
];

const tips = {
  personal: "Keep it professional. Use your full name and a professional email.",
  education: "List your most recent education first. Include CGPA if it's above 7.0.",
  experience: "Don't have job experience? Include internships, part-time jobs, or volunteer work!",
  skills: "Mix technical skills (Python, React) with soft skills (Communication, Leadership).",
  projects: "Projects show initiative. Even coursework projects count!",
};

export default function BuilderPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    education: [{ degree: "", school: "", year: "", cgpa: "" }],
    experience: [{ title: "", company: "", duration: "", description: "" }],
    skills: "",
    projects: [{ name: "", description: "", technologies: "" }],
  });
  const [showPreview, setShowPreview] = useState(false);

  const updateField = (field: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowPreview(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const CurrentIcon = steps[currentStep].icon;
  const currentTip = tips[steps[currentStep].id as keyof typeof tips];

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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
              Build Your Resume
            </h1>
            <p className="text-muted-foreground">
              Step-by-step guide to create a professional resume
            </p>
          </motion.div>

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
                    <step.icon className="w-5 h-5" />
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
            {!showPreview ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <CurrentIcon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle>{steps[currentStep].title}</CardTitle>
                        <CardDescription>{currentTip}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {currentStep === 0 && (
                      <div className="grid gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Full Name *</label>
                          <Input
                            placeholder="e.g., Rahul Sharma"
                            value={formData.fullName}
                            onChange={(e) => updateField("fullName", e.target.value)}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Email *</label>
                            <Input
                              type="email"
                              placeholder="rahul@email.com"
                              value={formData.email}
                              onChange={(e) => updateField("email", e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Phone</label>
                            <Input
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={(e) => updateField("phone", e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Location</label>
                          <Input
                            placeholder="e.g., Bangalore, India"
                            value={formData.location}
                            onChange={(e) => updateField("location", e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">LinkedIn</label>
                          <Input
                            placeholder="linkedin.com/in/yourprofile"
                            value={formData.linkedin}
                            onChange={(e) => updateField("linkedin", e.target.value)}
                          />
                        </div>
                      </div>
                    )}

                    {currentStep === 1 && (
                      <div className="space-y-4">
                        {formData.education.map((edu, index) => (
                          <div key={index} className="p-4 border rounded-lg space-y-3">
                            <div>
                              <label className="text-sm font-medium mb-2 block">Degree</label>
                              <Input
                                placeholder="e.g., B.Tech in Computer Science"
                                value={edu.degree}
                                onChange={(e) => {
                                  const newEdu = [...formData.education];
                                  newEdu[index].degree = e.target.value;
                                  updateField("education", newEdu);
                                }}
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">School/University</label>
                              <Input
                                placeholder="e.g., IIT Delhi"
                                value={edu.school}
                                onChange={(e) => {
                                  const newEdu = [...formData.education];
                                  newEdu[index].school = e.target.value;
                                  updateField("education", newEdu);
                                }}
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium mb-2 block">Year</label>
                                <Input
                                  placeholder="2020-2024"
                                  value={edu.year}
                                  onChange={(e) => {
                                    const newEdu = [...formData.education];
                                    newEdu[index].year = e.target.value;
                                    updateField("education", newEdu);
                                  }}
                                />
                              </div>
                              <div>
                                <label className="text-sm font-medium mb-2 block">CGPA/Percentage</label>
                                <Input
                                  placeholder="8.5 / 85%"
                                  value={edu.cgpa}
                                  onChange={(e) => {
                                    const newEdu = [...formData.education];
                                    newEdu[index].cgpa = e.target.value;
                                    updateField("education", newEdu);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-4">
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            💡 No formal experience? List internships, freelance work, or even significant academic projects!
                          </p>
                        </div>
                        {formData.experience.map((exp, index) => (
                          <div key={index} className="p-4 border rounded-lg space-y-3">
                            <div>
                              <label className="text-sm font-medium mb-2 block">Title/Role</label>
                              <Input
                                placeholder="e.g., Software Intern"
                                value={exp.title}
                                onChange={(e) => {
                                  const newExp = [...formData.experience];
                                  newExp[index].title = e.target.value;
                                  updateField("experience", newExp);
                                }}
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">Company/Organization</label>
                              <Input
                                placeholder="e.g., Google / College Club"
                                value={exp.company}
                                onChange={(e) => {
                                  const newExp = [...formData.experience];
                                  newExp[index].company = e.target.value;
                                  updateField("experience", newExp);
                                }}
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">Duration</label>
                              <Input
                                placeholder="e.g., May 2023 - Aug 2023"
                                value={exp.duration}
                                onChange={(e) => {
                                  const newExp = [...formData.experience];
                                  newExp[index].duration = e.target.value;
                                  updateField("experience", newExp);
                                }}
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">Description</label>
                              <Textarea
                                placeholder="Describe what you did and achievements..."
                                value={exp.description}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                  const newExp = [...formData.experience];
                                  newExp[index].description = e.target.value;
                                  updateField("experience", newExp);
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Skills (comma separated)</label>
                          <Textarea
                            placeholder="e.g., JavaScript, Python, React, Communication, Leadership, Problem Solving"
                            value={formData.skills}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateField("skills", e.target.value)}
                            className="min-h-[120px]"
                          />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Technical</Badge>
                          <Badge variant="secondary">Communication</Badge>
                          <Badge variant="secondary">Leadership</Badge>
                          <Badge variant="secondary">Problem Solving</Badge>
                          <Badge variant="secondary">Teamwork</Badge>
                          <Badge variant="secondary">Time Management</Badge>
                        </div>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className="space-y-4">
                        {formData.projects.map((proj, index) => (
                          <div key={index} className="p-4 border rounded-lg space-y-3">
                            <div>
                              <label className="text-sm font-medium mb-2 block">Project Name</label>
                              <Input
                                placeholder="e.g., E-commerce Website"
                                value={proj.name}
                                onChange={(e) => {
                                  const newProj = [...formData.projects];
                                  newProj[index].name = e.target.value;
                                  updateField("projects", newProj);
                                }}
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">Description</label>
                              <Textarea
                                placeholder="What does this project do? What problem does it solve?"
                                value={proj.description}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                  const newProj = [...formData.projects];
                                  newProj[index].description = e.target.value;
                                  updateField("projects", newProj);
                                }}
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">Technologies Used</label>
                              <Input
                                placeholder="e.g., React, Node.js, MongoDB"
                                value={proj.technologies}
                                onChange={(e) => {
                                  const newProj = [...formData.projects];
                                  newProj[index].technologies = e.target.value;
                                  updateField("projects", newProj);
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex justify-between pt-4">
                      <Button
                        variant="outline"
                        onClick={prevStep}
                        disabled={currentStep === 0}
                      >
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Previous
                      </Button>
                      <Button onClick={nextStep}>
                        {currentStep === steps.length - 1 ? (
                          <>
                            Preview Resume
                            <CheckCircle className="w-4 h-4 ml-2" />
                          </>
                        ) : (
                          <>
                            Next Step
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <Card className="border-2 border-primary/20">
                  <CardHeader className="text-center">
                    <CardTitle className="font-heading text-2xl">Your Resume Preview</CardTitle>
                    <CardDescription>
                      Here&apos;s your professional resume! You can download it or go back to make changes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                      {/* Resume Preview */}
                      <div className="space-y-6">
                        <div className="text-center border-b-2 border-gray-200 pb-4">
                          <h2 className="text-2xl font-bold text-gray-900">{formData.fullName || "Your Name"}</h2>
                          <p className="text-sm text-gray-600 mt-1">
                            {formData.email} {formData.phone && `| ${formData.phone}`}
                          </p>
                          <p className="text-sm text-gray-600">
                            {formData.location} {formData.linkedin && `| ${formData.linkedin}`}
                          </p>
                        </div>

                        {formData.education[0].degree && (
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 mb-2">Education</h3>
                            {formData.education.map((edu, i) => (
                              <div key={i} className="mb-2">
                                <div className="flex justify-between">
                                  <span className="font-medium">{edu.degree}</span>
                                  <span className="text-sm text-gray-600">{edu.year}</span>
                                </div>
                                <p className="text-sm text-gray-600">{edu.school}</p>
                                {edu.cgpa && <p className="text-sm text-gray-500">CGPA: {edu.cgpa}</p>}
                              </div>
                            ))}
                          </div>
                        )}

                        {formData.experience[0].title && (
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 mb-2">Experience</h3>
                            {formData.experience.map((exp, i) => (
                              <div key={i} className="mb-2">
                                <div className="flex justify-between">
                                  <span className="font-medium">{exp.title}</span>
                                  <span className="text-sm text-gray-600">{exp.duration}</span>
                                </div>
                                <p className="text-sm text-gray-600">{exp.company}</p>
                                <p className="text-sm text-gray-500 mt-1">{exp.description}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {formData.skills && (
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 mb-2">Skills</h3>
                            <p className="text-sm">{formData.skills}</p>
                          </div>
                        )}

                        {formData.projects[0].name && (
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 mb-2">Projects</h3>
                            {formData.projects.map((proj, i) => (
                              <div key={i} className="mb-2">
                                <span className="font-medium">{proj.name}</span>
                                {proj.technologies && (
                                  <span className="text-sm text-gray-500"> — {proj.technologies}</span>
                                )}
                                <p className="text-sm text-gray-600 mt-1">{proj.description}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                      <Button variant="outline" onClick={() => setShowPreview(false)}>
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Edit Resume
                      </Button>
                      <Button onClick={() => alert("Download feature coming soon!")}>
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
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
