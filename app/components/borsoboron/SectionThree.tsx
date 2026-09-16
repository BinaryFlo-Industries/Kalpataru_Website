"use client";

import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

const moments = [
  {
    number: "01",
    label: "Morning",
    title: "A festive beginning.",
    description: "Morning snacks marked the beginning of the celebration.",
  },
  {
    number: "02",
    label: "Throughout the Day",
    title: "Culture, games & togetherness.",
    description:
      "The Cultural Event and chotobalar games kept the energy high and everyone joyfully involved.",
  },
  {
    number: "03",
    label: "Evening",
    title: "A grand Bengali dinner.",
    description:
      "The celebration continued with a grand Bengali dinner, thoughtfully curated and served.",
  },
  {
    number: "04",
    label: "Under the Open Sky",
    title: "Tradition served together.",
    description:
      "The authentic Bengali dinner was served in Kalapata, under the open sky, creating a traditional and memorable experience.",
  },
];

const SectionThree = () => {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#E63946]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/45 sm:text-[10px]">
                From Morning to Dinner
              </span>
            </div>

            <p className="mt-7 font-serif text-2xl italic text-[#D94672]/75">
              সকাল থেকে সন্ধ্যা
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <h2 className="max-w-4xl font-serif text-[clamp(3rem,6vw,6rem)] font-normal leading-[0.9] tracking-tighter text-[#3B0B12]">
              A day filled
              <span className="block italic text-[#E63946]">
                with celebration.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
              From the first refreshments of the day to a traditional Bengali
              dinner under the open sky, Borshoboron unfolded as a celebration
              shared across the community.
            </p>
          </motion.div>
        </div>

        {/* Journey */}
        <div className="relative mt-20 lg:mt-24">
          {/* Connecting line */}
          <div className="absolute left-4.75 top-0 hidden h-full w-px bg-[#3B0B12]/10 sm:block" />

          <div className="space-y-0">
            {moments.map((moment, index) => (
              <motion.div
                key={moment.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  grid
                  gap-6
                  border-t
                  border-[#3B0B12]/10
                  py-10
                  sm:grid-cols-[64px_0.65fr_1.35fr]
                  sm:gap-8
                  sm:py-12
                  lg:grid-cols-[80px_0.8fr_1.2fr]
                  lg:gap-12
                  lg:py-14
                "
              >
                {/* Marker */}
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#3B0B12]/15 bg-[#fffaf2]">
                  <span className="text-[9px] font-semibold tracking-widest text-[#E63946]">
                    {moment.number}
                  </span>
                </div>

                {/* Label + title */}
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">
                    {moment.label}
                  </p>

                  <h3 className="mt-3 font-serif text-2xl leading-tight text-[#3B0B12] sm:text-3xl lg:text-4xl">
                    {moment.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="flex items-start gap-6 sm:border-l sm:border-[#3B0B12]/10 sm:pl-8 lg:pl-10">
                  <p className="max-w-xl text-sm leading-7 text-[#3B0B12]/55 sm:text-base sm:leading-8">
                    {moment.description}
                  </p>

                  <ArrowDownRight
                    size={19}
                    strokeWidth={1.2}
                    className="
                      mt-1
                      shrink-0
                      text-[#3B0B12]/15
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:translate-y-1
                      group-hover:text-[#E63946]
                    "
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-[#3B0B12]/10" />
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-2xl font-serif text-xl leading-8 text-[#3B0B12]/70 sm:text-2xl">
            Food, culture, play and community came together across one joyful
            celebration.
          </p>

          <span className="font-serif text-lg italic text-[#D94672]/65">
            শুভ নববর্ষ
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionThree;
