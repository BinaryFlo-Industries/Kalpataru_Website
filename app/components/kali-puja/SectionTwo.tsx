"use client";

import { motion } from "motion/react";
import { Moon, Sparkles } from "lucide-react";

const SectionTwo = () => {
  return (
    <section
      id="kali-puja-night"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
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
                The Night of Shyama Puja
              </span>
            </div>

            <p className="mt-7 font-serif text-2xl italic text-[#D94672]/75">
              অমাবস্যার রাত
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
              When the night
              <span className="block italic text-[#E63946]">
                becomes sacred.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
              In the Bengali tradition, Kali Puja is observed on Amavasya and is
              centred on the Nishita period — the middle of the night. This
              midnight focus is one of the defining characteristics of Shyama
              Puja.
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
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left */}
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#3B0B12]/10 bg-[#fffaf2]">
                <Moon size={23} strokeWidth={1.2} className="text-[#3B0B12]" />
              </div>

              <h3 className="mt-9 max-w-xl font-serif text-3xl leading-tight text-[#3B0B12] sm:text-4xl lg:text-5xl">
                Amavasya
                <span className="italic text-[#E63946]"> to Nishita.</span>
              </h3>

              <p className="mt-7 max-w-xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
                Kali Puja is not simply an evening observance. The Bengali
                tradition identifies the night of Amavasya and, specifically,
                the Nishita period as central to the worship of Maa Kali.
              </p>

              <div className="mt-10 flex items-center gap-3">
                <span className="h-px w-12 bg-[#E63946]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3B0B12]/40">
                  Shyama Puja
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="relative border-t border-[#3B0B12]/10 bg-[#3B0B12] p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
              <div className="absolute right-8 top-8 sm:right-12 sm:top-12">
                <Sparkles
                  size={20}
                  strokeWidth={1.1}
                  className="text-[#F59E0B]"
                />
              </div>

              <div className="flex h-full flex-col justify-between">
                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/40">
                    2026
                  </span>

                  <p className="mt-5 font-serif text-2xl italic text-[#F59E0B]">
                    ৮ নভেম্বর
                  </p>

                  <h3 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl">
                    Sunday,
                    <span className="block italic text-[#F59E0B]">
                      8 November.
                    </span>
                  </h3>
                </div>

                <div className="mt-14">
                  <div className="h-px w-full bg-white/10" />

                  <div className="mt-7 grid gap-7 sm:grid-cols-2">
                    <div>
                      <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/35">
                        Amavasya Begins
                      </span>

                      <p className="mt-2 font-serif text-xl text-white">
                        11:27 AM
                      </p>

                      <p className="mt-1 text-[10px] text-white/35">
                        8 November 2026
                      </p>
                    </div>

                    <div>
                      <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/35">
                        Amavasya Ends
                      </span>

                      <p className="mt-2 font-serif text-xl text-white">
                        12:31 PM
                      </p>

                      <p className="mt-1 text-[10px] text-white/35">
                        9 November 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl text-xs leading-7 text-[#3B0B12]/45 sm:text-sm">
            The Amavasya timings above are panchang timings. The exact Kalpataru
            Puja schedule should be added separately once confirmed by the
            association.
          </p>

          <span className="font-serif text-lg italic text-[#D94672]/65">
            মা শ্যামা
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTwo;
