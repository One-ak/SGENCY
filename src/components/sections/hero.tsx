"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { CtaButton } from "@/components/cta-button"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { Bot, Code, TrendingUp, Layers, Users, Search, Palette, Database } from "lucide-react"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const marqueeItems = [
  { text: "AI AUTOMATION", icon: Bot },
  { text: "CUSTOM WEBSITES", icon: Code },
  { text: "GROWTH MARKETING", icon: TrendingUp },
  { text: "SCALABLE SOFTWARE", icon: Layers },
  { text: "LEAD GENERATION", icon: Users },
  { text: "SEO OPTIMIZATION", icon: Search },
  { text: "BRAND DESIGN", icon: Palette },
  { text: "CRM INTEGRATION", icon: Database },
]

export function Hero() {
  const t = useTranslations("Hero")
  return (
    <section className="pt-24 pb-12 md:pt-48 md:pb-32 relative overflow-hidden flex flex-col justify-center min-h-[90vh]">
      
      {/* Static Glowing Orbs Background (Optimized for Performance) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[100px] opacity-70" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[100px] opacity-70" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-purple-500/20 blur-[80px] opacity-70" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-10" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center flex-grow justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >

          {/* Embossed Text */}
          <motion.div variants={itemVariants}>
            <Heading as="h1" size="5xl" className="text-4xl sm:text-5xl md:text-8xl lg:text-[10rem] tracking-tighter text-foreground mb-3 md:mb-6 font-heading drop-shadow-[0_2px_1px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_2px_1px_rgba(0,0,0,0.8)] leading-[1.1]">
              {t("build")}<span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-600">{t("scale")}</span>
            </Heading>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-base md:text-2xl font-medium text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-12 leading-relaxed text-shadow-sm px-4">
            {t("subtitle")}
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center items-center w-full sm:w-auto px-6"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <CtaButton size="lg" className="w-full text-sm md:text-lg px-6 py-3 md:px-10 md:py-6 rounded-xl md:rounded-2xl font-bold bg-gradient-to-b from-primary/80 to-primary shadow-[inset_0_2px_0_rgba(255,255,255,0.4),0_4px_0_var(--primary),0_8px_16px_rgba(0,0,0,0.3)] active:translate-y-[4px] active:shadow-[inset_0_2px_0_rgba(255,255,255,0.4),0_0px_0_var(--primary),0_2px_4px_rgba(0,0,0,0.3)] transition-all">
                {t("bookCall")}
              </CtaButton>
            </Link>
            <Link 
              href="/portfolio" 
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto text-sm md:text-lg px-6 py-3 md:px-10 md:py-6 rounded-xl md:rounded-2xl font-bold border-2 border-b-4 border-gray-300 dark:border-zinc-700 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-zinc-800 dark:to-zinc-900 shadow-[inset_0_2px_0_rgba(255,255,255,0.8),0_4px_10px_rgba(0,0,0,0.1)] active:border-b-2 active:translate-y-[2px] transition-all")}
            >
              {t("viewWork")}
            </Link>
          </motion.div>
        </motion.div>
      </Container>

      {/* Infinite Marquee */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/20 dark:border-white/5 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md py-2 md:py-4"
      >
        <div className="flex w-max animate-[marquee_30s_linear_infinite]">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center mx-8">
              <div className="mr-3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-b from-white to-gray-200 dark:from-zinc-700 dark:to-zinc-900 shadow-[0_2px_4px_rgba(0,0,0,0.15),inset_0_2px_2px_rgba(255,255,255,0.9),inset_0_-2px_2px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-2px_2px_rgba(0,0,0,0.2)] border border-gray-300 dark:border-zinc-600 flex items-center justify-center">
                <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]" />
              </div>
              <span className="text-xs md:text-base font-bold tracking-widest text-foreground/60 uppercase whitespace-nowrap">
                {item.text}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50 ml-16" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Injecting marquee animation keyframes into the document */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
      `}} />
    </section>
  )
}
