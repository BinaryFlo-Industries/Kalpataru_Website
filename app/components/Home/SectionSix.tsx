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

  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);

  return (
    <section
      ref={sectionRef}
      id="vision"
      className="relative min-h-180 overflow-hidden sm:min-h-195"
    >
      {/* ============================================================
          BACKGROUND IMAGE
      ============================================================ */}

      <motion.div
        style={{ y: imageY }}
        className="absolute inset-[-7%] will-change-transform"
      >
        <Image
          src="/images/home/img1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* ============================================================
          CINEMATIC VEIL
      ============================================================ */}

      {/* Overall muted photographic treatment */}
      <div className="absolute inset-0 bg-[#3d3832]/35" />

      {/* Warm archival tint */}
      <div className="absolute inset-0 bg-[#b99b72]/20 mix-blend-soft-light" />

      {/* Stronger readability toward the centre */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(35,30,25,0.48)_0%,rgba(35,30,25,0.24)_42%,rgba(25,22,19,0.48)_100%)]" />

      {/* Subtle cinematic edges */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(25,20,16,0.32),transparent_24%,transparent_75%,rgba(25,20,16,0.45))]" />

      {/* ============================================================
          CONTENT
      ============================================================ */}

      <div className="relative z-10 flex min-h-180 items-center justify-center px-6 py-28 sm:min-h-195 sm:px-10">
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full max-w-4xl text-center"
        >
          {/* Small editorial label */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#f3e6cd]/60" />

            <span className="text-[10px] font-medium uppercase tracking-[0.38em] text-[#f3e6cd]/85">
              Vision of Kalpataru
            </span>

            <span className="h-px w-12 bg-[#f3e6cd]/60" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-5xl leading-[0.95] text-[#fff8eb] sm:text-6xl md:text-7xl lg:text-8xl">
            A vision rooted in
            <br />
            <span className="italic text-[#ead5ad]">culture & community.</span>
          </h2>

          {/* Decorative divider */}
          <div className="mx-auto my-9 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#ead5ad]/50" />
            <span className="h-1 w-1 rounded-full bg-[#ead5ad]/80" />
            <span className="h-px w-10 bg-[#ead5ad]/50" />
          </div>

          {/* Actual website copy */}
          <p className="mx-auto max-w-2xl text-sm leading-8 text-[#fff8eb]/90 sm:text-base sm:leading-9">
            We are excited to introduce Kalpataru, a community-driven initiative
            dedicated to promoting Bengali art and culture. Come, be a part of
            this cultural celebration and help us foster a vibrant community
            that honors Bengali heritage.
          </p>
        </motion.div>
      </div>

      {/* ============================================================
          BOTTOM TRANSITION
      ============================================================ */}

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#3b2d22]/35 to-transparent" />
    </section>
  );
}
