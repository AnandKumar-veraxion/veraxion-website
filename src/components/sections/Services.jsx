import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'
import { services } from '../../data/services'

export default function Services() {
  return (
    <section className="section-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading
              title="Services"
              subtitle="We collaborate with Institutions & Organizations to provide industry-wide solutions helping transform their data and digital landscape."
            />
            <img
              src="/stock/services.png"
              alt=""
              className="w-full mt-8 rounded-2xl scale-110 origin-top"
            />
          </div>
          <div>
            {services.map((s, i) => (
              <ServiceCard key={s.id} number={s.number} title={s.title} slug={s.slug} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
