"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Check, PlusCircle } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { buttonVariants } from "@/components/ui/button"
import { CustomPlanBuilder } from "@/components/custom-plan-builder"
import Link from "next/link"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Launch",
    price: "₹34,999",
    period: "/month",
    bestFor: ["Businesses looking to establish a digital presence"],
    includes: [
      "12 Premium Social Media Creatives",
      "4 Short-Form Videos/Reels",
      "Google Business Profile Optimization",
      "Professional Website (up to 5 pages)",
      "Basic SEO Setup",
      "Monthly Analytics Report",
      "WhatsApp Business Integration",
      "Monthly Strategy Consultation"
    ],
    highlight: false
  },
  {
    name: "Growth",
    price: "₹79,999",
    period: "/month",
    bestFor: ["Businesses looking to generate leads and build a stronger brand."],
    includes: [
      "Everything in Launch +",
      "20 Premium Creatives",
      "8 Reels/Videos",
      "Advanced Website Features",
      "Ongoing SEO Optimization",
      "Blog Content Creation",
      "Lead Capture System",
      "Email Marketing Setup",
      "Competitor Analysis",
      "Quarterly Branding Review"
    ],
    highlight: true
  },
  {
    name: "Scale",
    price: "₹1,49,999",
    period: "/month",
    bestFor: ["Established businesses seeking consistent growth."],
    includes: [
      "Everything in Growth +",
      "30 Creatives",
      "12 Reels/Videos",
      "Unlimited Website Updates",
      "Advanced SEO Strategy",
      "Marketing Funnel Setup",
      "CRM Implementation",
      "Lead Tracking Dashboard",
      "WhatsApp Automation",
      "Monthly Performance Meetings",
      "Priority Support"
    ],
    highlight: false
  },
  {
    name: "AI Transformation",
    price: "₹2,99,999",
    period: "/month",
    bestFor: ["Businesses wanting to automate operations and customer interactions."],
    includes: [
      "Everything in Scale +",
      "AI Chatbot Development",
      "AI Customer Support System",
      "CRM Automation",
      "Email Workflow Automation",
      "Lead Qualification Automation",
      "Appointment Scheduling Automation",
      "AI Knowledge Base",
      "Process Optimization Audit",
      "Automation Consulting"
    ],
    highlight: false
  },
  {
    name: "Enterprise",
    price: "Starts at ₹5,99,999",
    period: "/month",
    bestFor: ["Large businesses and manufacturing companies."],
    includes: [
      "Everything in AI Transformation +",
      "Custom Software Development",
      "ERP Integration Support",
      "Business Intelligence Dashboards",
      "AI Voice Agents",
      "Multi-Department Automation",
      "Dedicated Account Manager",
      "Unlimited Consultation",
      "Executive Strategy Meetings",
      "Priority Development Queue"
    ],
    highlight: false
  }
]

const addons = [
  {
    category: "Website & Software",
    items: [
      { name: "Business Website", price: "₹40k–₹1.5L+" },
      { name: "Corporate Website", price: "₹75k–₹3L+" },
      { name: "E-Commerce Website", price: "₹1.25L–₹5L+" },
      { name: "Custom Web App", price: "₹2L–₹20L+" },
      { name: "SaaS Development", price: "Custom Quote" },
      { name: "Mobile App", price: "₹2.5L+" },
    ]
  },
  {
    category: "AI & Automation",
    items: [
      { name: "AI Chatbot", price: "₹50k–₹5L+" },
      { name: "WhatsApp Auto", price: "₹35k+" },
      { name: "CRM Automation", price: "₹75k+" },
      { name: "AI Voice Agent", price: "₹1.5L+" },
      { name: "Workflow Auto", price: "₹50k+" },
      { name: "Custom AI Solution", price: "Custom Quote" },
    ]
  },
  {
    category: "Marketing",
    items: [
      { name: "SEO Campaign", price: "₹30k/mo+" },
      { name: "Local SEO", price: "₹20k/mo+" },
      { name: "Social Media", price: "₹35k/mo+" },
      { name: "Paid Ads", price: "₹25k/mo + Ad Spend" },
      { name: "Email Marketing", price: "₹25k+" },
    ]
  },
  {
    category: "Branding & Design",
    items: [
      { name: "Logo Design", price: "₹15k+" },
      { name: "Brand Identity", price: "₹50k+" },
      { name: "Brand Guidelines", price: "₹30k+" },
      { name: "UI/UX Design", price: "₹50k+" },
      { name: "Corp Presentation", price: "₹15k+" },
    ]
  },
  {
    category: "Content & Video",
    items: [
      { name: "Reel Editing", price: "₹2k–₹7.5k/each" },
      { name: "Pro Video Prod", price: "₹25k/day+" },
      { name: "Corporate Video", price: "₹50k+" },
      { name: "Product Video", price: "₹20k+" },
      { name: "YouTube Editing", price: "₹5k–₹20k/each" },
      { name: "Thumbnail Design", price: "₹1k+" },
    ]
  }
]

