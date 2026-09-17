"use client";

import { motion } from "motion/react";
import { Coffee, Sun } from "lucide-react";

const SectionThree = () => {
  const meals = [
    {
      number: "01",
      label: "Morning",
      title: "A warm beginning.",
      icon: Sun,
      accent: "red",
      items: ["Radhaballavi", "Alur Torkari", "Bonde"],
    },
    {
      number: "02",
      label: "Afternoon",
      title: "The Bengali feast.",
      icon: Sun,
      accent: "gold",
      items: [
        "Bhat",
        "Moog Daal",
        "Aloo Bhaja",
        "Kosha Mangsho",
        "Chatni",
        "Bengali Misti",
      ],
    },
    {
      number: "03",
      label: "Evening",
      title: "Something to linger over.",
      icon: Coffee,
      accent: "pink",
      items: ["Tea", "Peyaji"],
    },
  ];

  return (
    <section
      id="picnic-feast"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Decorative oversized typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-20 select-none font-serif text-[9rem] leading-none tracking-[-0.06em] text-[#3b0b12]/[0.035] sm:text-[13rem] lg:-right-28 lg:text-[18rem]"
      >
        FEAST
      </div>

      <div className="relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#e63946]" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e63946]">
              The Feast
            </p>
          </div>

          <p className="mb-4 font-serif text-2xl text-[#3b0b12]/50 sm:text-3xl">
            বাঙালির ভোজ
          </p>

          <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-[#3b0b12] sm:text-6xl lg:text-7xl">
            A feast worth
            <span className="block text-[#e63946]">remembering.</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-2xl text-[15px] leading-7 text-[#3b0b12]/65 sm:text-base sm:leading-8"
          >
            No Bengali gathering is complete without food that brings people
            back to the table. The picnic carried that familiar warmth through a
            day of comforting flavours, generous plates and shared meals.
          </motion.p>
        </motion.div>

        {/* Meal journey */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {meals.map((meal, index) => {
            const Icon = meal.icon;

            const accentStyles = {
              red: {
                icon: "bg-[#e63946]/10 text-[#e63946]",
                label: "text-[#e63946]",
                number: "text-[#e63946]/20",
              },
              gold: {
                icon: "bg-[#f59e0b]/12 text-[#d97706]",
                label: "text-[#d97706]",
                number: "text-[#d97706]/20",
              },
              pink: {
                icon: "bg-[#d94672]/10 text-[#d94672]",
                label: "text-[#d94672]",
                number: "text-[#d94672]/20",
              },
            };

            const accent =
              accentStyles[meal.accent as keyof typeof accentStyles];

            return (
              <motion.div
                key={meal.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: 0.15 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden rounded-4xl border border-[#3b0b12]/10 bg-white/60 p-7 shadow-[0_18px_50px_rgba(59,11,18,0.045)] backdrop-blur-sm sm:p-8"
              >
                {/* Background number */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-2 top-0 font-serif text-[7rem] leading-none tracking-[-0.08em] ${accent.number}`}
                >
                  {meal.number}
                </span>

                <div
                  className={`relative flex h-12 w-12 items-center justify-center rounded-2xl ${accent.icon}`}
                >
                  <Icon size={20} strokeWidth={1.7} />
                </div>

                <p
                  className={`relative mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] ${accent.label}`}
                >
                  {meal.number} · {meal.label}
                </p>

                <h3 className="relative mt-3 font-serif text-2xl text-[#3b0b12]">
                  {meal.title}
                </h3>

                <div className="relative mt-6 border-t border-[#3b0b12]/10 pt-5">
                  <ul className="space-y-2.5">
                    {meal.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-[#3b0b12]/65"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#e63946]/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 border-t border-[#3b0b12]/10 pt-8 sm:mt-16 sm:pt-10"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl font-serif text-xl leading-7 text-[#3b0b12]/75 sm:text-2xl">
              From the first plate in the morning to tea and peyaji in the
              evening, every meal added to the warmth of the day.
            </p>

            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3b0b12]/35">
              Bengali · Food · Togetherness
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionThree;
