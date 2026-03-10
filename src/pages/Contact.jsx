import PageTransition from '../components/layout/PageTransition'
import Hero from '../components/sections/Hero'
import ContactForm from '../components/sections/ContactForm'

export default function Contact() {
  return (
    <PageTransition>
      <Hero title={<>Get in <span className="text-copper">Touch</span></>} subtitle="We'd love to hear from you. Reach out to any of our global offices." />
      <ContactForm />
    </PageTransition>
  )
}
