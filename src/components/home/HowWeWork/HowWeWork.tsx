'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { slideRight } from '@/lib/motion';
import SectionTitle from '@/components/common/SectionTitle';
import Image from 'next/image';
import { workflowSteps } from '@/data';
import styles from './HowWeWork.module.css';

const STEP_ICONS = [
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
];

export default function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Track translates from 0vw to -125vw
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-125vw"]);

  return (
    <div id="how-we-work">
      {/* Mobile: Vertical timeline */}
      <section className={styles.mobileSection}>
        <div className="container">
          <SectionTitle
            badge="Project Lifecycle"
            title="How We Execute Transmission Projects"
            subtitle="A 5-phase execution workflow ensuring safe, on-time, and high-quality project commissioning."
          />
          <div className={styles.mobileTimeline}>
            <div className={styles.mobileWire} />
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.num}
                className={styles.mobileStep}
                variants={slideRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-20%' }}
              >
                <div className={styles.mobileDot} />
                <div className={styles.mobileImageWrap}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className={styles.card}>
                  <div className={styles.stepIcon}>{STEP_ICONS[i] || STEP_ICONS[0]}</div>
                  <div className={styles.contentWrap}>
                    <p className={styles.stepNum}>{step.num} · {step.scope}</p>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop: Horizontal Sticky Scroll */}
      <section className={styles.scrollWrapper} ref={containerRef}>
        <div className={styles.stickyContainer}>
          {/* Title stays fixed at top of the screen */}
          <div className={styles.fixedTitle}>
            <div className="container">
              <SectionTitle
                badge="Project Lifecycle"
                title="How We Execute Transmission Projects"
                subtitle="A 5-phase execution workflow ensuring safe, on-time, and high-quality project commissioning."
              />
            </div>
          </div>

          {/* The horizontal track that moves left */}
          <motion.div className={styles.horizontalTrack} style={{ x }}>
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.num}
                className={styles.panel}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
              >
                <div className={styles.landscapeTower}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    style={{ objectFit: 'contain' }}
                    className={styles.landscapeSvg}
                  />
                </div>

                <div className={styles.card}>
                  <div className={styles.stepIcon}>{STEP_ICONS[i] || STEP_ICONS[0]}</div>
                  <div className={styles.contentWrap}>
                    <p className={styles.stepNum}>{step.num} · {step.scope}</p>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
