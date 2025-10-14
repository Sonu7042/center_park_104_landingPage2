import React, { useState, useEffect, useRef } from "react";
import Alert from "./Alert";
import emailjs from '@emailjs/browser';


export default function QueryForm() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const firstFieldRef = useRef(null);
//   const [status, setStatus] = useState("");
  

  // Lock body scroll when modal is open (all screens)
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) {
      document.body.style.overflow = "hidden";
      // focus first field on open
      setTimeout(() => firstFieldRef.current?.focus(), 10);
    } else {
      document.body.style.overflow = prev;
    }
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);



  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };





const sendEmail = (e) => {
    e.preventDefault();

    // setStatus("sending");
     setOpen(false)

    

     
    const publicKey="euomXGm4xLMPmas76"
    const serviceId= "service_0gb9ou6"
    const templeteId= "template_q2u2gy8"

    const templeteParams = {
    from_name:form.name,
    from_number:form.phone,
    from_email:form.email,
    to_email:"vipsonu8076@gmail.comm",
    to_name: "Admin (Sonu)"
  }

    emailjs
      .send (serviceId,  templeteId, templeteParams, {
        publicKey: publicKey,
      })
      .then( 
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );


    // setTimeout(() => {
    // // setStatus("success");

    // // auto-close modal after 2s
    // setTimeout(() => setStatus(""), 2000);
    // }, 2000);
  

  };


  return (
    <>
      {/* Right-side vertical rail trigger (desktop/tablet) */}

    {/* <Alert status={status} /> */}
     
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open query form"
        className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 rounded-l-full bg-[#294287] px-2 py-3 text-white shadow-xl transition hover:brightness-95 md:block"
      >
        <span className="[writing-mode:vertical-rl] rotate-180 text-xs font-semibold tracking-wide">
          Enquiry Now
        </span>
      </button>

      {/* Bottom floating trigger (mobile) */}
      <div className="fixed inset-x-0 bottom-4 z-40 px-4 md:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mx-auto flex w-full max-w-xs items-center justify-center rounded-full bg-[#294287] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:brightness-95"
        >
          Query Now
        </button>
      </div>

      {/* Modal root: centered container + dim backdrop */}
      <div
        className={`fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        />

        {/* Centered modal container */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Query form"
          className={[
            "absolute inset-0 flex items-center justify-center p-4",
            "transition-opacity",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          {/* Modal panel */}
          <div
            onClick={(e) => e.stopPropagation()}
            className={[
              "w-full max-w-md rounded-2xl bg-white shadow-2xl ring-1 ring-black/5",
              "transition-all duration-200 ease-out",
              open ? "scale-100 translate-y-0" : "scale-95 translate-y-2",
            ].join(" ")}
            style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "saturate(140%) blur(6px)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
              <h3 className="text-base font-semibold text-slate-900">Query Form</h3>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" stroke="currentColor" fill="none" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <form onSubmit={sendEmail} className="px-5 py-4">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                    Name
                  </label>
                  <input
                    ref={firstFieldRef}
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#294287]/50 focus:outline-[#294287]/20"
                    placeholder="Enter full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                   
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#294287]/50 focus:outline-[#294287]/20"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#294287]/50 focus:outline-[#294287]/20"
                    placeholder="Enter email address"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 w-full rounded-lg bg-[#294287] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
