"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Card3DTilt } from "@/components/ui/card-3d-tilt"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { servicesData } from "@/data/services"

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

export function ServicesPreview() {
  const t = useTranslations("Services");

  const displayServices = servicesData.slice(0, 6);

  return (
    <section className="py-16 md:py-32 relative bg-muted/50">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1400px] mx-auto px-2">
            {displayServices.map((service, index) => {
              return (
                <motion.div key={index} variants={itemVariants} className="h-full">
                  <Card3DTilt className="h-full">
                    <Link href={`/services/${service.slug}`} className="block h-full focus:outline-none">
                      <div
                        className={cn(
                          "group relative overflow-hidden rounded-[2rem] bg-card border border-border/50 p-6 md:p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 h-full min-h-[380px] flex flex-col",
                        )}
                      >
                        <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        
                        <Heading level={3} className="mb-3 text-xl md:text-2xl font-bold tracking-tight">
                          {service.title}
                        </Heading>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 flex-grow">
                          {service.description}
                        </p>
                        
                        <ul className="space-y-3 mb-8">
                          {service.benefits.slice(0, 2).map((benefit, i) => (
                            <li key={i} className="flex items-start text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                              <span className="leading-snug">{benefit}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-6 border-t border-border flex items-center justify-between mt-auto">
                           <span className="text-sm font-bold text-foreground">Starting at {service.pricingRange.split(' -')[0]}</span>
                           <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                             <ArrowRight className="w-4 h-4" />
                           </div>
                        </div>
                      </div>
                    </Link>
                  </Card3DTilt>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
