import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Z',
  description: '行止由心',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>头部</header>
        <main>
          <Link href='/'>首页</Link>
          <Link href='/blog'>博客</Link>
          <Link href='/demo'>Demo</Link>
          <Link href='/life'>生活</Link>
          <Link href='/about'>关于</Link>
        </main>
        {children}
        <footer>底部</footer>
      </body>
    </html>
  )
}
