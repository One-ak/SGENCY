"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react"

export default function PortalPage() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false)
      alert("This is a demo! In a real scenario, this would authenticate you into the client dashboard.")
    }, 1500)
  }

  return (
    <div className="pt-32 pb-20 min-h-screen relative flex items-center justify-center">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-[pulse_8s_ease-in-out_infinite] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-purple-500/20 blur-[100px] animate-[pulse_10s_ease-in-out_infinite_reverse] mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center max-w-5xl mx-auto">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" /> Secure Client Portal
            </div>
            <Heading as="h1" size="5xl" className="mb-6 font-heading tracking-tight">
              Welcome back.
            </Heading>
            <p className="text-xl text-muted-foreground mb-8">
              Log in to view your project milestones, approve designs, and track your automation ROI in real-time.
            </p>
            <ul className="space-y-4 text-left hidden lg:block">
              {[
                "Real-time project tracking",
                "Direct communication with engineers",
                "Automated ROI analytics dashboard",
                "Secure invoice management"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-sm font-bold">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-md"
          >
            <div className="bg-background/60 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
              
              <form onSubmit={handleLogin} className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Work Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="hello@yourcompany.com" 
                      className="w-full bg-muted/50 border border-border rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Password</label>
                    <a href="#" className="text-xs text-primary hover:underline">Forgot?</a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input 
                      type="password" 
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••" 
                      className="w-full bg-muted/50 border border-border rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-foreground text-background font-medium rounded-xl py-3 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isLoading ? (
                    <span className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>Sign In <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>

              <div className="mt-8 text-center text-sm text-muted-foreground">
                Don't have an account? <a href="/contact" className="text-primary hover:underline">Partner with us</a>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </div>
  )
}
