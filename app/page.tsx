import Hero from '@/components/Hero'
import Features from '@/components/Features'
import WhyUs from '@/components/WhyUs'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Features />
      <WhyUs />
    </main>
  )
}
