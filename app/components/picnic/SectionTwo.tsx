"use client";

import { motion } from "motion/react";
import { CloudRain, Music2, Waves } from "lucide-react";

const SectionTwo = () => {
  const experiences = [
    {
      number: "01",
      label: "Music",
      title: "Rhythm in the rain.",
      description:
        "Guests arrived to rhythmic music that immediately set the tone for a day of celebration, with spontaneous dance circles bringing together both young and old.",
      icon: Music2,
      accent: "red",
    },
    {
      number: "02",
      label: "Pool",
      title: "Splash, laughter, repeat.",
      description:
        "The resort pool became another hub of the day, with swimming sessions, laughter and plenty of carefree moments shared among members and families.",
      icon: Waves,
      accent: "gold",
    },
    {
      number: "03",
      label: "Monsoon",
      title: "Panshet in the rain.",
      description:
        "Lush greenery, rhythmic raindrops and the serene lake beside the resort created the perfect backdrop for a relaxed day away from the city.",
      icon: CloudRain,
      accent: "pink",
    },
  ];

  return (
    <section
      id="picnic-experience"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Decorative oversized typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-24 select-none font-serif text-[8rem] leading-none tracking-[-0.06em] text-[#3b0b12]/[0.035] sm:text-[12rem] lg:-left-24 lg:text-[17rem]"
      >
        MONSOON
      </div>

      <div className="relative">
        {/* Section introduction */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#e63946]" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e63946]">
              The Experience
            </p>
          </div>

          <p className="mb-4 font-serif text-2xl text-[#3b0b12]/50 sm:text-3xl">
            একটি আনন্দের দিন
          </p>

          <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-[#3b0b12] sm:text-6xl lg:text-7xl">
            A day made
            <span className="block text-[#e63946]">for wandering.</span>
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
            At Panshet, the monsoon became part of the celebration itself. Music
            filled the air as families and friends arrived, conversations turned
            into laughter, and an ordinary Sunday slowly became a day full of
            movement, spontaneity and shared joy.
          </motion.p>
        </motion.div>

        {/* Experience cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            const accentStyles = {
              red: {
                icon: "bg-[#e63946]/10 text-[#e63946]",
                label: "text-[#e63946]",
              },
              gold: {
                icon: "bg-[#f59e0b]/12 text-[#d97706]",
                label: "text-[#d97706]",
              },
              pink: {
                icon: "bg-[#d94672]/10 text-[#d94672]",
                label: "text-[#d94672]",
              },
            };

            const accent =
              accentStyles[experience.accent as keyof typeof accentStyles];

            return (
              <motion.div
                key={experience.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: 0.15 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-4xl border border-[#3b0b12]/10 bg-white/60 p-7 shadow-[0_18px_50px_rgba(59,11,18,0.045)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(59,11,18,0.08)] sm:p-8"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent.icon}`}
                >
                  <Icon size={21} strokeWidth={1.7} />
                </div>

                <p
                  className={`mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] ${accent.label}`}
                >
                  {experience.number} · {experience.label}
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#3b0b12]">
                  {experience.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#3b0b12]/60">
                  {experience.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Closing statement */}
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
              Relaxed yet energetic, the day was as much about being together as
              it was about being outdoors.
            </p>

            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3b0b12]/35">
              Panshet · July 2025
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTwo;
