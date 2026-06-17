"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Bot, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function AiWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ id: number; text: string; sender: "ai" | "user" }[]>([])
  const [isTyping, setIsTyping] = useState(false)

  // Initial greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true)
      setTimeout(() => {
        setMessages([
          { id: 1, text: "Hi there! I'm SGENCY's AI assistant.", sender: "ai" },
          { id: 2, text: "How can we help you scale your business today?", sender: "ai" }
        ])
        setIsTyping(false)
      }, 1000)
    }
  }, [isOpen, messages.length])

  const handleAction = (action: string) => {
    const userMessage = { id: Date.now(), text: action, sender: "user" as const }
    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    setTimeout(() => {
      let response = ""
      if (action.includes("Services")) response = "Excellent! We specialize in AI Automation, Web Dev, and Marketing. Check out our services page!"
      else if (action.includes("Pricing")) response = "We offer transparent, fixed-fee packages starting at ₹34,999/mo."
      else if (action.includes("Contact")) response = "I'll connect you right away. Head over to our contact page to book a call!"
      
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: response, sender: "ai" }])
      setIsTyping(false)
    }, 1200)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 w-[320px] sm:w-[360px] h-[450px] bg-background/80 backdrop-blur-xl border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between text-primary-foreground">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                <span className="font-heading font-medium">SGENCY Agent</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary-foreground/20 p-1 rounded-md transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              <AnimatePresence>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      msg.sender === "user" 
                        ? "bg-primary text-primary-foreground self-end rounded-br-sm" 
                        : "bg-muted text-foreground self-start rounded-bl-sm border border-border"
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-muted text-muted-foreground self-start rounded-2xl rounded-bl-sm py-3 px-4 border border-border text-xs flex gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: "300ms" }} />
                </motion.div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="p-4 bg-card border-t border-border flex flex-col gap-2">
              <div className="flex flex-wrap gap-2 mb-2">
                {messages.length <= 2 && (
                  <>
                    <button onClick={() => handleAction("View Services")} className="text-xs py-1.5 px-3 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 transition-colors">
                      View Services
                    </button>
                    <button onClick={() => handleAction("See Pricing")} className="text-xs py-1.5 px-3 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 transition-colors">
                      See Pricing
                    </button>
                  </>
                )}
              </div>
              
              <Link 
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-foreground text-background text-sm font-medium rounded-xl hover:opacity-90 transition-opacity"
              >
                Talk to a Human <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gradient-to-tr from-primary to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30 relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="relative">
              <MessageSquare className="w-6 h-6" />
              <motion.div 
                className="absolute -top-1 -right-2 text-yellow-300"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <Sparkles className="w-3 h-3" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
