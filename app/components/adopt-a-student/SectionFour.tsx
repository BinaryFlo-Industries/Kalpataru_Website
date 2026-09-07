"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, HeartHandshake } from "lucide-react";

const SectionFour = () => {
  return (
    <section
      id="culture-with-a-cause"
      className="relative overflow-hidden bg-[#FFFDF8] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Main closing card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-4xl bg-[#3B0B12] px-7 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16"
        >
          {/* Subtle background typography */}
          <div className="pointer-events-none absolute -right-10 -top-16 select-none font-serif text-[9rem] leading-none text-[#FFFDF8]/[0.035] sm:text-[13rem] lg:text-[17rem]">
            शिक्षा
          </div>

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            {/* Left */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#F59E0B]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#FFFDF8]/50">
                  Culture with a Cause
                </span>
              </div>

              <h2 className="max-w-3xl font-serif text-4xl leading-[0.98] tracking-[-0.04em] text-[#FFFDF8] sm:text-5xl lg:text-6xl">
                When culture
                <br />
                <span className="italic">creates opportunity.</span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-[#FFFDF8]/60 sm:text-lg">
                Kalpataru Cultural Foundation is committed to making a
                difference in the lives of underprivileged students, ensuring
                that financial constraints do not hinder their dreams or
                potential.
              </p>
            </div>

            {/* Right statement */}
            <div className="lg:pl-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F59E0B] text-[#3B0B12]">
                <HeartHandshake size={21} strokeWidth={1.7} />
              </div>

              <p className="mt-6 font-serif text-2xl leading-tight tracking-tight text-[#FFFDF8] sm:text-3xl">
                Equal opportunity can change the course of a young life.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#FFFDF8]/45">
                A commitment rooted in social responsibility and the
                transformative power of education.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Community statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12 grid gap-8 border-t border-[#3B0B12]/10 pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E63946]">
              Community Bonding at Its Best
            </span>
          </div>

          <p className="max-w-3xl font-serif text-2xl leading-tight tracking-tight text-[#3B0B12] sm:text-3xl">
            Bringing families and children together while strengthening
            community ties and shared values.
          </p>
        </motion.div>

        {/* Closing footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex flex-col gap-5 border-t border-[#3B0B12]/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#3B0B12]/35">
            <span>Education</span>
            <span className="text-[#3B0B12]/20">·</span>
            <span>Opportunity</span>
            <span className="text-[#3B0B12]/20">·</span>
            <span>Community</span>
          </div>

          <a
            href="#adopt-student"
            className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#3B0B12]/45 transition-colors duration-300 hover:text-[#E63946]"
          >
            Back to the beginning
            <ArrowUpRight
              size={14}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionFour;
