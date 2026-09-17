"use client";

import { motion } from "motion/react";
import { CalendarDays, Flower2, Sun } from "lucide-react";

const SectionTwo = () => {
  return (
    <section
      id="saraswati-vasant-panchami"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
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
                The Day of Vasant Panchami
              </span>
            </div>

            <p className="mt-7 font-serif text-2xl italic text-[#D94672]/75 sm:text-3xl">
              বসন্ত পঞ্চমী
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
              A day that marks
              <span className="block italic text-[#E63946]">
                the arrival of spring.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
              Saraswati Puja is celebrated on Vasant Panchami, the fifth day of
              the bright fortnight of the Hindu month of Magha. The occasion is
              closely associated with the arrival of spring and carries a sense
              of freshness and renewal.
            </p>
          </motion.div>
        </div>

        {/* Main feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 overflow-hidden rounded-4xl border border-[#3B0B12]/10 bg-[#FFFDF8] lg:mt-20"
        >
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            {/* Date / calendar side */}
            <div className="relative overflow-hidden bg-[#fffaf2] p-8 sm:p-12 lg:p-16">
              {/* Decorative circles */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#F59E0B]/20" />

              <div className="pointer-events-none absolute -right-5 -top-5 h-36 w-36 rounded-full border border-[#E63946]/10" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#3B0B12]/10 bg-[#FFFDF8]">
                  <CalendarDays
                    size={22}
                    strokeWidth={1.15}
                    className="text-[#E63946]"
                  />
                </div>

                <div className="mt-10">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3B0B12]/40">
                    Saraswati Puja · 2027
                  </span>

                  <div className="mt-5 flex items-end gap-4">
                    <span className="font-serif text-[clamp(5rem,10vw,9rem)] leading-[0.75] tracking-tighter text-[#3B0B12]">
                      11
                    </span>

                    <div className="pb-1">
                      <p className="font-serif text-2xl text-[#E63946] sm:text-3xl">
                        February
                      </p>

                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/40">
                        Thursday
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-4">
                  <span className="h-px w-12 bg-[#F59E0B]" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3B0B12]/40">
                    Vasant Panchami
                  </span>
                </div>
              </div>
            </div>

            {/* Meaning side */}
            <div className="relative bg-[#3B0B12] p-8 sm:p-12 lg:p-16">
              <Flower2
                size={21}
                strokeWidth={1.1}
                className="absolute right-8 top-8 text-[#F59E0B] sm:right-12 sm:top-12"
              />

              <div className="flex h-full flex-col justify-between">
                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/40">
                    Vasant Panchami
                  </span>

                  <h3 className="mt-8 max-w-lg font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[0.9] tracking-tighter text-white">
                    Spring
                    <span className="block italic text-[#F59E0B]">
                      arrives.
                    </span>
                  </h3>
                </div>

                <div className="mt-16">
                  <div className="h-px w-full bg-white/10" />

                  <p className="mt-7 max-w-md text-sm leading-8 text-white/60 sm:text-base">
                    Vasant Panchami is traditionally regarded as a seasonal
                    turning point, marking the beginning of spring in the Indian
                    cultural calendar. Its connection with renewal gives the day
                    a distinctive character beyond the puja itself.
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <Sun
                      size={16}
                      strokeWidth={1.2}
                      className="text-[#F59E0B]"
                    />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">
                      Vasant · Spring
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Supporting details */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3 lg:mt-16">
          {[
            {
              label: "Vasant",
              bengali: "বসন্ত",
              text: "Spring — the season with which the occasion is traditionally associated.",
              accent: "#F59E0B",
            },
            {
              label: "Panchami",
              bengali: "পঞ্চমী",
              text: "The fifth lunar day of the bright fortnight on which Vasant Panchami falls.",
              accent: "#E63946",
            },
            {
              label: "2027",
              bengali: "২০২৭",
              text: "Saraswati Puja falls on Thursday, 11 February in 2027.",
              accent: "#D94672",
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-3xl border border-[#3B0B12]/10 bg-[#FFFDF8] p-7 sm:p-8"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-2xl text-[#3B0B12] sm:text-3xl">
                  {item.label}
                </h3>

                <span
                  className="font-serif text-lg italic"
                  style={{ color: `${item.accent}B3` }}
                >
                  {item.bengali}
                </span>
              </div>

              <div
                className="mt-5 h-px w-10"
                style={{ backgroundColor: item.accent }}
              />

              <p className="mt-5 text-sm leading-7 text-[#3B0B12]/55 sm:text-[15px] sm:leading-8">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="mt-12 border-t border-[#3B0B12]/10 pt-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl font-serif text-lg leading-8 text-[#3B0B12]/65 sm:text-xl">
              Vasant Panchami gives Saraswati Puja its place in the rhythm of
              the season.
            </p>

            <span className="font-serif text-lg italic text-[#D94672]/65">
              বসন্তের আগমন
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTwo;
