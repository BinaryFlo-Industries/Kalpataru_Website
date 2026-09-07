"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  HeartHandshake,
  Lightbulb,
  School,
  ShieldCheck,
} from "lucide-react";

const SectionTwo = () => {
  const supportPoints = [
    {
      number: "01",
      icon: School,
      title: "10 students adopted",
      description:
        "Kalpataru has adopted 10 financially challenged students, offering them full support for their education and basic needs.",
      accent: "#E63946",
    },
    {
      number: "02",
      icon: BookOpen,
      title: "Academic expenses covered",
      description:
        "Tuition fees, study materials and necessary supplies are covered so that students can continue their education without financial barriers.",
      accent: "#F59E0B",
    },
    {
      number: "03",
      icon: HeartHandshake,
      title: "Holistic support",
      description:
        "Support goes beyond academics through mentorship and emotional encouragement, helping foster long-term growth.",
      accent: "#D94672",
    },
    {
      number: "04",
      icon: Lightbulb,
      title: "Empowering young learners",
      description:
        "The initiative helps ensure that financial limitations do not hinder the dreams or potential of young learners.",
      accent: "#E63946",
    },
    {
      number: "05",
      icon: ShieldCheck,
      title: "Equal opportunity",
      description:
        "The initiative reflects Kalpataru's commitment to social responsibility, equal opportunity and the transformative power of education.",
      accent: "#F59E0B",
    },
  ];

  return (
    <section
      id="adopt-support"
      className="relative overflow-hidden bg-[#FFFDF8] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
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
              <span className="h-px w-10 bg-[#F59E0B]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#3B0B12]/50">
                What We Provide
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-[0.98] tracking-[-0.04em] text-[#3B0B12] sm:text-5xl lg:text-6xl">
              Support that goes
              <br />
              <span className="italic">beyond the classroom.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl lg:ml-auto"
          >
            <p className="text-base leading-8 text-[#3B0B12]/60 sm:text-lg">
              The Adopt a Student initiative combines educational support with
              mentorship and encouragement, helping young learners move forward
              without financial limitations holding them back.
            </p>
          </motion.div>
        </div>

        {/* Main statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative mt-16 overflow-hidden rounded-4xl bg-[#3B0B12] px-7 py-10 sm:px-10 sm:py-12 lg:mt-20 lg:px-14 lg:py-14"
        >
          <div className="pointer-events-none absolute -right-8 -top-12 select-none font-serif text-[9rem] leading-none text-[#FFFDF8]/[0.035] sm:text-[13rem]">
            शिक्षा
          </div>

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
                The idea is simple
              </p>

              <p className="mt-4 max-w-3xl font-serif text-2xl leading-tight tracking-tight text-[#FFFDF8] sm:text-3xl lg:text-4xl">
                Financial circumstances should not decide how far a young
                learner can go.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FFFDF8]/40">
              <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
              Education · Opportunity
            </div>
          </div>
        </motion.div>

        {/* Support points */}
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {supportPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.07,
                }}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-[#3B0B12]/10 bg-[#FFFAF2] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(59,11,18,0.08)] ${
                  index === 4 ? "md:col-span-2 lg:col-span-6" : "lg:col-span-2"
                }`}
              >
                {/* Accent */}
                <div
                  className="absolute left-0 top-0 h-1 w-full"
                  style={{ backgroundColor: item.accent }}
                />

                {/* Background number */}
                <div className="pointer-events-none absolute -right-3 -top-8 select-none font-serif text-[8rem] leading-none text-[#3B0B12]/[0.035]">
                  {item.number}
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: `${item.accent}12`,
                        color: item.accent,
                      }}
                    >
                      <Icon size={20} strokeWidth={1.7} />
                    </div>

                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#3B0B12]/25">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-8 max-w-md font-serif text-2xl leading-tight tracking-tight text-[#3B0B12]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#3B0B12]/55">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom fact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-5 border-t border-[#3B0B12]/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-sm leading-7 text-[#3B0B12]/50">
            Every part of the initiative is rooted in the belief that education
            can create lasting change.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.17em] text-[#3B0B12]/35">
              Dr. Dada Gujar English Medium School
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTwo;
