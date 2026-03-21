'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useMotionValueEvent } from 'motion/react'

import { useTheme } from '@/contexts/ThemeContext'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { Menu, Moon, Sun } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/#features' },
  { name: 'How it works', href: '/#how-it-works' },
  { name: 'Premium', href: '/#premium' },
  { name: 'Support', href: '/support' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80)
  })

  const animateClass = scrolled
    ? 'bg-primary/10 backdrop-blur-sm top-4 rounded-2xl w-[90%] border border-primary/20'
    : 'bg-transparent backdrop-blur-0 top-0 w-full'

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 top-0 z-50 py-4 ${animateClass}`}
    >
      <div className="container relative flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center justify-center uppercase font-extrabold text-3xl"
        >
          <Image
            src="/icon.png"
            alt="logo"
            width={50}
            height={50}
            loading="eager"
          />
          Watch
        </Link>

        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
          {pathname === '/' &&
            navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-primary font-semibold duration-300 ${scrolled ? 'text-foreground' : 'text-muted-foreground'}`}
              >
                {link.name}
              </Link>
            ))}
        </nav>
        <div className="flex items-center gap-4">
          {/* Dark Mode */}
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>

          {pathname === '/' && (
            <>
              {/* Auth */}
              <div className="hidden lg:flex items-center gap-4">
                <Link
                  href="/login"
                  className="text-muted-foreground hover:text-primary font-semibold duration-300"
                >
                  Log in
                </Link>

                <motion.div whileTap={{ scale: 0.8 }}>
                  <Button asChild>
                    <Link href="/register" className="font-bold">
                      Claim Our Couch
                    </Link>
                  </Button>
                </motion.div>
              </div>

              {/* Mobile Navigation */}
              <Sheet
                open={open}
                onOpenChange={setOpen}
                aria-describedby={undefined}
              >
                <SheetTrigger className="lg:hidden" asChild>
                  <Button size="icon" className="border">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>
                      {' '}
                      <Image
                        src="/logo.png"
                        alt="logo"
                        width={150}
                        height={150}
                        className="w-auto h-auto"
                      />
                    </SheetTitle>
                  </SheetHeader>
                  <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <div className="grid gap-3">
                      <nav className="flex flex-col overflow-y-auto h-auto max-h-[50vh]">
                        {navLinks.map((link) => (
                          <div key={link.name} className="not-last:border-b">
                            <Link
                              href={link.href}
                              className="block py-4 w-full text-muted-foreground hover:text-primary font-semibold duration-300"
                              onClick={() => setOpen(false)}
                            >
                              {link.name}
                            </Link>
                          </div>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <SheetFooter>
                    <Button variant="outline" asChild>
                      <Link href="/login" onClick={() => setOpen(false)}>
                        Login
                      </Link>
                    </Button>
                    <Button asChild>
                      <motion.div whileTap={{ scale: 0.8 }}>
                        <Link
                          href="/register"
                          className="font-bold"
                          onClick={() => setOpen(false)}
                        >
                          Start Generating
                        </Link>
                      </motion.div>
                    </Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
