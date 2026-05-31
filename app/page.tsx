"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="relative flex min-h-screen flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl text-center space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              Beyond the Resume
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            >
              AI-powered career intelligence platform. Get personalized skill gap analysis, hiring probability scores, and career roadmaps in seconds.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Link href="/analyze">
                <Button size="lg" className="text-lg px-8 py-6">
                  Analyze Your Resume
                </Button>
              </Link>
              <Link href="/analyze">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  View Demo
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
