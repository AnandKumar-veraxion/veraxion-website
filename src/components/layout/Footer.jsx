import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-navy text-white/50 overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="flex items-center text-2xl font-bold text-white tracking-tight font-display">
              Veraxi<img src="/veraxion.png" alt="o" className="h-8 w-8 object-contain mx-[1px]" />n
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Unlocking Business Excellence using Technology. 
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Quick Links</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/" className="hover:text-copper transition-colors">Home</Link>
              <Link to="/about" className="hover:text-copper transition-colors">About</Link>
              <Link to="/careers" className="hover:text-copper transition-colors">Careers</Link>
              <Link to="/contact" className="hover:text-copper transition-colors">Contact</Link>
              <a
                href="https://www.linkedin.com/company/veraxion/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-copper transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Headquarters</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-copper shrink-0" />
                <span>Veraxion AG, Grabenstrasse 15a/b, Baar (ZG), Switzerland</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-copper shrink-0" />
                <a href="mailto:info@veraxion.com" className="hover:text-copper transition-colors">
                  info@veraxion.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-copper shrink-0" />
                <a href="tel:+41415117085" className="hover:text-copper transition-colors">
                  +41 (0)41 511 70 85
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} Veraxion AG. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
