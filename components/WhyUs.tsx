'use client'

import { AnimatePresence, motion } from 'motion/react'
import { List, Heart, Bell } from 'lucide-react'
import ShadowOverlay from './ui/shadowOverlay'

const cards = [
  {
    icon: <List className="w-8 h-8" />,
    title: 'Shared Lists',
    description:
      'Organize by genre, mood, or platform. Create custom collections for every occasion.',
    style: 'hover:shadow-brand-rose/20 hover:bg-brand-rose/10',
    gradient: 'sunset',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Compatibility Score',
    description:
      "View a % match based on your shared rating history. Know what you'll both love.",
    style: 'hover:shadow-[#f472b644] hover:bg-[#f472b6]/10',
    gradient: 'pink',
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: 'Smart Reminders',
    description:
      'Get a ping when a highly anticipated series drops. Never miss a must-watch.',
    style: 'hover:shadow-[#22d3ee44] hover:bg-[#22d3ee]/10',
    gradient: 'cool',
  },
]

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
        <AnimatePresence>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ x: 50, opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ delay: 0.2 * (index + 1), duration: 0.3 }}
              className={`glass-card px-4 py-8 rounded-xl hover:scale-105 hover:-translate-y-5 ${card.style}`}
            >
              <div
                className={`btn-gradient-${card.gradient} w-fit p-4 rounded-xl`}
              >
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">{card.title}</h3>
              <p className="opacity-70">{card.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
