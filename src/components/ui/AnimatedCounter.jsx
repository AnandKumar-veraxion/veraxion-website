import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function AnimatedCounter({ value, suffix = '', label }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <div ref={ref}>
      <div className="text-4xl md:text-5xl font-bold text-copper tabular-nums">
        {count}
        <span className="text-copper/70">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-white/60 font-medium tracking-wide uppercase">
        {label}
      </div>
    </div>
  )
}
