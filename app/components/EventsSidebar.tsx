"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const events = [
  {
    title: "Durga Puja",
    description: "Our annual celebration of Maa Durga",
    href: "/events/durga-puja",
  },
  {
    title: "Laxmi Puja",
    description: "Our annual celebration of Maa Laxmi",
    href: "/events/laxmi-puja",
  },
  {
    title: "Kali Puja",
    description: "Our annual celebration of Maa Kali",
    href: "/events/kali-puja",
  },
  {
    title: "Saraswati Puja",
    description: "Our annual celebration of Maa Saraswati",
    href: "/events/saraswati-puja",
  },
  {
    title: "Matri Bondona",
    description:
      "A cultural event that celebrates the bond between mothers and children",
    href: "/events/matri-bondona",
  },
  {
    title: "Rong Milanti",
    description:
      "A cultural event that brings together the community for a night of fun and entertainment",
    href: "/events/rong-milanti",
  },
  {
    title: "Borsoboron",
    description:
      "A cultural event that celebrates the spirit of togetherness and community bonding",
    href: "/events/borsoboron",
    active: true,
  },
];

const EventSidebar = () => {
  return (
    <aside className="h-full pt-32">
      <div className="rounded-3xl border border-[#3B0B12]/10 bg-[#FFFDF8] p-5 shadow-[0_12px_35px_rgba(59,11,18,0.06)]">
        {/* Header */}
        <div className="mb-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-7 bg-[#E63946]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#3B0B12]/55">
              Events
            </span>
          </div>

          <h2 className="font-serif text-2xl leading-tight text-[#3B0B12]">
            Event Index
          </h2>
        </div>

        {/* Event List */}
        <nav className="space-y-1" aria-label="Events">
          {events.map((event) => (
            <Link
              key={event.title}
              href={event.href}
              className={`group block rounded-2xl px-3.5 py-3 transition-all duration-300 ${
                event.active ? "bg-[#3B0B12]" : "hover:bg-[#3B0B12]/4.5"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div
                    className={`text-[13px] font-semibold leading-tight ${
                      event.active ? "text-[#FFFDF8]" : "text-[#3B0B12]"
                    }`}
                  >
                    {event.title}
                  </div>

                  <div
                    className={`mt-1.5 text-[10px] leading-[1.45] ${
                      event.active ? "text-[#FFFDF8]/65" : "text-[#3B0B12]/48"
                    }`}
                  >
                    {event.description}
                  </div>
                </div>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  className={`mt-0.5 shrink-0 transition-all duration-300 ${
                    event.active
                      ? "text-[#F59E0B]"
                      : "text-[#3B0B12]/30 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E63946]"
                  }`}
                />
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default EventSidebar;
