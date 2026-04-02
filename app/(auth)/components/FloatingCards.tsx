import { User, Heart } from 'lucide-react'

export default function FloatingCards() {
  return (
    <div className="relative flex items-center justify-center gap-12 my-8">
      <div className="relative glass-card w-35 aspect-1/2 rounded-lg -rotate-5 animate-float flex flex-col items-center justify-center">
        <div className="btn-gradient-rose rounded-full p-4 mb-3">
          <User color="#fff" className="w-6 h-6" />
        </div>
        <p>Partner 1</p>
        <div className="glass-card bg-foreground/20! rounded-2xl py-2 text-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full min-w-full animate-float">
          🎬 Movie Night
        </div>
      </div>
      <div className="absolute btn-gradient-rose p-4 rounded-full z-10 animate-heartbeat">
        <Heart className="w-8 h-8" fill="#fff" color="#fff" />
      </div>
      <div className="relative glass-card w-35 aspect-1/2 rounded-lg rotate-5 animate-float-reverse flex flex-col items-center justify-center">
        <div className="btn-gradient-sky rounded-full p-4 mb-3">
          <User color="#fff" className="w-6 h-6" />
        </div>
        <p>Partner 2</p>
        <div className="glass-card bg-foreground/20! rounded-2xl py-2 text-center absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full min-w-full animate-float-reverse">
          📺 Binge Together
        </div>
      </div>
    </div>
  )
}
