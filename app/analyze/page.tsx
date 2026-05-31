"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, Loader2, ArrowLeft, CheckCircle, Link as LinkIcon, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function AnalyzePage() {
  const [file, setFile] = useState<File | null>(null);
  const [targetRole, setTargetRole] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [resumeText, setResumeText] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState<string>(() => 
    typeof window !== "undefined" ? localStorage.getItem("linkedinUrl") || "" : ""
  );
  const [inputMethod, setInputMethod] = useState<"pdf" | "text">("pdf");

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const selectedFile = acceptedFiles[0];
        setFile(selectedFile);
        
        // Extract text from PDF
        const text = await extractTextFromPDF(selectedFile);
        setResumeText(text);
      }
    },
  });

  const extractTextFromPDF = async (file: File): Promise<string> => {
    const pdfjsLib = await import("pdfjs-dist");
    pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
    
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
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
  };

  const handleAnalyze = async () => {
    if (!file || !targetRole || !resumeText) return;
    
    setAnalyzing(true);
    
    // Store data in localStorage for results page
    localStorage.setItem("resumeText", resumeText);
    localStorage.setItem("targetRole", targetRole);
    localStorage.setItem("fileName", file.name);
    
    // Navigate to results
    window.location.href = "/results";
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
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
                    {/* LinkedIn URL Display */}
                    {linkedinUrl && (
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-start gap-3">
                          <LinkIcon className="w-5 h-5 text-blue-500 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-blue-900">LinkedIn Profile</p>
                            <p className="text-sm text-blue-700">{linkedinUrl}</p>
                            <p className="text-xs text-blue-600 mt-1">
                              <AlertCircle className="w-3 h-3 inline mr-1" />
                              LinkedIn restricts automated access. Please paste your resume text below.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

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
                      <label className="text-sm font-medium">What job are you targeting?</label>
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
                      disabled={(!file && !resumeText) || !targetRole || analyzing}
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
