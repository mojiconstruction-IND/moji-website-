import { MetadataRoute } from 'next';
import { companyInfo } from '@/data';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${companyInfo.website}/sitemap.xml`,
  };
}
