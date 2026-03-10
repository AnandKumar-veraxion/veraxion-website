import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ number, title, slug, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/services/${slug}`}
        className="group flex items-center justify-between py-6 border-b border-gray-200 hover:border-copper transition-colors"
      >
        <div className="flex items-baseline gap-6">
          <span className="text-copper font-bold text-sm">{number}</span>
          <span className="text-xl md:text-2xl font-semibold text-navy group-hover:text-copper transition-colors">
            {title}
          </span>
        </div>
        <ArrowRight
          size={20}
          className="text-gray-400 group-hover:text-copper group-hover:translate-x-2 transition-all"
        />
      </Link>
    </motion.div>
  )
}
