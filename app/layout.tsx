import type { Metadata } from 'next'
import './globals.css'

import { Analytics } from '@vercel/analytics/next'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/contexts/ThemeContext'

export const metadata: Metadata = {
  title: {
    default: '2Watch | Shared Cinema, Shared Love',
    template: '%s | 2Watch',
  },
  description:
    'The ultimate watch-list app for couples. Sync your streaming services, swipe on movies together, and end the "what should we watch" debate forever.',
  keywords: [
    'couples app',
    'movie watchlist',
    'shared streaming',
    'date night ideas',
    '2Watch',
    'movie matching',
  ],
  openGraph: {
    title: '2Watch | Shared Cinema, Shared Love',
    description:
      'Stop scrolling and start watching. Find the perfect movie for your next date night.',
    siteName: '2Watch',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
