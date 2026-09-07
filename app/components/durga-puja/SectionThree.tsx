"use client";

import { motion } from "framer-motion";
import { ArrowRight, Ship, Sparkles } from "lucide-react";

const SectionThree = () => {
  const journey = [
    {
      bengali: "আগমন",
      label: "Agaman",
      title: "Maa Arrives on Horse",
      description:
        "In 2026, Maa Durga is traditionally said to arrive on a horse. The horse represents movement and carries a traditional symbolism of change and unrest.",
      accent: "#E63946",
      icon: ArrowRight,
    },
    {
      bengali: "আরাধনা",
      label: "Worship",
      title: "Five Days of Celebration",
      description:
        "From Bodhan and Nabapatrika to Anjali, Sandhi Puja, Homa and Arati, the five days unfold through rituals, devotion and community celebration.",
      accent: "#F59E0B",
      icon: Sparkles,
    },
    {
      bengali: "গমন",
      label: "Gaman",
      title: "Maa Leaves by Boat",
      description:
        "On Dashami, Maa Durga traditionally departs by boat. The boat is associated with abundance, crops and water in traditional Bengali interpretations.",
      accent: "#D94672",
      icon: Ship,
    },
  ];

  return (
    <section
      id="maa-journey"
      className="relative overflow-hidden bg-[#FFFAF2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D94672]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#3B0B12]/50">
                The Journey of Maa
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-[0.96] tracking-[-0.04em] text-[#3B0B12] sm:text-5xl lg:text-6xl">
              She comes,
              <br />
              <span className="italic">we celebrate.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-base leading-8 text-[#3B0B12]/60 sm:text-lg lg:ml-auto"
          >
            In the Bengali tradition, Maa&apos;s arrival and departure carry
            their own symbolism. Her journey gives the Puja an emotional
            beginning, a time of celebration and an unforgettable farewell.
          </motion.p>
        </div>

        {/* Journey cards */}
        <div className="mt-16 grid gap-5 lg:mt-20 lg:grid-cols-3">
          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-[#3B0B12]/10 bg-[#FFFDF8] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(59,11,18,0.08)]"
              >
                {/* Accent */}
                <div
                  className="absolute left-0 top-0 h-1 w-full"
                  style={{ backgroundColor: item.accent }}
                />

                <div className="relative p-7 sm:p-8">
                  {/* Bengali decorative typography */}
                  <div className="pointer-events-none absolute -right-3 -top-7 select-none font-serif text-[7rem] leading-none text-[#3B0B12]/[0.035]">
                    {item.bengali}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: `${item.accent}12`,
                          color: item.accent,
                        }}
                      >
                        <Icon size={21} strokeWidth={1.6} />
                      </div>

                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#3B0B12]/25">
                        0{index + 1}
                      </span>
                    </div>

                    <p
                      className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em]"
                      style={{ color: item.accent }}
                    >
                      {item.label}
                    </p>

                    <h3 className="mt-3 font-serif text-2xl leading-tight tracking-tight text-[#3B0B12] sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#3B0B12]/55">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Agaman / Gaman detail */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75 }}
          className="mt-6 overflow-hidden rounded-[1.75rem] border border-[#3B0B12]/10 bg-[#FFFDF8]"
        >
          <div className="grid lg:grid-cols-2">
            {/* Agaman */}
            <div className="border-b border-[#3B0B12]/10 p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-11">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E63946]/10 text-[#E63946]">
                    <ArrowRight size={18} strokeWidth={1.7} />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E63946]">
                    Maa&apos;s Agaman
                  </span>
                </div>

                <span className="font-serif text-2xl text-[#3B0B12]/10">
                  আগমন
                </span>
              </div>

              <h3 className="mt-7 font-serif text-3xl tracking-[-0.03em] text-[#3B0B12]">
                Horse
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#3B0B12]/55">
                Maa Durga arrives on a horse in 2026. In traditional
                interpretations, the horse signifies movement and is associated
                with a year of change and unrest.
              </p>

              <div className="mt-7 border-t border-[#3B0B12]/10 pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3B0B12]/35">
                  Traditional symbolism
                </p>

                <p className="mt-2 font-serif text-xl text-[#3B0B12]">
                  Movement · Change · Energy
                </p>
              </div>
            </div>

            {/* Gaman */}
            <div className="p-7 sm:p-9 lg:p-11">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F59E0B]/10 text-[#F59E0B]">
                    <Ship size={18} strokeWidth={1.7} />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
                    Maa&apos;s Gaman
                  </span>
                </div>

                <span className="font-serif text-2xl text-[#3B0B12]/10">
                  গমন
                </span>
              </div>

              <h3 className="mt-7 font-serif text-3xl tracking-[-0.03em] text-[#3B0B12]">
                Boat
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#3B0B12]/55">
                Maa Durga departs by boat on Dashami. Traditionally, the boat is
                associated with abundance, increased crops and water.
              </p>

              <div className="mt-7 border-t border-[#3B0B12]/10 pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3B0B12]/35">
                  Traditional symbolism
                </p>

                <p className="mt-2 font-serif text-xl text-[#3B0B12]">
                  Abundance · Crops · Water
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Farewell */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 text-center"
        >
          <span className="font-serif text-3xl text-[#E63946] sm:text-4xl">
            আসছে বছর আবার হবে
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#3B0B12]/30">
            Until Maa returns again
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionThree;
