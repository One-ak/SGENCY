"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"

export default function TermsPage() {
  return (
    <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
            Legal
          </div>
          <Heading level={1} className="mb-8 text-4xl md:text-5xl font-bold tracking-tight">
            Terms of Service
          </Heading>
          
          <div className="prose prose-lg dark:prose-invert text-muted-foreground">
            <p>Last updated: June 2026</p>
            
            <h3>1. Agreement to Terms</h3>
            <p>By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

            <h3>2. Use License</h3>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on letsgroww&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>

            <h3>3. Disclaimer</h3>
            <p>The materials on letsgroww&apos;s website are provided on an &apos;as is&apos; basis. letsgroww makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

            <h3>4. Limitations</h3>
            <p>In no event shall letsgroww or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on letsgroww&apos;s website, even if letsgroww or a letsgroww authorized representative has been notified orally or in writing of the possibility of such damage.</p>

            <h3>5. Contact Us</h3>
            <p>If you have any questions about these Terms, please contact us at <strong>anshpratapsingh333@gmail.com</strong>.</p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
