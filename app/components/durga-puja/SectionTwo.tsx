"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Flame,
  Flower2,
  Heart,
  Sparkles,
} from "lucide-react";

const SectionTwo = () => {
  const pujaDays = [
    {
      bengali: "পঞ্চমী",
      day: "Panchami",
      date: "15 October 2026",
      accent: "#D94672",
      icon: Sparkles,
      rituals: [
        {
          time: "8:00 PM",
          title: "Maa Agomoni",
        },
      ],
    },
    {
      bengali: "ষষ্ঠী",
      day: "Maha Shashti",
      date: "16 October 2026",
      accent: "#E63946",
      icon: Sparkles,
      rituals: [
        {
          time: "8:00 AM",
          title: "Pujo",
        },
        {
          time: "9:30 AM",
          title: "Pushpanjali",
        },
        {
          time: "8:00 PM",
          title: "Devi Baran",
        },
        {
          time: "8:30 PM",
          title: "Cultural Program",
        },
      ],
    },
    {
      bengali: "সপ্তমী",
      day: "Maha Saptami",
      date: "17 October 2026",
      accent: "#F59E0B",
      icon: Flower2,
      rituals: [
        {
          time: "8:00 AM",
          title: "Snan",
          description: "Nava Patrika Pravesh",
        },
        {
          time: "8:30 AM",
          title: "Pujo",
        },
        {
          time: "10:00 AM",
          title: "Pushpanjali",
        },
        {
          time: "11:30 AM",
          title: "Engagement Activities",
        },
        {
          time: "1:00 PM - 3:00 PM",
          title: "Bhog",
        },
        {
          time: "7:00 PM",
          title: "Sandhya Aarati",
        },
        {
          time: "7:30 PM",
          title: "Dhunuchi Dance",
        },
        {
          time: "8:00 PM",
          title: "Cultural Program",
        },
      ],
    },
    {
      bengali: "অষ্টমী",
      day: "Maha Ashtami",
      date: "18 October 2026",
      accent: "#D94672",
      icon: Heart,
      rituals: [
        {
          time: "8:30 AM",
          title: "Maha Ashtami Pujo",
        },
        {
          time: "10:00 AM",
          title: "Pushpanjali",
        },
        {
          time: "11:30 AM",
          title: "Engagement Activities",
        },
        {
          time: "1:00 PM - 3:00 PM",
          title: "Bhog",
        },
        {
          time: "7:00 PM",
          title: "Sandhya Aarati",
        },
        {
          time: "7:30 PM",
          title: "Dhunuchi Dance",
        },
        {
          time: "8:00 PM",
          title: "Cultural Program",
        },
      ],
    },
    {
      bengali: "অষ্টমী",
      day: "Maha Ashtami",
      date: "19 October 2026",
      subtitle: "Sandhi Pujo",
      accent: "#E63946",
      icon: Flame,
      rituals: [
        {
          time: "5:39 AM",
          title: "Pujo",
        },
        {
          time: "6:00 AM",
          title: "Pushpanjali",
        },
        {
          time: "7:26 AM",
          title: "Sandhi Pujo Starts",
          description: "+ Balidan",
        },
        {
          time: "8:14 AM",
          title: "Sandhi Pujo Ends",
        },
        {
          time: "8:30 AM",
          title: "Pushpanjali",
        },
        {
          time: "10:00 AM",
          title: "Engagement Activities",
        },
        {
          time: "1:00 PM - 3:00 PM",
          title: "Bhog",
        },
        {
          time: "7:00 PM",
          title: "Sandhya Aarati",
        },
        {
          time: "7:30 PM",
          title: "Dhunuchi Dance",
        },
        {
          time: "8:00 PM",
          title: "Cultural Program",
        },
      ],
    },
    {
      bengali: "নবমী",
      day: "Maha Navomi",
      date: "20 October 2026",
      accent: "#E63946",
      icon: Flame,
      rituals: [
        {
          time: "6:00 AM",
          title: "Maha Navami Pujo",
        },
        {
          time: "8:00 AM",
          title: "Pushpanjali",
        },
        {
          time: "10:30 AM",
          title: "Joggo",
        },
        {
          time: "11:00 AM",
          title: "Engagement Activities",
        },
        {
          time: "1:00 PM - 3:00 PM",
          title: "Bhog",
        },
        {
          time: "7:00 PM",
          title: "Sandhya Aarati",
        },
        {
          time: "7:30 PM",
          title: "Dhunuchi Dance",
        },
        {
          time: "8:00 PM",
          title: "Cultural Program",
        },
      ],
    },
    {
      bengali: "দশমী",
      day: "Maha Dashomi",
      date: "21 October 2026",
      accent: "#F59E0B",
      icon: ArrowRight,
      rituals: [
        {
          time: "8:00 AM",
          title: "Devi Baran",
        },
        {
          time: "8:30 AM",
          title: "Aparajita Pujo",
        },
        {
          time: "10:30 AM",
          title: "Sindoor Khela",
        },
        {
          time: "2:30 PM",
          title: "Visarjan",
        },
      ],
    },
  ];

  return (
    <section
      id="durga-puja-calendar"
      className="relative overflow-hidden bg-[#FFFDF8] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#E63946]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#3B0B12]/50">
                The Puja Calendar
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-[0.96] tracking-[-0.04em] text-[#3B0B12] sm:text-5xl lg:text-6xl">
              Seven days,
              <br />
              <span className="italic">one celebration.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl lg:ml-auto"
          >
            <p className="text-base leading-8 text-[#3B0B12]/60 sm:text-lg">
              Follow the journey of Maa Durga through the traditional Bengali
              Puja observances, from Maa Agomoni on Panchami to Bijoya and
              Visarjan on Dashami.
            </p>
          </motion.div>
        </div>

        {/* Mahalaya prelude */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-16 overflow-hidden rounded-[1.75rem] border border-[#3B0B12]/10 bg-[#FFFAF2] p-7 sm:p-9 lg:mt-20"
        >
          <div className="pointer-events-none absolute -right-4 -top-8 font-serif text-[8rem] leading-none text-[#3B0B12]/[0.035]">
            মহালয়া
          </div>

          <div className="relative z-10 grid gap-7 sm:grid-cols-[auto_1fr_auto] sm:items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E63946]/10 text-[#E63946]">
              <CalendarDays size={20} strokeWidth={1.7} />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-serif text-2xl tracking-tight text-[#3B0B12]">
                  Mahalaya
                </h3>

                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3B0B12]/35">
                  10 October 2026
                </span>
              </div>

              <p className="mt-2 text-sm leading-7 text-[#3B0B12]/55">
                The traditional beginning of Devi Paksha and the emotional
                arrival of the Puja season.
              </p>
            </div>

            <div className="font-serif text-xl italic text-[#E63946]">
              আগমনী
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-8 lg:mt-10">
          {/* Timeline line */}
          <div className="absolute left-4.75 top-5 hidden h-[calc(100%-40px)] w-px bg-[#3B0B12]/10 lg:block" />

          <div className="space-y-6">
            {pujaDays.map((day, index) => {
              const Icon = day.icon;

              return (
                <motion.article
                  key={`${day.date}-${day.day}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.06,
                  }}
                  className="relative grid gap-6 lg:grid-cols-[40px_1fr]"
                >
                  {/* Timeline marker */}
                  <div className="relative z-10 hidden lg:flex">
                    <div
                      className="mt-5 flex h-10 w-10 items-center justify-center rounded-full border-[5px] border-[#FFFDF8]"
                      style={{
                        backgroundColor: day.accent,
                        boxShadow: "0 0 0 1px rgba(59,11,18,0.12)",
                      }}
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.7}
                        className="text-white"
                      />
                    </div>
                  </div>

                  {/* Day card */}
                  <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#3B0B12]/10 bg-[#FFFAF2] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(59,11,18,0.07)]">
                    {/* Accent */}
                    <div
                      className="absolute left-0 top-0 h-1 w-full"
                      style={{ backgroundColor: day.accent }}
                    />

                    {/* Bengali decorative mark */}
                    <div className="pointer-events-none absolute -right-4 -top-8 select-none font-serif text-[8rem] leading-none text-[#3B0B12]/[0.035]">
                      {day.bengali}
                    </div>

                    <div className="relative z-10 p-7 sm:p-9">
                      {/* Day heading */}
                      <div className="border-b border-[#3B0B12]/10 pb-7">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                          <div>
                            <div className="flex flex-wrap items-center gap-3">
                              <span
                                className="text-[10px] font-bold uppercase tracking-[0.2em]"
                                style={{ color: day.accent }}
                              >
                                Day {index + 1}
                              </span>

                              <span className="h-1 w-1 rounded-full bg-[#3B0B12]/20" />

                              <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#3B0B12]/35">
                                {day.date}
                              </span>
                            </div>

                            <div className="mt-3 flex flex-wrap items-baseline gap-3">
                              <h3 className="font-serif text-3xl tracking-[-0.03em] text-[#3B0B12] sm:text-4xl">
                                {day.day}
                              </h3>

                              <span className="font-serif text-xl text-[#3B0B12]/25">
                                {day.bengali}
                              </span>

                              {day.subtitle && (
                                <>
                                  <span className="h-1 w-1 rounded-full bg-[#3B0B12]/20" />

                                  <span
                                    className="font-serif text-lg italic"
                                    style={{ color: day.accent }}
                                  >
                                    {day.subtitle}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Schedule */}
                      <div className="mt-7 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                        {day.rituals.map((ritual) => (
                          <div
                            key={`${ritual.time}-${ritual.title}`}
                            className="flex items-start gap-4"
                          >
                            {/* Time */}
                            <div
                              className="min-w-23 pt-0.5 text-[10px] font-bold uppercase tracking-[0.12em]"
                              style={{ color: day.accent }}
                            >
                              {ritual.time}
                            </div>

                            {/* Event */}
                            <div className="relative flex-1 border-l border-[#3B0B12]/10 pl-4">
                              <div
                                className="absolute -left-1 top-1.5 h-1.5 w-1.5 rounded-full"
                                style={{
                                  backgroundColor: day.accent,
                                }}
                              />

                              <h4 className="font-serif text-lg tracking-[-0.015em] text-[#3B0B12]">
                                {ritual.title}
                              </h4>

                              {ritual.description && (
                                <p className="mt-1 text-sm leading-6 text-[#3B0B12]/50">
                                  {ritual.description}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-4 border-t border-[#3B0B12]/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl text-sm leading-7 text-[#3B0B12]/50">
            Detailed Puja schedule and timings for Kalpataru Durga Puja 2026.
          </p>

          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3B0B12]/30">
            Panchami · Shashti · Saptami · Ashtami · Navami · Dashami
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTwo;
