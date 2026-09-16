"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const SectionFour = () => {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-4xl border border-[#3B0B12]/10 bg-[#FFFDF8]">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left editorial panel */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col justify-between p-8 sm:p-12 lg:p-16"
            >
              <div>
                {/* Eyebrow */}
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-[#F59E0B]" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/45 sm:text-[10px]">
                    Under the Open Sky
                  </span>
                </div>

                {/* Bengali decorative text */}
                <p className="mt-8 font-serif text-2xl italic text-[#D94672]/75">
                  নতুন বছরের স্বাদ
                </p>

                {/* Heading */}
                <h2 className="mt-6 font-serif text-[clamp(2.8rem,5vw,5.5rem)] font-normal leading-[0.9] tracking-tighter text-[#3B0B12]">
                  Bengali
                  <span className="block italic text-[#E63946]">
                    tradition,
                  </span>
                  served together.
                </h2>
              </div>

              {/* Description */}
              <div className="mt-14 lg:mt-20">
                <div className="mb-6 h-px w-full bg-[#3B0B12]/10" />

                <p className="max-w-md text-sm leading-8 text-[#3B0B12]/60 sm:text-base">
                  The celebration came together around an authentic Bengali
                  dinner, served in Kalapata under the open sky — a cultural and
                  culinary experience that was both traditional and memorable.
                </p>
              </div>
            </motion.div>

            {/* Right feature panel */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative border-t border-[#3B0B12]/10 lg:border-l lg:border-t-0"
            >
              <div className="flex h-full min-h-107.5 flex-col justify-between p-8 sm:p-12 lg:min-h-140 lg:p-16">
                {/* Top label */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3B0B12]/35">
                    The Bengali Dinner
                  </span>

                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.2}
                    className="text-[#E63946] transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1"
                  />
                </div>

                {/* Main content */}
                <div className="mt-16 lg:mt-0">
                  <h3 className="max-w-xl font-serif text-3xl leading-tight text-[#3B0B12] sm:text-4xl lg:text-5xl">
                    Authentic Bengali Dinner
                  </h3>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[#3B0B12]/10 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#3B0B12]/55">
                      In Kalapata
                    </span>

                    <span className="rounded-full border border-[#3B0B12]/10 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#3B0B12]/55">
                      Under the Open Sky
                    </span>
                  </div>

                  <p className="mt-8 max-w-lg text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
                    A cultural and culinary experience that was both traditional
                    and memorable.
                  </p>
                </div>

                {/* Bottom detail */}
                <div className="mt-16 lg:mt-12">
                  <div className="h-px w-20 bg-[#E63946]" />

                  <p className="mt-5 max-w-sm font-serif text-lg leading-7 text-[#3B0B12]/65">
                    A traditional Bengali experience, shared together under the
                    open sky.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3B0B12]/35">
            Culture · Food · Community
          </span>

          <span className="font-serif text-xl italic text-[#D94672]/70">
            শুভ নববর্ষ
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionFour;
