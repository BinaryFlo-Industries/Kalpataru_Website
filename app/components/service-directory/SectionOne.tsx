"use client";

import { motion } from "motion/react";
import {
  ChevronDown,
  MapPin,
  Phone,
  Search,
  Store,
  Utensils,
  UserRound,
} from "lucide-react";
import { useMemo, useState } from "react";

type DirectoryEntry = {
  location: string;
  name: string;
  phone: string;
  type?: string;
};

type DirectoryCategory = "purohit" | "restaurants" | "takeaway";

const purohits: DirectoryEntry[] = [
  {
    location: "Ajmera",
    name: "Amarendra Mukherjee",
    phone: "9604870165",
  },
  {
    location: "Anandamaye Ashram",
    name: "Sourav Chatterjee",
    phone: "6295251694 / 7501036491",
  },
  {
    location: "Baner",
    name: "Kalyan Roy",
    phone: "9699936062",
  },
  {
    location: "Bhosari",
    name: "Raghunath Mishra",
    phone: "9161288804",
  },
  {
    location: "Bhosari",
    name: "Sanjib Ray",
    phone: "9883725651",
  },
  {
    location: "Bhosari",
    name: "Santosh Chatterjee",
    phone: "9595225883",
  },
  {
    location: "Chikhali",
    name: "Somnath Chakraborty",
    phone: "8788200125",
  },
  {
    location: "Chinchwad",
    name: "Barun Chakraborty",
    phone: "9766135168",
  },
  {
    location: "Chinchwad",
    name: "Haradhon Banerjee",
    phone: "7350065042",
  },
  {
    location: "Chinchwad",
    name: "Prodyut Chatterjee",
    phone: "9822747103",
  },
  {
    location: "Dehu Road",
    name: "Asit Chakraborty",
    phone: "9823354013 / 8999807107",
  },
  {
    location: "Dehu Road",
    name: "Satyajeet Bhattacharjee",
    phone: "8983425782",
  },
  {
    location: "Dehu Road",
    name: "Soumen Chatterjee",
    phone: "6295576250",
  },
  {
    location: "Dhanori",
    name: "Koushik Chatterjee",
    phone: "9832969558",
  },
  {
    location: "Dighi",
    name: "Mrityunjay Mukherjee",
    phone: "9763200375",
  },
  {
    location: "Ganesh Peth",
    name: "Bablu Bhattacharya",
    phone: "7602841937",
  },
  {
    location: "Hadapsar",
    name: "Asit Chakraborty",
    phone: "9424663312",
  },
  {
    location: "Hadapsar",
    name: "Dilip Ghoshal",
    phone: "9975145867 / 7028597607",
  },
  {
    location: "Handewadi",
    name: "Sameer Chatterjee",
    phone: "7908205471",
  },
  {
    location: "Kasba Peth",
    name: "Ajit Chakraborty",
    phone: "8793350869",
  },
  {
    location: "Khadki",
    name: "Bappa Chakraborty",
    phone: "9890726302",
  },
  {
    location: "Khadki",
    name: "Gopal Chakraborty",
    phone: "9860437102 / 8007861083",
  },
  {
    location: "Khadki",
    name: "Palash Chakraborty",
    phone: "8459308931",
  },
  {
    location: "Khadki",
    name: "Prithwis Chatterjee",
    phone: "7866901574",
  },
  {
    location: "Khadki",
    name: "Shanti Bhattacharya",
    phone: "9822406867",
  },
  {
    location: "Kondwa",
    name: "Bimal Mishra",
    phone: "8421248151 / 9352520646",
  },
  {
    location: "Lohegaon",
    name: "Krishna K Chakraborty",
    phone: "7002666943 / 7002321316",
  },
  {
    location: "Lohegaon",
    name: "Utpal Ghoshal",
    phone: "9614111485",
  },
  {
    location: "Magarpatta",
    name: "Pulak Mukherjee",
    phone: "8509916742",
  },
  {
    location: "Magarpatta",
    name: "S Bhaduri",
    phone: "9765611373",
  },
  {
    location: "Moshi",
    name: "Nirupam Maity",
    phone: "9373095275",
  },
  {
    location: "Pimple Gurav",
    name: "Mangal Chakraborty",
    phone: "9156303904 / 9823026054",
  },
  {
    location: "Pimple Saudagar",
    name: "Sanjib Chatterjee",
    phone: "9679631553",
  },
  {
    location: "Pimpri",
    name: "Atanu Roy",
    phone: "9823024326 / 8830353869",
  },
  {
    location: "Pimpri",
    name: "Saikat Chattopadhyay",
    phone: "8390240286",
  },
  {
    location: "Pimpri",
    name: "Sekhar Banerjee",
    phone: "7555878466",
  },
  {
    location: "Shivaji Nagar",
    name: "Aditya Chakraborty",
    phone: "9635265956",
  },
  {
    location: "Shivaji Nagar",
    name: "Biswajit Rajpandit",
    phone: "9564973468",
  },
  {
    location: "Sinhgad Road",
    name: "Nityananda Goswami",
    phone: "7498637543 / 9049468124",
  },
  {
    location: "Talegaon",
    name: "Tarashankar Chakraborty",
    phone: "8408084262",
  },
  {
    location: "Viman Nagar",
    name: "Provot Mukherjee",
    phone: "9748508897",
  },
  {
    location: "Wagholi",
    name: "Nikhil Bagish",
    phone: "8474012722",
  },
  {
    location: "Wanowarie",
    name: "Chinmoy Ganguly",
    phone: "8625931534 / 9075596865",
  },
];

