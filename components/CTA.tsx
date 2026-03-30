'use client'

import { AnimatePresence, motion } from 'motion/react'
import ShadowOverlay from './ui/shadowOverlay'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { Heart } from 'lucide-react'

export default function CTA() {
  return (
    <motion.section
      initial={{ y: 50, scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
      whileInView={{ y: 0, scale: 1, opacity: 1, filter: 'blur(0px)' }}
      transition={{ delay: 0.2, duration: 0.3 }}
      className="container relative my-30"
    >
      <div className="max-w-230! mx-auto px-4 md:px-16! py-20 glass-card ring ring-primary/20 rounded-2xl">
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="absolute animate-float"
              style={{
                left: `${(index + 1) * 15}%`,
                top: index % 2 ? '5rem' : '15rem',
                animationDuration: `${2 + index}s`,
                animationDelay: `${index * 0.5}s`,
              }}
            >
              <Heart
                fill="#e94560"
                color="#e94560"
                className="w-8 h-8 opacity-30"
              />
            </div>
          ))}
        </div>
        <ShadowOverlay
          className="top-1/2 -translate-y-1/2 left-1/8 translate-1/2 "
          opacity="opacity-30"
        />
        <ShadowOverlay
          className="top-1/2 -translate-y-1/2 right-1/8 -translate-1/2 "
          color="bg-accent"
          opacity="opacity-30"
        />

        <h2 className="section-title text-center">
          Ready to stop searching and
          <br />
          <span>start watching?</span>
        </h2>

        <p className="text-center mx-auto mt-5 text-xl">
          Join thousands of happy couples. Download 2Watch for iOS and Android
          today.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="glass-card rounded-2xl flex items-center justify-between gap-2 sm:gap-6 py-6 px-4 sm:px-12 hover:scale-105 bg-foreground/20! cursor-pointer">
            <FaApple className="w-12 h-12 sm:w-8 sm:h-8" />
            <div>
              <span className="opacity-70">Download on the</span>
              <br />
              <strong className="text-lg sm:text-2xl">Apple Store</strong>
            </div>
          </div>
          <div className="glass-card rounded-2xl flex items-center justify-between gap-2 sm:gap-6 py-6 px-4 sm:px-12 hover:scale-105 bg-foreground/20! cursor-pointer">
            <FaGooglePlay className="w-12 h-12 sm:w-8 sm:h-8" />
            <div>
              <span className="opacity-70">Get it on</span>
              <br />
              <strong className="text-lg sm:text-2xl">Google Play</strong>
            </div>
          </div>
        </div>

        <hr className="my-12 border-foreground/20" />

        <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-between px-8 md:px-20">
          <div className="flex flex-col items-center justify-center gap-4 font-bold">
            <span className="text-primary text-3xl">50K+</span>
            <span className="opacity-70">Happy Couples</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 font-bold">
            <span className="text-primary text-3xl">4.9</span>
            <span className="opacity-70">App Rating</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 font-bold">
            <span className="text-primary text-3xl">2M+</span>
            <span className="opacity-70">Matches Made</span>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
