"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"

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

const testimonialsData = [
  {
    quote: "Sgency completely revolutionized our lead generation. Their automation workflows saved us 40 hours a week while doubling our conversion rate.",
    author: "Aanya Sharma",
    role: "CEO, TechFlow",
  },
  {
    quote: "The brand identity and web platform they built is world-class. We immediately saw an increase in enterprise leads after launching.",
    author: "Rajiv Desai",
    role: "Founder, Elevate Capital",
  },
  {
    quote: "Strategic, fast, and incredibly effective. Their paid ads management scaled our e-commerce brand from 6 to 7 figures in 8 months.",
    author: "Priya Patel",
    role: "CMO, Lumina",
  },
]

export function Testimonials() {
  const t = useTranslations("Testimonials");

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
            <Heading level={2} size="4xl" className="tracking-tight text-foreground mb-4 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] text-3xl md:text-5xl">
              {t("title")}
            </Heading>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-shadow-sm px-4">
              {t("subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-2">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Card className="h-full border border-gray-300 dark:border-zinc-800 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-900/50 shadow-[inset_0_2px_0_rgba(255,255,255,0.8),0_4px_10px_rgba(0,0,0,0.05)] pt-6">
                  <CardContent>
                    <div className="flex gap-1 mb-6 text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]" />
                      ))}
                    </div>
                    <blockquote className="text-lg mb-6 leading-relaxed text-foreground/90">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    <div>
                      <Heading level={3} className="text-lg font-bold mb-1 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">{testimonial.author}</Heading>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
