"use client";

import { motion } from "motion/react";
import { ArrowUpRight, CalendarDays, Heart, MapPin, Users } from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: Users,
    title: "A Community to Belong To",
    description:
      "Be part of a growing community of people connected by shared roots, values and a common cultural sensibility.",
    accent: "#E63946",
    mark: "সাথে",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Be Part of Every Celebration",
    description:
      "Take part in the events, gatherings and cultural celebrations that bring the Kalpataru community together throughout the year.",
    accent: "#F59E0B",
    mark: "উৎসব",
  },
  {
    number: "03",
    icon: Heart,
    title: "Keep Culture Alive",
    description:
      "Support and participate in initiatives that celebrate Bengali art, traditions, language and the cultural heritage we carry with us.",
    accent: "#D94672",
    mark: "সংস্কৃতি",
  },
  {
    number: "04",
    icon: MapPin,
    title: "A Taste of the East in Pune",
    description:
      "Find familiar flavours, traditions, conversations and connections that bring a little piece of Eastern India closer to home.",
    accent: "#E63946",
    mark: "পূর্ব",
  },
];

const SectionFour = () => {
  return (
    <section
      id="membership-benefits"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14"
        >
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#E63946]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3B0B12]/50">
                  More than membership
                </span>
              </div>

              <p className="font-serif text-lg italic text-[#D94672]">
                A place to belong.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.04em] text-[#3B0B12] sm:text-6xl lg:text-[5.2rem]">
                Find your people.
                <br />
                <span className="italic text-[#E63946]">Find your place.</span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#3B0B12]/60 sm:text-base sm:leading-8">
                Membership is an invitation to participate, connect and make
                Kalpataru a part of your life in Pune.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <div className="grid gap-5 md:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  min-h-97.5
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-[#3B0B12]/10
                  bg-[#FFFDF8]
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_20px_60px_rgba(59,11,18,0.08)]
                  sm:p-9
                  lg:p-10
                "
              >
                {/* Top accent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.25 + index * 0.08,
                  }}
                  className="absolute left-0 top-0 h-1"
                  style={{ backgroundColor: benefit.accent }}
                />

                {/* Background Bengali mark */}
                <div
                  className="pointer-events-none absolute -right-3 top-3 select-none font-serif text-[7rem] leading-none transition-transform duration-500 group-hover:scale-105"
                  style={{ color: `${benefit.accent}0B` }}
                >
                  {benefit.mark}
                </div>

                {/* Header */}
                <div className="relative flex items-start justify-between">
                  <span
                    className="font-serif text-sm italic"
                    style={{ color: benefit.accent }}
                  >
                    {benefit.number}
                  </span>

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      transition-all
                      duration-500
                    "
                    style={{
                      borderColor: `${benefit.accent}30`,
                      color: benefit.accent,
                      backgroundColor: `${benefit.accent}08`,
                    }}
                  >
                    <Icon size={18} strokeWidth={1.25} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-16 max-w-lg">
                  <h3 className="font-serif text-2xl leading-tight tracking-[-0.02em] text-[#3B0B12] sm:text-3xl">
                    {benefit.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-[#3B0B12]/60">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-[#3B0B12]/10 pt-5 sm:bottom-9 sm:left-9 sm:right-9 lg:bottom-10 lg:left-10 lg:right-10">
                  <span
                    className="text-[8px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: `${benefit.accent}B0` }}
                  >
                    Kalpataru membership
                  </span>

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-300
                    "
                    style={{
                      borderColor: `${benefit.accent}25`,
                      color: benefit.accent,
                    }}
                  >
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.3}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mx-auto mt-20 max-w-3xl text-center lg:mt-24"
        >
          <div className="mx-auto mb-7 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#E63946]/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
            <span className="h-px w-8 bg-[#E63946]/30" />
          </div>

          <p className="font-serif text-xl italic leading-9 text-[#3B0B12]/65 sm:text-2xl">
            “Sometimes, belonging is simply finding people who understand where
            you come from.”
          </p>

          <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3B0B12]/35">
            The spirit of Kalpataru
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionFour;
