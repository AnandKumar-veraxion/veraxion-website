import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, BookOpen, Network, Briefcase, Globe, Users } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import Hero from '../components/sections/Hero'
import SectionHeading from '../components/ui/SectionHeading'
import BenefitCard from '../components/ui/BenefitCard'
import Button from '../components/ui/Button'

const benefits = [
  { icon: TrendingUp, title: 'Career Growth', description: 'Access to structured career paths with opportunities for rapid advancement and professional development.' },
  { icon: BookOpen, title: 'Learning Opportunities', description: 'Exposure to a wide range of industries, projects, and cutting-edge technologies, fostering continuous learning and skill development.' },
  { icon: Network, title: 'Networking', description: 'Building a robust network of industry professionals, clients, and thought leaders, enhancing career prospects and professional relationships.' },
  { icon: Briefcase, title: 'Diverse Experience', description: 'Working on a variety of projects across different sectors, gaining a broad and versatile skillset.' },
  { icon: Globe, title: 'Global Opportunities', description: 'Possibility of working on international projects and opportunities for travel and global exposure.' },
  { icon: Users, title: 'Collaborative Culture', description: 'Being part of a collaborative and dynamic team that values innovation, diversity, and mutual respect.' },
]

export default function Careers() {
  const [introRef, introInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <PageTransition>
      <Hero title={<>Join <span className="text-copper">Veraxion</span></>} subtitle="Where innovation meets passion and creativity fuels success." />

      {/* Intro */}
      <section ref={introRef} className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-copper font-semibold text-lg mb-2">Veraxion</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Veraxion we work with the biggest and fastest growing companies worldwide.
              We collaborate on interesting projects from various fields and industries,
              providing the best service by our extraordinary team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us + Growth */}
      <section ref={whyRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={whyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-navy mb-6">Why Work with Us?</h3>
              <p className="text-gray-600 leading-relaxed">
                Working with us means joining a team that values each member's growth and success.
                Here, you're not just another employee; you're part of a supportive, innovative community
                dedicated to making a real impact. Our collaborative environment encourages creativity
                and problem-solving, empowering you to take ownership of projects and drive meaningful
                change for our clients. With access to cutting-edge technology and ongoing professional
                development, we ensure that you have the tools and opportunities to excel in your career.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={whyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-navy mb-6">Growth & Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Your personal growth is a priority in our company. We believe in investing in our
                employees' development through continuous learning opportunities, mentorship, and
                tailored career advancement programs. You'll have access to cutting-edge technology
                and training resources that empower you to stay ahead in the rapidly evolving IT industry.
                Our supportive environment encourages you to explore new ideas, take on challenges,
                and achieve your professional goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Key Benefits" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {benefits.map((b, i) => (
              <BenefitCard key={b.title} icon={b.icon} title={b.title} description={b.description} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Browse Open Positions */}
      <section className="py-24 bg-navy text-center">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Browse Open Positions</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Ready to make an impact? Explore our current openings and take the next step in your career.
            </p>
            <Button variant="outline" href="mailto:info@veraxion.com">Application Form</Button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
