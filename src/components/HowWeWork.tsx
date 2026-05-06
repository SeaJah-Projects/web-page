"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { DocumentCheckIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function HowWeWork() {
  const t = useTranslations("howWeWork");

  const cards = [
    {
      key: "fixed",
      icon: DocumentCheckIcon,
      color: "#0A0A0A",
    },
    {
      key: "timeAndMaterial",
      icon: ClockIcon,
      color: "#2DD4BF",
    },
  ];

  return (
    <section id="how-we-work" className="py-24 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const isSecond = i === 1;
            return (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`rounded-2xl p-8 ${
                  isSecond
                    ? "bg-[#0A0A0A] dark:bg-[#141414] text-white"
                    : "bg-white dark:bg-[#141414] border-2 border-gray-100 dark:border-[#262626]"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    isSecond ? "bg-[#2DD4BF]" : "bg-[#F0FDFA] dark:bg-[#042f2e]"
                  }`}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: isSecond ? "white" : "#2DD4BF" }}
                  />
                </div>
                <h3
                  className={`text-2xl font-black mb-3 ${isSecond ? "text-white" : "text-[#0A0A0A] dark:text-[#FAFAFA]"}`}
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontWeight: 800 }}
                >
                  {t(`${card.key}.title`)}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${isSecond ? "text-gray-400" : "text-gray-500 dark:text-gray-400"}`}
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {t(`${card.key}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
