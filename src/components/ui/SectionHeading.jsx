import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionHeading({ title, subtitle, light = false }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div ref={ref} className="mb-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`text-4xl md:text-5xl font-bold tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
          {title}
        </h2>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: '3rem' } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-copper mt-5 rounded-full"
        />
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-5 text-lg max-w-2xl leading-relaxed ${light ? 'text-white/50' : 'text-gray-400'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
