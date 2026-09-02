"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
  },
  {
    number: "02",
    title: "Mutual Respect",
    text: "Every thought and opinion deserves to be heard with warmth, patience and respect.",
  },
  {
    number: "03",
    title: "A Voice for Everyone",
    text: "Every member has an equal right to participate, express and contribute.",
  },
];

const stories = [
  {
    number: "01",
    title: "A Tapestry of Traditions",
    heading: "Culture brings us closer.",
    text: "From the devotion of Saraswati Puja and the colours of Rang Milanti, to the warmth of Borsoboron Utsav and the joyful creativity of Chutir Pathshala, each celebration became another thread in our shared story.",
    accent: "Celebration",
  },
  {
    number: "02",
    title: "Rhythms of Togetherness",
    heading: "A community that shows up.",
    text: "From the very beginning, Kalpataru has been met with the love and blessings of a vibrant community. With more than a thousand attendees across our celebrations, that togetherness continues to give the journey its rhythm.",
    accent: "Togetherness",
  },
  {
    number: "03",
    title: "Harmony Through Culture",
    heading: "400 families. One community.",
    text: "More than four hundred families are now part of our growing cultural family — each bringing their own stories, energy and warmth to the celebrations we share.",
    accent: "Community",
  },
  {
    number: "04",
    title: "Seeds of Hope",
    heading: "Nurturing what comes next.",
    text: "Through our student sponsorship initiative, we supported ten talented students in their educational journey — a small step towards keeping the spirit of learning alive for the next generation.",
    accent: "Future",
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
        text-[#4c3028]
      "
    >
      {/* ======================================================
          CONTENT
      ======================================================= */}

      <div
        className="
          relative mx-auto max-w-7xl
          px-6 py-28
          sm:px-10
          lg:px-14 lg:py-40
        "
      >
        {/* ====================================================
            OPENING
        ===================================================== */}

        <div
          className="
            grid gap-14
            lg:grid-cols-[0.75fr_1.25fr]
            lg:items-end
          "
        >
          {/* Small archival label */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#7b4a35]/45" />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.32em]
                  text-[#7b4a35]/70
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
                text-[#89613e]
              "
            >
              A community is not built in a day. It is built through the moments
              we choose to share.
            </p>
          </motion.div>

          {/* Main statement */}

          <div>
            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                mb-4
                font-serif
                text-xl
                italic
                text-[#89613e]
                sm:text-2xl
              "
            >
              More than a gathering.
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
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
                text-[#4b2d26]
                sm:text-6xl
                md:text-7xl
                lg:text-[5.7rem]
              "
            >
              A place where
              <br />
              <span className="italic text-[#7a3f2d]">people belong.</span>
            </motion.h2>
          </div>
        </div>

        {/* ====================================================
            MANIFESTO
        ===================================================== */}

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
            duration: 0.9,
            delay: 0.15,
          }}
          className="
            mt-20
            grid gap-10
            border-t
            border-[#7b4a35]/20
            pt-10
            lg:grid-cols-[1fr_1fr]
          "
        >
          <p
            className="
              max-w-xl
              font-serif
              text-2xl
              leading-[1.35]
              text-[#60372c]
              sm:text-3xl
            "
          >
            We believe culture flourishes when
            <span className="italic text-[#7a3f2d]">
              {" "}
              every voice has a place.
            </span>
          </p>

          <p
            className="
              max-w-xl
              text-sm
              leading-7
              text-[#6d5144]
              sm:text-base
              sm:leading-8
            "
          >
            At Kalpataru, we strive to create a harmonious and inclusive
            environment where people can celebrate their heritage, exchange
            ideas and build lasting connections. We make decisions
            transparently, collectively and with respect for one another.
          </p>
        </motion.div>

        {/* ====================================================
            VALUES
        ===================================================== */}

        <div className="mt-24">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            className="
              mb-8
              flex items-center justify-between
            "
          >
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-[#89613e]/60
              "
            >
              Principles we carry
            </span>

            <span
              className="
                hidden
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-[#89613e]/40
                sm:block
              "
            >
              01 — 03
            </span>
          </motion.div>

          <div
            className="
              grid
              border-t
              border-[#7b4a35]/20
              lg:grid-cols-3
            "
          >
            {values.map((value, index) => (
              <motion.div
                key={value.number}
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
                  min-h-55
                  border-b
                  border-[#7b4a35]/20
                  px-1
                  py-8
                  lg:border-b-0
                  lg:border-r
                  lg:px-8
                  lg:first:border-l
                "
              >
                <span
                  className="
                    font-serif
                    text-sm
                    italic
                    text-[#89613e]/55
                  "
                >
                  {value.number}
                </span>

                <h3
                  className="
                    mt-12
                    font-serif
                    text-2xl
                    text-[#4c3028]
                    transition-colors
                    duration-300
                    group-hover:text-[#7a3f2d]
                  "
                >
                  {value.title}
                </h3>

                <p
                  className="
                    mt-3
                    max-w-xs
                    text-sm
                    leading-6
                    text-[#6d5144]
                  "
                >
                  {value.text}
                </p>

                <span
                  className="
                    absolute
                    bottom-7
                    right-7
                    h-px
                    w-0
                    bg-[#7a3f2d]/50
                    transition-all
                    duration-500
                    group-hover:w-8
                  "
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ====================================================
            STATISTICS
        ===================================================== */}

        <div className="mt-32">
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              flex items-center gap-4
            "
          >
            <span className="h-px w-12 bg-[#7b4a35]/40" />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-[#89613e]/65
              "
            >
              A year in numbers
            </span>
          </motion.div>

          <div
            className="
              mt-10
              grid
              grid-cols-2
              border-t
              border-[#7b4a35]/20
              lg:grid-cols-4
            "
          >
            {/* Stat 1 */}

            <Stat
              value={4}
              label="Events celebrated"
              description="Moments that brought us together"
              suffix=""
              delay={0}
            />

            {/* Stat 2 */}

            <Stat
              value={1000}
              suffix="+"
              label="Average footfall"
              description="People sharing every celebration"
              delay={0.1}
            />

            {/* Stat 3 */}

            <Stat
              value={400}
              suffix="+"
              label="Families"
              description="Growing together as one community"
              delay={0.2}
            />

            {/* Stat 4 */}

            <Stat
              value={10}
              label="Students supported"
              description="Investing in the next generation"
              delay={0.3}
            />
          </div>
        </div>

        {/* ====================================================
            CULTURAL STORIES
        ===================================================== */}

        <div className="mt-32">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-3xl"
          >
            <p
              className="
                font-serif
                text-xl
                italic
                text-[#89613e]
                sm:text-2xl
              "
            >
              What the numbers cannot tell you.
            </p>

            <h2
              className="
                mt-3
                font-serif
                text-4xl
                leading-tight
                text-[#4b2d26]
                sm:text-5xl
              "
            >
              The stories behind
              <span className="italic text-[#7a3f2d]"> the numbers.</span>
            </h2>
          </motion.div>

          <div className="mt-16">
            {stories.map((story, index) => (
              <CulturalStory key={story.number} story={story} index={index} />
            ))}
          </div>
        </div>

        {/* ====================================================
            CLOSING
        ===================================================== */}

        <motion.div
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
            margin: "-100px",
          }}
          transition={{
            duration: 1,
          }}
          className="
            mt-32
            border-t
            border-[#7b4a35]/20
            pt-16
          "
        >
          <div
            className="
              grid gap-10
              lg:grid-cols-[1fr_auto]
              lg:items-end
            "
          >
            <div>
              <p
                className="
                  font-serif
                  text-3xl
                  leading-tight
                  text-[#60372c]
                  sm:text-4xl
                "
              >
                The story is still being written.
              </p>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-[#6d5144]
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
                items-center
                gap-3
                border-b
                border-[#7b4a35]/35
                pb-2
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#5c3028]
                transition-colors
                duration-300
                hover:border-[#5c1f1f]
                hover:text-[#5c1f1f]
              "
            >
              Be part of it
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
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
}: {
  value: number;
  suffix?: string;
  label: string;
  description: string;
  delay: number;
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
        min-h-55
        border-b
        border-[#7b4a35]/20
        px-1
        py-8
        sm:px-5
        lg:border-b-0
        lg:border-r
        lg:px-7
        lg:first:border-l
      "
    >
      <div
        className="
          font-serif
          text-5xl
          tracking-[-0.04em]
          text-[#60372c]
          sm:text-6xl
        "
      >
        <Counter value={value} suffix={suffix} />
      </div>

      <h3
        className="
          mt-7
          text-sm
          font-medium
          text-[#4c3028]
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
          text-[#89613e]
        "
      >
        {description}
      </p>

      <span
        className="
          absolute
          bottom-7
          right-7
          h-1.5
          w-1.5
          rounded-full
          bg-[#7a3f2d]/45
          transition-transform
          duration-500
          group-hover:scale-150
        "
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
        grid gap-7
        border-t
        border-[#7b4a35]/20
        py-10
        lg:grid-cols-[110px_0.7fr_1fr]
        lg:items-start
      "
    >
      {/* Number */}

      <div>
        <span
          className="
            font-serif
            text-sm
            italic
            text-[#89613e]/60
          "
        >
          {story.number}
        </span>
      </div>

      {/* Title */}

      <div>
        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-[#89613e]/65
          "
        >
          {story.accent}
        </p>

        <h3
          className="
            mt-3
            font-serif
            text-2xl
            leading-tight
            text-[#60372c]
            transition-colors
            duration-300
            group-hover:text-[#7a3f2d]
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
            text-[#7a3f2d]
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
            text-[#6d5144]
            sm:text-base
            sm:leading-8
          "
        >
          {story.text}
        </p>
      </div>
    </motion.article>
  );
}
