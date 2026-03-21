import { LoaderCircle } from 'lucide-react'

export default function Loading({
  text,
  glass = false,
}: {
  text?: string
  glass?: boolean
}) {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center px-10 py-8 ${glass ? 'bg-background/30 backdrop-blur-sm' : 'bg-background'}`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-1/2">
        <div className="relative w-25 h-25">
          <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-primary w-10 h-10 rounded-full" />
          <LoaderCircle className="absolute top-1/2 left-1/2 -translate-1/2 text-primary w-20 h-20 animate-spin" />
        </div>
        {text && <p className="perflecta-pulse font-bold text-md">{text}...</p>}
      </div>
    </div>
  )
}
