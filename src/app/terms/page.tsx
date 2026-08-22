import type { Metadata } from 'next';
import SectionWrapper from '@/components/common/SectionWrapper';
import AnimatedBackground from '@/components/common/AnimatedBackground';
import CTA from '@/components/home/CTA';
import { companyInfo } from '@/data';
import styles from './terms.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service | Legal & Commercial Governance',
  description:
    `Terms of Service and commercial governance conditions of ${companyInfo.name} (CIN: ${companyInfo.cin}). Outlining tender proposals, engineering standards, and legal compliance.`,
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <>
      {/* ── HERO SECTION ──────────────────────────── */}
      <section className={styles.hero}>
        <AnimatedBackground />
        <div className={styles.heroOrangeOrb} />
        <div className={`container ${styles.heroInner}`} style={{ position: 'relative', zIndex: 2 }}>
          <h1 className={styles.heroTitle}>
            Terms of <span className={styles.accent}>Service</span>
          </h1>
          <p className={styles.heroSub}>
            These Terms of Service govern the access, commercial inquiries, engineering documentation, and contractual engagements with {companyInfo.name}.
          </p>
          <div className={styles.metaBadge}>
            <span>📅 Last Updated: August 15, 2024</span>
            <span>•</span>
            <span>⚖️ Governed by Laws of India ({companyInfo.address.city} Jurisdiction)</span>
          </div>
        </div>
      </section>

      {/* ── LEGAL CONTENT SECTION ─────────────────── */}
      <SectionWrapper variant="white" id="terms-content">
        <div className="container">
          <div className={styles.legalLayout}>
            {/* Left Sidebar Table of Contents */}
            <aside className={styles.sidebar}>
              <div className={styles.tocCard}>
                <h3 className={styles.tocTitle}>Table of Contents</h3>
                <nav className={styles.tocList}>
                  <a href="#term-1" className={styles.tocLink}>1. Acceptance of Terms</a>
                  <a href="#term-2" className={styles.tocLink}>2. Corporate & Operating Scope</a>
                  <a href="#term-3" className={styles.tocLink}>3. Commercial & Tender Quotes</a>
                  <a href="#term-4" className={styles.tocLink}>4. Technical Standards & QA/QC</a>
                  <a href="#term-5" className={styles.tocLink}>5. Intellectual Property</a>
                  <a href="#term-6" className={styles.tocLink}>6. On-Site Safety & Compliance</a>
                  <a href="#term-7" className={styles.tocLink}>7. Limitation of Liability</a>
                  <a href="#term-8" className={styles.tocLink}>8. Jurisdiction & Governing Law</a>
                  <a href="#term-9" className={styles.tocLink}>9. Formal Notices & Contact</a>
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
              {/* Term 1 */}
              <section id="term-1" className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>1</span>
                  <h2 className={styles.sectionTitle}>Acceptance of Terms</h2>
                </div>
                <p className={styles.paragraph}>
                  By accessing the official digital platform of <strong>{companyInfo.name}</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) or submitting project documentation, Request for Proposals (RFP), or tender bids, you (&ldquo;User&rdquo;, &ldquo;Client&rdquo;, &ldquo;Entity&rdquo;) agree to be legally bound by these Terms of Service. If you do not agree to these terms, please do not utilize our digital portal or commercial submission channels.
                </p>
              </section>

              {/* Term 2 */}
              <section id="term-2" className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>2</span>
                  <h2 className={styles.sectionTitle}>Corporate Identity & Operating Scope</h2>
                </div>
                <p className={styles.paragraph}>
                  {companyInfo.name} (CIN: <strong>{companyInfo.cin}</strong>) is an engineering and turnkey infrastructure contracting enterprise incorporated under the Companies Act in {companyInfo.address.city}, Rajasthan.
                </p>
                <p className={styles.paragraph}>
                  Our corporate scope encompasses:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>Turnkey EPC of 33kV, 132kV, 220kV, and 400kV Extra High-Tension (EHT) transmission lines.</li>
                  <li className={styles.bulletItem}>Erection, testing, and commissioning of high-voltage Grid Substations (GSS) and switchyards up to 765kV.</li>
                  <li className={styles.bulletItem}>Dedicated transmission lines for renewable solar power plant evacuation and pooling connectivity.</li>
                  <li className={styles.bulletItem}>Transmission line diversions, tower height raising, and corridor relocation for NHAI expressways, railways, and public works.</li>
                  <li className={styles.bulletItem}>Operation, maintenance, and infrared thermography health analysis of transmission corridors.</li>
                </ul>
              </section>

              {/* Term 3 */}
              <section id="term-3" className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>3</span>
                  <h2 className={styles.sectionTitle}>Commercial Estimates & Tender Proposals</h2>
                </div>
                <p className={styles.paragraph}>
                  Information, cost indicators, and estimates provided via this website or preliminary correspondence are indicative and do not constitute a binding legal contract until a formal Letter of Award (LOA), Work Order (WO), or Contract Agreement is executed between authorized signatories of {companyInfo.name} and the client.
                </p>
                <div className={styles.highlightBox}>
                  <span className={styles.highlightTitle}>Commercial Quotation Validity</span>
                  <p className={styles.highlightText}>
                    All commercial proposals, bill of quantities (BOQ) rates, and mobilization timelines are subject to site feasibility surveys, soil classification, right-of-way (RoW) clearance status, and formal engineering verification.
                  </p>
                </div>
              </section>

              {/* Term 4 */}
              <section id="term-4" className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>4</span>
                  <h2 className={styles.sectionTitle}>Technical Standards & QA/QC Compliance</h2>
                </div>
                <p className={styles.paragraph}>
                  All construction, structural tower erection, foundation benching, and conductor stringing executed by {companyInfo.name} strictly adhere to:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>Bureau of Indian Standards (BIS) and relevant IS/IEC engineering codes.</li>
                  <li className={styles.bulletItem}>Technical technical specifications mandated by the Central Electricity Authority (CEA) and State Power Utilities (e.g., RRVPNL).</li>
                  <li className={styles.bulletItem}>Approved tower design drawings, wind zone structural calculations, and stringing tension charts.</li>
                </ul>
              </section>

              {/* Term 5 */}
              <section id="term-5" className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>5</span>
                  <h2 className={styles.sectionTitle}>Intellectual Property Rights</h2>
                </div>
                <p className={styles.paragraph}>
                  All corporate branding, logos, trademarks, website content, engineering portfolios, photographs, graphics, and proprietary technical descriptions displayed on this website are the exclusive intellectual property of {companyInfo.name}. Unauthorized reproduction, scraping, or commercial exploitation is strictly prohibited without prior written consent.
                </p>
              </section>

              {/* Term 6 */}
              <section id="term-6" className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>6</span>
                  <h2 className={styles.sectionTitle}>On-Site Safety & Regulatory Compliance</h2>
                </div>
                <p className={styles.paragraph}>
                  Safety is paramount in extra high-voltage construction. {companyInfo.name} maintains zero-compromise safety protocols for live-line stringing, heavy crane operations, and working at heights, adhering strictly to Indian standard electrical safety rules and statutory labor safety regulations.
                </p>
              </section>

              {/* Term 7 */}
              <section id="term-7" className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>7</span>
                  <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
                </div>
                <p className={styles.paragraph}>
                  While {companyInfo.name} makes reasonable efforts to ensure the accuracy of technical information on this portal, we shall not be liable for any indirect, incidental, or consequential damages resulting from website downtime, communication delays, or third-party web transmission errors.
                </p>
              </section>

              {/* Term 8 */}
              <section id="term-8" className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>8</span>
                  <h2 className={styles.sectionTitle}>Governing Law & Legal Jurisdiction</h2>
                </div>
                <p className={styles.paragraph}>
                  These Terms of Service and any non-contractual obligations arising out of or in connection with them shall be governed by and construed in accordance with the <strong>Laws of the Republic of India</strong>. The competent courts located at <strong>{companyInfo.address.city}, Rajasthan</strong> shall have exclusive jurisdiction to settle any disputes.
                </p>
              </section>

              {/* Term 9 */}
              <section id="term-9" className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>9</span>
                  <h2 className={styles.sectionTitle}>Formal Notices & Communication</h2>
                </div>
                <p className={styles.paragraph}>
                  All formal notices, commercial correspondence, and legal communications should be addressed to our registered office:
                </p>
                <div className={styles.contactGrid}>
                  <div className={styles.contactCard}>
                    <span className={styles.contactCardLabel}>Corporate Legal Entity</span>
                    <span className={styles.contactCardValue}>{companyInfo.name}</span>
                  </div>
                  <div className={styles.contactCard}>
                    <span className={styles.contactCardLabel}>Registered Office</span>
                    <span className={styles.contactCardValue}>{companyInfo.address.full}</span>
                  </div>
                  <div className={styles.contactCard}>
                    <span className={styles.contactCardLabel}>Commercial Email</span>
                    <span className={styles.contactCardValue}>{companyInfo.email}</span>
                  </div>
                  <div className={styles.contactCard}>
                    <span className={styles.contactCardLabel}>Founder & Managing Director</span>
                    <span className={styles.contactCardValue}>{companyInfo.founder.name} (DIN: {companyInfo.founder.din})</span>
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
