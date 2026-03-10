import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

export default function IndustryCard({ title, description, icon, gradient, index }) {
  const Icon = Icons[icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${gradient} p-8 min-h-[280px] flex flex-col justify-end cursor-pointer group`}
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      <div className="relative z-10">
        {Icon && <Icon size={36} className="text-white/80 mb-4" />}
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
