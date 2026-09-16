"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const SectionOne = () => {
  const scrollToNight = () => {
    document
      .getElementById("kali-puja-night")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="kali-puja"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl"
        >
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-[#E63946]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/50 sm:text-[10px]">
              Kalpataru · Shyama Puja
            </span>
          </div>

          {/* Bengali identity */}
          <p className="font-serif text-2xl italic text-[#D94672]/75 sm:text-3xl">
            শ্যামা পূজা
          </p>

          {/* Heading */}
          <h1 className="mt-5 font-serif text-[clamp(3.8rem,8vw,7.5rem)] font-normal leading-[0.86] tracking-tighter text-[#3B0B12]">
            Kali Puja
            <span className="block italic text-[#E63946]">2026.</span>
          </h1>

          {/* Intro */}
          <div className="mt-8 max-w-3xl">
            <p className="font-serif text-xl leading-9 text-[#3B0B12]/80 sm:text-2xl">
              A Bengali night of devotion, remembrance and worship of Maa Kali.
            </p>

            <p className="mt-6 text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
              Kali Puja, also known as Shyama Puja, is observed on the Amavasya
              night during the Diwali period. In the Bengali tradition, the
              worship is centred on the Nishita period, the middle of the night.
            </p>
          </div>

          {/* Date */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#E63946] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
              Sunday · 8 November 2026
            </span>

            <span className="rounded-full border border-[#3B0B12]/10 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3B0B12]/55">
              22 Kartik 1433
            </span>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 sm:mt-16 lg:mt-20"
        >
          <div className="group relative overflow-hidden rounded-4xl border border-[#3B0B12]/10 bg-[#FFFDF8] p-2 shadow-[0_20px_60px_rgba(59,11,18,0.07)]">
            <div className="relative aspect-video overflow-hidden rounded-3xl">
              <Image
                src="/images/kali-puja/kali.jpeg"
                alt="Kali Puja"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 90vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />

              <div className="pointer-events-none absolute inset-0 bg-[#3B0B12]/8" />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between px-1">
            <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/35">
              Maa Kali
            </span>

            <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/35">
              Shyama Puja
            </span>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.button
          type="button"
          onClick={scrollToNight}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="
            absolute
            bottom-0
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            text-[#3B0B12]/40
            transition-colors
            hover:text-[#E63946]
            sm:flex
          "
          aria-label="Scroll to Shyama Puja"
        >
          <span className="text-[8px] font-semibold uppercase tracking-[0.28em]">
            Continue
          </span>

          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={16} strokeWidth={1.2} />
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
};

export default SectionOne;
