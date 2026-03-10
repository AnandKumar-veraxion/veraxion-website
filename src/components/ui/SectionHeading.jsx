import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionHeading({ title, subtitle, light = false }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div ref={ref} className="mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={`text-4xl md:text-5xl font-bold ${light ? 'text-white' : 'text-navy'}`}
      >
        {title}
        <motion.span
          initial={{ width: 0 }}
          animate={inView ? { width: '3rem' } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="block h-1 bg-copper mt-4"
        />
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-lg max-w-2xl ${light ? 'text-white/70' : 'text-gray-600'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
