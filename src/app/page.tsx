import { Link } from 'next-view-transitions'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      主页
      <Link href="/teacher">教资</Link>
      <Link href="/software">软考</Link>
      <Link href="/svelte"><span className="article-title">Svelte从入门到精通</span></Link>
      <Link href="/travel">旅行</Link>
      <Link href="https://sveaflet.vercel.app/">Sveaflet</Link>
    </main>
  );
}
