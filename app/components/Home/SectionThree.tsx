"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import map from "@svg-maps/india";

const featuredStates = new Set(["Assam", "Odisha", "West Bengal"]);

const stateDetails: Record<
  string,
  {
    title: string;
    description: string;
    accent: string;
    number: string;
  }
> = {
  "West Bengal": {
    title: "Bengal",
    description:
      "The cultural heart of Kalpataru — its language, literature, music, food and traditions form the centre of our shared identity.",
    accent: "#E63946",
    number: "01",
  },
  Odisha: {
    title: "Odisha",
    description:
      "A neighbouring cultural landscape woven into eastern India's traditions through art, devotion, festivals and generations of exchange.",
    accent: "#F59E0B",
    number: "02",
  },
  Assam: {
    title: "Assam",
    description:
      "A region deeply connected to Bengal through history, language, migration and the living cultural traditions of eastern India.",
    accent: "#D94672",
    number: "03",
  },
};

const SectionThree = () => {
  const mapRef = useRef<SVGSVGElement | null>(null);
  const [selectedState, setSelectedState] = useState("West Bengal");
  const [drawn, setDrawn] = useState(false);

  const selectedDetail = stateDetails[selectedState];

  useEffect(() => {
    const timer = setTimeout(() => {
      setDrawn(true);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    const paths = mapRef.current.querySelectorAll("path");

    paths.forEach((path) => {
      const name = path.getAttribute("name");

      if (!name) return;

      path.style.transition =
        "fill 400ms ease, stroke 400ms ease, opacity 400ms ease, transform 400ms ease";

      path.style.transformOrigin = "center";
      path.style.transformBox = "fill-box";

      if (featuredStates.has(name)) {
        const detail = stateDetails[name];

        path.style.opacity = "1";
        path.style.fill =
          name === selectedState ? detail.accent : `${detail.accent}55`;
        path.style.stroke =
          name === selectedState ? detail.accent : `${detail.accent}90`;
        path.style.strokeWidth = name === selectedState ? "1.8" : "1.1";
        path.style.cursor = "pointer";
      } else {
        path.style.opacity = "0.12";
        path.style.fill = "#3B0B12";
        path.style.stroke = "#3B0B12";
        path.style.strokeWidth = "0.4";
        path.style.cursor = "default";
      }
    });
  }, [selectedState, drawn]);

  useEffect(() => {
    if (!mapRef.current) return;

    const paths = Array.from(mapRef.current.querySelectorAll("path"));

    if (!paths.length) return;

    const boxes = paths.map((path) => path.getBBox());

    const minX = Math.min(...boxes.map((box) => box.x));
    const minY = Math.min(...boxes.map((box) => box.y));
    const maxX = Math.max(...boxes.map((box) => box.x + box.width));
    const maxY = Math.max(...boxes.map((box) => box.y + box.height));

    const padding = 35;

    mapRef.current.setAttribute(
      "viewBox",
      `${minX - padding} ${minY - padding} ${
        maxX - minX + padding * 2
      } ${maxY - minY + padding * 2}`,
    );
  }, [drawn]);

  const handleStateClick = (name: string) => {
    if (!featuredStates.has(name)) return;

    setSelectedState(name);
  };

  return (
    <section
      id="community"
      className="
        relative isolate overflow-hidden
        bg-transparent
        text-[#3B0B12]
      "
    >
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-28 lg:px-14 lg:py-36">
        {/* Section label */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-10 bg-[#E63946]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E63946]">
            A shared cultural landscape
          </span>

          <span className="h-px w-10 bg-[#F59E0B]" />
        </motion.div>

        {/* Main composition */}

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          {/* Map */}

          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-7 flex items-end justify-between"
            >
              <div>
                <p className="font-serif text-xl italic text-[#3B0B12]">
                  The eastern lands
                </p>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.25em] text-[#3B0B12]/40">
                  Three regions · one conversation
                </p>
              </div>

              <span className="hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/35 sm:block">
                East India
              </span>
            </motion.div>

            {/* Map card */}

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative overflow-hidden
                rounded-4xl
                border border-[#3B0B12]/10
                bg-[#FFFDF8]
                px-5 py-8
                sm:px-8 sm:py-10
              "
            >
              <div className="absolute left-6 top-5 flex items-center gap-2 sm:left-8">
                <motion.span
                  key={selectedState}
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: selectedDetail.accent }}
                />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#3B0B12]/40">
                  {selectedState}
                </span>
              </div>

              <motion.svg
                ref={mapRef}
                viewBox={map.viewBox}
                className="
                  relative z-10 mx-auto mt-6
                  h-auto w-full max-w-125
                  overflow-visible
                "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                aria-label="Map highlighting West Bengal, Odisha and Assam"
              >
                {map.locations
                  .filter((location: { name: string }) =>
                    featuredStates.has(location.name),
                  )
                  .map(
                    (location: { id: string; name: string; path: string }) => {
                      const isSelected = location.name === selectedState;

                      const detail = stateDetails[location.name];

                      return (
                        <motion.path
                          key={location.id}
                          d={location.path}
                          name={location.name}
                          initial={{
                            pathLength: 0,
                            opacity: 0,
                          }}
                          whileInView={{
                            pathLength: 1,
                            opacity: 1,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            pathLength: {
                              duration: 1.5,
                              delay: 0.1,
                              ease: "easeInOut",
                            },
                            opacity: {
                              duration: 0.6,
                              delay: 0.1,
                            },
                          }}
                          fill={
                            isSelected ? detail.accent : `${detail.accent}55`
                          }
                          stroke={
                            isSelected ? detail.accent : `${detail.accent}90`
                          }
                          strokeWidth={isSelected ? 1.8 : 1.1}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="
                            cursor-pointer
                            transition-all duration-300
                            hover:brightness-105
                          "
                          onClick={() => handleStateClick(location.name)}
                          tabIndex={0}
                          role="button"
                          aria-label={location.name}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              event.preventDefault();
                              handleStateClick(location.name);
                            }
                          }}
                        />
                      );
                    },
                  )}
              </motion.svg>

              {/* Map legend */}

              <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2">
                {Array.from(featuredStates).map((state) => {
                  const detail = stateDetails[state];
                  const active = selectedState === state;

                  return (
                    <button
                      key={state}
                      type="button"
                      onClick={() => setSelectedState(state)}
                      className="
                        group flex items-center gap-2
                        text-[9px] font-semibold uppercase
                        tracking-[0.16em]
                        transition-colors
                      "
                      style={{
                        color: active
                          ? detail.accent
                          : "rgba(59, 11, 18, 0.45)",
                      }}
                    >
                      <span
                        className="
                          h-2 w-2 rounded-full
                          transition-transform duration-300
                          group-hover:scale-125
                        "
                        style={{
                          backgroundColor: detail.accent,
                        }}
                      />

                      {state}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Writing */}

          <div className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-4 font-serif text-xl italic text-[#D94672] sm:text-2xl"
            >
              Beyond borders.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                font-serif
                text-5xl font-medium
                leading-[0.92]
                tracking-[-0.04em]
                text-[#3B0B12]
                sm:text-6xl
                lg:text-[5rem]
              "
            >
              One eastern
              <br />
              <span className="italic text-[#E63946]">spirit.</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 h-1 w-16 origin-left bg-[#E63946]"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="mt-8 max-w-xl text-sm leading-7 text-[#5A3038] sm:text-base sm:leading-8"
            >
              Culture has never followed a perfectly drawn boundary. Across
              Bengal and the lands around it, generations have travelled,
              traded, learned, celebrated and built lives together.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.42,
              }}
              className="mt-5 max-w-xl text-sm leading-7 text-[#5A3038] sm:text-base sm:leading-8"
            >
              Kalpataru brings that spirit into the present — celebrating
              Bengali heritage while welcoming the many communities and
              traditions that have shaped eastern India.
            </motion.p>

            {/* State selector */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
              className="mt-10"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3B0B12]/40">
                  Explore the connection
                </span>

                <motion.span
                  key={selectedState}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[10px] font-semibold"
                  style={{ color: selectedDetail.accent }}
                >
                  {selectedDetail.number} / 03
                </motion.span>
              </div>

              <div className="flex flex-wrap gap-2">
                {Array.from(featuredStates).map((state) => {
                  const detail = stateDetails[state];
                  const active = selectedState === state;

                  return (
                    <button
                      key={state}
                      type="button"
                      onClick={() => setSelectedState(state)}
                      className={`
                        group flex items-center gap-2
                        rounded-full
                        border
                        px-4 py-2.5
                        text-[10px] font-semibold
                        uppercase tracking-[0.12em]
                        transition-all duration-300
                        ${
                          active
                            ? "text-white"
                            : "border-[#3B0B12]/12 bg-white/50 text-[#3B0B12]/55 hover:border-[#3B0B12]/25 hover:text-[#3B0B12]"
                        }
                      `}
                      style={
                        active
                          ? {
                              backgroundColor: detail.accent,
                              borderColor: detail.accent,
                            }
                          : undefined
                      }
                    >
                      <span
                        className="
                          h-1.5 w-1.5 rounded-full
                          transition-transform duration-300
                          group-hover:scale-125
                        "
                        style={{
                          backgroundColor: active ? "#FFFFFF" : detail.accent,
                        }}
                      />

                      {state}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Selected region */}

        <motion.div
          layout
          className="
            mt-20
            border-t border-[#3B0B12]/10
            pt-8
          "
        >
          <AnimateSelectedState selectedState={selectedState} />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-[#3B0B12]/10" />
    </section>
  );
};

const AnimateSelectedState = ({ selectedState }: { selectedState: string }) => {
  const detail = stateDetails[selectedState];

  return (
    <motion.div
      key={selectedState}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        grid gap-6
        sm:grid-cols-[180px_1fr_auto]
        sm:items-center
      "
    >
      <div>
        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3B0B12]/40">
          Selected region
        </span>

        <div className="mt-1 flex items-center gap-3">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: detail.accent }}
          />

          <h3 className="font-serif text-2xl italic text-[#3B0B12]">
            {detail.title}
          </h3>
        </div>
      </div>

      <p className="max-w-2xl text-sm leading-7 text-[#5A3038]">
        {detail.description}
      </p>

      <Link
        href="/community"
        className="
          group inline-flex
          items-center gap-2
          rounded-full
          bg-[#3B0B12]
          px-4 py-2.5
          text-[9px] font-semibold
          uppercase tracking-[0.18em]
          text-white
          transition-all duration-300
          hover:bg-[#E63946]
        "
      >
        Our community
        <ArrowRight
          size={13}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  );
};

export default SectionThree;
