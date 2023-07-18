'use client';

import { useRouter, useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavComponent() {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  console.log('zzh router信息', router, params, pathname);
  return pathname === '/' ? (
    <nav className='flex items-center justify-end px-16 h-[64px] bg-[pink]'>
      <Link href='/' className='pr-16'>首页</Link>
      <Link href='/blog' className='pr-16'>博客</Link>
      <Link href='/demo' className='pr-16'>演示</Link>
      <Link href='/life' className='pr-16'>生活</Link>
      <Link href='/about'>关于</Link>
    </nav>
  ) : <nav className="h-[64px] bg-gray-400">简化版路由</nav>
}