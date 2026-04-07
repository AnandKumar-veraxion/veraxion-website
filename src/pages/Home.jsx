import PageTransition from '../components/layout/PageTransition'
import Hero from '../components/sections/Hero'
import Industries from '../components/sections/Industries'
import Services from '../components/sections/Services'
import CareersPreview from '../components/sections/CareersPreview'
import Stats from '../components/sections/Stats'

export default function Home() {
  return (
    <PageTransition>
      <Hero
        preTitle="Welcome to Veraxion"
        title={<>Unlocking Business<br />Excellence using<br /><span className="text-white/60">Technology</span></>}
        bgImage="/stock/home.jpg"
      />
      <Industries />
      <Services />
      <CareersPreview />
      <Stats />
    </PageTransition>
  )
}
