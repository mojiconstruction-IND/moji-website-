import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/home/Hero';
import { faqs } from '@/data';

// Dynamically import below-the-fold components for performance
const ClientsMarquee = dynamic(() => import('@/components/home/ClientsMarquee'));
const AboutPreview = dynamic(() => import('@/components/home/AboutPreview'));
const ServicesSection = dynamic(() => import('@/components/home/Services'));
const HowWeWork = dynamic(() => import('@/components/home/HowWeWork'));
const Stats = dynamic(() => import('@/components/home/Stats'));
const FAQ = dynamic(() => import('@/components/home/FAQ'));
const CTA = dynamic(() => import('@/components/home/CTA'));

export const metadata: Metadata = {
  title: 'Moji Construction Private Limited | 33kV–400kV Transmission & Substation EPC',
  description:
    'Moji Construction Private Limited — Turnkey EPC Contractor for 33kV, 132kV, 220kV & 400kV Transmission Lines, Grid Substations (GSS), Solar Evacuation Corridors & NHAI Diversions. Founded in 1990 in Jaipur, Rajasthan.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <ClientsMarquee />
      <AboutPreview />
      <ServicesSection />
      <HowWeWork />
      <Stats />
      <FAQ />
      <CTA />
    </>
  );
}
