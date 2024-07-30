"use client";

import { useState, useEffect } from "react";
import { Link } from "next-view-transitions";
import { useRouter, usePathname } from "next/navigation";
import { Home, ChevronLeft, ArrowUp } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { WiredButton } from '@/components/wired-components';

export function Operations() {
  const router = useRouter();
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(false);

  const isBrowser = () => typeof window !== "undefined";

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    // Show the button when the user scrolls down
    var scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    if (scrollTop > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    if (!isBrowser()) return;
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      if (!isBrowser()) return;
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-4 left-4 flex flex-col gap-2">
        {pathname !== "/" && (
          <>
            <Link href="/">
              <WiredButton>
                <Home size={24} />
              </WiredButton>
            </Link>
            <WiredButton
              onClick={() => {
                router.back();
              }}
            >
              <ChevronLeft size={24} />
            </WiredButton>
          </>
        )}
      </div>
      <div className="fixed top-4 right-4">
        <ThemeSwitcher />
      </div>
      <div className="fixed bottom-4 right-4">
        <WiredButton
          onClick={scrollToTop}
          className={`transition-opacity ease-in-out duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`} // TODO: transition
        >
          <ArrowUp size={24} />
        </WiredButton>
      </div>
      <div className="fixed bottom-4 left-4"></div>
    </>
  );
}
