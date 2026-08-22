'use client';
import { ReactNode, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/motion';
import styles from './SectionWrapper.module.css';

interface SectionWrapperProps {
  children: ReactNode;
  variant?: 'light' | 'white' | 'dark' | 'alt' | 'blueprint';
  className?: string;
  id?: string;
  noStagger?: boolean;
  style?: CSSProperties;
}

export default function SectionWrapper({
  children,
  variant = 'light',
  className = '',
  id,
  noStagger = false,
  style,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`${styles.section} ${styles[variant]} section ${className}`}
      variants={noStagger ? undefined : staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      style={style}
    >
      {children}
    </motion.section>
  );
}
