"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  MapIcon,
  CircleStackIcon,
  RocketLaunchIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import type { Variants } from "framer-motion";

const ICONS = [MapIcon, CircleStackIcon, RocketLaunchIcon, CogIcon];
const KEYS = ["strategy", "llm", "product", "automation"] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

export default function AISection() {
  const t = useTranslations("aiSection");

  return (
    <section id="ai" className="py-24 bg-[#F0FDFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2DD4BF] bg-white mb-6">
            <span className="text-[#2DD4BF] text-xs font-bold tracking-widest" style={{ fontFamily: "var(--font-dm-sans)" }}>
              ✦ AI CONSULTING
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl font-black text-[#0A0A0A] mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontWeight: 900 }}
          >
            {t("title")}
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {KEYS.map((key, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={key}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-xl p-8 border border-[#2DD4BF]/20 hover:border-[#2DD4BF] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#2DD4BF] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold text-[#0A0A0A] mb-2"
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontWeight: 700 }}
                    >
                      {t(`${key}.title`)}
                    </h3>
                    <p
                      className="text-gray-500 text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                      {t(`${key}.desc`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
