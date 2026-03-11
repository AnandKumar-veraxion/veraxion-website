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
        title={<>Unlocking Business<br />Excellence using<br /><span className="text-copper">Technology</span></>}
        subtitle="A global team of experts helping organizations achieve sustainable growth through Digital, Data, Engineering, and AI."
      />
      <Industries />
      <Services />
      <CareersPreview />
      <Stats />
    </PageTransition>
  )
}
