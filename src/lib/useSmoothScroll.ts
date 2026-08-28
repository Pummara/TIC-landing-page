import { useEffect } from 'react'

/**
 * A restrained, Locomotive-Scroll-style ease on wheel input: real `window.scrollY`
 * still drives everything (IntersectionObserver, anchor links, scroll restoration),
 * only the per-tick delta gets lerped toward a target instead of jumping instantly.
 *
 * Deliberately narrow: only wheel input on a fine pointer is touched.
 * - Touch scrolling is untouched — mobile's native momentum scroll already feels
 *   right, and hijacking it usually makes things worse.
 * - Keyboard scroll (Page Down, arrows, Home/End) and scrollbar-thumb drag don't
 *   fire `wheel`, so they stay instant and native — exactly what keyboard users want.
 * - `prefers-reduced-motion` disables this entirely; native scroll is always the
 *   fallback if this hook never runs (failed script, older browser, etc.).
 */
export default function useSmoothScroll(ease = 0.12) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (prefersReducedMotion || !isFinePointer) return

    let target = window.scrollY
    let current = window.scrollY
    let rafId: number | null = null

    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight

    const step = () => {
      current += (target - current) * ease
      if (Math.abs(target - current) < 0.5) {
        current = target
        window.scrollTo({ top: current, behavior: 'instant' })
        rafId = null
        return
      }
      window.scrollTo({ top: current, behavior: 'instant' })
      rafId = requestAnimationFrame(step)
    }

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return // pinch-zoom gesture, leave untouched
      e.preventDefault()
      target = Math.min(Math.max(target + e.deltaY, 0), maxScroll())
      if (rafId === null) rafId = requestAnimationFrame(step)
    }

    const onNativeScroll = () => {
      // Keyboard/scrollbar/anchor-link scrolls happen outside our loop —
      // resync so the next wheel tick doesn't jump from a stale target.
      if (rafId === null) {
        target = window.scrollY
        current = window.scrollY
      }
    }

    const onResize = () => {
      target = Math.min(target, maxScroll())
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('scroll', onNativeScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('scroll', onNativeScroll)
      window.removeEventListener('resize', onResize)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [ease])
}
