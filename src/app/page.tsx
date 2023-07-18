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
    <HelloWorld />
    <div className='h-[500px] bg-slate-400'></div>
  </div>
}