export default function PackagesPage() {
  return (
    <>
      <Section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border bg-muted/50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Transparent Pricing
              </div>
              <Heading level={1} className="mb-6">
                Invest in growth, not just deliverables.
              </Heading>
              <p className="text-xl text-muted-foreground">
                Choose a comprehensive package tailored to your business stage, or build a custom plan. No hidden fees.
              </p>
            </motion.div>
          </div>
        </Container>
          
        <div className="flex overflow-x-auto pb-12 pt-8 snap-x snap-mandatory gap-6 hide-scrollbar items-stretch px-4 md:px-8 lg:px-12 xl:px-[calc((100vw-1280px)/2)] w-full">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={cn(
                "relative rounded-3xl p-8 border min-w-[320px] md:min-w-[380px] flex-shrink-0 bg-background/80 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(108,92,231,0.1)] transition-all duration-300 flex flex-col snap-center",
                plan.highlight 
                  ? "border-primary shadow-xl transform md:-translate-y-4 bg-primary/5 ring-1 ring-primary/20" 
                  : "border-border/50 mt-0 md:mt-4"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest py-1.5 px-6 rounded-full shadow-lg whitespace-nowrap">
                  Most Popular
                </div>
              )}
              
              <div className="mt-2 mb-6">
                <h3 className="text-2xl font-heading font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl lg:text-4xl font-heading font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>
              
              <div className="mb-6 pb-6 border-b border-border/60">
                <p className="text-sm font-semibold text-foreground mb-3 tracking-wide">Best for:</p>
                <ul className="space-y-2">
                  {plan.bestFor.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex-grow mb-8">
                <p className="text-sm font-semibold text-foreground mb-4 tracking-wide">Includes:</p>
                <ul className="space-y-3">
                  {plan.includes.map((feature, i) => (
                    <li key={i} className={cn("flex items-start gap-3 text-sm leading-relaxed", feature.includes("Everything in") ? "font-semibold text-primary" : "text-muted-foreground")}>
                      <Check className={cn("w-5 h-5 shrink-0", feature.includes("Everything in") ? "text-primary" : "text-primary/70")} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link 
                href="/contact"
                className={cn(buttonVariants({ variant: plan.highlight ? "default" : "outline", size: "lg" }), "w-full rounded-xl mt-auto shadow-sm")}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col gap-24">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-12 max-w-5xl mx-auto w-full"
            >
              <div className="text-center">
                <Heading level={2} className="mb-4">Add-on Services</Heading>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Need a little extra firepower? Scale up your package with modular add-ons designed for specific growth levers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {addons.map((category, idx) => (
                  <div key={idx} className="bg-muted/50 rounded-2xl p-6 border border-border">
                    <h4 className="font-heading font-semibold text-lg flex items-center gap-2 mb-4">
                      <PlusCircle className="w-5 h-5 text-primary" /> {category.category}
                    </h4>
                    <ul className="space-y-3">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex justify-between items-center text-sm border-b border-border/50 pb-2 last:border-0 last:pb-0">
                          <span className="text-muted-foreground">{item.name}</span>
                          <span className="font-medium font-heading whitespace-nowrap ml-4">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full"
            >
              <div className="text-center mb-12">
                <Heading level={2} className="mb-4">Or Build Your Own</Heading>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Mix and match exactly what you need to create a custom package tailored specifically to your business goals.
                </p>
              </div>
              <CustomPlanBuilder />
            </motion.div>
            
          </div>
        </Container>
      </Section>
    </>
  )
}
