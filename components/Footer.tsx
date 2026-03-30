import Link from 'next/link'
import Image from 'next/image'
import ShadowOverlay from './ui/shadowOverlay'

import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const navLinks = [
  {
    title: 'Product',
    links: [
      { name: 'Features', url: '#' },
      { name: 'Premium', url: '#' },
      { name: 'Pricing', url: '#' },
      { name: 'FAQ', url: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', url: '#' },
      { name: 'Careers', url: '#' },
      { name: 'Press Kit', url: '#' },
      { name: 'Blog', url: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', url: '#' },
      { name: 'Terms of Service', url: '#' },
      { name: 'Cookie Policy', url: '#' },
      { name: 'GDPR', url: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { name: 'Discord', url: '#' },
      { name: 'Reddit', url: '#' },
      { name: 'Twitter', url: '#' },
      { name: 'Support', url: '#' },
    ],
  },
]
export default function Footer() {
  return (
    <footer className="overflow-hidden glass-card relative">
      <ShadowOverlay
        className="top-1/2 -translate-y-1/2 left-0 -translate-1/2 "
        size="w-20 sm:w-50 md:w-150 xl:w-350 h-[150%]"
      />
      <ShadowOverlay
        className="top-1/2 -translate-y-1/2 right-0 translate-1/2 "
        color="bg-accent"
        size="w-20 sm:w-50 md:w-150 xl:w-350 h-[150%]"
      />
      <div className="container py-20 relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-5">
        <div className="col-span-2 md:col-span-4 lg:col-span-1">
          <Link
            href="/"
            className="section-title  flex items-center uppercase font-extrabold text-3xl"
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
          <p className="mb-8!">
            Making movie nights magical for couples everywhere.
          </p>
          <div className="flex gap-6">
            <span className="border w-10 h-10 flex items-center justify-center rounded-full opacity-60 hover:opacity-100 cursor-pointer bg-foreground/20">
              <FaInstagram className="w-6 h-6" />
            </span>
            <span className="border w-10 h-10 flex items-center justify-center rounded-full opacity-60 hover:opacity-100 cursor-pointer bg-foreground/20">
              <FaFacebook className="w-6 h-6" />
            </span>
            <span className="border w-10 h-10 flex items-center justify-center rounded-full opacity-60 hover:opacity-100 cursor-pointer bg-foreground/20">
              <FaXTwitter className="w-6 h-6" />
            </span>
          </div>
        </div>
        {navLinks.map((group, index) => (
          <div key={index}>
            <h3 className="mb-5 text-lg sm:text-2xl font-bold">
              {group.title}
            </h3>
            <nav className="flex flex-col gap-3">
              {group.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="opacity-70 hover:opacity-100 w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>

      <hr className="mt-12 border-foreground/20" />

      <div className="container py-8! flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center">
          © 2026 <strong className="text-accent">2Watch</strong>. All rights
          reserved.
        </p>
        <p className="text-center">
          Made with ♥️ for movie buffs by Team{' '}
          <strong className="text-primary">2Watch</strong>
        </p>
      </div>
    </footer>
  )
}
