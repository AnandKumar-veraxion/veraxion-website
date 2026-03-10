import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import OfficeCard from '../ui/OfficeCard'
import { offices } from '../../data/offices'

export default function ContactForm() {
  return (
    <section className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Our Offices" />
        <div className="grid md:grid-cols-2 gap-6">
          {offices.map((office, i) => (
            <OfficeCard key={office.id} office={office} index={i} />
          ))}
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-lg overflow-hidden h-[400px] bg-gray-200"
        >
          <iframe
            title="Veraxion Offices"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.853!2d77.6784!3d12.9262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBellandur%2C+Bangalore!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
