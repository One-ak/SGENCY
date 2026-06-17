import { Hero } from "@/components/sections/hero"
import { ServicesPreview } from "@/components/sections/services-preview"
import { BusinessTransformation } from "@/components/sections/transformation"
import { PortfolioPreview } from "@/components/sections/portfolio-preview"
import { PackagesPreview } from "@/components/sections/packages-preview"
import { Testimonials } from "@/components/sections/testimonials"
import { FinalCta } from "@/components/sections/final-cta"
import { RoiCalculator } from "@/components/roi-calculator"
import { Container } from "@/components/ui/container"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <section className="py-20 bg-muted/30">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Discover Your Automation Potential</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Use our interactive calculator to see exactly how much capital you can unlock by automating repetitive workflows.</p>
          </div>
          <RoiCalculator />
        </Container>
      </section>
      <BusinessTransformation />
      <PortfolioPreview />
      <PackagesPreview />
      <Testimonials />
      <FinalCta />
    </>
  )
}
