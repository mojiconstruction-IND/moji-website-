"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring, Variants } from 'framer-motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import CTA from '@/components/home/CTA';
import { timeline, directors, clients } from '@/data';
import AnimatedBackground from '@/components/common/AnimatedBackground';
import styles from './about.module.css';

const EXPERTISE = [
  { 
    icon: '📡', 
    title: 'Survey & Stringing', 
    desc: 'All activities from reconnaissance survey to stringing for voltage levels 11kV, 33kV, 132kV, 220kV, and 400kV lines.',
    voltage: '11kV – 400kV'
  },
  { 
    icon: '🏗️', 
    title: 'Tower Footing Strengthening', 
    desc: 'Strengthening of tower footings through engineered benching, revetment walls, and continuous line earthing verification.',
    voltage: 'Civil & Geo'
  },
  { 
    icon: '📋', 
    title: 'Statutory Clearances', 
    desc: 'End-to-end statutory management for Aviation, Railways, NHAI Highways, Forest, Mining, Water Logging & Dam reservoir zones.',
    voltage: 'Liaison & Approvals'
  },
  { 
    icon: '🔧', 
    title: 'Line Maintenance & Uprating', 
    desc: 'Replacement of missing tower members, conductor jumper strengthening, and precise positioning of vibration dampers.',
    voltage: 'O&M Scope'
  },
  { 
    icon: '🌡️', 
    title: 'Infrared Thermography', 
    desc: 'Thermal imaging of Jumpers, Mid-span joints & Dead-end joints to evaluate thermal health and extend conductor service life.',
    voltage: 'Condition Monitoring'
  },
  { 
    icon: '🗺️', 
    title: 'GPS Coordinates & KML Mapping', 
    desc: 'Logging precise DGPS coordinates per tower and plotting routes on Survey of India G.T sheets and Google Earth KML files.',
    voltage: 'GIS & Survey'
  },
  { 
    icon: '🌐', 
    title: 'OPGW Earthwire Solutions', 
    desc: 'Turnkey optical ground wire (OPGW) laying, splicing, joint box installation, hardware assembly, and live tension stringing.',
    voltage: 'Fibre Optic & Shield'
  },
  { 
    icon: '⚡', 
    title: 'GSS & Switchyard Infrastructure', 
    desc: 'Turnkey erection, testing & commissioning of 132kV, 220kV, 400kV & 765kV GSS including Transformers, CT, PT & bus bars.',
    voltage: '132kV – 765kV GSS'
  },
];

const PHILOSOPHY_PILLARS = [
  {
    num: '01',
    icon: '📅',
    title: 'Detailed Schedule & Resource Planning',
    desc: 'Creating comprehensive micro-schedules and resource allocations tailored to client milestone dates and terrain challenges.',
  },
  {
    num: '02',
    icon: '💬',
    title: 'Clear, Transparent Communication',
    desc: 'Establishing proactive reporting channels to keep project managers and state engineers informed of daily progress.',
  },
  {
    num: '03',
    icon: '📍',
    title: 'Continuous Milestone Tracking',
    desc: 'Meticulous tracking of foundation casting, tower erection, and conductor stringing progress against committed critical paths.',
  },
  {
    num: '04',
    icon: '🔍',
    title: 'Rigorous QA/QC & Site Supervision',
    desc: 'Multi-tier inspection protocols for raw material grading, torque checking, galvanization thickness, and sag tension accuracy.',
  },
  {
    num: '05',
    icon: '⚡',
    title: 'On-Time Commissioning & Charging',
    desc: 'Securing all statutory clearances on time to energize transmission lines and charge grid substations safely on deadline.',
  },
];

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

