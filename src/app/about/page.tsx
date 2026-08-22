import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About | Engineering Excellence',
  description: 'Learn about Moji Construction Private Limited — our history, mission, values, and leadership team. Engineering excellence since 2002 in Jaipur, Rajasthan.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'ConstructionBusiness',
      name: 'Moji Construction Private Limited',
      foundingDate: '2002',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        addressCountry: 'IN'
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutClient />
    </>
  );
}
