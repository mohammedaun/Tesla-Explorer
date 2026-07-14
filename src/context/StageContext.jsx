import { createContext, useContext, useMemo, useState, useCallback } from 'react'

const StageContext = createContext(null)

export const STAGE_COUNT = 3

export function StageProvider({ children }) {
  const [stage, setStage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToStage = useCallback((next) => {
    setStage(Math.min(STAGE_COUNT - 1, Math.max(0, next)))
  }, [])

  const nextStage = useCallback(() => {
    setStage((s) => Math.min(STAGE_COUNT - 1, s + 1))
  }, [])

  const prevStage = useCallback(() => {
    setStage((s) => Math.max(0, s - 1))
  }, [])

  const value = useMemo(
    () => ({
      stage,
      goToStage,
      nextStage,
      prevStage,
      isAnimating,
      setIsAnimating,
    }),
    [stage, goToStage, nextStage, prevStage, isAnimating]
  )

  return <StageContext.Provider value={value}>{children}</StageContext.Provider>
}

export function useStage() {
  const ctx = useContext(StageContext)
  if (!ctx) throw new Error('useStage must be used within a StageProvider')
  return ctx
}
