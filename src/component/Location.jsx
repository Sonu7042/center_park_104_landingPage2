// src/components/LocationSection.jsx
import React from "react";
// import map from '../assets/map.png'

const defaultItems = [
  { name: "IGI Airport & Aerocity", time: "15 Mins" },
  { name: "Railway Station", time: "10 Mins" },
  { name: "Cambridge Montessori Gurgaon", time: "0 Mins" },
  { name: "Delhi Public School Sector 103", time: "3 Mins" },
  { name: "Gurugram Global Heights School", time: "8 Mins" },
  { name: "Vibrant Hospital", time: "6 Mins" },
  { name: "AIIMS Hospital", time: "30 Mins" },
  { name: " Global City", time: "18 Mins" },
];

function PinIcon() {
  return (
    <svg viewBox="0 0 200 240" className="w-full max-w-sm text-[#243e84]">
      <path
        d="M100 230c55-80 80-110 80-140C180 40 144 10 100 10S20 40 20 90c0 30 25 60 80 140Z"
        fill="currentColor"
        opacity="0.9"
      />
      <circle cx="100" cy="90" r="30" fill="#f7f2ed" />
      <ellipse cx="100" cy="220" rx="70" ry="18" fill="currentColor" opacity="0.15" />
    </svg>
  );
}

const BulletIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#7a675c]" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z" />
  </svg>
);

export default function Location({
  title = "Central Park 104 Location",
  subtitle = "Discover Your Home in the Perfect Location | Easy access to NH-8, UER-II & Delhi",
  items = defaultItems,
  onQueryClick = () => {},
}) {
  return (
    <section className="relative isolate overflow-hidden bg-canvas text-slate-800">
      {/* Desktop vertical rail */}
      {/* <button
        onClick={onQueryClick}
        className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 rounded-l-full bg-primary px-2 py-3 text-black shadow-xl transition hover:bg-primaryDark md:block"
        aria-label="Query Now"
      >
        <span className="[writing-mode:vertical-rl] rotate-180 text-xs font-medium tracking-wide">
          Query Now
        </span>
      </button> */}

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <h2 className="text-center font-serif text-2xl leading-snug sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-center text-sm text-slate-700 sm:text-base">
          {subtitle}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left: list */}
          <div>
            <ul className="divide-y divide-slate-300/60">
              {items.map((it, i) => (
                <li key={i} className="flex items-center justify-between gap-4 py-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-black/5">
                      <BulletIcon />
                    </span>
                    <span className="text-[15px] font-medium text-slate-900 sm:text-base">{it.name}</span>
                  </div>
                  <span className="text-sm text-slate-700">{it.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: big pin illustration */}
          <div className="mx-auto flex w-full items-center justify-center rounded-2xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224456.74362517978!2d76.70474963281251!3d28.475432000000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1700303982b1%3A0xbcfa085b101e12f9!2sCentral%20Park%20104!5e0!3m2!1sen!2sin!4v1760424408964!5m2!1sen!2sin" width="600" height="490" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      {/* Mobile CTA pill */}
      {/* <div className="sticky bottom-4 z-30 mx-auto w-full px-4 md:hidden">
        <button
          onClick={onQueryClick}
          className="mx-auto flex w-full max-w-xs items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-white shadow-lg shadow-black/10 transition hover:bg-primaryDark"
        >
          Query Now
        </button>
      </div> */}
    </section>
  );
}
