'use client';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/motion';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionTitle({ badge, title, subtitle, align = 'center', dark = false }: SectionTitleProps) {
  return (
    <div className={`${styles.root} ${styles[align]} ${dark ? styles.dark : ''}`}>
      {badge && (
        <motion.span variants={fadeIn} className={`${styles.badge} ${dark ? styles.badgeDark : ''}`}>
          <span className={styles.badgeDot} />
          {badge}
        </motion.span>
      )}
      <motion.h2 variants={fadeUp} className={styles.title}>
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className={styles.subtitle}>
          {subtitle}
        </motion.p>
      )}
      <motion.div variants={fadeUp} className={styles.underline}>
        <span className={styles.underlineLine} />
        <span className={styles.underlineDot} />
        <span className={styles.underlineLine} />
      </motion.div>
    </div>
  );
}
