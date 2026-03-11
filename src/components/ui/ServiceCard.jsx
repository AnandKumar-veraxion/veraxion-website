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
        className="group flex items-center justify-between py-7 border-b border-gray-100 hover:border-copper/40 transition-all duration-300 hover:pl-2"
      >
        <div className="flex items-baseline gap-6">
          <span className="text-copper/60 font-mono text-sm group-hover:text-copper transition-colors">{number}</span>
          <span className="text-xl md:text-2xl font-semibold text-navy group-hover:text-copper transition-colors duration-300">
            {title}
          </span>
        </div>
        <div className="w-10 h-10 rounded-xl bg-transparent group-hover:bg-copper/10 flex items-center justify-center transition-all duration-300">
          <ArrowRight
            size={18}
            className="text-gray-300 group-hover:text-copper group-hover:translate-x-1 transition-all duration-300"
          />
        </div>
      </Link>
    </motion.div>
  )
}
