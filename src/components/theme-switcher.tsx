"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      The current theme is: {theme}
      <Button onClick={() => setTheme("light")} color="primary">
        <SunIcon className="size-6" />
      </Button>
      <Button onClick={() => setTheme("dark")} color="primary">
        <MoonIcon className="size-6" />
      </Button>
    </div>
  );
}
