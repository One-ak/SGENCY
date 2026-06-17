"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"

export default function PrivacyPage() {
  return (
    <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
            Legal
          </div>
          <Heading level={1} className="mb-8 text-4xl md:text-5xl font-bold tracking-tight">
            Privacy Policy
          </Heading>
          
          <div className="prose prose-lg dark:prose-invert text-muted-foreground">
            <p>Last updated: June 2026</p>
            
            <h3>1. Introduction</h3>
            <p>Welcome to SGENCY. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>

            <h3>2. The Data We Collect About You</h3>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul>
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            </ul>

            <h3>3. How We Use Your Personal Data</h3>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h3>4. Contact Details</h3>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at <strong>anshpratapsingh333@gmail.com</strong>.</p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
