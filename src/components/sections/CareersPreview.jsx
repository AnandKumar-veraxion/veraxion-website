import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from '../ui/Button'

export default function CareersPreview() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="section-dark noise-overlay">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-copper/[0.03] blur-[100px]" />
        <div className="absolute top-0 right-1/3 w-[300px] h-[300px] rounded-full bg-accent/[0.03] blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Decorative grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="glass-card-dark bg-gradient-to-br from-copper/10 to-copper/[0.02] rounded-2xl h-52 flex items-center justify-center"
            >
              <span className="text-copper/20 text-7xl font-bold font-display">V</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="glass-card-dark bg-gradient-to-br from-gold/10 to-gold/[0.02] rounded-2xl h-52 mt-8 flex items-center justify-center"
            >
              <span className="text-gold/20 text-5xl font-bold">+</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card-dark bg-gradient-to-br from-accent/10 to-accent/[0.02] rounded-2xl h-52 -mt-4 flex items-center justify-center col-span-2"
            >
              <span className="text-accent/20 text-4xl font-bold tracking-[0.3em]">TEAM</span>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">Careers</h2>
            <p className="text-copper font-semibold text-lg mb-6">Veraxion</p>
            <p className="text-white/50 leading-relaxed mb-8">
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
