"use client";
import Link from "next/link";
import { Moon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header() {
  const pathname = usePathname();
  const [isShowNavBarMobile, setShowNavBarMobile] = useState(false);
  const onToggleNavBar = useCallback(() => {
    if (isShowNavBarMobile) {
      setShowNavBarMobile(false);
      document.body.classList.remove("overflow-hidden");
    } else {
      setShowNavBarMobile(true);
      document.body.classList.remove("overflow-hidden");
    }
  }, [isShowNavBarMobile]);

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
    <header className="h-16 px-10 py-4 w-full max-md:px-6">
      <nav className="flex gap-6 justify-end max-md:hidden">
        <Link
          className={clsx(
            "font-semibold",
            pathname === "/"
              ? "text-blue-900 dark:text-primary-200"
              : "text-gray-500 dark:text-white"
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
              : "text-gray-500 dark:text-white"
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
              : "text-gray-500 dark:text-white"
          )}
          href={"/about"}
        >
          About
        </Link>
        <Link
          className={clsx(
            "font-semibold",
            pathname === "/contact"
              ? "text-blue-900 dark:text-primary-200"
              : "text-gray-500 dark:text-white"
          )}
          href={"/contact"}
        >
          Contact
        </Link>
        <button onClick={handleToggleDarkMode} type="button">
          <Moon className="dark:fill-white fill-black" />
        </button>
      </nav>
      <button
        className="relative z-20 size-8 ml-auto flex flex-col justify-between items-center group md:hidden"
        onClick={() => setShowNavBarMobile((prev) => !prev)}
        aria-label="Menu Toggle Button"
        type="button"
      >
        {/* top bar */}
        <span
          className={`
            block h-1 w-full bg-black dark:bg-white rounded transition-transform duration-300
            ${isShowNavBarMobile ? "rotate-45 translate-y-3.5" : ""}
          `}
        />
        {/* middle bar */}
        <span
          className={`
            block h-1 w-full bg-black dark:bg-white rounded transition-opacity duration-300
            ${isShowNavBarMobile ? "opacity-0" : ""}
          `}
        />
        {/* bottom bar */}
        <span
          className={`
            block h-1 w-full bg-black dark:bg-white rounded transition-transform duration-300
            ${isShowNavBarMobile ? "-rotate-45 -translate-y-3.5" : ""}
          `}
        />
      </button>
      <nav
        className={clsx(
          "fixed inset-0 z-10 left-0 transform size-full translate-y bg-white/90 shadow-lg rounded justify-center items-center px-10",
          "transition-all duration-500 ease-in-out",
          "flex flex-col gap-14",
          "dark:bg-black/80",
          isShowNavBarMobile
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        )}
      >
        <NavLink
          path="/"
          pathname={pathname}
          label="Home"
          onToggleNavBar={onToggleNavBar}
        />
        <NavLink
          path="/work"
          pathname={pathname}
          label="Work"
          onToggleNavBar={onToggleNavBar}
        />
        <NavLink
          path="/about"
          pathname={pathname}
          label="About"
          onToggleNavBar={onToggleNavBar}
        />
        <NavLink
          path="/contact"
          pathname={pathname}
          label="Contact"
          onToggleNavBar={onToggleNavBar}
        />
        <button onClick={handleToggleDarkMode} type="button">
          <Moon className="dark:fill-white fill-black size-10" />
        </button>
      </nav>
    </header>
  );
}

const NavLink = ({
  pathname,
  path,
  label,
  onToggleNavBar,
}: {
  pathname: string;
  path: string;
  label: string;
  onToggleNavBar: () => void;
}) => {
  return (
    <Link
      className={clsx(
        "font-semibold text-2xl",
        pathname === path
          ? "text-blue-900 dark:text-primary-200"
          : "text-gray-500 dark:text-white"
      )}
      onClick={onToggleNavBar}
      href={path}
    >
      {label}
    </Link>
  );
};
