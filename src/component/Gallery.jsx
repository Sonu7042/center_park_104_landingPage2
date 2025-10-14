// src/components/Gallery.jsx
import React, { useState, useCallback, useEffect } from "react";
import building_inside2 from '../assets/buiding_inside2.jpg'
import building_inside3 from '../assets/buiding_inside3.jfif'
import building_inside4 from '../assets/buiding_inside4.jpg'
import building_inside5 from '../assets/buiding_inside5.jpg'
import building_inside6 from '../assets/buiding_inside6.jpg'

export default function Gallery({
  title = "Project Gallery",
  images = [
    { src: building_inside2, alt: "Bedroom interior render" },
    { src: building_inside3, alt: "Lounge interior with seating" },
    { src: building_inside4, alt: "Master bedroom wide view" },
    { src: building_inside5, alt: "Master bedroom wide view" },
    { src: building_inside6, alt: "Master bedroom wide view" },
    { src: building_inside3, alt: "Master bedroom wide view" },
  ],
  onQueryClick = () => {},
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = useCallback((i) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  // Keyboard nav in lightbox
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length, close]);

  return (
    <section className="relative isolate overflow-hidden bg-canvas text-slate-800">
      {/* Desktop rail */}
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

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => openAt(i)}
              className="group relative block overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile CTA */}
      {/* <div className="sticky bottom-4 z-30 mx-auto w-full px-4 md:hidden">
        <button
          onClick={onQueryClick}
          className="mx-auto flex w-full max-w-xs items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-white shadow-lg shadow-black/10 transition hover:bg-primaryDark"
        >
          Query Now
        </button>
      </div> */}

      {/* Lightbox modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black/30 ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[index].src}
              alt={images[index].alt}
              className="mx-auto max-h-[80vh] w-full object-contain"
            />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
              <button
                onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
                className="rounded-md bg-white/20 px-3 py-2 text-white backdrop-blur transition hover:bg-white/30"
              >
                Prev
              </button>
              <button
                onClick={close}
                className="rounded-md bg-white/20 px-3 py-2 text-white backdrop-blur transition hover:bg-white/30"
              >
                Close
              </button>
              <button
                onClick={() => setIndex((i) => (i + 1) % images.length)}
                className="rounded-md bg-white/20 px-3 py-2 text-white backdrop-blur transition hover:bg-white/30"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
