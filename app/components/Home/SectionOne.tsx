"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const getDaysUntilDurgaPuja = () => {
  const today = new Date();
  const durgaPuja = new Date("2026-10-20T00:00:00");

  const diff = durgaPuja.getTime() - today.getTime();

  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
};

const festivals = [
  {
    name: "Durga Puja",
    year: "2026",
    href: "/events/durga-puja",
    image: "/images/durga.jpg",
    accent: "#E63946",
    glow: "rgba(230, 57, 70, 0.38)",
    position: "xl:-translate-y-8",
    size: "h-28 w-28 sm:h-36 sm:w-36 lg:h-44 lg:w-44 xl:h-52 xl:w-52",
    label: "The grand celebration",
    featured: true,
  },
  {
    name: "Lakshmi Puja",
    year: "2026",
    href: "/events/lakshmi-puja",
    image: "/images/laxmi.jpg",
    accent: "#F59E0B",
    glow: "rgba(245, 158, 11, 0.34)",
    position: "xl:translate-y-10",
    size: "h-28 w-28 sm:h-36 sm:w-36 lg:h-36 lg:w-36 xl:h-40 xl:w-40",
    label: "An evening of devotion",
    featured: false,
  },
  {
    name: "Kali Puja",
    year: "2026",
    href: "/events/kali-puja",
    image: "/images/kali.png",
    accent: "#D94672",
    glow: "rgba(217, 70, 114, 0.34)",
    position: "xl:translate-y-16",
    size: "h-28 w-28 sm:h-36 sm:w-36 lg:h-36 lg:w-36 xl:h-40 xl:w-40",
    label: "The night of Shakti",
    featured: false,
  },
];

