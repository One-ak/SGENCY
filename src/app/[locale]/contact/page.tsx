"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { MapPin, Mail, Phone, ArrowRight, MessageSquare } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { Button } from "@/components/ui/button"

const availableServices = [
  "AI Automation",
  "Website Development",
  "Software Development",
  "Digital Marketing",
  "Branding & Design",
  "Video Production",
  "Business Consulting",
] as const

type ServiceName = (typeof availableServices)[number]

type DraftInput = {
  selectedServices: string[]
  company: string
  budget: string
  timeline: string
  intent?: string
}

type InitialContactDraft = DraftInput & {
  sourceLabel: string
  cacheKey: string
}

const budgetLabels: Record<string, string> = {
  "under-50k": "Under ₹50,000",
  "50k-1L": "₹50,000 - ₹1,00,000",
  "1L-5L": "₹1,00,000 - ₹5,00,000",
  "5L+": "₹5,00,000+",
}

const timelineLabels: Record<string, string> = {
  asap: "ASAP",
  "1-3-months": "1-3 months",
  "3-6-months": "3-6 months",
  flexible: "Flexible",
}

const serviceDrafts: Record<ServiceName, { opening: string; fields: string[] }> = {
  "AI Automation": {
    opening: "I am interested in AI automation for my business.",
    fields: [
      "Current process I want to automate: [Example: lead follow-ups, support, reporting]",
      "Tools we use today: [CRM, WhatsApp, Google Sheets, website, etc.]",
      "Monthly volume: [Approx leads, customers, tickets, or tasks]",
      "Success goal: [Save time, respond faster, increase conversions, reduce manual work]",
    ],
  },
  "Website Development": {
    opening: "I need a premium website that helps my business look credible and convert visitors.",
    fields: [
      "Website type: [Landing page, business website, ecommerce, portfolio, etc.]",
      "Pages needed: [Home, services, portfolio, contact, blog, etc.]",
      "Main goal: [Leads, bookings, sales, brand authority, hiring]",
      "Websites I like: [Add links if available]",
    ],
  },
  "Software Development": {
    opening: "I want to build custom software or a web app for my business.",
    fields: [
      "Product idea: [Dashboard, CRM, portal, SaaS, internal tool, etc.]",
      "Main users: [Customers, staff, admins, partners]",
      "Must-have features: [Login, payments, reports, forms, automations, etc.]",
      "Current workaround: [Spreadsheets, manual process, existing tool]",
    ],
  },
  "Digital Marketing": {
    opening: "I need help improving lead generation and online growth.",
    fields: [
      "Current channels: [SEO, Google Ads, Meta Ads, social media, referrals]",
      "Target audience: [Who you want to reach]",
      "Main offer: [What you sell and average ticket size]",
      "Growth goal: [More leads, better conversion, local ranking, sales]",
    ],
  },
  "Branding & Design": {
    opening: "I need branding and design support to make my business look more premium.",
    fields: [
      "Brand stage: [New brand, rebrand, logo refresh, full identity]",
      "Assets needed: [Logo, colors, typography, social creatives, brochure, UI kit]",
      "Style direction: [Modern, luxury, minimal, bold, corporate, playful]",
      "Where it will be used: [Website, ads, packaging, social media, pitch deck]",
    ],
  },
  "Video Production": {
    opening: "I need video/content support for marketing and brand growth.",
    fields: [
      "Video type: [Reels, product video, corporate video, ads, YouTube editing]",
      "Quantity needed: [Number of videos per month or campaign]",
      "Content goal: [Awareness, leads, sales, education, trust building]",
      "Existing footage/assets: [Yes/no, links if available]",
    ],
  },
  "Business Consulting": {
    opening: "I want strategic guidance to improve my business systems and growth.",
    fields: [
      "Business stage: [Startup, growing company, established business]",
      "Current bottleneck: [Sales, operations, marketing, automation, technology]",
      "What I want to improve first: [Revenue, efficiency, leads, team workflow]",
      "Decision timeline: [When you want to start]",
    ],
  },
}

