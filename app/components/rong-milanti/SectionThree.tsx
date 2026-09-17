"use client";

import { motion } from "motion/react";
import { Flower2, Music2, Palette, Sparkles } from "lucide-react";

const elements = [
  {
    icon: Flower2,
    title: "Radha & Krishna",
    description:
      "Dol is traditionally associated with Radha and Krishna, bringing devotion and the timeless poetry of their story into the celebration.",
    accent: "#E63946",
  },
  {
    icon: Sparkles,
    title: "The Dol",
    description:
      "The festival takes its name from the traditional dol, or swing, associated with the worship and ceremonial presentation of Radha and Krishna.",
    accent: "#F59E0B",
  },
  {
    icon: Palette,
    title: "Abir",
    description:
      "Soft clouds of abir bring colour into the celebration, giving Bengali Dol its distinctive visual character.",
    accent: "#D94672",
  },
  {
    icon: Music2,
    title: "Music & Song",
    description:
      "Devotional music, songs and dance add rhythm to the celebration, allowing culture and devotion to exist together.",
    accent: "#E63946",
  },
];

const SectionThree = () => {
  return (
    <section
      id="rong-milanti-radha-krishna"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* Decorative colour fields */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#E63946]/5.5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#D94672]/6 blur-3xl"
      />

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
                The Spirit of Dol
              </span>
            </div>

            <p className="mt-7 font-serif text-2xl italic text-[#D94672]/75 sm:text-3xl">
              রাধা · কৃষ্ণ · আবির
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
              Where devotion
              <span className="block italic text-[#E63946]">meets colour.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
              Beneath the colours of Dol lies a tradition shaped by devotion,
              music and the enduring imagery of Radha and Krishna. In Bengal,
              these elements give the festival a character that is as lyrical as
              it is joyful.
            </p>
          </motion.div>
        </div>

        {/* Main editorial feature */}
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
            {/* Artistic visual */}
            <div className="relative flex min-h-112.5 items-center justify-center overflow-hidden bg-[#FCEEEF] p-10 sm:min-h-130 lg:min-h-147.5">
              {/* Large colour circles */}
              <div className="absolute left-[18%] top-[18%] h-32 w-32 rounded-full bg-[#E63946]/10 blur-sm" />

              <div className="absolute right-[15%] top-[25%] h-24 w-24 rounded-full bg-[#F59E0B]/20 blur-sm" />

              <div className="absolute bottom-[17%] left-[20%] h-28 w-28 rounded-full bg-[#D94672]/10 blur-sm" />

              <div className="absolute bottom-[23%] right-[20%] h-20 w-20 rounded-full bg-[#FFD166]/25 blur-sm" />

              {/* Central circles */}
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E63946]/10 sm:h-80 sm:w-80" />

              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F59E0B]/15" />

              {/* Central composition */}
              <div className="relative z-10 text-center">
                <p className="font-serif text-6xl leading-none text-[#E63946]/80 sm:text-7xl">
                  রাধা
                </p>

                <div className="my-4 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-[#F59E0B]" />

                  <span className="font-serif text-xl italic text-[#3B0B12]/40">
                    &
                  </span>

                  <span className="h-px w-8 bg-[#F59E0B]" />
                </div>

                <p className="font-serif text-6xl leading-none text-[#D94672]/80 sm:text-7xl">
                  কৃষ্ণ
                </p>

                <div className="mx-auto mt-7 h-px w-12 bg-[#F59E0B]" />

                <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/40">
                  Devotion · Music · Colour
                </p>
              </div>

              {/* Decorative dots */}
              <div className="absolute left-[12%] top-[42%] h-2 w-2 rounded-full bg-[#E63946]/30" />
              <div className="absolute right-[12%] top-[48%] h-1.5 w-1.5 rounded-full bg-[#F59E0B]/50" />
              <div className="absolute bottom-[30%] left-[14%] h-1.5 w-1.5 rounded-full bg-[#D94672]/35" />
            </div>

            {/* Story */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#E63946]">
                The heart of the celebration
              </span>

              <h3 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-[#3B0B12] sm:text-4xl lg:text-5xl">
                A festival of
                <span className="block italic text-[#E63946]">
                  devotion and joy.
                </span>
              </h3>

              <p className="mt-7 max-w-xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
                The Bengali tradition of Dol carries a devotional character
                alongside its celebration of colour. Radha and Krishna remain
                central to this imagery, while music, dance and abir transform
                the day into a shared cultural experience.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-8 text-[#3B0B12]/45 sm:text-[15px]">
                It is this meeting of reverence and celebration that gives Dol
                its particular charm — festive without losing its connection to
                Bengal&apos;s artistic and devotional traditions.
              </p>

              {/* Element markers */}
              <div className="mt-10 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-[#E63946]/6 p-4">
                  <p className="font-serif text-xl text-[#E63946]">রাধা</p>

                  <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#3B0B12]/35">
                    Radha
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F59E0B]/8 p-4">
                  <p className="font-serif text-xl text-[#F59E0B]">কৃষ্ণ</p>

                  <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#3B0B12]/35">
                    Krishna
                  </p>
                </div>

                <div className="rounded-2xl bg-[#D94672]/[0.07] p-4">
                  <p className="font-serif text-xl text-[#D94672]">আবির</p>

                  <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#3B0B12]/35">
                    Abir
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cultural elements */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16">
          {elements.map((element, index) => {
            const Icon = element.icon;

            return (
              <motion.article
                key={element.title}
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
                      backgroundColor: `${element.accent}12`,
                      color: element.accent,
                    }}
                  >
                    <Icon size={19} strokeWidth={1.25} />
                  </div>

                  <span
                    className="font-serif text-4xl leading-none"
                    style={{
                      color: `${element.accent}18`,
                    }}
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 font-serif text-2xl text-[#3B0B12] sm:text-3xl">
                  {element.title}
                </h3>

                <div
                  className="mt-4 h-px w-10"
                  style={{
                    backgroundColor: element.accent,
                  }}
                />

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#3B0B12]/55 sm:text-[15px] sm:leading-8">
                  {element.description}
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
            <p className="max-w-3xl font-serif text-lg leading-8 text-[#3B0B12]/65 sm:text-xl">
              In the colours of Dol, devotion finds a joyful expression through
              music, movement and the simple beauty of abir.
            </p>

            <span className="font-serif text-lg italic text-[#D94672]/65">
              রঙে রঙে
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionThree;
