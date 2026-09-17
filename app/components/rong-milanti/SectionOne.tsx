"use client";

import { motion } from "motion/react";
import { ArrowDown, CalendarDays, Sparkles } from "lucide-react";
import Image from "next/image";

const SectionOne = () => {
  return (
    <section
      id="rong-milanti-intro"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-[#E63946]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/45 sm:text-[10px]">
              Kalpataru · Rong Milanti
            </span>
          </motion.div>

          {/* Bengali identity */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 font-serif text-2xl italic text-[#D94672]/75 sm:text-3xl"
          >
            রঙ মিলন্তি
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 font-serif text-[clamp(4rem,9vw,8rem)] font-normal leading-[0.82] tracking-tighter text-[#3B0B12]"
          >
            Rong Milanti
            <span className="block italic text-[#E63946]">2027.</span>
          </motion.h1>

          {/* Intro copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 max-w-2xl"
          >
            <p className="font-serif text-xl leading-8 text-[#3B0B12]/75 sm:text-2xl sm:leading-9">
              A burst of colours, songs, and shared joy —
              <span className="text-[#E63946]"> Bengal&apos;s Dol Utsav</span>{" "}
              brings spring to life with grace and celebration.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#3B0B12]/50 sm:text-base">
              In Bengal, Holi takes the form of Dol Jatra or Dol Purnima, a
              celebration woven together with devotion, music, dance and the
              joyful play of abir. Rong Milanti carries that spirit into a
              shared celebration of colour, culture and community.
            </p>
          </motion.div>

          {/* Date / festival information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <div className="flex items-center gap-3 rounded-full border border-[#3B0B12]/10 bg-[#FFFDF8] px-4 py-2.5 shadow-[0_8px_25px_rgba(59,11,18,0.04)]">
              <CalendarDays
                size={15}
                strokeWidth={1.3}
                className="text-[#E63946]"
              />

              <span className="text-xs font-medium text-[#3B0B12]/65 sm:text-sm">
                Monday · 22 March 2027
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-[#F59E0B]/20 bg-[#F59E0B]/8 px-4 py-2.5">
              <Sparkles
                size={15}
                strokeWidth={1.3}
                className="text-[#F59E0B]"
              />

              <span className="text-xs font-medium text-[#3B0B12]/65 sm:text-sm">
                Dol Purnima
              </span>
            </div>
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 sm:mt-16 lg:mt-20"
        >
          <div className="rounded-4xl border border-[#3B0B12]/10 bg-[#FFFDF8] p-2 shadow-[0_25px_70px_rgba(59,11,18,0.07)]">
            <div className="relative aspect-video overflow-hidden rounded-3xl bg-[#F59E0B]/10">
              <Image
                src="/images/rong-milanti/Rongmilanti.jpeg"
                alt="Rong Milanti at Kalpataru Cultural Association"
                fill
                sizes="(min-width: 1280px) 1152px, 100vw"
                className="h-full w-full object-cover"
              />

              {/* Soft colour wash */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#3B0B12]/25 via-transparent to-[#F59E0B]/10" />

              {/* Image label */}
              <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                <div className="rounded-2xl border border-white/20 bg-[#FFFDF8]/90 px-4 py-3 backdrop-blur-md">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#3B0B12]/45">
                    Rong Milanti
                  </p>

                  <p className="mt-1 font-serif text-sm italic text-[#3B0B12]/75">
                    Dol Utsav · Bengal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.8,
          }}
          className="mt-10 flex items-center justify-center sm:mt-12"
        >
          <a
            href="#rong-milanti-dol"
            className="group flex flex-col items-center gap-3 text-[#3B0B12]/35 transition-colors hover:text-[#E63946]"
          >
            <span className="text-[8px] font-semibold uppercase tracking-[0.3em]">
              Discover Dol
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3B0B12]/10 transition-all duration-300 group-hover:border-[#E63946]/30 group-hover:bg-[#E63946]/5">
              <ArrowDown
                size={15}
                strokeWidth={1.2}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionOne;
