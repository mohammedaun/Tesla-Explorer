import { motion } from 'framer-motion'

export default function HeroDecoration() {
  return (
    <div className="hero__decoration" aria-hidden="true">
      <motion.svg
        width="520"
        height="520"
        viewBox="0 0 520 520"
        fill="none"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="420" cy="100" r="140" stroke="#009faf" strokeOpacity="0.18" strokeWidth="1.5" />
        <circle cx="420" cy="100" r="90" stroke="#4a7fd6" strokeOpacity="0.16" strokeWidth="1.5" />
      </motion.svg>

      <motion.div
        className="hero__deco-shape hero__deco-shape--a"
        animate={{ y: [0, 16, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero__deco-shape hero__deco-shape--b"
        animate={{ y: [0, -14, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      />
      <motion.div
        className="hero__deco-shape hero__deco-shape--c"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
      />
    </div>
  )
}
