"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  Globe, 
  MapPin, 
  DollarSign, 
  ArrowUp,
  Menu,
  X,
} from "lucide-react";

const indiaTrends = [
  {
    category: "Technology",
    growth: "+45%",
    status: "high",
    description: "AI/ML and Cloud Computing leading growth",
    topRoles: ["Software Engineer", "Data Analyst", "Product Manager"],
    avgSalary: "₹15-50 LPA",
  },
  {
    category: "Healthcare",
    growth: "+38%",
    status: "high",
    description: "Medical and healthcare services expanding",
    topRoles: ["Doctor", "Nurse", "Healthcare Administrator"],
    avgSalary: "₹8-40 LPA",
  },
  {
    category: "Finance",
    growth: "+32%",
    status: "high",
    description: "Banking and financial services growing",
    topRoles: ["Financial Analyst", "Investment Banker", "Accountant"],
    avgSalary: "₹12-45 LPA",
  },
  {
    category: "Marketing",
    growth: "+35%",
    status: "high",
    description: "Digital marketing and brand management",
    topRoles: ["Digital Marketer", "Brand Manager", "Content Strategist"],
    avgSalary: "₹8-30 LPA",
  },
  {
    category: "Education",
    growth: "+28%",
    status: "medium",
    description: "EdTech and teaching opportunities",
    topRoles: ["Teacher", "Professor", "EdTech Specialist"],
    avgSalary: "₹6-25 LPA",
  },
  {
    category: "Manufacturing",
    growth: "+25%",
    status: "medium",
    description: "Production and supply chain management",
    topRoles: ["Production Manager", "Quality Engineer", "Supply Chain Analyst"],
    avgSalary: "₹10-35 LPA",
  },
  {
    category: "Legal",
    growth: "+30%",
    status: "medium",
    description: "Corporate law and compliance",
    topRoles: ["Corporate Lawyer", "Legal Counsel", "Compliance Officer"],
    avgSalary: "₹15-50 LPA",
  },
  {
    category: "E-commerce",
    growth: "+42%",
    status: "high",
    description: "Online retail and logistics booming",
    topRoles: ["E-commerce Manager", "Operations Lead", "Category Manager"],
    avgSalary: "₹10-40 LPA",
  },
  {
    category: "Renewable Energy",
    growth: "+40%",
    status: "high",
    description: "Solar, wind and green energy initiatives",
    topRoles: ["Solar Engineer", "Energy Consultant", "Project Manager"],
    avgSalary: "₹12-45 LPA",
  },
  {
    category: "Automotive",
    growth: "+28%",
    status: "medium",
    description: "EV manufacturing and automotive tech",
    topRoles: ["Automotive Engineer", "EV Specialist", "Quality Manager"],
    avgSalary: "₹10-35 LPA",
  },
  {
    category: "Pharmaceuticals",
    growth: "+35%",
    status: "high",
    description: "Drug development and healthcare innovation",
    topRoles: ["Research Scientist", "Quality Analyst", "Regulatory Affairs"],
    avgSalary: "₹12-50 LPA",
  },
  {
    category: "Logistics & Supply Chain",
    growth: "+33%",
    status: "high",
    description: "Transportation and warehousing expansion",
    topRoles: ["Logistics Manager", "Supply Chain Analyst", "Warehouse Supervisor"],
    avgSalary: "₹8-30 LPA",
  },
  {
    category: "Real Estate",
    growth: "+22%",
    status: "medium",
    description: "Property development and management",
    topRoles: ["Real Estate Agent", "Property Manager", "Developer"],
    avgSalary: "₹6-40 LPA",
  },
  {
    category: "Telecommunications",
    growth: "+30%",
    status: "medium",
    description: "5G rollout and network infrastructure",
    topRoles: ["Network Engineer", "Telecom Specialist", "Project Manager"],
    avgSalary: "₹10-35 LPA",
  },
  {
    category: "Sales",
    growth: "+40%",
    status: "high",
    description: "Business development and sales",
    topRoles: ["Sales Manager", "Business Development", "Account Executive"],
    avgSalary: "₹10-40 LPA",
  },
];

const globalTrends = [
  {
    region: "North America",
    topSectors: ["Healthcare", "Technology", "Finance", "Manufacturing"],
    growth: "+32%",
    opportunities: "High",
    avgSalary: "$60,000 - $150,000",
  },
  {
    region: "Europe",
    topSectors: ["Green Energy", "Manufacturing", "Finance", "Healthcare"],
    growth: "+24%",
    opportunities: "Medium",
    avgSalary: "€45,000 - €120,000",
  },
  {
    region: "Asia Pacific",
    topSectors: ["Technology", "Manufacturing", "Healthcare", "E-commerce"],
    growth: "+38%",
    opportunities: "High",
    avgSalary: "$40,000 - $100,000",
  },
  {
    region: "Middle East",
    topSectors: ["Construction", "Oil & Gas", "Finance", "Healthcare"],
    growth: "+28%",
    opportunities: "Medium",
    avgSalary: "$50,000 - $130,000",
  },
  {
    region: "Latin America",
    topSectors: ["Agriculture", "Mining", "Manufacturing", "Technology"],
    growth: "+22%",
    opportunities: "Medium",
    avgSalary: "$25,000 - $70,000",
  },
  {
    region: "Africa",
    topSectors: ["Agriculture", "Mining", "Telecom", "Healthcare"],
    growth: "+26%",
    opportunities: "Growing",
    avgSalary: "$20,000 - $60,000",
  },
];

export default function TrendsPage() {
  const [selectedRegion, setSelectedRegion] = useState<"india" | "global">("india");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-16 sm:h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image 
              src="/logo.png" 
              alt="CareerOS" 
              width={240} 
              height={64} 
              className="h-12 sm:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-2">
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
                <Link href="/jobs" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">Job Listings</Button>
                </Link>
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">Home</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="pt-16 sm:pt-24 pb-12 px-4">
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

              <div className="grid sm:grid-cols-2 gap-4">
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

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                          <span className="text-sm text-muted-foreground">Avg Salary</span>
                          <div className="flex items-center gap-1 text-green-600 font-medium">
                            <DollarSign className="w-4 h-4" />
                            {trend.avgSalary}
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
