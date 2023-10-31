import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'C.A.C. website',
  description: 'introduction of C.A.C.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      
      <body className={inter.className}>
        <Header></Header>
        <div>
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  )
}
