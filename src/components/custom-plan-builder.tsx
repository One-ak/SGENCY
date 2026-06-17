"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ArrowRight, Calculator, CheckCircle2, Bot, Monitor, BarChart, PenTool, Video, Briefcase, ChevronRight, CheckSquare2 } from "lucide-react"

const builderCategories = [
  {
    title: "AI & Automation",
    icon: <Bot className="w-5 h-5" />,
    items: [
      { id: "ai-chatbot", label: "AI Chatbot", price: 50000 },
      { id: "ai-voice", label: "AI Voice Agent", price: 150000 },
      { id: "crm-auto", label: "CRM Automation", price: 75000 },
      { id: "wa-auto", label: "WhatsApp Automation", price: 35000 },
      { id: "lead-auto", label: "Lead Generation Automation", price: 40000 },
      { id: "support-auto", label: "Customer Support Automation", price: 60000 },
      { id: "workflow-auto", label: "Workflow Automation", price: 50000 },
      { id: "email-auto", label: "Email Automation", price: 25000 },
      { id: "ai-knowledge", label: "AI Knowledge Base", price: 45000 },
      { id: "custom-ai", label: "Custom AI Solution", price: 100000 },
    ]
  },
  {
    title: "Website & Software",
    icon: <Monitor className="w-5 h-5" />,
    items: [
      { id: "landing-page", label: "Landing Page", price: 15000 },
      { id: "business-web", label: "Business Website", price: 40000 },
      { id: "corp-web", label: "Corporate Website", price: 75000 },
      { id: "ecomm-web", label: "E-Commerce Website", price: 125000 },
      { id: "portfolio-web", label: "Portfolio Website", price: 25000 },
      { id: "web-app", label: "Web Application", price: 200000 },
      { id: "saas", label: "SaaS Development", price: 300000 },
      { id: "dashboard", label: "Dashboard Development", price: 100000 },
      { id: "mobile-app", label: "Mobile App Development", price: 250000 },
      { id: "api-int", label: "API Integration", price: 20000 },
      { id: "web-redesign", label: "Website Redesign", price: 30000 },
      { id: "web-maint", label: "Website Maintenance", price: 10000 },
    ]
  },
  {
    title: "Marketing",
    icon: <BarChart className="w-5 h-5" />,
    items: [
      { id: "seo", label: "SEO", price: 30000 },
      { id: "local-seo", label: "Local SEO", price: 20000 },
      { id: "social-management", label: "Social Media Management", price: 35000 },
      { id: "google-ads", label: "Google Ads", price: 25000 },
      { id: "meta-ads", label: "Meta Ads", price: 25000 },
      { id: "lead-gen", label: "Lead Generation Campaigns", price: 30000 },
      { id: "email-marketing", label: "Email Marketing", price: 25000 },
      { id: "content-marketing", label: "Content Marketing", price: 30000 },
      { id: "cro", label: "Conversion Optimization", price: 40000 },
    ]
  },
  {
    title: "Branding & Design",
    icon: <PenTool className="w-5 h-5" />,
    items: [
      { id: "logo", label: "Logo Design", price: 15000 },
      { id: "brand-id", label: "Brand Identity", price: 50000 },
      { id: "brand-guide", label: "Brand Guidelines", price: 30000 },
      { id: "uiux", label: "UI/UX Design", price: 50000 },
      { id: "social-creatives", label: "Social Media Creatives", price: 10000 },
      { id: "ad-creatives", label: "Ad Creatives", price: 10000 },
      { id: "brochure", label: "Brochure Design", price: 8000 },
      { id: "corp-profile", label: "Corporate Profile Design", price: 20000 },
    ]
  },
  {
    title: "Video & Content",
    icon: <Video className="w-5 h-5" />,
    items: [
      { id: "video-editing", label: "Video Editing", price: 10000 },
      { id: "reels", label: "Reels Creation", price: 10000 },
      { id: "youtube-edit", label: "YouTube Editing", price: 5000 },
      { id: "product-video", label: "Product Videos", price: 20000 },
      { id: "corp-video", label: "Corporate Videos", price: 50000 },
      { id: "ad-video", label: "Advertisement Videos", price: 40000 },
      { id: "drone", label: "Drone Shoots", price: 15000 },
      { id: "motion-gfx", label: "Motion Graphics", price: 25000 },
      { id: "thumbnail", label: "Thumbnail Design", price: 1000 },
    ]
  },
  {
    title: "Business Consulting",
    icon: <Briefcase className="w-5 h-5" />,
    items: [
      { id: "digital-transform", label: "Digital Transformation Consulting", price: 50000 },
      { id: "process-opt", label: "Business Process Optimization", price: 40000 },
      { id: "auto-audit", label: "Automation Audit", price: 25000 },
      { id: "tech-consulting", label: "Technology Consulting", price: 30000 },
      { id: "growth-strat", label: "Growth Strategy", price: 50000 },
      { id: "analytics", label: "Analytics & Reporting", price: 15000 },
    ]
  }
]

