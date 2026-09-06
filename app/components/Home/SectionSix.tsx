"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function SectionSix() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["24px", "-24px"]);

  return (
    <section
      ref={sectionRef}
      id="vision"
      className="
        relative
        min-h-180
        overflow-hidden
        bg-[#3B0B12]
        sm:min-h-195
      "
    >
      {/* ============================================================
          BACKGROUND IMAGE
      ============================================================ */}

      <motion.div
        style={{ y: imageY }}
        className="
          absolute
          inset-[-6%]
          will-change-transform
        "
      >
        <Image
          src="/images/home/img1.png"
          alt=""
          fill
          sizes="100vw"
          className="
            object-cover
            object-center
          "
        />
      </motion.div>

      {/* ============================================================
          IMAGE TREATMENT
      ============================================================ */}

      {/* Simple dark veil — keeps the photograph visible */}
      <div className="absolute inset-0 bg-[#1f1815]/48" />

      {/* Slight warm photographic treatment */}
      <div className="absolute inset-0 bg-[#5a4030]/12 mix-blend-soft-light" />

      {/* ============================================================
          CONTENT
      ============================================================ */}

      <div
        className="
          relative
          z-10
          flex
          min-h-180
          items-center
          px-6
          py-24
          sm:min-h-195
          sm:px-10
          lg:px-14
        "
      >
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            w-full
            max-w-6xl
          "
        >
          {/* ========================================================
              TOP LABEL
          ======================================================== */}

          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#F59E0B]" />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-white/70
              "
            >
              Vision of Kalpataru
            </span>

            <span className="h-px w-6 bg-white/30" />
          </div>

          {/* ========================================================
              MAIN STATEMENT
          ======================================================== */}

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-end">
            <div>
              <p
                className="
                  mb-5
                  font-serif
                  text-xl
                  italic
                  text-[#F59E0B]
                  sm:text-2xl
                "
              >
                Looking ahead, together.
              </p>

              <h2
                className="
                  max-w-5xl
                  font-serif
                  text-5xl
                  font-medium
                  leading-[0.91]
                  tracking-[-0.04em]
                  text-[#FFFDF8]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[6.5rem]
                "
              >
                A vision rooted in
                <br />
                <span className="italic text-[#F3D39A]">
                  culture & community.
                </span>
              </h2>
            </div>

            {/* Side marker */}

            <div
              className="
                hidden
                lg:block
                lg:border-l
                lg:border-white/20
                lg:pl-7
              "
            >
              <span className="block font-serif text-5xl italic text-white/20">
                06
              </span>

              <span
                className="
                  mt-2
                  block
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white/45
                "
              >
                Our vision
              </span>
            </div>
          </div>

          {/* ========================================================
              DIVIDER
          ======================================================== */}

          <div className="my-10 flex items-center gap-3">
            <span className="h-px w-16 bg-[#E63946]" />

            <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />

            <span className="h-px w-8 bg-[#D94672]" />

            <span className="h-px flex-1 bg-white/15" />
          </div>

          {/* ========================================================
              COPY + SMALL DETAILS
          ======================================================== */}

          <div
            className="
              grid
              gap-10
              lg:grid-cols-[1fr_auto]
              lg:items-end
            "
          >
            <p
              className="
                max-w-2xl
                text-sm
                leading-8
                text-white/78
                sm:text-base
                sm:leading-9
              "
            >
              We are excited to introduce Kalpataru, a community-driven
              initiative dedicated to promoting Bengali art and culture. Come,
              be a part of this cultural celebration and help us foster a
              vibrant community that honors Bengali heritage.
            </p>

            {/* Decorative identity */}

            <div
              className="
                flex
                items-center
                gap-4
                border-l
                border-white/20
                pl-5
              "
            >
              <div className="flex -space-x-1.5">
                <span className="h-3 w-3 rounded-full border border-white/30 bg-[#E63946]" />
                <span className="h-3 w-3 rounded-full border border-white/30 bg-[#F59E0B]" />
                <span className="h-3 w-3 rounded-full border border-white/30 bg-[#D94672]" />
              </div>

              <span
                className="
                  whitespace-nowrap
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white/50
                "
              >
                Art · Heritage · Belonging
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ============================================================
          BOTTOM EDGE
      ============================================================ */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-20
          h-px
          bg-white/20
        "
      />

      {/* Small colour signature */}

      <div className="absolute bottom-0 left-0 z-20 flex h-1">
        <span className="w-16 bg-[#E63946]" />
        <span className="w-10 bg-[#F59E0B]" />
        <span className="w-8 bg-[#D94672]" />
      </div>
    </section>
  );
}
