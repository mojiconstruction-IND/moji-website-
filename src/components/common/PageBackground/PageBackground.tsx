'use client';
import { useEffect, useRef } from 'react';
import styles from './PageBackground.module.css';



interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number; opacity: number;
}

interface PageBackgroundProps {
  variant?: 'dark' | 'light';
}

export default function PageBackground({ variant = 'dark' }: PageBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: 0, y: 0 });
  const glowRef   = useRef<HTMLDivElement>(null);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Skip particles on small screens / reduced motion
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile  = window.innerWidth < 768;
    if (reduced || mobile) return;

    // ctx and canvas confirmed non-null above
    const cv = canvas as HTMLCanvasElement;
    const c = ctx as CanvasRenderingContext2D;

    const W = () => (cv.width  = window.innerWidth);
    const H = () => (cv.height = window.innerHeight);
    W(); H();

    const COUNT = 35;
    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * cv.width,
      y: Math.random() * cv.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.4,
      opacity: Math.random() * 0.4 + 0.15,
    }));

    const C_BLUE = '34,211,238';
    const C_NAVY = '29,78,137';



    function draw() {
      c.clearRect(0, 0, cv.width, cv.height);
      particles.forEach((p, i) => {
        // Move
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = cv.width;
        if (p.x > cv.width) p.x = 0;
        if (p.y < 0) p.y = cv.height;
        if (p.y > cv.height) p.y = 0;

        // Draw dot
        c.beginPath();
        c.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        c.fillStyle = `rgba(${i % 3 === 0 ? C_BLUE : C_NAVY},${p.opacity})`;
        c.fill();

        // Connect nearby
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            c.beginPath();
            c.moveTo(p.x, p.y);
            c.lineTo(particles[j].x, particles[j].y);
            c.strokeStyle = `rgba(${C_NAVY},${0.12 * (1 - dist / 120)})`;
            c.lineWidth = 0.5;
            c.stroke();
          }
        }
      });
      rafRef.current = requestAnimationFrame(draw);
    }
    draw();

    const resize = () => { W(); H(); };
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Cursor glow
  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      glow.style.setProperty('--mx', `${e.clientX}px`);
      glow.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className={`${styles.root} ${variant === 'light' ? styles.light : ''}`} aria-hidden="true">
      {/* Layer 1 — gradient bg */}
      <div className={styles.gradientBg} />
      {/* Layer 2 — blueprint grid */}
      <div className={styles.blueprintGrid} />
      {/* Layer 3 — particles canvas */}
      <canvas ref={canvasRef} className={styles.canvas} />

      {/* Layer 4 — electric SVG pulse lines */}
      <svg className={styles.electricSvg} viewBox="0 0 1440 900" preserveAspectRatio="none">
        <path d="M-100,600 Q360,200 720,450 Q1080,700 1540,300" className={styles.pulseLine} style={{ animationDelay: '0s' }} />
        <path d="M-100,200 Q400,500 800,250 Q1100,50 1540,500"  className={styles.pulseLine} style={{ animationDelay: '1.4s' }} />
        <path d="M-100,800 Q500,400 900,600 Q1200,750 1540,200" className={styles.pulseLine} style={{ animationDelay: '2.8s' }} />
      </svg>
      {/* Layer 5 — cursor glow */}
      <div ref={glowRef} className={styles.cursorGlow} />
      {/* Layer 6 — noise texture */}
      <div className={styles.noise} />
    </div>
  );
}
