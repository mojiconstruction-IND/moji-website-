import { MetadataRoute } from 'next';
import { companyInfo } from '@/data';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all standard crawlers
      {
        userAgent: '*',
        allow: '/',
      },
      // Allow Google AI (Gemini, AI Overviews, SGE)
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // Allow ChatGPT / OpenAI search
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      // Allow Claude (Anthropic)
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      // Allow Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Allow Apple AI (Siri, Apple Intelligence)
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      // Allow Meta AI
      {
        userAgent: 'meta-externalagent',
        allow: '/',
      },
      // Allow Amazon Alexa / Amazonbot
      {
        userAgent: 'Amazonbot',
        allow: '/',
      },
    ],
    sitemap: `${companyInfo.website}/sitemap.xml`,
  };
}
