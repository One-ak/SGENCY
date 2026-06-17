"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Cpu, Code, Megaphone, Layout, Sparkles, LineChart } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Card3DTilt } from "@/components/ui/card-3d-tilt"
import { cn } from "@/lib/utils"
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

export function ServicesPreview() {
  const t = useTranslations("Services");

  const servicesData = [
    {
      title: t("items.software.title"),
      description: t("items.software.description"),
      icon: Code,
      className: "md:col-span-2",
    },
    {
      title: t("items.design.title"),
      description: t("items.design.description"),
      icon: Layout,
      className: "md:col-span-1",
    },
    {
      title: t("items.marketing.title"),
      description: t("items.marketing.description"),
      icon: LineChart,
      className: "md:col-span-1",
    },
    {
      title: t("items.ai.title"),
      description: t("items.ai.description"),
      icon: Sparkles,
      className: "md:col-span-2",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative bg-muted/50">
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
          
          <motion.div variants={itemVariants} className="text-center max-w-3xl mb-16">
            <Heading level={2} className="tracking-tight text-foreground mb-4 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
              {t("title")}
            </Heading>
            <p className="text-lg text-muted-foreground leading-relaxed text-shadow-sm">
              {t("subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
            {servicesData.map((service, index) => {
              return (
                <motion.div key={index} variants={itemVariants} className={`h-full ${service.className}`}>
                  <Card3DTilt className="h-full">
                    <div
                      className={cn(
                        "group relative overflow-hidden rounded-3xl border-2 border-b-4 border-gray-300 dark:border-zinc-700 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-zinc-800 dark:to-zinc-900 p-8 shadow-[inset_0_2px_0_rgba(255,255,255,0.8),0_10px_20px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-1 hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.8),0_15px_30px_rgba(0,0,0,0.15)] h-full min-h-[300px] flex flex-col",
                      )}
                    >
                      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-300 dark:bg-zinc-900 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_1px_0_rgba(255,255,255,0.5)]">
                        <service.icon className="h-8 w-8 text-primary drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]" />
                      </div>
                      
                      <Heading level={3} className="mb-3 text-xl drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                        {service.title}
                      </Heading>
                      <p className="text-muted-foreground leading-relaxed mb-6 max-w-md relative z-10">
                        {service.description}
                      </p>
                      
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/20 to-transparent" />
                    </div>
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
