'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { drawerVariants, overlayVariants, fadeDown } from '@/lib/motion';
import MagneticButton from '@/components/common/MagneticButton';
import { companyInfo } from '@/data';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setDrawerOpen(false), 0);
    return () => clearTimeout(timer);
  }, [pathname]);
  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <>
      <motion.header
        className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
        variants={fadeDown}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="Moji Construction Home">
            <Image
              src="/images/moji_logo.png"
              alt="Moji Construction Private Limited"
              width={780}
              height={200}
              className={styles.mainLogo}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.nav} aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`${styles.navLink} ${active ? styles.active : ''}`} 
                  id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                  {active && <motion.span className={styles.activeBar} layoutId="nav-active-bar" />}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <MagneticButton>
            <Link href="/contact" className={styles.ctaBtn} id="nav-get-quote">
              Get a Quote
            </Link>
          </MagneticButton>

          {/* Hamburger (Mobile & Tablet) */}
          <button
            className={`${styles.hamburger} ${drawerOpen ? styles.open : ''}`}
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label={drawerOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={drawerOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className={styles.overlay}
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              className={styles.drawer}
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              role="dialog"
              aria-label="Mobile navigation"
            >
              <div className={styles.drawerHeader}>
                <Link href="/" className={styles.drawerLogoLink} onClick={() => setDrawerOpen(false)}>
                  <Image
                    src="/images/moji_logo.png"
                    alt="Moji Construction"
                    width={320}
                    height={90}
                    className={styles.drawerLogo}
                  />
                </Link>
                <button 
                  className={styles.closeBtn} 
                  onClick={() => setDrawerOpen(false)} 
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <div className={styles.drawerTagline}>
                <span>⚡ Turnkey Power Infrastructure EPC</span>
              </div>

              <nav className={styles.drawerNav}>
                {NAV_LINKS.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={`${styles.drawerLink} ${active ? styles.drawerActive : ''}`}
                        onClick={() => setDrawerOpen(false)}
                      >
                        <span>{link.label}</span>
                        {active ? (
                          <span className={styles.activeDot} />
                        ) : (
                          <span className={styles.arrowIcon}>→</span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className={styles.drawerActions}>
                <Link 
                  href="/contact" 
                  className={styles.drawerCta} 
                  id="drawer-get-quote"
                  onClick={() => setDrawerOpen(false)}
                >
                  Request Technical Proposal →
                </Link>
                <Link 
                  href="/projects" 
                  className={styles.drawerSecondaryBtn} 
                  onClick={() => setDrawerOpen(false)}
                >
                  View 4,000+ KM Projects
                </Link>
              </div>

              <div className={styles.drawerFooter}>
                <div className={styles.drawerContactCard}>
                  <div className={styles.drawerContactRow}>
                    <span className={styles.drawerContactIcon}>✉️</span>
                    <a href={`mailto:${companyInfo.email}`} className={styles.drawerEmailLink}>
                      {companyInfo.email}
                    </a>
                  </div>
                  <div className={styles.drawerContactRow}>
                    <span className={styles.drawerContactIcon}>📍</span>
                    <span>{companyInfo.address.city}, {companyInfo.address.state}</span>
                  </div>
                  <div className={styles.drawerContactRow}>
                    <span className={styles.drawerContactIcon}>🏛️</span>
                    <span>CIN: {companyInfo.cin}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
