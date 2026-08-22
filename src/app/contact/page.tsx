import type { Metadata } from 'next';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import FAQ from '@/components/home/FAQ';
import AnimatedBackground from '@/components/common/AnimatedBackground';
import { faqs, companyInfo, directors } from '@/data';
import ContactForm from './ContactForm';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact Us | Commercial & Technical Tender Inquiries',
  description:
    'Contact Moji Construction Private Limited (CIN: U45204RJ2002PTC017968). Request turnkey EPC quotes for 33kV–400kV/765kV transmission lines, grid substations (GSS), solar evacuation, and NHAI diversions in Jaipur, Rajasthan.',
  alternates: {
    canonical: '/contact',
  },
};

const INQUIRY_STREAMS = [
  {
    icon: '⚡',
    title: 'Turnkey EPC & Tenders',
    desc: 'For RRVPNL packages, Private Power IPPs, 33kV–400kV transmission lines, and 132kV–765kV switchyards.',
    badge: '48h Response',
  },
  {
    icon: '☀️',
    title: 'Solar Evacuation Lines',
    desc: 'Dedicated 132kV / 220kV pooling evacuation lines, solar park pooling switchyards, and bay extensions.',
    badge: 'Solar Specialists',
  },
  {
    icon: '🛣️',
    title: 'NHAI & Railway Diversions',
    desc: 'Fast-track transmission line shifting, height raising, and corridor clearances for NHAI and DFCC Rail.',
    badge: 'Statutory Liaison',
  },
  {
    icon: '🔧',
    title: 'O&M & Health AMC',
    desc: 'Annual Maintenance Contracts, drone/infrared thermography, missing member replacement, and tower revetment.',
    badge: 'AMC Support',
  },
];

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'ConstructionBusiness',
      name: companyInfo.name,
      founder: {
        '@type': 'Person',
        name: companyInfo.founder.name,
        jobTitle: companyInfo.founder.role,
      },
      foundingDate: '1990-01-01',
      vatID: companyInfo.cin,
      contactPoint: {
        '@type': 'ContactPoint',
        email: companyInfo.email,
        contactType: 'commercial sales & engineering tenders',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: companyInfo.address.street,
        addressLocality: companyInfo.address.city,
        addressRegion: companyInfo.address.state,
        postalCode: companyInfo.address.pincode,
        addressCountry: 'IN',
      },
    },
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO SECTION ──────────────────────────── */}
      <section className={styles.hero}>
        <AnimatedBackground />
        <div className={styles.heroOrangeOrb} />
        <div className={`container ${styles.heroInner}`} style={{ position: 'relative', zIndex: 2 }}>
          <h1 className={styles.heroTitle}>
            Connect With Our <br />
            <span className={styles.accent}>Engineering & Commercial Team</span>
          </h1>
          <p className={styles.heroSub}>
            Founded in {companyInfo.foundedYear} by {companyInfo.founder.fullTitle} {companyInfo.founder.name} and headquartered in {companyInfo.address.city}, {companyInfo.name} provides turnkey EPC contracting for {companyInfo.voltageRange} transmission lines, grid substations, solar evacuation corridors, and highway diversions across India.
          </p>

          {/* Response Commitment Strip */}
          <div className={styles.heroCommitmentStrip}>
            <div className={styles.commitItem}>
              <span className={styles.commitIcon}>⚡</span>
              <div>
                <strong className={styles.commitTitle}>Rapid RFP Turnaround</strong>
                <span className={styles.commitSub}>Response within 24–48 hours</span>
              </div>
            </div>
            <div className={styles.commitDivider} />
            <div className={styles.commitItem}>
              <span className={styles.commitIcon}>📍</span>
              <div>
                <strong className={styles.commitTitle}>Registered Head Office</strong>
                <span className={styles.commitSub}>Pratap Nagar, {companyInfo.address.city}, RJ</span>
              </div>
            </div>
            <div className={styles.commitDivider} />
            <div className={styles.commitItem}>
              <span className={styles.commitIcon}>🏢</span>
              <div>
                <strong className={styles.commitTitle}>Corporate Identity</strong>
                <span className={styles.commitSub}>CIN: {companyInfo.cin}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INQUIRY STREAMS ───────────────────────── */}
      <SectionWrapper variant="alt" id="inquiry-streams">
        <div className="container">
          <SectionTitle
            badge="Specialized Channels"
            title="How We Can Partner With Your Organization"
            subtitle="Direct channels for state utilities, solar power developers, infrastructure concessionaires, and procurement officers."
          />

          <div className={styles.streamsGrid}>
            {INQUIRY_STREAMS.map((s, i) => (
              <div key={i} className={styles.streamCard}>
                <div className={styles.streamTop}>
                  <span className={styles.streamIcon}>{s.icon}</span>
                  <span className={styles.streamBadge}>{s.badge}</span>
                </div>
                <h3 className={styles.streamTitle}>{s.title}</h3>
                <p className={styles.streamDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── CONTACT FORM & CORPORATE INFO ─────────── */}
      <SectionWrapper variant="white" id="contact-main">
        <div className="container">
          <div className={styles.grid}>
            {/* Left Column: Enhanced Proposal Form */}
            <div className={styles.formWrap}>
              <SectionTitle
                badge="Request Proposal"
                title="Send a Commercial / Technical Inquiry"
                subtitle="Submit your project details for an engineering feasibility evaluation or formal commercial tender bid."
                align="left"
              />
              <ContactForm />
            </div>

            {/* Right Column: Verified Corporate & Office Details */}
            <div className={styles.infoWrap}>
              {/* Card 1: Registered Head Office */}
              <div className={styles.infoCard}>
                <div className={styles.infoCardHeader}>
                  <span className={styles.infoCardIcon}>📍</span>
                  <h3 className={styles.infoTitle}>Registered Head Office</h3>
                </div>
                <p className={styles.infoText}>
                  <strong>{companyInfo.name}</strong><br />
                  {companyInfo.address.street},<br />
                  {companyInfo.address.city}, {companyInfo.address.state} - {companyInfo.address.pincode}, {companyInfo.address.country}
                </p>
                <div className={styles.infoMetaRow}>
                  <span>🕒 <strong>Hours:</strong> {companyInfo.workingHours}</span>
                </div>
              </div>

              {/* Card 2: Commercial Channel */}
              <div className={styles.infoCard}>
                <div className={styles.infoCardHeader}>
                  <span className={styles.infoCardIcon}>✉️</span>
                  <h3 className={styles.infoTitle}>Official Email & Proposals</h3>
                </div>
                <p className={styles.infoText}>
                  Send technical drawings, Single-Line Diagrams (SLD), and tender specifications directly to:
                </p>
                <a href={`mailto:${companyInfo.email}`} className={styles.infoEmailLink}>
                  {companyInfo.email}
                </a>
              </div>

              {/* Card 3: Corporate Registration & Leadership */}
              <div className={styles.infoCard}>
                <div className={styles.infoCardHeader}>
                  <span className={styles.infoCardIcon}>🏢</span>
                  <h3 className={styles.infoTitle}>Corporate Credentials</h3>
                </div>
                <div className={styles.credList}>
                  <div className={styles.credItem}>
                    <span>Corporate Identity:</span>
                    <strong>CIN: {companyInfo.cin}</strong>
                  </div>
                  <div className={styles.credItem}>
                    <span>Inception / Inc:</span>
                    <strong>Founded {companyInfo.foundedYear} (Inc. 2002)</strong>
                  </div>
                  <div className={styles.credItem}>
                    <span>Founder & Managing Director:</span>
                    <strong>{companyInfo.founder.name} (DIN: {companyInfo.founder.din})</strong>
                  </div>
                  <div className={styles.credItem}>
                    <span>Key Directors:</span>
                    <strong>{directors.filter(d => !d.isFounder).map(d => d.name).join(', ')}</strong>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className={styles.mapWrap}>
                <iframe
                  title="Moji Construction Head Office Location in Jaipur"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.7!2d75.7945!3d26.8285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9f9c7f66a2d%3A0x2a9b3d0bb2a4a350!2sSector%207%2C%20Pratap%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302033!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── SHARED ACCESSIBLE FAQ SECTION ────────── */}
      <FAQ />
    </>
  );
}
