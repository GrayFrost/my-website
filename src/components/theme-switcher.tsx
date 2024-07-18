"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, SunMoon } from "lucide-react";
import { WiredButton } from "wired-elements-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <WiredButton onClick={changeTheme} variant="outline" size="icon">
      <SunMoon size={24} />
    </WiredButton>
  );
}
