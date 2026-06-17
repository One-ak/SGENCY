"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { CtaButton } from "@/components/cta-button"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export function FinalCta() {
  const t = useTranslations("FinalCta");

  return (
    <section className="py-16 md:py-32 relative bg-background">
      <Container>
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-border p-6 md:p-16 text-center shadow-lg">
          <div className="absolute inset-0 bg-noise-texture opacity-20 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <Heading level={2} size="4xl" className="mb-4 md:mb-6 tracking-tight drop-shadow-sm text-3xl md:text-5xl">
              {t("title")}
            </Heading>
            
            <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-10 leading-relaxed max-w-2xl text-shadow-sm px-2">
              {t("subtitle")}
            </p>
            
            <CtaButton size="lg" className="w-full sm:w-auto text-base md:text-lg px-6 py-4 md:px-8 md:py-6 rounded-xl font-bold bg-gradient-to-b from-primary/80 to-primary shadow-[inset_0_2px_0_rgba(255,255,255,0.4),0_6px_0_var(--primary),0_10px_20px_rgba(0,0,0,0.3)] active:translate-y-[6px] active:shadow-[inset_0_2px_0_rgba(255,255,255,0.4),0_0px_0_var(--primary),0_4px_8px_rgba(0,0,0,0.3)] transition-all">
              {t("button")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </CtaButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
