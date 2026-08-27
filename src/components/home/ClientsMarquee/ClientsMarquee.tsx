'use client';
import React from 'react';
import Image from 'next/image';
import { clients } from '@/data';
import styles from './ClientsMarquee.module.css';

export default function ClientsMarquee() {
  return (
    <section className={styles.marqueeSection} aria-label="Our Trusted Clients">
      <div className={styles.marqueeInner}>

        <div className={styles.marqueeHeader}>
          <h5 className={styles.marqueeTitle}>Trusted by Industry Leaders</h5>
        </div>

        <div className={styles.marqueeContainer}>
          {/*
            The track animates translateX(-50%).
            Since the track contains 2 identical groups, -50% = exactly one group width.
            This creates a perfectly seamless infinite loop.
          */}
          <div className={styles.marqueeTrack}>

            {/* Group 1 — real content */}
            <div className={styles.marqueeGroup}>
              {clients.map((client, i) =>
                client.logo ? (
                  <div key={`a-${i}`} className={styles.marqueeItem}>
                    <div style={{ position: 'relative', height: '48px', width: '160px' }}>
                      <Image
                        src={client.logo}
                        alt={`${client.name} Logo`}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                ) : null
              )}
            </div>

            {/* Group 2 — duplicate for seamless loop (hidden from screen readers) */}
            <div className={styles.marqueeGroup} aria-hidden="true">
              {clients.map((client, i) =>
                client.logo ? (
                  <div key={`b-${i}`} className={styles.marqueeItem}>
                    <div style={{ position: 'relative', height: '48px', width: '160px' }}>
                      <Image
                        src={client.logo}
                        alt={`${client.name} Logo`}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                ) : null
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
