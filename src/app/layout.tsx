import type { Metadata } from 'next';
import { Poppins, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageBackground from '@/components/common/PageBackground';
import Preloader from '@/components/layout/Preloader';
import { companyInfo } from '@/data';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${companyInfo.name} | 33kV–400kV Transmission & Substation EPC`,
    template: `%s | ${companyInfo.shortName}`,
  },
  description:
    `${companyInfo.name} — Major Turnkey EPC Contractor for ${companyInfo.voltageRange} Extra High-Tension Transmission Lines, Grid Substations (GSS), Solar Evacuation Corridors & Highway Diversions. Founded in ${companyInfo.foundedYear} in ${companyInfo.address.city}, Rajasthan.`,
  keywords: [
    '33kV to 400kV transmission lines Jaipur',
    '765kV substation switchyard Rajasthan',
    'solar power evacuation contractor',
    'RRVPNL turnkey transmission contractor',
    'Moji Construction Private Limited',
    'line shifting NHAI expressway',
    'OPGW stringing contractor',
    'EHT transmission line contractor India',
  ],
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  metadataBase: new URL(companyInfo.website),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: companyInfo.website,
    title: `${companyInfo.name} | Power Transmission & Substation Infrastructure`,
    description:
      `Turnkey EPC for ${companyInfo.voltageRange} Transmission Lines & Grid Substations across India since ${companyInfo.foundedYear}.`,
    siteName: companyInfo.name,
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: `${companyInfo.name} Transmission Towers & Infrastructure`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${companyInfo.name} | Power Transmission Infrastructure`,
    description:
      `Turnkey EPC for ${companyInfo.voltageRange} Transmission Lines & Grid Substations across India since ${companyInfo.foundedYear}.`,
    images: ['/opengraph-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['ConstructionBusiness', 'Organization'],
  name: companyInfo.name,
  image: `${companyInfo.website}/icon.png`,
  '@id': companyInfo.website,
  url: companyInfo.website,
  email: companyInfo.email,
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: companyInfo.address.street,
    addressLocality: companyInfo.address.city,
    addressRegion: companyInfo.address.state,
    postalCode: companyInfo.address.pincode,
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.8285,
    longitude: 75.7945,
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'Rajasthan',
    },
    {
      '@type': 'Country',
      name: 'India',
    },
  ],
  foundingDate: '1990-01-01',
  founder: {
    '@type': 'Person',
    name: companyInfo.founder.name,
    jobTitle: companyInfo.founder.role,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Preloader />
        <PageBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
