"use client"

import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/ui/container"

const footerLinks = {
  services: [
    { name: "AI Automation", href: "/services/ai-automation" },
    { name: "Website Development", href: "/services/website-development" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Branding & Design", href: "/services/branding-design" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Packages", href: "/packages" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ]
}

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <Container>
        {/* Newsletter Opt-in */}
        <div className="py-12 border-b border-border mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h3 className="text-2xl font-heading font-bold mb-2">Join our insider list.</h3>
            <p className="text-muted-foreground text-sm">Get our weekly insights on AI Automation and engineering scalable systems.</p>
          </div>
          <form 
            onSubmit={(e) => e.preventDefault()}
            className="w-full md:w-auto flex gap-2"
          >
            <input 
              type="email" 
              aria-label="Email address for newsletter"
              placeholder="hello@yourcompany.com" 
              className="px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 w-full md:w-[300px]"
              required
            />
            <button type="submit" className="px-6 py-3 bg-foreground text-background font-medium rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="font-heading text-2xl font-bold tracking-tight inline-block mb-4">
              SGENCY<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mb-6">
              Build. Automate. Scale. Websites, Software, Marketing & AI Automation under one strategic partner.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-4 text-foreground">Ready to scale?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Book a consultation to discuss your transformation.
            </p>
            <Link href="/contact" className="text-sm font-medium text-primary hover:underline underline-offset-4">
              Start a project &rarr;
            </Link>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sgency. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
