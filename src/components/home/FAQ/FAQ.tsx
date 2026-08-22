'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '@/data';
import { staggerContainer, fadeUp } from '@/lib/motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <SectionWrapper variant="alt" id="faq">
      <div className="container container-sm">
        <SectionTitle badge="FAQ" title="Frequently Asked Questions" subtitle="Answers to common queries about our services, processes, and capabilities." />
        <motion.div className={styles.list} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {faqs.map((faq, idx) => {
            const isOpen = open === faq.id;
            return (
              <motion.div key={faq.id} className={`${styles.item} ${isOpen ? styles.active : ''}`} variants={fadeUp}>
                <button
                  className={styles.question}
                  onClick={() => setOpen(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  id={`faq-${faq.id}`}
                >
                  <span className={styles.questionText}>
                    <span className={styles.questionNum}>{String(idx + 1).padStart(2, '0')}</span>
                    <span>{faq.question}</span>
                  </span>
                  <span className={styles.arrowWrap}>
                    <motion.span
                      className={styles.arrow}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      ▾
                    </motion.span>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className={styles.answer}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <p className={styles.answerText}>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
