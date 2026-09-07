"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const SectionThree = () => {
  const images = [
    {
      src: "/images/adopt-a-student/1.jpeg",
      className:
        "left-0 top-12 h-[340px] w-[255px] rotate-[-3deg] sm:h-[390px] sm:w-[295px] lg:left-[5%] lg:top-16 lg:h-[450px] lg:w-[335px]",
      delay: 0,
    },
    {
      src: "/images/adopt-a-student/2.jpeg",
      className:
        "right-1 top-0 h-[245px] w-[305px] rotate-[3deg] sm:right-[5%] sm:h-[295px] sm:w-[365px] lg:right-[8%] lg:top-2 lg:h-[340px] lg:w-[420px]",
      delay: 0.12,
    },
    {
      src: "/images/adopt-a-student/3.jpeg",
      className:
        "left-[31%] top-[22%] h-[255px] w-[195px] rotate-[2deg] sm:left-[34%] sm:h-[300px] sm:w-[230px] lg:left-[33%] lg:top-[19%] lg:h-[330px] lg:w-[250px]",
      delay: 0.24,
    },
    {
      src: "/images/adopt-a-student/4.jpeg",
      className:
        "right-[2%] top-[42%] h-[310px] w-[235px] rotate-[-4deg] sm:right-[5%] sm:h-[360px] sm:w-[275px] lg:right-[5%] lg:top-[40%] lg:h-[410px] lg:w-[305px]",
      delay: 0.36,
    },
    {
      src: "/images/adopt-a-student/5.jpeg",
      className:
        "left-[13%] top-[56%] h-[235px] w-[305px] rotate-[2deg] sm:left-[15%] sm:h-[280px] sm:w-[355px] lg:left-[17%] lg:top-[56%] lg:h-[315px] lg:w-[400px]",
      delay: 0.48,
    },
  ];

  return (
    <section
      id="adopt-gallery"
      className="relative overflow-hidden bg-[#FFFAF2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#E63946]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#3B0B12]/50">
                The Initiative in Pictures
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-[0.98] tracking-[-0.04em] text-[#3B0B12] sm:text-5xl lg:text-6xl">
              Education,
              <br />
              <span className="italic">with purpose.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-base leading-8 text-[#3B0B12]/60 sm:text-lg lg:ml-auto"
          >
            A glimpse into the initiative and the community behind
            Kalpataru&apos;s commitment to supporting education.
          </motion.p>
        </div>

        {/* Desktop editorial collage */}
        <div className="relative mt-16 hidden h-270 sm:block lg:mt-20">
          {/* Subtle background mark */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none text-center">
            <span className="font-serif text-[10rem] leading-none text-[#3B0B12]/2.5 lg:text-[15rem]">
              शिक्षा
            </span>
          </div>

          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{
                opacity: 0,
                filter: "blur(16px)",
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.08,
              }}
              transition={{
                duration: 0.95,
                delay: image.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.025,
                rotate: 0,
                zIndex: 30,
                transition: {
                  duration: 0.35,
                },
              }}
              className={`absolute overflow-hidden rounded-3xl border-[6px] border-[#FFFDF8] bg-[#FFFDF8] shadow-[0_18px_50px_rgba(59,11,18,0.10)] ${image.className}`}
            >
              <Image
                src={image.src}
                alt="Adopt a Student initiative"
                fill
                sizes="(max-width: 1024px) 40vw, 420px"
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile staggered gallery */}
        <div className="mt-14 flex flex-col gap-6 sm:hidden">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{
                opacity: 0,
                filter: "blur(14px)",
                y: 30,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative overflow-hidden rounded-3xl border-[5px] border-[#FFFDF8] bg-[#FFFDF8] shadow-[0_15px_40px_rgba(59,11,18,0.09)] ${
                index % 3 === 0
                  ? "ml-0 h-75 w-[88%]"
                  : index % 3 === 1
                    ? "ml-auto h-62.5 w-[82%]"
                    : "mx-auto h-70 w-[90%]"
              }`}
            >
              <Image
                src={image.src}
                alt="Adopt a Student initiative"
                fill
                sizes="90vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 flex items-center justify-between border-t border-[#3B0B12]/10 pt-6"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3B0B12]/10">
              <ArrowDown size={15} strokeWidth={1.6} />
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3B0B12]/40">
              A commitment to education
            </span>
          </div>

          <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-[#3B0B12]/30 sm:block">
            05 moments
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionThree;
