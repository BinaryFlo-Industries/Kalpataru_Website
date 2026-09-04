"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

const SectionOne = () => {
  const scrollToBenefits = () => {
    document
      .getElementById("membership-benefits")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="join-us"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12"
    >
      {/* Atmospheric glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[58%] top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bf975b]/10 blur-3xl"
      />

      {/* Archival vertical lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[7%] hidden w-px bg-[#9b7448]/15 lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-[7%] hidden w-px bg-[#9b7448]/15 lg:block"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-24">
          {/* LEFT — Editorial introduction */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#9b7448]/60" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#765842] sm:text-xs">
                An invitation to belong
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-[clamp(3.5rem,7vw,7rem)] font-normal leading-[0.9] tracking-tighter text-[#2b1718]">
              Become part of
              <span className="block italic text-[#5a2528]">something</span>
              <span className="block">that feels like home.</span>
            </h1>

            {/* Divider */}
            <div className="my-9 flex items-center gap-4">
              <span className="h-px w-16 bg-[#9b7448]/50" />

              <Sparkles
                size={14}
                strokeWidth={1.2}
                className="text-[#9b7448]"
              />

              <span className="h-px w-28 bg-[#9b7448]/30" />
            </div>

            {/* Main copy */}
            <p className="max-w-2xl font-serif text-xl leading-9 text-[#4d4039] sm:text-2xl">
              Kalpataru is a place to find familiar voices, shared traditions
              and people who carry a little piece of the East with them.
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-[#75645a] sm:text-base">
              Become a part of a community that celebrates Bengali culture,
              creates meaningful connections and brings the warmth, spirit and
              flavour of Eastern India to Pune.
            </p>

            {/* CTA */}
            <motion.button
              type="button"
              onClick={scrollToBenefits}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-9 inline-flex items-center gap-3 border border-[#5a2528] bg-[#5a2528] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-[#fff9e7] transition-all duration-300 hover:bg-[#2b1718]"
            >
              Discover the privileges
              <ArrowDown
                size={15}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </motion.button>
          </motion.div>

          {/* RIGHT — Cultural invitation */}
          <motion.div
            initial={{ opacity: 0, x: 35, rotate: 1 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Main frame */}
            <div className="relative border border-[#9b7448]/40 p-2">
              <div className="relative overflow-hidden border border-[#9b7448]/20 bg-[#fff9e7]/45 px-7 py-10 sm:px-10 sm:py-12">
                {/* Corner marks */}
                <span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-[#9b7448]/70" />
                <span className="absolute right-0 top-0 h-6 w-6 border-r border-t border-[#9b7448]/70" />
                <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-[#9b7448]/70" />
                <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-[#9b7448]/70" />

                <div className="relative">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#765842]">
                    The Kalpataru Circle
                  </p>

                  <div className="mt-8">
                    <p className="font-serif text-4xl leading-[1.05] tracking-tight text-[#5a2528] sm:text-5xl">
                      Culture
                      <br />
                      <span className="italic">creates</span>
                      <br />
                      connection.
                    </p>
                  </div>

                  <div className="my-8 h-px w-full bg-[#9b7448]/25" />

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <span className="mt-1 font-serif text-sm text-[#9b7448]">
                        01
                      </span>

                      <p className="text-sm leading-7 text-[#4d4039]">
                        Find a community of people with a shared cultural
                        sensibility.
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="mt-1 font-serif text-sm text-[#9b7448]">
                        02
                      </span>

                      <p className="text-sm leading-7 text-[#4d4039]">
                        Take part in the celebrations, gatherings and events
                        that bring us together.
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="mt-1 font-serif text-sm text-[#9b7448]">
                        03
                      </span>

                      <p className="text-sm leading-7 text-[#4d4039]">
                        Experience a taste of the East, right here in Pune.
                      </p>
                    </div>
                  </div>

                  <div className="mt-9 flex items-center justify-between border-t border-[#9b7448]/20 pt-5">
                    <span className="text-[9px] uppercase tracking-[0.22em] text-[#8b735e]">
                      Community · Culture · Connection
                    </span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.2}
                      className="text-[#9b7448]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Archival notation */}
            <div className="mt-5 flex items-center justify-between px-1 text-[9px] uppercase tracking-[0.2em] text-[#8b735e]">
              <span>Kalpataru</span>
              <span>Pune · Eastern India</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom scroll cue */}
        <motion.button
          type="button"
          onClick={scrollToBenefits}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25, duration: 0.8 }}
          className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#765842] sm:flex"
          aria-label="Scroll to membership benefits"
        >
          <span className="text-[9px] uppercase tracking-[0.28em]">
            Continue
          </span>

          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={16} strokeWidth={1.2} />
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
};

export default SectionOne;
