"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, ChevronLeft, ArrowUp } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function Operations() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div className="fixed top-4 left-4 flex flex-col gap-2">
        {pathname !== "/" && (
          <>
            <Link href="/">
              <Button size="icon" variant="outline">
                <Home size={24} />
              </Button>
            </Link>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                router.back();
              }}
            >
              <ChevronLeft size={24} />
            </Button>
          </>
        )}
      </div>
      <div className="fixed top-4 right-4">
        <ThemeSwitcher />
      </div>
      <div className="fixed bottom-4 right-4">
        <Button size="icon" variant="outline">
          <ArrowUp size={24} />
        </Button>
      </div>
      <div className="fixed bottom-4 left-4"></div>
    </>
  );
}
