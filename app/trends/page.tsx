"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Globe, 
  MapPin, 
  DollarSign, 
  ArrowUp
} from "lucide-react";

const indiaTrends = [
  {
    category: "Technology",
    growth: "+45%",
    status: "high",
    description: "AI/ML and Cloud Computing leading growth",
    topRoles: ["AI Engineer", "Cloud Architect", "DevOps Engineer"],
    avgSalary: "₹25-40 LPA",
  },
  {
    category: "Management",
    growth: "+28%",
    status: "medium",
    description: "Product and Project Management in demand",
    topRoles: ["Product Manager", "Scrum Master", "Operations Manager"],
    avgSalary: "₹20-35 LPA",
  },
  {
    category: "Design",
    growth: "+35%",
    status: "high",
    description: "UX/UI and Product Design growing rapidly",
    topRoles: ["UX Designer", "Product Designer", "Design Lead"],
    avgSalary: "₹15-30 LPA",
  },
  {
    category: "HR",
    growth: "+18%",
    status: "medium",
    description: "HR Tech and People Analytics emerging",
    topRoles: ["HR Business Partner", "Talent Acquisition", "People Analytics"],
    avgSalary: "₹12-25 LPA",
  },
];

const globalTrends = [
  {
    region: "North America",
    topSectors: ["AI/ML", "Healthcare Tech", "Clean Energy"],
    growth: "+32%",
    opportunities: "High",
  },
  {
    region: "Europe",
    topSectors: ["Fintech", "Sustainability", "Cybersecurity"],
    growth: "+24%",
    opportunities: "Medium",
  },
  {
    region: "Asia Pacific",
    topSectors: ["E-commerce", "Digital Payments", "EdTech"],
    growth: "+38%",
    opportunities: "High",
  },
];

export default function TrendsPage() {
  const [selectedRegion, setSelectedRegion] = useState<"india" | "global">("india");

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-400 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              <Image src="/logo.png" alt="CareerOS" width={120} height={120} className="relative rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300" />
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/jobs">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="sm">Job Listings</Button>
              </motion.div>
            </Link>
            <Link href="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="sm">Home</Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-2">
              Market Trends
            </h1>
            <p className="text-muted-foreground">
              Real-time insights on job market trends in India and globally
            </p>
          </motion.div>

          {/* Region Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="inline-flex p-1 bg-muted rounded-lg">
              <Button
                variant={selectedRegion === "india" ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedRegion("india")}
                className="gap-2"
              >
                <MapPin className="w-4 h-4" />
                India
              </Button>
              <Button
                variant={selectedRegion === "global" ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedRegion("global")}
                className="gap-2"
              >
                <Globe className="w-4 h-4" />
                Global
              </Button>
            </div>
          </motion.div>

          {selectedRegion === "india" ? (
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold">India Job Market Overview</h3>
                        <p className="text-sm text-muted-foreground">
                          Overall growth of +28% in Q4 2024. Technology and Design sectors leading the recovery.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4">
                {indiaTrends.map((trend, index) => (
                  <motion.div
                    key={trend.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="border-border/50 hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="font-heading text-lg">{trend.category}</CardTitle>
                          <Badge className={trend.status === "high" ? "bg-green-500" : "bg-yellow-500"}>
                            {trend.status === "high" ? "High Demand" : "Growing"}
                          </Badge>
                        </div>
                        <CardDescription>{trend.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Growth Rate</span>
                          <div className="flex items-center gap-1 text-green-600 font-medium">
                            <ArrowUp className="w-4 h-4" />
                            {trend.growth}
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium mb-2">Top Roles</p>
                          <div className="flex flex-wrap gap-2">
                            {trend.topRoles.map(role => (
                              <Badge key={role} variant="secondary" className="text-xs">
                                {role}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-border/50">
                          <span className="text-sm text-muted-foreground">Avg Salary</span>
                          <div className="flex items-center gap-1 text-green-600 font-medium">
                            <DollarSign className="w-4 h-4" />
                            {trend.avgSalary}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Globe className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold">Global Market Overview</h3>
                        <p className="text-sm text-muted-foreground">
                          Asia Pacific leading growth at +38%, followed by North America at +32%. Remote work opportunities increasing globally.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-4">
                {globalTrends.map((trend, index) => (
                  <motion.div
                    key={trend.region}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="border-border/50 hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="font-heading text-lg">{trend.region}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Growth</span>
                          <div className="flex items-center gap-1 text-green-600 font-medium">
                            <ArrowUp className="w-4 h-4" />
                            {trend.growth}
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-medium mb-2">Top Sectors</p>
                          <div className="flex flex-wrap gap-2">
                            {trend.topSectors.map(sector => (
                              <Badge key={sector} variant="secondary" className="text-xs">
                                {sector}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-border/50">
                          <span className="text-sm text-muted-foreground">Opportunities</span>
                          <Badge className={trend.opportunities === "High" ? "bg-green-500" : "bg-yellow-500"}>
                            {trend.opportunities}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Ready to apply these insights to your job search?
            </p>
            <Link href="/jobs">
              <Button size="lg" className="gap-2">
                Browse Job Listings
                <ArrowUp className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
