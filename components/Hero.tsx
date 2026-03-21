'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { ArrowRight } from 'lucide-react'

import ShadowOverlay from '@/components/ui/shadowOverlay'
import { Button } from '@/components/ui/button'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const moviesPosters = [
    'http://www.impawards.com/2014/posters/interstellar_ver2.jpg',
    'http://www.impawards.com/2026/posters/peaky_blinders_the_immortal_man_ver3.jpg',
    'http://www.impawards.com/tv/posters/game_of_thrones.jpg',
    'http://www.impawards.com/2026/posters/drama_ver5.jpg',
    'http://www.impawards.com/intl/japan/2025/posters/demon_slayer__kimetsu_no_yaiba__infinity_castle_ver9.jpg',
    'http://www.impawards.com/2016/posters/me_before_you.jpg',
    'http://www.impawards.com/tv/posters/breaking_bad_ver5.jpg',
    'http://www.impawards.com/2026/posters/goat_ver2.jpg',
    'http://www.impawards.com/2009/posters/five_hundred_days_of_summer_ver3.jpg',
    'http://www.impawards.com/2025/posters/five_nights_at_freddys_two_ver2.jpg',
  ]

  // Optimized cross-fade animation every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % moviesPosters.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [moviesPosters.length])

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-background">
      <ShadowOverlay
        color="bg-brand-rose"
        opacity="opacity-10"
        blur="blur-[140px]"
        size="w-[300px] h-[200px]"
        zIndex="z-1"
        className="top-0 left-1/12"
      />
      <ShadowOverlay
        color="bg-brand-rose"
        opacity="opacity-10"
        blur="blur-[140px]"
        size="w-[600px] h-[400px]"
        zIndex="z-1"
        className="bottom-0 right-1/12"
      />

      {/* Cinematic Fading Background Posters */}
      <div className="absolute inset-0 z-0">
        {moviesPosters.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 flex items-start justify-center transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-60' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt="Movie Poster background"
              fill
              priority={index === 0}
              className="object-cover object-top filter contrast-125 dark:contrast-100"
              sizes="100vw"
              style={{
                maskImage: `
                  linear-gradient(to bottom, 
                    black 0%,
                    black 30%,
                    rgba(0,0,0,0.5) 60%,
                    transparent 100%
                  ),
                  linear-gradient(to right,
                    transparent 0%,
                    transparent 10%,
                    black 40%,
                    black 60%,
                    transparent 90%,
                    transparent 100%
                  )
                `,
                WebkitMaskImage: `
                  linear-gradient(to bottom, 
                    black 0%,
                    black 30%,
                    rgba(0,0,0,0.5) 60%,
                    transparent 100%
                  ),
                  linear-gradient(to right,
                    transparent 0%,
                    transparent 10%,
                    black 40%,
                    black 60%,
                    transparent 90%,
                    transparent 100%
                  )
                `,
                maskComposite: 'intersect',
                WebkitMaskComposite: 'intersect',
              }}
            />
          </div>
        ))}

        {/* Cinematic Overlays to blend with page & guarantee readability */}
        <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background/50" />
        <div className="absolute inset-0 bg-linear-to-r from-background via-transparent to-background/50" />
      </div>

      {/* Content Layer (Kept as provided by user) */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center space-y-8 animate-float">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          Your Next Date Night, <br />
          <span className="text-2watch-gradient">Decided.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Sync your preferences, swipe together, and end the argument of
          &quot;What should we watch?&quot;{' '}
          <span className="font-semibold text-foreground">2Watch</span> finds
          the perfect movie or series for both of you.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <Button className="btn-gradient px-8 py-6 text-lg shadow-lg">
            Claim Our Couch
          </Button>

          <Button
            asChild
            variant="outline"
            className="rounded-full px-8 py-6 border-brand-rose/30 bg-background/50 backdrop-blur-sm hover:bg-brand-rose/5"
          >
            <Link href="/howitworks" className="flex items-center gap-2">
              Learn how it works <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 animate-bounce text-muted-foreground/50">
        <div className="w-px h-12 bg-linear-to-b from-brand-rose to-transparent mx-auto" />
      </div>
    </section>
  )
}

export default Hero
