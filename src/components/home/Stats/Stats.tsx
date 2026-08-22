'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { stats } from '@/data';
import { staggerContainer } from '@/lib/motion';
import SectionTitle from '@/components/common/SectionTitle';
import styles from './Stats.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = numRefs.current[i];
        if (!el) return;
        const counter = { val: 0 };
        gsap.to(counter, {
          val: stat.value,
          duration: 2.5,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          onUpdate() {
            el.textContent = Math.round(counter.val).toLocaleString();
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="stats">
      {/* Subtle blueprint grid */}
      <div className={styles.bgGrid} />
      
      {/* Background electric lines */}
      <svg className={styles.bgSvg} viewBox="0 0 1440 400" preserveAspectRatio="none" aria-hidden>
        <path d="M0,200 Q360,80 720,200 Q1080,320 1440,200" stroke="rgba(29,78,137,0.08)" strokeWidth="1.5" fill="none" strokeDasharray="6 10" className={styles.bgLine}/>
        <path d="M0,300 Q480,120 900,280 Q1200,400 1440,160" stroke="rgba(234,88,12,0.08)" strokeWidth="1.5" fill="none" strokeDasharray="4 14" className={styles.bgLine2}/>
      </svg>

      <div className={`container ${styles.inner}`}>
        <SectionTitle 
          badge="Proven Scale" 
          title="Milestones of Execution Excellence" 
          subtitle="Quantifiable results spanning over 36 years of turnkey high-voltage transmission and substation infrastructure." 
        />
        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => {
            let iconSvg;
            switch(stat.id) {
              case 's1': iconSvg = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/></svg>; break;
              case 's2': iconSvg = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>; break;
              case 's3': iconSvg = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>; break;
              case 's4': iconSvg = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>; break;
              default: iconSvg = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>;
            }

            return (
              <motion.div 
                key={stat.id} 
                className={styles.card} 
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1, 
                    transition: { type: "spring", stiffness: 90, damping: 16 } 
                  }
                }}
              >
                <div className={styles.cardAccentBar} />
                <span className={styles.iconWrap}>{iconSvg}</span>
                <div className={styles.numRow}>
                  {stat.prefix && <span className={styles.prefix}>{stat.prefix}</span>}
                  <span
                    className={styles.num}
                    ref={el => { numRefs.current[i] = el; }}
                  >
                    0
                  </span>
                  <span className={styles.suffix}>{stat.suffix}</span>
                </div>
                <p className={styles.label}>{stat.label}</p>
                <p className={styles.desc}>{stat.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
