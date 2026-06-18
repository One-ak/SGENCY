"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isVisualDark, setIsVisualDark] = React.useState(false);

  React.useEffect(() => {
    setMounted(true)
    const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsVisualDark(isDark);
  }, [theme])

  if (!mounted) return null

  const toggleTheme = () => {
    const nextTheme = isVisualDark ? "light" : "dark";
    setIsVisualDark(!isVisualDark);
    // Framer Motion or Next Themes handles CSS transitions smoothly enough
    setTheme(nextTheme);
  }

  return (
    <button 
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex items-center justify-between w-14 h-7 px-1 rounded-full cursor-pointer bg-gradient-to-b from-gray-300 to-gray-100 dark:from-zinc-900 dark:to-zinc-700 shadow-[inset_0_4px_6px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(255,255,255,0.4)] border border-gray-400 dark:border-zinc-800 transition-all overflow-hidden"
    >
      <div className="z-10 w-1/2 flex justify-center text-gray-500 dark:text-zinc-400 drop-shadow-sm pointer-events-none">
        <Sun size={12} className="opacity-80" />
      </div>
      <div className="z-10 w-1/2 flex justify-center text-gray-500 dark:text-zinc-400 drop-shadow-sm pointer-events-none">
        <Moon size={12} className="opacity-80" />
      </div>
      
      {/* Physical Toggle Thumb */}
      <div 
        className={`absolute top-1 bottom-1 w-5 rounded-full bg-gradient-to-b from-white to-gray-200 dark:from-zinc-300 dark:to-zinc-500 shadow-[0_2px_4px_rgba(0,0,0,0.4),inset_0_2px_2px_rgba(255,255,255,0.9)] border border-gray-300 dark:border-zinc-600 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-20 ${
          isVisualDark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {/* Thumb Grip Ridges */}
        <div className="absolute inset-0 flex items-center justify-center gap-[1px]">
          <div className="w-[1px] h-2 bg-gray-400/50 shadow-[1px_0_0_rgba(255,255,255,0.8)]"></div>
          <div className="w-[1px] h-2 bg-gray-400/50 shadow-[1px_0_0_rgba(255,255,255,0.8)]"></div>
          <div className="w-[1px] h-2 bg-gray-400/50 shadow-[1px_0_0_rgba(255,255,255,0.8)]"></div>
        </div>
      </div>
    </button>
  )
}
