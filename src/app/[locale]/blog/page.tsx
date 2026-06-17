"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { FinalCta } from "@/components/sections/final-cta"

import { blogData } from "@/data/blog"

export default function BlogPage() {
  return (
    <>
      <Section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/10 bg-background relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl text-center mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
                Insights & Resources
              </div>
              <Heading level={1} className="mb-6 text-5xl md:text-7xl font-bold tracking-tighter drop-shadow-sm">
                The SGENCY <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-600">Blog.</span>
              </Heading>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                Strategies, technical deep-dives, and agency news to help you scale your digital presence.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/30 py-24 min-h-[50vh]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Link href={`/blog/${post.slug}`} className="block h-full group">
                  <div className="h-full flex flex-col p-6 rounded-3xl bg-card/40 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(108,92,231,0.15)] transition-all duration-300 hover:-translate-y-2 hover:bg-card/80">
                    
                    <div className="mb-6 relative w-full h-48 rounded-2xl overflow-hidden bg-muted">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="mb-6 flex-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                        {post.category}
                      </span>
                      <h3 className="font-heading text-2xl font-bold mb-3 text-foreground tracking-tight group-hover:text-primary transition-colors line-clamp-3">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  )
}
