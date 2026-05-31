import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Target, TrendingUp, DollarSign, Briefcase } from "lucide-react";

export default function SalaryNegotiationArticle() {
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
            Salary Negotiation in India
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Tips for negotiating salary at Indian companies - understanding market rates and benefits.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
            <h2 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Key Statistics
            </h2>
            <ul className="space-y-2 text-base">
              <li><strong>70%</strong> of candidates who negotiate get a higher offer</li>
              <li><strong>10-20%</strong> average increase from successful negotiation</li>
              <li><strong>₹5-10 LPA</strong> typical negotiation range for mid-level roles</li>
              <li><strong>Never accept the first offer</strong> - there&apos;s always room for discussion</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Research Before Negotiating</h2>
          <p className="text-muted-foreground mb-4">
            Knowledge is power. Research market rates before any negotiation.
          </p>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                1. Market Research
              </h3>
              <p className="text-muted-foreground mb-3">
                Use multiple sources to understand fair compensation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Glassdoor:</strong> Company-specific salary data and reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>LinkedIn Salary:</strong> Industry benchmarks and role-specific data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Payscale:</strong> Detailed compensation analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>AmbitionBox:</strong> India-specific salary data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Network with peers in similar roles for real insights</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                2. Understand Total Compensation
              </h3>
              <p className="text-muted-foreground mb-3">
                Salary is more than just the CTC figure.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Fixed Component:</strong> Base salary (usually 40-60% of CTC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Variable Component:</strong> Performance bonus, incentives</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Benefits:</strong> Health insurance, ESOPs, gratuity, PF</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Perks:</strong> Work from home, learning budget, meals</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Negotiation Strategies</h2>
          
          <div className="bg-muted/50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4">When to Negotiate</h3>
            <ul className="space-y-2">
              <li>• After receiving a written offer (not before)</li>
              <li>• When you have multiple offers (leverage)</li>
              <li>• When you have unique skills or experience</li>
              <li>• When the offer is below market rate</li>
              <li>• During performance reviews for existing employees</li>
            </ul>
          </div>

          <div className="bg-muted/50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4">How to Negotiate</h3>
            <ul className="space-y-2">
              <li>• Express enthusiasm for the role first</li>
              <li>• Present your research and market data</li>
              <li>• Highlight your unique value and achievements</li>
              <li>• Ask for a specific range, not a single number</li>
              <li>• Be prepared to compromise on other benefits</li>
              <li>• Stay professional and positive throughout</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Sample Negotiation Scripts</h2>
          
          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Script 1: Below Market Rate
              </h3>
              <p className="text-muted-foreground italic mb-3">
                &ldquo;Thank you for the offer. I&apos;m very excited about this opportunity and the team. Based on my research of similar roles in the industry, the market rate for this position is typically between X and Y. Given my experience in [specific skill] and the value I can bring to [specific project], I was hoping we could discuss a compensation closer to that range.&rdquo;
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Script 2: Multiple Offers
              </h3>
              <p className="text-muted-foreground italic mb-3">
                &ldquo;I really appreciate the offer and I&apos;m genuinely interested in joining your team. I have received another offer with a compensation of X. However, I prefer your company because of [specific reason]. Is there any flexibility to match or come closer to that offer?&rdquo;
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Script 3: Negotiating Benefits
              </h3>
              <p className="text-muted-foreground italic mb-3">
                &ldquo;I understand the constraints on the base salary. If we can&apos;t adjust that, could we discuss other aspects of the compensation package? For example, a higher signing bonus, more ESOPs, or an accelerated performance review cycle?&rdquo;
              </p>
            </CardContent>
          </Card>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Company-Specific Tips</h2>
          
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4">Product Companies (Google, Amazon, Flipkart)</h3>
            <ul className="space-y-2">
              <li>• Higher base salary + significant ESOP component</li>
              <li>• Negotiate ESOP vesting period and grant size</li>
              <li>• Ask about refresh grants and growth potential</li>
              <li>• Consider long-term value over immediate cash</li>
            </ul>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4">Service Companies (TCS, Infosys, Wipro)</h3>
            <ul className="space-y-2">
              <li>• Fixed structure with limited negotiation room</li>
              <li>• Focus on joining bonus and designation</li>
              <li>• Negotiate project allocation and location</li>
              <li>• Ask about onsite opportunities</li>
            </ul>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4">Startups</h3>
            <ul className="space-y-2">
              <li>• Lower cash, higher equity potential</li>
              <li>• Understand valuation and exit scenarios</li>
              <li>• Negotiate ESOP percentage, not just number</li>
              <li>• Ask about liquidation preferences</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Common Mistakes to Avoid</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Accepting the first offer without discussion</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Negotiating before receiving a formal offer</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Being aggressive or demanding</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Lying about other offers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Focusing only on CTC, not take-home salary</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✗</span>
              <span>Not getting everything in writing</span>
            </li>
          </ul>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Benefits Worth Negotiating</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Signing bonus (one-time cash)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Performance bonus structure and percentage</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>ESOP grant size and vesting schedule</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Work from home / remote work flexibility</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Learning and development budget</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Accelerated promotion cycle</span>
            </li>
          </ul>

          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mt-10">
            <h2 className="font-heading text-xl font-semibold mb-3">Final Tips</h2>
            <ul className="space-y-2">
              <li>• Practice your negotiation script with a friend</li>
              <li>• Be prepared for any outcome - have a walk-away point</li>
              <li>• Get the final offer in writing before accepting</li>
              <li>• Remember that negotiation is a normal business process</li>
              <li>• Maintain professionalism regardless of the outcome</li>
              <li>• Your worth is not defined by the negotiation result</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}
