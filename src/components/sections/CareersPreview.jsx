import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from '../ui/Button'

export default function CareersPreview() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="py-28 bg-navy relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-copper/[0.03] blur-[100px]" />
        <div className="absolute top-0 right-1/3 w-[300px] h-[300px] rounded-full bg-accent/[0.03] blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">Careers</h2>
          <p className="text-copper font-semibold text-lg mb-6">Veraxion</p>
          <p className="text-white/50 leading-relaxed mb-8 max-w-2xl mx-auto">
            Welcome to Veraxion, where innovation meets passion and creativity fuels success.
            We believe in building a team of talented individuals who are driven by curiosity,
            grounded in integrity, and committed to excellence.
          </p>
          <Button to="/careers">Read More</Button>
        </motion.div>

      </div>
    </section>
  )
}
