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
  const [company, setCompany] = React.useState("")
  const [budget, setBudget] = React.useState("")
  const [message, setMessage] = React.useState("")

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
          company,
          budget,
          message,
          _subject: "New General Inquiry - Sgency Contact Form"
        })
      })
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form
      setName("")
      setEmail("")
      setCompany("")
      setBudget("")
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
            <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-sm">
              <Heading level={3} className="mb-2">Send an inquiry</Heading>
              <p className="text-muted-foreground mb-8">We usually respond within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                    <input 
                      id="name" 
                      type="text" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <input 
                      id="email" 
                      type="email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">Company (Optional)</label>
                    <input 
                      id="company" 
                      type="text" 
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium">Project Budget</label>
                    <select 
                      id="budget" 
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow appearance-none"
                    >
                      <option value="">Select a range...</option>
                      <option value="under-50k">Under ₹50,000</option>
                      <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                      <option value="1L-5L">₹1,00,000 - ₹5,00,000</option>
                      <option value="5L+">₹5,00,000+</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Project Details</label>
                  <textarea 
                    id="message" 
                    required 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                    placeholder="Tell us about your goals, timeline, and current challenges..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full rounded-xl h-14 text-base"
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
