"use client";

import Image from "next/image";
import { motion } from "motion/react";

const SectionFour = () => {
  const images = Array.from(
    { length: 15 },
    (_, index) => `/images/picnic/Pic${index + 2}.jpeg`,
  );

  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      {/* Decorative oversized typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-20 select-none font-serif text-[8rem] leading-none tracking-[-0.06em] text-[#3b0b12]/[0.035] sm:text-[12rem] lg:-left-24 lg:text-[17rem]"
      >
        MEMORY
      </div>

      <div className="relative">
        {/* Section introduction */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#e63946]" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e63946]">
              From the Picnic
            </p>
          </div>

          <p className="mb-4 font-serif text-2xl text-[#3b0b12]/50 sm:text-3xl">
            স্মৃতির পাতায়
          </p>

          <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-[#3b0b12] sm:text-6xl lg:text-7xl">
            Memories under
            <span className="block text-[#e63946]">the monsoon sky.</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-2xl text-[15px] leading-7 text-[#3b0b12]/65 sm:text-base sm:leading-8"
          >
            Some days are remembered in fragments — a laugh shared across the
            table, music in the background, rain over the trees, or simply being
            together. These moments from Panshet hold a little of that day.
          </motion.p>
        </motion.div>

        {/* Image gallery */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, index) => (
            <motion.div
              key={src}
              initial={{
                opacity: 0,
                filter: "blur(10px)",
                y: 8,
              }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative aspect-4/3 overflow-hidden rounded-[1.75rem] bg-[#3b0b12]/5 sm:rounded-4xl"
            >
              <Image
                src={src}
                alt={`Kalpataru Monsoon Picnic 2025 memory ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.025]"
              />
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 border-t border-[#3b0b12]/10 pt-8 sm:mt-16 sm:pt-10"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-2xl font-serif text-2xl leading-8 text-[#3b0b12] sm:text-3xl">
              Some days are remembered long after the rain has stopped.
            </p>

            <p className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#3b0b12]/35">
              Kalpataru Cultural Association · Pune
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionFour;
