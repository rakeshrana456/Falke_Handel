import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'

import Header from '@/components/Header'
// import Footer from '@/components/Footer'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'], // optional but recommended
})

export const metadata: Metadata = {
  title: 'Falke Handel - Global Export Solutions',
  description: 'Falke Handel bridges the gap between traditional producers and emerging global markets',
  icons: {
    icon: '/favicon.ico',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
  