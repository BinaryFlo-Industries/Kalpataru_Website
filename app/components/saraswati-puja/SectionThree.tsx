"use client";

import { motion } from "motion/react";
import { BookOpen, Flower2, HandHeart, Music2, Sparkles } from "lucide-react";

const rituals = [
  {
    icon: Flower2,
    title: "The Offering",
    description:
      "Flowers and traditional offerings form part of the worship offered to Maa Saraswati during the puja.",
    accent: "#E63946",
  },
  {
    icon: BookOpen,
    title: "Books & Learning",
    description:
      "Books, writing materials and other objects connected with learning may be placed before the deity as part of the observance.",
    accent: "#F59E0B",
  },
  {
    icon: Music2,
    title: "Musical Instruments",
    description:
      "Musical instruments may also be placed before Maa Saraswati, reflecting the traditional association of the goddess with music and creative expression.",
    accent: "#D94672",
  },
  {
    icon: HandHeart,
    title: "Pushpanjali",
    description:
      "Devotees offer flowers and prayers as part of the worship, participating together in the devotional moment.",
    accent: "#E63946",
  },
];

const SectionThree = () => {
  return (
    <section
      id="saraswati-puja-ritual"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
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
                The Ritual of Saraswati Puja
              </span>
            </div>

            <p className="mt-7 font-serif text-2xl italic text-[#D94672]/75 sm:text-3xl">
              পূজার আচার
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
            <h2 className="max-w-4xl font-serif text-[clamp(3rem,6vw,6rem)] font-normal leading-[0.9] tracking-tighter text-[#3B0B12]">
              A ritual of
              <span className="block italic text-[#E63946]">reverence.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
              At the centre of Saraswati Puja is the worship of Maa Saraswati.
              The observance brings together prayers, offerings and objects
              associated with learning and the creative arts in a shared
              devotional setting.
            </p>
          </motion.div>
        </div>

        {/* Main ritual feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 overflow-hidden rounded-4xl border border-[#3B0B12]/10 bg-[#FFFDF8] lg:mt-20"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Visual / central motif */}
            <div className="relative flex min-h-105 items-center justify-center overflow-hidden bg-[#fffaf2] p-10 lg:min-h-130">
              {/* Decorative rings */}
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E63946]/10" />

              <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F59E0B]/15" />

              <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D94672]/10" />

              {/* Decorative dots */}
              <div className="absolute left-[18%] top-[24%] h-2 w-2 rounded-full bg-[#E63946]/30" />
              <div className="absolute right-[20%] top-[31%] h-1.5 w-1.5 rounded-full bg-[#F59E0B]/40" />
              <div className="absolute bottom-[25%] left-[24%] h-1.5 w-1.5 rounded-full bg-[#D94672]/35" />
              <div className="absolute bottom-[20%] right-[25%] h-2 w-2 rounded-full bg-[#E63946]/25" />

              {/* Central symbol */}
              <div className="relative z-10 text-center">
                <Sparkles
                  size={22}
                  strokeWidth={1}
                  className="mx-auto text-[#F59E0B]"
                />

                <p className="mt-6 font-serif text-6xl leading-none text-[#E63946]/80 sm:text-7xl">
                  ॐ
                </p>

                <div className="mx-auto mt-6 h-px w-12 bg-[#F59E0B]" />

                <p className="mt-5 font-serif text-2xl italic text-[#3B0B12]/60">
                  সরস্বতী
                </p>

                <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.28em] text-[#3B0B12]/35">
                  Maa Saraswati
                </p>
              </div>
            </div>

            {/* Ritual explanation */}
            <div className="p-8 sm:p-12 lg:p-16">
              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#E63946]">
                At the heart of the puja
              </span>

              <h3 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-[#3B0B12] sm:text-4xl lg:text-5xl">
                Worship, offering
                <span className="block italic text-[#E63946]">
                  and participation.
                </span>
              </h3>

              <p className="mt-7 max-w-xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
                The puja brings devotees together around the deity through
                traditional worship and offerings. Objects connected with
                learning and artistic practice become part of the devotional
                space, giving the ritual its distinctive character.
              </p>

              {/* Ritual sequence */}
              <div className="mt-10 space-y-5">
                <div className="flex gap-4 border-t border-[#3B0B12]/10 pt-5">
                  <span className="font-serif text-xl text-[#E63946]/70">
                    01
                  </span>

                  <div>
                    <h4 className="font-serif text-lg text-[#3B0B12]">
                      Worship
                    </h4>

                    <p className="mt-1 text-xs leading-6 text-[#3B0B12]/45">
                      Maa Saraswati is invoked and worshipped through the puja.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 border-t border-[#3B0B12]/10 pt-5">
                  <span className="font-serif text-xl text-[#F59E0B]/80">
                    02
                  </span>

                  <div>
                    <h4 className="font-serif text-lg text-[#3B0B12]">
                      Offerings
                    </h4>

                    <p className="mt-1 text-xs leading-6 text-[#3B0B12]/45">
                      Flowers and traditional offerings are presented during the
                      observance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 border-t border-[#3B0B12]/10 pt-5">
                  <span className="font-serif text-xl text-[#D94672]/80">
                    03
                  </span>

                  <div>
                    <h4 className="font-serif text-lg text-[#3B0B12]">
                      Participation
                    </h4>

                    <p className="mt-1 text-xs leading-6 text-[#3B0B12]/45">
                      Devotees come together for prayers and pushpanjali.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Traditional elements */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16">
          {rituals.map((ritual, index) => {
            const Icon = ritual.icon;

            return (
              <motion.article
                key={ritual.title}
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
                      backgroundColor: `${ritual.accent}12`,
                      color: ritual.accent,
                    }}
                  >
                    <Icon size={19} strokeWidth={1.25} />
                  </div>

                  <span
                    className="font-serif text-4xl leading-none"
                    style={{
                      color: `${ritual.accent}18`,
                    }}
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 font-serif text-2xl text-[#3B0B12] sm:text-3xl">
                  {ritual.title}
                </h3>

                <div
                  className="mt-4 h-px w-10"
                  style={{
                    backgroundColor: ritual.accent,
                  }}
                />

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#3B0B12]/55 sm:text-[15px] sm:leading-8">
                  {ritual.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Closing note */}
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
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl font-serif text-lg leading-8 text-[#3B0B12]/65 sm:text-xl">
              The ritual brings devotion, learning and artistic practice into
              one shared space.
            </p>

            <span className="font-serif text-lg italic text-[#D94672]/65">
              পূজার আচার
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionThree;