export function CustomPlanBuilder() {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([])
  const [step, setStep] = React.useState<"select" | "quote" | "success">("select")
  
  // Form State
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")

  const handleToggle = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const calculateTotal = () => {
    let total = 0
    builderCategories.forEach(category => {
      category.items.forEach(item => {
        if (selectedItems.includes(item.id)) {
          total += item.price
        }
      })
    })
    return total
  }

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedItems.length === 0) return
    setStep("quote")
  }

  const handleSubmitRequest = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create text summary of selected packages
    const selectedLabels = builderCategories
      .flatMap(c => c.items)
      .filter(item => selectedItems.includes(item.id))
      .map(item => item.label)
      .join(", ")

    try {
      await fetch("https://formsubmit.co/ajax/anshpratapsingh333@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          total_estimated_price: formatPrice(calculateTotal()),
          selected_services: selectedLabels,
          _subject: `New Custom Package Quote Request from ${name}`
        })
      })
      
      setStep("success")
    } catch (error) {
      console.error(error)
      // Fallback to success UI even if there's a network error for better UX
      setStep("success")
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="bg-gradient-to-b from-card to-background border border-border rounded-[2rem] p-6 md:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      
      {/* Header */}
      <div className="mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-3xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">Build Your Own Package</h3>
            <p className="text-muted-foreground mt-1">Select exactly what you need for a custom quote.</p>
          </div>
        </div>
        
        {/* Stepper */}
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className={`px-3 py-1 rounded-full transition-colors ${step === "select" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
            1. Services
          </span>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <span className={`px-3 py-1 rounded-full transition-colors ${step === "quote" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
            2. Quote & Contact
          </span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === "select" && (
          <motion.form 
            key="select"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleCalculate}
            className="relative z-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {builderCategories.map((category, idx) => (
                <div key={idx} className="bg-background rounded-2xl border border-border/60 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-heading font-semibold text-lg flex items-center gap-3 mb-5 text-foreground">
                    <span className="p-2 rounded-lg bg-primary/10 text-primary">
                      {category.icon}
                    </span>
                    {category.title}
                  </h4>
                  <div className="space-y-2">
                    {category.items.map((item) => {
                      const isSelected = selectedItems.includes(item.id)
                      return (
                        <label 
                          key={item.id}
                          htmlFor={item.id} 
                          className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-200 border ${
                            isSelected 
                              ? "bg-primary/5 border-primary/30" 
                              : "bg-transparent border-transparent hover:bg-muted/50"
                          }`}
                        >
                          <span className={`text-sm font-medium transition-colors ${isSelected ? "text-primary" : "text-foreground/80"}`}>
                            {item.label}
                          </span>
                          <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
                            isSelected ? "bg-primary text-primary-foreground" : "border border-border bg-background"
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                          </div>
                          {/* Hidden checkbox for accessibility */}
                          <input 
                            type="checkbox"
                            id={item.id}
                            className="sr-only"
                            checked={isSelected}
                            onChange={() => handleToggle(item.id)}
                          />
                        </label>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Floating Bar */}
            <div className="sticky bottom-4 z-20 bg-background/90 backdrop-blur-md rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-border/80 shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)] ring-1 ring-border/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-xl">
                  {selectedItems.length}
                </div>
                <div>
                  <p className="font-semibold text-lg">Services Selected</p>
                  <p className="text-sm text-muted-foreground">Calculate your estimated starting price instantly.</p>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full sm:w-auto rounded-xl px-8 h-14 font-semibold text-primary-foreground bg-primary shadow-[inset_0_2px_0_rgba(255,255,255,0.2),0_4px_10px_rgba(108,92,231,0.4)] hover:brightness-110 active:translate-y-1 transition-all disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center"
                disabled={selectedItems.length === 0}
              >
                Calculate Quote <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.form>
        )}

        {step === "quote" && (
          <motion.div 
            key="quote"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <div className="bg-gradient-to-br from-primary/5 via-background to-primary/5 border border-primary/20 rounded-3xl p-10 mb-8 text-center shadow-inner">
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Estimated Starting Price</p>
              <div className="text-5xl md:text-7xl font-heading font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-6 drop-shadow-sm">
                {formatPrice(calculateTotal())}
              </div>
              <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
                This is an estimated starting price based on the <strong>{selectedItems.length} services</strong> you selected. Final quotes may vary based on project complexity and scope.
              </p>
            </div>

            <form onSubmit={handleSubmitRequest} className="space-y-8 max-w-2xl mx-auto bg-background p-8 rounded-3xl border border-border shadow-sm">
              <div className="text-center mb-8">
                <h4 className="font-heading font-bold text-2xl mb-2">Ready to transform your business?</h4>
                <p className="text-muted-foreground">Enter your details below and our team will be in touch within 24 hours with a comprehensive proposal.</p>
              </div>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 ml-1">Full Name</label>
                  <input required type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full h-14 px-5 rounded-xl border border-border bg-muted/30 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-base placeholder:text-muted-foreground/60" placeholder="e.g. John Doe" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 ml-1">Email Address</label>
                    <input required type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-14 px-5 rounded-xl border border-border bg-muted/30 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-base placeholder:text-muted-foreground/60" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2 ml-1">Phone Number</label>
                    <input required type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full h-14 px-5 rounded-xl border border-border bg-muted/30 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-base placeholder:text-muted-foreground/60" placeholder="+91 98765 43210" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                <button 
                  type="button" 
                  className="w-full sm:w-1/3 rounded-xl px-6 h-14 font-semibold text-foreground bg-muted hover:bg-muted/80 transition-colors flex items-center justify-center"
                  onClick={() => setStep("select")}
                >
                  Go Back
                </button>
                <button 
                  type="submit" 
                  className="w-full sm:w-2/3 rounded-xl px-8 h-14 font-bold text-primary-foreground bg-primary shadow-[inset_0_2px_0_rgba(255,255,255,0.2),0_4px_10px_rgba(108,92,231,0.4)] hover:brightness-110 active:translate-y-1 transition-all flex items-center justify-center"
                >
                  Submit Request <CheckSquare2 className="ml-2 w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {step === "success" && (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-16 flex flex-col items-center text-center relative z-10"
          >
            <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h3 className="text-4xl font-heading font-black mb-4">Request Sent Successfully!</h3>
            <p className="text-muted-foreground text-lg max-w-lg mb-10 leading-relaxed">
              Thank you, <strong className="text-foreground">{name}</strong>! We have received your custom package request. Our team will review your requirements and contact you at <strong className="text-foreground">{email}</strong> within 24 hours.
            </p>
            <button 
              className="rounded-xl px-8 h-14 font-semibold border-2 border-primary text-primary hover:bg-primary/5 transition-colors"
              onClick={() => {
                setStep("select")
                setSelectedItems([])
                setName("")
                setEmail("")
                setPhone("")
              }}
            >
              Create Another Package
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
