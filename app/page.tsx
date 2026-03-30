import Hero from '@/components/Hero'
import Features from '@/components/Features'
import WhyUs from '@/components/WhyUs'
import HowItWorks from '@/components/HowItWorks'
import TopPicks from '@/components/TopPicks'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Features />
      <WhyUs />
      <HowItWorks />
      <TopPicks />
      <Testimonials />
    </main>
  )
}
