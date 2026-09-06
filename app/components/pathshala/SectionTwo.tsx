"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Heart,
  Languages,
  Palette,
  Sparkles,
} from "lucide-react";

const SectionTwo = () => {
  const experiences = [
    {
      number: "01",
      icon: Heart,
      title: "Community Bonding at Its Best",
      description:
        "Pathshala brought together families and children, strengthening community ties and creating a shared space for learning, participation and values.",
      accent: "#E63946",
    },
    {
      number: "02",
      icon: Languages,
      title: "Bengali Language Education for All Ages",
      description:
        "From toddlers to adults, participants learned to read, write and speak Bengali — rekindling a deeper connection with their mother tongue.",
      accent: "#F59E0B",
    },
    {
      number: "03",
      icon: Palette,
      title: "Cultural Immersion & Bonding",
      description:
        "Songs, stories, art and cultural learning made the sessions engaging while deepening cultural pride and strengthening connections.",
      accent: "#D94672",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Heritage for the Next Generation",
      description:
        "Through participation, children developed a stronger understanding and appreciation of Bengali heritage, traditions and identity.",
      accent: "#E63946",
    },
    {
      number: "05",
      icon: BookOpen,
      title: "Widespread Recognition",
      description:
        "The initiative received high praise from several other Bengali associations for its structure, impact and reach within the community.",
      accent: "#F59E0B",
    },
  ];

  return (
    <section
      id="pathshala-experience"
      className="relative overflow-hidden bg-[#FFFAF2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#E63946]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#3B0B12]/55">
                The Pathshala Experience
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-[0.98] tracking-[-0.04em] text-[#3B0B12] sm:text-5xl lg:text-6xl">
              More than a class.
              <br />
              <span className="italic">A shared experience.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-2xl lg:ml-auto"
          >
            <p className="text-base leading-8 text-[#3B0B12]/65 sm:text-lg">
              Pathshala created a space where language, culture and community
              came together naturally — bringing generations closer through
              learning and participation.
            </p>
          </motion.div>
        </div>

        {/* Experience cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-6">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-[#3B0B12]/10 bg-[#FFFDF8] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(59,11,18,0.08)] ${
                  index === 0 || index === 3 ? "lg:col-span-2" : "lg:col-span-2"
                } ${index === 4 ? "md:col-span-2 lg:col-span-6" : ""}`}
              >
                {/* Accent line */}
                <div
                  className="absolute left-0 top-0 h-1 w-full"
                  style={{ backgroundColor: item.accent }}
                />

                {/* Background number */}
                <div className="pointer-events-none absolute -right-2 -top-7 select-none font-serif text-[8rem] leading-none text-[#3B0B12]/[0.035]">
                  {item.number}
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
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <span className="text-xs font-semibold tracking-[0.18em] text-[#3B0B12]/30">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-8 max-w-md font-serif text-2xl leading-tight tracking-tight text-[#3B0B12] sm:text-[1.7rem]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#3B0B12]/60">
                    {item.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#3B0B12]/35 transition-colors duration-300 group-hover:text-[#3B0B12]/60">
                    <span>Pathshala</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-col gap-5 border-t border-[#3B0B12]/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl text-sm leading-7 text-[#3B0B12]/55 sm:text-base">
            A simple initiative that became a meaningful space for language,
            culture, heritage and community.
          </p>

          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#3B0B12]/40">
            <span className="h-2 w-2 rounded-full bg-[#E63946]" />
            Language
            <span className="text-[#3B0B12]/20">·</span>
            Culture
            <span className="text-[#3B0B12]/20">·</span>
            Community
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTwo;
