import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ShadowOverlay from '@/components/ui/shadowOverlay'
import FloatingCards from '../components/FloatingCards'
import AuthForm from '../components/AuthForm'

export const metadata: Metadata = {
  title: 'Welcome Back',
  description:
    'Log in to 2Watch to see what your partner has added to the list and find your next match.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Login() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="container">
        <ShadowOverlay className="top-1/2 left-20 -translate-1/2" />
        <ShadowOverlay
          color="bg-accent"
          className="top-1/2 right-20 -translate-y-1/2 translate-x-1/2"
        />

        <div className="glass-card min-h-[70vh] mt-40 grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl my-20">
          <div className="bg-foreground/10 p-8 hidden md:flex flex-col items-center justify-center gap-6">
            <FloatingCards />
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p className="opacity-70">
              Ready to find your next perfect watch together?
            </p>
          </div>
          <div className="flex flex-col items-center justify-center py-12 px-5 lg:px-12">
            <Image
              src="/logo.png"
              alt="Logo"
              width={400}
              height={100}
              loading="eager"
              className="w-80 h-25"
            />
            <p className="opacity-70">Sign in to your Account</p>

            <AuthForm mode="login" />

            <div className="flex items-center justify-center gap-1">
              <p className="opacity-70">Don't have an account?</p>
              <Link href="/register" className="text-primary font-semibold">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
