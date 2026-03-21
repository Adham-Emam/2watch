'use client'

import { useEffect, useRef } from 'react'
import { Badge } from './badge'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'motion/react'

interface Items {
  platform: string
  time: string
  content: string
}

const BadgeColor: Record<string, string> = {
  Twitter: 'bg-card-foreground/20 text-card-foreground',
  LinkedIn: 'bg-blue-500/20 text-blue-500',
  Instagram: 'bg-pink-500/20 text-pink-500',
  Email: 'bg-green-500/20 text-green-500',
}

export default function InfiniteCarousel({ items }: { items: Items[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const offsetRef = useRef(0)
  const pausedRef = useRef(false)

  const [emblaRef] = useEmblaCarousel({
    containScroll: 'trimSnaps',
  })

  useEffect(() => {
    const SPEED = 0.5

    let rafId: number

    const animate = () => {
      if (!pausedRef.current) {
        offsetRef.current -= SPEED

        if (trackRef.current) {
          if (Math.abs(offsetRef.current) >= trackRef.current.scrollWidth / 2) {
            offsetRef.current = 0
          }

          trackRef.current.style.transform = `translateX(${offsetRef.current}px)`
        }
      }

      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8, y: 20, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
      className="container relative w-full py-8 overflow-hidden"
    >
      <div className="relative">
        <div className="absolute top-1/2 -left-8 -translate-y-1/2 bg-background blur-sm  h-[120%] w-10 z-40" />
        <div className="absolute top-1/2 -right-8  -translate-y-1/2 bg-background blur-sm  h-[120%] w-10 z-40" />
        <div
          ref={emblaRef}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div ref={trackRef} className="flex -ml-4 will-change-transform">
            {[...items, ...items].map((item, index) => (
              <div key={index} className="pl-4 flex-[0_0_340px]">
                <div className="h-36 p-4 rounded-xl border bg-card text-xl font-bold shadow-sm select-none">
                  <div className="flex justify-between items-center">
                    <Badge className={BadgeColor[item.platform]}>
                      {item.platform}
                    </Badge>
                    <p className="text-xs text-card-foreground/50 font-light">
                      {item.time}
                    </p>
                  </div>
                  <p className="text-sm font-light mt-5 line-clamp-3">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
