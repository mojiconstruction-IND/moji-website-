'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data';
import { staggerContainer, fadeUp } from '@/lib/motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import styles from './Services.module.css';

export default function ServicesSection() {
  return (
    <SectionWrapper variant="alt" id="services">
      <div className="container">
        <SectionTitle
          badge="Our Core Capabilities"
          title="Turnkey Transmission & GSS Solutions"
          subtitle="Backed by 36+ years of field excellence, 4,000+ km of lines, and 150+ major executed packages across Rajasthan."
        />
        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((svc) => (
            <motion.div
              key={svc.id}
              className={styles.card}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              style={{ '--card-color': svc.color } as React.CSSProperties}
            >
              {svc.image ? (
                <div className={styles.imageBanner}>
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.imageOverlay} />
                  <div className={styles.iconOverlay}>
                    <span className={styles.icon}>{svc.icon}</span>
                  </div>
                  {svc.badge && <span className={styles.cardBadge}>{svc.badge}</span>}
                </div>
              ) : (
                <div className={styles.iconWrap}>
                  <span className={styles.icon}>{svc.icon}</span>
                  <div className={styles.iconGlow} />
                </div>
              )}

              <div className={styles.cardHeader}>
                {svc.voltage && <span className={styles.voltagePill}>⚡ {svc.voltage}</span>}
                <h3 className={styles.title}>{svc.title}</h3>
              </div>

              <p className={styles.desc}>{svc.description}</p>

              <ul className={styles.features}>
                {svc.features.slice(0, 4).map((f, fi) => (
                  <li key={fi} className={styles.feature}>
                    <span className={styles.featureDot} />
                    {f}
                  </li>
                ))}
              </ul>

              {svc.realProjects && svc.realProjects.length > 0 && (
                <div className={styles.projectSnippet}>
                  <span className={styles.projectSnippetLabel}>Landmark Work:</span>
                  <span className={styles.projectSnippetText}>{svc.realProjects[0]}</span>
                </div>
              )}

              <div className={styles.cardBorder} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className={styles.cta}>
          <Link href="/services" className={styles.ctaLink} id="services-view-all">
            Explore All Services & Capabilities →
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

