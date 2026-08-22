'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import { companyInfo, services } from '@/data';
import styles from './Footer.module.css';

const QUICK_LINKS = ['Home', 'About', 'Services', 'Projects', 'Contact'];

const SOCIAL = [
  { label: 'LinkedIn', href: '#', icon: '🔗' },
  { label: 'Facebook', href: '#', icon: '📘' },
  { label: 'Email', href: `mailto:${companyInfo.email}`, icon: '📧' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Electric separator */}
      <div className={styles.separator}>
        <svg viewBox="0 0 1440 2" preserveAspectRatio="none" aria-hidden>
          <line x1="0" y1="1" x2="1440" y2="1" stroke="url(#sepGrad)" strokeWidth="2" />
          <defs>
            <linearGradient id="sepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="#1D4E89" />
              <stop offset="60%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className={`container ${styles.grid}`}>
        {/* Company col */}
        <motion.div variants={fadeUp} className={styles.col}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/moji_logo.png"
              alt={companyInfo.name}
              width={240}
              height={60}
              className={styles.mainLogo}
            />
          </Link>
          <p className={styles.about}>
            Engineering India&apos;s high-voltage power transmission infrastructure since {companyInfo.foundedYear}. Major turnkey EPC contractor for 33kV to 400kV lines and grid substations across Rajasthan and Western India.
          </p>
          <div className={styles.social}>
            {SOCIAL.map((s) => (
              <a key={s.label} href={s.href} className={styles.socialBtn} aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeUp} className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.links}>
            {QUICK_LINKS.map((l) => (
              <li key={l}>
                <Link href={l === 'Home' ? '/' : `/${l.toLowerCase()}`} className={styles.link}>
                  <span className={styles.linkArrow}>›</span> {l}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={fadeUp} className={styles.col}>
          <h4 className={styles.colTitle}>Services</h4>
          <ul className={styles.links}>
            {services.map((s) => (
              <li key={s.id}>
                <Link href={`/services#${s.id}`} className={styles.link}>
                  <span className={styles.linkArrow}>›</span> {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeUp} className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactIcon}>📍</span>
              <span>{companyInfo.address.full}</span>
            </li>
            <li>
              <span className={styles.contactIcon}>📧</span>
              <a href={`mailto:${companyInfo.email}`} className={styles.contactLink}>
                {companyInfo.email}
              </a>
            </li>
            <li>
              <span className={styles.contactIcon}>🏢</span>
              <span>CIN: {companyInfo.cin}</span>
            </li>
            <li>
              <span className={styles.contactIcon}>⭐</span>
              <span>Founder & MD: {companyInfo.founder.name}</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copy}>
            © {year} {companyInfo.name}. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy" className={styles.bottomLink}>
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className={styles.bottomLink}>
              Terms of Service
            </Link>
            <span>·</span>
            <a
              href="https://low2high.online"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.bottomLink} ${styles.devLink}`}
            >
              Developed by <span className={styles.devBrand}>Low2High</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
