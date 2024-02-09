"use client";

import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
        {theme === "dark" && <Icon icon="ph:sun" height={24} width={24} />}
        {theme === "light" && <Icon icon="ph:moon" height={24} width={24} />}
      </Button>
    </>
  );
}
