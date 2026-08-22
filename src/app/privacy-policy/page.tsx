import type { Metadata } from 'next';
import Link from 'next/link';
import SectionWrapper from '@/components/common/SectionWrapper';
import AnimatedBackground from '@/components/common/AnimatedBackground';
import CTA from '@/components/home/CTA';
import { companyInfo } from '@/data';
import styles from './privacy.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Corporate Governance',
  description:
    `Privacy Policy of ${companyInfo.name} (CIN: ${companyInfo.cin}). Learn how we handle project inquiries, commercial data, and digital personal information.`,
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ── HERO SECTION ──────────────────────────── */}
      <section className={styles.hero}>
        <AnimatedBackground />
        <div className={styles.heroOrangeOrb} />
        <div className={`container ${styles.heroInner}`} style={{ position: 'relative', zIndex: 2 }}>
          <h1 className={styles.heroTitle}>
            Privacy <span className={styles.accent}>Policy</span>
          </h1>
          <p className={styles.heroSub}>
            {companyInfo.name} is committed to protecting the privacy, technical data, and personal information of our clients, engineering partners, and website visitors.
          </p>
          <div className={styles.metaBadge}>
            <span>📅 Effective Date: August 15, 2024</span>
            <span>•</span>
            <span>🏛️ Governed under Indian Law</span>
          </div>
        </div>
      </section>

      {/* ── LEGAL CONTENT SECTION ─────────────────── */}
      <SectionWrapper variant="white" id="privacy-content">
        <div className="container">
          <div className={styles.legalLayout}>
            {/* Left Sidebar Table of Contents */}
            <aside className={styles.sidebar}>
              <div className={styles.tocCard}>
                <h3 className={styles.tocTitle}>Table of Contents</h3>
                <nav className={styles.tocList}>
                  <a href="#section-1" className={styles.tocLink}>1. Corporate Identity</a>
                  <a href="#section-2" className={styles.tocLink}>2. Information We Collect</a>
                  <a href="#section-3" className={styles.tocLink}>3. How We Use Data</a>
                  <a href="#section-4" className={styles.tocLink}>4. Technical Data & Drawings</a>
                  <a href="#section-5" className={styles.tocLink}>5. Data Protection & Security</a>
                  <a href="#section-6" className={styles.tocLink}>6. Information Sharing</a>
                  <a href="#section-7" className={styles.tocLink}>7. Cookies & Analytics</a>
                  <a href="#section-8" className={styles.tocLink}>8. Statutory Compliance</a>
                  <a href="#section-9" className={styles.tocLink}>9. Grievance & Contact</a>
                </nav>
              </div>

              <div className={styles.companyCard}>
                <span className={styles.companyName}>{companyInfo.name}</span>
                <span className={styles.companyCin}>CIN: {companyInfo.cin}</span>
                <span>{companyInfo.address.full}</span>
                <span>Email: {companyInfo.email}</span>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className={styles.contentArea}>
              {/* Section 1 */}
              <section id="section-1" className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>1</span>
                  <h2 className={styles.sectionTitle}>Corporate Identity & Scope</h2>
                </div>
                <p className={styles.paragraph}>
                  This Privacy Policy governs the collection, processing, and protection of information by <strong>{companyInfo.name}</strong> (hereinafter referred to as &ldquo;Moji Construction&rdquo;, &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a company incorporated under the Indian Companies Act with Corporate Identification Number (CIN) <strong>{companyInfo.cin}</strong>, having its registered office at {companyInfo.address.full}.
                </p>
                <p className={styles.paragraph}>
                  This policy applies to all interactions with our official website (<Link href="/" style={{ color: 'var(--primary)', fontWeight: 600 }}>mojiconstruction.com</Link>), tender submissions, technical inquiries, Annual Maintenance Contracts (AMC), and commercial correspondence related to our extra high-tension (EHT) power transmission and grid substation operations.
                </p>
              </section>

              {/* Section 2 */}
              <section id="section-2" className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>2</span>
                  <h2 className={styles.sectionTitle}>Information We Collect</h2>
                </div>
                <p className={styles.paragraph}>
                  We collect information strictly necessary to provide engineering proposals, execute infrastructure contracts, and maintain secure digital communication. This includes:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <strong>Contact & Professional Details:</strong> Name, official designation, organization/utility name, email address, phone number, and physical office location when you submit an inquiry or request a technical quote.
                  </li>
                  <li className={styles.bulletItem}>
                    <strong>Project & Technical Specifications:</strong> Project route locations, voltage parameters (e.g., 33kV, 132kV, 220kV, 400kV), survey coordinates, tender reference numbers, and engineering requirements provided during commercial engagements.
                  </li>
                  <li className={styles.bulletItem}>
                    <strong>Technical Browsing Data:</strong> Standard server logs, IP address, browser type, operating system, and interaction timestamps collected automatically to ensure web security and optimal user experience.
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section id="section-3" className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>3</span>
                  <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
                </div>
                <p className={styles.paragraph}>
                  Information collected by {companyInfo.name} is utilized solely for lawful business and engineering purposes, including:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>Preparing technical proposals, project feasibility estimates, and responding to tender inquiries.</li>
                  <li className={styles.bulletItem}>Facilitating project execution, supply chain logistics, on-site supervision, and commissioning protocols.</li>
                  <li className={styles.bulletItem}>Managing statutory compliance, right-of-way permissions, and liaison with government authorities (RRVPNL, NHAI, Railways, Forest departments).</li>
                  <li className={styles.bulletItem}>Providing operation, maintenance, thermography inspection reports, and warranty support under contractual agreements.</li>
                  <li className={styles.bulletItem}>Ensuring the cyber integrity, safety, and legal compliance of our digital platforms.</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section id="section-4" className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>4</span>
                  <h2 className={styles.sectionTitle}>Confidentiality of Technical Data & Drawings</h2>
                </div>
                <p className={styles.paragraph}>
                  We understand the sensitive nature of high-voltage electrical blueprints, single-line diagrams (SLD), route profiles, and substation layout drawings. {companyInfo.name} maintains strict non-disclosure standards:
                </p>
                <div className={styles.highlightBox}>
                  <span className={styles.highlightTitle}>Strict Engineering Confidentiality</span>
                  <p className={styles.highlightText}>
                    All technical drawings, route KML files, survey datasets, and tender documentation submitted by clients or utilities are treated as strictly confidential proprietary assets and are never shared with unauthorized third parties.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="section-5" className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>5</span>
                  <h2 className={styles.sectionTitle}>Data Protection & Security</h2>
                </div>
                <p className={styles.paragraph}>
                  We employ multi-layer security measures to protect information against unauthorized access, loss, or alteration. These include SSL/TLS encryption for web traffic, firewalled enterprise servers, restricted role-based internal data access, and regular security reviews in alignment with Indian Information Technology regulations.
                </p>
              </section>

              {/* Section 6 */}
              <section id="section-6" className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>6</span>
                  <h2 className={styles.sectionTitle}>Information Sharing & Disclosure</h2>
                </div>
                <p className={styles.paragraph}>
                  {companyInfo.name} does <strong>not sell, rent, or trade</strong> personal or corporate information. Information is only disclosed in the following specific circumstances:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <strong>Statutory & Regulatory Authorities:</strong> When mandated by state electricity regulatory commissions, courts of law, or government infrastructure bodies (e.g., RRVPNL, CEA, NHAI) for statutory clearances.
                  </li>
                  <li className={styles.bulletItem}>
                    <strong>Authorized Project Subcontractors:</strong> Trusted testing laboratories, certified surveyors, or logistics partners working under strict non-disclosure agreements strictly to fulfill contractual scopes.
                  </li>
                </ul>
              </section>

              {/* Section 7 */}
              <section id="section-7" className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>7</span>
                  <h2 className={styles.sectionTitle}>Cookies & Web Analytics</h2>
                </div>
                <p className={styles.paragraph}>
                  Our website uses standard session cookies to optimize navigation performance and responsive rendering. We do not use intrusive third-party ad-tracking cookies. You can manage or disable cookies via your browser settings at any time.
                </p>
              </section>

              {/* Section 8 */}
              <section id="section-8" className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>8</span>
                  <h2 className={styles.sectionTitle}>Statutory Compliance & Indian Law</h2>
                </div>
                <p className={styles.paragraph}>
                  This policy is framed in compliance with the <strong>Information Technology Act, 2000</strong>, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection (DPDP) Act, 2023 of India.
                </p>
              </section>

              {/* Section 9 */}
              <section id="section-9" className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>9</span>
                  <h2 className={styles.sectionTitle}>Grievance Officer & Contact Information</h2>
                </div>
                <p className={styles.paragraph}>
                  If you have any questions, clarifications, or requests regarding this Privacy Policy or your data, please contact our designated corporate compliance officer:
                </p>
                <div className={styles.contactGrid}>
                  <div className={styles.contactCard}>
                    <span className={styles.contactCardLabel}>Corporate Entity</span>
                    <span className={styles.contactCardValue}>{companyInfo.name}</span>
                  </div>
                  <div className={styles.contactCard}>
                    <span className={styles.contactCardLabel}>Registered Office</span>
                    <span className={styles.contactCardValue}>{companyInfo.address.city}, {companyInfo.address.state} - {companyInfo.address.pincode}</span>
                  </div>
                  <div className={styles.contactCard}>
                    <span className={styles.contactCardLabel}>Official Email</span>
                    <span className={styles.contactCardValue}>{companyInfo.email}</span>
                  </div>
                  <div className={styles.contactCard}>
                    <span className={styles.contactCardLabel}>Corporate Identity</span>
                    <span className={styles.contactCardValue}>CIN: {companyInfo.cin}</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTA />
    </>
  );
}
