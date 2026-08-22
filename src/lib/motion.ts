import { Variants, Transition } from 'framer-motion';

/* ── EASING ─────────────────────────────────────────── */
export const easeOutExpo = [0.22, 1, 0.36, 1] as const;
export const easeSpring  = [0.34, 1.56, 0.64, 1] as const;
export const easeInOut   = [0.4, 0, 0.2, 1] as const;

/* ── BASE TRANSITIONS ───────────────────────────────── */
export const transitionBase: Transition = { duration: 0.65, ease: easeOutExpo };
export const transitionFast: Transition = { duration: 0.35, ease: easeOutExpo };
export const transitionSlow: Transition = { duration: 0.9,  ease: easeOutExpo };

/* ── VARIANTS ───────────────────────────────────────── */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: transitionBase },
};

export const fadeDown: Variants = {
  hidden:  { opacity: 0, y: -32 },
  visible: { opacity: 1, y: 0,  transition: transitionBase },
};

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: easeInOut } },
};

export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: 64 },
  visible: { opacity: 1, x: 0, transition: transitionBase },
};

export const slideRight: Variants = {
  hidden:  { opacity: 0, x: -64 },
  visible: { opacity: 1, x: 0, transition: transitionBase },
};

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeSpring } },
};

export const scaleInFast: Variants = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: easeSpring } },
};

export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const staggerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export const staggerSlow: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};

/* ── WORD / CHAR SPLIT ──────────────────────────────── */
export const wordReveal: Variants = {
  hidden:  { opacity: 0, y: '110%' },
  visible: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export const charReveal: Variants = {
  hidden:  { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

/* ── CARD HOVER ─────────────────────────────────────── */
export const cardHover = {
  rest:  { scale: 1, y: 0,  transition: transitionFast },
  hover: { scale: 1.02, y: -6, transition: { duration: 0.3, ease: easeOutExpo } },
};

/* ── NAVBAR ─────────────────────────────────────────── */
export const navbarVariants: Variants = {
  top:      { backdropFilter: 'blur(0px)', backgroundColor: 'transparent', height: '80px' },
  scrolled: { backdropFilter: 'blur(20px)', backgroundColor: 'rgba(255,255,255,0.95)', height: '64px' },
};

/* ── DRAWER ─────────────────────────────────────────── */
export const drawerVariants: Variants = {
  closed: { x: '100%', transition: { duration: 0.4, ease: easeInOut } },
  open:   { x: '0%',   transition: { duration: 0.4, ease: easeOutExpo } },
};

export const overlayVariants: Variants = {
  closed: { opacity: 0, pointerEvents: 'none' as const },
  open:   { opacity: 1, pointerEvents: 'auto' as const },
};

/* ── PAGE TRANSITION ────────────────────────────────── */
export const pageVariants: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOutExpo } },
  exit:    { opacity: 0, y: -24, transition: { duration: 0.3, ease: easeInOut } },
};

/* ── ACCORDION ──────────────────────────────────────── */
export const accordionContent: Variants = {
  collapsed: { height: 0, opacity: 0, overflow: 'hidden', transition: transitionFast },
  expanded:  { height: 'auto', opacity: 1, overflow: 'hidden', transition: transitionBase },
};
