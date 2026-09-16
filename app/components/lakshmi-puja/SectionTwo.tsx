"use client";

import { motion } from "motion/react";
import { Moon, Sparkles } from "lucide-react";

const SectionTwo = () => {
  return (
    <section
      id="lakshmi-puja-night"
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
                The Night of Kojagari
              </span>
            </div>

            <p className="mt-7 font-serif text-2xl italic text-[#D94672]/75 sm:text-3xl">
              কে জাগো?
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
              Under the
              <span className="block italic text-[#E63946]">full moon.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
              Kojagari Lakshmi Puja is observed on the Ashwin full moon. The
              name Kojagari is associated with the traditional question, “Who is
              awake?” — giving the night its distinctive character in Bengali
              observance.
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
            {/* Left */}
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#3B0B12]/10 bg-[#fffaf2]">
                <Moon size={23} strokeWidth={1.15} className="text-[#3B0B12]" />
              </div>

              <h3 className="mt-9 max-w-xl font-serif text-3xl leading-tight text-[#3B0B12] sm:text-4xl lg:text-5xl">
                Kojagari
                <span className="italic text-[#E63946]"> Purnima.</span>
              </h3>

              <p className="mt-7 max-w-xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
                The full-moon night of Ashwin is at the heart of this Bengali
                celebration. It is a night associated with Maa Lakshmi, the glow
                of the full moon and the tradition of staying awake.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <span className="h-px w-12 bg-[#E63946]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3B0B12]/40">
                  Ashwin Purnima
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="relative border-t border-[#3B0B12]/10 bg-[#3B0B12] p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
              <Sparkles
                size={20}
                strokeWidth={1.1}
                className="absolute right-8 top-8 text-[#F59E0B] sm:right-12 sm:top-12"
              />

              <div className="flex h-full flex-col justify-between">
                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/40">
                    The Meaning
                  </span>

                  <p className="mt-8 font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[0.9] tracking-tighter text-white">
                    Who
                    <span className="block italic text-[#F59E0B]">
                      is awake?
                    </span>
                  </p>
                </div>

                <div className="mt-16">
                  <div className="h-px w-full bg-white/10" />

                  <p className="mt-7 max-w-md text-sm leading-8 text-white/60 sm:text-base">
                    Kojagari — often understood through the phrase “Who is
                    awake?” — gives the festival its name and its connection
                    with the night-long observance.
                  </p>

                  <p className="mt-8 font-serif text-xl italic text-[#D94672]">
                    কোজাগরী
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            delay: 0.12,
          }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl font-serif text-xl leading-8 text-[#3B0B12]/65 sm:text-2xl">
            A full-moon night where Bengali tradition, devotion and the presence
            of Maa Lakshmi come together.
          </p>

          <span className="font-serif text-lg italic text-[#D94672]/65">
            শুভ কোজাগরী লক্ষ্মী পূজা
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTwo;
