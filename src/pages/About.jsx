import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Lightbulb, Shield, Handshake } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import SectionHeading from '../components/ui/SectionHeading'

const storyTabs = [
  {
    key: 'genesis',
    label: 'Genesis',
    content:
      'Our journey began with a shared passion for technology and innovation. Seeing businesses struggle to keep up with rapid change, we set out to bridge the gap, providing expertise and solutions to help them thrive in the digital age.',
  },
  {
    key: 'vision',
    label: 'Vision',
    content:
      'Enabling businesses of all sizes to thrive through innovative solutions that drive growth and transformation.',
  },
  {
    key: 'mission',
    label: 'Mission',
    content:
      'Empowering businesses with tailored solutions for operational excellence and competitive advantage.',
  },
  {
    key: 'journey',
    label: 'Journey',
    content:
      'Starting from humble beginnings, we tackled key challenges head-on. Adapting to a rapidly evolving tech landscape, assembling a world-class team, and earning the trust of our clients. These milestones became stepping stones, refining our expertise and delivering impactful and measurable results that drive success.',
  },
  {
    key: 'team',
    label: 'Team',
    content:
      'Behind our success is a diverse team of IT experts, passionate about driving technological innovation. Our team comprises seasoned consultants, software engineers, data scientists, and cybersecurity specialists, all committed to delivering unparalleled service and solutions.',
  },
]

const values = [
  { icon: Users, title: 'Client-Centricity', desc: "We prioritize our clients' needs and strive to exceed their expectations." },
  { icon: Lightbulb, title: 'Innovation', desc: "We embrace new ideas and technologies, continually pushing the boundaries of what's possible." },
  { icon: Shield, title: 'Integrity', desc: 'We conduct our business with honesty and transparency, building long-lasting relationships based on trust.' },
  { icon: Handshake, title: 'Collaboration', desc: 'We believe in the power of teamwork, both within our company and with our clients.' },
]

export default function About() {
  const [activeTab, setActiveTab] = useState('genesis')
  const [valRef, valInView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const activeContent = storyTabs.find((t) => t.key === activeTab)

  return (
    <PageTransition>
      <Hero title={<>About <span className="text-copper">Veraxion</span></>} />

      {/* Our Story */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Our Story" />
          <div className="grid lg:grid-cols-[250px_1fr] gap-12 mt-8">
            {/* Tabs */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto">
              {storyTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-3 text-left text-sm font-medium rounded-md whitespace-nowrap transition-all ${
                    activeTab === tab.key
                      ? 'bg-copper text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                {activeContent?.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white" ref={valRef}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Our Values" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-offwhite rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-copper/10 rounded-lg flex items-center justify-center mb-4">
                  <v.icon size={24} className="text-copper" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
    </PageTransition>
  )
}
