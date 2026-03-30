import Image from 'next/image'
import { posters } from '@/constants/posters'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Button } from './ui/button'

import { Heart, Plus } from 'lucide-react'

export default function TopPicks() {
  return (
    <section id="top-picks" className="container relative py-20">
      <h2 className="section-title text-center">
        What Other Couples Are <span>Loving</span>
      </h2>
      <p className="text-center text-lg mx-auto w-fit">
        Top picks from the 2Watch community
      </p>

      <Carousel
        opts={{
          align: 'center',
        }}
        className="w-full mx-auto relative px-4 py-16"
      >
        <CarouselContent>
          {posters.map((poster, index) => (
            <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="glass-card p-0 overflow-hidden group">
                  <CardContent className="relative flex aspect-3/4 items-center justify-center p-6">
                    <Image
                      src={poster.src}
                      alt={poster.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover rounded-xl group-hover:scale-105 group-hover:blur-md"
                    />

                    {/* overlay */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[150%] h-1/3 bg-black/80 blur-2xl group-hover:h-full group-hover:scale-250" />

                    <div className="absolute top-1/2 height-1/2 left-1/2 -translate-1/2 opacity-0 group-hover:opacity-100">
                      <div className="flex items-center justify-center gap-2">
                        <Heart
                          fill="#e94560"
                          color="#e94560"
                          className="w-8 h-8"
                        />
                        <p>
                          <span className="font-bold text-3xl">
                            {poster.rate}
                          </span>{' '}
                          <span className="opacity-70">/5 Hearts</span>
                        </p>
                      </div>
                      <Button className="btn-gradient mt-8 text-xl px-8! py-6!">
                        <Plus /> Save for Later
                      </Button>
                    </div>

                    <h3 className="text-white absolute bottom-6 md:bottom-12 left-2 md:left-8 font-bold text-lg md:text-2xl z-10">
                      {poster.title}
                    </h3>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
