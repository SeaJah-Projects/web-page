"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const CLIENTS = ["Lagom", "US Cellular", "Trick", "PayPal", "iutrace"];

export default function Clients() {
  const t = useTranslations("clients");

  return (
    <section id="clients" className="py-24 bg-white dark:bg-[#111111]">
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

        <div className="flex flex-wrap justify-center items-center gap-6">
          {CLIENTS.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group px-8 py-5 rounded-xl border border-gray-100 dark:border-[#262626] bg-[#FAFAFA] dark:bg-[#141414] hover:border-[#2DD4BF] hover:bg-[#F0FDFA] dark:hover:bg-[#042f2e] transition-all duration-300 min-w-[140px] text-center"
            >
              <span
                className="text-xl font-black text-gray-400 group-hover:text-[#0A0A0A] dark:group-hover:text-[#FAFAFA] transition-colors duration-300"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontWeight: 800, letterSpacing: "0.05em" }}
              >
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
