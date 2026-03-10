import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import { services } from '../data/services'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-navy flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
            <Link to="/" className="text-copper hover:underline">Back to Home</Link>
          </div>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      {/* Hero */}
      <section className="min-h-[60vh] bg-navy flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full border border-white/5"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-copper text-6xl md:text-8xl font-bold">{service.number}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4">{service.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl text-gray-700 leading-relaxed max-w-3xl"
          >
            {service.description}
          </motion.p>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12">
            Offerings
            <span className="block h-1 w-12 bg-copper mt-4" />
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {service.offerings.map((offering, i) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-offwhite rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-copper mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-2">{offering.title}</h3>
                    <p className="text-sm text-gray-600">{offering.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
