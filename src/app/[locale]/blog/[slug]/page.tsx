import * as React from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { FinalCta } from "@/components/sections/final-cta"
import { blogData } from "@/data/blog"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  const post = blogData.find((p) => p.slug === resolvedParams.slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    }
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params
  const post = blogData.find((p) => p.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border bg-background">
        <Container>
          <div className="mb-12">
            <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
              {post.category}
            </div>
            <Heading level={1} className="mb-8 text-4xl md:text-6xl font-bold tracking-tight">
              {post.title}
            </Heading>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-center gap-6 text-sm font-medium text-muted-foreground mb-12">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden bg-muted">
                  <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                </div>
                {post.author.name}
              </div>
            </div>

            <div className="w-full relative rounded-3xl overflow-hidden mb-16 shadow-2xl bg-muted/20 border border-border">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto max-h-[600px] object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-12 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Minimalist Prose Styling for Markdown */}
            <article className="prose prose-lg dark:prose-invert max-w-none 
              prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-ul:list-disc prose-ul:text-muted-foreground prose-ul:mb-6 prose-li:mb-2
              prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:text-foreground prose-blockquote:font-medium prose-blockquote:italic
              prose-img:rounded-2xl prose-img:shadow-xl prose-img:w-full prose-img:my-8
            ">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  )
}
