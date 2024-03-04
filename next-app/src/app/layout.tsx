import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '電子計算機応用部 / C.A.C.',
  description: 'introduction of C.A.C.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
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
        
        
      </body>
    </html>
  )
}
