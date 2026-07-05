"use client";

import { Moon, Sun } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";

export default function ThemeToggle({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(
    () =>
      typeof window !== "undefined" &&
      localStorage.getItem("adva-theme") === "dark",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    localStorage.setItem("adva-theme", isDark ? "dark" : "light");
  }, [isDark]);

  function toggleTheme() {
    setIsDark((current) => !current);
  }

  return (
    <div
      data-theme={isDark ? "dark" : "light"}
      className={`min-h-screen transition-colors duration-500 ease-out ${
        isDark ? "dark bg-[#080d18] text-white" : "bg-white text-black"
      }`}
    >
      {children}
      <button
        type="button"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={isDark}
        onClick={toggleTheme}
        className="fixed bottom-5 right-5 z-[80] grid size-11 place-items-center overflow-hidden rounded-full border border-[#14213d]/10 bg-white/85 text-[#14213d] shadow-lg shadow-[#14213d]/10 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-black/30 dark:hover:bg-white/15"
      >
        <Sun
          className={`absolute size-4 transition duration-500 ${
            isDark
              ? "translate-y-7 rotate-90 opacity-0"
              : "translate-y-0 rotate-0 opacity-100"
          }`}
        />
        <Moon
          className={`absolute size-4 transition duration-500 ${
            isDark
              ? "translate-y-0 rotate-0 opacity-100"
              : "-translate-y-7 -rotate-90 opacity-0"
          }`}
        />
      </button>
    </div>
  );
}
