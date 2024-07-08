"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { HomeIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <div className="relative">
      <div className="fixed">
        <Link href="/">
          <HomeIcon className="size-6 text-blue-300" />
        </Link>
        <ChevronLeftIcon
          className="size-6 text-blue-300 cursor-pointer"
          onClick={() => {
            router.back();
          }}
        />
      </div>
      <div className="px-6">{children}</div>
    </div>
  );
}
