"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { ArrowRight, BarChart3, Bot, CheckCircle2, ClipboardList, Rocket, ShieldCheck, Sparkles, Workflow } from "lucide-react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function BlueprintSection() {
  const t = useTranslations("Blueprint")

  const outputs = [
    {
      icon: ClipboardList,
      title: t("outputs.strategy.title"),
      description: t("outputs.strategy.description"),
    },
    {
      icon: Workflow,
      title: t("outputs.system.title"),
      description: t("outputs.system.description"),
    },
    {
      icon: BarChart3,
      title: t("outputs.growth.title"),
      description: t("outputs.growth.description"),
    },
  ]

  const steps = [
    {
      icon: Sparkles,
      title: t("steps.audit.title"),
      description: t("steps.audit.description"),
    },
    {
      icon: Bot,
      title: t("steps.prototype.title"),
      description: t("steps.prototype.description"),
    },
    {
      icon: Rocket,
      title: t("steps.launch.title"),
      description: t("steps.launch.description"),
    },
  ]

  const stats = [
    { value: t("stats.days.value"), label: t("stats.days.label") },
    { value: t("stats.hours.value"), label: t("stats.hours.label") },
    { value: t("stats.stack.value"), label: t("stats.stack.label") },
  ]

  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-16 md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.18] pointer-events-none" />
      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14"
        >
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center rounded-md border border-b-2 border-gray-300 bg-gradient-to-b from-white to-gray-100 px-4 py-1.5 text-sm font-bold text-gray-700 shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,1)] dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-900 dark:text-zinc-300">
              <span className="mr-2 flex h-2.5 w-2.5 rounded-full bg-primary shadow-[inset_0_1px_2px_rgba(0,0,0,0.5),0_0_4px_var(--primary)]" />
              {t("badge")}
            </div>

            <Heading level={2} className="mb-5 text-3xl md:text-5xl">
              {t("title")}
            </Heading>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("subtitle")}
            </p>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className="grid grid-cols-[44px_1fr] gap-4 rounded-2xl border border-border bg-card/60 p-4 shadow-sm md:p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        0{index + 1}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-[2rem] border border-border bg-card p-4 shadow-2xl md:p-6">
            <div className="rounded-[1.5rem] border border-border bg-background p-5 md:p-7">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">{t("brief.label")}</p>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-foreground">{t("brief.title")}</h3>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-muted/40 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t("brief.inputLabel")}</p>
                <p className="text-sm leading-relaxed text-foreground md:text-base">{t("brief.input")}</p>
              </div>

              <div className="my-5 flex items-center gap-3 text-sm font-semibold text-muted-foreground">
                <div className="h-px flex-1 bg-border" />
                <ArrowRight className="h-4 w-4 text-primary" />
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="space-y-3">
                {outputs.map((output) => (
                  <div key={output.title} className="rounded-2xl border border-border bg-card p-4">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <output.icon className="h-4 w-4" />
                      </div>
                      <h4 className="font-heading font-bold text-foreground">{output.title}</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{output.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-border bg-muted/30 p-3 text-center">
                    <div className="font-heading text-2xl font-black text-foreground">{stat.value}</div>
                    <div className="mt-1 text-xs font-medium text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact?intent=roadmap" className={cn(buttonVariants({ size: "lg" }), "w-full rounded-xl font-bold sm:w-auto")}>
                  {t("cta.primary")}
                </Link>
                <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground sm:justify-start">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  {t("cta.note")}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {[t("proof.first"), t("proof.second"), t("proof.third")].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-border bg-card/70 p-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium text-foreground">{item}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
