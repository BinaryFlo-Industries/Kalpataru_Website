"use client";

import { motion } from "motion/react";
import {
  Users,
  UtensilsCrossed,
  Music,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Users,
    number: "800+",
    title: "Devotees",
    description:
      "Past celebrations have brought together more than 800 devotees in a shared celebration of faith and culture.",
    accent: "#E63946",
  },
  {
    icon: UtensilsCrossed,
    number: "01",
    title: "Free Bhog",
    description:
      "Community participation has extended beyond the puja, with free bhog being part of previous celebrations.",
    accent: "#F59E0B",
  },
  {
    icon: Music,
    number: "01",
    title: "Full Day",
    titleAlt: "Cultural Programmes",
    description:
      "Previous Saraswati Puja celebrations have included cultural programmes throughout the day.",
    accent: "#D94672",
  },
  {
    icon: HeartHandshake,
    number: "01",
    title: "Community",
    titleAlt: "Togetherness",
    description:
      "The celebration has drawn strong participation from the wider community, creating a shared cultural experience.",
    accent: "#E63946",
  },
];

const SectionFour = () => {
  return (
    <section
      id="saraswati-at-kalpataru"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
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
                Saraswati Puja at Kalpataru
              </span>
            </div>

            <p className="mt-7 font-serif text-2xl italic text-[#D94672]/75 sm:text-3xl">
              আমাদের সরস্বতী পূজা
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
                shared by the community.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
              At Kalpataru, Saraswati Puja has grown beyond the boundaries of
              the ceremonial space. Previous celebrations have brought devotees
              together through worship, bhog, cultural programmes and a strong
              sense of community participation.
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
            <Sparkles size={17} strokeWidth={1.25} />
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#E63946]">
              From past celebrations
            </p>

            <p className="mt-1 text-xs text-[#3B0B12]/45 sm:text-sm">
              A glimpse into the scale and spirit of Saraswati Puja at
              Kalpataru.
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
            <div className="relative flex min-h-90 items-center justify-center overflow-hidden bg-[#E63946] p-10 sm:min-h-107.5 lg:min-h-125">
              {/* Background typography */}
              <div className="absolute -bottom-10 -left-5 select-none font-serif text-[12rem] leading-none text-white/8 sm:text-[15rem]">
                800
              </div>

              <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-white/15" />

              <div className="absolute bottom-16 right-16 h-14 w-14 rounded-full border border-[#F59E0B]/40" />

              <div className="relative z-10 text-center">
                <p className="font-serif text-[clamp(6rem,12vw,10rem)] font-normal leading-[0.8] tracking-tighter text-white">
                  800<span className="text-[#FFD166]">+</span>
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
                A growing tradition
              </span>

              <h3 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                More than a puja.
                <span className="block italic text-[#FFD166]">
                  A community gathering.
                </span>
              </h3>

              <p className="mt-7 max-w-xl text-sm leading-8 text-white/60 sm:text-base">
                Previous celebrations at Kalpataru have reflected the
                organisation&apos;s community-oriented spirit. Alongside the
                worship of Maa Saraswati, devotees have come together for bhog,
                cultural programmes and moments of shared participation.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-8 text-white/45 sm:text-[15px]">
                The scale of participation has made Saraswati Puja one of those
                occasions where devotion and cultural expression naturally meet
                within the Kalpataru community.
              </p>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="font-serif text-lg italic leading-7 text-white/75">
                  “A day of purity and purpose, shared through culture, devotion
                  and togetherness.”
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Historical highlights */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16">
          {highlights.slice(1).map((highlight, index) => {
            const Icon = highlight.icon;

            return (
              <motion.article
                key={highlight.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-3xl border border-[#3B0B12]/10 bg-[#FFFDF8] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#E63946]/20 hover:shadow-[0_18px_45px_rgba(59,11,18,0.06)] sm:p-8"
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

                <h3 className="mt-7 font-serif text-2xl leading-tight text-[#3B0B12] sm:text-3xl">
                  {highlight.title}

                  {highlight.titleAlt && (
                    <span className="block italic text-[#E63946]/75">
                      {highlight.titleAlt}
                    </span>
                  )}
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
              From worship to bhog, from cultural programmes to community
              participation, Saraswati Puja at Kalpataru has always been about
              coming together.
            </p>

            <span className="font-serif text-lg italic text-[#D94672]/65">
              কালপতরু
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionFour;
