"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface HeadingProps extends Omit<HTMLMotionProps<"h1">, "children"> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: string;
  as?: string;
  children: React.ReactNode;
}

export function Heading({
  level = 2,
  size,
  as,
  className,
  children,
  ...props
}: HeadingProps) {
  const TagName = as || `h${level}`
  const MotionTag = motion[TagName as keyof typeof motion] as React.ElementType;

  const baseStyles = "font-heading font-semibold tracking-tight text-foreground"
  
  const sizeStyles = {
    1: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold",
    2: "text-3xl sm:text-4xl md:text-5xl",
    3: "text-2xl sm:text-3xl md:text-4xl",
    4: "text-xl sm:text-2xl md:text-3xl",
    5: "text-lg sm:text-xl",
    6: "text-base sm:text-lg",
  }

  return (
    <MotionTag
      className={cn(baseStyles, sizeStyles[level], className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
