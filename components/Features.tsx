'use client'
import { useState } from 'react'

import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Heart, X, Star } from 'lucide-react'
import { posters } from '@/constants/posters'
import ShadowOverlay from './ui/shadowOverlay'

export default function Features() {
  const [currentPoster, setCurrentPoster] = useState<number>(0)
  const [direction, setDirection] = useState(0) // 1 = like (right), -1 = pass (left)

  const variants = {
    enter: () => ({
      x: 0, // no horizontal movement
      opacity: 0,
      scale: 0.85, // start smaller → grows from center
      filter: 'blur(6px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120, // keep directional swipe on exit
      opacity: 0,
      scale: 0.9,
    }),
  }

  const handleNext = (dir: number) => {
    setDirection(dir)
    setCurrentPoster((prev) => (prev === posters.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="features" className="container relative py-30">
      <ShadowOverlay center />
      <div className="text-center w-fit mx-auto">
        <h2 className="section-title">
          Swipe Right on <span>Date Night</span>
        </h2>
        <p>
          The Mutual Match - When you both love it, it's time to watch it
          together
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <Card className="glass-card text-center h-fit">
          <CardHeader>
            <div className="bg-accent w-fit p-4 rounded-full mx-auto text-3xl">
              👩
            </div>
            <CardTitle>Her</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="opacity-70">Sarah</span>
          </CardContent>
          <CardFooter className="flex items-center justify-center gap-4">
            <span
              onClick={() => handleNext(-1)}
              className="bg-red-500/30 hover:bg-red-500/40 ring ring-red-500/60 p-4 rounded-full cursor-pointer"
            >
              <X />
            </span>
            <span
              onClick={() => handleNext(1)}
              className="bg-green-500/20 hover:bg-green-500/40 ring ring-green-500/60 p-4 rounded-full cursor-pointer"
            >
              <Heart />
            </span>
          </CardFooter>
        </Card>
        <Card className="relative overflow-hidden glass-card aspect-2/3">
          <AnimatePresence mode="wait" custom={-direction}>
            <motion.div
              key={currentPoster}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={posters[currentPoster].src}
                alt={posters[currentPoster].title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover z-0"
                priority
              />

              <div className="absolute top-0 left-1/2 -translate-1/2 bg-black w-[150%] h-[30%] z-5 blur-3xl" />
              <div className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 bg-black w-[150%] h-[50%] z-10 blur-3xl" />
              <div className="absolute bottom-4 left-4 flex flex-col gap-3 z-10">
                <h3 className="text-2xl font-bold">
                  {posters[currentPoster].title}
                </h3>
                <p>{posters[currentPoster].category}</p>
                <p className="flex gap-2 font-bold">
                  <Star fill="#ffb900" color="#ffb900" />
                  {posters[currentPoster].rate}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </Card>
        <Card className="glass-card text-center h-fit">
          <CardHeader>
            <div className="bg-accent w-fit p-4 rounded-full mx-auto text-3xl">
              👨
            </div>
            <CardTitle>Him</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="opacity-70">Mike</span>
          </CardContent>
          <CardFooter className="flex items-center justify-center gap-4">
            <span
              onClick={() => handleNext(-1)}
              className="bg-red-500/30 ring hover:bg-red-500/40 ring-red-500/60 p-4 rounded-full cursor-pointer"
            >
              <X />
            </span>
            <span
              onClick={() => handleNext(1)}
              className="bg-green-500/20 hover:bg-green-500/40 ring ring-green-500/60 p-4 rounded-full cursor-pointer"
            >
              <Heart />
            </span>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
