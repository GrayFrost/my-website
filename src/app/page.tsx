// 'use client'
import Image from 'next/image'
import Link from 'next/link';
import styles from './page.module.css'
import HelloWorld from './hello.mdx'

// https://vercel.com/blog/introducing-the-vercel-ai-sdk
// https://sdk.vercel.ai/docs/getting-started
export default function Home() {
  return <div>
    <h1 className="text-3xl font-bold underline">Hello Next.js!</h1>
    <ul>
      <li>首页动效</li>
      <li>换肤</li>
      <li>demo卡片动效</li>
    </ul>
    <HelloWorld />
  </div>
}
