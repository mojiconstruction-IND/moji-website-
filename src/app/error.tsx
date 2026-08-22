'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import styles from './not-found.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.badge}>System Exception</div>
        <h1 className={styles.title}>Something Went Wrong</h1>
        <p className={styles.text}>
          An unexpected error occurred while loading this section. Our team has been notified.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button onClick={() => reset()} className={styles.button}>
            Try Again
          </button>
          <Link href="/" className={styles.button} style={{ background: 'rgba(255, 255, 255, 0.1)', boxShadow: 'none' }}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
