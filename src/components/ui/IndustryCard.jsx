import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

export default function IndustryCard({ title, description, icon, images, index, imagesReady }) {
  const Icon = Icons[icon]
  const [currentImage, setCurrentImage] = useState(0)
  const [prevImage, setPrevImage] = useState(0)

  useEffect(() => {
    if (!imagesReady || !images || images.length <= 1) return
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        setPrevImage(prev)
        return (prev + 1) % images.length
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [imagesReady, images])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="relative overflow-hidden rounded-2xl bg-black p-8 min-h-[300px] flex flex-col justify-end cursor-pointer group"
    >
      {/* Background images - all rendered hidden, CSS toggles opacity */}
      {images && images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out"
          style={{
            opacity: imagesReady && (i === currentImage || i === prevImage) ? 0.9 : 0,
            zIndex: i === currentImage ? 2 : i === prevImage ? 1 : 0,
            willChange: 'opacity',
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-all duration-500" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-white/10 to-transparent" />
      <div className="relative z-10">
        {Icon && (
          <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-5 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
            <Icon size={28} className="text-white" />
          </div>
        )}
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/90 text-sm font-medium leading-relaxed group-hover:text-white transition-colors duration-300">{description}</p>
      </div>
    </motion.div>
  )
}
