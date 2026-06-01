"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  Briefcase,
  FileText,
  MessageSquare,
  Globe,
  Sparkles,
} from "lucide-react";

const jobsSubmenu = [
  { label: "Market Insights (India)", href: "/trends", icon: TrendingUp, desc: "Tech & Non-Tech trends" },
  { label: "Job Listings", href: "/jobs", icon: Briefcase, desc: "Current openings" },
  { label: "Resume Analysis", href: "/analyze", icon: FileText, desc: "AI-powered feedback" },
  { label: "Interview Prep", href: "/interview-prep", icon: MessageSquare, desc: "Practice with AI" },
  { label: "Global Opportunities", href: "/global", icon: Globe, desc: "Work abroad guide" },
];

const topNavLinks = [
  { label: "Entrepreneurship", href: "/entrepreneurship" },
  { label: "Content Creation", href: "/content-creation" },
  { label: "Govt Jobs", href: "/govt-jobs" },
  { label: "Insights", href: "/insights" },
  { label: "About Us", href: "/about" },
];

const mobileJobLinks = jobsSubmenu;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [jobsDropdownOpen, setJobsDropdownOpen] = useState(false);
  const [mobileJobsOpen, setMobileJobsOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleJobsMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setJobsDropdownOpen(true);
  };

  const handleJobsMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setJobsDropdownOpen(false), 150);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.png" alt="CareerOS" width={32} height={32} className="rounded-lg" />
          <span className="font-heading font-semibold text-lg">CareerOS</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Jobs Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleJobsMouseEnter}
            onMouseLeave={handleJobsMouseLeave}
          >
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
              Jobs
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${jobsDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {jobsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-72 bg-card border border-border/50 rounded-xl shadow-xl overflow-hidden"
                >
                  {jobsSubmenu.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setJobsDropdownOpen(false)}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-accent/50 transition-colors"
                      >
                        <div className="mt-0.5 p-1.5 rounded-md bg-primary/10">
                          <Icon className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{item.label}</p>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Top-level links */}
          {topNavLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground text-sm">
                {link.label}
              </Button>
            </Link>
          ))}

          {/* Find Your Path — highlighted */}
          <Link href="/career-quiz">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" className="gap-1.5 ml-2 bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600 text-white border-0">
                <Sparkles className="w-3.5 h-3.5" />
                Find Your Path
              </Button>
            </motion.div>
          </Link>

          {/* Get Started */}
          <Link href="/analyze">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" className="gap-2 ml-1">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </Link>
        </div>

        {/* Mobile: buttons + hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <Link href="/career-quiz">
            <Button size="sm" className="gap-1 text-xs bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600 text-white border-0">
              <Sparkles className="w-3 h-3" />
              Quiz
            </Button>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {/* Jobs expandable */}
              <button
                onClick={() => setMobileJobsOpen(!mobileJobsOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors"
              >
                <span>Jobs</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileJobsOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileJobsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 space-y-1 border-l border-border/50 ml-3 mb-1">
                      {mobileJobLinks.map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                          <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
                            {item.label}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Top-level links */}
              {topNavLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    {link.label}
                  </Button>
                </Link>
              ))}

              <div className="pt-2 border-t border-border/50 space-y-2">
                <Link href="/career-quiz" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full gap-2 bg-gradient-to-r from-violet-500 to-pink-500 text-white border-0">
                    <Sparkles className="w-4 h-4" />
                    Find Your Path
                  </Button>
                </Link>
                <Link href="/analyze" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
