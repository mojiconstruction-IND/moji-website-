'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide the preloader after a short delay to ensure hydration and allow the animation to play
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // 300ms minimum splash screen
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className={styles.preloader}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }} // Slide up and fade out
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className={styles.inner}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={styles.logoWrap}
            >
              <Image 
                src="/images/moji_logo.png" 
                alt="Moji Construction" 
                width={300} 
                height={80} 
                priority
                className={styles.logo}
              />
            </motion.div>
            
            {/* Loading line */}
            <div className={styles.progressContainer}>
              <motion.div 
                className={styles.progressBar}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
