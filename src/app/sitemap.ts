import { MetadataRoute } from 'next'
import { portfolioData } from '@/data/portfolio'
import { blogData } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sgency.com'

  // Core static pages
  const corePages = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/packages',
    '/blog',
    '/contact',
    '/privacy',
    '/terms'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic Portfolio Pages
  const portfolioPages = portfolioData.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic Blog Pages
  const blogPages = blogData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...corePages, ...portfolioPages, ...blogPages]
}
