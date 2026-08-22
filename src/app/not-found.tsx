'use client';
import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.badge}>404 — Page Not Found</div>
        <h1 className={styles.title}>Under Construction</h1>
        <p className={styles.text}>
          The page you are looking for has been moved, removed, or does not exist in our blueprint.
        </p>
        <Link href="/" className={styles.button}>
          Return to Home Page
        </Link>
      </div>
    </div>
  );
}
