"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const highlights = [
  {
    number: "01",
    title: "Massive Turnout",
    accent: "Over 600 Participants",
    description:
      "A vibrant celebration with enthusiastic involvement from all age groups.",
  },
  {
    number: "02",
    title: "Full-Day Culinary Delight",
    accent: "From Morning Snacks to Dinner",
    description:
      "From morning snacks to a grand Bengali dinner, all meals were thoughtfully curated and served.",
  },
  {
    number: "03",
    title: "Engaging Activities & Games",
    accent: "Culture, Play & Togetherness",
    description:
      "The Cultural Event and chotobalar games kept the energy high and everyone joyfully involved.",
  },
  {
    number: "04",
    title: "Authentic Bengali Dinner",
    accent: "In Kalapata · Under the Open Sky",
    description:
      "A cultural and culinary experience that was both traditional and memorable.",
  },
  {
    number: "05",
    title: "Widely Appreciated",
    accent: "Highly Praised by Attendees",
    description:
      "Attendees lauded the arrangements, ambience, and spirit of the event.",
  },
];

const SectionTwo = () => {
  return (
    <section
      id="borsoboron-celebration"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#F59E0B]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/45 sm:text-[10px]">
                The Celebration
              </span>
            </div>

            <p className="mt-7 font-serif text-2xl italic text-[#D94672]/75">
              উৎসবের আনন্দ
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <h2 className="max-w-4xl font-serif text-[clamp(3rem,6vw,6rem)] font-normal leading-[0.9] tracking-tighter text-[#3B0B12]">
              A celebration
              <span className="block italic text-[#E63946]">
                shared together.
              </span>
            </h2>

            <div className="mt-8 h-px w-full bg-[#3B0B12]/10" />
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="mt-16 lg:mt-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.05,
              }}
              className="
                group
                border-t
                border-[#3B0B12]/10
                py-8
                sm:py-10
                lg:grid
                lg:grid-cols-[140px_minmax(0,0.9fr)_minmax(0,1.1fr)]
                lg:items-center
                lg:gap-12
                lg:py-12
              "
            >
              {/* Number + title */}
              <div className="flex items-center gap-5 lg:block">
                <span
                  className="
                    shrink-0
                    font-serif
                    text-5xl
                    font-normal
                    leading-none
                    tracking-tighter
                    text-[#E63946]
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                    sm:text-6xl
                    lg:text-7xl
                  "
                >
                  {item.number}
                </span>

                {/* Mobile title */}
                <div className="min-w-0 lg:hidden">
                  <h3 className="font-serif text-2xl leading-tight text-[#3B0B12] sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#F59E0B] sm:text-[10px]">
                    {item.accent}
                  </p>
                </div>
              </div>

              {/* Desktop title */}
              <div className="hidden lg:block">
                <h3 className="font-serif text-3xl leading-tight text-[#3B0B12] lg:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#F59E0B] sm:text-[10px]">
                  {item.accent}
                </p>
              </div>

              {/* Description */}
              <div
                className="
                  mt-7
                  flex
                  items-start
                  justify-between
                  gap-6
                  lg:mt-0
                  lg:border-l
                  lg:border-[#3B0B12]/10
                  lg:pl-10
                "
              >
                <p className="max-w-xl text-sm leading-7 text-[#3B0B12]/55 sm:text-base sm:leading-8">
                  {item.description}
                </p>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.3}
                  className="
                    mt-1
                    shrink-0
                    text-[#3B0B12]/20
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-[#E63946]
                  "
                />
              </div>
            </motion.div>
          ))}

          {/* Bottom border */}
          <div className="border-t border-[#3B0B12]/10" />
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mt-14 grid gap-6 pt-8 sm:grid-cols-[1fr_auto] sm:items-end"
        >
          <p className="max-w-2xl font-serif text-xl leading-8 text-[#3B0B12]/70 sm:text-2xl">
            From food and games to cultural celebration, Borshoboron brought the
            community together across the entire day.
          </p>

          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3B0B12]/35">
            Shubho Noboborsho
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTwo;
