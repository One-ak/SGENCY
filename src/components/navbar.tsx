"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { MobileMenu } from "@/components/mobile-menu"
import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"

export function Navbar() {
  const t = useTranslations("Navbar")
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-colors duration-300 border-b",
        isMobileMenuOpen
          ? "bg-background border-transparent"
          : scrolled 
            ? "bg-background/80 backdrop-blur-md border-border/50 shadow-md shadow-primary/5" 
            : "bg-background/50 backdrop-blur-sm border-transparent"
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-heading text-2xl font-bold tracking-tight">
              SGENCY<span className="text-primary">.</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              {[
                { key: "services", href: "/services" },
                { key: "packages", href: "/packages" },
                { key: "portfolio", href: "/portfolio" },
                { key: "blog", href: "/blog" }
              ].map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname.endsWith(link.href) ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <div className="hidden md:block">
              <Link 
                href="/portal"
                className="text-sm font-medium hover:text-primary transition-colors px-4"
              >
                Client Login
              </Link>
              <Link 
                href="/contact"
                className={cn(buttonVariants({ size: "sm" }), "px-5 py-4 rounded-full font-medium transition-transform hover:scale-105")}
              >
                {t("bookCall")}
              </Link>
            </div>
            
            <div className="flex items-center gap-2 md:hidden">
              <LanguageSwitcher />
              <ThemeToggle />
              <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
