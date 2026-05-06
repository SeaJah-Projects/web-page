"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function CtaBanner() {
  const t = useTranslations("cta");

  return (
    <section className="py-20 bg-[#2DD4BF] relative overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-16 -right-16 w-80 h-80 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
        />
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-6xl font-black text-white mb-8"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontWeight: 900, lineHeight: 1.05 }}
          >
            {t("headline")}
          </h2>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#2DD4BF] bg-white hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 shadow-xl text-lg"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            {t("button")} →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
