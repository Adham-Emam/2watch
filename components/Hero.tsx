'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { ArrowRight } from 'lucide-react'

import ShadowOverlay from '@/components/ui/shadowOverlay'
import { Button } from '@/components/ui/button'
import { posters, PosterProps } from '@/constants/posters'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const moviesPosters: PosterProps[] = posters

  // Optimized cross-fade animation every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % moviesPosters.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [moviesPosters.length])

  return (
    <>
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
          {moviesPosters.map((poster, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-start justify-center transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-60' : 'opacity-0'
              }`}
            >
              <Image
                src={poster.src}
                alt={poster.title}
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

      <section className="container mt-30 relative">
        <ShadowOverlay
          className="bottom-0 right-0 translate-1/2"
          zIndex="-z-10"
        />
        <ShadowOverlay className="top-0 left-0 -translate-1/2" zIndex="-z-10" />

        <div className="bg-white/10! glass-card rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 justify-between items-center px-5 py-20">
          <div className="w-full h-[50vh] mx-auto md:aspect-2/3 glass-card rounded-xl flex flex-col justify-center items-center gap-5 animate-float">
            <div className="btn-gradient w-18 aspect-square rounded-full" />
            <span className="font-bold">Her</span>
            <span className="opacity-60">Swiping...</span>
          </div>
          <div className="glass-card rounded-full flex items-center justify-center btn-gradient py-6 px-12 md:text-2xl">
            It's a Match! ❤️
          </div>
          <div className="w-full h-[50vh] mx-auto md:aspect-2/3 glass-card rounded-xl flex flex-col justify-center items-center gap-5 animate-float-reverse">
            <div className="btn-gradient-secondary w-18 aspect-square rounded-full" />
            <span className="font-bold">Him</span>
            <span className="opacity-60">Swiping...</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
