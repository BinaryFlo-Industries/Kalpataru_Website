"use client";

import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { motion } from "motion/react";

const pujaDays = [
  {
    date: "16",
    month: "OCT",
    day: "FRI",
    title: "Kalparambha",
    subtitle: "Akal Bodhon",
  },
  {
    date: "17",
    month: "OCT",
    day: "SAT",
    title: "Saptami",
    subtitle: "Nabapatrika Puja",
  },
  {
    date: "19",
    month: "OCT",
    day: "MON",
    title: "Ashtami",
    subtitle: "Sandhi Puja",
  },
  {
    date: "20",
    month: "OCT",
    day: "TUE",
    title: "Navami",
    subtitle: "Maha Navami",
  },
  {
    date: "21",
    month: "OCT",
    day: "WED",
    title: "Dashami",
    subtitle: "Vijaya Dashami",
  },
];

export default function DurgaPujaSection() {
  return (
    <section
      id="durga-puja"
      className="
            relative isolate overflow-hidden
            bg-transparent
            text-[#4c3028]
        "
    >
      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-14 lg:py-40">
        {/* Top archival label */}
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
          <span className="h-px w-12 bg-[#7b4a35]/45" />

          <span
            className="
              text-[10px] font-medium uppercase
              tracking-[0.32em]
              text-[#7b4a35]/70
            "
          >
            The great autumn celebration
          </span>

          <span className="h-px w-12 bg-[#7b4a35]/20" />
        </motion.div>

        {/* =================================================
            TITLE AREA
        ================================================== */}

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                mb-3
                font-serif text-xl italic
                text-[#89613e]
                sm:text-2xl
              "
            >
              এসো মা দুর্গা
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-4xl
                font-serif
                text-5xl font-medium
                leading-[0.92]
                tracking-[-0.035em]
                text-[#4b2d26]
                sm:text-6xl
                md:text-7xl
                lg:text-[6.2rem]
              "
            >
              Durga Puja
              <br />
              <span className="italic text-[#7a3f2d]">2026</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="lg:pb-2"
          >
            <p className="max-w-md text-sm leading-7 text-[#6d5144] sm:text-base">
              Five days of devotion, artistry and togetherness — a celebration
              of Maa Durga and the cultural spirit that binds our community
              across generations.
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#89613e]/75">
              <CalendarDays size={15} strokeWidth={1.4} />
              <span>16 — 21 October 2026</span>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            DECORATIVE DIVIDER
        ================================================== */}

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-20 h-px origin-left
            bg-linear-to-r
            from-transparent
            via-[#7b4a35]/35
            to-transparent
          "
        />

        {/* =================================================
            PUJA TIMELINE
        ================================================== */}

        <div className="mt-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              mb-8
              text-[10px] uppercase
              tracking-[0.28em]
              text-[#89613e]/65
            "
          >
            The days of celebration
          </motion.p>

          <div
            className="
              grid
              border-t border-[#7b4a35]/20
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >
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
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  border-b
                  border-[#7b4a35]/20
                  px-1 py-7
                  sm:border-r
                  sm:px-5
                  lg:min-h-45
                  lg:border-b-0
                  lg:first:border-l
                "
              >
                {/* Hover wash */}
                <div
                  className="
                    pointer-events-none absolute
                    inset-0
                    bg-[#7b3f2e]/0
                    transition-all duration-500
                    group-hover:bg-[#7b3f2e]/[0.035]
                  "
                />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex items-baseline gap-2">
                      <span
                        className="
                          font-serif text-4xl
                          leading-none
                          text-[#60372c]
                        "
                      >
                        {puja.date}
                      </span>

                      <span
                        className="
                          text-[9px] uppercase
                          tracking-[0.2em]
                          text-[#89613e]/70
                        "
                      >
                        {puja.month}
                      </span>
                    </div>

                    <span
                      className="
                        text-[9px] uppercase
                        tracking-[0.18em]
                        text-[#89613e]/55
                      "
                    >
                      {puja.day}
                    </span>
                  </div>

                  <div className="mt-8">
                    <h3
                      className="
                        text-sm font-medium
                        text-[#4c3028]
                      "
                    >
                      {puja.title}
                    </h3>

                    <p
                      className="
                        mt-1 font-serif text-sm italic
                        text-[#89613e]
                      "
                    >
                      {puja.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =================================================
            CLOSING STORY + CTA
        ================================================== */}

        <div
          className="
            mt-24
            grid gap-12
            lg:grid-cols-[0.8fr_1fr]
            lg:items-end
          "
        >
          {/* Decorative quotation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span
              className="
                font-serif text-7xl
                leading-none
                text-[#8d5d3d]/25
              "
            >
              “
            </span>

            <p
              className="
                -mt-5 max-w-sm
                font-serif text-2xl
                leading-tight
                text-[#60372c]
                sm:text-3xl
              "
            >
              Where devotion becomes
              <span className="italic text-[#7a3f2d]"> celebration,</span>
              and celebration becomes memory.
            </p>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
          >
            <p
              className="
                max-w-2xl
                text-sm leading-7
                text-[#6d5144]
                sm:text-base sm:leading-8
              "
            >
              Every autumn, the familiar sounds return — the dhaak, the conch,
              the evening arati, the fragrance of shiuli and the warmth of
              people coming home. Durga Puja is more than a festival; it is one
              of the most cherished expressions of Bengali life.
            </p>

            <p
              className="
                mt-5 max-w-2xl
                text-sm leading-7
                text-[#6d5144]
                sm:text-base sm:leading-8
              "
            >
              At Kalpataru, we celebrate that spirit together — preserving
              tradition while creating memories for the generations that come
              after us.
            </p>

            <Link
              href="/events/durga-puja"
              className="
                group mt-8 inline-flex
                items-center gap-3
                border-b border-[#7b4a35]/35
                pb-2
                text-xs font-medium uppercase
                tracking-[0.2em]
                text-[#5c3028]
                transition-colors duration-300
                hover:border-[#5c1f1f]
                hover:text-[#5c1f1f]
              "
            >
              Explore Durga Puja 2026
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM PAPER EDGE
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute
          bottom-0 left-0 right-0
          h-24
          bg-linear-to-t
          from-[#a77a4b]/10
          to-transparent
        "
      />
    </section>
  );
}
