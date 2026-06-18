"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Bot, Sparkles, Send, Mail, CheckCircle2 } from "lucide-react"
import { useChat } from "@ai-sdk/react"

export function AiWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isSendingTranscript, setIsSendingTranscript] = useState(false)
  const [transcriptSent, setTranscriptSent] = useState(false)

  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat({
    initialMessages: [
      { id: "1", role: "assistant", content: "Hi there! I'm SGENCY's AI assistant. How can we help you scale your business today?" }
    ]
  })

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  const sendTranscript = async () => {
    if (messages.length <= 1) return;
    setIsSendingTranscript(true);
    
    const formattedChat = messages.map(m => `${m.role === 'user' ? 'User' : 'AI'}: ${m.content}`).join('\n\n');
    
    try {
      await fetch("https://formsubmit.co/ajax/anshpratapsingh333@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New SGENCY AI Chat Transcript",
          message: formattedChat,
        }),
      });
      setTranscriptSent(true);
      setTimeout(() => setTranscriptSent(false), 4000);
    } catch (error) {
      console.error("Failed to send transcript", error);
    } finally {
      setIsSendingTranscript(false);
    }
  }

  const handleActionClick = (action: string) => {
    append({ role: "user", content: action })
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
            className="mb-4 w-[320px] sm:w-[360px] h-[480px] bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between text-primary-foreground shadow-sm">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                <span className="font-heading font-medium">SGENCY Agent</span>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 1 && (
                  <button 
                    onClick={sendTranscript}
                    disabled={isSendingTranscript || transcriptSent}
                    title="Send chat transcript to team"
                    className="hover:bg-primary-foreground/20 p-1.5 rounded-md transition-colors disabled:opacity-50"
                  >
                    {transcriptSent ? <CheckCircle2 className="w-4 h-4 text-green-300" /> : <Mail className="w-4 h-4" />}
                  </button>
                )}
                <button 
                  onClick={() => setIsOpen(false)}
                  aria-label="Close AI Assistant"
                  className="hover:bg-primary-foreground/20 p-1.5 rounded-md transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              <AnimatePresence>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user" 
                        ? "bg-primary text-primary-foreground self-end rounded-br-sm" 
                        : "bg-muted/80 text-foreground self-start rounded-bl-sm border border-border/50"
                    }`}
                  >
                    {msg.content}
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-muted/80 text-muted-foreground self-start rounded-2xl rounded-bl-sm py-3 px-4 border border-border/50 text-xs flex gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: "300ms" }} />
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Action Buttons & Input */}
            <div className="p-3 bg-card/80 backdrop-blur-md border-t border-border flex flex-col gap-2">
              {messages.length <= 2 && (
                <div className="flex flex-wrap gap-2 mb-1">
                  <button onClick={() => handleActionClick("View Services")} className="text-xs py-1.5 px-3 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 transition-colors">
                    View Services
                  </button>
                  <button onClick={() => handleActionClick("See Pricing")} className="text-xs py-1.5 px-3 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 transition-colors">
                    See Pricing
                  </button>
                </div>
              )}
              
              <form 
                onSubmit={handleSubmit}
                className="flex items-center gap-2 bg-muted/50 rounded-xl p-1 pr-1 border border-border focus-within:ring-1 focus-within:ring-primary/50 transition-all shadow-inner"
              >
                <input 
                  type="text" 
                  aria-label="Type your message"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type a message..." 
                  className="flex-1 bg-transparent px-3 py-2 text-sm outline-none text-foreground placeholder:text-muted-foreground"
                />
                <button 
                  type="submit" 
                  aria-label="Send message"
                  disabled={!input.trim() || isLoading}
                  className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4 -ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
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
