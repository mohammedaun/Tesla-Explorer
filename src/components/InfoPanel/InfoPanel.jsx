import { AnimatePresence, motion } from 'framer-motion'
import { useStage } from '../../context/StageContext.jsx'
import StageOne from './StageOne/StageOne.jsx'
import StageTwo from './StageTwo/StageTwo.jsx'
import StageThree from './StageThree/StageThree.jsx'
import './InfoPanel.css'

const STAGE_META = [
  { eyebrow: 'Layer 01', title: 'Tesla Exterior', Content: StageOne },
  { eyebrow: 'Layer 02', title: 'Internal Systems', Content: StageTwo },
  { eyebrow: 'Layer 03', title: 'Electric Drivetrain', Content: StageThree },
]
export default function InfoPanel() {
  const { stage, goToStage } = useStage()
  const meta = STAGE_META[stage]
  const Content = meta.Content

  return (
    <section className="info section" id="info">
      <div className="container">
        <div className="info__tabs">
          {STAGE_META.map((s, i) => (
            <button
              key={s.title}
              className={`info__tab ${i === stage ? 'is-active' : ''}`}
              onClick={() => goToStage(i)}
            >
              {s.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">{meta.eyebrow}</span>
            <h2 className="info__title">{meta.title}</h2>
            <Content />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
