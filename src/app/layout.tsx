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
    default: `Moji Construction Pvt Ltd | 33kV–400kV Transmission & Substation EPC`,
    template: `%s | Moji Construction Pvt Ltd`,
  },
  description:
    `${companyInfo.name} — Turnkey EPC contractor for 33kV to 400kV/765kV transmission lines & grid substations (GSS) in Jaipur, Rajasthan. Founded 1990. 4,000+ km energised.`,
  keywords: [
    'Moji Construction',
    'Moji Construction Private Limited',
    'Moji Construction Jaipur',
    'Moji Construction Pvt Ltd',
    'transmission line contractor Jaipur',
    'EPC contractor Rajasthan',
    '33kV to 400kV transmission lines Rajasthan',
    '765kV substation switchyard Rajasthan',
    'solar power evacuation contractor',
    'RRVPNL turnkey transmission contractor',
    'line shifting NHAI expressway',
    'OPGW stringing contractor India',
    'EHT transmission line contractor India',
    'grid substation GSS contractor',
  ],
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  metadataBase: new URL(companyInfo.website),
  alternates: {
    canonical: companyInfo.website,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: companyInfo.website,
    title: `Moji Construction Pvt Ltd | Power Transmission & Substation Infrastructure`,
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
  '@type': ['ConstructionBusiness', 'LocalBusiness', 'Organization'],
  name: companyInfo.name,
  alternateName: ['Moji Construction', 'Moji Construction Pvt Ltd'],
  image: `${companyInfo.website}/icon.png`,
  '@id': companyInfo.website,
  url: companyInfo.website,
  email: companyInfo.email,
  telephone: companyInfo.telephone,
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
  foundingDate: '1990',
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
  sameAs: [
    // Add social/directory profile URLs here when available, e.g.:
    // 'https://www.linkedin.com/company/moji-construction',
    // 'https://www.indiamart.com/moji-construction',
  ],
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
