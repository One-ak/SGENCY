"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { servicesData } from "@/data/services"
import { FinalCta } from "@/components/sections/final-cta"
import { cn } from "@/lib/utils"

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/10 bg-background relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl text-center mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
                Our Capabilities
              </div>
              <Heading level={1} className="mb-6 text-5xl md:text-7xl font-bold tracking-tighter drop-shadow-sm">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-600">Digital Solutions.</span>
              </Heading>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                We provide end-to-end services designed to build, automate, and genuinely scale your business in the modern digital landscape.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/30 py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Link href={`/services/${service.slug}`} className="block h-full group">
                    <div className="h-full flex flex-col p-8 rounded-3xl bg-card/40 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(108,92,231,0.15)] transition-all duration-300 hover:-translate-y-2 hover:bg-card/80">
                      
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 shadow-inner ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="w-7 h-7 text-primary drop-shadow-[0_0_8px_rgba(108,92,231,0.5)]" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="font-heading text-2xl font-bold mb-3 text-foreground tracking-tight group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                        {service.description}
                      </p>
                      
                      {/* Benefits Preview */}
                      <ul className="space-y-2 mb-8 flex-grow">
                        {service.benefits.slice(0, 2).map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Footer/CTA */}
                      <div className="pt-6 border-t border-border/50 flex items-center justify-between mt-auto">
                        <span className="text-sm font-semibold text-foreground">Starting at {service.pricingRange.split(" - ")[0]}</span>
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                          <ArrowRight className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                      </div>

                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  )
}
