import React from "react";

/* Inline SVG icons (stroke = currentColor) */
const IconBase = ({ className = "h-5 w-5", children }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const HomeIcon = (props) => (
  <IconBase {...props}>
    <path d="M3 12l9-8 9 8" />
    <path d="M5 10v10a2 2 0 0 0 2 2h3v-6h4v6h3a2 2 0 0 0 2-2V10" />
  </IconBase>
);

const MapPinIcon = (props) => (
  <IconBase {...props}>
    <path d="M12 21s-6-5.25-6-9a6 6 0 1 1 12 0c0 3.75-6 9-6 9z" />
    <circle cx="12" cy="12" r="2.5" />
  </IconBase>
);

const CrownIcon = (props) => (
  <IconBase {...props}>
    <path d="M4 14l3-6 5 4 5-4 3 6" />
    <path d="M4 14h16v2H4z" />
  </IconBase>
);

const SparklesIcon = (props) => (
  <IconBase {...props}>
    <path d="M12 4l1.1 3.1L16.2 8.2 13.1 9.3 12 12.4 10.9 9.3 7.8 8.2 10.9 7.1 12 4z" />
    <path d="M6 5l.6 1.6L8.2 7.8 6.6 8.4 6 10 5.4 8.4 3.8 7.8 5.4 6.6 6 5z" />
  </IconBase>
);

const GridIcon = (props) => (
  <IconBase {...props}>
    <rect x="4" y="4" width="7" height="7" rx="1.5" />
    <rect x="13" y="4" width="7" height="7" rx="1.5" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" />
    <rect x="13" y="13" width="7" height="7" rx="1.5" />
  </IconBase>
);

const ShieldCheckIcon = (props) => (
  <IconBase {...props}>
    <path d="M12 3l7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </IconBase>
);

/* Keyword-to-icon mapper so strings can be passed directly */
const getIconFor = (text) => {
  const t = text.toLowerCase();
  if (t.includes("studio") || t.includes("bhk")) return HomeIcon;
  if (t.includes("sector") || t.includes("expressway") || t.includes("gurgaon") || t.includes("gurugram")) return MapPinIcon;
  if (t.includes("renowned") || t.includes("luxury") || t.includes("central park")) return CrownIcon;
  if (t.includes("modern design") || t.includes("premium") || t.includes("spacious")) return SparklesIcon;
  if (t.includes("amenities") || t.includes("clubhouse") || t.includes("swimming") || t.includes("fitness") || t.includes("greens")) return GridIcon;
  if (t.includes("security") || t.includes("gated") || t.includes("surveillance") || t.includes("cctv")) return ShieldCheckIcon;
  return SparklesIcon; // default fallback
};

export default function Highlights({
  title = "Central Park 104 Highlights",
  items = [
    "Studio size: 966 sq. ft. onwards.",
    "Sector 104, Dwarka Expressway, Gurgaon",
    "Central Park – Renowned for luxury developments",
    "Modern Design with spacious layouts & premium finishes",
    "World-Class Amenities including clubhouse, landscaped greens, swimming pool & fitness zone",
    "High-end Security with gated community and surveillance",
  ],
}) {
  return (
    <section className="relative text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-16">
        <h2 className="text-center font-serif text-2xl leading-snug sm:text-3xl lg:text-4xl">
          {title}
        </h2>

        <ul
          role="list"
          className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-6"
        >
          {items.map((text, idx) => {
            const Icon = getIconFor(text);
            return (
              <li key={idx} className="flex items-start gap-5 mt-5">
                {/* Big icon badge */}
                <span className="mt-0.5 inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-slate-100 ring-1 ring-slate-200">
                  <Icon className="h-8 w-8 text-[#294287]" />
                </span>
                {/* Text */}
                <p className="text-base leading-7 text-slate-900 sm:text-[17px]">
                  {text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
