"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const SectionOne = () => {
  const scrollToExperience = () => {
    document
      .getElementById("pathshala-experience")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pathshala"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          {/* LEFT — Editorial introduction */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[#E63946]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/50 sm:text-[10px]">
                Kalpataru · Cultural Initiative
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-[clamp(3.8rem,7.2vw,7.2rem)] font-normal leading-[0.86] tracking-tighter text-[#3B0B12]">
              Chutir
              <span className="block italic text-[#E63946]">Pathshala.</span>
            </h1>

            {/* Bengali mark */}
            <div className="mt-7 flex items-center gap-4">
              <span className="font-serif text-2xl text-[#3B0B12]/25">
                ছুটির পাঠশালা
              </span>

              <span className="h-px w-16 bg-[#3B0B12]/10" />
            </div>

            {/* Main copy */}
            <p className="mt-8 max-w-2xl font-serif text-xl leading-9 text-[#3B0B12]/80 sm:text-2xl">
              A space where children, families and the wider community came
              together to learn Bengali and reconnect with their cultural roots.
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
              The initiative brought language learning, songs, stories and art
              together, creating an environment for cultural learning and
              community bonding.
            </p>

            {/* CTA */}
            <motion.button
              type="button"
              onClick={scrollToExperience}
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
              Explore Pathshala
              <ArrowDown
                size={15}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </motion.button>
          </motion.div>

          {/* RIGHT — Image composition */}
          <motion.div
            initial={{ opacity: 0, x: 35, rotate: 1.5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* Main image */}
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
              <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
                <Image
                  src="/images/pathshala/1.jpeg"
                  alt="Children and families participating in Kalpataru Pathshala"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="pointer-events-none absolute inset-0 bg-[#3B0B12]/[0.035]" />

                {/* Image label */}
                <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-[#FFFDF8]/90 px-4 py-2 backdrop-blur-sm">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/65">
                    Pathshala · 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Floating information card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.75,
              }}
              className="
                absolute
                -bottom-7
                -left-3
                w-[78%]
                rounded-3xl
                border
                border-[#3B0B12]/10
                bg-[#FFFDF8]
                p-5
                shadow-[0_18px_50px_rgba(59,11,18,0.09)]
                sm:-left-6
                sm:p-6
              "
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#E63946]">
                    The beginning
                  </p>

                  <p className="mt-2 font-serif text-2xl tracking-[-0.02em] text-[#3B0B12]">
                    10 May 2025
                  </p>

                  <p className="mt-1 text-[10px] text-[#3B0B12]/45">
                    Initial duration · 1 month
                  </p>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E63946]/20 text-[#E63946]">
                  <ArrowUpRight size={15} strokeWidth={1.3} />
                </span>
              </div>
            </motion.div>

            {/* Small corner notation */}
            <div className="mt-12 flex items-center justify-between px-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/35">
              <span>Kalpataru</span>

              <span>Language · Culture · Community</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom scroll cue */}
        <motion.button
          type="button"
          onClick={scrollToExperience}
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
          aria-label="Scroll to Pathshala experience"
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
