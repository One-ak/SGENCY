"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { useTranslations } from "next-intl"

import { portfolioData } from "@/data/portfolio"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function PortfolioPreview() {
  const t = useTranslations("Portfolio");

  return (
    <section className="py-16 md:py-32 relative bg-background">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center rounded-md border border-b-2 border-gray-300 dark:border-zinc-700 bg-gradient-to-b from-white to-gray-100 dark:from-zinc-800 dark:to-zinc-900 px-4 py-1.5 text-sm font-bold text-gray-700 dark:text-zinc-300 shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,1)] mb-6">
            <span className="flex h-2.5 w-2.5 rounded-full bg-primary mr-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5),0_0_4px_var(--primary)]"></span>
            {t("badge")}
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center max-w-3xl mb-10 md:mb-16">
            <Heading level={2} className="tracking-tight text-foreground mb-4 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] text-3xl md:text-5xl">
              {t("title")}
            </Heading>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-shadow-sm px-4">
              {t("subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full px-2">
            {portfolioData.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/portfolio/${project.slug}`} className="block">
                  <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-muted mb-6 shadow-sm border border-border">
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.category} Case Study`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Heading level={3} className="font-heading text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </Heading>
                      <p className="text-muted-foreground">{project.category}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
