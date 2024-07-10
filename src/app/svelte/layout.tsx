"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { HomeIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

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
          <Button variant="outline" size="icon">
            <HomeIcon className="size-6 " />
          </Button>
        </Link>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            router.back();
          }}
        >
          <ChevronLeftIcon className="size-6" />
        </Button>
      </div>
      <div>{children}</div>
    </div>
  );
}
