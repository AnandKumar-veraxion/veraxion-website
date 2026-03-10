import { motion } from 'framer-motion'

export default function BenefitCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
    >
      <div className="w-12 h-12 bg-copper/10 rounded-lg flex items-center justify-center mb-4">
        <Icon size={24} className="text-copper" />
      </div>
      <h3 className="text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}
