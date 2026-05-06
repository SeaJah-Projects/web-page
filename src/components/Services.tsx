"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  UsersIcon,
  PaintBrushIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import type { Variants } from "framer-motion";

const ICONS = [
  CodeBracketIcon,
  UsersIcon,
  PaintBrushIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  CpuChipIcon,
];

const CARD_KEYS = [
  "softwareDev",
  "staffAug",
  "uxui",
  "consulting",
  "recruitment",
  "ai",
] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-black text-[#0A0A0A] mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontWeight: 900 }}
          >
            {t("title")}
          </h2>
          <div className="mx-auto w-12 h-1 rounded-full bg-[#2DD4BF]" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARD_KEYS.map((key, i) => {
            const Icon = ICONS[i];
            const isAI = key === "ai";

            return (
              <motion.div
                key={key}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`relative group bg-white rounded-xl p-6 border border-gray-100 border-b-4 hover:shadow-xl transition-all duration-300 ${
                  isAI ? "border-b-[#2DD4BF]" : "hover:border-b-[#2DD4BF]"
                }`}
                style={isAI ? { boxShadow: "0 0 0 1px #2DD4BF20" } : undefined}
              >
                {isAI && (
                  <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-[#2DD4BF] text-white text-[10px] font-bold tracking-wider">
                    {t("ai.badge")}
                  </span>
                )}
                <div className="w-12 h-12 rounded-lg bg-[#F0FDFA] flex items-center justify-center mb-4 group-hover:bg-[#2DD4BF] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#2DD4BF] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3
                  className="text-xl font-bold text-[#0A0A0A] mb-2"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontWeight: 700, fontSize: "1.2rem" }}
                >
                  {t(`${key}.title`)}
                </h3>
                <p
                  className="text-gray-500 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {t(`${key}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