const serviceFromSlug: Record<string, ServiceName> = {
  "ai-automation": "AI Automation",
  "website-development": "Website Development",
  "software-development": "Software Development",
  "digital-marketing": "Digital Marketing",
  "branding-design": "Branding & Design",
  "video-production": "Video Production",
  "business-consulting": "Business Consulting",
}

const intentServiceSelections: Record<string, ServiceName[]> = {
  "strategy-call": ["Business Consulting"],
  roadmap: ["Business Consulting", "AI Automation"],
  "start-project": ["Website Development", "Software Development"],
  "client-access": ["Software Development"],
  partner: ["Business Consulting"],
  "portfolio-case-study": ["Business Consulting", "Website Development"],
  "package-launch": ["Website Development", "Digital Marketing", "Branding & Design"],
  "package-growth": ["Website Development", "Digital Marketing", "Branding & Design"],
  "package-scale": ["AI Automation", "Website Development", "Digital Marketing"],
  "package-ai-transformation": ["AI Automation", "Software Development", "Business Consulting"],
  "package-enterprise": ["AI Automation", "Software Development", "Business Consulting"],
}

const intentLabels: Record<string, string> = {
  general: "General inquiry",
  "strategy-call": "Strategy call",
  roadmap: "Roadmap request",
  "start-project": "Start project",
  "client-access": "Client portal access",
  partner: "New project partnership",
  "portfolio-case-study": "Portfolio case study inquiry",
  "service-discuss": "Service discussion",
  "service-quote": "Service quote",
  "package-launch": "Launch package",
  "package-growth": "Growth package",
  "package-scale": "Scale package",
  "package-ai-transformation": "AI Transformation package",
  "package-enterprise": "Enterprise package",
}

function formatCommonLines(company: string, budget: string, timeline: string) {
  const companyValue = company.trim() || "[Your business/company name]"
  const budgetValue = budgetLabels[budget] || "[Select or edit budget]"
  const timelineValue = timelineLabels[timeline] || "[Select or edit timeline]"

  return {
    companyLine: `Business/company: ${companyValue}`,
    budgetLine: `Budget: ${budgetValue}`,
    timelineLine: `Timeline: ${timelineValue}`,
  }
}

