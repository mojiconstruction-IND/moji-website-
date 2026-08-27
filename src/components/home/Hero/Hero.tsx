'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, wordReveal, fadeUp, fadeIn } from '@/lib/motion';
import MagneticButton from '@/components/common/MagneticButton';
import { companyInfo, stats } from '@/data';
import styles from './Hero.module.css';

const HEADLINE_L1 = "Building India's";
const HEADLINE_L2 = 'Power Infrastructure';

export default function Hero() {
  const heroStats = [
    { val: `${companyInfo.experienceYears}+`, label: 'Years' },
    { val: stats[1]?.suffix ? `${stats[1].value}${stats[1].suffix}` : '4000KM+', label: 'Lines Energized' },
    { val: `${stats[2]?.value || 60}+`, label: 'Major Packages' },
  ];

  return (
    <section className={styles.hero} id="hero">
      {/* Video Background with Fade Shade Overlay */}
      <motion.div 
        className={styles.heroBgWrap} 
        aria-hidden
        initial={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
        animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <video
          src="/hero_bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={styles.bgVideo}
        />
        <div className={styles.noiseOverlay} aria-hidden />
        <div className={styles.fadeShade} />
      </motion.div>

      {/* Content */}
      <div className={styles.content}>
        <motion.div
          className={styles.inner}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeIn} className={styles.badge}>
            <span className={styles.badgeDot} />
            Est. {companyInfo.foundedYear} · {companyInfo.experienceYears}+ Years of Engineering
          </motion.div>

          {/* Headline — split word reveal */}
          <h1 className={styles.headline} aria-label={`Moji Construction Pvt Ltd — ${HEADLINE_L1} ${HEADLINE_L2}`}>
            <span className={styles.line}>
              {HEADLINE_L1.split(' ').map((word, wi) => (
                <span key={wi} className={styles.wordClip}>
                  <motion.span
                    className={styles.word}
                    variants={wordReveal}
                    transition={{ delay: wi * 0.08 }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
            <span className={styles.line}>
              {HEADLINE_L2.split(' ').map((word, wi) => (
                <span key={wi} className={styles.wordClip}>
                  <motion.span
                    className={`${styles.word} ${styles.gradientWord}`}
                    variants={wordReveal}
                    transition={{ delay: (4 + wi) * 0.08 }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          {/* Sub headline */}
          <motion.p variants={fadeUp} className={styles.sub}>
            <strong>Moji Construction Pvt Ltd</strong> — Turnkey EPC contractor delivering <strong>33kV to 400kV</strong> Extra High-Tension transmission lines, Grid Substations, and utility solar evacuation corridors across India.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className={styles.ctas}>
            <MagneticButton>
              <Link href="/contact" className={styles.btnPrimary} id="hero-get-quote">
                <span className={styles.btnShine} />
                Get a Quote
                <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                  <path d="M8 0l8 8-8 8-1.4-1.4 5.6-5.6H0V7h12.2L6.6 1.4 8 0z" />
                </svg>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/projects" className={styles.btnSecondary} id="hero-view-projects">
                View Projects ({companyInfo.linesEnergizedKm})
              </Link>
            </MagneticButton>
          </motion.div>

        </motion.div>
      </div>

      {/* Quick stats — shifted to far right bottom corner of screen */}
      <motion.div 
        className={styles.statsRowRight}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {heroStats.map((s, i) => (
          <div key={i} className={styles.statPillRight}>
            <div className={styles.statPillVal}>{s.val}</div>
            <div className={styles.statPillLabel}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
