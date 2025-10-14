import React from "react";
import buiding1 from '../assets/overview_img.png'


export default function Overview({
  onQueryClick = () => {},
}) {
  return (
    <section className="relative text-slate-800">
      {/* Vertical rail button (hidden on small screens) */}
      {/* <button
        onClick={onQueryClick}
        className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 rounded-l-full bg-primary px-2 py-3 text-white shadow-xl transition hover:bg-primaryDark md:block"
        aria-label="Query Now"
      >
        <span className="[writing-mode:vertical-rl] rotate-180 text-xs font-medium tracking-wide">
          Query Now
        </span>
      </button> */}

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-16">
        {/* Text column */}
        <div>
          <h2 className="font-serif text-2xl leading-snug sm:text-3xl lg:text-4xl">
            Central Park 104 – Live Life Above the Ordinary
          </h2>

          <div className="prose prose-slate mt-6 max-w-none text-[15px] leading-7 prose-p:my-4 sm:text-base">
            <p>
              Experience a new height of luxury living at Central Park 104, an exclusive residential community on the Dwarka Expressway, Gurugram. Spread across 7.5 acres, this landmark address stands out with its iconic skyline and modern architecture, offering a lifestyle that’s as elevated as its views.
            </p>
            <p>
              Here, you’re seamlessly connected to everything that matters—IGI Airport, key NCR corridors, and upcoming metro lines, making travel effortless and convenient.
            </p>
            <p>
              The development features elegant high-rise towers with G+29 floors, offering spacious 3 &amp; 4 BHK residences. Each home is thoughtfully designed with world-class amenities, ensuring comfort, style, and sophistication in every detail.
            </p>
            <p>
              At Central Park 104, you don’t just live—you rise above the city and embrace life at a whole new level.
            </p>
          </div>
        </div>

        {/* Image column */}
        <div className="order-first lg:order-none">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
            <img
              src={buiding1}
              alt="Aerial rendering of Central Park 104 towers and podium"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile rail button (becomes a floating pill) */}
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
