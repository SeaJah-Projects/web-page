"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const serviceOptions = [
    { value: "staffAug", label: t("services.staffAug") },
    { value: "softwareDev", label: t("services.softwareDev") },
    { value: "uxui", label: t("services.uxui") },
    { value: "ai", label: t("services.ai") },
    { value: "consulting", label: t("services.consulting") },
    { value: "recruitment", label: t("services.recruitment") },
    { value: "other", label: t("services.other") },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-[#262626] bg-white dark:bg-[#141414] text-sm text-[#0A0A0A] dark:text-[#FAFAFA] placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-[#2DD4BF] focus:ring-2 focus:ring-[#2DD4BF]/20 transition-all duration-200";

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#111111]">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p
              className="text-gray-500 dark:text-gray-400 text-lg mb-10 leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              We&apos;re always open to new collaborations. Reach out and let&apos;s build something together.
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${t("email")}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F0FDFA] dark:bg-[#042f2e] flex items-center justify-center group-hover:bg-[#2DD4BF] transition-colors duration-300 flex-shrink-0">
                  <EnvelopeIcon className="w-5 h-5 text-[#2DD4BF] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5" style={{ fontFamily: "var(--font-dm-sans)" }}>Email</p>
                  <span
                    className="text-sm font-semibold text-[#0A0A0A] dark:text-[#FAFAFA] group-hover:text-[#2DD4BF] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {t("email")}
                  </span>
                </div>
              </a>

              <a
                href={`https://${t("linkedin")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F0FDFA] dark:bg-[#042f2e] flex items-center justify-center group-hover:bg-[#2DD4BF] transition-colors duration-300 flex-shrink-0">
                  <svg className="w-5 h-5 text-[#2DD4BF] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5" style={{ fontFamily: "var(--font-dm-sans)" }}>LinkedIn</p>
                  <span
                    className="text-sm font-semibold text-[#0A0A0A] dark:text-[#FAFAFA] group-hover:text-[#2DD4BF] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {t("linkedin")}
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 px-6 bg-[#F0FDFA] dark:bg-[#042f2e] rounded-2xl border border-[#2DD4BF]/30">
                <div className="w-16 h-16 rounded-full bg-[#2DD4BF] flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p
                  className="text-lg font-semibold text-[#0A0A0A] dark:text-[#FAFAFA]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {t("success")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("namePlaceholder")}
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("emailPlaceholder")}
                  className={inputClass}
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t("companyPlaceholder")}
                  className={inputClass}
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled>
                    {t("servicePlaceholder")}
                  </option>
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("messagePlaceholder")}
                  rows={4}
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-semibold text-white bg-[#2DD4BF] hover:bg-[#0D9488] transition-colors duration-200 text-sm shadow-lg shadow-teal-200/50"
                >
                  {t("submit")}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
