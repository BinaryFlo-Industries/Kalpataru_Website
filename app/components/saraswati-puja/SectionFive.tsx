"use client";

import { motion } from "motion/react";
import { ArrowDown, CalendarDays, Sparkles } from "lucide-react";

const SectionFive = () => {
  return (
    <section
      id="saraswati-puja-2027"
      className="relative overflow-hidden px-5 pb-28 pt-24 sm:px-8 sm:pb-32 sm:pt-28 lg:px-12 lg:pb-40 lg:pt-32"
    >
      {/* Decorative background typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-20 select-none font-serif text-[11rem] leading-none text-[#E63946]/[0.035] sm:text-[16rem] lg:-right-8 lg:text-[22rem]"
      >
        ২০২৭
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-10 bg-[#E63946]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/45 sm:text-[10px]">
            Saraswati Puja · 2027
          </span>
        </motion.div>

        {/* Main closing */}
        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="font-serif text-2xl italic text-[#D94672]/70 sm:text-3xl">
              সরস্বতী পূজা · ২০২৭
            </p>

            <h2 className="mt-6 max-w-5xl font-serif text-[clamp(3.4rem,7vw,7rem)] font-normal leading-[0.88] tracking-tighter text-[#3B0B12]">
              A new day of
              <span className="block italic text-[#E63946]">celebration.</span>
            </h2>

            <p className="mt-9 max-w-2xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
              This Vasant Panchami, Kalpataru comes together once again to
              honour Maa Saraswati and celebrate the spirit of learning,
              creativity and culture.
            </p>
          </motion.div>

          {/* Date card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-4xl border border-[#3B0B12]/10 bg-[#FFFDF8] p-7 shadow-[0_20px_60px_rgba(59,11,18,0.06)] sm:p-9"
          >
            <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-[#FFD166]/20" />

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E63946]/10 text-[#E63946]">
                  <CalendarDays size={17} strokeWidth={1.25} />
                </div>

                <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3B0B12]/45">
                  Save the date
                </span>
              </div>

              <p className="mt-8 font-serif text-5xl leading-none tracking-tight text-[#3B0B12] sm:text-6xl">
                11
              </p>

              <p className="mt-3 font-serif text-2xl italic text-[#E63946]">
                February 2027
              </p>

              <div className="mt-6 h-px w-full bg-[#3B0B12]/10" />

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-[#3B0B12]/45">Thursday</span>

                <span className="font-serif text-lg italic text-[#D94672]/70">
                  Vasant Panchami
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Event details / future-ready area */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            delay: 0.12,
          }}
          className="mt-16 overflow-hidden rounded-4xl bg-[#3B0B12] sm:mt-20"
        >
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="p-8 sm:p-12 lg:p-14">
              <div className="flex items-center gap-3">
                <Sparkles
                  size={17}
                  strokeWidth={1.25}
                  className="text-[#FFD166]"
                />

                <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#FFD166]">
                  Join the celebration
                </span>
              </div>

              <h3 className="mt-5 max-w-3xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                Come together for
                <span className="block italic text-[#FFD166]">
                  Saraswati Puja 2027.
                </span>
              </h3>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-white/55 sm:text-base">
                Mark your calendar and be part of another beautiful occasion of
                devotion, culture and community at Kalpataru.
              </p>
            </div>

            <div className="border-t border-white/10 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-14">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#FFD166]/30 text-[#FFD166]">
                <ArrowDown size={20} strokeWidth={1.15} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final closing line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="mt-16 text-center sm:mt-20"
        >
          <p className="font-serif text-2xl leading-9 text-[#3B0B12]/70 sm:text-3xl sm:leading-10">
            May knowledge illuminate every path,
            <span className="block italic text-[#E63946]">
              and every celebration bring us closer.
            </span>
          </p>

          <div className="mx-auto mt-8 h-px w-12 bg-[#F59E0B]" />

          <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/35">
            Kalpataru Cultural Association · Pune
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionFive;
