import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://extru2026.com'
  
  // Main pages
  const routes = [
    '',
    '/merchandise',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Department pages - dynamically add all department IDs
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

  return [...routes, ...departmentRoutes]
}
