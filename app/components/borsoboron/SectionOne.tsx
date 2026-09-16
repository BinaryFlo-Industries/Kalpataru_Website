"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const SectionOne = () => {
  const scrollToCelebration = () => {
    document
      .getElementById("borsoboron-celebration")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="borsoboron"
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
              Kalpataru · Cultural Celebration
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-[clamp(3.8rem,8vw,7.5rem)] font-normal leading-[0.86] tracking-tighter text-[#3B0B12]">
            Borsoboron
            <span className="block italic text-[#E63946]">Utsav.</span>
          </h1>

          {/* Bengali mark */}
          <div className="mt-7 flex items-center gap-4">
            <span className="font-serif text-2xl text-[#3B0B12]/25">
              শুভ নববর্ষ
            </span>

            <span className="h-px w-16 bg-[#3B0B12]/10" />
          </div>

          {/* Intro copy */}
          <div className="mt-8 max-w-3xl">
            <p className="font-serif text-xl leading-9 text-[#3B0B12]/80 sm:text-2xl">
              A traditional and festive welcome to the Bengali New Year,
              embracing heritage through music, dance, and laughter.
            </p>

            <p className="mt-6 text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
              Borshoboron Utsav is our joyful welcome of the Bengali New Year,
              steeped in tradition and festivity. Dressed in vibrant hues, the
              community gathers with music, dance, and heartfelt greetings of
              Shubho Noboborsho. It’s a celebration of new beginnings, cultural
              pride, and collective joy that sets a beautiful tone for the year
              ahead.
            </p>
          </div>

          {/* CTA */}
          <motion.button
            type="button"
            onClick={scrollToCelebration}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="
              group
              mt-9
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#E63946]
              px-6
              py-3.5
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white
              transition-all
              duration-300
              hover:bg-[#3B0B12]
              hover:shadow-[0_14px_35px_rgba(59,11,18,0.12)]
            "
          >
            Explore Borsoboron
            <ArrowDown
              size={15}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </motion.button>
        </motion.div>

        {/* Large image */}
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
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-4xl
              border
              border-[#3B0B12]/10
              bg-[#FFFDF8]
              p-2
              shadow-[0_20px_60px_rgba(59,11,18,0.07)]
            "
          >
            <div className="relative aspect-video overflow-hidden rounded-3xl">
              <Image
                src="/images/borsoboron/borshobaran.jpeg"
                alt="Borsoboron Utsav"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 90vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />

              <div className="pointer-events-none absolute inset-0 bg-[#3B0B12]/[0.035]" />
            </div>
          </div>

          {/* Image notation */}
          <div className="mt-5 flex items-center justify-between px-1">
            <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/35">
              Borsoboron Utsav
            </span>

            <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/35">
              Bengali New Year
            </span>
          </div>
        </motion.div>

        {/* Bottom scroll cue */}
        <motion.button
          type="button"
          onClick={scrollToCelebration}
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
          aria-label="Scroll to Borsoboron celebration"
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
