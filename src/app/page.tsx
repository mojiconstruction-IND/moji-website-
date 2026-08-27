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
  title: 'Moji Construction Pvt Ltd | EPC Contractor',
  description:
    'Moji Construction Pvt Ltd (Moji Construction Private Limited) — Turnkey EPC contractor for 33kV–400kV/765kV transmission lines & grid substations in Rajasthan. 36 years experience, 4,000+ km energised.',
  alternates: {
    canonical: 'https://mojiconstruction.com',
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
