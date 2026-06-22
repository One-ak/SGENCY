"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { FinalCta } from "@/components/sections/final-cta"
import { Code2, LineChart, BrainCircuit, Rocket } from "lucide-react"

const values = [
  {
    icon: Code2,
    title: "Engineering Excellence",
    description: "We don't just build websites; we engineer scalable digital products that perform flawlessly under pressure."
  },
  {
    icon: BrainCircuit,
    title: "AI-First Approach",
    description: "Integrating cutting-edge artificial intelligence to automate your operations and outsmart the competition."
  },
  {
    icon: LineChart,
    title: "Data-Driven Growth",
    description: "Every decision, design tweak, and marketing campaign is backed by hard data and advanced analytics."
  },
  {
    icon: Rocket,
    title: "Relentless Execution",
    description: "We move fast and break barriers. Your timeline is our priority, delivering premium results without the agency bloat."
  }
]

const technologies = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Python", "Supabase", "PostgreSQL", "Framer Motion", "OpenAI API"
]

export default function AboutPage() {
  return (
    <>
      <Section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/10 bg-background relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50 dark:opacity-20" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
                Our Story
              </div>
              <Heading level={1} className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter drop-shadow-sm">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-600">Digital Dominance.</span>
              </Heading>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                We are letsgroww — a premium web design and AI automation agency built to scale ambitious brands.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            {/* Founder Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">The Founder&apos;s Vision</h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                <p className="leading-relaxed">
                  Hi, I&apos;m <strong className="text-foreground">Ansh Pratap Singh</strong>, the founder of letsgroww.
                </p>
                <p className="leading-relaxed">
                  With a background in Data Science, Artificial Intelligence, and advanced web architecture, I realized that most businesses suffer from a massive disconnect: they have great products, but their digital presence is built on outdated, slow, and unscalable technology.
                </p>
                <p className="leading-relaxed">
                  I built letsgroww to bridge the gap between complex data science models and clean, user-friendly web interfaces. We don&apos;t just hand you a generic template; we build custom, high-performance digital ecosystems designed to capture leads, automate your workflows, and genuinely scale your revenue.
                </p>
              </div>
              
              <div className="pt-6 border-t border-border/50">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Our Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-white dark:bg-zinc-900 border border-border/50 text-foreground px-4 py-2 rounded-xl text-sm font-semibold shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Core Values Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
            >
              {values.map((value, idx) => (
                <div 
                  key={idx}
                  className="bg-card/50 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-heading text-lg font-bold mb-2 text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="py-20 bg-muted/30 border-b border-border">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { label: "Projects Delivered", value: "50+" },
              { label: "Lines of Code", value: "1M+" },
              { label: "Client Satisfaction", value: "100%" },
              { label: "Coffee Consumed", value: "∞" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2"
              >
                <div className="text-4xl md:text-5xl font-bold font-heading text-foreground drop-shadow-sm">{stat.value}</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  )
}
