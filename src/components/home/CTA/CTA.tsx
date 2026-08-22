'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, scaleIn } from '@/lib/motion';
import { companyInfo } from '@/data';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section} id="cta">
      {/* Subtle blueprint grid */}
      <div className={styles.bgGrid} />
      
      {/* Background electric lines */}
      <svg className={styles.bgSvg} viewBox="0 0 1440 400" preserveAspectRatio="none" aria-hidden>
        <path d="M0,200 Q360,80 720,200 Q1080,320 1440,200" stroke="rgba(29,78,137,0.08)" strokeWidth="1.5" fill="none" strokeDasharray="6 10" className={styles.bgLine}/>
        <path d="M0,300 Q480,120 900,280 Q1200,400 1440,160" stroke="rgba(234,88,12,0.08)" strokeWidth="1.5" fill="none" strokeDasharray="4 14" className={styles.bgLine2}/>
      </svg>

      <motion.div
        className={`container ${styles.inner}`}
        variants={staggerContainer}
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
      >
        <motion.div variants={fadeUp} className={styles.badge}>
          <span className={styles.badgeDot} />
          Ready to Build Your Grid?
        </motion.div>
        <motion.h2 variants={fadeUp} className={styles.heading}>
          Power Your Next <span>Transmission & Substation Project</span>
        </motion.h2>
        <motion.p variants={fadeUp} className={styles.sub}>
          From reconnaissance survey to turnkey stringing and grid energization — {companyInfo.name} delivers complete solutions for 33kV to 400kV lines, GSS switchyards, and solar evacuation infrastructure.
        </motion.p>
        <motion.div variants={scaleIn} className={styles.actions}>
          <Link href="/contact" className={styles.btnPrimary} id="cta-get-quote">
            Request a Technical Proposal
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden><path d="M8 0l8 8-8 8-1.4-1.4 5.6-5.6H0V7h12.2L6.6 1.4 8 0z"/></svg>
          </Link>
          <Link href="/projects" className={styles.btnSecondary} id="cta-view-projects">
            View Projects ({companyInfo.linesEnergizedKm})
          </Link>
        </motion.div>
        <motion.div variants={fadeUp} className={styles.contacts}>
          <a href={`mailto:${companyInfo.email}`} className={styles.contactItem} id="cta-email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            {companyInfo.email}
          </a>
          <span className={styles.sep}>·</span>
          <span className={styles.contactItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            {companyInfo.address.city}, {companyInfo.address.state}
          </span>
          <span className={styles.sep}>·</span>
          <span className={styles.contactItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            Est. {companyInfo.foundedYear}
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
