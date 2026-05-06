import { useTranslations } from "next-intl";

export default function StatsStrip() {
  const t = useTranslations("stats");

  const stats = [
    t("projects"),
    t("hours"),
    t("countries"),
    t("support"),
    t("coffee"),
  ];

  return (
    <section className="bg-[#0A0A0A] py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-0 divide-x divide-gray-700">
          {stats.map((stat) => (
            <div
              key={stat}
              className="px-6 py-2 text-center"
            >
              <span
                className="text-sm font-semibold text-gray-300 whitespace-nowrap"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                <span className="text-[#2DD4BF] font-bold">{stat.split(" ")[0]}</span>{" "}
                {stat.split(" ").slice(1).join(" ")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