const restaurants: DirectoryEntry[] = [
  {
    location: "Amanora",
    name: "Just Bengali",
    phone: "8484875750 / 8484875753",
  },
  {
    location: "Aundh",
    name: "Food Bengal",
    phone: "8411050205",
  },
  {
    location: "Bavdhan",
    name: "THAT PLACE - The Café",
    phone: "9830757909",
  },
  {
    location: "Dhanori",
    name: "Calcutta Kitchen Caterer",
    phone: "8855058418",
  },
  {
    location: "Handewadi",
    name: "Dada's Cabin",
    phone: "9890335314",
  },
  {
    location: "Hinjewadi",
    name: "Food Bengal",
    phone: "8411050202",
  },
  {
    location: "Kharadi",
    name: "Food Bengal",
    phone: "8411050200",
  },
  {
    location: "Magarpatta",
    name: "Aha Bangali",
    phone: "8412995848",
  },
  {
    location: "Magarpatta",
    name: "Kaka's Kitchen",
    phone: "9051260898 / 8240934108",
  },
  {
    location: "Moshi",
    name: "Maa Durga Restaurant",
    phone: "9511711624",
  },
  {
    location: "NIBM",
    name: "JB007 Kitchen & Bar",
    phone: "9890437858",
  },
  {
    location: "Pashan",
    name: "Kaka Kitchen",
    phone: "9051260898 / 8240934108",
  },
  {
    location: "Pimple Saudagar",
    name: "Bengal Kitchen",
    phone: "7719978787",
  },
  {
    location: "Pimple Saudagar",
    name: "Chilimili",
    phone: "8888339868",
  },
  {
    location: "Undri",
    name: "Deccan Hills",
    phone: "9922889162",
  },
  {
    location: "Undri",
    name: "Didi Kitchen",
    phone: "8329094319",
  },
  {
    location: "Undri",
    name: "Aparna's Kitchen",
    phone: "8293561207",
  },
  {
    location: "Viman Nagar",
    name: "Aha Bangali",
    phone: "9561503030",
  },
  {
    location: "Viman Nagar",
    name: "Bengali Sweet & Shop",
    phone: "8446615757",
  },
  {
    location: "Viman Nagar",
    name: "Swayam Aahar",
    phone: "7841822208",
  },
  {
    location: "Wakad",
    name: "Aha Bangali",
    phone: "8208660693",
  },
  {
    location: "Wakad",
    name: "Kolkata Rolls & Chops",
    phone: "9370872605",
  },
];

