'use client';
import { motion } from 'framer-motion';

/* Construction-industry themed shapes */
const SHAPES = [
  { type: 'tower', x: '8%',  y: '15%', size: 52, duration: 18, delay: 0 },
  { type: 'circle', x: '78%', y: '10%', size: 80, duration: 22, delay: 1 },
  { type: 'hexagon', x: '22%', y: '70%', size: 42, duration: 20, delay: 2 },
  { type: 'bolt',   x: '68%', y: '55%', size: 30, duration: 15, delay: 0.5 },
  { type: 'square', x: '88%', y: '78%', size: 56, duration: 25, delay: 3 },
  { type: 'circle', x: '5%',  y: '60%', size: 36, duration: 17, delay: 1.5 },
  { type: 'hexagon', x: '50%', y: '20%', size: 28, duration: 19, delay: 4 },
  { type: 'square', x: '40%', y: '80%', size: 22, duration: 14, delay: 2.5 },
  { type: 'bolt',   x: '92%', y: '30%', size: 38, duration: 16, delay: 0.8 },
  { type: 'circle', x: '30%', y: '40%', size: 20, duration: 23, delay: 3.5 },
];

const ORBS = [
  { x: '75%', y: '20%', size: 300, color: 'rgba(34, 211, 238, 0.12)', duration: 12 },
  { x: '10%', y: '65%', size: 250, color: 'rgba(234, 88, 12, 0.08)',  duration: 16 },
  { x: '50%', y: '85%', size: 200, color: 'rgba(29, 78, 137, 0.1)',   duration: 20 },
];

function ShapeEl({ shape }: { shape: typeof SHAPES[0] }) {
  const col = 'rgba(29, 78, 137, 0.18)';
  const colFill = 'rgba(29, 78, 137, 0.06)';

  const inner = (() => {
    if (shape.type === 'tower') {
      return (
        <svg viewBox="0 0 40 60" fill="none" stroke={col} strokeWidth="1.5" width={shape.size} height={shape.size * 1.5} style={{ flexShrink: 0 }}>
          <path d="M20 2 L4 58 M20 2 L36 58 M8 20 L32 20 M6 38 L34 38 M20 2 L20 58" />
          <path d="M13 20 L20 8 L27 20" />
        </svg>
      );
    }
    if (shape.type === 'bolt') {
      return (
        <svg viewBox="0 0 24 24" fill={colFill} stroke={col} strokeWidth="1.5" width={shape.size} height={shape.size}>
          <path d="M13 2L4.5 13H12L11 22L19.5 11H12L13 2Z" />
        </svg>
      );
    }
    if (shape.type === 'hexagon') {
      return (
        <svg viewBox="0 0 40 46" fill={colFill} stroke={col} strokeWidth="1.5" width={shape.size} height={shape.size}>
          <path d="M20 2L38 12V34L20 44L2 34V12L20 2Z" />
        </svg>
      );
    }
    if (shape.type === 'circle') {
      return (
        <div style={{
          width: shape.size, height: shape.size,
          borderRadius: '50%',
          border: `1.5px solid ${col}`,
          background: colFill,
        }} />
      );
    }
    // square
    return (
      <div style={{
        width: shape.size, height: shape.size,
        borderRadius: 8,
        border: `1.5px solid ${col}`,
        background: colFill,
      }} />
    );
  })();

  return (
    <motion.div
      style={{ position: 'absolute', left: shape.x, top: shape.y }}
      animate={{
        y: [0, -22, 0],
        rotate: shape.type === 'circle' || shape.type === 'tower' ? [0, 0] : [0, 180, 360],
        opacity: [0.2, 0.55, 0.2],
      }}
      transition={{
        duration: shape.duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: shape.delay,
      }}
    >
      {inner}
    </motion.div>
  );
}

export default function AnimatedBackground() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      pointerEvents: 'none',
      zIndex: 0, overflow: 'hidden',
    }}>
      {/* Animated radial glow orbs */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={`orb-${i}`}
          style={{
            position: 'absolute',
            left: orb.x, top: orb.y,
            width: orb.size, height: orb.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 2,
          }}
        />
      ))}

      {/* Electric power line SVG */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        viewBox="0 0 1440 600" preserveAspectRatio="none" aria-hidden
      >
        <path
          d="M0,300 Q240,100 480,280 Q720,460 960,200 Q1200,60 1440,280"
          fill="none" stroke="rgba(29,78,137,0.12)" strokeWidth="1.5"
          strokeDasharray="12 16"
          style={{ animation: 'electricPulse 8s ease-in-out infinite' }}
        />
        <path
          d="M0,450 Q360,220 720,380 Q1080,540 1440,320"
          fill="none" stroke="rgba(34,211,238,0.1)" strokeWidth="1"
          strokeDasharray="6 14"
          style={{ animation: 'electricPulse 12s ease-in-out infinite', animationDelay: '3s' }}
        />
        <path
          d="M0,150 Q480,320 900,180 Q1200,80 1440,220"
          fill="none" stroke="rgba(234,88,12,0.07)" strokeWidth="1"
          strokeDasharray="8 18"
          style={{ animation: 'electricPulse 10s ease-in-out infinite', animationDelay: '6s' }}
        />
      </svg>

      {/* Construction-themed floating shapes */}
      {SHAPES.map((shape, i) => (
        <ShapeEl key={`shape-${i}`} shape={shape} />
      ))}

      {/* Subtle animated blueprint grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(29,78,137,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(29,78,137,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        animation: 'gridShift 20s linear infinite',
      }} />
    </div>
  );
}
