"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Button } from "@/components/ui/button"
import Link from "next/link"
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

const plans = [
  {
    name: "Launch",
    price: "₹14,999",
    description: "Perfect for new businesses, local shops, and startups.",
    features: [
      "8 Social Media Posts",
      "2 Reels/Short Videos",
      "Google Business Profile Setup",
      "Basic SEO Setup"
    ],
  },
  {
    name: "Growth",
    price: "₹34,999",
    description: "Best for businesses generating revenue, clinics, and real estate.",
    features: [
      "Everything in Launch +",
      "16 Social Media Posts",
      "6 Reels/Short Videos",
      "Website (up to 5 pages)",
      "Monthly SEO Optimization"
    ],
    popular: true,
  },
  {
    name: "Scale",
    price: "₹74,999",
    description: "Designed for growing companies, manufacturing, and ecommerce.",
    features: [
      "Everything in Growth +",
      "30 Social Media Posts",
      "12 Reels/Videos",
      "Unlimited Website Updates",
      "Advanced SEO",
    ],
  },
]

export function PackagesPreview() {
  const t = useTranslations("Packages");

  return (
    <section className="py-16 md:py-32 relative bg-muted/30">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl w-full mx-auto px-2">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative rounded-3xl border-2 border-b-4 ${
                  plan.popular 
                    ? "border-primary bg-background shadow-[0_10px_30px_rgba(108,92,231,0.2)]" 
                    : "border-gray-300 dark:border-zinc-700 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-zinc-800 dark:to-zinc-900 shadow-[inset_0_2px_0_rgba(255,255,255,0.8),0_10px_20px_rgba(0,0,0,0.1)]"
                } p-8 overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-xl font-medium text-sm">
                    Most Popular
                  </div>
                )}
                
                <Heading level={3} className="text-2xl font-bold mb-2">{plan.name}</Heading>
                <p className="text-muted-foreground mb-6 h-12">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-muted-foreground"> / project</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <div className="mt-1 mr-3 rounded-full bg-primary/20 p-1">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact" className="w-full">
                  <Button 
                    className={`w-full py-4 md:py-6 rounded-xl font-bold text-base md:text-lg ${
                      plan.popular 
                        ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
