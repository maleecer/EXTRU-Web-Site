import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://extru.edu.lk'
  
  // Main pages with high priority
  const mainRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/events', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/merchandise', priority: 0.8, changeFrequency: 'weekly' as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))

  // Section anchors for single-page navigation (helps with deep linking)
  const sectionAnchors = [
    { anchor: '/#about', priority: 0.8 },
    { anchor: '/#events', priority: 0.8 },
    { anchor: '/#departments', priority: 0.7 },
    { anchor: '/#projects', priority: 0.7 },
    { anchor: '/#schedule', priority: 0.7 },
    { anchor: '/#sponsors', priority: 0.6 },
    { anchor: '/#team', priority: 0.6 },
    { anchor: '/#contact', priority: 0.8 },
  ].map(({ anchor, priority }) => ({
    url: `${baseUrl}${anchor}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority,
  }))

  // Department pages
  const departments = [
    'afru',
    'amt', 
    'aseet',
    'atit',
    'rost',
    'rubic',
  ]

  const departmentRoutes = departments.map((id) => ({
    url: `${baseUrl}/departments/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...mainRoutes, ...sectionAnchors, ...departmentRoutes]
}
