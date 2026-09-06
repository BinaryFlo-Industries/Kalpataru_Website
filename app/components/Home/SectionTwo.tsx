"use client";

import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const pujaDays = [
  {
    date: "16",
    month: "OCT",
    day: "FRI",
    title: "Kalparambha",
    subtitle: "Akal Bodhon",
    tag: "Opening",
  },
  {
    date: "17",
    month: "OCT",
    day: "SAT",
    title: "Saptami",
    subtitle: "Nabapatrika Puja",
    tag: "The beginning",
  },
  {
    date: "19",
    month: "OCT",
    day: "MON",
    title: "Ashtami",
    subtitle: "Sandhi Puja",
    tag: "The sacred peak",
    featured: true,
  },
  {
    date: "20",
    month: "OCT",
    day: "TUE",
    title: "Navami",
    subtitle: "Maha Navami",
    tag: "The final prayer",
  },
  {
    date: "21",
    month: "OCT",
    day: "WED",
    title: "Dashami",
    subtitle: "Vijaya Dashami",
    tag: "Farewell",
  },
];

export default function DurgaPujaSection() {
  return (
    <section
      id="durga-puja"
      className="
     relative isolate overflow-hidden
     bg-transparent
     text-[#3B0B12]
   "
    >
      {" "}
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-28 lg:px-14 lg:py-36">
        ```
        {/* =====================================================
        INTRO LABEL
    ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-10 bg-[#E63946]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E63946]">
            The great autumn celebration
          </span>

          <span className="h-px w-10 bg-[#F59E0B]" />
        </motion.div>
        {/* =====================================================
        HERO TITLE
    ====================================================== */}
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.65fr] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
            mb-4
            font-serif text-xl italic
            text-[#D94672]
            sm:text-2xl
          "
            >
              এসো মা দুর্গা
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
            max-w-5xl
            font-serif
            text-5xl font-medium
            leading-[0.9]
            tracking-[-0.045em]
            text-[#3B0B12]
            sm:text-6xl
            md:text-7xl
            lg:text-[6.4rem]
          "
            >
              Durga Puja
              <br />
              <span className="italic text-[#E63946]">2026</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="lg:pb-3"
          >
            <p className="max-w-md text-sm leading-7 text-[#5A3038] sm:text-base sm:leading-8">
              Five days of devotion, artistry and togetherness — a celebration
              of Maa Durga and the cultural spirit that brings generations
              together.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <div className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-[#E63946]">
                <CalendarDays
                  size={15}
                  strokeWidth={1.8}
                  className="text-[#F59E0B]"
                />
                <span>16 — 21 October 2026</span>
              </div>

              <span className="hidden h-4 w-px bg-[#3B0B12]/15 sm:block" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/45">
                5 days
              </span>
            </div>
          </motion.div>
        </div>
        {/* =====================================================
        SECTION DIVIDER
    ====================================================== */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 h-px origin-left bg-[#3B0B12]/12"
        />
        {/* =====================================================
        TIMELINE INTRO
    ====================================================== */}
        <div className="mt-14 flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E63946]">
              The days of celebration
            </p>

            <h3 className="mt-3 font-serif text-2xl text-[#3B0B12] sm:text-3xl">
              Five days. One celebration.
            </h3>
          </div>

          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#3B0B12]/40 sm:block">
            2026 calendar
          </span>
        </div>
        {/* =====================================================
        PUJA TIMELINE
    ====================================================== */}
        <div className="mt-8 grid overflow-hidden border border-[#3B0B12]/10 bg-white/40 sm:grid-cols-2 lg:grid-cols-5">
          {pujaDays.map((puja, index) => (
            <motion.div
              key={puja.title}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-50px",
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
            group relative min-h-52
            border-b border-[#3B0B12]/10
            p-5
            transition-colors duration-500
            sm:border-r
            sm:last:border-r-0
            lg:border-b-0
            lg:last:border-r-0
            ${puja.featured ? "bg-[#E63946] text-white" : "hover:bg-[#FFF1D8]"}
          `}
            >
              {/* Top index */}
              <div className="relative z-10 flex items-center justify-between">
                <span
                  className={`
                text-[9px] font-semibold uppercase tracking-[0.2em]
                ${puja.featured ? "text-white/65" : "text-[#3B0B12]/40"}
              `}
                >
                  0{index + 1}
                </span>

                <span
                  className={`
                text-[9px] uppercase tracking-[0.16em]
                ${puja.featured ? "text-[#FFD166]" : "text-[#D94672]"}
              `}
                >
                  {puja.tag}
                </span>
              </div>

              {/* Date */}
              <div className="relative z-10 mt-9 flex items-end justify-between">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`
                  font-serif text-5xl leading-none
                  transition-transform duration-500
                  group-hover:-translate-y-1
                  ${puja.featured ? "text-white" : "text-[#3B0B12]"}
                `}
                  >
                    {puja.date}
                  </span>

                  <span
                    className={`
                  text-[9px] font-semibold uppercase tracking-[0.2em]
                  ${puja.featured ? "text-[#FFD166]" : "text-[#F59E0B]"}
                `}
                  >
                    {puja.month}
                  </span>
                </div>

                <span
                  className={`
                text-[9px] font-semibold uppercase tracking-[0.18em]
                ${puja.featured ? "text-white/60" : "text-[#3B0B12]/35"}
              `}
                >
                  {puja.day}
                </span>
              </div>

              {/* Event */}
              <div className="relative z-10 mt-10">
                <h4
                  className={`
                text-sm font-semibold
                ${puja.featured ? "text-white" : "text-[#3B0B12]"}
              `}
                >
                  {puja.title}
                </h4>

                <p
                  className={`
                mt-1 font-serif text-sm italic
                ${puja.featured ? "text-white/75" : "text-[#D94672]"}
              `}
                >
                  {puja.subtitle}
                </p>
              </div>

              {/* Hover line */}
              <div
                className={`
              absolute bottom-0 left-0 h-1
              transition-all duration-500
              ${
                puja.featured
                  ? "w-full bg-[#FFD166]"
                  : "w-0 bg-[#E63946] group-hover:w-full"
              }
            `}
              />
            </motion.div>
          ))}
        </div>
        {/* =====================================================
        STORY + CTA
    ====================================================== */}
        <div className="mt-28 grid gap-14 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          {/* Statement */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-8 w-1 bg-[#E63946]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E63946]">
                Why we celebrate
              </span>
            </div>

            <p className="max-w-lg font-serif text-3xl leading-[1.1] tracking-tight text-[#3B0B12] sm:text-4xl">
              Where devotion becomes
              <span className="italic text-[#E63946]"> celebration,</span>
              <br />
              and celebration becomes memory.
            </p>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
          >
            <p className="max-w-2xl text-sm leading-7 text-[#5A3038] sm:text-base sm:leading-8">
              Every autumn, the familiar sounds return — the dhaak, the conch,
              the evening arati, the fragrance of shiuli and the warmth of
              people coming home. Durga Puja is more than a festival; it is one
              of the most cherished expressions of Bengali life.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#5A3038] sm:text-base sm:leading-8">
              At Kalpataru, we celebrate that spirit together — preserving
              tradition while creating memories for the generations that come
              after us.
            </p>

            <Link
              href="/events/durga-puja"
              className="
            group mt-8 inline-flex items-center gap-3
            rounded-full
            bg-[#E63946]
            px-5 py-3
            text-[10px] font-semibold uppercase
            tracking-[0.18em]
            text-white
            transition-all duration-300
            hover:bg-[#3B0B12]
            hover:px-6
          "
            >
              Explore Durga Puja 2026
              <ArrowRight
                size={14}
                strokeWidth={1.8}
                className="
              transition-transform duration-300
              group-hover:translate-x-1
            "
              />
            </Link>
          </motion.div>
        </div>
      </div>
      {/* =====================================================
      SUBTLE BOTTOM ACCENT
  ====================================================== */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-[#E63946]/20" />
    </section>
  );
}