export default function AboutClient() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [pathData, setPathData] = useState('');

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const updatePath = () => {
      if (!timelineRef.current) return;
      const containerRect = timelineRef.current.getBoundingClientRect();

      const points = dotsRef.current
        .filter(dot => dot !== null)
        .map(dot => {
          const rect = dot!.getBoundingClientRect();
          return {
            x: rect.left - containerRect.left + rect.width / 2,
            y: rect.top - containerRect.top + rect.height / 2
          };
        });

      if (points.length < 2) return;

      let d = `M ${points[0].x} 0 L ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const midY = (prev.y + curr.y) / 2;
        d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
      }
      d += ` L ${points[points.length - 1].x} ${containerRect.height}`;

      setPathData(d);
    };

    updatePath();
    const timeout = setTimeout(updatePath, 500);
    window.addEventListener('resize', updatePath);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', updatePath);
    };
  }, []);

  return (
    <>
      {/* ── HERO SECTION ──────────────────────────── */}
      <section className={styles.hero}>
        <AnimatedBackground />
        <div className={styles.heroOrangeOrb} />
        <motion.div
          className={`container ${styles.heroInner}`}
          style={{ position: 'relative', zIndex: 2 }}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeUpVariant} className={styles.heroTitle}>
            Moji Construction Pvt. Ltd. <br />
            <span className={styles.accent}>Since 1990</span>
          </motion.h1>
          <motion.p variants={fadeUpVariant} className={styles.heroSub}>
            Founded in 1990 by <strong>Managing Director Shambhu Singh</strong>, Moji Construction begun as a transmission line general works contractor and was formally incorporated as a Private Limited company in 2002. Today, Moji Construction takes on the role of a major contractor for 33kV, 132kV, 220kV & 400kV Projects for government and private sector clients across India.
          </motion.p>

          {/* Quick Corporate Credentials Strip */}
          <motion.div variants={fadeUpVariant} className={styles.corpCredentialsBar}>
            <div className={styles.credentialItem}>
              <span className={styles.credentialLabel}>Inception Year</span>
              <span className={styles.credentialVal}>1990</span>
            </div>
            <div className={styles.credentialDivider} />
            <div className={styles.credentialItem}>
              <span className={styles.credentialLabel}>Corporate Identity</span>
              <span className={styles.credentialVal}>CIN: U45204RJ2002PTC017968</span>
            </div>
            <div className={styles.credentialDivider} />
            <div className={styles.credentialItem}>
              <span className={styles.credentialLabel}>Transmission Lines</span>
              <span className={styles.credentialVal}>4,000+ KM Energized</span>
            </div>
            <div className={styles.credentialDivider} />
            <div className={styles.credentialItem}>
              <span className={styles.credentialLabel}>Major Packages</span>
              <span className={styles.credentialVal}>150+ Executed</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── MISSION, VISION & ASSURED PHILOSOPHY ─── */}
      <SectionWrapper variant="white" id="mission-vision">
        <div className="container">
          <motion.div
            className={styles.mvGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className={styles.mvCard}>
              <div className={styles.mvIcon}>🎯</div>
              <h2 className={styles.mvTitle}>Our Mission</h2>
              <p className={styles.mvText}>
                To execute projects at competitive prices, provide safe working conditions and deliver quality work within stipulated / agreed time frames.
              </p>
            </motion.div>
            <motion.div variants={fadeUpVariant} className={styles.mvCard}>
              <div className={styles.mvIcon}>🔭</div>
              <h2 className={styles.mvTitle}>Our Vision</h2>
              <p className={styles.mvText}>
                To be a reliable transmission line & GSS contractor delivering beyond expectations, through quality workmanship and commitment.
              </p>
            </motion.div>
          </motion.div>

          {/* ── "I AM ASSURED" EXECUTION PHILOSOPHY ──── */}
          <div className={styles.philosophySection}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                badge="Execution Philosophy"
                title='The "I Am Assured" Client Experience'
                subtitle="Our objective is to provide our clients with an 'I am assured' experience when we are chosen to execute their projects. Our emphasis on clear communication and follow-through procedures ensures that client objectives remain top priority."
              />
            </motion.div>

            <motion.div
              className={styles.philosophyGrid}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {PHILOSOPHY_PILLARS.map((p) => (
                <motion.div key={p.num} variants={fadeUpVariant} className={styles.philosophyCard}>
                  <div className={styles.philosophyHeader}>
                    <span className={styles.philosophyNum}>{p.num}</span>
                    <span className={styles.philosophyIcon}>{p.icon}</span>
                  </div>
                  <h3 className={styles.philosophyTitle}>{p.title}</h3>
                  <p className={styles.philosophyDesc}>{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── VERIFIED TECHNICAL EXPERTISE ─────────── */}
      <SectionWrapper variant="alt" id="expertise">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              badge="Field Capabilities"
              title="Our Technical Expertise"
              subtitle="Comprehensive turnkey execution capabilities covering every stage of high-voltage transmission & GSS infrastructure."
            />
          </motion.div>
          <motion.div
            className={styles.valuesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {EXPERTISE.map((e, i) => (
              <motion.div variants={fadeUpVariant} key={i} className={styles.valueCard}>
                <div className={styles.valueCardTop}>
                  <span className={styles.valueIcon}>{e.icon}</span>
                  {e.voltage && <span className={styles.expertiseVoltage}>{e.voltage}</span>}
                </div>
                <h3 className={styles.valueTitle}>{e.title}</h3>
                <p className={styles.valueDesc}>{e.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ── CLIENTS & REPUTATION ─────────────────── */}
      <SectionWrapper variant="white" id="clients">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              badge="Trusted Partners"
              title="Organizations We Power"
              subtitle="Proud to partner with state transmission utilities, central grid corporations, renewable developers, and national highway authorities."
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className={styles.clientsGrid}
          >
            {clients.map((client, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariant}
                className={styles.clientCard}
              >
                <div className={styles.clientLogoWrap}>
                  <Image
                    src={client.logo || ''}
                    alt={client.name}
                    width={220}
                    height={80}
                    className={styles.clientLogo}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ── DYNAMIC TIMELINE SECTION ──────────────── */}
      <SectionWrapper variant="white" id="timeline" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className={styles.timelineBgWrap}>
          <div className={styles.timelineBgGrid} />
          <div className={styles.timelineBgGlow1} />
          <div className={styles.timelineBgGlow2} />
        </div>
        <div className="container container-sm" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              badge="Historical Milestones"
              title="Our Journey from 1990 to Today"
              subtitle="How Moji Construction evolved from a general works contractor into Rajasthan's major transmission and GSS EPC partner."
            />
          </motion.div>
          <div className={styles.timeline} ref={timelineRef}>
            <div className={styles.timelineSvgWrap}>
              <svg className={styles.timelineSvg}>
                <defs>
                  <linearGradient id="timelineGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" />
                    <stop offset="100%" stopColor="var(--accent)" />
                  </linearGradient>
                </defs>
                {pathData && (
                  <>
                    <path d={pathData} className={styles.timelinePathBg} />
                    <motion.path
                      d={pathData}
                      className={styles.timelinePath}
                      style={{ pathLength: smoothProgress }}
                    />
                  </>
                )}
              </svg>
            </div>

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className={`${styles.tlItem} ${i % 2 === 0 ? styles.tlLeft : styles.tlRight}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ type: "spring", stiffness: 60, damping: 15, delay: i * 0.15 }}
              >
                <div className={styles.tlCard}>
                  <motion.span
                    className={styles.tlYear}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.4 + (i * 0.1) }}
                  >
                    {item.year}
                  </motion.span>
                  <motion.h3
                    className={styles.tlTitle}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className={styles.tlDesc}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                  >
                    {item.description}
                  </motion.p>
                </div>
                <motion.div
                  ref={(el) => { dotsRef.current[i] = el; }}
                  className={styles.tlDot}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ type: "spring", stiffness: 150, delay: 0.2 + (i * 0.15) }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── DIRECTORS & GOVERNANCE ────────────────── */}
      <SectionWrapper variant="alt" id="directors">
        <div className="container container-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              badge="Corporate Governance"
              title="Board of Directors & Key Management"
              subtitle="Registered leadership guiding technical execution, QA/QC, site operations, and financial governance."
            />
          </motion.div>

          <motion.div
            className={styles.directorsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {directors.map((d) => (
              <motion.div
                key={d.din}
                className={`${styles.directorCard} ${d.isFounder ? styles.founderDirectorCard : ''}`}
                variants={fadeUpVariant}
                whileHover={{ y: -8 }}
              >
                {d.isFounder && <div className={styles.founderRibbon}>⭐ Company Founder</div>}
                <div className={`${styles.directorAvatar} ${d.isFounder ? styles.founderAvatar : ''}`}>
                  {d.name.charAt(0)}
                </div>
                <h4 className={styles.directorName}>{d.name}</h4>
                <div className={styles.directorRole}>{d.role}</div>
                <p className={styles.directorDesc}>{d.desc}</p>
                <div className={styles.directorMeta}>
                  <span><strong>DIN:</strong> {d.din}</span>
                  <span><strong>Appointed:</strong> {d.date}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Organizational Chart */}
          <motion.div
            className={styles.orgChartWrap}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className={styles.tree}>
              <ul>
                <li>
                  <motion.div
                    className={`${styles.orgNode} ${styles.founderOrgNode}`}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={styles.orgNodeTitle}>SHAMBHU SINGH</div>
                    <div className={styles.orgNodeRole}>Founder & Managing Director</div>
                  </motion.div>
                  <ul>
                    <li>
                      <motion.div
                        className={styles.orgNode}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div className={styles.orgNodeTitle}>SURENDRA SINGH</div>
                        <div className={styles.orgNodeRole}>Technical Director</div>
                      </motion.div>
                      <ul>
                        <li>
                          <motion.div
                            className={styles.orgNode}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                          >
                            <div className={styles.orgNodeTitle}>Engineering Team</div>
                            <div className={styles.orgNodeRole}>Design & Tower Analysis</div>
                          </motion.div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <motion.div
                        className={styles.orgNode}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <div className={styles.orgNodeTitle}>RANJEET S. CHANDRAWAT</div>
                        <div className={styles.orgNodeRole}>Director - Site Operations & Projects</div>
                      </motion.div>
                      <ul>
                        <li>
                          <motion.div
                            className={styles.orgNode}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            <div className={styles.orgNodeTitle}>Project Managers</div>
                            <div className={styles.orgNodeRole}>Site Execution & Stringing</div>
                          </motion.div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <motion.div
                        className={styles.orgNode}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <div className={styles.orgNodeTitle}>RANVEER SINGH</div>
                        <div className={styles.orgNodeRole}>Director - QA & QC</div>
                      </motion.div>
                      <ul>
                        <li>
                          <motion.div
                            className={styles.orgNode}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                          >
                            <div className={styles.orgNodeTitle}>Safety Officers</div>
                            <div className={styles.orgNodeRole}>Quality Control & Testing</div>
                          </motion.div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <motion.div
                        className={styles.orgNode}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <div className={styles.orgNodeTitle}>RAGHUNATH SINGH</div>
                        <div className={styles.orgNodeRole}>Director - Finance Operations</div>
                      </motion.div>
                      <ul>
                        <li>
                          <motion.div
                            className={styles.orgNode}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                          >
                            <div className={styles.orgNodeTitle}>Finance Team</div>
                            <div className={styles.orgNodeRole}>Accounts & Statutory Audit</div>
                          </motion.div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <CTA />
    </>
  );
}