function createIntentDraft({ intent, selectedServices, company, budget, timeline }: DraftInput) {
  if (!intent) {
    return undefined
  }

  const { companyLine, budgetLine, timelineLine } = formatCommonLines(company, budget, timeline)
  const selectedService = selectedServices[0] as ServiceName | undefined
  const serviceLabel = selectedService || "the service"

  const drafts: Record<string, string[]> = {
    "strategy-call": [
      "Hi letsgroww,",
      "",
      "I want to book a strategy call to choose the best growth plan for my business.",
      "",
      companyLine,
      "What we do: [Shortly describe your business]",
      "Biggest priority right now: [Leads, website, automation, software, branding, or marketing]",
      "Current blocker: [What is slowing growth or wasting time]",
      "Questions I want answered on the call: [Add your questions]",
      budgetLine,
      timelineLine,
      "",
      "Please suggest a suitable consultation slot and the best next step.",
    ],
    roadmap: [
      "Hi letsgroww,",
      "",
      "I want a clear digital growth and automation roadmap before deciding what to build.",
      "",
      companyLine,
      "Current business model: [How you sell or serve customers]",
      "Current tools/process: [Website, CRM, WhatsApp, spreadsheets, ads, team workflow]",
      "Main bottleneck: [Lead flow, manual work, follow-ups, reporting, conversions, operations]",
      "Ideal outcome: [What should be easier, faster, or more profitable]",
      budgetLine,
      timelineLine,
      "",
      "Please recommend the roadmap session and what information you need from me.",
    ],
    "start-project": [
      "Hi letsgroww,",
      "",
      "I am ready to start a new project and want letsgroww to help plan and execute it.",
      "",
      companyLine,
      "Project type: [Website, web app, automation, marketing campaign, branding, or full package]",
      "Must-have outcome: [More leads, bookings, sales, efficiency, premium brand, customer portal]",
      "Important features/deliverables: [Add your must-haves]",
      "Decision makers involved: [Owner, founder, manager, team]",
      budgetLine,
      timelineLine,
      "",
      "Please review this and suggest the fastest next step.",
    ],
    "client-access": [
      "Hi letsgroww,",
      "",
      "I need help getting access to my client portal or private project link.",
      "",
      companyLine,
      "Project/client email: [Email used during onboarding]",
      "Project name: [If available]",
      "Access needed for: [Project updates, approvals, invoices, assets, or dashboard]",
      "Issue I am facing: [Missing link, wrong email, expired link, cannot login]",
      "",
      "Please send the correct secure access link or tell me what details you need.",
    ],
    partner: [
      "Hi letsgroww,",
      "",
      "I want to partner with letsgroww for a new project or long-term growth support.",
      "",
      companyLine,
      "Business stage: [New, growing, established, enterprise]",
      "What I want to build or improve: [Add the main idea]",
      "Support needed: [Strategy, design, development, automation, marketing, consulting]",
      "Preferred working style: [One-time project, monthly plan, or long-term partner]",
      budgetLine,
      timelineLine,
      "",
      "Please suggest the best partnership option.",
    ],
    "portfolio-case-study": [
      "Hi letsgroww,",
      "",
      "I saw your portfolio/case study and want to explore a similar result for my business.",
      "",
      companyLine,
      "Case study or result I liked: [Mention the project/result]",
      "My current situation: [Website, software, marketing, automation, or brand stage]",
      "Result I want: [Leads, faster operations, better conversion, stronger brand, dashboard, app]",
      "Links/assets I can share: [Website, social profiles, examples, documents]",
      budgetLine,
      timelineLine,
      "",
      "Please suggest how we can approach this.",
    ],
    "service-discuss": [
      "Hi letsgroww,",
      "",
      `I want to discuss ${serviceLabel} for my business and understand the right approach.`,
      "",
      companyLine,
      "Current situation: [What you already have or are doing]",
      "Problem to solve: [What is not working or needs improvement]",
      "Expected result: [What success should look like]",
      "Questions for letsgroww: [Add anything you want clarified]",
      budgetLine,
      timelineLine,
      "",
      "Please guide me on the best scope and next step.",
    ],
    "service-quote": [
      "Hi letsgroww,",
      "",
      `I would like a quote for ${serviceLabel}.`,
      "",
      companyLine,
      "Scope needed: [Describe pages, features, campaigns, automations, assets, or deliverables]",
      "Examples/references: [Add links if available]",
      "Must-have requirements: [What must be included]",
      "Nice-to-have requirements: [What can be optional]",
      budgetLine,
      timelineLine,
      "",
      "Please send the best-fit quote range and what you need to estimate accurately.",
    ],
    "package-launch": [
      "Hi letsgroww,",
      "",
      "I am interested in the Launch package for getting my business online properly.",
      "",
      companyLine,
      "Business type: [Local business, startup, clinic, store, service business, etc.]",
      "Priority deliverables: [Website, social creatives, Google Business Profile, basic SEO]",
      "Main goal: [Look professional, start getting local leads, improve trust, launch fast]",
      "Existing assets: [Logo, photos, website, social media, Google profile]",
      budgetLine,
      timelineLine,
      "",
      "Please confirm what is included and how quickly we can launch.",
    ],
    "package-growth": [
      "Hi letsgroww,",
      "",
      "I am interested in the Growth package to generate more leads and improve my brand presence.",
      "",
      companyLine,
      "Current lead sources: [Referrals, Google, Instagram, ads, website, walk-ins]",
      "Growth target: [More qualified leads, better website conversion, SEO, content, retargeting]",
      "Current website/social status: [Add links or describe current setup]",
      "Best customer type: [Who you want more of]",
      budgetLine,
      timelineLine,
      "",
      "Please suggest the best Growth plan setup for my business.",
    ],
    "package-scale": [
      "Hi letsgroww,",
      "",
      "I am interested in the Scale package for ongoing growth, tracking, and automation.",
      "",
      companyLine,
      "Current monthly lead/sales volume: [Approximate number]",
      "Systems needed: [CRM, dashboard, WhatsApp automation, funnel, SEO, paid ads, website updates]",
      "Team workflow problem: [Follow-ups, reporting, assignment, customer support, approvals]",
      "Metrics I want to track: [Leads, conversions, revenue, campaigns, team performance]",
      budgetLine,
      timelineLine,
      "",
      "Please recommend the Scale setup and implementation plan.",
    ],
    "package-ai-transformation": [
      "Hi letsgroww,",
      "",
      "I am interested in the AI Transformation package to automate operations and customer interactions.",
      "",
      companyLine,
      "Processes to automate: [Support, lead qualification, follow-ups, scheduling, email, reporting]",
      "Current tools: [CRM, WhatsApp, website, sheets, email, helpdesk, calendar]",
      "AI use cases: [Chatbot, knowledge base, workflow automation, customer support, lead scoring]",
      "Human approval needed: [Where your team should stay in control]",
      budgetLine,
      timelineLine,
      "",
      "Please suggest the best AI automation roadmap and first implementation step.",
    ],
    "package-enterprise": [
      "Hi letsgroww,",
      "",
      "I am interested in an Enterprise solution for custom software, automation, and reporting.",
      "",
      companyLine,
      "Departments involved: [Sales, operations, finance, production, support, management]",
      "Systems to integrate: [ERP, CRM, website, inventory, WhatsApp, analytics, internal tools]",
      "Main business problem: [Visibility, manual work, delays, data silos, customer experience]",
      "Security/compliance needs: [Roles, permissions, audit logs, data privacy, approvals]",
      budgetLine,
      timelineLine,
      "",
      "Please suggest a discovery call and enterprise implementation path.",
    ],
  }

  return drafts[intent]?.join("\n")
}

