import { List, Heart, Bell } from 'lucide-react'
import ShadowOverlay from './ui/shadowOverlay'

export default function WhyUs() {
  return (
    <section id="WhyUs" className="relative container py-30">
      <ShadowOverlay className="top-0 left-1/12" />
      <ShadowOverlay className="bottom-0 right-1/12" />

      <h2 className="section-title text-center">
        Why Couples Love <span>2Watch</span>
      </h2>
      <p className="text-center text-lg mx-auto w-fit">
        Everything you need to make movie nights magical
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="glass-card px-4 py-8 rounded-xl hover:scale-105 hover:-translate-y-5 hover:shadow-brand-rose/20 hover:bg-brand-rose/10">
          <div className="btn-gradient-sunset w-fit p-4 rounded-xl ">
            <List className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mt-4 mb-2">Shared Lists</h3>
          <p className="opacity-70">
            Organize by genre, mood, or platform. Create custom collections for
            every occasion.
          </p>
        </div>
        <div className="glass-card px-4 py-8 rounded-xl hover:scale-101 hover:-translate-y-5 hover:shadow-[#f472b644] hover:bg-[#f472b6]/10">
          <div className="btn-gradient-pink w-fit p-4 rounded-xl ">
            <Heart className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mt-4 mb-2">
            Compatibility Score
          </h3>
          <p className="opacity-70">
            View a % match based on your shared rating history. Know what you'll
            both love.
          </p>
        </div>
        <div className="glass-card px-4 py-8 rounded-xl hover:scale-105 hover:-translate-y-5 hover:shadow-[#22d3ee44] hover:bg-[#22d3ee]/10">
          <div className="btn-gradient-cool w-fit p-4 rounded-xl ">
            <Bell className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mt-4 mb-2">Smart Reminders</h3>
          <p className="opacity-70">
            Get a ping when a highly anticipated series drops. Never miss a
            must-watch.
          </p>
        </div>
      </div>
    </section>
  )
}
