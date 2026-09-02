"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function ComingSoon() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4ead4] text-[#34251c]">
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0">
        {/* Paper tone */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,249,232,0.95)_0%,rgba(244,234,212,0.92)_55%,rgba(205,174,125,0.35)_100%)]" />

        {/* Subtle aged edges */}
        <div className="absolute inset-y-0 left-0 w-[14%] bg-linear-to-r from-[#9c7547]/15 to-transparent" />

        <div className="absolute inset-y-0 right-0 w-[14%] bg-linear-to-l from-[#9c7547]/15 to-transparent" />

        {/* Fine texture */}
        <div className="absolute inset-0 opacity-[0.12] mix-blend-multiply">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "url('/paper-texture.png')",
              backgroundRepeat: "repeat",
            }}
          />
        </div>
      </div>

      {/* ============================================================
          CONTENT
      ============================================================ */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-32 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full max-w-3xl text-center"
        >
          {/* Decorative mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="mx-auto mb-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#8c6b45]/35 bg-[#f7ecd7]"
          >
            <Sparkles size={22} strokeWidth={1.2} className="text-[#7d1f2a]" />
          </motion.div>

          {/* Eyebrow */}
          <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.38em] text-[#7d1f2a]/70">
            A new chapter is taking shape
          </p>

          {/* Main heading */}
          <h1 className="font-serif text-5xl leading-[0.95] text-[#34251c] sm:text-6xl md:text-7xl lg:text-8xl">
            Something is
            <br />
            <span className="italic text-[#7d1f2a]">being built.</span>
          </h1>

          {/* Divider */}
          <div className="mx-auto my-9 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#8c6b45]/40" />

            <span className="h-1 w-1 rounded-full bg-[#7d1f2a]/70" />

            <span className="h-px w-12 bg-[#8c6b45]/40" />
          </div>

          {/* Description */}
          <p className="mx-auto max-w-xl text-sm leading-8 text-[#59483a]/75 sm:text-base sm:leading-9">
            We&apos;re working behind the scenes to bring this part of the
            Kalpataru story to life.
            <br className="hidden sm:block" />
            Stay tuned. There&apos;s more to come.
          </p>

          {/* Stay tuned */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="mt-8 font-serif text-xl italic text-[#8c6b45]/75"
          >
            Good things take a little time.
          </motion.p>

          {/* Back home */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.9,
            }}
            className="mt-10"
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-3 border border-[#8c6b45]/35 bg-[#f7ecd7]/70 px-6 py-3 text-[9px] font-medium uppercase tracking-[0.22em] text-[#7d1f2a] backdrop-blur-sm transition-all duration-300 hover:border-[#7d1f2a]/45 hover:bg-[#f7ecd7]"
            >
              <ArrowLeft
                size={14}
                strokeWidth={1.3}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Kalpataru
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ============================================================
          BOTTOM SIGNATURE
      ============================================================ */}

      <div className="absolute bottom-7 left-0 right-0 z-10 text-center">
        <p className="text-[8px] uppercase tracking-[0.3em] text-[#8c6b45]/45">
          Kalpataru Cultural Association
        </p>
      </div>
    </main>
  );
}
