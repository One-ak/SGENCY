import { Cpu, Globe, Code, Megaphone, Palette, Video, Briefcase, LucideIcon } from "lucide-react"

export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  overview: string;
  benefits: string[];
  deliverables: string[];
  process: { title: string; description: string }[];
  pricingRange: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: "ai-automation",
    title: "AI Automation",
    description: "Streamline operations with custom AI agents and workflow automation.",
    icon: Cpu,
    overview: "We architect and deploy custom AI agents and automated workflows that eliminate manual tasks, reduce human error, and scale your operational capacity without adding headcount. From customer support bots to internal data processing, we turn AI into a tangible competitive advantage.",
    benefits: [
      "Reduce operational costs by up to 40%",
      "Eliminate manual data entry and repetitive tasks",
      "24/7 availability for customer interactions",
      "Scalable infrastructure that grows with your business"
    ],
    deliverables: [
      "Custom AI Agent Development",
      "Workflow Automation Setup (Zapier/Make)",
      "LLM Integration (OpenAI, Anthropic)",
      "Staff Training & Handoff Documentation"
    ],
    process: [
      { title: "Audit", description: "We analyze your current operations to identify high-ROI automation opportunities." },
      { title: "Design", description: "We map out the automated workflows and select the appropriate AI models." },
      { title: "Implementation", description: "We build, integrate, and test the systems in a staging environment." },
      { title: "Deployment", description: "We roll out the automation to your team and monitor performance." }
    ],
    pricingRange: "₹1,49,999 - ₹4,99,999+"
  },
  {
    slug: "website-development",
    title: "Website Development",
    description: "High-performance, conversion-optimized websites built for scale.",
    icon: Globe,
    overview: "Your website is your most valuable digital asset. We build high-performance, SEO-optimized, and conversion-focused web experiences using modern frameworks like Next.js. We don't just build pages; we engineer digital storefronts designed to generate revenue.",
    benefits: [
      "Lightning-fast load times (Lighthouse 95+)",
      "Mobile-first, fully responsive design",
      "Built-in technical SEO best practices",
      "Scalable CMS architecture for easy updates"
    ],
    deliverables: [
      "Custom UI/UX Design",
      "Frontend Development (Next.js/React)",
      "CMS Integration (Sanity/Contentful)",
      "On-page SEO & Performance Optimization"
    ],
    process: [
      { title: "Discovery", description: "We define your target audience, conversion goals, and brand messaging." },
      { title: "Design", description: "We create high-fidelity wireframes and interactive prototypes." },
      { title: "Development", description: "We translate the design into clean, scalable code." },
      { title: "Launch", description: "Rigorous QA testing, performance auditing, and deployment." }
    ],
    pricingRange: "₹79,999 - ₹2,99,999+"
  },
  {
    slug: "software-development",
    title: "Software Development",
    description: "Custom web apps, SaaS platforms, and internal tools.",
    icon: Code,
    overview: "We design and engineer bespoke software solutions that solve complex business problems. Whether you're launching a new SaaS product, building a customer portal, or developing internal tools to manage your team, we deliver scalable, secure, and maintainable applications.",
    benefits: [
      "Tailored solutions that fit your exact business logic",
      "Enterprise-grade security and data protection",
      "Cloud-native architecture for infinite scalability",
      "Seamless integration with your existing tech stack"
    ],
    deliverables: [
      "Full-stack Web Application",
      "Database Architecture & API Development",
      "Third-party Software Integrations",
      "Automated Testing & CI/CD Pipelines"
    ],
    process: [
      { title: "Scoping", description: "Detailed technical specification and architecture planning." },
      { title: "Sprints", description: "Agile development with regular progress updates and demos." },
      { title: "Testing", description: "Comprehensive unit, integration, and user acceptance testing." },
      { title: "Maintenance", description: "Ongoing support, security updates, and feature enhancements." }
    ],
    pricingRange: "₹2,99,999 - ₹9,99,999+"
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "Data-driven campaigns to acquire and retain high-value customers.",
    icon: Megaphone,
    overview: "We execute precision-targeted digital marketing campaigns that drive measurable growth. By combining data analytics, creative ad copy, and aggressive conversion rate optimization, we ensure every marketing rupee spent delivers maximum return on investment.",
    benefits: [
      "Lower Customer Acquisition Cost (CAC)",
      "Higher Lifetime Value (LTV)",
      "Data-backed decision making",
      "Omnichannel brand presence"
    ],
    deliverables: [
      "Paid Ads Management (Meta, Google, LinkedIn)",
      "Conversion Rate Optimization (CRO)",
      "Email Marketing & Automation",
      "Comprehensive Analytics Dashboards"
    ],
    process: [
      { title: "Strategy", description: "Identifying target demographics, channels, and campaign objectives." },
      { title: "Creation", description: "Developing ad creatives, landing pages, and email sequences." },
      { title: "Launch", description: "Deploying campaigns with strict budget controls and tracking." },
      { title: "Optimization", description: "Continuous A/B testing and budget reallocation for maximum ROI." }
    ],
    pricingRange: "₹39,999 - ₹1,49,999+ / month"
  },
  {
    slug: "branding-design",
    title: "Branding & Design",
    description: "Premium visual identities that command authority in your market.",
    icon: Palette,
    overview: "We craft compelling brand identities that instantly communicate your value and establish market authority. From logo design to comprehensive brand guidelines, we ensure your visual presence reflects the premium quality of your products or services.",
    benefits: [
      "Increased perceived value and market authority",
      "Consistent messaging across all touchpoints",
      "Higher brand recall and customer trust",
      "Differentiation from direct competitors"
    ],
    deliverables: [
      "Brand Strategy & Positioning",
      "Logo & Visual Identity System",
      "Brand Guidelines Documentation",
      "Marketing Collateral Design"
    ],
    process: [
      { title: "Discovery", description: "Understanding your core values, mission, and target market." },
      { title: "Concepts", description: "Developing multiple creative directions for your visual identity." },
      { title: "Refinement", description: "Iterating on the chosen concept to achieve perfection." },
      { title: "Delivery", description: "Providing all necessary assets and brand guidelines." }
    ],
    pricingRange: "₹49,999 - ₹1,49,999+"
  },
  {
    slug: "video-production",
    title: "Video Production",
    description: "Cinematic brand videos and high-converting ad creatives.",
    icon: Video,
    overview: "Video is the most powerful medium for storytelling and conversion. We produce high-end, cinematic video content that captures attention, explains complex concepts simply, and drives action. From corporate documentaries to snappy social media ads, we handle everything.",
    benefits: [
      "Higher engagement rates on social media",
      "Increased landing page conversion rates",
      "Simplified explanation of complex products",
      "Premium brand perception"
    ],
    deliverables: [
      "Brand Anthems & Corporate Videos",
      "High-converting Video Ads",
      "Product Demonstrations",
      "Customer Testimonial Videos"
    ],
    process: [
      { title: "Pre-production", description: "Scriptwriting, storyboarding, and location scouting." },
      { title: "Production", description: "Professional filming with high-end cinema equipment." },
      { title: "Post-production", description: "Editing, color grading, sound design, and VFX." },
      { title: "Distribution", description: "Formatting deliverables for specific platforms and aspect ratios." }
    ],
    pricingRange: "₹99,999 - ₹4,99,999+"
  },
  {
    slug: "business-consulting",
    title: "Business Consulting",
    description: "Strategic guidance to overcome bottlenecks and scale efficiently.",
    icon: Briefcase,
    overview: "We provide high-level strategic consulting for businesses looking to scale rapidly. We analyze your current operations, identify bottlenecks, and develop actionable roadmaps for digital transformation, market expansion, and operational efficiency.",
    benefits: [
      "Clear, actionable growth roadmaps",
      "Identification and removal of operational bottlenecks",
      "Expert guidance on technology adoption",
      "Objective, data-driven business analysis"
    ],
    deliverables: [
      "Comprehensive Business Audit",
      "Digital Transformation Roadmap",
      "Technology Stack Recommendations",
      "Quarterly Strategy Review Sessions"
    ],
    process: [
      { title: "Assessment", description: "Deep dive into your current processes, financials, and team structure." },
      { title: "Strategy", description: "Developing a tailored plan to achieve your specific growth goals." },
      { title: "Alignment", description: "Ensuring all stakeholders understand and support the new direction." },
      { title: "Execution Support", description: "Ongoing advisory to ensure successful implementation." }
    ],
    pricingRange: "Custom Pricing"
  }
]
