import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide rounded-xl transition-all duration-300'
  const variants = {
    primary: 'bg-copper text-white hover:bg-copper-light hover:shadow-glow',
    outline: 'border border-white/20 text-white/80 hover:bg-white/10 hover:border-white/40 hover:text-white backdrop-blur-sm',
    dark: 'bg-navy text-white hover:bg-navy-light hover:shadow-glow',
    ghost: 'text-copper hover:bg-copper/10',
  }
  const cls = `${base} ${variants[variant]} ${className}`

  const Wrapper = motion.div

  if (to) {
    return (
      <Wrapper whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link to={to} className={cls} {...props}>{children}</Link>
      </Wrapper>
    )
  }
  if (href) {
    return (
      <Wrapper whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <a href={href} className={cls} {...props}>{children}</a>
      </Wrapper>
    )
  }
  return (
    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className={cls} {...props}>
      {children}
    </motion.button>
  )
}