function createInquiryDraft(input: DraftInput) {
  const intentDraft = createIntentDraft(input)

  if (intentDraft) {
    return intentDraft
  }

  const { selectedServices, company, budget, timeline } = input
  const { companyLine, budgetLine, timelineLine } = formatCommonLines(company, budget, timeline)

  if (selectedServices.length > 1) {
    return [
      "Hi letsgroww,",
      "",
      `I am interested in ${selectedServices.join(", ")} for my business.`,
      "",
      companyLine,
      "Main goal: [What you want to achieve]",
      "Current problem: [What is slowing growth or wasting time]",
      "Must-have deliverables: [Website, automation, ads, dashboard, branding, content, etc.]",
      "Success should look like: [More leads, fewer manual tasks, better conversion, premium brand, etc.]",
      budgetLine,
      timelineLine,
      "",
      "Please suggest the best plan and next step.",
    ].join("\n")
  }

  const selectedService = selectedServices[0] as ServiceName | undefined
  const serviceDraft = selectedService ? serviceDrafts[selectedService] : undefined

  if (!serviceDraft) {
    return [
      "Hi letsgroww,",
      "",
      "I am interested in improving my business with your digital services.",
      "",
      companyLine,
      "Main goal: [What you want to achieve]",
      "Current problem: [What is slowing growth or wasting time]",
      budgetLine,
      timelineLine,
      "",
      "Please suggest the best service and next step.",
    ].join("\n")
  }

  return [
    "Hi letsgroww,",
    "",
    serviceDraft.opening,
    "",
    companyLine,
    ...serviceDraft.fields,
    budgetLine,
    timelineLine,
    "",
    "Please suggest the best plan and next step.",
  ].join("\n")
}

function normalizeQueryValue(value: string | null) {
  return value?.trim().toLowerCase() || ""
}

function getInitialContactDraft(searchParams: URLSearchParams): InitialContactDraft {
  const intent = normalizeQueryValue(searchParams.get("intent"))
  const serviceSlug = normalizeQueryValue(searchParams.get("service"))
  const service = serviceFromSlug[serviceSlug]
  const selectedServices = service ? [service] : intentServiceSelections[intent] || []
  const resolvedIntent = intent || (service ? "service-discuss" : undefined)
  const sourceLabel = resolvedIntent
    ? service
      ? `${intentLabels[resolvedIntent] || resolvedIntent}: ${service}`
      : intentLabels[resolvedIntent] || resolvedIntent
    : "General contact form"

  return {
    selectedServices,
    company: "",
    budget: "",
    timeline: "",
    intent: resolvedIntent,
    sourceLabel,
    cacheKey: searchParams.toString() || "default",
  }
}

