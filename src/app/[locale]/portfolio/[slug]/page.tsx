import * as React from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { ExternalLink, ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { CtaButton } from "@/components/cta-button"
import { FinalCta } from "@/components/sections/final-cta"
import { portfolioData } from "@/data/portfolio"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  const project = portfolioData.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.challenge,
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.challenge,
      type: 'article',
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Case Study`,
      description: project.challenge,
      images: [project.image],
    }
  }
}

export default async function PortfolioSubpage({ params }: PageProps) {
  const resolvedParams = await params
  const project = portfolioData.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <Section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border bg-background">
        <Container>
          <div className="mb-12">
            <Link href="/portfolio" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
              {project.category}
            </div>
            <Heading level={1} className="mb-8 text-5xl md:text-6xl font-bold tracking-tight">
              {project.title}
            </Heading>
            
            <div className="flex flex-wrap gap-8 text-muted-foreground mb-12">
              <div>
                <p className="text-sm uppercase tracking-wider font-semibold mb-1">Client</p>
                <p className="text-foreground font-medium">{project.client}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider font-semibold mb-1">Year</p>
                <p className="text-foreground font-medium">{project.year}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider font-semibold mb-1">Duration</p>
                <p className="text-foreground font-medium">{project.duration}</p>
              </div>
              {project.link && project.link !== "#" && (
                <div>
                  <p className="text-sm uppercase tracking-wider font-semibold mb-1">Live Demo</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline font-medium">
                    Visit Site <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-12 md:py-20">
        <Container>
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-muted mb-20 shadow-2xl border border-white/10 dark:border-white/5">
            <Image
              src={project.image}
              alt={`${project.title} Interface Preview`}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-16">
              <div>
                <Heading level={2} className="mb-6 text-3xl">The Challenge</Heading>
                <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                  <p className="leading-relaxed">{project.challenge}</p>
                </div>
              </div>

              <div>
                <Heading level={2} className="mb-6 text-3xl">Our Solution</Heading>
                <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                  <p className="leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div>
                <Heading level={2} className="mb-6 text-3xl">Key Results</Heading>
                <div className="space-y-4">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl shadow-sm">
                      <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                      <p className="text-lg font-medium text-foreground">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 p-8 rounded-3xl bg-muted/30 border border-border">
                <Heading level={3} className="text-xl mb-6">Technologies Used</Heading>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="bg-background border border-border px-4 py-2 rounded-xl text-sm font-medium text-foreground shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <hr className="border-border mb-8" />
                
                <Heading level={3} className="text-xl mb-4">Ready to start yours?</Heading>
                <p className="text-muted-foreground mb-6">
                  Let&apos;s discuss how we can achieve similar results for your business.
                </p>
                <Link href="/contact?intent=portfolio-case-study" className="block">
                  <CtaButton className="w-full">Book a Strategy Call</CtaButton>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  )
}