const takeawayCaterers: DirectoryEntry[] = [
  {
    location: "Amanora",
    type: "Take Away / Caterer",
    name: "Ridhaan's",
    phone: "9769865480",
  },
  {
    location: "Balewadi",
    type: "Take Away / Caterer",
    name: "Bengali Bhoj",
    phone: "9970250319",
  },
  {
    location: "Baner",
    type: "Take Away / Caterer",
    name: "Cooking Comedy Club",
    phone: "7278270857 / 9874716663",
  },
  {
    location: "Bibwewadi",
    type: "Take Away / Caterer",
    name: "Howrah Bridge",
    phone: "9923460363",
  },
  {
    location: "Dapodi",
    type: "Caterer",
    name: "Kali Mata Caterer",
    phone: "9822958434",
  },
  {
    location: "Dhanori",
    type: "Caterer",
    name: "Uttam Caterer",
    phone: "9371186409",
  },
  {
    location: "Hadapsar",
    type: "Take Away / Caterer",
    name: "Amri's Kitchen",
    phone: "9860484306",
  },
  {
    location: "Handewadi",
    type: "Take Away / Caterer",
    name: "Phoodie Monk",
    phone: "7378640329",
  },
  {
    location: "Handewadi",
    type: "Caterer",
    name: "Ramkrishna Caterer",
    phone: "9049881199",
  },
  {
    location: "Hinjewadi",
    type: "Take Away / Caterer",
    name: "Unoon",
    phone: "8770415649",
  },
  {
    location: "Hinjewadi (Marunji)",
    type: "Take Away / Caterer",
    name: "Sushmita's Kitchen",
    phone: "8698850936",
  },
  {
    location: "Khadki",
    type: "Take Away / Caterer",
    name: "Mon Kitchen",
    phone: "7278384399",
  },
  {
    location: "Kharadi",
    type: "Take Away / Caterer",
    name: "Delicious Mom's Magic",
    phone: "9975764379",
  },
  {
    location: "Kharadi",
    type: "Take Away / Caterer",
    name: "Emm's Kitchen",
    phone: "8860630526",
  },
  {
    location: "Magarpatta",
    type: "Restaurant / Take Away / Caterer",
    name: "Kaka's Kitchen",
    phone: "9051260898 / 8240934108",
  },
  {
    location: "Pashan",
    type: "Take Away / Caterer",
    name: "Khaidai",
    phone: "9423080572",
  },
  {
    location: "Pimple Saudagar",
    type: "Take Away / Caterer",
    name: "Aswadan kitchen",
    phone: "9921004422",
  },
  {
    location: "Pimpri",
    type: "Caterer",
    name: "Raj Caterer",
    phone: "9637106108",
  },
  {
    location: "Sinhgad Road",
    type: "Take Away / Caterer",
    name: "Touch of Bengal",
    phone: "8208469785",
  },
  {
    location: "Tingre Nagar",
    type: "Take Away / Caterer",
    name: "Breaking Basmati",
    phone: "9920970508",
  },
  {
    location: "Undri",
    type: "Restaurant / Take Away / Caterer",
    name: "Didi Kitchen",
    phone: "8329094319",
  },
  {
    location: "Undri",
    type: "Restaurant / Take Away",
    name: "Aparna's Kitchen",
    phone: "8293561207",
  },
  {
    location: "Viman Nagar",
    type: "Take Away / Caterer",
    name: "Chilimili",
    phone: "9359456044",
  },
  {
    location: "Vishrantwadi",
    type: "Take Away / Caterer",
    name: "Rannaghor Puja Kitchen",
    phone: "9049459370",
  },
  {
    location: "Wagholi",
    type: "Take Away / Caterer",
    name: "Jaggery & Sweets",
    phone: "9818264240",
  },
  {
    location: "Wagholi",
    type: "Take Away / Caterer",
    name: "Kolkata Calling",
    phone: "8806017022",
  },
  {
    location: "Wagholi",
    type: "Take Away / Caterer",
    name: "Sai Food Catering",
    phone: "7709822799",
  },
  {
    location: "Wagholi",
    type: "Take Away / Caterer",
    name: "Sucheta's Kitchen",
    phone: "8983666732",
  },
  {
    location: "Wakad",
    type: "Take Away / Caterer",
    name: "Aharey Bahare",
    phone: "98197 79971",
  },
  {
    location: "Wakad",
    type: "Take Away / Caterer",
    name: "Bengali Bliss",
    phone: "8087895330",
  },
  {
    location: "Wakad",
    type: "Take Away / Caterer",
    name: "Maa er Rannaghor",
    phone: "8876923707",
  },
  {
    location: "Wanowarie",
    type: "Caterer",
    name: "Pratap Caterer",
    phone: "9970285536",
  },
];

