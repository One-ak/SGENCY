"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <div 
      onClick={toggleTheme}
      className="relative flex items-center justify-between w-20 h-10 px-1 rounded-full cursor-pointer bg-gradient-to-b from-gray-300 to-gray-100 dark:from-zinc-900 dark:to-zinc-700 shadow-[inset_0_4px_6px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(255,255,255,0.4)] border border-gray-400 dark:border-zinc-800 transition-all overflow-hidden"
    >
      <div className="z-10 w-1/2 flex justify-center text-gray-500 dark:text-zinc-400 drop-shadow-sm pointer-events-none">
        <Sun size={14} className="opacity-80" />
      </div>
      <div className="z-10 w-1/2 flex justify-center text-gray-500 dark:text-zinc-400 drop-shadow-sm pointer-events-none">
        <Moon size={14} className="opacity-80" />
      </div>
      
      {/* Physical Toggle Thumb */}
      <div 
        className={`absolute top-1 bottom-1 w-8 rounded-full bg-gradient-to-b from-white to-gray-200 dark:from-zinc-300 dark:to-zinc-500 shadow-[0_2px_4px_rgba(0,0,0,0.4),inset_0_2px_2px_rgba(255,255,255,0.9)] border border-gray-300 dark:border-zinc-600 transition-transform duration-300 ease-in-out z-20 ${
          isDark ? "translate-x-10" : "translate-x-0"
        }`}
      >
        {/* Thumb Grip Ridges */}
        <div className="absolute inset-0 flex items-center justify-center gap-[2px]">
          <div className="w-[1px] h-3 bg-gray-400/50 shadow-[1px_0_0_rgba(255,255,255,0.8)]"></div>
          <div className="w-[1px] h-3 bg-gray-400/50 shadow-[1px_0_0_rgba(255,255,255,0.8)]"></div>
          <div className="w-[1px] h-3 bg-gray-400/50 shadow-[1px_0_0_rgba(255,255,255,0.8)]"></div>
        </div>
      </div>
    </div>
  )
}
