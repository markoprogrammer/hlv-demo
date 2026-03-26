import type { Route } from './+types/index'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import ValuesSection from './components/ValuesSection'
import ExpertiseSection from './components/ExpertiseSection'
import BenefitsSection from './components/BenefitsSection'

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'Hooloovoo — Deep tech. AI you can trust. People who care.' },
    { name: 'description', content: 'Hooloovoo razvija softver za gaming i betting industriju. Mikroservisi, AI, full-stack razvoj.' },
  ]
}

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ValuesSection />
      <ExpertiseSection />
      <BenefitsSection />
      <Footer />
    </div>
  )
}
