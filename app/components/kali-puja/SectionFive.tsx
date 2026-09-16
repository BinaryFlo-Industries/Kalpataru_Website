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

        {/* Main closing composition */}
        <div className="grid gap-12 pt-12 sm:pt-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:pt-20">
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
              <span className="h-px w-10 bg-[#F59E0B]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/45 sm:text-[10px]">
                Shyama Puja
              </span>
            </div>

            <p className="mt-7 font-serif text-2xl italic text-[#D94672]/75">
              জয় মা কালী
            </p>

            <p className="mt-8 max-w-sm text-sm leading-8 text-[#3B0B12]/50 sm:text-base">
              A night rooted in Bengali tradition, devotion and the worship of
              Maa Kali.
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
            <h2 className="max-w-4xl font-serif text-[clamp(3rem,6vw,6rem)] font-normal leading-[0.9] tracking-tighter text-[#3B0B12]">
              A night to
              <span className="block italic text-[#E63946]">remember.</span>
            </h2>

            <div className="mt-10 h-px w-full bg-[#3B0B12]/10" />

            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#3B0B12]/60 sm:text-base">
              Shyama Puja brings together the stillness of the Amavasya night
              with prayer, worship and the enduring cultural traditions of
              Bengal.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-12 bg-[#E63946]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3B0B12]/40">
                Maa Kali · 2026
              </span>

              <ArrowUpRight
                size={18}
                strokeWidth={1.2}
                className="text-[#E63946]"
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
              Tradition lives
              <span className="italic text-[#D94672]"> when it is shared.</span>
            </h3>

            <span className="whitespace-nowrap font-serif text-xl italic text-[#3B0B12]/35">
              শুভ শ্যামা পূজা
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionFive;
