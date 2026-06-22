import * as React from "react"
import { notFound } from "next/navigation"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { CtaButton } from "@/components/cta-button"
import { Card, CardContent } from "@/components/ui/card"
import { FinalCta } from "@/components/sections/final-cta"
import { servicesData } from "@/data/services"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServiceSubpage({ params }: PageProps) {
  const resolvedParams = await params
  const service = servicesData.find((s) => s.slug === resolvedParams.slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon
  const serviceDiscussHref = `/contact?intent=service-discuss&service=${service.slug}`
  const serviceQuoteHref = `/contact?intent=service-quote&service=${service.slug}`

  return (
    <>
      <Section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border bg-muted/10">
        <Container>
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Icon className="w-4 h-4 mr-2" />
              Service Overview
            </div>
            <Heading level={1} className="mb-6">
              {service.title}
            </Heading>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {service.description}
            </p>
            <Link href={serviceDiscussHref}>
              <CtaButton size="lg">
                Discuss Your Project
              </CtaButton>
            </Link>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              <div>
                <Heading level={2} className="mb-6">Overview</Heading>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.overview}
                </p>
              </div>

              <div>
                <Heading level={2} className="mb-6">Core Benefits</Heading>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-card border border-border/50 p-4 rounded-xl">
                      <CheckCircle2 className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="font-medium text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Heading level={2} className="mb-8">Our Process</Heading>
                <div className="space-y-8">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="flex gap-6 relative">
                      {idx !== service.process.length - 1 && (
                        <div className="absolute left-[19px] top-12 bottom-[-24px] w-0.5 bg-border" />
                      )}
                      <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 z-10 text-primary font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <Card className="bg-muted/50 border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="font-heading text-xl font-semibold mb-4">Investment</h3>
                    <p className="text-3xl font-extrabold text-foreground mb-2">
                      {service.pricingRange}
                    </p>
                    <p className="text-sm text-muted-foreground mb-8">
                      Pricing varies based on scope and complexity.
                    </p>
                    <Link href={serviceQuoteHref} className="w-full">
                      <CtaButton className="w-full">Get a Quote</CtaButton>
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="font-heading text-xl font-semibold mb-4">Deliverables</h3>
                    <ul className="space-y-3">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  )
}
