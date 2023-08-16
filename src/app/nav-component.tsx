"use client";

import { useState } from "react";
import { useRouter, useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { ThemeChanger } from './theme-changer';

export default function NavComponent() {
  const [navs] = useState([
    {
      name: "首页",
      value: "/",
    },
    {
      name: "博客",
      value: "/blog",
    },
    {
      name: "演示",
      value: "/demo",
    },
    {
      name: "生活",
      value: "/life",
    },
    {
      name: "关于",
      value: "/about",
    },
  ]);
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  console.log("zzh router信息", router, params, pathname);
  return pathname === "/" ? (
    <nav className="flex items-center justify-end px-16 h-[64px] bg-[pink]">
      {navs.map((item, index) => {
        return (
          <Link
            key={item.value}
            href={item.value}
            className={`${index !== navs.length - 1 ? "pr-16" : ""}`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  ) : (
    <nav className="h-[64px] bg-gray-400">
      简化版路由
      <ThemeChanger />
    </nav>
  );
}
