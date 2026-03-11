import { motion } from 'framer-motion'

export default function BenefitCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass-card p-7 group"
    >
      <div className="w-14 h-14 bg-copper/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-copper/20 group-hover:scale-110 transition-all duration-500">
        <Icon size={24} className="text-copper" />
      </div>
      <h3 className="text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  )
}
