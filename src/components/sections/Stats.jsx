import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedCounter from '../ui/AnimatedCounter'
import { stats } from '../../data/stats'
import { Clock, Users, Briefcase, MapPin } from 'lucide-react'

const iconMap = { Clock, Users, Briefcase, MapPin }

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="relative py-24 bg-navy overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-copper blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-copper font-semibold tracking-widest uppercase text-sm mb-16"
        >
          Veraxion at a Glance
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((s, i) => {
            const Icon = iconMap[s.icon]
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 text-center hover:border-copper/40 hover:bg-white/[0.06] transition-all duration-300"
              >
                {Icon && (
                  <div className="mx-auto mb-4 w-10 h-10 flex items-center justify-center rounded-full bg-copper/10 text-copper group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} strokeWidth={1.5} />
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
