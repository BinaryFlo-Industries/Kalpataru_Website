"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

type DropdownItem = {
  label: string;
  href: string;
  description?: string;
};

type NavItem = {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
};

const navigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Social",
    dropdown: [
      {
        label: "Pathshala",
        href: "/pathshala",
        description:
          "The place where we teach our children about Bengal and its culture",
      },
      {
        label: "Adopt a student",
        href: "/adopt-a-student",
        description: "Support a child's education and cultural growth",
      },
    ],
  },
  {
    label: "Cultural",
    dropdown: [
      {
        label: "Durga Puja",
        href: "/events/durga-puja",
        description: "Our annual celebration of Maa Durga",
      },
      {
        label: "Laxmi Puja",
        href: "/events/laxmi-puja",
        description: "Our annual celebration of Maa Laxmi",
      },
      {
        label: "Kali Puja",
        href: "/events/kali-puja",
        description: "Our annual celebration of Maa Kali",
      },
      {
        label: "Saraswati Puja",
        href: "/events/saraswati-puja",
        description: "Our annual celebration of Maa Saraswati",
      },
      {
        label: "Matri Bondona",
        href: "/events/matri-bondona",
        description:
          "A cultural event that celebrates the bond between mothers and children",
      },
      {
        label: "Rong Milanti",
        href: "/events/rong-milanti",
        description:
          "A cultural event that brings together the community for a night of fun and entertainment",
      },
      {
        label: "Borsoboron",
        href: "/events/borsoboron",
        description:
          "A cultural event that celebrates the spirit of togetherness and community bonding",
      },
      {
        label: "Picnic",
        href: "/events/picnic",
        description:
          "A fun-filled day of outdoor activities and games for the whole family",
      },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Service Directory",
    href: "/service-directory",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (item: NavItem) => {
    if (item.href === "/") {
      return pathname === "/";
    }

    if (item.href) {
      return pathname === item.href || pathname.startsWith(`${item.href}/`);
    }

    return item.dropdown?.some(
      (dropdownItem) =>
        pathname === dropdownItem.href ||
        pathname.startsWith(`${dropdownItem.href}/`),
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 18,
          mass: 0.8,
        }}
        className={[
          "relative mx-auto flex w-full max-w-7xl items-center",
          "rounded-[28px] border",
          "transition-all duration-500",
          scrolled
            ? "border-white/40 bg-[#f8f1e5]/90 shadow-[0_12px_50px_rgba(65,42,20,0.14)] backdrop-blur-2xl"
            : "border-white/25 bg-[#f8f1e5]/70 shadow-[0_8px_40px_rgba(65,42,20,0.08)] backdrop-blur-xl",
        ].join(" ")}
      >
        {/* Decorative glass highlight */}
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/80 to-transparent" />

        {/* Logo */}
        <Link
          href="/"
          aria-label="Kalpataru Cultural Association"
          className="relative z-10 flex h-16 w-20 shrink-0 items-center justify-center sm:h-18 sm:w-24"
        >
          <motion.div
            whileHover={{
              scale: 1.06,
              rotate: -1,
            }}
            whileTap={{ scale: 0.96 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
            className="relative h-12 w-12 sm:h-14 sm:w-14"
          >
            <Image
              src="/logo.png"
              alt="Kalpataru Cultural Association"
              fill
              priority
              className="object-contain"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="ml-auto hidden items-center gap-1 pr-2 lg:flex">
          {navigation.map((item) => {
            const active = isActive(item);

            if (!item.dropdown) {
              return (
                <NavLink
                  key={item.label}
                  href={item.href!}
                  label={item.label}
                  active={active}
                />
              );
            }

            return (
              <Dropdown
                key={item.label}
                item={item}
                active={active}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
              />
            );
          })}

          {/* Contact / CTA */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="ml-2"
          >
            <Link
              href="/join-us"
              className="
                group relative flex items-center gap-2
                overflow-hidden rounded-full
                bg-[#5c1f1f] px-5 py-3
                text-sm font-medium text-[#fff8ed]
                shadow-[0_5px_20px_rgba(92,31,31,0.18)]
              "
            >
              <span className="relative z-10">Join Us</span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />

              <span
                className="
                  absolute inset-0
                  -translate-x-full
                  bg-[#742b2b]
                  transition-transform duration-500
                  group-hover:translate-x-0
                "
              />
            </Link>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileOpen((value) => !value)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="
            ml-auto mr-3 flex h-11 w-11
            items-center justify-center
            rounded-full
            border border-[#5c1f1f]/10
            bg-white/30
            text-[#5c1f1f]
            lg:hidden
          "
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={21} strokeWidth={1.7} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu size={21} strokeWidth={1.7} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile navigation */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute left-0 right-0 top-[calc(100%+10px)]
                max-h-[70vh]
                overflow-y-auto
                overscroll-contain
                rounded-[28px]
                border border-white/40
                bg-[#f8f1e5]/95
                shadow-[0_20px_60px_rgba(65,42,20,0.14)]
                backdrop-blur-2xl
                lg:hidden
                "
            >
              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.05 }}
                className="p-3"
              >
                {navigation.map((item, index) => (
                  <MobileNavItem
                    key={item.label}
                    item={item}
                    active={isActive(item)}
                    index={index}
                  />
                ))}

                <Link
                  href="/join-us"
                  className="
                    mt-2 flex items-center justify-center
                    rounded-2xl
                    bg-[#5c1f1f]
                    px-5 py-3.5
                    text-sm font-medium
                    text-[#fff8ed]
                  "
                >
                  Join Us
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

/* -------------------------------- */
/* Desktop nav link                 */
/* -------------------------------- */

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean | undefined;
}) {
  return (
    <Link
      href={href}
      className="
        group relative rounded-full
        px-4 py-3
        text-[14px]
        font-medium
        text-[#573f34]
        transition-colors duration-300
        hover:text-[#5c1f1f]
      "
    >
      <span className="relative z-10">{label}</span>

      {active && (
        <motion.span
          layoutId="activeNav"
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 30,
          }}
          className="
            absolute inset-0
            rounded-full
            bg-[#5c1f1f]/[0.07]
          "
        />
      )}

      <span
        className="
          absolute bottom-1.5 left-1/2 h-0.5 w-0
          -translate-x-1/2 rounded-full
          bg-[#5c1f1f]
          transition-all duration-300
          group-hover:w-3
        "
      />
    </Link>
  );
}

/* -------------------------------- */
/* Desktop dropdown                 */
/* -------------------------------- */

function Dropdown({
  item,
  active,
  openDropdown,
  setOpenDropdown,
}: {
  item: NavItem;
  active: boolean | undefined;
  openDropdown: string | null;
  setOpenDropdown: (value: string | null) => void;
}) {
  const isOpen = openDropdown === item.label;

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenDropdown(item.label)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        type="button"
        onClick={() => setOpenDropdown(isOpen ? null : item.label)}
        className="
          group relative flex items-center gap-1
          rounded-full px-4 py-3
          text-[14px] font-medium
          text-[#573f34]
          transition-colors duration-300
          hover:text-[#5c1f1f]
        "
      >
        <span className="relative z-10">{item.label}</span>

        <motion.span
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{
            duration: 0.25,
          }}
          className="relative z-10"
        >
          <ChevronDown size={14} strokeWidth={1.7} />
        </motion.span>

        {active && (
          <motion.span
            layoutId="activeNav"
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
            className="
              absolute inset-0
              rounded-full
              bg-[#5c1f1f]/[0.07]
            "
          />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 8,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 8,
              scale: 0.97,
            }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute right-0 top-[calc(100%+10px)]
                w-75
                max-h-[70vh]
                overflow-y-auto
                overscroll-contain
                origin-top-right
                rounded-3xl
                border border-white/50
                bg-[#faf3e8]/95
                p-2
                shadow-[0_20px_70px_rgba(65,42,20,0.16)]
                backdrop-blur-2xl
            "
          >
            {/* top decorative line */}
            <div className="mb-2 h-px bg-linear-to-r from-transparent via-[#8d5b43]/25 to-transparent" />

            {item.dropdown?.map((dropdownItem, index) => (
              <motion.div
                key={dropdownItem.label}
                initial={{
                  opacity: 0,
                  x: -8,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.045,
                }}
              >
                <Link
                  href={dropdownItem.href}
                  className="
                    group block rounded-[18px]
                    px-4 py-3
                    transition-colors duration-300
                    hover:bg-[#5c1f1f]/5.5
                  "
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        text-sm font-medium
                        text-[#4d382f]
                        transition-colors
                        group-hover:text-[#5c1f1f]
                      "
                    >
                      {dropdownItem.label}
                    </span>

                    <ArrowUpRight
                      size={15}
                      className="
                        opacity-0
                        -translate-x-1
                        translate-y-1
                        text-[#5c1f1f]
                        transition-all duration-300
                        group-hover:translate-x-0
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    />
                  </div>

                  {dropdownItem.description && (
                    <p className="mt-1 max-w-60 text-xs leading-5 text-[#806c60]">
                      {dropdownItem.description}
                    </p>
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* -------------------------------- */
/* Mobile nav                       */
/* -------------------------------- */

function MobileNavItem({
  item,
  active,
  index,
}: {
  item: NavItem;
  active: boolean | undefined;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  if (!item.dropdown) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.04 }}
      >
        <Link
          href={item.href!}
          className={`
            flex items-center rounded-2xl px-4 py-3.5
            text-sm font-medium
            ${active ? "bg-[#5c1f1f]/[0.07] text-[#5c1f1f]" : "text-[#573f34]"}
          `}
        >
          {item.label}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.04 }}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="
          flex w-full items-center justify-between
          rounded-2xl px-4 py-3.5
          text-sm font-medium text-[#573f34]
        "
      >
        <span>{item.label}</span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mb-1 ml-3 border-l border-[#5c1f1f]/10 pl-3">
              {item.dropdown.map((dropdownItem) => (
                <Link
                  key={dropdownItem.label}
                  href={dropdownItem.href}
                  className="
                    block rounded-xl px-4 py-3
                    text-sm text-[#806c60]
                    transition-colors
                    hover:bg-[#5c1f1f]/5
                    hover:text-[#5c1f1f]
                  "
                >
                  {dropdownItem.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
