"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const calendar = [
  {
    date: "08",
    month: "November",
    day: "Sunday",
    bengali: "২২ কার্তিক",
    title: "Kali Puja",
    description:
      "Shyama Puja is observed on the Amavasya night, with worship centred on the Nishita period.",
    featured: true,
  },
  {
    date: "09",
    month: "November",
    day: "Monday",
    bengali: "২৩ কার্তিক",
    title: "Amavasya concludes",
    description:
      "The Amavasya tithi concludes around midday on 9 November 2026.",
    featured: false,
  },
];

const SectionThree = () => {
  return (
    <section
      id="kali-puja-calendar"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#F59E0B]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/45 sm:text-[10px]">
                The Puja Calendar
              </span>
            </div>

            <p className="mt-7 font-serif text-2xl italic text-[#D94672]/75">
              পূজার দিনক্ষণ
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-4xl font-serif text-[clamp(3rem,6vw,6rem)] font-normal leading-[0.9] tracking-tighter text-[#3B0B12]">
              The night of
              <span className="block italic text-[#E63946]">Maa Kali.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
              In 2026, Bengali Kali Puja falls on Sunday, 8 November. The
              Amavasya tithi begins on 8 November and continues into the
              following day.
            </p>
          </motion.div>
        </div>

        {/* Calendar */}
        <div className="mt-16 lg:mt-20">
          {calendar.map((item, index) => (
            <motion.div
              key={`${item.date}-${item.month}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                group
                grid
                gap-7
                border-t
                border-[#3B0B12]/10
                py-9
                sm:grid-cols-[150px_1fr]
                sm:gap-10
                sm:py-11
                lg:grid-cols-[210px_0.85fr_1.15fr]
                lg:items-center
                lg:gap-12
                lg:py-14
                ${
                  item.featured
                    ? "bg-[#E63946] px-6 text-white sm:px-8 lg:px-10"
                    : ""
                }
              `}
            >
              {/* Date */}
              <div>
                <div
                  className={`
                    flex items-end gap-3
                    ${item.featured ? "text-white" : "text-[#3B0B12]"}
                  `}
                >
                  <span className="font-serif text-6xl leading-none tracking-tighter sm:text-7xl lg:text-8xl">
                    {item.date}
                  </span>

                  <span
                    className={`
                      pb-1 text-[9px] font-semibold uppercase tracking-[0.2em]
                      ${item.featured ? "text-white/60" : "text-[#3B0B12]/40"}
                    `}
                  >
                    {item.month}
                  </span>
                </div>

                <p
                  className={`
                    mt-3 text-[9px] font-semibold uppercase tracking-[0.22em]
                    ${item.featured ? "text-white/60" : "text-[#F59E0B]"}
                  `}
                >
                  {item.day}
                </p>

                <p
                  className={`
                    mt-2 font-serif text-lg italic
                    ${item.featured ? "text-white/60" : "text-[#D94672]/65"}
                  `}
                >
                  {item.bengali}
                </p>
              </div>

              {/* Title */}
              <div>
                <h3
                  className={`
                    font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl
                    ${item.featured ? "text-white" : "text-[#3B0B12]"}
                  `}
                >
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div
                className={`
                  flex items-start justify-between gap-6
                  lg:border-l lg:pl-10
                  ${
                    item.featured
                      ? "lg:border-white/20"
                      : "lg:border-[#3B0B12]/10"
                  }
                `}
              >
                <p
                  className={`
                    max-w-xl text-sm leading-7 sm:text-base sm:leading-8
                    ${item.featured ? "text-white/75" : "text-[#3B0B12]/55"}
                  `}
                >
                  {item.description}
                </p>

                <ArrowUpRight
                  size={19}
                  strokeWidth={1.2}
                  className={`
                    mt-1 shrink-0 transition-all duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    ${item.featured ? "text-white/60" : "text-[#E63946]"}
                  `}
                />
              </div>
            </motion.div>
          ))}

          <div className="border-t border-[#3B0B12]/10" />
        </div>

        {/* Panchang note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mt-10 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start"
        >
          <p className="max-w-3xl text-xs leading-7 text-[#3B0B12]/45 sm:text-sm">
            Tithi timings are panchang timings and can vary slightly by location
            and calculation method. Kalpataru$&apos;s own puja and programme
            timings should be published separately once confirmed by the
            association.
          </p>

          <span className="font-serif text-lg italic text-[#D94672]/65">
            মা আসবেন
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionThree;
