"use client";
import Link from "next/link";
import { Moon } from "lucide-react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header() {
  const pathname = usePathname();
  const handleToggleDarkMode = () => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);
  return (
    <header className="h-16 px-10 py-4 w-full">
      <nav className="flex gap-6 justify-end">
        <Link
          className={clsx(
            "font-semibold",
            pathname === "/"
              ? "text-blue-900 dark:text-primary-200"
              : "text-gray-500 dark:text-white",
          )}
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={clsx(
            "font-semibold",
            pathname === "/work"
              ? "text-blue-900 dark:text-primary-200"
              : "text-gray-500 dark:text-white",
          )}
          href={"/work"}
        >
          Work
        </Link>
        <Link
          className={clsx(
            "font-semibold",
            pathname === "/about"
              ? "text-blue-900 dark:text-primary-200"
              : "text-gray-500 dark:text-white",
          )}
          href={"/about"}
        >
          About
        </Link>
        <Link
          className={clsx(
            " font-semibold",
            pathname === "/contact"
              ? "text-blue-900 dark:text-primary-200"
              : "text-gray-500 dark:text-white",
          )}
          href={"/contact"}
        >
          Contact
        </Link>
        <button onClick={handleToggleDarkMode} type="button">
          <Moon className="dark:fill-white fill-black" />
        </button>
      </nav>
    </header>
  );
}
