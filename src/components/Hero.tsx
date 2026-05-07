"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAFAFA] dark:bg-[#0A0A0A] pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large teal blob top-right */}
        <div
          className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #2DD4BF 0%, transparent 70%)" }}
        />
        {/* Small teal blob bottom-left */}
        <div
          className="absolute bottom-0 -left-16 w-[300px] h-[300px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #2DD4BF 0%, transparent 70%)" }}
        />
        {/* Grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* AI First badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2DD4BF] mb-8">
              <span className="text-white text-xs font-bold tracking-widest" style={{ fontFamily: "var(--font-dm-sans)" }}>
                ✦ {t("badge")} →
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-barlow-condensed), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
              }}
              className="mb-6 text-[#0A0A0A] dark:text-[#FAFAFA]"
            >
              {t("headline")}
            </h1>

            <p
              className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-lg"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif", lineHeight: 1.7 }}
            >
              {t("subtext")}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg font-semibold text-white bg-[#2DD4BF] hover:bg-[#0D9488] transition-all duration-200 shadow-lg shadow-teal-200/50"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {t("ctaPrimary")}
              </a>
              <a
                href="#services"
                className="px-6 py-3 rounded-lg font-semibold text-[#0A0A0A] dark:text-[#FAFAFA] border-2 border-[#0A0A0A] dark:border-[#FAFAFA] hover:bg-[#0A0A0A] hover:text-white dark:hover:bg-[#FAFAFA] dark:hover:text-[#0A0A0A] transition-all duration-200"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {t("ctaSecondary")}
              </a>
            </div>
          </motion.div>

          {/* Right side — abstract geometric illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[420px] h-[420px]">
              {/* Main circle */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 100%)",
                }}
              />
              {/* Teal ring */}
              <div
                className="absolute inset-4 rounded-full border-2 border-dashed"
                style={{ borderColor: "#2DD4BF", opacity: 0.5 }}
              />
              {/* Inner solid ring */}
              <div
                className="absolute inset-12 rounded-full border-4"
                style={{ borderColor: "#2DD4BF" }}
              />
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/Icono-Transparente.png"
                  alt="SeaJah"
                  width={100}
                  height={100}
                  className="drop-shadow-lg"
                />
              </div>

              {/* Floating chips */}
              {[
                { label: "React.js", top: "5%", left: "60%", delay: 0.4 },
                { label: "AWS", top: "20%", left: "-5%", delay: 0.6 },
                { label: "LLM", top: "72%", left: "70%", delay: 0.5 },
                { label: "Node.js", top: "80%", left: "5%", delay: 0.7 },
                { label: "AI", top: "50%", left: "88%", delay: 0.45 },
              ].map((chip) => (
                <motion.div
                  key={chip.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: chip.delay, duration: 0.5 }}
                  className="absolute px-3 py-1.5 rounded-full bg-white dark:bg-[#141414] shadow-md border border-gray-100 dark:border-[#262626] text-xs font-semibold text-gray-700 dark:text-gray-300"
                  style={{
                    top: chip.top,
                    left: chip.left,
                    fontFamily: "var(--font-dm-sans)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {chip.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-[#2DD4BF] to-transparent opacity-30" />
      </div>
    </section>
  );
}
