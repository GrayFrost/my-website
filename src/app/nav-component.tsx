'use client';

import { useRouter, useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavComponent() {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  console.log('zzh router信息', router, params, pathname);
  return pathname === '/' ? (
    <nav>
      <Link href='/'>首页</Link>
      <Link href='/blog'>博客</Link>
      <Link href='/demo'>演示</Link>
      <Link href='/life'>生活</Link>
      <Link href='/about'>关于</Link>
    </nav>
  ) : <nav>简化版路由</nav>
}