"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone, ArrowRight, MessageSquare } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  // Form State
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [company, setCompany] = React.useState("")
  const [budget, setBudget] = React.useState("")
  const [timeline, setTimeline] = React.useState("")
  const [selectedServices, setSelectedServices] = React.useState<string[]>([])
  const [message, setMessage] = React.useState("")

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
  }

  const availableServices = [
    "AI Automation", "Website Development", 
    "Software Development", "Digital Marketing", 
    "Branding & Design", "Video Production", 
    "Business Consulting"
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
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
          company,
          budget,
          timeline,
          services: selectedServices.join(", "),
          message,
          _subject: "New General Inquiry - Sgency Contact Form"
        })
      })
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form
      setName("")
      setEmail("")
      setPhone("")
      setCompany("")
      setBudget("")
      setTimeline("")
      setSelectedServices([])
      setMessage("")
      
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error(error)
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
                      onChange={(e) => setCompany(e.target.value)}
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
                      onChange={(e) => setBudget(e.target.value)}
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
                      onChange={(e) => setTimeline(e.target.value)}
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
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea 
                    id="message" 
                    required 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="w-full p-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                    placeholder="Describe the goals, current blockers, and what success should look like."
                  />
                </div>
                
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
