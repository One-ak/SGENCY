import { MetadataRoute } from 'next'
import { portfolioData } from '@/data/portfolio'
import { blogData } from '@/data/blog'
import { siteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'hi'] as const
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/packages',
    '/blog',
    '/contact',
    '/privacy',
    '/terms'
  ]

  // Core static pages
  const corePages = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  )

  // Dynamic Portfolio Pages
  const portfolioPages = locales.flatMap((locale) =>
    portfolioData.map((project) => ({
      url: `${siteUrl}/${locale}/portfolio/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  // Dynamic Blog Pages
  const blogPages = locales.flatMap((locale) =>
    blogData.map((post) => ({
      url: `${siteUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  return [...corePages, ...portfolioPages, ...blogPages]
}
