"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const SectionFive = () => {
  return (
    <section className="relative overflow-hidden px-5 pb-28 pt-24 sm:px-8 sm:pb-32 sm:pt-28 lg:px-12 lg:pb-40 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        {/* Top divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="origin-left border-t border-[#3B0B12]/10"
        />

        <div className="grid gap-14 pt-12 sm:pt-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:pt-20">
          {/* Left */}
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
              <span className="h-px w-10 bg-[#E63946]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/45 sm:text-[10px]">
                A Celebration Remembered
              </span>
            </div>

            <p className="mt-7 font-serif text-2xl italic text-[#D94672]/75">
              স্মৃতিতে থেকে যায়
            </p>

            <p className="mt-8 max-w-sm text-sm leading-8 text-[#3B0B12]/50 sm:text-base">
              A celebration widely appreciated for its arrangements, ambience,
              and spirit.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-5xl font-serif text-[clamp(3rem,6.2vw,6.5rem)] font-normal leading-[0.9] tracking-tighter text-[#3B0B12]">
              A celebration
              <span className="block italic text-[#E63946]">remembered.</span>
            </h2>

            <div className="mt-10 h-px w-full bg-[#3B0B12]/10" />

            <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <p className="max-w-2xl text-sm leading-8 text-[#3B0B12]/60 sm:text-base">
                Attendees lauded the arrangements, ambience, and spirit of the
                event — a celebration that brought together culture, food,
                laughter, and community.
              </p>

              <ArrowUpRight
                size={22}
                strokeWidth={1.2}
                className="shrink-0 text-[#E63946]"
              />
            </div>
          </motion.div>
        </div>

        {/* Final statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 border-t border-[#3B0B12]/10 pt-10 sm:mt-24 sm:pt-12 lg:mt-28"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="max-w-3xl font-serif text-3xl leading-tight text-[#3B0B12] sm:text-4xl lg:text-5xl">
              Culture, celebration
              <span className="italic text-[#D94672]"> and community.</span>
            </h3>

            <span className="whitespace-nowrap font-serif text-xl italic text-[#3B0B12]/35">
              শুভ নববর্ষ
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionFive;
