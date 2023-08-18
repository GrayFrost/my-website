import type { Metadata } from 'next'
import './globals.css'
// import { Inter } from 'next/font/google'
import NavComponent from './nav-component'
import { Providers } from './providers'
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
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        {/* <Providers> */}
          <NavComponent />
          <main>
            {children}
          </main>
          {/* <footer className="h-[80px] bg-slate-500 mt-auto">底部</footer> */}
          <footer className="h-[80px] mt-auto">底部</footer>
        {/* </Providers> */}
      </body>
    </html>
  )
}
