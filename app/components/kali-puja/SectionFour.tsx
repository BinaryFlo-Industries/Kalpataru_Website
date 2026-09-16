"use client";

import { motion } from "motion/react";
import { Flame, Flower2, HandHeart, Sparkles } from "lucide-react";

const observances = [
  {
    icon: Flame,
    title: "The Sacred Night",
    description:
      "Shyama Puja is centred on the night of Amavasya, with the worship of Maa Kali taking place around the Nishita period.",
  },
  {
    icon: Flower2,
    title: "Offerings & Worship",
    description:
      "The observance is marked by devotional worship and offerings made to Maa Kali as part of the traditional puja.",
  },
  {
    icon: HandHeart,
    title: "Devotion & Prayer",
    description:
      "The night is observed as a deeply devotional occasion, bringing worshippers together in prayer and remembrance.",
  },
  {
    icon: Sparkles,
    title: "A Bengali Tradition",
    description:
      "For Bengali communities, Shyama Puja is an important cultural and spiritual observance associated with the Amavasya night.",
  },
];

const SectionFour = () => {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
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
                The Tradition
              </span>
            </div>

            <p className="mt-7 font-serif text-2xl italic text-[#D94672]/75">
              মায়ের আরাধনা
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
            <h2 className="max-w-3xl font-serif text-[clamp(2.8rem,5.5vw,5.5rem)] font-normal leading-[0.9] tracking-tighter text-[#3B0B12]">
              A night of
              <span className="block italic text-[#E63946]">devotion.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-[#3B0B12]/55 sm:text-base">
              Shyama Puja carries a distinctive place in Bengali tradition.
              Observed on the Amavasya night, it brings together worship,
              devotion and the quiet atmosphere of a night dedicated to Maa
              Kali.
            </p>
          </motion.div>
        </div>

        {/* Observances */}
        <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:gap-6">
          {observances.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.07,
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
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#3B0B12]/10 bg-[#fffaf2] transition-colors duration-300 group-hover:border-[#E63946]/25">
                  <Icon
                    size={19}
                    strokeWidth={1.25}
                    className="text-[#E63946]"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-7 font-serif text-2xl leading-tight text-[#3B0B12] sm:text-3xl">
                  {item.title}
                </h3>

                {/* Accent */}
                <div className="mt-4 h-px w-10 bg-[#F59E0B]" />

                {/* Description */}
                <p className="mt-5 max-w-xl text-sm leading-7 text-[#3B0B12]/55 sm:text-base sm:leading-8">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Closing feature */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.75,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 border-t border-[#3B0B12]/10 pt-10 sm:mt-16 sm:pt-12 lg:mt-20"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-serif text-2xl leading-8 text-[#3B0B12]/75 sm:text-3xl">
                The night belongs to Maa.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-8 text-[#3B0B12]/50 sm:text-base">
                A Bengali observance where the stillness of Amavasya meets
                devotion, prayer and the worship of Shyama Maa.
              </p>
            </div>

            <span className="font-serif text-2xl italic text-[#D94672]/65">
              জয় মা কালী
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionFour;
