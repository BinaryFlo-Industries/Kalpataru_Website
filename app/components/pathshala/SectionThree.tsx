"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const SectionThree = () => {
  const images = [
    {
      src: "/images/pathshala/1.jpeg",
      alt: "Pathshala participants",
      className:
        "left-0 top-12 h-[330px] w-[250px] rotate-[-3deg] sm:h-[390px] sm:w-[290px] lg:left-[4%] lg:top-16 lg:h-[430px] lg:w-[320px]",
      delay: 0,
    },
    {
      src: "/images/pathshala/2.jpeg",
      alt: "Children participating in Pathshala",
      className:
        "right-2 top-0 h-[240px] w-[300px] rotate-[3deg] sm:right-[5%] sm:h-[290px] sm:w-[360px] lg:right-[9%] lg:top-2 lg:h-[330px] lg:w-[410px]",
      delay: 0.12,
    },
    {
      src: "/images/pathshala/3.jpeg",
      alt: "Pathshala cultural activities",
      className:
        "left-[30%] top-[19%] h-[230px] w-[175px] rotate-[2deg] sm:left-[34%] sm:h-[280px] sm:w-[215px] lg:left-[32%] lg:top-[18%] lg:h-[310px] lg:w-[240px]",
      delay: 0.22,
    },
    {
      src: "/images/pathshala/4.jpeg",
      alt: "Pathshala learning session",
      className:
        "right-[1%] top-[38%] h-[300px] w-[225px] rotate-[-4deg] sm:right-[4%] sm:h-[350px] sm:w-[265px] lg:right-[5%] lg:top-[39%] lg:h-[400px] lg:w-[300px]",
      delay: 0.32,
    },
    {
      src: "/images/pathshala/5.jpeg",
      alt: "Families at Pathshala",
      className:
        "left-[14%] top-[52%] h-[230px] w-[300px] rotate-[2deg] sm:left-[15%] sm:h-[270px] sm:w-[350px] lg:left-[17%] lg:top-[53%] lg:h-[300px] lg:w-[390px]",
      delay: 0.42,
    },
    {
      src: "/images/pathshala/6.jpeg",
      alt: "Children learning at Pathshala",
      className:
        "left-[48%] top-[58%] h-[270px] w-[205px] rotate-[-2deg] sm:left-[50%] sm:h-[320px] sm:w-[245px] lg:left-[49%] lg:top-[57%] lg:h-[350px] lg:w-[265px]",
      delay: 0.52,
    },
    {
      src: "/images/pathshala/7.jpeg",
      alt: "Pathshala community gathering",
      className:
        "left-[2%] top-[69%] h-[190px] w-[250px] rotate-[-3deg] sm:left-[4%] sm:h-[230px] sm:w-[300px] lg:left-[4%] lg:top-[72%] lg:h-[260px] lg:w-[340px]",
      delay: 0.62,
    },
  ];

  return (
    <section
      id="pathshala-gallery"
      className="relative overflow-hidden bg-[#FFFDF8] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
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
              <span className="h-px w-10 bg-[#D94672]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#3B0B12]/50">
                Pathshala in Pictures
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-[0.98] tracking-[-0.04em] text-[#3B0B12] sm:text-5xl lg:text-6xl">
              Learning,
              <br />
              <span className="italic">together.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-base leading-8 text-[#3B0B12]/60 sm:text-lg lg:ml-auto"
          >
            A glimpse into the people, moments and shared experiences that
            shaped the Pathshala journey.
          </motion.p>
        </div>

        {/* Desktop editorial collage */}
        <div className="relative mt-16 hidden h-280 sm:block lg:mt-20">
          {/* Soft central notation */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none text-center">
            <span className="font-serif text-[10rem] leading-none text-[#3B0B12]/2.5 lg:text-[15rem]">
              পাঠশালা
            </span>
          </div>

          {images.map((image) => (
            <motion.div
              key={image.src}
              initial={{
                opacity: 0,
                filter: "blur(14px)",
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
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 35vw, 420px"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile collage */}
        <div className="mt-14 flex flex-col gap-6 sm:hidden">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{
                opacity: 0,
                filter: "blur(12px)",
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
                alt={image.alt}
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
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 flex items-center justify-between border-t border-[#3B0B12]/10 pt-6"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3B0B12]/10">
              <ArrowDown size={15} strokeWidth={1.6} />
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3B0B12]/40">
              A growing community
            </span>
          </div>

          <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-[#3B0B12]/30 sm:block">
            07 moments
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionThree;
