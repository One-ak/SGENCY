"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"

interface Card3DTiltProps {
  children: React.ReactNode
  className?: string
}

export const Card3DTilt = ({ children, className }: Card3DTiltProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    
    // Calculate rotation (-1 to 1)
    const x = (clientX - left - width / 2) / (width / 2)
    const y = (clientY - top - height / 2) / (height / 2)

    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: position.y * -10,
        rotateY: position.x * 10,
        transformPerspective: 1000,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      className={className}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div 
        style={{
          transform: "translateZ(30px)",
          transformStyle: "preserve-3d"
        }}
        className="h-full w-full"
      >
        {children}
      </div>
    </motion.div>
  )
}
