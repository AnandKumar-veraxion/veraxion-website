import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from '../ui/Button'

export default function CareersPreview() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-gradient-to-br from-copper/20 to-copper/5 rounded-lg h-48 flex items-center justify-center">
              <div className="text-copper/40 text-6xl font-bold">V</div>
            </div>
            <div className="bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg h-48 mt-8 flex items-center justify-center">
              <div className="text-gold/40 text-4xl font-bold">+</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-lg h-48 -mt-4 flex items-center justify-center col-span-2">
              <div className="text-blue-400/40 text-3xl font-bold">TEAM</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Careers</h2>
            <p className="text-copper font-semibold text-lg mb-6">Veraxion</p>
            <p className="text-white/70 leading-relaxed mb-8">
              Welcome to Veraxion, where innovation meets passion and creativity fuels success.
              We believe in building a team of talented individuals who are driven by curiosity,
              grounded in integrity, and committed to excellence.
            </p>
            <Button to="/careers">Read More</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
