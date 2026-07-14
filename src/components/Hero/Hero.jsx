import { motion } from 'framer-motion'
import HeroDecoration from './HeroDecoration.jsx'
import './Hero.css'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero({ onExplore }) {
  return (
    <section className="hero section" id="hero">
      <HeroDecoration />

      <motion.div
        className="hero__content container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span className="eyebrow" variants={item}>
          Engineering, explained
        </motion.span>

        <motion.h1 className="hero__title" variants={item}>
          Inside Tesla
        </motion.h1>

        <motion.p className="hero__subtitle" variants={item}>
          Explore how Tesla vehicles are engineered — from the exterior body
          to the electric drivetrain.
        </motion.p>

        <motion.div variants={item}>
          <button className="hero__cta" onClick={onExplore}>
            Explore the Car
            <span className="hero__cta-arrow">→</span>
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="hero__scroll-line" />
        Scroll to begin
      </motion.div>
    </section>
  )
}
