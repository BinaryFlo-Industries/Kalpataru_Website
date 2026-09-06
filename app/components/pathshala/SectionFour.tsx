"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";

const SectionFour = () => {
  return (
    <section
      id="pathshala-2-0"
      className="relative overflow-hidden bg-[#FFFAF2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#E63946]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#3B0B12]/50">
                The Journey Continues
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-[0.98] tracking-[-0.04em] text-[#3B0B12] sm:text-5xl lg:text-6xl">
              From one month
              <br />
              <span className="italic">to every Sunday.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-base leading-8 text-[#3B0B12]/60 sm:text-lg lg:ml-auto"
          >
            What began on 10 May 2025 as a one-month initiative has continued as
            a regular Sunday gathering for the community.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16 lg:mt-20">
          <div className="absolute left-3 top-3 hidden h-[calc(100%-24px)] w-px bg-[#3B0B12]/10 sm:block" />

          <div className="space-y-6">
            {/* Start */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
              className="relative grid gap-5 sm:grid-cols-[28px_1fr] sm:gap-8"
            >
              <div className="relative z-10 mt-2 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[#FFFAF2] bg-[#E63946] shadow-[0_0_0_1px_rgba(59,11,18,0.12)]" />

              <div className="rounded-[1.75rem] border border-[#3B0B12]/10 bg-[#FFFDF8] p-7 sm:p-9">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#E63946]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E63946]">
                    Beginning
                  </span>

                  <span className="text-xs font-medium text-[#3B0B12]/35">
                    10 May 2025
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-2xl tracking-[-0.02em] text-[#3B0B12] sm:text-3xl">
                  Chutir Pathshala begins.
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#3B0B12]/55">
                  The initiative started with an initial duration of one month,
                  bringing children, families and the community together around
                  Bengali language and culture.
                </p>
              </div>
            </motion.div>

            {/* Continuation */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="relative grid gap-5 sm:grid-cols-[28px_1fr] sm:gap-8"
            >
              <div className="relative z-10 mt-2 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[#FFFAF2] bg-[#F59E0B] shadow-[0_0_0_1px_rgba(59,11,18,0.12)]" />

              <div className="rounded-[1.75rem] border border-[#3B0B12]/10 bg-[#FFFDF8] p-7 sm:p-9">
                <div className="grid gap-7 sm:grid-cols-3">
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-[#F59E0B]">
                      <CalendarDays size={17} strokeWidth={1.7} />
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em]">
                        Every Sunday
                      </span>
                    </div>

                    <p className="font-serif text-xl text-[#3B0B12]">
                      Regular sessions
                    </p>
                  </div>

                  <div>
                    <div className="mb-3 flex items-center gap-2 text-[#F59E0B]">
                      <MapPin size={17} strokeWidth={1.7} />
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em]">
                        Place
                      </span>
                    </div>

                    <p className="font-serif text-xl text-[#3B0B12]">
                      Dada Gujar School
                    </p>
                  </div>

                  <div>
                    <div className="mb-3 flex items-center gap-2 text-[#F59E0B]">
                      <Clock3 size={17} strokeWidth={1.7} />
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em]">
                        Timings
                      </span>
                    </div>

                    <p className="font-serif text-xl text-[#3B0B12]">
                      9:00 AM – 12:00 PM
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-[#3B0B12]/10 pt-6">
                  <p className="text-sm leading-7 text-[#3B0B12]/55">
                    Parents and members are encouraged to enroll their kids and
                    become part of the continuing Pathshala experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Pathshala 2.0 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75 }}
          className="relative mt-20 overflow-hidden rounded-4xl bg-[#3B0B12] px-7 py-10 sm:px-10 sm:py-12 lg:mt-24 lg:px-14 lg:py-14"
        >
          {/* Subtle Bengali mark */}
          <div className="pointer-events-none absolute -right-8 -top-12 select-none font-serif text-[9rem] leading-none text-[#FFFDF8]/[0.035] sm:text-[13rem]">
            ২.০
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#F59E0B]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#FFFDF8]/50">
                  What Comes Next
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Sparkles
                  size={22}
                  strokeWidth={1.5}
                  className="text-[#F59E0B]"
                />

                <h3 className="font-serif text-3xl tracking-[-0.03em] text-[#FFFDF8] sm:text-4xl lg:text-5xl">
                  Pathshala 2.0
                </h3>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#FFFDF8]/60 sm:text-base">
                A new chapter is being prepared with new activities, enhanced
                learning experiences and an even stronger focus on cultural
                immersion.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FFFDF8]/45">
              <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
              Coming together
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-col gap-4 border-t border-[#3B0B12]/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3B0B12]/35">
            Language · Culture · Heritage · Community
          </p>

          <a
            href="#pathshala"
            className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#3B0B12]/50 transition-colors hover:text-[#E63946]"
          >
            Back to the beginning
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionFour;
