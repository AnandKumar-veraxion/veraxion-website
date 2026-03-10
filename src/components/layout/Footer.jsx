import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center text-3xl font-bold text-white tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Veraxi<img src="/veraxion.png" alt="o" className="h-8 w-8 object-contain mx-[1px]" />n
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Unlocking Business Excellence using Technology. A global team of
              experts helping organizations achieve sustainable growth through
              Digital, Data, Engineering, and AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="hover:text-copper transition-colors">Home</Link>
              <Link to="/about" className="hover:text-copper transition-colors">About</Link>
              <Link to="/careers" className="hover:text-copper transition-colors">Careers</Link>
              <Link to="/contact" className="hover:text-copper transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Headquarters</h4>
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

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs">
          &copy; {new Date().getFullYear()} Veraxion AG. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
