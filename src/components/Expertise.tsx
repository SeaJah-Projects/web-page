"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Expertise() {
  const t = useTranslations("expertise");

  const columns = [
    {
      key: "frontend",
      items: t.raw("frontend.items") as string[],
      accent: "#2DD4BF",
    },
    {
      key: "backend",
      items: t.raw("backend.items") as string[],
      accent: "#0A0A0A",
    },
    {
      key: "cloud",
      items: t.raw("cloud.items") as string[],
      accent: "#2DD4BF",
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontWeight: 900 }}
          >
            {t("title")}
          </h2>
          <div className="mx-auto w-12 h-1 rounded-full bg-[#2DD4BF]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col, i) => (
            <motion.div
              key={col.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="rounded-xl bg-white/5 border border-white/10 p-8 hover:border-[#2DD4BF]/40 transition-colors duration-300"
            >
              <div className="w-2 h-10 rounded-full bg-[#2DD4BF] mb-6" />
              <h3
                className="text-2xl font-black text-white mb-6"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontWeight: 800 }}
              >
                {t(`${col.key}.title`)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {col.items.map((item: string) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 text-gray-300 hover:border-[#2DD4BF] hover:text-[#2DD4BF] transition-colors duration-200 cursor-default"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
