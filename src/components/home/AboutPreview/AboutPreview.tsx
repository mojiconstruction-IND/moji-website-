'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { staggerContainer, fadeUp, slideRight } from '@/lib/motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import { companyInfo } from '@/data';
import styles from './AboutPreview.module.css';

const HIGHLIGHTS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: `${companyInfo.linesEnergizedKm} Energized`,
    desc: 'Turnkey erection & stringing of 33kV, 132kV, 220kV & 400kV lines across Rajasthan.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: `${companyInfo.voltageRange} Capabilities`,
    desc: 'Grid substations (GSS), pooling switchyards, and heavy corridor line shifting.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Tier-1 Client Trust',
    desc: 'Contractor of choice for RRVPNL, Tata Projects, Tata Power, NHAI, and Avaada.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '"I Am Assured" Philosophy',
    desc: 'Strict schedule control, transparent updates, and 100% on-time project commissioning.',
  },
];

export default function AboutPreview() {
  return (
    <SectionWrapper variant="white" id="about-preview">
      <div className="container">
        <div className={styles.grid}>
          {/* Left — visual */}
          <motion.div className={styles.visual} variants={slideRight}>
            <div className={styles.imageCard}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/images/about_grids.jpg"
                  alt="Moji Construction Transmission Engineering"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.realImage}
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.overlayText}>
                  <span className={styles.bigYear}>{companyInfo.foundedYear}</span>
                  <span className={styles.yearLabel}>Est. Inception</span>
                </div>
              </div>
              {/* Floating badge */}
              <div className={styles.floatBadge}>
                <span className={styles.floatVal}>{companyInfo.experienceYears}+</span>
                <span className={styles.floatLabel}>Years of Field Mastery</span>
              </div>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            className={styles.text}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionTitle
              badge="About Moji Construction"
              title={`Building High-Voltage Grids Since ${companyInfo.foundedYear}`}
              subtitle={`Founded in ${companyInfo.foundedYear} by ${companyInfo.founder.fullTitle} ${companyInfo.founder.name} and incorporated in 2002, ${companyInfo.name} delivers turnkey EPC for 33kV, 132kV, 220kV & 400kV power projects across India.`}
              align="left"
            />

            <motion.div variants={fadeUp} className={styles.highlights}>
              {HIGHLIGHTS.map((h, i) => (
                <div key={i} className={styles.highlight}>
                  <span className={styles.highlightIcon}>{h.icon}</span>
                  <div>
                    <p className={styles.highlightTitle}>{h.title}</p>
                    <p className={styles.highlightDesc}>{h.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link href="/about" className={styles.link} id="about-preview-learn-more">
                Read Company History & Leadership →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
