export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  image: string;
  client: string;
  year: string;
  duration: string;
  link?: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

export const portfolioData: PortfolioProject[] = [
  {
    slug: "mll-agro-industries",
    title: "MLL Agro Industries",
    category: "Corporate Website",
    image: "/images/portfolio_mll.png",
    client: "MLL Agro Industries",
    year: "2024",
    duration: "4 Weeks",
    link: "https://mllagroindustries.com/index.html",
    challenge: "MLL Agro Industries needed a modern, professional web presence to showcase their agricultural products, manufacturing capabilities, and global export reach. Their previous digital footprint was non-existent, making it difficult to establish trust with international B2B buyers.",
    solution: "We designed and developed a custom corporate website from the ground up. The focus was on high-quality imagery, clear product categorization, and a seamless inquiry process for wholesale buyers. The site architecture was built for speed and technical SEO to capture organic search traffic in the agriculture sector.",
    results: [
      "Established a professional digital presence for global B2B outreach.",
      "Optimized product catalog for search engines, increasing organic visibility.",
      "Streamlined the inquiry process for international buyers."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
  },
  {
    slug: "ak-portfolio",
    title: "One-AK Portfolio",
    category: "Personal Portfolio",
    image: "/images/portfolio_ak.png",
    client: "Ansh Pratap Singh",
    year: "2025",
    duration: "2 Weeks",
    link: "https://one-ak.github.io/portfolio/",
    challenge: "As a Data Science and AI student branching into web development, the client needed a striking personal portfolio to showcase complex projects, academic achievements, and technical skills in a visually engaging, easy-to-digest format.",
    solution: "We built a dark-themed, highly interactive portfolio featuring smooth scroll animations, a dedicated project showcase, and a clean typography system. The site acts as an interactive resume that immediately communicates technical competence and design sensibility.",
    results: [
      "Created a centralized hub for all technical projects and case studies.",
      "Implemented a responsive design that looks stunning on mobile devices.",
      "Integrated a simple contact form to capture freelance inquiries."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"]
  },
  {
    slug: "fintech-saas-platform",
    title: "FinTech SaaS Platform",
    category: "Software Development",
    image: "/images/portfolio_fintech.png",
    client: "Confidential Startup",
    year: "2026",
    duration: "12 Weeks",
    challenge: "A financial technology startup needed a scalable web application to handle real-time transaction tracking, data visualization, and secure user authentication. The platform needed to handle high concurrency while maintaining sub-second response times.",
    solution: "We engineered a robust full-stack application using Next.js and PostgreSQL. We implemented a custom charting dashboard for users to visualize their financial data in real-time, backed by a highly secure authentication system and API architecture.",
    results: [
      "Successfully launched MVP ahead of schedule, enabling early user testing.",
      "Achieved 99.9% uptime during initial launch phase.",
      "Dashboard reduced data analysis time for users by 60%."
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Supabase"]
  },
  {
    slug: "ai-customer-support",
    title: "AI Customer Support Agent",
    category: "AI Automation",
    image: "/images/portfolio_ai.png",
    client: "E-Commerce Retailer",
    year: "2026",
    duration: "6 Weeks",
    challenge: "A rapidly growing e-commerce brand was overwhelmed by customer support tickets, leading to slow response times and frustrated customers. They needed a way to handle Tier-1 inquiries automatically without losing the 'human' touch.",
    solution: "We developed and integrated a custom LLM-powered AI support agent directly into their existing helpdesk. The agent was trained on their specific product catalog, return policies, and historical support tickets to provide accurate, brand-aligned responses 24/7.",
    results: [
      "Automated 65% of all incoming customer support tickets.",
      "Reduced average response time from 12 hours to 2 seconds.",
      "Saved the client equivalent to 3 full-time support hires."
    ],
    technologies: ["Python", "OpenAI API", "LangChain", "Node.js", "Zendesk API"]
  }
];
