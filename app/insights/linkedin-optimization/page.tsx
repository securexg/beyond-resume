import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Users, Target, Award, Briefcase } from "lucide-react";

export default function LinkedInOptimizationArticle() {
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
            LinkedIn Profile Optimization
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            How to create a LinkedIn profile that attracts recruiters from Indian and global companies.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
            <h2 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Key Statistics
            </h2>
            <ul className="space-y-2 text-base">
              <li><strong>87%</strong> of recruiters use LinkedIn to vet candidates</li>
              <li><strong>40x</strong> more likely to get opportunities with a complete profile</li>
              <li><strong>6 seconds</strong> is all you have to make a first impression</li>
              <li><strong>Profiles with photos</strong> get 21x more views and 36x more messages</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Profile Photo & Banner</h2>
          <p className="text-muted-foreground mb-4">
            Your visual elements are the first things recruiters notice.
          </p>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                1. Profile Photo
              </h3>
              <p className="text-muted-foreground mb-3">
                A professional headshot builds trust and credibility.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Use a clear, well-lit photo with a plain background</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Dress professionally (formal or smart casual)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Face the camera directly with a friendly expression</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Avoid selfies, group photos, or casual photos</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                2. Banner Image
              </h3>
              <p className="text-muted-foreground mb-3">
                Your banner is prime real estate to showcase your brand.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Use dimensions 1584 x 396 pixels for optimal display</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Showcase your work, achievements, or industry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Include your tagline or value proposition</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Keep it professional and visually appealing</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Headline & About Section</h2>
          
          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                3. Headline
              </h3>
              <p className="text-muted-foreground mb-3">
                Your headline appears in search results - make it count.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Include your role, key skills, and value proposition</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Use keywords recruiters search for in your industry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Example: &ldquo;Software Engineer | React, Node.js, AWS | Building scalable web applications&rdquo;</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Keep it under 220 characters for full visibility</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                4. About Section
              </h3>
              <p className="text-muted-foreground mb-3">
                Tell your story and what makes you unique.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Write in first person, be authentic and personable</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Include your passion, career goals, and key achievements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Mention specific skills and technologies you work with</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Add a call-to-action for recruiters to connect</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Experience & Education</h2>
          
          <div className="bg-muted/50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4">Experience Section Tips</h3>
            <ul className="space-y-2">
              <li>• Use bullet points to describe achievements, not just responsibilities</li>
              <li>• Quantify results with numbers where possible (e.g., &ldquo;Increased sales by 30%&rdquo;)</li>
              <li>• Include relevant keywords for ATS and search optimization</li>
              <li>• Add media (links, documents, images) to showcase work</li>
              <li>• Keep descriptions concise but impactful</li>
            </ul>
          </div>

          <div className="bg-muted/50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4">Education Section Tips</h3>
            <ul className="space-y-2">
              <li>• Include degree, institution, and graduation year</li>
              <li>• Add relevant coursework, projects, and achievements</li>
              <li>• Mention honors, awards, or scholarships</li>
              <li>• Link to thesis, projects, or publications if applicable</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Skills & Endorsements</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Add 15-25 relevant skills to your profile</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Prioritize skills in your target industry/role</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Request endorsements from colleagues, managers, and clients</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Take LinkedIn skill assessments to earn badges</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Remove outdated or irrelevant skills</span>
            </li>
          </ul>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Recommendations</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Request recommendations from managers, colleagues, and clients</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Write recommendations for others to receive them in return</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Aim for 3-5 strong recommendations from different perspectives</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Keep recommendations specific and detailed</span>
            </li>
          </ul>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Activity & Engagement</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Post regularly (1-2 times per week) about industry insights</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Comment thoughtfully on posts in your industry</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Share relevant articles with your perspective</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Join and participate in relevant groups</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Engage with recruiters and companies you&apos;re interested in</span>
            </li>
          </ul>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Common Mistakes to Avoid</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Using a casual or unprofessional photo</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Leaving the headline as default job title</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Writing the About section in third person</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Not updating profile regularly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Being inactive on the platform</span>
            </li>
          </ul>

          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mt-10">
            <h2 className="font-heading text-xl font-semibold mb-3">Profile Completeness Checklist</h2>
            <ul className="space-y-2">
              <li>• Professional profile photo</li>
              <li>• Custom banner image</li>
              <li>• Compelling headline with keywords</li>
              <li>• Detailed About section</li>
              <li>• Complete work experience</li>
              <li>• Education details</li>
              <li>• 15+ relevant skills</li>
              <li>• 3+ recommendations</li>
              <li>• Custom URL (linkedin.com/in/yourname)</li>
              <li>• Contact information visible</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}
