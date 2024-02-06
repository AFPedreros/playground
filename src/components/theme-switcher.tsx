"use client";

import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icons } from "./icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return <Button radius="full" variant="light" isIconOnly />;

  return (
    <>
      <Button onClick={toggleTheme} radius="full" variant="light" isIconOnly>
        {theme === "dark" && <Icons.sunOutline className="h-6 w-6" />}
        {theme === "light" && <Icons.moonOutline className="h-6 w-6" />}
      </Button>
    </>
  );
}
