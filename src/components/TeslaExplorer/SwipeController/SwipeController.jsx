import { motion } from 'framer-motion'
import { useStage, STAGE_COUNT } from '../../../context/StageContext.jsx'
import './SwipeController.css'

const STAGE_LABELS = ['Full Vehicle', 'Exposed Systems', 'Bare Drivetrain']

export default function SwipeController() {
  const { stage, nextStage, prevStage, goToStage } = useStage()
  const isFirst = stage === 0
  const isLast = stage === STAGE_COUNT - 1

  return (
    <div className="swipe-layer">
      <div className="swipe-layer__hint">
        <span>Use the arrows below to move through layers</span>
      </div>

      <div className="swipe-layer__nav">
        <button
          className="swipe-layer__arrow"
          onClick={prevStage}
          disabled={isFirst}
          aria-label="Previous layer"
        >
          ‹
        </button>

        <div className="swipe-layer__dots">
          {Array.from({ length: STAGE_COUNT }).map((_, i) => (
            <button
              key={i}
              className={`swipe-layer__dot ${i === stage ? 'is-active' : ''}`}
              onClick={() => goToStage(i)}
              aria-label={`Go to stage ${i}`}
            >
              {i === stage && (
                <motion.span
                  layoutId="dot-highlight"
                  className="swipe-layer__dot-glow"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          className="swipe-layer__arrow"
          onClick={nextStage}
          disabled={isLast}
          aria-label="Next layer"
        >
          ›
        </button>
      </div>

      <div className="swipe-layer__label">{STAGE_LABELS[stage]}</div>
    </div>
  )
}