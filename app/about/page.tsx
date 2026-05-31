"use client";

import Image from "next/image";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Heart,
  Target,
  Users,
  Lightbulb,
  Globe,
  Shield,
  Rocket,
} from "lucide-react";

const values = [
  { icon: Target, title: "Career-First", description: "Every feature is designed to move your career forward — not just get clicks." },
  { icon: Users, title: "Inclusive", description: "Whether you're a coder, artist, government aspirant, or entrepreneur — we've got you covered." },
  { icon: Lightbulb, title: "Practical", description: "No fluff. Real data, real strategies, real stories from people who've done it." },
  { icon: Globe, title: "India + Global", description: "Built with Indian context in mind, but relevant for careers anywhere in the world." },
  { icon: Shield, title: "Privacy-First", description: "Your resume, your data, your career — we never sell your information." },
  { icon: Rocket, title: "Always Free", description: "Core career tools should be accessible to everyone, regardless of background." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <div className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Badge className="bg-primary/10 text-primary border-primary/20">
                <Heart className="w-3 h-3 mr-1" />
                About CareerOS
              </Badge>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.1]">
                Your career is{" "}
                <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                  more than a resume.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                CareerOS was built with one belief: career planning should be intelligent, inclusive, and accessible to everyone — not just tech professionals with polished LinkedIn profiles.
              </p>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Whether you&apos;re a first-generation college graduate figuring out campus placements, a mid-career professional exploring entrepreneurship, or someone preparing for government exams — CareerOS is your AI-powered career companion.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <Image
                src="/images/pexels/hero-about.jpeg"
                alt="About CareerOS"
                width={600}
                height={400}
                className="relative rounded-3xl shadow-2xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="py-16 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-medium">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To democratize career intelligence. Every student and professional in India deserves access to the same caliber of career guidance that elite MBA graduates get — powered by AI, backed by real data, and completely free.
            </p>
          </motion.div>
        </div>
      </div>

      {/* What We Cover */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-medium mb-4">
              Career means{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">everything</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We don&apos;t just cover tech jobs. CareerOS is for every career path.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Tech Careers", desc: "Software, data science, AI, cloud, product management" },
              { title: "Non-Tech Careers", desc: "Marketing, HR, finance, operations, consulting, design" },
              { title: "Government Jobs", desc: "UPSC, SSC, banking, railways, state PSC exams" },
              { title: "Entrepreneurship", desc: "Startup journeys, business skills, founder stories" },
              { title: "Creative Fields", desc: "Content, writing, filmmaking, photography, music" },
              { title: "Freelancing", desc: "Building a freelance career, clients, pricing, growth" },
              { title: "MBA & Higher Ed", desc: "MBA prep, abroad studies, research careers" },
              { title: "Remote Work", desc: "Global remote jobs, digital nomad lifestyle, tools" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="border-border/50 bg-card/80 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-heading font-medium text-base mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-medium mb-4">Our Values</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card className="border-border/50 bg-card/80 h-full">
                    <CardContent className="p-6 space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-heading font-medium text-lg">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="font-heading text-3xl font-medium">Built in India, for the world.</h2>
            <p className="text-muted-foreground text-lg">
              CareerOS is a product of SPLabs — focused on building AI-powered tools that make a real difference in people&apos;s lives.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
