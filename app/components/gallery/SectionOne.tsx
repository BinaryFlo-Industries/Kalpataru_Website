"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useMemo, useState } from "react";

type GalleryCategory = {
  id: string;
  label: string;
  folder: string;
  images: string[];
};

const galleryCategories: GalleryCategory[] = [
  {
    id: "durga-puja",
    label: "Durga Puja",
    folder: "/images/durga-puja",
    images: ["1.jpeg"],
  },
  {
    id: "lakshmi-puja",
    label: "Lakshmi Puja",
    folder: "/images/lakshmi-puja",
    images: ["lakshmi.jpeg"],
  },
  {
    id: "kali-puja",
    label: "Kali Puja",
    folder: "/images/kali-puja",
    images: ["kali.jpeg"],
  },
  {
    id: "saraswati-puja",
    label: "Saraswati Puja",
    folder: "/images/saraswati-puja",
    images: ["saraswati.jpeg"],
  },
  {
    id: "borsoboron",
    label: "Borsoboron",
    folder: "/images/borsoboron",
    images: ["borshobaran.jpeg"],
  },
  {
    id: "rong-milanti",
    label: "Rong Milanti",
    folder: "/images/rong-milanti",
    images: ["Rongmilanti.jpeg"],
  },
  {
    id: "picnic",
    label: "Picnic",
    folder: "/images/picnic",
    images: [
      "Pic1.jpeg",
      "Pic2.jpeg",
      "Pic3.jpeg",
      "Pic4.jpeg",
      "Pic5.jpeg",
      "Pic6.jpeg",
      "Pic7.jpeg",
      "Pic8.jpeg",
      "Pic9.jpeg",
      "Pic10.jpeg",
      "Pic11.jpeg",
      "Pic12.jpeg",
      "Pic13.jpeg",
      "Pic14.jpeg",
      "Pic15.jpeg",
      "Pic16.jpeg",
    ],
  },
  {
    id: "pathshala",
    label: "Pathshala",
    folder: "/images/pathshala",
    images: [
      "1.jpeg",
      "2.jpeg",
      "3.jpeg",
      "4.jpeg",
      "5.jpeg",
      "6.jpeg",
      "7.jpeg",
    ],
  },
  {
    id: "adoption",
    label: "Adoption",
    folder: "/images/adopt-a-student",
    images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"],
  },
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleImages = useMemo(() => {
    if (activeCategory === "all") {
      return galleryCategories.flatMap((category) =>
        category.images.map((image) => ({
          src: `${category.folder}/${image}`,
          category: category.id,
          categoryLabel: category.label,
        })),
      );
    }

    const category = galleryCategories.find(
      (item) => item.id === activeCategory,
    );

    if (!category) return [];

    return category.images.map((image) => ({
      src: `${category.folder}/${image}`,
      category: category.id,
      categoryLabel: category.label,
    }));
  }, [activeCategory]);

  return (
    <section className="relative overflow-hidden py-28 sm:py-32 lg:py-36">
      {/* Decorative typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-24 select-none font-serif text-[9rem] leading-none tracking-[-0.07em] text-[#3b0b12]/[0.035] sm:text-[13rem] lg:-right-28 lg:text-[19rem]"
      >
        GALLERY
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Header */}
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
              Kalpataru · Gallery
            </p>
          </div>

          <p className="mb-4 font-serif text-2xl text-[#3b0b12]/50 sm:text-3xl">
            স্মৃতির পাতায়
          </p>

          <h1 className="font-serif text-5xl leading-[0.94] tracking-[-0.045em] text-[#3b0b12] sm:text-6xl lg:text-8xl">
            Moments that
            <span className="block text-[#e63946]">stay with us.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-[15px] leading-7 text-[#3b0b12]/65 sm:text-base sm:leading-8">
            A collection of celebrations, traditions, people and moments from
            across Kalpataru’s cultural journey.
          </p>
        </motion.div>

        {/* Category navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 overflow-x-auto pb-2"
        >
          <div className="flex min-w-max items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-[#3b0b12] text-white shadow-[0_10px_30px_rgba(59,11,18,0.12)]"
                  : "border border-[#3b0b12]/10 bg-white/60 text-[#3b0b12]/55 hover:border-[#e63946]/25 hover:text-[#e63946]"
              }`}
            >
              All
            </button>

            {galleryCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#3b0b12] text-white shadow-[0_10px_30px_rgba(59,11,18,0.12)]"
                    : "border border-[#3b0b12]/10 bg-white/60 text-[#3b0b12]/55 hover:border-[#e63946]/25 hover:text-[#e63946]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
          <AnimatePresence mode="popLayout">
            {visibleImages.map((image, index) => (
              <motion.div
                key={`${image.category}-${image.src}`}
                layout
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  filter: "blur(10px)",
                  y: 8,
                }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.035, 0.5),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-5 break-inside-avoid"
              >
                <div className="group relative overflow-hidden rounded-3xl bg-[#3b0b12]/5 sm:rounded-[1.75rem]">
                  <Image
                    src={image.src}
                    alt={`${image.categoryLabel} gallery image`}
                    width={1200}
                    height={1200}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="h-auto w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-90"
                  />

                  {/* Hover fade */}
                  <div className="pointer-events-none absolute inset-0 bg-[#3b0b12]/0 transition-all duration-500 group-hover:bg-[#3b0b12]/6" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {visibleImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex min-h-75 items-center justify-center rounded-4xl border border-dashed border-[#3b0b12]/10 bg-white/40"
          >
            <p className="font-serif text-xl text-[#3b0b12]/45">
              Images for this collection will appear here.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
