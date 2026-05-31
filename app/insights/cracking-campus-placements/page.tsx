import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Target, BookOpen, Users } from "lucide-react";

export default function CampusPlacementsArticle() {
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
            Cracking Campus Placements
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            A complete guide to ace campus interviews at top Indian companies like TCS, Infosys, Wipro, and startups.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
            <h2 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Key Statistics
            </h2>
            <ul className="space-y-2 text-base">
              <li><strong>85%</strong> of campus placements happen through aptitude + technical rounds</li>
              <li><strong>TCS, Infosys, Wipro</strong> hire 200,000+ freshers annually</li>
              <li><strong>₹3-8 LPA</strong> is the typical fresher package at mass recruiters</li>
              <li><strong>₹12-25 LPA</strong> at product-based companies like Google, Amazon</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Understanding the Process</h2>
          <p className="text-muted-foreground mb-4">
            Campus placements typically follow a structured 3-4 round process. Understanding each stage helps you prepare systematically.
          </p>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3">Round 1: Aptitude Test</h3>
              <p className="text-muted-foreground mb-3">
                Most companies start with an online aptitude test covering quantitative aptitude, logical reasoning, and verbal ability.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Practice 50+ questions daily on topics like percentages, ratios, time-speed-distance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Focus on accuracy over speed initially, then improve time management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Use platforms like IndiaBIX, Testbook, and company-specific previous year papers</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3">Round 2: Technical Interview</h3>
              <p className="text-muted-foreground mb-3">
                This round tests your programming knowledge, problem-solving skills, and understanding of core concepts.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Master at least one programming language (C++, Java, or Python)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Practice 100+ coding problems on arrays, strings, and basic algorithms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Understand OOP concepts, data structures, and basic database knowledge</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3">Round 3: HR Interview</h3>
              <p className="text-muted-foreground mb-3">
                The final round assesses your communication skills, cultural fit, and career goals.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Prepare answers for common questions: &ldquo;Tell me about yourself,&rdquo; &ldquo;Why this company?&rdquo;</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Research the company&apos;s products, values, and recent news</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Be honest about your strengths and areas for improvement</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Preparation Timeline</h2>
          
          <div className="bg-muted/50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              3 Months Before Placement Season
            </h3>
            <ul className="space-y-2">
              <li>• Complete aptitude basics (quantitative, logical, verbal)</li>
              <li>• Learn fundamental data structures (arrays, linked lists, stacks, queues)</li>
              <li>• Start solving 2-3 coding problems daily</li>
              <li>• Build 1-2 small projects to showcase practical skills</li>
            </ul>
          </div>

          <div className="bg-muted/50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              1 Month Before Placement Season
            </h3>
            <ul className="space-y-2">
              <li>• Solve previous year papers of target companies</li>
              <li>• Practice mock interviews with friends or online platforms</li>
              <li>• Prepare a 2-minute self-introduction</li>
              <li>• Update your resume with projects and achievements</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Common Mistakes to Avoid</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Not researching the company before the interview</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Leaving preparation to the last week</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Not asking questions at the end of the interview</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Giving up on a coding problem without attempting a solution</span>
            </li>
          </ul>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Recommended Resources</h2>
          <ul className="space-y-2 mb-8">
            <li>• <strong>GeeksforGeeks</strong> - Comprehensive DSA and interview preparation</li>
            <li>• <strong>LeetCode</strong> - Practice coding problems</li>
            <li>• <strong>IndiaBIX</strong> - Aptitude question bank</li>
            <li>• <strong>CareerRide</strong> - HR interview questions and answers</li>
          </ul>

          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mt-10">
            <h2 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Final Tips
            </h2>
            <ul className="space-y-2">
              <li>• Stay confident - companies hire for potential, not just current knowledge</li>
              <li>• Network with seniors who have been placed for insider tips</li>
              <li>• Apply to multiple companies to increase your chances</li>
              <li>• Keep learning even after rejection - each interview is practice</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}
