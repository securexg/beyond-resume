"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, Loader2, ArrowLeft, CheckCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnalyzePage() {
  const [file, setFile] = useState<File | null>(null);
  const [targetRole, setTargetRole] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [resumeText, setResumeText] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState<string>(() => 
    typeof window !== "undefined" ? localStorage.getItem("linkedinUrl") || "" : ""
  );
  const [inputMethod, setInputMethod] = useState<"pdf" | "text">("pdf");
  const [fetchingLinkedIn, setFetchingLinkedIn] = useState(false);
  const [linkedinError, setLinkedinError] = useState<string | null>(null);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const selectedFile = acceptedFiles[0];
        setFile(selectedFile);
        setPdfError(null);
        
        try {
          // Extract text from PDF
          const text = await extractTextFromPDF(selectedFile);
          setResumeText(text);
        } catch (error) {
          setPdfError(error instanceof Error ? error.message : "Failed to extract text from PDF");
          console.error("PDF extraction error:", error);
        }
      }
    },
  });

  const extractTextFromPDF = async (file: File): Promise<string> => {
    try {
      const pdfjsLib = await import("pdfjs-dist");
      
      // Use local worker file to avoid CDN issues
      pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";
      
      const arrayBuffer = await file.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
      const pdf = await loadingTask.promise;
      
      let text = "";
      
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const pageText = content.items
          .map((item) => ("str" in item ? item.str : ""))
          .join(" ");
        text += pageText + "\n";
      }
      
      return text;
    } catch (error) {
      console.error("PDF extraction detailed error:", error);
      throw new Error(`PDF extraction failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  const fetchLinkedInData = async () => {
    if (!linkedinUrl) {
      setLinkedinError("Please enter a LinkedIn URL");
      return;
    }

    setFetchingLinkedIn(true);
    setLinkedinError(null);

    try {
      const response = await fetch("/api/linkedin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ linkedinUrl }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch LinkedIn data");
      }

      // Populate resume text with extracted data
      setResumeText(data.resumeText);
      setInputMethod("text");
      
      // Update LinkedIn URL in localStorage
      localStorage.setItem("linkedinUrl", linkedinUrl);
    } catch (error) {
      setLinkedinError(error instanceof Error ? error.message : "Failed to fetch LinkedIn data");
    } finally {
      setFetchingLinkedIn(false);
    }
  };

  const handleAnalyze = async () => {
    if (!file && !resumeText) return;
    
    setAnalyzing(true);
    
    // Store data in localStorage for results page
    localStorage.setItem("resumeText", resumeText);
    localStorage.setItem("targetRole", targetRole || "General");
    localStorage.setItem("fileName", file?.name || "Resume Analysis");
    
    // Navigate to results
    window.location.href = "/results";
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
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
            <Link href="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
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
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="pt-16 sm:pt-24 pb-12 px-4">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="relative flex flex-col items-center justify-center py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="w-full max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <CheckCircle className="w-4 h-4" />
                  AI-Powered Analysis
                </div>
                <h1 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                  Analyze Your Resume
                </h1>
                <p className="text-lg text-muted-foreground">
                  Get instant feedback on your resume. Find out what employers see and how to improve.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                <Card className="border-border/50 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="font-heading">Analyze Your Profile</CardTitle>
                    <CardDescription>
                      {linkedinUrl ? "LinkedIn profile detected. Paste your resume text below for analysis." : "Upload your resume or paste text for AI analysis"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* LinkedIn URL Input */}
                    <div className="space-y-3">
                      <label className="text-sm font-medium">LinkedIn Profile URL (Optional)</label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="https://www.linkedin.com/in/yourprofile"
                          value={linkedinUrl}
                          onChange={(e) => setLinkedinUrl(e.target.value)}
                          className="bg-background"
                        />
                        <Button
                          type="button"
                          onClick={fetchLinkedInData}
                          disabled={!linkedinUrl || fetchingLinkedIn}
                          variant="outline"
                        >
                          {fetchingLinkedIn ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            "Fetch"
                          )}
                        </Button>
                      </div>
                      {linkedinError && (
                        <p className="text-sm text-red-500">{linkedinError}</p>
                      )}
                      <p className="text-xs text-muted-foreground">
                        Enter your public LinkedIn URL to automatically extract profile data for analysis.
                      </p>
                    </div>

                    {/* Input Method Toggle */}
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant={inputMethod === "pdf" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setInputMethod("pdf")}
                        className="flex-1"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Upload PDF
                      </Button>
                      <Button
                        type="button"
                        variant={inputMethod === "text" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setInputMethod("text")}
                        className="flex-1"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Paste Text
                      </Button>
                    </div>

                    {/* PDF Upload */}
                    {inputMethod === "pdf" && (
                      <div
                        {...getRootProps()}
                        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                          isDragActive
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <input {...getInputProps()} />
                        {file ? (
                          <div className="flex flex-col items-center gap-2">
                            <FileText className="w-12 h-12 text-primary" />
                            <p className="font-medium">{file.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {(file.size / 1024).toFixed(1)} KB
                            </p>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-2">
                            <Upload className="w-12 h-12 text-muted-foreground" />
                            <p className="font-medium">
                              {isDragActive ? "Drop your resume here" : "Drop your resume here, or click to browse"}
                            </p>
                            <p className="text-sm text-muted-foreground">PDF files only</p>
                          </div>
                        )}
                      </div>
                    )}
                    {pdfError && (
                      <p className="text-sm text-red-500">{pdfError}</p>
                    )}

                    {/* Text Input */}
                    {inputMethod === "text" && (
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Paste your resume text</label>
                        <Textarea
                          placeholder="Copy and paste your resume content here..."
                          value={resumeText}
                          onChange={(e) => setResumeText(e.target.value)}
                          className="bg-background min-h-[200px]"
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <label className="text-sm font-medium">What job are you targeting? <span className="text-muted-foreground font-normal">(Optional)</span></label>
                      <Input
                        placeholder="e.g., Software Engineer, Data Analyst, Product Manager"
                        value={targetRole}
                        onChange={(e) => setTargetRole(e.target.value)}
                        className="bg-background"
                      />
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        💡 <strong>Tip:</strong> First time? No worries! Our AI will guide you on exactly what to add to make your resume stand out.
                      </p>
                    </div>

                    <Button
                      onClick={handleAnalyze}
                      disabled={(!file && !resumeText) || analyzing}
                      className="w-full"
                      size="lg"
                    >
                      {analyzing ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Analyzing with AI...
                        </>
                      ) : (
                        <>
                          Get My Resume Score
                          <CheckCircle className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
