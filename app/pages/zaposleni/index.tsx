import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import HeroSection from './components/HeroSection'
import TeamGrid from './components/TeamGrid'

export default function ZaposleniPage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <TeamGrid />
      <Footer />
    </div>
  )
}
