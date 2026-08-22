import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services, workflowSteps } from '@/data';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import CTA from '@/components/home/CTA';
import AnimatedBackground from '@/components/common/AnimatedBackground';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Services | Transmission Lines, GSS & Solar Evacuation',
  description:
    'Comprehensive power infrastructure services in Rajasthan — 33kV to 765kV transmission lines, grid substations (GSS), solar power evacuation, line shifting for NHAI/PWD, and O&M services. Moji Construction, Jaipur.',
  alternates: {
    canonical: '/services',
  },
};

const SECTORS = [
  { 
    icon: '🏛️', 
    name: 'State Power Utilities', 
    logos: ['/images/clients/RRVPNL.png'] 
  },
  { 
    icon: '☀️', 
    name: 'Solar IPPs & Renewables', 
    logos: ['/images/clients/TATA Power Renewable Energy Limited.svg', '/images/clients/Avaada Clean Projects Private Limited.webp', '/images/clients/TATA Power Solar Systems Limited.png'] 
  },
  { 
    icon: '🛣️', 
    name: 'Highway & Rail Infrastructure', 
    logos: ['/images/clients/National Highways Authority of India.webp'] 
  },
  { 
    icon: '🏭', 
    name: 'Heavy Industry & EPC', 
    logos: ['/images/clients/Ashoka Buildcon Limited.png', '/images/clients/TATA Projects Limited.webp'] 
  },
];

export default function ServicesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((svc, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: svc.title,
        description: svc.description,
        provider: {
          '@type': 'ConstructionBusiness',
          name: 'Moji Construction Private Limited',
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ── HERO SECTION ──────────────────────────── */}
      <section className={styles.hero}>
        <AnimatedBackground />
        <div className={styles.heroOrangeOrb} />
        <div className={`container ${styles.heroInner}`} style={{ position: 'relative', zIndex: 2 }}>
          <h1 className={styles.heroTitle}>
            Turnkey Transmission & <br />
            <span className={styles.accent}>Grid Infrastructure</span>
          </h1>
          <p className={styles.heroSub}>
            From reconnaissance survey to energized commissioning — delivering 33kV to 765kV transmission lines,
            substation switchyards, solar power evacuation, and specialized corridor diversions across Rajasthan.
          </p>

          {/* Quick Metrics Bar */}
          <div className={styles.heroMetrics}>
            <div className={styles.metricItem}>
              <span className={styles.metricVal}>4,000+</span>
              <span className={styles.metricLabel}>KM Lines Energized</span>
            </div>
            <div className={styles.metricDivider} />
            <div className={styles.metricItem}>
              <span className={styles.metricVal}>33 – 765 kV</span>
              <span className={styles.metricLabel}>Voltage Classes</span>
            </div>
            <div className={styles.metricDivider} />
            <div className={styles.metricItem}>
              <span className={styles.metricVal}>150+</span>
              <span className={styles.metricLabel}>Major Packages</span>
            </div>
            <div className={styles.metricDivider} />
            <div className={styles.metricItem}>
              <span className={styles.metricVal}>36+</span>
              <span className={styles.metricLabel}>Years Track Record</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── DETAILED SERVICES GRID ─────────────────── */}
      <SectionWrapper variant="light" id="services-grid">
        <div className="container">
          <SectionTitle
            badge="6 Core Capabilities"
            title="Specialized Power Infrastructure Services"
            subtitle="Engineered to meet the rigorous standards of RRVPNL, Tata Projects, NHAI, and leading renewable energy producers."
          />
          <div className={styles.grid}>
            {services.map((svc) => (
              <div
                key={svc.id}
                className={styles.card}
                style={{ '--card-color': svc.color } as React.CSSProperties}
              >
                {svc.image ? (
                  <div className={styles.imageBanner}>
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.imageOverlay} />
                    <div className={styles.iconOverlay}>
                      <span className={styles.icon}>{svc.icon}</span>
                    </div>
                    {svc.badge && <span className={styles.cardBadge}>{svc.badge}</span>}
                  </div>
                ) : (
                  <div className={styles.iconWrap}>
                    <span className={styles.icon}>{svc.icon}</span>
                    <div className={styles.iconGlow} />
                  </div>
                )}

                <div className={styles.cardContent}>
                  {svc.voltage && <span className={styles.voltageTag}>⚡ {svc.voltage}</span>}
                  <h2 className={styles.title}>{svc.title}</h2>
                  <p className={styles.desc}>{svc.description}</p>

                  <div className={styles.featuresWrap}>
                    <h3 className={styles.featuresHeading}>Scope of Work & Capabilities:</h3>
                    <ul className={styles.features}>
                      {svc.features.map((f, fi) => (
                        <li key={fi} className={styles.feature}>
                          <span className={styles.dot} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {svc.realProjects && svc.realProjects.length > 0 && (
                    <div className={styles.projectsBox}>
                      <div className={styles.projectsBoxHeader}>
                        <span className={styles.projectsBoxIcon}>📋</span>
                        <h4 className={styles.projectsBoxTitle}>Real Project References:</h4>
                      </div>
                      <ul className={styles.projectsList}>
                        {svc.realProjects.map((rp, rpi) => (
                          <li key={rpi} className={styles.projectItem}>
                            • {rp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className={styles.cardFooter}>
                  <Link href="/contact" className={styles.serviceActionBtn}>
                    Request Proposal for this Scope →
                  </Link>
                </div>
                <div className={styles.border} />
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── EXECUTION METHODOLOGY ─────────────────── */}
      <SectionWrapper variant="white" id="execution-process">
        <div className="container">
          <SectionTitle
            badge="Standard Operating Procedure"
            title="Our 5-Stage Project Execution Workflow"
            subtitle="From initial reconance survey to statutory handover — ensuring 100% on-time and safety-compliant delivery."
          />
          <div className={styles.processGrid}>
            {workflowSteps.map((s, idx) => (
              <div key={idx} className={styles.processCard}>
                <div className={styles.processHeader}>
                  <span className={styles.processNumber}>{s.num}</span>
                  <span className={styles.processIcon}>⚡</span>
                </div>
                <h3 className={styles.processTitle}>{s.title}</h3>
                <p className={styles.processDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── SECTORS SERVED ─────────────────────────── */}
      <SectionWrapper variant="alt" id="sectors-served">
        <div className="container">
          <SectionTitle
            badge="Client Sectors"
            title="Trusted Partner Across Critical Domains"
            subtitle="We support power utilities, mega renewable developers, and national infrastructure projects."
          />
          <div className={styles.sectorsGrid}>
            {SECTORS.map((sec, idx) => (
              <div key={idx} className={styles.sectorCard}>
                <div className={styles.sectorIcon}>{sec.icon}</div>
                <h3 className={styles.sectorName}>{sec.name}</h3>
                <div className={styles.sectorLogos}>
                  {sec.logos.map((logo, lIdx) => (
                    <div key={lIdx} className={styles.clientLogoWrap}>
                      <Image src={logo} alt="Client Logo" fill style={{ objectFit: 'contain' }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTA />
    </>
  );
}