const SectionOne = () => {
  const daysLeft = getDaysUntilDurgaPuja();

  return (
    <section
      id="hero"
      className="
        relative min-h-dvh w-full overflow-hidden
        bg-[#180808]
      "
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
        }}
        className="
    absolute
    right-4
    top-28
    z-30
    sm:right-6
    sm:top-28
    lg:right-8
    lg:top-28
  "
      >
        <div
          className="
      flex
      items-center
      gap-3
      rounded-xl
      border
      border-[#F59E0B]/45
      bg-[#8F101B]/80
      px-4
      py-2.5
      shadow-[0_10px_35px_rgba(0,0,0,0.3)]
      backdrop-blur-md
    "
        >
          <span
            className="
        h-2
        w-2
        shrink-0
        rounded-full
        bg-[#F59E0B]
        shadow-[0_0_12px_rgba(245,158,11,0.8)]
      "
          />

          <div className="flex flex-col">
            <span
              className="
          text-[8px]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-[#FFE7A3]
          sm:text-[9px]
        "
            >
              Durga Puja
            </span>

            <span
              className="
          mt-0.5
          font-serif
          text-sm
          italic
          leading-none
          text-white
          sm:text-base
        "
            >
              {daysLeft > 0 ? `${daysLeft} days left` : "Celebration is here"}
            </span>
          </div>
        </div>
      </motion.div>
      {/* =========================================================
          BACKGROUND VIDEO
      ========================================================== */}

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
          FLAT CINEMATIC OVERLAYS
      ========================================================== */}

      {/* Overall darkness */}
      <div className="absolute inset-0 bg-black/38" />

      {/* Bengal red atmosphere — intentionally FLAT */}
      <div
        className="
          absolute inset-0
          bg-[#8F101B]/24
          mix-blend-multiply
        "
      />

      {/* Subtle solid warm light zones */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="
          pointer-events-none
          absolute
          -right-24
          top-1/4
          h-96
          w-96
          rounded-full
          bg-[#E63946]/10
          blur-[110px]
        "
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-16
          h-96
          w-96
          rounded-full
          bg-[#F59E0B]/8
          blur-[120px]
        "
      />

      {/* =========================================================
          SUBTLE GRAIN
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[url('/noise.png')]
          opacity-[0.055]
          mix-blend-overlay
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10 flex min-h-dvh w-full flex-col">
        {/* =======================================================
            MAIN CONTENT
        ======================================================== */}

        <div
          className="
            mx-auto
            flex
            w-full
            max-w-7xl
            flex-1
            items-end
            px-5
            pt-28
            pb-88
            sm:px-8
            sm:pt-32
            sm:pb-92
            md:px-10
            md:pb-96
            lg:px-14
            lg:pb-96
            xl:pb-32
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
              delay: 0.2,
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
                delay: 0.4,
              }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#F59E0B]" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.32em]
                  text-[#FFD166]
                  sm:text-xs
                "
              >
                A celebration of culture
              </span>

              <Sparkles
                size={13}
                strokeWidth={1.5}
                className="text-[#F59E0B]"
              />
            </motion.div>

            {/* Heading */}

            <h1
              className="
                max-w-3xl
                text-[3.35rem]
                font-medium
                leading-[0.91]
                tracking-[-0.045em]
                text-[#FFF8ED]
                sm:text-6xl
                md:text-7xl
                lg:text-[5.8rem]
              "
            >
              Where Bengal
              <br />
              <span
                className="
                  font-serif
                  italic
                  text-[#FFD166]
                  drop-shadow-[0_3px_20px_rgba(245,158,11,0.16)]
                "
              >
                comes together.
              </span>
            </h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.65,
              }}
              className="
                mt-6
                max-w-xl
                text-sm
                leading-6
                text-white/80
                sm:text-base
                sm:leading-7
              "
            >
              Celebrating the heritage, artistry and spirit of Bengal — bringing
              our community together across generations.
            </motion.p>

            {/* 2026 Badge */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.9,
              }}
              className="
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#F59E0B]/55
                bg-[#8F101B]/80
                px-4
                py-2
                shadow-[0_10px_35px_rgba(0,0,0,0.25)]
                backdrop-blur-md
              "
            >
              <span
                className="
                  flex
                  h-2
                  w-2
                  rounded-full
                  bg-[#F59E0B]
                  shadow-[0_0_12px_rgba(245,158,11,0.8)]
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#FFE7A3]
                "
              >
                The 2026 celebrations
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* =======================================================
            FESTIVAL CONSTELLATION
        ======================================================== */}

        <div
          className="
            absolute
            bottom-16
            left-1/2
            z-20
            w-[calc(100%-2rem)]
            max-w-105
            -translate-x-1/2

            sm:bottom-16
            sm:max-w-125

            lg:bottom-16
            lg:max-w-135

            xl:bottom-20
            xl:left-auto
            xl:right-10
            xl:w-140
            xl:max-w-none
            xl:translate-x-0
          "
        >
          {/* =====================================================
              FESTIVAL CIRCLES
          ====================================================== */}

          <div
            className="
              flex
              items-end
              justify-center
              gap-2
              sm:gap-4
              lg:gap-1
              lg:justify-end
            "
          >
            {festivals.map((festival, index) => (
              <motion.div
                key={festival.name}
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.88,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.85,
                  delay: 0.65 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  relative
                  ${festival.position}
                `}
              >
                <Link
                  href={festival.href}
                  className="
                    group
                    relative
                    block
                    rounded-full
                    outline-none
                  "
                  aria-label={`${festival.name} ${festival.year}`}
                >
                  {/* =================================================
                      OUTER FESTIVAL RING
                      No gradient. Solid festival colour.
                  ================================================== */}

                  <div
                    className={`
                      relative
                      ${festival.size}
                      rounded-full
                      p-1.25
                      transition-transform
                      duration-700
                      group-hover:-translate-y-3
                    `}
                    style={{
                      backgroundColor: festival.accent,
                      boxShadow: `
                        0 0 0 1px rgba(255,255,255,0.18),
                        0 16px 42px ${festival.glow}
                      `,
                    }}
                  >
                    {/* Thin cream separation ring */}

                    <div
                      className="
                        relative
                        h-full
                        w-full
                        rounded-full
                        border-2
                        border-[#FFE7A3]/80
                        bg-[#220707]
                        p-0.75
                      "
                    >
                      {/* Image container */}

                      <div
                        className="
                          relative
                          h-full
                          w-full
                          overflow-hidden
                          rounded-full
                          border
                          border-white/25
                          bg-[#220707]
                        "
                      >
                        {/* Image */}

                        <Image
                          src={festival.image}
                          alt={festival.name}
                          fill
                          sizes="
                            (min-width: 1280px) 208px,
                            (min-width: 1024px) 176px,
                            (min-width: 640px) 160px,
                            128px
                          "
                          className="
                            object-cover
                            scale-100
                            transition-transform
                            duration-1000
                            group-hover:scale-110
                          "
                        />

                        {/* =================================================
                            SOLID IMAGE TINT
                            No gradient.
                        ================================================== */}

                        <div
                          className="
                            absolute
                            inset-0
                            opacity-20
                            mix-blend-multiply
                          "
                          style={{
                            backgroundColor: festival.accent,
                          }}
                        />

                        {/* Solid lower panel for typography */}

                        <div
                          className="
                            absolute
                            inset-x-2
                            bottom-2
                            hidden
                            rounded-full
                            border
                            border-white/15
                            bg-black/65
                            px-2
                            py-2
                            text-center
                            backdrop-blur-md
                            lg:block
                            lg:bottom-3
                          "
                        >
                          <p
                            className="
                              text-[8px]
                              font-semibold
                              uppercase
                              tracking-[0.08em]
                              text-white
                              sm:text-[10px]
                            "
                          >
                            {festival.name}
                          </p>

                          <p
                            className="
                              mt-0.5
                              font-serif
                              text-[11px]
                              italic
                              text-[#FFD166]
                            "
                          >
                            {festival.year}
                          </p>
                        </div>

                        {/* Hover icon */}

                        <div
                          className="
                            absolute
                            right-3
                            top-3
                            flex
                            h-6
                            w-6
                            scale-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/30
                            bg-black/60
                            opacity-0
                            backdrop-blur-md
                            transition-all
                            duration-500
                            group-hover:scale-100
                            group-hover:opacity-100
                          "
                        >
                          <ArrowUpRight
                            size={12}
                            strokeWidth={1.5}
                            className="text-white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Desktop captions */}

                <p
                  className="
                    mt-2
                    hidden
                    text-center
                    text-[8px]
                    uppercase
                    tracking-[0.18em]
                    text-white/50
                    lg:block
                  "
                >
                  {festival.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =======================================================
            SCROLL INDICATOR
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="
            absolute
            bottom-5
            left-1/2
            hidden
            -translate-x-1/2
            sm:block
            lg:bottom-7
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
              group
              flex
              flex-col
              items-center
              gap-2
            "
          >
            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/55
                transition-colors
                duration-300
                group-hover:text-[#FFD166]
              "
            >
              Explore
            </span>

            <span
              className="
                flex
                h-10
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-black/25
                backdrop-blur-sm
                transition-all
                duration-300
                group-hover:border-[#F59E0B]/70
                group-hover:bg-[#8F101B]/50
              "
            >
              <ArrowDown
                size={14}
                strokeWidth={1.4}
                className="
                  text-white/75
                  transition-colors
                  group-hover:text-[#FFD166]
                "
              />
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* =========================================================
          LEFT EDGE ORNAMENT
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-8
          left-6
          hidden
          items-center
          gap-3
          lg:flex
        "
      >
        <span className="h-px w-8 bg-[#F59E0B]/50" />

        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-white/40
          "
        >
          Kalpataru
        </span>
      </div>

      {/* =========================================================
          RIGHT EDGE ORNAMENT
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-6
          top-1/2
          hidden
          h-28
          -translate-y-1/2
          flex-col
          items-center
          justify-between
          lg:flex
        "
      >
        <span
          className="
            h-2
            w-2
            rounded-full
            bg-[#E63946]
            shadow-[0_0_15px_rgba(230,57,70,0.8)]
          "
        />

        {/* Solid vertical line instead of gradient */}

        <span
          className="
            h-16
            w-px
            bg-[#E63946]/50
          "
        />

        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.3em]
            text-white/35
            [writing-mode:vertical-rl]
          "
        >
          Bengal · 2026
        </span>
      </div>
    </section>
  );
};

export default SectionOne;
