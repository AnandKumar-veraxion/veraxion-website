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
      whileHover={{ y: -8 }}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-8 min-h-[300px] flex flex-col justify-end cursor-pointer group`}
    >
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-all duration-500" />
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-white/10 to-transparent" />
      <div className="relative z-10">
        {Icon && (
          <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-5 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
            <Icon size={28} className="text-white" />
          </div>
        )}
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">{description}</p>
      </div>
    </motion.div>
  )
}
