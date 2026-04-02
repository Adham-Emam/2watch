'use client'

import { useRouter } from 'next/navigation'
import ShadowOverlay from '@/components/ui/shadowOverlay'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="relative flex min-h-screen items-center justify-center gap-6 max-h-screen overflow-hidden">
      <main className="flex flex-col items-center justify-center gap-6 text-center sm:items-start sm:text-left">
        <ShadowOverlay className="top-1/2 translate-y-1/3 left-0" />
        <ShadowOverlay
          className="bottom-full translate-y-1/3 right-0"
          color="bg-accent"
        />
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
          Page Not Found
        </h1>
        <p className="max-w-md text-lg leading-8 opacity-70">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Button
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 transition-colors md:w-40 shadow-primary shadow-sm"
          onClick={() => router.back()}
        >
          Go Back
        </Button>
      </main>
    </div>
  )
}
