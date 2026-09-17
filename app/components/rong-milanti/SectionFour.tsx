"use client";

import { motion } from "motion/react";
import { Users, Music2, Drama, Sparkles, PartyPopper } from "lucide-react";

const highlights = [
  {
    icon: Music2,
    title: "Music & Dance",
    description:
      "Past celebrations have filled the day with soulful melodies, vibrant rhythms and lively dance performances.",
    accent: "#E63946",
  },
  {
    icon: Sparkles,
    title: "Cultural Programmes",
    description:
      "Day-long programmes and activities have created an engaging celebration for members and families across age groups.",
    accent: "#F59E0B",
  },
  {
    icon: Drama,
    title: "Dance Drama",
    description:
      "Group dance dramas have brought stories to life through movement, expression, artistry and performance.",
    accent: "#D94672",
  },
  {
    icon: PartyPopper,
    title: "DJ Night",
    description:
      "The celebration has also extended into an energetic evening of music, performances and shared enjoyment.",
    accent: "#E63946",
  },
];

const SectionFour = () => {
  return (
    <section
      id="rong-milanti-at-kalpataru"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* Decorative colour fields */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-[#F59E0B]/[0.07] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-[#D94672]/5.5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#E63946]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/45 sm:text-[10px]">
                Rong Milanti at Kalpataru
              </span>
            </div>

            <p className="mt-7 font-serif text-2xl italic text-[#D94672]/75 sm:text-3xl">
              আমাদের রঙ মিলন্তি
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-5xl font-serif text-[clamp(3rem,6vw,6rem)] font-normal leading-[0.9] tracking-tighter text-[#3B0B12]">
              A celebration
              <span className="block italic text-[#E63946]">
                made for everyone.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
              Rong Milanti at Kalpataru has always carried a strong community
              spirit. Previous celebrations have brought devotees and families
              together through colour, music, dance, cultural performances and
              an evening filled with energy.
            </p>
          </motion.div>
        </div>

        {/* Historical marker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="mt-14 flex items-center gap-4 sm:mt-16"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E63946]/10 text-[#E63946]">
            <Users size={17} strokeWidth={1.25} />
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#E63946]">
              From past celebrations
            </p>

            <p className="mt-1 text-xs text-[#3B0B12]/45 sm:text-sm">
              A glimpse into the spirit of Rong Milanti at Kalpataru.
            </p>
          </div>
        </motion.div>

        {/* Main historical feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 overflow-hidden rounded-4xl border border-[#3B0B12]/10 bg-[#3B0B12]"
        >
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Large number */}
            <div className="relative flex min-h-95 items-center justify-center overflow-hidden bg-[#E63946] p-10 sm:min-h-112.5 lg:min-h-127.5">
              {/* Oversized background typography */}
              <div
                aria-hidden="true"
                className="absolute -bottom-12 -left-5 select-none font-serif text-[13rem] leading-none text-white/8 sm:text-[16rem]"
              >
                200
              </div>

              {/* Colour circles */}
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#FFD166]/20" />

              <div className="absolute bottom-10 right-12 h-20 w-20 rounded-full border border-white/15" />

              <div className="absolute left-12 top-16 h-3 w-3 rounded-full bg-[#FFD166]/60" />

              <div className="absolute bottom-24 left-20 h-2 w-2 rounded-full bg-white/30" />

              <div className="relative z-10 text-center">
                <p className="font-serif text-[clamp(6rem,12vw,10rem)] font-normal leading-[0.8] tracking-tighter text-white">
                  200<span className="text-[#FFD166]">+</span>
                </p>

                <div className="mx-auto mt-8 h-px w-14 bg-[#FFD166]" />

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/65">
                  Devotees in past celebrations
                </p>
              </div>
            </div>

            {/* Story */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#FFD166]">
                The Kalpataru experience
              </span>

              <h3 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                Colour becomes
                <span className="block italic text-[#FFD166]">
                  celebration.
                </span>
              </h3>

              <p className="mt-7 max-w-xl text-sm leading-8 text-white/60 sm:text-base">
                Previous Rong Milanti celebrations have transformed the
                traditional festival into a vibrant community gathering.
                Alongside the colours of Dol, the celebration has made space for
                music, dance, drama and entertainment.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-8 text-white/45 sm:text-[15px]">
                From performances during the day to the energy of the evening,
                Rong Milanti has brought together different generations in one
                shared celebration.
              </p>

              {/* Community statement */}
              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="font-serif text-lg italic leading-7 text-white/75">
                  A festival where culture takes centre stage and everyone has a
                  reason to join the celebration.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Past celebration highlights */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;

            return (
              <motion.article
                key={highlight.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-3xl border border-[#3B0B12]/10 bg-[#FFFDF8] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#E63946]/20 hover:shadow-[0_18px_45px_rgba(59,11,18,0.06)] sm:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: `${highlight.accent}12`,
                      color: highlight.accent,
                    }}
                  >
                    <Icon size={19} strokeWidth={1.25} />
                  </div>

                  <span
                    className="font-serif text-4xl leading-none"
                    style={{
                      color: `${highlight.accent}18`,
                    }}
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 font-serif text-2xl text-[#3B0B12] sm:text-3xl">
                  {highlight.title}
                </h3>

                <div
                  className="mt-4 h-px w-10"
                  style={{
                    backgroundColor: highlight.accent,
                  }}
                />

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#3B0B12]/55 sm:text-[15px] sm:leading-8">
                  {highlight.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="mt-14 border-t border-[#3B0B12]/10 pt-8 sm:mt-16"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-3xl font-serif text-xl leading-8 text-[#3B0B12]/65 sm:text-2xl sm:leading-9">
              More than a festival of colour, Rong Milanti has become a space
              where generations meet through culture, performance and joy.
            </p>

            <span className="font-serif text-lg italic text-[#D94672]/65">
              আনন্দ · উৎসব
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionFour;
