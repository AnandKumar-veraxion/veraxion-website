import { useState, useEffect } from 'react'
import SectionHeading from '../ui/SectionHeading'
import IndustryCard from '../ui/IndustryCard'
import { industries } from '../../data/industries'

// Preload all industry images once at module level
const allImages = industries.flatMap((ind) => ind.images || [])
const preloadPromise = Promise.all(
  allImages.map(
    (src) =>
      new Promise((resolve) => {
        const img = new Image()
        img.onload = resolve
        img.onerror = resolve
        img.src = src
      })
  )
)

export default function Industries() {
  const [imagesReady, setImagesReady] = useState(false)

  useEffect(() => {
    preloadPromise.then(() => setImagesReady(true))
  }, [])

  return (
    <section className="section-light">
      {/* Subtle mesh background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Industries"
          subtitle="We specialize in delivering innovative solutions, our team is committed to driving success and creating value. With a deep understanding of each sector's unique challenges, we help businesses thrive in an ever-evolving landscape."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {industries.map((ind, i) => (
            <IndustryCard key={ind.id} {...ind} index={i} imagesReady={imagesReady} />
          ))}
        </div>
      </div>
    </section>
  )
}
