"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Filter } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { Button } from "@/components/ui/button"
import { FinalCta } from "@/components/sections/final-cta"

import { portfolioData } from "@/data/portfolio"
import Image from "next/image"
import Link from "next/link"

const categories = ["All Work", "Corporate Website", "Personal Portfolio", "Software Development", "AI Automation"]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = React.useState("All Work")

  const filteredProjects = portfolioData.filter(
    (project) => activeCategory === "All Work" || project.category === activeCategory
  )

  return (
    <>
      <Section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border">
        <Container>
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Our Portfolio
              </div>
              <Heading level={1} className="mb-6">
                Work that drives revenue.
              </Heading>
              <p className="text-xl text-muted-foreground">
                We measure success in metrics, not just aesthetics. Explore how we&apos;ve helped industry leaders scale their operations.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/50">
        <Container>
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-12">
            <div className="flex items-center gap-2 text-foreground font-medium">
              <Filter className="w-5 h-5" />
              <span>Filter by Industry</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer block"
              >
                <Link href={`/portfolio/${project.slug}`}>
                  <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-background mb-6 border border-border">
                    {/* Image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-foreground/5 transition-colors duration-300 group-hover:bg-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center text-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>

                    {/* ROI Badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md rounded-xl p-4 border border-border/50 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-sm font-semibold text-primary">Key Result</p>
                      <p className="text-foreground font-medium text-sm line-clamp-1">{project.results[0]}</p>
                    </div>
                  </div>
                  
                  <div className="px-2">
                    <p className="text-sm text-primary font-medium mb-1">{project.category}</p>
                    <h3 className="font-heading text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      <FinalCta />
    </>
  )
}
