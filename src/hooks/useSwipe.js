import { useRef, useEffect, useCallback } from 'react'

export function useSwipe({ containerRef, onSwipeLeft, onSwipeRight, threshold = 60 } = {}) {
  const startX = useRef(null)
  const startY = useRef(null)
  const wheelAccum = useRef(0)
  const wheelLock = useRef(false)

  const handlePointerDown = useCallback((e) => {
    startX.current = e.clientX ?? e.touches?.[0]?.clientX ?? null
    startY.current = e.clientY ?? e.touches?.[0]?.clientY ?? null
  }, [])

  const handlePointerUp = useCallback(
    (e) => {
      if (startX.current === null) return
      const endX = e.clientX ?? e.changedTouches?.[0]?.clientX ?? startX.current
      const endY = e.clientY ?? e.changedTouches?.[0]?.clientY ?? startY.current
      const deltaX = endX - startX.current
      const deltaY = endY - (startY.current ?? endY)

      if (Math.abs(deltaX) > threshold && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
        if (deltaX < 0) onSwipeLeft?.()
        else onSwipeRight?.()
      }
      startX.current = null
      startY.current = null
    },
    [onSwipeLeft, onSwipeRight, threshold]
  )

  const handleWheel = useCallback(
    (e) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return
      if (wheelLock.current) return
      wheelAccum.current += e.deltaX
      if (Math.abs(wheelAccum.current) > threshold) {
        if (wheelAccum.current > 0) onSwipeLeft?.()
        else onSwipeRight?.()
        wheelAccum.current = 0
        wheelLock.current = true
        setTimeout(() => {
          wheelLock.current = false
        }, 600)
      }
    },
    [onSwipeLeft, onSwipeRight, threshold]
  )

  useEffect(() => {
    const el = containerRef?.current
    if (!el) return

    el.addEventListener('pointerdown', handlePointerDown)
    el.addEventListener('pointerup', handlePointerUp)
    el.addEventListener('wheel', handleWheel, { passive: true })

    return () => {
      el.removeEventListener('pointerdown', handlePointerDown)
      el.removeEventListener('pointerup', handlePointerUp)
      el.removeEventListener('wheel', handleWheel)
    }
  }, [containerRef, handlePointerDown, handlePointerUp, handleWheel])
}