"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Market Insights", href: "/trends" },
  { label: "Jobs", href: "/jobs" },
  { label: "Resume Analysis", href: "/analyze" },
  { label: "Interview Prep", href: "/interview-prep" },
  { label: "Entrepreneurship", href: "/entrepreneurship" },
  { label: "Insights", href: "/insights" },
  { label: "About Us", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="CareerOS" width={32} height={32} className="rounded-lg" />
          <span className="font-heading font-semibold text-lg">CareerOS</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground text-sm">
                  {link.label}
                </Button>
              </motion.div>
            </Link>
          ))}
          <Link href="/analyze">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" className="gap-2 ml-3">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </Link>
        </div>

        {/* Mobile: Get Started + Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <Link href="/analyze">
            <Button size="sm" className="gap-1 text-xs">
              Get Started
              <ArrowRight className="w-3 h-3" />
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
            className="lg:hidden border-b border-border/50 bg-background/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
