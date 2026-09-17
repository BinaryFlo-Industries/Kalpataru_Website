"use client";

import Image from "next/image";
import { ArrowDown, MapPin, Users } from "lucide-react";

const SectionOne = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
      {/* Oversized decorative year */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-20 select-none font-serif text-[9rem] leading-none tracking-[-0.06em] text-[#3b0b12]/[0.035] sm:text-[13rem] lg:-right-20 lg:text-[18rem]"
      >
        2025
      </div>

      <div className="relative">
        {/* Eyebrow */}
        <div className="mb-7 flex items-center gap-3">
          <span className="h-px w-10 bg-[#e63946]" />

          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e63946]">
            Kalpataru · Monsoon Picnic
          </p>
        </div>

        {/* Bengali title */}
        <p className="mb-4 font-serif text-2xl leading-none text-[#3b0b12]/55 sm:text-3xl">
          বর্ষার পিকনিক
        </p>

        {/* Main heading */}
        <h1 className="max-w-4xl font-serif text-[3.6rem] leading-[0.9] tracking-[-0.045em] text-[#3b0b12] sm:text-6xl lg:text-8xl">
          Monsoon Picnic
          <span className="block text-[#e63946]">2025.</span>
        </h1>

        {/* Main content + details */}
        <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end lg:gap-16">
          {/* Introduction */}
          <div>
            <p className="max-w-2xl font-serif text-2xl leading-tight text-[#3b0b12] sm:text-3xl">
              A day of rain, Bengali flavours, music and togetherness.
            </p>

            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#3b0b12]/65 sm:text-base sm:leading-8">
              Kalpataru&apos;s much-awaited monsoon retreat unfolded beautifully
              against the lush backdrop of River Hunter Resort in Panshet, where
              nature, culture and camaraderie seamlessly intertwined. With over
              100 spirited attendees, the day transformed into a celebration of
              Bengali heritage, joyful togetherness and sheer indulgence.
            </p>
          </div>

          {/* Event details */}
          <div className="rounded-3xl border border-[#3b0b12]/10 bg-white/60 p-6 shadow-[0_18px_50px_rgba(59,11,18,0.06)] backdrop-blur-sm">
            <div className="space-y-5">
              {/* Date */}
              <div>
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e63946]">
                  Date
                </p>

                <p className="font-serif text-lg text-[#3b0b12]">
                  Sunday · 27 July 2025
                </p>
              </div>

              {/* Location */}
              <div className="flex gap-3">
                <MapPin
                  size={17}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[#e63946]"
                />

                <div>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e63946]">
                    Location
                  </p>

                  <p className="font-serif text-lg leading-6 text-[#3b0b12]">
                    River Hunter Resort
                    <span className="block text-base text-[#3b0b12]/60">
                      Panshet
                    </span>
                  </p>
                </div>
              </div>

              {/* Attendance */}
              <div className="flex gap-3">
                <Users
                  size={17}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[#e63946]"
                />

                <div>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e63946]">
                    Community
                  </p>

                  <p className="font-serif text-lg text-[#3b0b12]">
                    100+ attendees
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="mt-12 sm:mt-14 lg:mt-16">
          <div className="rounded-4xl bg-[#f59e0b]/20 p-2 sm:rounded-[2.5rem]">
            <div className="relative aspect-video overflow-hidden rounded-3xl sm:rounded-4xl">
              <Image
                src="/images/picnic/Pic1.jpeg"
                alt="Kalpataru Monsoon Picnic 2025"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1100px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-10 flex items-center justify-center">
          <a
            href="#picnic-experience"
            className="group flex flex-col items-center gap-3 text-[#3b0b12]/45 transition-colors hover:text-[#e63946]"
            aria-label="Scroll to picnic experience"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
              Explore the day
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3b0b12]/10 bg-white/50 transition-all duration-300 group-hover:border-[#e63946]/30 group-hover:bg-[#e63946]/5">
              <ArrowDown
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
