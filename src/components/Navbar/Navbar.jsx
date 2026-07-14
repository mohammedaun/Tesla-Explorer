import { motion } from 'framer-motion'
import './Navbar.css'

export default function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar__mark">
        <span className="navbar__dot" />
        Inside Tesla
      </div>
      <nav className="navbar__links">
        <a href="#hero">Overview</a>
        <a href="#explorer">Explore</a>
        <a href="#info">Engineering</a>
      </nav>
    </motion.header>
  )
}
