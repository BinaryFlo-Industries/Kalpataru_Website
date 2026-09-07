"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";

const SectionOne = () => {
  const scrollToCalendar = () => {
    document.getElementById("durga-puja-calendar")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="durga-puja"
      className="relative overflow-hidden bg-[#FFFAF2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid min-h-180 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left — Editorial introduction */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#E63946]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#3B0B12]/50">
                Kalpataru · Durga Puja 2026
              </span>
            </div>

            <h1 className="max-w-3xl font-serif text-5xl leading-[0.9] tracking-tighter text-[#3B0B12] sm:text-6xl lg:text-[5.8rem]">
              Maa is
              <br />
              <span className="italic">coming.</span>
            </h1>

            <p className="mt-7 font-serif text-2xl tracking-[-0.02em] text-[#E63946] sm:text-3xl">
              মা আসছেন
            </p>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#3B0B12]/65 sm:text-lg">
              Durga Puja celebrates the triumph of good over evil, as Goddess
              Durga vanquishes Mahishasura and restores cosmic balance. At
              Kalpataru, it is also a time for the community to come together in
              worship, celebration and culture.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToCalendar}
                className="group inline-flex items-center gap-3 rounded-full bg-[#E63946] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d92f3c] hover:shadow-[0_14px_35px_rgba(230,57,70,0.18)]"
              >
                Explore the Puja
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3B0B12]/35">
                Worship · Culture · Community
              </span>
            </div>

            {/* Key facts */}
            <div className="mt-14 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-[1.35rem] border border-[#3B0B12]/10 bg-[#FFFDF8] p-5">
                <p className="font-serif text-3xl tracking-[-0.03em] text-[#3B0B12]">
                  2026
                </p>

                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3B0B12]/40">
                  Sharadiya Puja
                </p>
              </div>

              <div className="rounded-[1.35rem] border border-[#3B0B12]/10 bg-[#FFFDF8] p-5">
                <p className="font-serif text-3xl tracking-[-0.03em] text-[#3B0B12]">
                  16–21
                </p>

                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3B0B12]/40">
                  October
                </p>
              </div>

              <div className="col-span-2 rounded-[1.35rem] border border-[#3B0B12]/10 bg-[#FFFDF8] p-5 sm:col-span-1">
                <p className="font-serif text-xl leading-tight tracking-[-0.02em] text-[#3B0B12]">
                  Kalpataru
                </p>

                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3B0B12]/40">
                  Community Celebration
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Maa Durga visual */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.95,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="relative mx-auto max-w-155">
              {/* Main image */}
              <div className="relative aspect-4/5 overflow-hidden rounded-4xl border border-[#3B0B12]/10 bg-[#FFFDF8]">
                <Image
                  src="/images/durga-puja/1.jpeg"
                  alt="Maa Durga at Kalpataru"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 620px"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-[#3B0B12]/6" />

                {/* Top label */}
                <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-[#FFFDF8]/90 px-4 py-2 backdrop-blur-sm">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#3B0B12]/65">
                    Durga Puja · 2026
                  </span>
                </div>

                {/* Bottom overlay */}
                <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/15 bg-[#3B0B12]/90 p-5 sm:p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F59E0B] text-[#3B0B12]">
                      <Sparkles size={19} strokeWidth={1.7} />
                    </div>

                    <div>
                      <p className="font-serif text-xl text-[#FFFDF8] sm:text-2xl">
                        The wait begins.
                      </p>

                      <p className="mt-1 text-xs leading-5 text-[#FFFDF8]/50">
                        A celebration of faith, culture and community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Bengali card */}
              <motion.div
                initial={{ opacity: 0, x: 25, y: 15 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -bottom-7 -left-4 w-51.25 rounded-3xl border border-[#3B0B12]/10 bg-[#FFFDF8] p-5 shadow-[0_18px_50px_rgba(59,11,18,0.10)] sm:-left-8"
              >
                <p className="font-serif text-2xl tracking-tight text-[#3B0B12]">
                  মা আসছেন
                </p>

                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#E63946]">
                  Sharadiya Durga Puja
                </p>
              </motion.div>

              {/* Small date marker */}
              <div className="absolute -right-3 top-16 hidden rounded-full border border-[#3B0B12]/10 bg-[#FFFDF8] px-4 py-2 shadow-[0_12px_35px_rgba(59,11,18,0.07)] sm:block lg:-right-7">
                <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#3B0B12]/45">
                  16 · 21 October 2026
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.button
          onClick={scrollToCalendar}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-16 hidden items-center gap-3 text-left sm:flex"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3B0B12]/10 text-[#3B0B12]/45 transition-colors hover:border-[#E63946]/30 hover:text-[#E63946]">
            <ArrowDown size={16} strokeWidth={1.6} />
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/35">
            View Puja schedule
          </span>
        </motion.button>
      </div>
    </section>
  );
};

export default SectionOne;
