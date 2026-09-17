"use client";

import { motion } from "motion/react";
import { ArrowUpRight, CalendarDays, Sparkles } from "lucide-react";

const SectionFive = () => {
  return (
    <section
      id="rong-milanti-2027"
      className="relative overflow-hidden px-5 pb-28 pt-24 sm:px-8 sm:pb-32 sm:pt-28 lg:px-12 lg:pb-40 lg:pt-32"
    >
      {/* Decorative background colour fields */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#E63946]/6 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-112 w-md rounded-full bg-[#F59E0B]/[0.07] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[14rem] leading-none text-[#D94672]/2.5 sm:text-[20rem] lg:text-[28rem]"
      >
        রঙ
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
            Rong Milanti · 2027
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 max-w-5xl sm:mt-12"
        >
          <p className="font-serif text-2xl italic text-[#D94672]/70 sm:text-3xl">
            রঙে রঙে মিলন
          </p>

          <h2 className="mt-6 font-serif text-[clamp(4rem,9vw,8rem)] font-normal leading-[0.82] tracking-tighter text-[#3B0B12]">
            Let the colours
            <span className="block italic text-[#E63946]">return.</span>
          </h2>

          <p className="mt-9 max-w-2xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
            This Dol Purnima, come together once again for Rong Milanti — a
            celebration inspired by Bengal&apos;s spring, colours, music and
            enduring spirit of community.
          </p>
        </motion.div>

        {/* Date feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 overflow-hidden rounded-4xl border border-[#3B0B12]/10 bg-[#FFFDF8] shadow-[0_25px_70px_rgba(59,11,18,0.06)] sm:mt-16"
        >
          <div className="grid lg:grid-cols-[1fr_0.8fr]">
            {/* Date */}
            <div className="relative overflow-hidden bg-[#E63946] p-8 sm:p-12 lg:p-16">
              {/* Background typography */}
              <div
                aria-hidden="true"
                className="absolute -bottom-12 -right-5 select-none font-serif text-[12rem] leading-none text-white/8 sm:text-[17rem]"
              >
                22
              </div>

              {/* Decorative circles */}
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-[#FFD166]/25" />

              <div className="absolute bottom-8 left-8 h-16 w-16 rounded-full border border-white/10" />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <CalendarDays
                    size={18}
                    strokeWidth={1.2}
                    className="text-[#FFD166]"
                  />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/65">
                    Save the date
                  </span>
                </div>

                <div className="mt-12">
                  <p className="font-serif text-[clamp(7rem,14vw,11rem)] leading-[0.72] tracking-tighter text-white">
                    22
                  </p>

                  <p className="mt-7 font-serif text-3xl italic text-[#FFD166] sm:text-4xl">
                    March 2027
                  </p>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                    Monday · Dol Purnima
                  </p>
                </div>
              </div>
            </div>

            {/* Invitation */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F59E0B]/10 text-[#F59E0B]">
                <Sparkles size={19} strokeWidth={1.2} />
              </div>

              <h3 className="mt-7 max-w-xl font-serif text-3xl leading-tight text-[#3B0B12] sm:text-4xl lg:text-5xl">
                Come together for
                <span className="block italic text-[#E63946]">
                  Rong Milanti 2027.
                </span>
              </h3>

              <p className="mt-7 max-w-xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
                Mark the day and join the Kalpataru community in welcoming
                spring with the colours, music and cultural spirit of Bengali
                Dol.
              </p>

              {/* Future CTA */}
              <div className="mt-9">
                <div className="inline-flex items-center gap-3 rounded-full border border-[#3B0B12]/10 bg-[#fffaf2] px-5 py-3 text-xs font-medium text-[#3B0B12]/60">
                  <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                  Event details coming soon
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final cultural statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.75,
            delay: 0.1,
          }}
          className="mt-16 sm:mt-20"
        >
          <div className="border-t border-[#3B0B12]/10 pt-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="max-w-4xl font-serif text-2xl leading-9 text-[#3B0B12]/70 sm:text-3xl sm:leading-10 lg:text-4xl lg:leading-[1.2]">
                  May the colours of Dol bring us together,
                  <span className="italic text-[#E63946]">
                    {" "}
                    as they have through generations.
                  </span>
                </p>

                <p className="mt-7 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/35">
                  Kalpataru Cultural Association · Pune
                </p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#3B0B12]/10 text-[#E63946]">
                <ArrowUpRight size={20} strokeWidth={1.15} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bengali closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-16 text-center sm:mt-20"
        >
          <p className="font-serif text-3xl italic text-[#D94672]/65 sm:text-4xl">
            শুভ দোল
          </p>

          <p className="mt-3 text-[8px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/30">
            Happy Dol Purnima
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionFive;
