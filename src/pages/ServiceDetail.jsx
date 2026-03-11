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
        <div className="min-h-screen bg-hero-pattern flex items-center justify-center">
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
      <section className="min-h-[60vh] bg-hero-pattern flex items-center relative overflow-hidden noise-overlay">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-copper/[0.04] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-gold/[0.03] rounded-full blur-[80px]" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full border border-white/[0.03]"
          />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-copper text-6xl md:text-8xl font-bold">{service.number}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 tracking-tight">{service.title}</h1>
          </motion.div>
        </div>
      </section>

      <section className="section-light">
        <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl text-gray-500 leading-relaxed max-w-3xl"
          >
            {service.description}
          </motion.p>
        </div>
      </section>

      <section className="section-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 tracking-tight">
            Offerings
            <span className="block h-1 w-12 bg-copper mt-5 rounded-full" />
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.offerings.map((offering, i) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card  p-7 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-copper/10 flex items-center justify-center shrink-0 group-hover:bg-copper/20 transition-colors">
                    <CheckCircle size={18} className="text-copper" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-2">{offering.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{offering.details}</p>
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
