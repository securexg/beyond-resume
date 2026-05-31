import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Code, Target, BookOpen, TrendingUp } from "lucide-react";

export default function MasteringDSAArticle() {
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
            Mastering DSA for Indian Tech Giants
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Essential data structures and algorithms topics for FAANG and top Indian company interviews.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
            <h2 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Key Statistics
            </h2>
            <ul className="space-y-2 text-base">
              <li><strong>200-300</strong> DSA problems typically solved by successful candidates</li>
              <li><strong>45-60 minutes</strong> average time per coding interview round</li>
              <li><strong>Arrays, Strings, Trees</strong> cover 60% of interview questions</li>
              <li><strong>₹20-50 LPA</strong> typical package at product-based companies for strong DSA skills</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Essential Data Structures</h2>
          <p className="text-muted-foreground mb-4">
            Master these data structures before moving to complex algorithms.
          </p>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                1. Arrays & Strings
              </h3>
              <p className="text-muted-foreground mb-3">
                The foundation of DSA. Most interview questions start here.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Two-pointer technique for sorted arrays</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Sliding window for subarray problems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Hash maps for frequency counting and lookups</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>String manipulation: palindrome, anagram, substring</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                2. Linked Lists
              </h3>
              <p className="text-muted-foreground mb-3">
                Test your pointer manipulation and memory management skills.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Reverse a linked list (iterative and recursive)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Detect and remove cycles (Floyd&apos;s algorithm)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Find middle node and nth node from end</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Merge two sorted linked lists</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                3. Stacks & Queues
              </h3>
              <p className="text-muted-foreground mb-3">
                Essential for problems involving order and nested structures.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Valid parentheses and expression evaluation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Implement queue using stacks and vice versa</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Next greater element problems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Monotonic stack for range queries</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                4. Trees & Graphs
              </h3>
              <p className="text-muted-foreground mb-3">
                The most important category for top-tier companies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Tree traversals: inorder, preorder, postorder, level-order</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>BST operations: search, insert, delete, validate</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Graph traversals: BFS, DFS with visited tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Shortest path: Dijkstra, BFS for unweighted graphs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Core Algorithms</h2>
          
          <div className="bg-muted/50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4">Must-Know Algorithms</h3>
            <ul className="space-y-3">
              <li>• <strong>Sorting:</strong> Merge sort, Quick sort (understand implementations)</li>
              <li>• <strong>Searching:</strong> Binary search on arrays and answer spaces</li>
              <li>• <strong>Recursion:</strong> Backtracking, divide and conquer</li>
              <li>• <strong>Dynamic Programming:</strong> Memoization, tabulation, classic patterns</li>
              <li>• <strong>Greedy:</strong> Activity selection, interval scheduling</li>
              <li>• <strong>Hashing:</strong> Collision handling, load factor</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Study Plan & Resources</h2>
          
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Phase 1: Basics (1-2 months)
            </h3>
            <ul className="space-y-2">
              <li>• Complete arrays, strings, and basic math</li>
              <li>• Learn one language deeply (C++, Java, or Python)</li>
              <li>• Solve 50 easy problems on LeetCode</li>
              <li>• Understand time and space complexity (Big O)</li>
            </ul>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Phase 2: Intermediate (2-3 months)
            </h3>
            <ul className="space-y-2">
              <li>• Master linked lists, stacks, queues, trees</li>
              <li>• Learn recursion and backtracking</li>
              <li>• Solve 100 medium problems</li>
              <li>• Start DP with classic problems (fibonacci, knapsack)</li>
            </ul>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Phase 3: Advanced (2-3 months)
            </h3>
            <ul className="space-y-2">
              <li>• Graphs, advanced DP, advanced trees</li>
              <li>• Solve 50 hard problems</li>
              <li>• Practice company-specific questions</li>
              <li>• Mock interviews and timed practice</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Recommended Resources</h2>
          <ul className="space-y-2 mb-8">
            <li>• <strong>LeetCode</strong> - 300+ problems with company tags</li>
            <li>• <strong>GeeksforGeeks</strong> - Comprehensive tutorials and practice</li>
            <li>• <strong>NeetCode.io</strong> - Structured roadmap with 150 problems</li>
            <li>• <strong>Striver&apos;s DSA Sheet</strong> - Popular curated problem list</li>
            <li>• <strong>TakeUForward</strong> - YouTube channel with detailed explanations</li>
          </ul>

          <h2 className="font-heading text-2xl font-semibold mt-10 mb-4">Interview Tips</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Always start with a brute force solution, then optimize</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Think aloud - interviewers want to see your thought process</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Clarify constraints and edge cases before coding</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Write clean, readable code with proper variable names</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Test your code with examples before saying it&apos;s done</span>
            </li>
          </ul>

          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mt-10">
            <h2 className="font-heading text-xl font-semibold mb-3">Company-Specific Focus</h2>
            <ul className="space-y-2">
              <li>• <strong>Google/Amazon:</strong> Heavy on graphs, trees, DP, system design</li>
              <li>• <strong>Meta:</strong> Arrays, strings, medium-level DP</li>
              <li>• <strong>Flipkart/Swiggy/Zomato:</strong> DSA + system design for senior roles</li>
              <li>• <strong>TCS/Infosys:</strong> Basic DSA, focus on aptitude and speed</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}
