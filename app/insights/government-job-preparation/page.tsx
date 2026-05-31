import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, BookOpen, Target, Calendar, Award } from "lucide-react";

export default function GovernmentJobPreparationArticle() {
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
            Government Job Preparation
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Complete roadmap for SSC, Banking, Railways, and UPSC exams with study strategies.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
            <h2 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Key Statistics
            </h2>
            <ul className="space-y-2 text-base">
              <li><strong>10-15 lakh</strong> candidates apply for major government exams annually</li>
              <li><strong>1-2%</strong> selection rate in competitive exams like UPSC</li>
              <li><strong>₹25,000-60,000</strong> starting salary for Group B/C posts</li>
              <li><strong>Job security + pension</strong> are major attractions for government jobs</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Major Government Exams</h2>
          <p className="text-muted-foreground mb-4">
            Understanding the exam landscape helps you choose the right path.
          </p>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                1. SSC (Staff Selection Commission)
              </h3>
              <p className="text-muted-foreground mb-3">
                Recruits for various ministries and departments of the Government of India.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>SSC CGL:</strong> Group B and C posts, salary ₹35,000-60,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>SSC CHSL:</strong> LDC, DEO, PA/SA posts, salary ₹25,000-35,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Syllabus:</strong> Reasoning, Quantitative Aptitude, English, General Awareness</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Preparation time:</strong> 6-12 months for serious aspirants</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                2. Banking Exams (IBPS, SBI)
              </h3>
              <p className="text-muted-foreground mb-3">
                Bank PO and Clerk positions with good career growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>IBPS PO:</strong> Probationary Officer, salary ₹40,000-55,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>IBPS Clerk:</strong> Clerk positions, salary ₹25,000-35,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Syllabus:</strong> Reasoning, Quant, English, General Awareness, Computer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Preparation time:</strong> 4-8 months</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                3. Railways (RRB)
              </h3>
              <p className="text-muted-foreground mb-3">
                Large recruitment body with diverse technical and non-technical posts.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>RRB NTPC:</strong> Non-technical popular categories, salary ₹35,000+</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>RRB Group D:</strong> Level 1 posts, salary ₹18,000-25,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Syllabus:</strong> Mathematics, General Intelligence, General Science, GK</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Preparation time:</strong> 3-6 months</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                4. UPSC Civil Services
              </h3>
              <p className="text-muted-foreground mb-3">
                The most prestigious exam for IAS, IPS, IFS officers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Posts:</strong> IAS, IPS, IFS, IRS, and other Group A services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Salary:</strong> ₹56,100-2,50,000 (with allowances and growth)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Syllabus:</strong> GS, CSAT, Optional Subject, Essay, Interview</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Preparation time:</strong> 1-2 years (serious commitment required)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Study Strategy</h2>
          
          <div className="bg-muted/50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Foundation Building (First 2 months)
            </h3>
            <ul className="space-y-2">
              <li>• Understand complete syllabus and exam pattern</li>
              <li>• Build basics in Mathematics (up to 10th level)</li>
              <li>• Start reading newspaper daily for current affairs</li>
              <li>• Create a study timetable with 6-8 hours daily</li>
              <li>• Join test series for regular practice</li>
            </ul>
          </div>

          <div className="bg-muted/50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Subject-wise Preparation
            </h3>
            <ul className="space-y-3">
              <li>• <strong>Quantitative Aptitude:</strong> Focus on arithmetic, algebra, geometry, trigonometry</li>
              <li>• <strong>Reasoning:</strong> Practice puzzles, series, analogy, coding-decoding</li>
              <li>• <strong>English:</strong> Grammar, vocabulary, comprehension, cloze test</li>
              <li>• <strong>General Awareness:</strong> Current affairs (last 6 months), static GK</li>
              <li>• <strong>Computer Knowledge:</strong> Basics, MS Office, internet concepts</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Recommended Resources</h2>
          <ul className="space-y-2 mb-8">
            <li>• <strong>Books:</strong> RS Aggarwal (Quant), MK Pandey (Reasoning), SP Bakshi (English)</li>
            <li>• <strong>Current Affairs:</strong> The Hindu, PIB, Yojana magazine</li>
            <li>• <strong>Online:</strong> Testbook, Adda247, Oliveboard for mock tests</li>
            <li>• <strong>YouTube:</strong> Study IQ, Mahendras, Gradeup for free classes</li>
            <li>• <strong>Previous Papers:</strong> Last 5-10 years&apos; papers are essential</li>
          </ul>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Exam Calendar & Timeline</h2>
          
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Typical Exam Schedule
            </h3>
            <ul className="space-y-2">
              <li>• <strong>SSC CGL:</strong> Notification in May, Exam in August-October</li>
              <li>• <strong>IBPS PO:</strong> Notification in August, Exam in October-November</li>
              <li>• <strong>RRB NTPC:</strong> Notification in December, Exam in March-April</li>
              <li>• <strong>UPSC CSE:</strong> Notification in February, Prelims in June, Mains in September</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Common Mistakes to Avoid</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Not practicing enough mock tests before the actual exam</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Ignoring current affairs and focusing only on static GK</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Not analyzing previous year papers to understand trends</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Jumping between multiple resources instead of mastering one</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Losing motivation due to long preparation duration</span>
            </li>
          </ul>

          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mt-10">
            <h2 className="font-heading text-xl font-semibold mb-3">Success Tips</h2>
            <ul className="space-y-2">
              <li>• Consistency is key - study every day without fail</li>
              <li>• Join online communities for motivation and peer learning</li>
              <li>• Take regular breaks to avoid burnout</li>
              <li>• Focus on accuracy first, then work on speed</li>
              <li>• Stay updated with exam notifications and changes</li>
              <li>• Believe in yourself - many crack these exams with dedication</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}
