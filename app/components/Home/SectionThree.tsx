"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import map from "@svg-maps/india";

const featuredStates = new Set(["Assam", "Odisha", "West Bengal"]);

const stateDetails: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "West Bengal": {
    title: "Bengal",
    description:
      "The cultural heart of Kalpataru — its language, literature, music, food and traditions form the centre of our shared identity.",
  },
  Odisha: {
    title: "Odisha",
    description:
      "A neighbouring cultural landscape woven into eastern India's traditions through art, devotion, festivals and generations of exchange.",
  },
  Assam: {
    title: "Assam",
    description:
      "A region deeply connected to Bengal through history, language, migration and the living cultural traditions of eastern India.",
  },
};

export default function EasternIndiaSection() {
  const mapRef = useRef<SVGSVGElement | null>(null);
  const [selectedState, setSelectedState] = useState("West Bengal");
  const [drawn, setDrawn] = useState(false);

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
        "fill 500ms ease, stroke 500ms ease, opacity 500ms ease, transform 500ms ease";

      path.style.transformOrigin = "center";
      path.style.transformBox = "fill-box";

      if (featuredStates.has(name)) {
        path.style.opacity = "1";
        path.style.fill = name === selectedState ? "#7a3f2d" : "#b49367";
        path.style.stroke = "#6d4937";
        path.style.strokeWidth = "1.2";
        path.style.cursor = "pointer";
      } else {
        path.style.opacity = "0.16";
        path.style.fill = "#9a7955";
        path.style.stroke = "#8d6c4c";
        path.style.strokeWidth = "0.45";
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
            text-[#4c3028]
        "
    >
      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-14 lg:py-40">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-12 bg-[#7b4a35]/45" />

          <span
            className="
              text-[10px] font-medium uppercase
              tracking-[0.32em]
              text-[#7b4a35]/70
            "
          >
            A shared cultural landscape
          </span>

          <span className="h-px w-12 bg-[#7b4a35]/20" />
        </motion.div>

        {/* =================================================
            MAIN TWO COLUMN COMPOSITION
        ================================================== */}

        <div
          className="
            mt-14
            grid gap-16
            lg:grid-cols-[1.05fr_0.95fr]
            lg:items-center
            lg:gap-20
          "
        >
          {/* =================================================
              MAP
          ================================================== */}

          <div className="relative order-2 lg:order-1">
            {/* Map title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8 flex items-center justify-between"
            >
              <div>
                <p
                  className="
                    font-serif text-lg italic
                    text-[#89613e]
                  "
                >
                  The eastern lands
                </p>

                <p
                  className="
                    mt-1 text-[10px]
                    uppercase tracking-[0.25em]
                    text-[#89613e]/55
                  "
                >
                  Three regions · one conversation
                </p>
              </div>

              <span
                className="
                  hidden text-[9px]
                  uppercase tracking-[0.2em]
                  text-[#89613e]/50
                  sm:block
                "
              >
                East India
              </span>
            </motion.div>

            {/* Map frame */}
            <div
              className="
                relative
                flex min-h-105
                items-center justify-center
                overflow-hidden
                rounded-4xl
                border border-[#7b4a35]/15
                bg-[#f8edda]/35
                px-5 py-8
              "
            >
              {/* subtle internal paper glow */}
              <div
                className="
                  pointer-events-none absolute
                  left-1/2 top-1/2
                  h-72 w-72
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#b99361]/10
                  blur-3xl
                "
              />

              {/* SVG */}
              <motion.svg
                ref={mapRef}
                viewBox={map.viewBox}
                className="
                  relative z-10
                  h-auto
                  w-full
                  max-w-125
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
                              duration: 1.7,
                              delay: 0.15,
                              ease: "easeInOut",
                            },
                            opacity: {
                              duration: 0.7,
                              delay: 0.15,
                            },
                          }}
                          fill={isSelected ? "#7a3f2d" : "#b49367"}
                          stroke="#6d4937"
                          strokeWidth={1.2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="
            cursor-pointer
            transition-all duration-500
            hover:brightness-90
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

              {/* Map caption */}
              <div
                className="
                  absolute bottom-4 left-1/2
                  -translate-x-1/2
                  whitespace-nowrap
                  text-[8px] uppercase
                  tracking-[0.22em]
                  text-[#89613e]/45
                "
              >
                West Bengal · Odisha · Assam
              </div>
            </div>
          </div>

          {/* =================================================
              WRITING
          ================================================== */}

          <div className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                mb-4
                font-serif text-xl italic
                text-[#89613e]
                sm:text-2xl
              "
            >
              Beyond borders.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                font-serif
                text-5xl font-medium
                leading-[0.94]
                tracking-[-0.035em]
                text-[#4b2d26]
                sm:text-6xl
                lg:text-[5rem]
              "
            >
              One eastern
              <br />
              <span className="italic text-[#7a3f2d]">spirit.</span>
            </motion.h2>

            {/* Animated writing line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-8
                h-px w-20
                origin-left
                bg-[#8d5d3d]/50
              "
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.35,
              }}
              className="
                mt-8
                max-w-xl
                text-sm leading-7
                text-[#6d5144]
                sm:text-base sm:leading-8
              "
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
                duration: 0.9,
                delay: 0.48,
              }}
              className="
                mt-5
                max-w-xl
                text-sm leading-7
                text-[#6d5144]
                sm:text-base sm:leading-8
              "
            >
              Kalpataru brings that spirit into the present — celebrating
              Bengali heritage while welcoming the many communities and
              traditions that have shaped eastern India.
            </motion.p>

            {/* =================================================
                STATE SELECTOR
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.6,
              }}
              className="mt-10"
            >
              <div
                className="
                  mb-4 text-[9px]
                  uppercase tracking-[0.25em]
                  text-[#89613e]/60
                "
              >
                Explore the connection
              </div>

              <div className="flex flex-wrap gap-2">
                {Array.from(featuredStates).map((state) => (
                  <button
                    key={state}
                    type="button"
                    onClick={() => setSelectedState(state)}
                    className={`
                      rounded-full
                      border px-4 py-2.5
                      text-[11px]
                      transition-all duration-300
                      ${
                        selectedState === state
                          ? "border-[#7a3f2d] bg-[#7a3f2d] text-[#fff8ed]"
                          : "border-[#7b4a35]/20 bg-[#f8edda]/40 text-[#6d5144] hover:border-[#7a3f2d]/45 hover:text-[#7a3f2d]"
                      }
                    `}
                  >
                    {state}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* =================================================
            SELECTED REGION NOTE
        ================================================== */}

        <motion.div
          layout
          className="
            mt-20
            border-t border-[#7b4a35]/20
            pt-8
          "
        >
          <AnimateSelectedState selectedState={selectedState} />
        </motion.div>
      </div>
    </section>
  );
}

function AnimateSelectedState({ selectedState }: { selectedState: string }) {
  const detail = stateDetails[selectedState];

  return (
    <motion.div
      key={selectedState}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        grid gap-6
        sm:grid-cols-[180px_1fr_auto]
        sm:items-center
      "
    >
      <div>
        <span
          className="
            text-[9px] uppercase
            tracking-[0.25em]
            text-[#89613e]/55
          "
        >
          Selected region
        </span>

        <h3
          className="
            mt-1 font-serif
            text-2xl italic
            text-[#60372c]
          "
        >
          {detail.title}
        </h3>
      </div>

      <p
        className="
          max-w-2xl
          text-sm leading-7
          text-[#6d5144]
        "
      >
        {detail.description}
      </p>

      <Link
        href="/community"
        className="
          group inline-flex
          items-center gap-2
          text-[10px] font-medium
          uppercase tracking-[0.2em]
          text-[#5c3028]
          transition-colors
          hover:text-[#5c1f1f]
        "
      >
        Our community
        <ArrowUpRight
          size={14}
          strokeWidth={1.5}
          className="
            transition-transform duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
          "
        />
      </Link>
    </motion.div>
  );
}
