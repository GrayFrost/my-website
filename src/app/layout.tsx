import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '我的网站',
  description: '我的网站的描述啊啊啊啊',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>common layout</div>
        <div>
          <Link href='/'>首页</Link>
          <Link href='/blog'>博客</Link>
          <Link href='/demo'>Demo</Link>
        </div>
        {children}
      </body>
    </html>
  )
}
