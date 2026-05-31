"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AnalyzePage() {
  const [file, setFile] = useState<File | null>(null);
  const [targetRole, setTargetRole] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [resumeText, setResumeText] = useState("");

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
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-12">
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
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Analyze Your Resume
              </h1>
              <p className="text-lg text-muted-foreground">
                Upload your resume and target role to get AI-powered career insights
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Upload Resume</CardTitle>
                <CardDescription>
                  Drag and drop your PDF resume or click to browse
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
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

                <div className="space-y-2">
                  <label className="text-sm font-medium">Target Role</label>
                  <Input
                    placeholder="e.g., Senior Software Engineer, Product Manager"
                    value={targetRole}
                    onChange={(e) => setTargetRole(e.target.value)}
                    className="bg-background"
                  />
                </div>

                <Button
                  onClick={handleAnalyze}
                  disabled={!file || !targetRole || analyzing}
                  className="w-full"
                  size="lg"
                >
                  {analyzing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    "Analyze Resume"
                  )}
                </Button>
              </CardContent>
            </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