const categoryConfig = {
  purohit: {
    title: "Purohit",
    bengali: "পুরোহিত",
    description:
      "Connect with purohits serving the Bengali community across Pune.",
    icon: UserRound,
    data: purohits,
  },
  restaurants: {
    title: "Restaurants",
    bengali: "রেস্তোরাঁ",
    description:
      "Discover Bengali restaurants and food destinations around Pune.",
    icon: Utensils,
    data: restaurants,
  },
  takeaway: {
    title: "Takeaway / Caterer",
    bengali: "টেকঅ্যাওয়ে / ক্যাটারার",
    description:
      "Find takeaway kitchens and caterers for Bengali food and occasions.",
    icon: Store,
    data: takeawayCaterers,
  },
};

const ServiceDirectorySection = () => {
  const [activeCategory, setActiveCategory] =
    useState<DirectoryCategory>("purohit");

  const [selectedType, setSelectedType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [search, setSearch] = useState("");

  const activeData = categoryConfig[activeCategory].data;

  const typeOptions = useMemo(() => {
    const types = activeData
      .map((entry) => entry.type)
      .filter((type): type is string => Boolean(type));

    return [...new Set(types)];
  }, [activeData]);

  const locationOptions = useMemo(() => {
    return [...new Set(activeData.map((entry) => entry.location))].sort(
      (a, b) => a.localeCompare(b),
    );
  }, [activeData]);

  const filteredEntries = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return activeData.filter((entry) => {
      const matchesType = selectedType === "all" || entry.type === selectedType;

      const matchesLocation =
        selectedLocation === "all" || entry.location === selectedLocation;

      const matchesSearch =
        !normalizedSearch ||
        entry.name.toLowerCase().includes(normalizedSearch);

      return matchesType && matchesLocation && matchesSearch;
    });
  }, [activeData, search, selectedType, selectedLocation]);

  const handleCategoryChange = (category: DirectoryCategory) => {
    setActiveCategory(category);
    setSelectedType("all");
    setSelectedLocation("all");
    setSearch("");
  };

  return (
    <section className="relative overflow-hidden py-28 sm:py-32 lg:py-36">
      {/* Decorative typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-20 select-none font-serif text-[8rem] leading-none tracking-[-0.07em] text-[#3b0b12]/[0.035] sm:text-[12rem] lg:-right-28 lg:text-[18rem]"
      >
        DIRECTORY
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
              Kalpataru · Service Directory
            </p>
          </div>

          <p className="mb-4 font-serif text-2xl text-[#3b0b12]/50 sm:text-3xl">
            প্রয়োজনের সময় পাশে
          </p>

          <h1 className="font-serif text-5xl leading-[0.94] tracking-[-0.045em] text-[#3b0b12] sm:text-6xl lg:text-8xl">
            Find the people
            <span className="block text-[#e63946]">around you.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-[15px] leading-7 text-[#3b0b12]/65 sm:text-base sm:leading-8">
            A community directory of services, food and people that may be
            useful to Kalpataru members across Pune.
          </p>
        </motion.div>

        {/* Business category cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {(Object.keys(categoryConfig) as DirectoryCategory[]).map(
            (category, index) => {
              const config = categoryConfig[category];
              const Icon = config.icon;
              const active = activeCategory === category;

              return (
                <motion.button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group relative overflow-hidden rounded-4xl border p-7 text-left transition-all duration-300 sm:p-8 ${
                    active
                      ? "border-[#3b0b12] bg-[#3b0b12] text-white shadow-[0_22px_55px_rgba(59,11,18,0.16)]"
                      : "border-[#3b0b12]/10 bg-white/60 text-[#3b0b12] shadow-[0_18px_50px_rgba(59,11,18,0.045)] hover:-translate-y-1 hover:border-[#e63946]/20 hover:shadow-[0_24px_60px_rgba(59,11,18,0.08)]"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${
                      active
                        ? "bg-[#e63946] text-white"
                        : "bg-[#e63946]/10 text-[#e63946]"
                    }`}
                  >
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <p
                    className={`mt-7 font-serif text-2xl ${
                      active ? "text-white" : "text-[#3b0b12]"
                    }`}
                  >
                    {config.title}
                  </p>

                  <p
                    className={`mt-1 font-serif text-lg ${
                      active ? "text-white/50" : "text-[#3b0b12]/40"
                    }`}
                  >
                    {config.bengali}
                  </p>

                  <p
                    className={`mt-4 text-sm leading-6 ${
                      active ? "text-white/60" : "text-[#3b0b12]/55"
                    }`}
                  >
                    {config.description}
                  </p>

                  <span
                    className={`mt-7 inline-flex text-[10px] font-semibold uppercase tracking-[0.2em] ${
                      active ? "text-[#ffd166]" : "text-[#e63946]"
                    }`}
                  >
                    {active ? "Selected" : "Explore directory"}
                  </span>
                </motion.button>
              );
            },
          )}
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 rounded-4xl border border-[#3b0b12]/10 bg-white/55 p-5 shadow-[0_18px_50px_rgba(59,11,18,0.045)] backdrop-blur-sm sm:p-6"
        >
          <div
            className={`grid gap-4 ${
              typeOptions.length > 0
                ? "lg:grid-cols-[1fr_1fr_1.4fr]"
                : "lg:grid-cols-[1fr_1.4fr]"
            }`}
          >
            {/* Type */}
            {typeOptions.length > 0 && (
              <div>
                <label
                  htmlFor="directory-type"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3b0b12]/45"
                >
                  Type
                </label>

                <div className="relative">
                  <select
                    id="directory-type"
                    value={selectedType}
                    onChange={(event) => setSelectedType(event.target.value)}
                    className="h-12 w-full appearance-none rounded-2xl border border-[#3b0b12]/10 bg-[#fffaf2] px-4 pr-10 text-sm text-[#3b0b12] outline-none transition-colors focus:border-[#e63946]/40"
                  >
                    <option value="all">All types</option>

                    {typeOptions.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={17}
                    strokeWidth={1.7}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#3b0b12]/40"
                  />
                </div>
              </div>
            )}

            {/* Location */}
            <div>
              <label
                htmlFor="directory-location"
                className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3b0b12]/45"
              >
                Location
              </label>

              <div className="relative">
                <select
                  id="directory-location"
                  value={selectedLocation}
                  onChange={(event) => setSelectedLocation(event.target.value)}
                  className="h-12 w-full appearance-none rounded-2xl border border-[#3b0b12]/10 bg-[#fffaf2] px-4 pr-10 text-sm text-[#3b0b12] outline-none transition-colors focus:border-[#e63946]/40"
                >
                  <option value="all">All locations</option>

                  {locationOptions.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={17}
                  strokeWidth={1.7}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#3b0b12]/40"
                />
              </div>
            </div>

            {/* Search */}
            <div>
              <label
                htmlFor="directory-search"
                className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3b0b12]/45"
              >
                Search
              </label>

              <div className="relative">
                <Search
                  size={17}
                  strokeWidth={1.7}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3b0b12]/35"
                />

                <input
                  id="directory-search"
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search by name..."
                  className="h-12 w-full rounded-2xl border border-[#3b0b12]/10 bg-[#fffaf2] pl-11 pr-4 text-sm text-[#3b0b12] outline-none placeholder:text-[#3b0b12]/30 transition-colors focus:border-[#e63946]/40"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex items-end justify-between gap-4 border-b border-[#3b0b12]/10 pb-5"
        >
          <div>
            <p className="font-serif text-2xl text-[#3b0b12]">
              {categoryConfig[activeCategory].title}
            </p>

            <p className="mt-1 text-xs text-[#3b0b12]/45">
              {filteredEntries.length}{" "}
              {filteredEntries.length === 1 ? "listing" : "listings"}
            </p>
          </div>

          {search || selectedLocation !== "all" || selectedType !== "all" ? (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedLocation("all");
                setSelectedType("all");
              }}
              className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e63946] transition-opacity hover:opacity-70"
            >
              Clear filters
            </button>
          ) : null}
        </motion.div>

        {/* Directory cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEntries.map((entry, index) => (
            <motion.article
              key={`${entry.location}-${entry.name}-${index}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.025, 0.35),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group rounded-[1.75rem] border border-[#3b0b12]/10 bg-white/55 p-6 shadow-[0_14px_40px_rgba(59,11,18,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e63946]/20 hover:shadow-[0_20px_50px_rgba(59,11,18,0.07)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-serif text-xl leading-6 text-[#3b0b12]">
                    {entry.name}
                  </h3>

                  {entry.type && (
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#e63946]">
                      {entry.type}
                    </p>
                  )}
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e63946]/8 text-[#e63946]">
                  {activeCategory === "purohit" ? (
                    <UserRound size={16} strokeWidth={1.7} />
                  ) : (
                    <Utensils size={16} strokeWidth={1.7} />
                  )}
                </span>
              </div>

              <div className="mt-6 space-y-3 border-t border-[#3b0b12]/8 pt-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    strokeWidth={1.7}
                    className="mt-0.5 shrink-0 text-[#e63946]"
                  />

                  <p className="text-sm text-[#3b0b12]/60">{entry.location}</p>
                </div>

                <a
                  href={`tel:${entry.phone.replace(/[^\d+]/g, "")}`}
                  className="flex items-start gap-3 text-sm text-[#3b0b12]/65 transition-colors hover:text-[#e63946]"
                >
                  <Phone
                    size={16}
                    strokeWidth={1.7}
                    className="mt-0.5 shrink-0 text-[#e63946]"
                  />

                  <span>{entry.phone}</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Empty state */}
        {filteredEntries.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 flex min-h-70 items-center justify-center rounded-4xl border border-dashed border-[#3b0b12]/10 bg-white/40"
          >
            <div className="text-center">
              <Search
                size={28}
                strokeWidth={1.4}
                className="mx-auto text-[#3b0b12]/20"
              />

              <p className="mt-4 font-serif text-xl text-[#3b0b12]/50">
                No listings found.
              </p>

              <p className="mt-2 text-sm text-[#3b0b12]/35">
                Try changing your search or filters.
              </p>
            </div>
          </motion.div>
        )}

        {/* Disclaimer / source note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 border-t border-[#3b0b12]/10 pt-7"
        >
          <p className="max-w-3xl text-xs leading-6 text-[#3b0b12]/40">
            The directory contains information shared through the Kalpataru
            community. Please confirm availability, services and contact details
            directly with the respective individual or business before making
            arrangements.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDirectorySection;
