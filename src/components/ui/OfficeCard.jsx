import { motion } from 'framer-motion'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function OfficeCard({ office, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="glass-card p-8 group"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-copper/10 flex items-center justify-center group-hover:bg-copper/20 transition-colors">
          <MapPin size={18} className="text-copper" />
        </div>
        <h3 className="text-xl font-bold text-navy">{office.city}, {office.country}</h3>
      </div>
      <p className="text-sm font-medium text-copper/80 mb-2">{office.entity}</p>
      <p className="text-sm text-gray-400 mb-5">{office.address}</p>
      <div className="flex flex-col gap-2 text-sm text-gray-400">
        <a href={`mailto:${office.email}`} className="flex items-center gap-2 hover:text-copper transition-colors">
          <Mail size={14} /> {office.email}
        </a>
        <a href={`tel:${office.tel.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-copper transition-colors">
          <Phone size={14} /> {office.tel}
        </a>
      </div>
    </motion.div>
  )
}
