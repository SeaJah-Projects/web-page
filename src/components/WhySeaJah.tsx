"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  StarIcon,
  BoltIcon,
  ArrowsPointingOutIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

const ICONS = [StarIcon, BoltIcon, ArrowsPointingOutIcon, EyeIcon];
const KEYS = ["experience", "agile", "adaptability", "monitoring"] as const;

export default function WhySeaJah() {
  const t = useTranslations("whySeajah");

  return (
    <section id="about" className="py-24 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-black text-[#0A0A0A] dark:text-[#FAFAFA] mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontWeight: 900 }}
          >
            {t("title")}
          </h2>
          <div className="mx-auto w-12 h-1 rounded-full bg-[#2DD4BF]" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEYS.map((key, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden bg-white dark:bg-[#141414] rounded-xl p-6 border border-gray-100 dark:border-[#262626] hover:border-[#2DD4BF] hover:shadow-lg transition-all duration-300"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#2DD4BF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="w-12 h-12 rounded-xl bg-[#F0FDFA] dark:bg-[#042f2e] flex items-center justify-center mb-4 group-hover:bg-[#2DD4BF] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#2DD4BF] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3
                  className="text-lg font-bold text-[#0A0A0A] dark:text-[#FAFAFA] mb-2"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
                >
                  {t(`${key}.title`)}
                </h3>
                <p
                  className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed"
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
