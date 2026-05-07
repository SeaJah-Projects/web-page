"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const LOCALES = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

function getLocalePath(pathname: string, newLocale: string) {
  const segments = pathname.split("/").filter(Boolean);
  const hasLocalePrefix = ["en", "pt"].includes(segments[0]);
  if (hasLocalePrefix) segments.shift();
  if (newLocale === "es") return "/" + segments.join("/");
  return "/" + newLocale + (segments.length ? "/" + segments.join("/") : "");
}

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = ["en", "pt"].includes(segments[0]) ? segments[0] : "es";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t("services") },
    { href: "#how-we-work", label: t("howWeWork") },
    { href: "#expertise", label: t("expertise") },
    { href: "#clients", label: t("clients") },
    { href: "#about", label: t("about") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-shadow duration-300 ${
        scrolled
          ? "shadow-sm border-b border-gray-100 dark:border-[#262626]"
          : "border-b border-gray-100 dark:border-[#262626]"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center select-none">
          <Image
            src="/LOGO_FULL.png"
            alt="SeaJah"
            height={36}
            width={190}
            className="dark:brightness-0 dark:invert"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#0A0A0A] dark:hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              {link.label}
            </a>
          ))}

          {/* Language switcher */}
          <div className="flex items-center gap-1 ml-2">
            {LOCALES.map((loc, i) => (
              <span key={loc.code} className="flex items-center">
                <a
                  href={getLocalePath(pathname, loc.code)}
                  className={`text-xs font-semibold px-1 py-0.5 rounded transition-colors cursor-pointer ${
                    currentLocale === loc.code
                      ? "text-[#2DD4BF]"
                      : "text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  }`}
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {loc.label}
                </a>
                {i < LOCALES.length - 1 && (
                  <span className="text-gray-200 dark:text-gray-700 text-xs">|</span>
                )}
              </span>
            ))}
          </div>

          <ThemeToggle />

          <a
            href="#contact"
            className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-[#2DD4BF] hover:bg-[#0D9488] transition-colors"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            {t("contact")}
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 text-gray-600 dark:text-gray-400 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FAFAFA] dark:bg-[#0A0A0A] border-t border-gray-100 dark:border-[#262626] px-4 pb-4">
          <div className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#0A0A0A] dark:hover:text-white py-1"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-1">
              {LOCALES.map((loc) => (
                <a
                  key={loc.code}
                  href={getLocalePath(pathname, loc.code)}
                  onClick={() => setMobileOpen(false)}
                  className={`text-xs font-semibold px-2 py-1 rounded border cursor-pointer ${
                    currentLocale === loc.code
                      ? "border-[#2DD4BF] text-[#2DD4BF]"
                      : "border-gray-200 dark:border-[#262626] text-gray-400"
                  }`}
                >
                  {loc.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-1 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-[#2DD4BF] text-center"
            >
              {t("contact")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
