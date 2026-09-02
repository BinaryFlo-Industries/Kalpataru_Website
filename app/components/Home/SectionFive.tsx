"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Heart,
  Leaf,
  Music2,
  Palette,
  Sparkles,
  GraduationCap,
  CalendarDays,
} from "lucide-react";

const initiatives = [
  {
    number: "01",
    icon: GraduationCap,
    eyebrow: "Education · Culture",
    title: "Chutir Pathshaala",
    description:
      "A space where generations come together to learn, speak, celebrate and carry Bengali language and culture forward.",
    points: [
      "Bengali language education for all ages",
      "Cultural immersion beyond the classroom",
      "Passing heritage to the next generation",
    ],
    href: "https://kalpataruculturalassociation.com/Pathshala.html",
  },
  {
    number: "02",
    icon: Heart,
    eyebrow: "Education · Opportunity",
    title: "Shaping Young Dreams",
    description:
      "Supporting financially challenged students with the academic foundation and encouragement they need to build a better future.",
    points: [
      "10 students adopted this year",
      "Academic expenses covered",
      "Holistic support and equal opportunity",
    ],
    href: "https://kalpataruculturalassociation.com/adoptStudent.html",
  },
  {
    number: "03",
    icon: Leaf,
    eyebrow: "Community · Tomorrow",
    title: "Upcoming Chapters of Care",
    description:
      "Our community extends beyond cultural celebration — into the places, people and environment around us.",
    points: [
      "Tree planting with children",
      "Blood donation camps",
      "Career and skill clinics",
      "Nature journaling & awareness programmes",
    ],
    href: null,
  },
];

const activities = [
  {
    number: "01",
    icon: Sparkles,
    title: "Saraswati Aradhana",
    subtitle: "Wisdom in Devotion",
    description:
      "A celebration of learning, music, art and the pursuit of knowledge.",
    href: "#",
  },
  {
    number: "02",
    icon: Palette,
    title: "Rong Milanti",
    subtitle: "Colours of Togetherness",
    description:
      "A vibrant gathering where colour, culture and community meet.",
    href: "#",
  },
  {
    number: "03",
    icon: Music2,
    title: "Borsoboron Utsav",
    subtitle: "Welcoming the New",
    description:
      "Celebrating the Bengali New Year with music, tradition, food and fellowship.",
    href: "#",
  },
  {
    number: "04",
    icon: Leaf,
    title: "Picnic",
    subtitle: "A Day Together",
    description:
      "An unhurried day away from routine, shared across the Kalpataru community.",
    href: "#",
  },
];

const upcomingEvents = [
  {
    date: "COMING SOON",
    title: "Matri Bondona",
    subtitle: "In the Lap of the Divine",
    description:
      "A celebration of motherhood, devotion and the profound bond that connects generations.",
    href: "https://kalpataruculturalassociation.com/MatriBondona.html",
  },
];