export default function ContactPage() {
  return (
    <React.Suspense fallback={null}>
      <ContactPageWithIntent />
    </React.Suspense>
  )
}

function ContactPageWithIntent() {
  const searchParams = useSearchParams()
  const initialDraft = React.useMemo(
    () => getInitialContactDraft(new URLSearchParams(searchParams.toString())),
    [searchParams]
  )

  return <ContactForm key={initialDraft.cacheKey} initialDraft={initialDraft} />
}

function ContactForm({ initialDraft }: { initialDraft: InitialContactDraft }) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [submissionError, setSubmissionError] = React.useState("")

  // Form State
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [company, setCompany] = React.useState("")
  const [budget, setBudget] = React.useState("")
  const [timeline, setTimeline] = React.useState("")
  const [selectedIntent, setSelectedIntent] = React.useState<string | undefined>(initialDraft.intent)
  const [selectedServices, setSelectedServices] = React.useState<string[]>(initialDraft.selectedServices)
  const [message, setMessage] = React.useState(() =>
    createInquiryDraft(initialDraft)
  )
  const [messageMode, setMessageMode] = React.useState<"smart" | "custom">("smart")

  const buildDraft = React.useCallback(
    (overrides: Partial<DraftInput> = {}) =>
      createInquiryDraft({
        selectedServices,
        company,
        budget,
        timeline,
        intent: selectedIntent,
        ...overrides,
      }),
    [budget, company, selectedIntent, selectedServices, timeline]
  )

  const syncSmartDraft = (overrides: Partial<DraftInput> = {}) => {
    if (messageMode === "smart") {
      setMessage(buildDraft(overrides))
    }
  }

  const regenerateDraft = () => {
    setMessageMode("smart")
    setMessage(buildDraft())
  }

  const handleServiceToggle = (service: string) => {
    const nextServices = selectedServices.includes(service)
      ? selectedServices.filter((selectedService) => selectedService !== service)
      : [...selectedServices, service]

    setSelectedServices(nextServices)
    setSelectedIntent(undefined)
    syncSmartDraft({ selectedServices: nextServices, intent: undefined })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSubmitted(false)
    setSubmissionError("")
    const inquirySource = selectedIntent
      ? initialDraft.sourceLabel
      : selectedServices.length > 0
        ? `Manual service selection: ${selectedServices.join(", ")}`
        : initialDraft.sourceLabel
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/anshpratapsingh333@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          budget,
          timeline,
          inquiry_source: inquirySource,
          inquiry_intent: selectedIntent || "manual",
          services: selectedServices.join(", "),
          message,
          _subject: "New General Inquiry - letsgroww Contact Form"
        })
      })

      if (!response.ok) {
        throw new Error(`Contact form service returned ${response.status}`)
      }

      setIsSubmitted(true)
      
      // Reset form
      setName("")
      setEmail("")
      setPhone("")
      setCompany("")
      setBudget("")
      setTimeline("")
      setSelectedIntent(initialDraft.intent)
      setSelectedServices(initialDraft.selectedServices)
      setMessage(createInquiryDraft(initialDraft))
      setMessageMode("smart")
      
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error("Contact form submission failed:", error)
      setSubmissionError("We could not send the inquiry right now. Please email or WhatsApp us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Contact Us
            </div>
            <Heading level={1} className="mb-6">
              Let&apos;s build something extraordinary.
            </Heading>
            <p className="text-xl text-muted-foreground mb-12">
              Whether you need a complete digital transformation or a targeted growth campaign, our team is ready to execute.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0 text-foreground">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Email</p>
                  <a href="mailto:anshpratapsingh333@gmail.com" className="text-lg font-heading font-medium hover:text-primary transition-colors break-all">
                    anshpratapsingh333@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0 text-foreground">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Phone</p>
                  <a href="tel:+917007979400" className="text-lg font-heading font-medium hover:text-primary transition-colors">
                    +91 70079 79400
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 text-green-500">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">WhatsApp</p>
                  <a href="https://wa.me/917007979400" target="_blank" rel="noopener noreferrer" className="text-lg font-heading font-medium hover:text-green-500 transition-colors">
                    +91 70079 79400
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0 text-foreground">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Location</p>
                  <p className="text-lg font-heading font-medium">
                    India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card border border-border rounded-3xl p-6 lg:p-8 shadow-sm">
              <Heading level={3} className="mb-2 text-2xl">Send an inquiry</Heading>
              <p className="text-muted-foreground mb-6 text-sm">We usually respond within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input 
                      id="name" 
                      type="text" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      maxLength={80}
                      className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-sm font-medium">Company</label>
                    <input 
                      id="company" 
                      type="text" 
                      value={company}
                      onChange={(e) => {
                        const nextCompany = e.target.value
                        setCompany(nextCompany)
                        syncSmartDraft({ company: nextCompany })
                      }}
                      maxLength={100}
                      className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input 
                      id="email" 
                      type="email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      maxLength={160}
                      className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                    <input 
                      id="phone" 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      maxLength={30}
                      className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                      placeholder="+91 ..."
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="budget" className="text-sm font-medium">Budget</label>
                    <select 
                      id="budget" 
                      value={budget}
                      onChange={(e) => {
                        const nextBudget = e.target.value
                        setBudget(nextBudget)
                        syncSmartDraft({ budget: nextBudget })
                      }}
                      className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow appearance-none"
                    >
                      <option value="">Select budget</option>
                      <option value="under-50k">Under ₹50,000</option>
                      <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                      <option value="1L-5L">₹1,00,000 - ₹5,00,000</option>
                      <option value="5L+">₹5,00,000+</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="timeline" className="text-sm font-medium">Timeline</label>
                    <select 
                      id="timeline" 
                      value={timeline}
                      onChange={(e) => {
                        const nextTimeline = e.target.value
                        setTimeline(nextTimeline)
                        syncSmartDraft({ timeline: nextTimeline })
                      }}
                      className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow appearance-none"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Services</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {availableServices.map((service) => (
                      <label 
                        key={service} 
                        className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${selectedServices.includes(service) ? "border-primary bg-primary/5" : "border-border bg-background hover:bg-muted/50"}`}
                      >
                        <input 
                          type="checkbox" 
                          className="w-3.5 h-3.5 rounded text-primary border-border focus:ring-primary"
                          checked={selectedServices.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                        />
                        <span className="text-xs font-medium">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-3">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <button
                      type="button"
                      onClick={regenerateDraft}
                      className="text-xs font-semibold text-primary hover:underline"
                    >
                      Regenerate draft
                    </button>
                  </div>
                  <textarea 
                    id="message" 
                    required 
                    value={message}
                    onChange={(e) => {
                      const nextMessage = e.target.value
                      setMessage(nextMessage)
                      setMessageMode(nextMessage === buildDraft() ? "smart" : "custom")
                    }}
                    maxLength={2000}
                    rows={10}
                    className="w-full p-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                    placeholder="Describe the goals, current blockers, and what success should look like."
                  />
                </div>

                {submissionError && (
                  <p role="alert" className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                    {submissionError}
                  </p>
                )}

                {isSubmitted && (
                  <p className="rounded-lg border border-green-500/30 bg-green-500/10 px-3 py-2 text-sm text-green-600 dark:text-green-400">
                    Message sent successfully. We will get back to you soon.
                  </p>
                )}
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full rounded-lg h-12 text-sm"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">Sending...</span>
                  ) : isSubmitted ? (
                    <span className="flex items-center">Message Sent Successfully!</span>
                  ) : (
                    <span className="flex items-center">
                      Submit Inquiry <ArrowRight className="ml-2 w-5 h-5" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
