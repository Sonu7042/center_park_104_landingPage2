// src/components/AmenitiesGrid.jsx
import React from "react";

import cctv from "../assets/cctv2.avif";
import gym from "../assets/gym2.avif";
import house_clabbing from "../assets/Amenities/house_clabbing.jpg";
import jogging from "../assets/Amenities/jogging.jpg";
import swimming from "../assets/summingPool_amentities.jpg";
import tennis from "../assets/Amenities/tennis.jfif";
import theater from "../assets/Amenities/theater.webp";
import yoga from "../assets/Amenities/yoga.jpg";


// Image-based amenities data
const defaultAmenities = [
  { label: "Temperature Swimming Pool", src: swimming },
  { label: "Gym", src: gym },
  { label: "Jogging Track", src: jogging },
  { label: "Yoga Pavilion", src: yoga },
  { label: "Tennis Court", src: tennis },
  { label: "24/7 CCTV", src: cctv },
  { label: "Club House", src: house_clabbing },
  { label: "Mini Theater", src: theater },
];

export default function Amenities({
  title = "Central Park 104 Amenities",
  items = defaultAmenities,
  onQueryClick = () => {},
}) {
  return (
    <section className="relative isolate overflow-hidden bg-canvas text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <h2 className="text-center font-serif text-2xl leading-snug sm:text-3xl lg:text-4xl">
          {title}
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {items.map(({ label, src }, idx) => (
            <div
              key={idx}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-300/60 bg-white text-center shadow-sm ring-1 ring-black/5 backdrop-blur-[2px] transition hover:shadow-lg"
            >
              {/* Full-width image banner */}
              <div className="relative w-full overflow-hidden aspect-[4/3] sm:aspect-[16/9]">
                <img
                  src={src}
                  alt={label}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Fixed-height text strip (left-aligned) */}
              <div className="flex h-12 items-center px-4 text-left sm:h-14 sm:px-5">
                <p
                  className="line-clamp-2 text-sm font-medium text-slate-800 sm:text-base
                             [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden"
                >
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
