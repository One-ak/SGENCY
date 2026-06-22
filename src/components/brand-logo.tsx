"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type BrandLogoProps = {
  className?: string
  markClassName?: string
  textClassName?: string
  showText?: boolean
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-primary text-white shadow-sm shadow-primary/20 ring-1 ring-white/15",
        className
      )}
    >
      <svg
        viewBox="0 0 48 48"
        role="img"
        className="size-[72%]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="5" width="38" height="38" rx="11" fill="url(#brandMarkGradient)" />
        <defs>
          <linearGradient id="brandMarkGradient" x1="8" y1="6" x2="41" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0f172a" />
            <stop offset="0.58" stopColor="#1e1b4b" />
            <stop offset="1" stopColor="#6c5ce7" />
          </linearGradient>
        </defs>
        <text
          x="9"
          y="34"
          fill="currentColor"
          fontFamily="Inter, Space Grotesk, Arial, sans-serif"
          fontSize="25"
          fontWeight="900"
        >
          lg
        </text>
        <path d="M34 13h5v5" stroke="#34d399" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M31.5 20.5 39 13" stroke="#34d399" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    </span>
  )
}

export function BrandLogo({
  className,
  markClassName,
  textClassName,
  showText = true,
}: BrandLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)} aria-label="letsgroww">
      <BrandMark className={markClassName} />
      {showText && (
        <span
          className={cn(
            "font-heading text-2xl font-black tracking-normal text-foreground",
            textClassName
          )}
        >
          letsgroww<span className="text-primary">.</span>
        </span>
      )}
    </span>
  )
}