export default function SectionFive() {
  return (
    <section
      id="activities"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* ============================================================
            PART I — HEARTS IN ACTION
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-12 bg-[#7d1f2a]/50" />
            <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#7d1f2a]/70">
              Hearts in Action
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <h2 className="font-serif text-4xl leading-[0.95] text-[#34251c] sm:text-5xl lg:text-7xl">
              Stronger communities.
              <br />
              <span className="italic text-[#7d1f2a]">Shared futures.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-[#59483a]/80 lg:pb-1">
              Culture becomes meaningful when it reaches beyond celebration.
              Through education, opportunity and community care, we try to leave
              something lasting behind.
            </p>
          </div>
        </motion.div>

        {/* Initiative cards */}
        <div className="grid gap-5 lg:grid-cols-3">
          {initiatives.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -7 }}
                className="group relative flex min-h-120 flex-col overflow-hidden rounded-xs border border-[#8c6b45]/30 bg-[#f8efd9]/55 p-7 shadow-[0_18px_50px_rgba(91,62,35,0.06)]"
              >
                {/* oversized archival number */}
                <span className="pointer-events-none absolute -right-3 -top-8 font-serif text-[150px] leading-none text-[#7d1f2a]/4.5">
                  {item.number}
                </span>

                <div className="relative flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8c6b45]/30 bg-[#f6ead0]">
                    <Icon
                      size={18}
                      strokeWidth={1.4}
                      className="text-[#7d1f2a]"
                    />
                  </div>

                  <span className="font-serif text-sm italic text-[#8c6b45]/60">
                    {item.number}
                  </span>
                </div>

                <div className="relative mt-auto pt-20">
                  <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.25em] text-[#7d1f2a]/65">
                    {item.eyebrow}
                  </p>

                  <h3 className="font-serif text-3xl text-[#34251c]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#59483a]/80">
                    {item.description}
                  </p>

                  <div className="mt-6 border-t border-[#8c6b45]/20 pt-5">
                    <ul className="space-y-2.5">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-xs leading-5 text-[#59483a]/75"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#7d1f2a]/60" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#7d1f2a]"
                    >
                      View more
                      <ArrowUpRight
                        size={13}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ============================================================
            PART II — ACTIVITIES
        ============================================================ */}

        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-12 bg-[#7d1f2a]/50" />
                <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#7d1f2a]/70">
                  Activities
                </span>
              </div>

              <h2 className="font-serif text-4xl text-[#34251c] sm:text-5xl">
                Moments that become
                <span className="ml-2 italic text-[#7d1f2a]">memories.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#59483a]/70">
              From worship and festivals to simple days spent together, our
              calendar is shaped by the many ways a community comes alive.
            </p>
          </motion.div>

          {/* Editorial activity grid */}
          <div className="border-y border-[#8c6b45]/30">
            {activities.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <motion.a
                  key={activity.number}
                  href={activity.href}
                  target={activity.href !== "#" ? "_blank" : undefined}
                  rel={
                    activity.href !== "#" ? "noopener noreferrer" : undefined
                  }
                  initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.06,
                  }}
                  whileHover={{ x: 8 }}
                  className="group grid grid-cols-[55px_1fr_auto] items-center gap-5 border-b border-[#8c6b45]/20 py-7 last:border-b-0 sm:grid-cols-[70px_55px_1fr_auto]"
                >
                  <span className="font-serif text-sm italic text-[#8c6b45]/60">
                    {activity.number}
                  </span>

                  <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#8c6b45]/25 sm:flex">
                    <Icon
                      size={16}
                      strokeWidth={1.3}
                      className="text-[#7d1f2a]"
                    />
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl text-[#34251c] transition-colors duration-300 group-hover:text-[#7d1f2a] sm:text-3xl">
                      {activity.title}
                    </h3>

                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#8c6b45]/75">
                      {activity.subtitle}
                    </p>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#59483a]/65">
                      {activity.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.2}
                    className="text-[#8c6b45]/60 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#7d1f2a]"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* ============================================================
            PART III — UPCOMING EVENTS
        ============================================================ */}

        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-12 bg-[#7d1f2a]/50" />
              <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#7d1f2a]/70">
                Upcoming Events
              </span>
            </div>

            <h2 className="font-serif text-4xl text-[#34251c] sm:text-5xl lg:text-6xl">
              The next chapter
              <span className="ml-2 italic text-[#7d1f2a]">awaits.</span>
            </h2>
          </motion.div>

          {upcomingEvents.map((event, index) => (
            <motion.a
              key={event.title}
              href={event.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative block overflow-hidden border border-[#8c6b45]/35 bg-[#eee0c4]/45 px-7 py-12 sm:px-12 sm:py-16"
            >
              {/* Decorative giant date mark */}
              <div className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none font-serif text-[130px] leading-none text-[#7d1f2a]/4.5 sm:text-[200px]">
                01
              </div>

              <div className="relative grid gap-10 lg:grid-cols-[0.3fr_1fr_auto] lg:items-center">
                <div className="flex items-center gap-3 text-[#7d1f2a]">
                  <CalendarDays size={17} strokeWidth={1.3} />

                  <span className="text-[9px] font-medium uppercase tracking-[0.25em]">
                    {event.date}
                  </span>
                </div>

                <div>
                  <p className="mb-3 font-serif text-lg italic text-[#8c6b45]">
                    {event.subtitle}
                  </p>

                  <h3 className="font-serif text-4xl text-[#34251c] transition-colors duration-300 group-hover:text-[#7d1f2a] sm:text-5xl lg:text-6xl">
                    {event.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-[#59483a]/75">
                    {event.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#7d1f2a]">
                  Discover
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.3}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-28 text-center"
        >
          <div className="mx-auto mb-7 h-px w-16 bg-[#8c6b45]/40" />

          <p className="font-serif text-2xl italic text-[#59483a]/80 sm:text-3xl">
            Many hands. One heart.
          </p>

          <p className="mt-3 text-[9px] uppercase tracking-[0.3em] text-[#8c6b45]/60">
            Kalpataru Cultural Association
          </p>
        </motion.div>
      </div>
    </section>
  );
}
