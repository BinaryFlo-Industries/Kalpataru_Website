"use client";

import { motion } from "motion/react";
import { Moon, Sparkles, Wind } from "lucide-react";

const SectionTwo = () => {
  return (
    <section
      id="rong-milanti-dol"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#FFD166]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#D94672]/[0.07] blur-3xl"
      />

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
              <span className="h-px w-10 bg-[#E63946]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/45 sm:text-[10px]">
                The Day of Dol
              </span>
            </div>

            <p className="mt-7 font-serif text-2xl italic text-[#D94672]/75 sm:text-3xl">
              দোল পূর্ণিমা
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
              A spring festival
              <span className="block italic text-[#E63946]">in colour.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
              In Bengal, the festival of colours takes on a distinct cultural
              character as Dol Jatra or Dol Purnima. Celebrated on the full moon
              of Phalgun, it brings together the arrival of spring, devotion,
              music and the gentle colour of abir.
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
          className="relative mt-16 overflow-hidden rounded-4xl border border-[#3B0B12]/10 bg-[#FFFDF8] lg:mt-20"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* Phalgun / full moon visual */}
            <div className="relative flex min-h-110 items-center justify-center overflow-hidden bg-[#FFF7E7] p-10 sm:min-h-125 lg:min-h-140">
              {/* Large moon */}
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F59E0B]/20 sm:h-80 sm:w-80" />

              <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD166]/20 sm:h-60 sm:w-60" />

              <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFFDF8] shadow-[0_10px_50px_rgba(245,158,11,0.12)]" />

              {/* Decorative orbit */}
              <div className="absolute left-[17%] top-[20%] h-2 w-2 rounded-full bg-[#E63946]/35" />
              <div className="absolute right-[18%] top-[27%] h-1.5 w-1.5 rounded-full bg-[#D94672]/40" />
              <div className="absolute bottom-[24%] left-[21%] h-1.5 w-1.5 rounded-full bg-[#F59E0B]/50" />
              <div className="absolute bottom-[20%] right-[23%] h-2 w-2 rounded-full bg-[#E63946]/25" />

              <div className="relative z-10 text-center">
                <Moon
                  size={22}
                  strokeWidth={1}
                  className="mx-auto text-[#E63946]"
                />

                <p className="mt-7 font-serif text-5xl leading-none text-[#3B0B12] sm:text-6xl">
                  পূর্ণিমা
                </p>

                <div className="mx-auto mt-6 h-px w-12 bg-[#F59E0B]" />

                <p className="mt-5 font-serif text-2xl italic text-[#D94672]/75">
                  Phalgun
                </p>

                <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.28em] text-[#3B0B12]/35">
                  The full moon of spring
                </p>
              </div>
            </div>

            {/* Story */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#E63946]">
                Phalgun · Purnima
              </span>

              <h3 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-[#3B0B12] sm:text-4xl lg:text-5xl">
                When spring
                <span className="block italic text-[#E63946]">
                  arrives in colour.
                </span>
              </h3>

              <p className="mt-7 max-w-xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
                Dol Purnima falls on the full moon of the Bengali month of
                Phalgun. The festival arrives at a beautiful seasonal threshold,
                when winter gives way to spring and Bengal&apos;s cultural
                landscape begins to fill with colour, music and celebration.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-8 text-[#3B0B12]/45 sm:text-[15px]">
                In 2027, Dol Purnima falls on Monday, 22 March — bringing this
                spring festival of colour to the Kalpataru calendar.
              </p>

              {/* Date */}
              <div className="mt-10 border-t border-[#3B0B12]/10 pt-6">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <p className="font-serif text-4xl leading-none text-[#3B0B12]">
                      22
                    </p>

                    <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3B0B12]/40">
                      March · 2027
                    </p>
                  </div>

                  <p className="font-serif text-lg italic text-[#D94672]/70">
                    Monday
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three cultural ideas */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3 lg:mt-16">
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-3xl border border-[#3B0B12]/10 bg-[#FFFDF8] p-7 sm:p-8"
          >
            <Wind size={20} strokeWidth={1.2} className="text-[#E63946]" />

            <h3 className="mt-7 font-serif text-2xl text-[#3B0B12] sm:text-3xl">
              Spring
            </h3>

            <div className="mt-4 h-px w-10 bg-[#E63946]" />

            <p className="mt-5 text-sm leading-7 text-[#3B0B12]/55 sm:text-[15px] sm:leading-8">
              Dol arrives with the Bengali spring, giving the festival its
              unmistakable sense of renewal, warmth and colour.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-3xl border border-[#3B0B12]/10 bg-[#FFFDF8] p-7 sm:p-8"
          >
            <Moon size={20} strokeWidth={1.2} className="text-[#F59E0B]" />

            <h3 className="mt-7 font-serif text-2xl text-[#3B0B12] sm:text-3xl">
              Purnima
            </h3>

            <div className="mt-4 h-px w-10 bg-[#F59E0B]" />

            <p className="mt-5 text-sm leading-7 text-[#3B0B12]/55 sm:text-[15px] sm:leading-8">
              The celebration is observed on the full moon of Phalgun, giving
              Dol its place within the Bengali lunar calendar.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-3xl border border-[#3B0B12]/10 bg-[#FFFDF8] p-7 sm:p-8"
          >
            <Sparkles size={20} strokeWidth={1.2} className="text-[#D94672]" />

            <h3 className="mt-7 font-serif text-2xl text-[#3B0B12] sm:text-3xl">
              Abir
            </h3>

            <div className="mt-4 h-px w-10 bg-[#D94672]" />

            <p className="mt-5 text-sm leading-7 text-[#3B0B12]/55 sm:text-[15px] sm:leading-8">
              Colour becomes part of the celebration through abir, lending Dol
              its gentle and distinctly Bengali visual character.
            </p>
          </motion.article>
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="mt-14 border-t border-[#3B0B12]/10 pt-8 sm:mt-16"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-3xl font-serif text-lg leading-8 text-[#3B0B12]/65 sm:text-xl">
              A festival shaped by the rhythm of the Bengali calendar, the
              arrival of spring and the colours of Dol.
            </p>

            <span className="font-serif text-lg italic text-[#D94672]/65">
              বসন্তের দোল
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTwo;
