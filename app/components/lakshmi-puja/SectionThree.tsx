"use client";

import { motion } from "motion/react";
import { Footprints, Flower2, Shell, Wheat } from "lucide-react";

const traditions = [
  {
    icon: Footprints,
    title: "Lakshmi&apos;s Footprints",
    description:
      "Lakshmi&apos;s footprints are traditionally drawn as part of the alpana, symbolically welcoming Maa Lakshmi into the home.",
  },
  {
    icon: Wheat,
    title: "Dhan-Shish",
    description:
      "Rice stalks and dhan hold a special place in Bengali Lakshmi Puja, reflecting the agricultural traditions of Bengal.",
  },
  {
    icon: Flower2,
    title: "The Lotus",
    description:
      "The lotus is traditionally associated with Maa Lakshmi and appears among the familiar motifs of Bengali Lakshmi Puja.",
  },
  {
    icon: Shell,
    title: "The Conch",
    description:
      "The conch is another traditional element associated with Lakshmi Puja and Bengali household worship.",
  },
];

const SectionThree = () => {
  return (
    <section
      id="lakshmi-puja-tradition"
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
                The Bengali Lakshmi Puja
              </span>
            </div>

            <p className="mt-7 font-serif text-2xl italic text-[#D94672]/75 sm:text-3xl">
              আলপনার ছোঁয়া
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
            <h2 className="max-w-4xl font-serif text-[clamp(2.8rem,5.7vw,5.8rem)] font-normal leading-[0.9] tracking-tighter text-[#3B0B12]">
              Where tradition
              <span className="block italic text-[#E63946]">becomes art.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
              Bengali Lakshmi Puja has a visual language of its own. Alpana,
              Lakshmi&apos;s footprints, rice stalks and familiar auspicious
              motifs come together to create the distinctive atmosphere of
              Kojagari Lakshmi Puja.
            </p>
          </motion.div>
        </div>

        {/* Alpana feature */}
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
            {/* Bengali visual panel */}
            <div className="relative flex min-h-80 items-center justify-center overflow-hidden border-b border-[#3B0B12]/10 bg-[#fffaf2] p-10 lg:min-h-117.5 lg:border-b-0 lg:border-r">
              {/* Decorative circles */}
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E63946]/10" />

              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F59E0B]/15" />

              {/* Central motif */}
              <div className="relative z-10 text-center">
                <p className="font-serif text-5xl text-[#E63946]/80 sm:text-6xl">
                  পা
                </p>

                <p className="mt-4 font-serif text-xl italic text-[#3B0B12]/55">
                  আলপনা
                </p>

                <div className="mx-auto mt-5 h-px w-12 bg-[#F59E0B]" />
              </div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-12 lg:p-16">
              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#F59E0B]">
                Alpana
              </span>

              <h3 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-[#3B0B12] sm:text-4xl lg:text-5xl">
                A welcome drawn
                <span className="block italic text-[#E63946]">
                  on the floor.
                </span>
              </h3>

              <p className="mt-7 max-w-xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
                Alpana is one of the most recognisable visual traditions of
                Bengali Lakshmi Puja. Among its motifs are Lakshmi&apos;s
                footprints, traditionally drawn to symbolise her arrival into
                the home.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="border-t border-[#3B0B12]/10 pt-5">
                  <p className="font-serif text-xl text-[#3B0B12]">
                    Lakshmi&apos;s footprints
                  </p>

                  <p className="mt-2 text-xs leading-6 text-[#3B0B12]/45">
                    A traditional motif of welcome.
                  </p>
                </div>

                <div className="border-t border-[#3B0B12]/10 pt-5">
                  <p className="font-serif text-xl text-[#3B0B12]">
                    Bengali alpana
                  </p>

                  <p className="mt-2 text-xs leading-6 text-[#3B0B12]/45">
                    Decorative art rooted in Bengali households.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Traditional elements */}
        <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:mt-20">
          {traditions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  min-w-0
                  rounded-3xl
                  border
                  border-[#3B0B12]/10
                  bg-[#FFFDF8]
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#E63946]/25
                  hover:shadow-[0_18px_45px_rgba(59,11,18,0.06)]
                  sm:p-8
                  lg:p-9
                "
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#3B0B12]/10 bg-[#fffaf2]">
                  <Icon
                    size={19}
                    strokeWidth={1.2}
                    className="text-[#E63946]"
                  />
                </div>

                <h3 className="mt-7 font-serif text-2xl leading-tight text-[#3B0B12] sm:text-3xl">
                  {item.title}
                </h3>

                <div className="mt-4 h-px w-10 bg-[#F59E0B]" />

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#3B0B12]/55 sm:text-base sm:leading-8">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="mt-14 border-t border-[#3B0B12]/10 pt-10 sm:mt-16 sm:pt-12"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl font-serif text-xl leading-8 text-[#3B0B12]/70 sm:text-2xl">
              In Bengali homes, the celebration is as much about the beauty of
              the preparation as it is about the puja itself.
            </p>

            <span className="font-serif text-lg italic text-[#D94672]/65">
              লক্ষ্মী মা
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionThree;
