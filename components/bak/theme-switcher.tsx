"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunMoon } from "lucide-react";
import { WiredButton } from "@/components/wired-components";

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
    <WiredButton onClick={changeTheme}>
      <SunMoon size={24} />
    </WiredButton>
  );
}
