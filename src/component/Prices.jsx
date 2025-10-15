import React from "react";

const plans = [
  { tab: "Studio", typology: "Studio", size: "966 sq. ft. onwards." },
  { tab: "3 BHK", typology: "3 BHK", size: "4500 Sqft" },
  { tab: "4 BHK", typology: "4 BHK", size: "5500 Sqft" },
];

export default function Price({
  title = "Central Park 104 Price",
  items = plans,
  onQueryClick = () => {},
}) {
  return (
    <section className="relative isolate  overflow-hidden bg-canvas text-slate-800">
      {/* Layered background with diagonal warm wedge */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-canvas" />
        <div
          className="absolute inset-0 bg-accentWarm/95"
          style={{
            clipPath: "polygon(60% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />
      </div>

      {/* Desktop vertical rail */}
      {/* <button
        onClick={onQueryClick}
        className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 rounded-l-full bg-primary px-2 py-3 text-white shadow-xl transition hover:bg-primaryDark md:block"
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

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((p, i) => (
            <article
              key={i}
              className="relative rounded-2xl border border-slate-300/60 bg-white p-0 shadow-sm ring-1 ring-black/5 backdrop-blur-[2px]"
            >
              {/* Card top shelf to create the “tab holder” shape */}
              <div className="h-10 rounded-t-2xl bg-white" />
              {/* The floating tab */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <div className="rounded-full bg-[#243e84] px-10 py-2 text-sm font-semibold text-white shadow-md">
                  {p.tab} 
                </div>
              </div>

              {/* Body */}
              <div className="space-y-6 px-6 pb-6 pt-4">
                <dl className="space-y-4 text-[15px] sm:text-base">
                  <div className="flex items-center justify-between">
                    <dt className="text-slate-700">Typology :</dt>
                    <dd className="font-semibold text-slate-900">{p.typology}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-slate-700">Size :</dt>
                    <dd className="font-semibold text-slate-900">{p.size}</dd>
                  </div>
                </dl>
{/* 
                <button
                  onClick={onQueryClick}
                  className="inline-flex w-full  bg-[#243e84] items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white shadow-lg shadow-black/10 transition hover:bg-primaryDark"
                >
                  Query Now
                </button> */}
              </div>
            </article>
          ))}
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
