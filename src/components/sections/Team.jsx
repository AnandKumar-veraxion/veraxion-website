import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeading from '../ui/SectionHeading'

const team = [
  { name: 'Jagarlapudi Ravikiran', role: 'Co-Founder', photo: '/stock/team/p1.jpg' },
  { name: 'Vijay Veerachamy', role: 'Co-Founder', photo: '/stock/team/p2.jpg' },
  { name: 'Lovelesh Gupta', role: '', photo: null },
  { name: 'Gaurav Upadhyaya', role: '', photo: null },
  { name: 'Saurabh Rungta', role: '', photo: '/stock/team/p5.JPG' },
  { name: 'Neetu Sethi', role: '', photo: '/stock/team/p6.jpg' },
  { name: 'Amrita Bhullar', role: '', photo: null },
  { name: 'Praveen Kumar', role: '', photo: '/stock/team/p8.JPG' },
]

export default function Team() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="section-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Leadership"
          subtitle="The core team driving Veraxion's vision, strategy, and commitment to excellence."
        />
        <div className="grid grid-cols-4 gap-8 mt-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden text-center group w-64"
            >
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-72 object-cover"
                />
              ) : (
                <div className="w-full h-72 bg-gradient-to-br from-copper/20 to-copper-light/10 flex items-center justify-center">
                  <span className="text-4xl font-bold text-copper/60">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy mb-1">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
