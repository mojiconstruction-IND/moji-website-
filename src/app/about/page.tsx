import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Moji Construction | History, Mission & Leadership Team',
  description: 'Learn about Moji Construction Private Limited — founded in 1990 in Jaipur. Our history, mission, values, and leadership team behind 36 years of transmission line and GSS excellence.',
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
      alternateName: 'Moji Construction',
      foundingDate: '1990',
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
