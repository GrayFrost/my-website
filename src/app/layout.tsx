import type { Metadata } from 'next'
import './globals.css'
// import { Inter } from 'next/font/google'
import NavComponent from './nav-component'
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Z',
  description: '行止由心',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <NavComponent />
        <main>
          {children}
        </main>
        <footer>底部</footer>
      </body>
    </html>
  )
}
