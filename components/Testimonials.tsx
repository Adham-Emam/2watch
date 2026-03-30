import Image from 'next/image'
import ShadowOverlay from './ui/shadowOverlay'
import { Heart, Quote } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="container py-20 relative">
      <h2 className="section-title text-center">
        No More <span>Endless Scrolling</span>
      </h2>
      <div className="glass-card relative max-w-250 mx-auto mt-15 rounded-2xl  flex flex-col md:flex-row items-center justify-between gap-8 px-4 lg:px-2 py-12">
        <div className="absolute top-0 -translate-y-1/2 left-20 bg-primary btn-gradient-rose p-3 rounded-full z-12">
          <Quote className="w-8 h-8" />
        </div>
        <ShadowOverlay center opacity="opacity-20" size="w-180 h-180" />

        <div className="flex-2">
          <Image
            src="/Testimonials.jpeg"
            alt="Testimonials Image"
            width={300}
            height={400}
            className="relative mx-auto aspect-3/4 object-cover rounded-2xl shadow-xl"
          />
        </div>
        <div className="flex-3">
          <p className="text-3xl my-6 font-semibold">
            "It used to take us 45 minutes to pick a movie. 2Watch does it in 30
            seconds. Best date night upgrade ever!"
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <div className="btn-gradient-pink aspect-square w-12 h-12 rounded-full" />
              <div className="btn-gradient-sky aspect-square w-12 h-12 rounded-full -translate-x-2" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Alex & Sam</h4>
              <p className="opacity-70">Together for 3 years</p>
            </div>
          </div>

          <div className="flex gap-2 mt-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Heart
                key={index}
                fill="#e94560"
                color="#e94560"
                className="w-6 h-6"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
