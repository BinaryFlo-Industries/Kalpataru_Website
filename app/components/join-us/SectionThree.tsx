"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";

const SectionThree = () => {
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
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
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
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[#E63946]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/50 sm:text-[10px]">
                An invitation to belong
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-[clamp(3.4rem,7vw,7rem)] font-normal leading-[0.88] tracking-[-0.045em] text-[#3B0B12]">
              Become part of
              <span className="block italic text-[#E63946]">something</span>
              <span className="block">that feels like home.</span>
            </h1>

            {/* Divider */}
            <div className="my-9 flex items-center gap-4">
              <span className="h-px w-16 bg-[#3B0B12]/15" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
              <span className="h-px w-24 bg-[#3B0B12]/10" />
            </div>

            {/* Main copy */}
            <p className="max-w-2xl font-serif text-xl leading-9 text-[#3B0B12]/80 sm:text-2xl">
              Kalpataru is a place to find familiar voices, shared traditions
              and people who carry a little piece of the East with them.
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
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
              className="
                group
                mt-9
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#E63946]
                px-6
                py-3.5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white
                transition-all
                duration-300
                hover:bg-[#3B0B12]
                hover:shadow-[0_14px_35px_rgba(59,11,18,0.12)]
              "
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
            {/* Main card */}
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[1.75rem]
                border
                border-[#3B0B12]/10
                bg-[#FFFDF8]
                p-7
                transition-shadow
                duration-500
                hover:shadow-[0_20px_60px_rgba(59,11,18,0.08)]
                sm:p-9
              "
            >
              {/* Accent line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute left-0 top-0 h-1 bg-[#F59E0B]"
              />

              {/* Subtle Bengali mark */}
              <div className="pointer-events-none absolute -right-3 -top-2 select-none font-serif text-[8rem] leading-none text-[#F59E0B]/4.5 transition-transform duration-500 group-hover:scale-105">
                বৃত্ত
              </div>

              <div className="relative">
                {/* Card heading */}
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#F59E0B]">
                      The Kalpataru Circle
                    </p>

                    <h2 className="mt-5 font-serif text-4xl leading-none tracking-[-0.03em] text-[#3B0B12] sm:text-5xl">
                      Culture
                      <br />
                      <span className="italic text-[#E63946]">creates</span>
                      <br />
                      connection.
                    </h2>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#3B0B12]/10 text-[#E63946] transition-all duration-300 group-hover:border-[#E63946] group-hover:bg-[#E63946] group-hover:text-white">
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.3}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>

                <div className="my-8 h-px bg-[#3B0B12]/10" />

                {/* Points */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-sm text-[#E63946]">
                      01
                    </span>

                    <p className="text-sm leading-7 text-[#3B0B12]/65">
                      Find a community of people with a shared cultural
                      sensibility.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="font-serif text-sm text-[#E63946]">
                      02
                    </span>

                    <p className="text-sm leading-7 text-[#3B0B12]/65">
                      Take part in the celebrations, gatherings and events that
                      bring us together.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="font-serif text-sm text-[#E63946]">
                      03
                    </span>

                    <p className="text-sm leading-7 text-[#3B0B12]/65">
                      Experience a taste of the East, right here in Pune.
                    </p>
                  </div>
                </div>

                {/* Bottom notation */}
                <div className="mt-9 border-t border-[#3B0B12]/10 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/35">
                      Community · Culture · Connection
                    </span>

                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F59E0B]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Small supporting card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="
                mt-4
                flex
                items-center
                justify-between
                rounded-3xl
                border
                border-[#3B0B12]/10
                bg-[#FFFDF8]
                px-5
                py-4
              "
            >
              <div className="flex items-center gap-3">
                <MessageCircle
                  size={15}
                  strokeWidth={1.3}
                  className="text-[#E63946]"
                />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/45">
                  Pune · Eastern India
                </span>
              </div>

              <span className="font-serif text-sm italic text-[#3B0B12]/40">
                Kalpataru
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom scroll cue */}
        <motion.button
          type="button"
          onClick={scrollToBenefits}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25, duration: 0.8 }}
          className="
            absolute
            bottom-0
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            text-[#3B0B12]/40
            transition-colors
            hover:text-[#E63946]
            sm:flex
          "
          aria-label="Scroll to membership benefits"
        >
          <span className="text-[8px] font-semibold uppercase tracking-[0.28em]">
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

export default SectionThree;
