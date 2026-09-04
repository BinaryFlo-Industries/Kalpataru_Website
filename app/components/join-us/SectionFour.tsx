"use client";

import { motion } from "motion/react";
import { ArrowRight, CalendarDays, Heart, MapPin, Users } from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: Users,
    title: "A Community to Belong To",
    description:
      "Be part of a growing community of people connected by shared roots, values and a common cultural sensibility.",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Be Part of Every Celebration",
    description:
      "Take part in the events, gatherings and cultural celebrations that bring the Kalpataru community together throughout the year.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Keep Culture Alive",
    description:
      "Support and participate in initiatives that celebrate Bengali art, traditions, language and the cultural heritage we carry with us.",
  },
  {
    number: "04",
    icon: MapPin,
    title: "A Taste of the East in Pune",
    description:
      "Find familiar flavours, traditions, conversations and connections that bring a little piece of Eastern India closer to home.",
  },
];

const SectionTwo = () => {
  return (
    <section
      id="membership-benefits"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      {/* Decorative vertical line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#9b7448]/10 lg:block"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-7 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#9b7448]/50" />

            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#765842] sm:text-xs">
              More than membership
            </span>

            <span className="h-px w-10 bg-[#9b7448]/50" />
          </div>

          <h2 className="font-serif text-[clamp(2.8rem,5vw,5rem)] font-normal leading-[0.95] tracking-[-0.04em] text-[#2b1718]">
            Find your people.
            <span className="block italic text-[#5a2528]">
              Find your place.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#75645a] sm:text-base">
            Membership is an invitation to participate, connect and make
            Kalpataru a part of your life in Pune.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="mt-20 grid md:grid-cols-2 lg:mt-24">
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
                className={[
                  "group relative p-7 sm:p-9 lg:p-12",
                  index === 0 ? "border-b border-[#9b7448]/20 md:border-r" : "",
                  index === 1 ? "border-b border-[#9b7448]/20" : "",
                  index === 2
                    ? "border-b border-[#9b7448]/20 md:border-b-0 md:border-r"
                    : "",
                  index === 3
                    ? "border-b border-[#9b7448]/20 md:border-b-0"
                    : "",
                ].join(" ")}
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="font-serif text-sm italic text-[#9b7448]">
                    {benefit.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#9b7448]/25 text-[#5a2528] transition-all duration-500 group-hover:border-[#5a2528]/50 group-hover:bg-[#5a2528] group-hover:text-[#fff9e7]">
                    <Icon size={18} strokeWidth={1.2} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-10 max-w-md">
                  <h3 className="font-serif text-2xl leading-tight tracking-[-0.02em] text-[#2b1718] sm:text-3xl">
                    {benefit.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#75645a]">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-[#5a2528]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.35 + index * 0.08,
                  }}
                />

                {/* Arrow */}
                <ArrowRight
                  size={17}
                  strokeWidth={1.2}
                  className="absolute bottom-8 right-8 text-[#9b7448]/0 transition-all duration-500 group-hover:right-7 group-hover:text-[#9b7448] sm:bottom-10 sm:right-10"
                />
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
          <div className="mx-auto mb-7 h-px w-16 bg-[#9b7448]/45" />

          <p className="font-serif text-xl italic leading-9 text-[#5a2528] sm:text-2xl">
            “Sometimes, belonging is simply finding people who understand where
            you come from.”
          </p>

          <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-[#8b735e]">
            The spirit of Kalpataru
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTwo;
