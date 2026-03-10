import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wide rounded-sm transition-all duration-300'
  const variants = {
    primary: 'bg-copper text-white hover:bg-copper/90 hover:shadow-lg hover:shadow-copper/25',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-navy',
    dark: 'bg-navy text-white hover:bg-navy/90',
  }
  const cls = `${base} ${variants[variant]} ${className}`

  const Wrapper = motion.div

  if (to) {
    return (
      <Wrapper whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link to={to} className={cls} {...props}>{children}</Link>
      </Wrapper>
    )
  }
  if (href) {
    return (
      <Wrapper whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <a href={href} className={cls} {...props}>{children}</a>
      </Wrapper>
    )
  }
  return (
    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={cls} {...props}>
      {children}
    </motion.button>
  )
}
