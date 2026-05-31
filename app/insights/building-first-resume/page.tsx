import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, FileText, Code, Award, Target } from "lucide-react";

export default function BuildingFirstResumeArticle() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/insights">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Button>
          </Link>
        </div>

        <article className="prose prose-lg max-w-none">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Building Your First Resume
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Step-by-step guide for freshers with no experience - how to highlight projects, skills, and achievements.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
            <h2 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Key Statistics
            </h2>
            <ul className="space-y-2 text-base">
              <li><strong>75%</strong> of recruiters spend less than 30 seconds scanning a resume</li>
              <li><strong>6 seconds</strong> is the average time to make a first impression</li>
              <li><strong>ATS systems</strong> reject 60% of resumes before human review</li>
              <li><strong>Keywords from job description</strong> increase interview chances by 50%</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Resume Structure for Freshers</h2>
          <p className="text-muted-foreground mb-4">
            As a fresher, your resume should focus on education, projects, and skills rather than work experience.
          </p>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                1. Header Section
              </h3>
              <p className="text-muted-foreground mb-3">
                Your name, contact details, and LinkedIn profile should be clearly visible at the top.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Use a professional email (firstname.lastname@gmail.com)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Include your phone number and city/location</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Add LinkedIn URL with a complete profile</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Optional: GitHub portfolio for tech roles</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                2. Education Section
              </h3>
              <p className="text-muted-foreground mb-3">
                This is your strongest section as a fresher. Highlight relevant coursework and achievements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Include degree, institution, graduation year, and CGPA/percentage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>List relevant coursework (Data Structures, Machine Learning, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Mention academic achievements, scholarships, or ranks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Include final year project details</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                3. Projects Section
              </h3>
              <p className="text-muted-foreground mb-3">
                Projects demonstrate practical skills. Describe them using the STAR method.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>For each project: title, tech stack, and 2-3 bullet points</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Use action verbs: Developed, Implemented, Designed, Created</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Quantify impact: &ldquo;Improved efficiency by 30%&rdquo;</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Include GitHub links or live demos if available</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                4. Skills Section
              </h3>
              <p className="text-muted-foreground mb-3">
                Categorize your skills to make them easy to scan.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Technical Skills: Programming languages, frameworks, tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Soft Skills: Communication, teamwork, problem-solving</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Certifications: Online courses, workshops, certifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Languages: English, Hindi, regional languages</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Writing Effective Bullet Points</h2>
          
          <div className="bg-muted/50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4">Weak vs Strong Examples</h3>
            <div className="space-y-4">
              <div>
                <p className="text-red-500 font-medium mb-1">✗ Weak:</p>
                <p className="text-muted-foreground">Made a website for college events</p>
              </div>
              <div>
                <p className="text-green-500 font-medium mb-1">✓ Strong:</p>
                <p className="text-muted-foreground">Developed a responsive event management website using React and Node.js, serving 500+ students and reducing event registration time by 40%</p>
              </div>
            </div>
          </div>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">ATS Optimization Tips</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Use standard section headings: Education, Experience, Skills, Projects</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Avoid tables, columns, and graphics that confuse ATS parsers</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Include keywords from the job description naturally</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Save as .docx or .pdf (check company requirements)</span>
            </li>
          </ul>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Common Mistakes to Avoid</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Using a generic objective statement instead of a summary</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Including personal details like age, religion, or marital status</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Using passive language (&ldquo;was responsible for&rdquo; instead of &ldquo;led&rdquo;)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Submitting the same resume for every job application</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Exceeding 2 pages for fresher roles</span>
            </li>
          </ul>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Resume Templates & Tools</h2>
          <ul className="space-y-2 mb-8">
            <li>• <strong>Canva</strong> - Free templates with professional designs</li>
            <li>• <strong>Novoresume</strong> - ATS-friendly templates</li>
            <li>• <strong>Resume.io</strong> - Simple, clean templates</li>
            <li>• <strong>Overleaf</strong> - LaTeX templates for technical roles</li>
          </ul>

          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mt-10">
            <h2 className="font-heading text-xl font-semibold mb-3">Final Checklist</h2>
            <ul className="space-y-2">
              <li>• Proofread for spelling and grammar errors</li>
              <li>• Check contact information is correct</li>
              <li>• Ensure consistent formatting throughout</li>
              <li>• Get feedback from mentors or seniors</li>
              <li>• Save in multiple formats (PDF, Word)</li>
              <li>• Customize for each job application</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}
