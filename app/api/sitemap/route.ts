// app/api/sitemap/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://barahvalley.vercel.app';

  // Define your site pages dynamically
  const pages = [
    '/',
    '/about',
    '/tourism',
    '/events',
    '/directory',
    '/contact',
    // Add additional static or dynamic pages here
  ];

  // Construct the sitemap XML structure
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        const lastModified = new Date().toISOString();
        return `
        <url>
          <loc>${baseUrl}${page}</loc>
          <lastmod>${lastModified}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>${page === '/' ? '1.0' : '0.8'}</priority>
        </url>`;
      })
      .join('')}
  </urlset>`;

  return NextResponse.json(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}