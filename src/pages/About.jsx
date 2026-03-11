import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { imagesReady as imagesReadyPromise } from '../utils/preloadImages'
import { Users, Lightbulb, Shield, Handshake } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import SectionHeading from '../components/ui/SectionHeading'

const storyTabs = [
  { key: 'genesis', label: 'Genesis', content: 'Our journey began with a shared passion for technology and innovation. Seeing businesses struggle to keep up with rapid change, we set out to bridge the gap, providing expertise and solutions to help them thrive in the digital age.' },
  { key: 'vision', label: 'Vision', content: 'Enabling businesses of all sizes to thrive through innovative solutions that drive growth and transformation.' },
  { key: 'mission', label: 'Mission', content: 'Empowering businesses with tailored solutions for operational excellence and competitive advantage.' },
  { key: 'journey', label: 'Journey', content: 'Starting from humble beginnings, we tackled key challenges head-on. Adapting to a rapidly evolving tech landscape, assembling a world-class team, and earning the trust of our clients. These milestones became stepping stones, refining our expertise and delivering impactful and measurable results that drive success.' },
  { key: 'team', label: 'Team', content: 'Behind our success is a diverse team of IT experts, passionate about driving technological innovation. Our team comprises seasoned consultants, software engineers, data scientists, and cybersecurity specialists, all committed to delivering unparalleled service and solutions.' },
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
  const [imgRef, imgInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    imagesReadyPromise.then(() => setLoaded(true))
  }, [])

  const activeContent = storyTabs.find((t) => t.key === activeTab)

  return (
    <PageTransition>
      <Hero title={<>About <span className="text-copper">Veraxion</span></>} />

      <section className="section-light">
        <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeading title="Our Story" />
          <div className="grid lg:grid-cols-[250px_1fr] gap-12 mt-8">
            <div className="flex lg:flex-col gap-2 overflow-x-auto">
              {storyTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-3.5 text-left text-sm font-medium rounded-xl whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-gradient-to-r from-copper to-copper-light text-white shadow-glow'
                      : 'text-gray-400 hover:text-navy hover:bg-white hover:shadow-glass'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-lg text-gray-500 leading-relaxed"
              >
                {activeContent?.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Photos section */}
      <section className="section-light" ref={imgRef}>
        <div className="relative max-w-7xl mx-auto px-6">
          <div
            className={`transition-all duration-700 ${imgInView && loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
          >
            <div className="grid grid-cols-5 grid-rows-2 gap-4 h-[500px]">
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden group">
                <img
                  src="/stock/career-section/car1.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="col-span-3 row-span-1 rounded-2xl overflow-hidden group">
                <img
                  src="/stock/career-section/car2.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="col-span-3 row-span-1 rounded-2xl overflow-hidden group">
                <img
                  src="/stock/career-section/car3.png"
                  alt=""
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-white" ref={valRef}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Our Values" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="glass-card p-7 group"
              >
                <div className="w-14 h-14 bg-copper/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-copper/20 group-hover:scale-110 transition-all duration-500">
                  <v.icon size={24} className="text-copper" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
    </PageTransition>
  )
}
