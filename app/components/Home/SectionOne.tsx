"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const SectionOne = () => {
  return (
    <section
      id="hero"
      className="relative h-dvh min-h-170 w-full overflow-hidden bg-[#1b0d0d]"
    >
      {/* =========================================================
BACKGROUND VIDEO
========================================================== */}
      ```
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
      >
        <source src="/videos/main.mp4" type="video/mp4" />
      </video>
      {/* =========================================================
      CINEMATIC OVERLAYS
  ========================================================== */}
      {/* Overall darkening */}
      <div className="absolute inset-0 bg-black/30" />
      {/* Warm Bengal tone */}
      <div className="absolute inset-0 bg-[#3b1111]/20 mix-blend-multiply" />
      {/* Top gradient — protects the navbar visually */}
      <div
        className="
      absolute inset-x-0 top-0 h-52
      bg-linear-to-b
      from-black/45
      via-black/15
      to-transparent
    "
      />
      {/* Bottom cinematic gradient */}
      <div
        className="
      absolute inset-x-0 bottom-0 h-[55%]
      bg-linear-to-t
      from-[#180909]/80
      via-[#180909]/30
      to-transparent
    "
      />
      {/* Very subtle warm glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 2 }}
        className="
      pointer-events-none absolute
      -bottom-40 left-1/2
      h-125 w-175
      -translate-x-1/2
      rounded-full
      bg-[#c49a63]/20
      blur-[120px]
    "
      />
      {/* =========================================================
      HERO CONTENT
  ========================================================== */}
      <div className="relative z-10 flex h-full w-full flex-col">
        {/* Main copy */}
        <div
          className="
        mx-auto flex w-full max-w-7xl flex-1
        items-end px-6 pb-72
        sm:px-10 sm:pb-80
        lg:px-14 lg:pb-32
      "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
              }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-9 bg-[#d9b77c]" />

              <span
                className="
              text-[10px] font-medium uppercase
              tracking-[0.32em]
              text-[#f2dfbd]
              sm:text-xs
            "
              >
                A celebration of culture
              </span>
            </motion.div>

            {/* Main heading */}
            <h1
              className="
            max-w-3xl
            text-5xl font-medium
            leading-[0.95]
            tracking-[-0.035em]
            text-[#fff8ed]
            sm:text-6xl
            md:text-7xl
            lg:text-[5.8rem]
          "
            >
              Where Bengal
              <br />
              <span className="font-serif italic text-[#e2c58e]">
                comes together.
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
              className="
            mt-6 max-w-xl
            text-sm leading-6
            text-white/75
            sm:text-base sm:leading-7
          "
            >
              Celebrating the heritage, artistry and spirit of Bengal — bringing
              our community together across generations.
            </motion.p>
          </motion.div>
        </div>

        {/* =======================================================
        DURGA PUJA CTA
    ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
        absolute
        bottom-24 left-1/2
        w-[calc(100%-3rem)]
        max-w-75
        -translate-x-1/2

        sm:bottom-24

        lg:bottom-28
        lg:left-auto
        lg:right-14
        lg:w-auto
        lg:max-w-none
        lg:translate-x-0
      "
        >
          <Link
            href="/events/durga-puja"
            className="
          group relative block
          w-full
          overflow-hidden
          rounded-3xl
          border border-white/20
          bg-[#321313]/55
          p-5
          shadow-[0_20px_70px_rgba(0,0,0,0.25)]
          backdrop-blur-xl
          transition-all duration-500
          hover:-translate-y-1
          hover:border-[#d9b77c]/45
          hover:bg-[#321313]/70

          lg:w-75
        "
          >
            {/* Decorative glow */}
            <div
              className="
            pointer-events-none absolute
            -right-12 -top-12
            h-28 w-28
            rounded-full
            bg-[#d9b77c]/15
            blur-3xl
            transition-all duration-700
            group-hover:bg-[#d9b77c]/25
          "
            />

            <div className="relative">
              <div className="mb-3 flex items-center justify-between">
                <span
                  className="
                text-[10px] font-medium uppercase
                tracking-[0.28em]
                text-[#d9b77c]
              "
                >
                  Coming this autumn
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  className="
                text-[#e6d1aa]
                transition-transform duration-500
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
                />
              </div>

              <h2
                className="
              text-2xl font-medium
              tracking-tight
              text-[#fff8ed]
            "
              >
                Durga Puja
              </h2>

              <div className="mt-1 flex items-baseline gap-2">
                <span
                  className="
                font-serif text-4xl italic
                text-[#e2c58e]
              "
                >
                  2026
                </span>

                <span className="text-xs text-white/50">at Kalpataru</span>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-white/65">
                <span className="h-px w-5 bg-[#d9b77c]/60" />
                <span>Discover the celebration</span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* =======================================================
        SCROLL INDICATOR
    ======================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.4,
            duration: 1,
          }}
          className="
        absolute
        bottom-7 left-1/2
        -translate-x-1/2
        sm:bottom-8
      "
        >
          <motion.a
            href="#about"
            aria-label="Scroll down"
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
          group flex flex-col
          items-center gap-2
        "
          >
            <span
              className="
            text-[9px] font-medium uppercase
            tracking-[0.3em]
            text-white/55
            transition-colors duration-300
            group-hover:text-white/85
          "
            >
              Explore
            </span>

            <span
              className="
            flex h-10 w-7
            items-center justify-center
            rounded-full
            border border-white/30
            bg-white/5
            backdrop-blur-sm
            transition-all duration-300
            group-hover:border-[#d9b77c]/60
            group-hover:bg-white/10
          "
            >
              <ArrowDown
                size={14}
                strokeWidth={1.4}
                className="text-white/75"
              />
            </span>
          </motion.a>
        </motion.div>
      </div>
      {/* =========================================================
      EDGE DETAILS
  ========================================================== */}
      {/* Left vertical ornament */}
      <div
        className="
      pointer-events-none absolute
      bottom-8 left-6
      hidden items-center gap-3
      lg:flex
    "
      >
        <span className="h-px w-8 bg-white/25" />

        <span
          className="
        text-[9px] uppercase
        tracking-[0.3em]
        text-white/35
      "
        >
          Kalpataru
        </span>
      </div>
    </section>
  );
};

export default SectionOne;
