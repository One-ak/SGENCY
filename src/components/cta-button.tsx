"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

export const CtaButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "group relative overflow-hidden bg-gradient-to-b from-primary/80 to-primary shadow-[inset_0_2px_0_rgba(255,255,255,0.4),0_6px_0_var(--primary),0_10px_20px_rgba(0,0,0,0.3)] active:translate-y-[6px] active:shadow-[inset_0_2px_0_rgba(255,255,255,0.4),0_0px_0_var(--primary),0_4px_8px_rgba(0,0,0,0.3)] transition-all",
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center font-bold text-shadow-sm drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
          {children}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Button>
    )
  }
)
CtaButton.displayName = "CtaButton"
