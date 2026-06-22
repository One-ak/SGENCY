"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { CheckCircle2 } from "lucide-react"

const benefits = [
  "End-to-end digital strategy",
  "Scalable, future-proof architectures",
  "Data-driven marketing campaigns",
  "Automated workflows that save 100+ hours/month"
]

export function BusinessTransformation() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
              The letsgroww Advantage
            </div>
            <Heading level={2} className="mb-4 md:mb-6 text-3xl md:text-5xl">
              Transform your business from the inside out.
            </Heading>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              We don&apos;t just build websites or run ads. We architect complete digital ecosystems designed to attract, convert, and retain high-value clients while automating your fulfillment.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[2rem] overflow-hidden aspect-square lg:aspect-[4/5] bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-950 border-[1px] border-white/80 dark:border-white/10 shadow-[inset_0_2px_10px_rgba(255,255,255,0.8),0_20px_40px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_2px_10px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.5)] flex items-center justify-center p-4 sm:p-8"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-10 pointer-events-none" />
            
            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-5 sm:gap-6 w-full max-w-sm">
              
              {/* Card 1 */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-white dark:border-zinc-700 shadow-[0_10px_20px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,1)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center gap-4 sm:gap-6 transform -rotate-2 hover:rotate-0 hover:scale-105 transition-transform duration-300 cursor-default"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full bg-gradient-to-br from-primary/80 to-primary shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_4px_10px_rgba(108,92,231,0.4)] flex items-center justify-center text-white font-bold text-lg sm:text-xl border border-primary/20">
                  10x
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg sm:text-xl text-foreground">Average ROI</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">Enterprise partners</p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-white dark:border-zinc-700 shadow-[0_10px_20px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,1)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center gap-4 sm:gap-6 transform translate-x-2 sm:translate-x-4 rotate-1 hover:rotate-0 hover:scale-105 transition-transform duration-300 cursor-default"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_4px_10px_rgba(59,130,246,0.4)] flex items-center justify-center text-white font-bold text-lg sm:text-xl border border-indigo-500/20">
                  100+
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg sm:text-xl text-foreground">Hours Saved</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">Through automation</p>
                </div>
              </motion.div>
              
              {/* Card 3 */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-white dark:border-zinc-700 shadow-[0_10px_20px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,1)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center gap-4 sm:gap-6 transform -rotate-1 hover:rotate-0 hover:scale-105 transition-transform duration-300 cursor-default"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_4px_10px_rgba(16,185,129,0.4)] flex items-center justify-center text-white font-bold text-lg sm:text-xl border border-emerald-500/20">
                  24/7
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg sm:text-xl text-foreground">Lead Capture</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">AI-driven acquisition</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
