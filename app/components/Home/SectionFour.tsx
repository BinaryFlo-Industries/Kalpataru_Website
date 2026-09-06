"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

/* ============================================================
   COUNTER
============================================================ */

function Counter({
  value,
  suffix = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const motionValue = useMotionValue(0);

  const springValue = useSpring(motionValue, {
    stiffness: 70,
    damping: 20,
    mass: 0.8,
  });

  useEffect(() => {
    if (!isInView) return;

    motionValue.set(value);

    const timeout = setTimeout(() => {
      motionValue.set(value);
    }, duration * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, value, duration, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (!ref.current) return;

      ref.current.textContent = `${Math.round(latest)}${suffix}`;
    });

    return unsubscribe;
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

/* ============================================================
   DATA
============================================================ */

const values = [
  {
    number: "01",
    title: "Transparency",
    text: "Honesty and openness guide the way we work, decide and grow together.",
    accent: "#E63946",
    short: "Open by principle",
  },
  {
    number: "02",
    title: "Mutual Respect",
    text: "Every thought and opinion deserves to be heard with warmth, patience and respect.",
    accent: "#F59E0B",
    short: "Listen. Respect. Grow.",
  },
  {
    number: "03",
    title: "A Voice for Everyone",
    text: "Every member has an equal right to participate, express and contribute.",
    accent: "#D94672",
    short: "Everyone belongs",
  },
];

const stories = [
  {
    number: "01",
    title: "A Tapestry of Traditions",
    heading: "Culture brings us closer.",
    text: "From the devotion of Saraswati Puja and the colours of Rang Milanti, to the warmth of Borsoboron Utsav and the joyful creativity of Chutir Pathshala, each celebration became another thread in our shared story.",
    accent: "Celebration",
    color: "#E63946",
  },
  {
    number: "02",
    title: "Rhythms of Togetherness",
    heading: "A community that shows up.",
    text: "From the very beginning, Kalpataru has been met with the love and blessings of a vibrant community. With more than a thousand attendees across our celebrations, that togetherness continues to give the journey its rhythm.",
    accent: "Togetherness",
    color: "#F59E0B",
  },
  {
    number: "03",
    title: "Harmony Through Culture",
    heading: "400 families. One community.",
    text: "More than four hundred families are now part of our growing cultural family — each bringing their own stories, energy and warmth to the celebrations we share.",
    accent: "Community",
    color: "#D94672",
  },
  {
    number: "04",
    title: "Seeds of Hope",
    heading: "Nurturing what comes next.",
    text: "Through our student sponsorship initiative, we supported ten talented students in their educational journey — a small step towards keeping the spirit of learning alive for the next generation.",
    accent: "Future",
    color: "#E63946",
  },
];

/* ============================================================
   MAIN SECTION
============================================================ */

export default function KalpataruSection() {
  return (
    <section
      id="kalpataru"
      className="
        relative overflow-hidden
        text-[#3B0B12]
      "
    >
      <div
        className="
          relative mx-auto max-w-7xl
          px-6 py-24
          sm:px-10 sm:py-28
          lg:px-14 lg:py-36
        "
      >
        {/* ====================================================
            OPENING
        ===================================================== */}

        <div
          className="
            grid gap-12
            lg:grid-cols-[0.72fr_1.28fr]
            lg:items-end
            lg:gap-16
          "
        >
          {/* Archival label */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#E63946]" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.32em]
                  text-[#3B0B12]/55
                "
              >
                The Kalpataru spirit
              </span>
            </div>

            <p
              className="
                mt-8
                max-w-xs
                font-serif
                text-xl
                italic
                leading-relaxed
                text-[#3B0B12]/65
              "
            >
              A community is not built in a day. It is built through the moments
              we choose to share.
            </p>

            <div className="mt-8 hidden items-center gap-3 sm:flex">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/35">
                Since the beginning
              </span>

              <span className="h-px w-8 bg-[#F59E0B]" />
            </div>
          </motion.div>

          {/* Main statement */}

          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                mb-4
                font-serif
                text-xl
                italic
                text-[#D94672]
                sm:text-2xl
              "
            >
              More than a gathering.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-5xl
                font-serif
                text-5xl
                font-medium
                leading-[0.94]
                tracking-[-0.035em]
                text-[#3B0B12]
                sm:text-6xl
                md:text-7xl
                lg:text-[5.7rem]
              "
            >
              A place where
              <br />
              <span className="italic text-[#E63946]">people belong.</span>
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 72 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              className="mt-8 h-1 bg-[#F59E0B]"
            />
          </div>
        </div>

        {/* ====================================================
            MANIFESTO
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          className="
            relative
            mt-20
            grid gap-10
            border-t border-[#3B0B12]/12
            pt-10
            lg:grid-cols-[1fr_1fr]
          "
        >
          <div className="relative">
            <span
              className="
                absolute -left-5 -top-3
                font-serif
                text-5xl
                leading-none
                text-[#E63946]/15
              "
            >
              “
            </span>

            <p
              className="
                relative
                max-w-xl
                font-serif
                text-2xl
                leading-[1.35]
                text-[#3B0B12]
                sm:text-3xl
              "
            >
              We believe culture flourishes when
              <span className="italic text-[#E63946]">
                {" "}
                every voice has a place.
              </span>
            </p>
          </div>

          <div className="flex flex-col justify-between gap-7">
            <p
              className="
                max-w-xl
                text-sm
                leading-7
                text-[#3B0B12]/65
                sm:text-base
                sm:leading-8
              "
            >
              At Kalpataru, we strive to create a harmonious and inclusive
              environment where people can celebrate their heritage, exchange
              ideas and build lasting connections. We make decisions
              transparently, collectively and with respect for one another.
            </p>

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#E63946]" />
              <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
              <span className="h-2 w-2 rounded-full bg-[#D94672]" />

              <span className="ml-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/35">
                Our shared values
              </span>
            </div>
          </div>
        </motion.div>

        {/* ====================================================
            VALUES
        ===================================================== */}

        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              mb-8
              flex items-center justify-between
            "
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#E63946]" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#3B0B12]/50
                "
              >
                Principles we carry
              </span>
            </div>

            <span
              className="
                hidden
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-[#3B0B12]/35
                sm:block
              "
            >
              01 — 03
            </span>
          </motion.div>

          <div
            className="
              grid gap-3
              lg:grid-cols-3
            "
          >
            {values.map((value, index) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  margin: "-70px",
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  min-h-70
                  overflow-hidden
                  rounded-3xl
                  border border-[#3B0B12]/10
                  bg-[#FFFDF8]
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#3B0B12]/20
                  sm:p-8
                "
              >
                {/* Accent strip */}

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    delay: 0.25 + index * 0.1,
                  }}
                  className="absolute left-0 top-0 h-1"
                  style={{
                    backgroundColor: value.accent,
                  }}
                />

                {/* Number */}

                <div className="flex items-start justify-between">
                  <span
                    className="
                      font-serif
                      text-sm
                      italic
                      text-[#3B0B12]/40
                    "
                  >
                    {value.number}
                  </span>

                  <span
                    className="
                      rounded-full
                      px-2.5 py-1
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                    "
                    style={{
                      color: value.accent,
                      backgroundColor: `${value.accent}12`,
                    }}
                  >
                    {value.short}
                  </span>
                </div>

                {/* Large background number */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    -bottom-8
                    -right-3
                    font-serif
                    text-[9rem]
                    leading-none
                    opacity-[0.035]
                  "
                >
                  {value.number}
                </span>

                <div className="relative mt-16">
                  <h3
                    className="
                      font-serif
                      text-2xl
                      text-[#3B0B12]
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                      sm:text-3xl
                    "
                  >
                    {value.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-xs
                      text-sm
                      leading-6
                      text-[#3B0B12]/60
                    "
                  >
                    {value.text}
                  </p>
                </div>

                {/* Hover indicator */}

                <div
                  className="
                    absolute
                    bottom-7
                    right-7
                    flex
                    items-center
                    gap-2
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      transition-transform
                      duration-500
                      group-hover:scale-150
                    "
                    style={{
                      backgroundColor: value.accent,
                    }}
                  />

                  <span
                    className="
                      h-px
                      w-0
                      transition-all
                      duration-500
                      group-hover:w-8
                    "
                    style={{
                      backgroundColor: value.accent,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ====================================================
            STATISTICS
        ===================================================== */}

        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#F59E0B]" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#3B0B12]/50
                "
              >
                A year in numbers
              </span>
            </div>

            <span className="text-[9px] uppercase tracking-[0.2em] text-[#3B0B12]/30">
              Kalpataru / 2026
            </span>
          </motion.div>

          <div
            className="
              mt-8
              grid gap-3
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            <Stat
              value={4}
              label="Events celebrated"
              description="Moments that brought us together"
              suffix=""
              delay={0}
              accent="#E63946"
            />

            <Stat
              value={1000}
              suffix="+"
              label="Average footfall"
              description="People sharing every celebration"
              delay={0.1}
              accent="#F59E0B"
            />

            <Stat
              value={400}
              suffix="+"
              label="Families"
              description="Growing together as one community"
              delay={0.2}
              accent="#D94672"
            />

            <Stat
              value={10}
              label="Students supported"
              description="Investing in the next generation"
              delay={0.3}
              accent="#E63946"
            />
          </div>
        </div>

        {/* ====================================================
            CULTURAL STORIES
        ===================================================== */}

        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#D94672]" />

              <p
                className="
                  font-serif
                  text-xl
                  italic
                  text-[#D94672]
                  sm:text-2xl
                "
              >
                What the numbers cannot tell you.
              </p>
            </div>

            <h2
              className="
                mt-4
                font-serif
                text-4xl
                leading-tight
                tracking-tight
                text-[#3B0B12]
                sm:text-5xl
              "
            >
              The stories behind
              <span className="italic text-[#E63946]"> the numbers.</span>
            </h2>
          </motion.div>

          <div className="mt-14">
            {stories.map((story, index) => (
              <CulturalStory key={story.number} story={story} index={index} />
            ))}
          </div>
        </div>

        {/* ====================================================
            CLOSING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="
            relative
            mt-32
            overflow-hidden
            rounded-4xl
            border border-[#3B0B12]/10
            bg-[#3B0B12]
            px-7 py-12
            sm:px-10 sm:py-14
            lg:px-14 lg:py-16
          "
        >
          {/* Decorative accents */}

          <div className="absolute right-0 top-0 flex h-full">
            <div className="w-1 bg-[#E63946]" />
            <div className="w-1 bg-[#F59E0B]" />
            <div className="w-1 bg-[#D94672]" />
          </div>

          <div
            className="
              relative
              grid gap-10
              lg:grid-cols-[1fr_auto]
              lg:items-end
            "
          >
            <div>
              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#F59E0B]
                "
              >
                And it continues
              </span>

              <p
                className="
                  mt-5
                  max-w-3xl
                  font-serif
                  text-3xl
                  leading-tight
                  text-[#FFFDF8]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                The story is still being written.
              </p>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  leading-7
                  text-[#FFFDF8]/60
                "
              >
                And every celebration, every family, every conversation and
                every helping hand becomes part of it.
              </p>
            </div>

            <Link
              href="/community"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-[#FFFDF8]
                px-5 py-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#3B0B12]
                transition-all
                duration-300
                hover:bg-[#E63946]
                hover:text-white
              "
            >
              Be part of it
              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   STAT COMPONENT
============================================================ */

function Stat({
  value,
  suffix,
  label,
  description,
  delay,
  accent,
}: {
  value: number;
  suffix?: string;
  label: string;
  description: string;
  delay: number;
  accent: string;
}) {
  return (
    <motion.div
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
        margin: "-80px",
      }}
      transition={{
        duration: 0.8,
        delay,
      }}
      className="
        group
        relative
        min-h-60
        overflow-hidden
        rounded-3xl
        border border-[#3B0B12]/10
        bg-[#FFFDF8]
        px-6 py-7
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#3B0B12]/20
        sm:px-7
      "
    >
      {/* Top accent */}

      <div
        className="
          absolute
          left-0
          top-0
          h-1
          w-full
        "
        style={{
          backgroundColor: accent,
        }}
      />

      {/* Background number */}

      <span
        className="
          pointer-events-none
          absolute
          -bottom-7
          -right-2
          font-serif
          text-[8rem]
          leading-none
          opacity-[0.035]
        "
      >
        {value}
      </span>

      <div className="relative">
        <div
          className="
            font-serif
            text-5xl
            tracking-[-0.04em]
            text-[#3B0B12]
            transition-transform
            duration-500
            group-hover:-translate-y-1
            sm:text-6xl
          "
        >
          <Counter value={value} suffix={suffix} />
        </div>

        <div
          className="mt-2 h-px w-7 transition-all duration-500 group-hover:w-12"
          style={{
            backgroundColor: accent,
          }}
        />

        <h3
          className="
            mt-6
            text-sm
            font-semibold
            text-[#3B0B12]
          "
        >
          {label}
        </h3>

        <p
          className="
            mt-2
            max-w-47.5
            text-xs
            leading-5
            text-[#3B0B12]/55
          "
        >
          {description}
        </p>
      </div>

      <span
        className="
          absolute
          bottom-7
          right-7
          h-2
          w-2
          rounded-full
          transition-transform
          duration-500
          group-hover:scale-150
        "
        style={{
          backgroundColor: accent,
        }}
      />
    </motion.div>
  );
}

/* ============================================================
   CULTURAL STORY
============================================================ */

function CulturalStory({
  story,
  index,
}: {
  story: {
    number: string;
    title: string;
    heading: string;
    text: string;
    accent: string;
    color: string;
  };
  index: number;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-70px",
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        overflow-hidden
        border-t border-[#3B0B12]/10
        py-8
        transition-all
        duration-500
        sm:py-10
      "
    >
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-0.75
          opacity-30
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          backgroundColor: story.color,
        }}
      />

      <div
        className="
          grid gap-7
          pl-4
          lg:grid-cols-[90px_0.72fr_1fr_auto]
          lg:items-center
          lg:gap-8
          lg:pl-5
        "
      >
        {/* Number */}

        <div className="flex items-center gap-3 lg:block">
          <span
            className="
              font-serif
              text-2xl
              italic
              text-[#3B0B12]/35
            "
          >
            {story.number}
          </span>

          <span
            className="
              h-px
              w-10
              lg:mt-3
              lg:block
            "
            style={{
              backgroundColor: story.color,
            }}
          />
        </div>

        {/* Title */}

        <div>
          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.25em]
            "
            style={{
              color: story.color,
            }}
          >
            {story.accent}
          </p>

          <h3
            className="
              mt-3
              font-serif
              text-2xl
              leading-tight
              text-[#3B0B12]
              transition-transform
              duration-500
              group-hover:translate-x-1
              sm:text-3xl
            "
          >
            {story.title}
          </h3>
        </div>

        {/* Writing */}

        <div>
          <p
            className="
              font-serif
              text-xl
              italic
              leading-tight
              text-[#3B0B12]
              sm:text-2xl
            "
          >
            {story.heading}
          </p>

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-[#3B0B12]/60
              sm:text-base
              sm:leading-8
            "
          >
            {story.text}
          </p>
        </div>

        {/* Story marker */}

        <div className="hidden lg:flex lg:justify-end">
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              transition-all
              duration-500
              group-hover:scale-110
            "
            style={{
              borderColor: `${story.color}35`,
              color: story.color,
            }}
          >
            <ArrowRight
              size={15}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-500
                group-hover:translate-x-1
              "
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
