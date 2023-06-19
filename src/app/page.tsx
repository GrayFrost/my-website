'use client'
import Image from 'next/image'
import Link from 'next/link';
import styles from './page.module.css'
import { useChat } from 'ai/react'

// https://vercel.com/blog/introducing-the-vercel-ai-sdk
// https://sdk.vercel.ai/docs/getting-started
export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  return <div>
    <h2>首页</h2>
    <div>
    {messages.map(m => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <label>
          Say something...
          <input
            value={input}
            onChange={handleInputChange}
          />
        </label>
      </form>
    </div>
  </div>
}
