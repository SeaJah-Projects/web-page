"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Testimonials() {
  const t = useTranslations("testimonials");

  const testimonials = [
    { key: "t1", initials: "CL" },
    { key: "t2", initials: "VP" },
    { key: "t3", initials: "PL" },
  ];

  return (
    <section className="py-24 bg-[#FAFAFA]">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ key, initials }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-white rounded-xl p-8 border border-gray-100 hover:border-[#2DD4BF]/30 hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Quote mark */}
              <span
                className="absolute top-6 right-8 text-5xl text-[#2DD4BF] opacity-30 leading-none select-none"
                style={{ fontFamily: "Georgia, serif" }}
              >
                &ldquo;
              </span>

              <p
                className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                &ldquo;{t(`${key}.quote`)}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2DD4BF] flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-white text-xs font-bold"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {initials}
                  </span>
                </div>
                <span
                  className="text-sm font-semibold text-gray-700"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {t(`${key}.author`)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
