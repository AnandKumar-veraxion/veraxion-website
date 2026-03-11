import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedCounter from '../ui/AnimatedCounter'
import { stats } from '../../data/stats'
import { Clock, Users, Briefcase, MapPin } from 'lucide-react'

const iconMap = { Clock, Users, Briefcase, MapPin }

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="relative section-dark noise-overlay">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-copper/[0.04] blur-[100px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.03] blur-[80px]" />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-semibold tracking-[0.2em] uppercase mb-16"
        >
          <span className="text-copper">Veraxion at a Glance</span>
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => {
            const Icon = iconMap[s.icon]
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card-dark p-8 text-center hover:border-copper/20 hover:bg-white/[0.06] group"
              >
                {Icon && (
                  <div className="mx-auto mb-5 w-12 h-12 flex items-center justify-center rounded-2xl bg-copper/10 text-copper group-hover:scale-110 transition-transform duration-500">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                )}
                <AnimatedCounter value={s.value} suffix={s.suffix} label={s.label} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
