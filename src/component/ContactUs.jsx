// src/components/ContactSection.jsx
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import Alert from "./Alert";


export default function ContactUs({
  title = "Get in Touch with Us",
  subtitle = "Have questions or want to schedule a site visit? Send a message and the team will reach out shortly.",
  onSubmitLead, // optional async handler: async (payload) => { ... }
}) {
  // const [status, setStatus] = useState({ state: "idle", message: "" });



  const  [name, setName]= useState("")
  const  [number, setNumber]= useState("")
  const  [email, setEmail]= useState("")
  const  [msg, setMsg]= useState("")
  const [status, setStatus] = useState("");
  
  

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("sending");

    setName("")
    setNumber("")
    setEmail("")
    setMsg("")


    const publicKey="euomXGm4xLMPmas76"
    const serviceId= "service_0gb9ou6"
    const templeteId= "template_q2u2gy8"

    const templeteParams = {
    from_name:name,
    from_number:number,
    from_email:email,
    from_message:msg,
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



    setTimeout(() => {
    setStatus("success");

    // auto-close modal after 2s
    setTimeout(() => setStatus(""), 2000);
    }, 2000);
  
  };






  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   const payload = Object.fromEntries(new FormData(form).entries());
  //   try {
  //     setStatus({ state: "loading", message: "Submitting..." });
  //     if (onSubmitLead) {
  //       await onSubmitLead(payload);
  //     } else {
  //       // Fallback demo: simulate success
  //       await new Promise((r) => setTimeout(r, 800));
  //       console.log("Lead payload:", payload);
  //     }
  //     setStatus({ state: "success", message: "Thanks! The team will contact shortly." });
  //     form.reset();
  //   } catch (err) {
  //     setStatus({ state: "error", message: "Something went wrong. Please try again." });
  //   }
  // };

  return (
    <section className="relative isolate  text-slate-800">
            <Alert status={status} />

      
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl leading-snug sm:text-3xl lg:text-4xl">{title}</h2>
          <p className="mt-3 text-sm text-slate-700 sm:text-base">{subtitle}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-300/60 bg-white p-6 shadow-sm ring-1 ring-black/5 backdrop-blur-[2px]">


              

              <form onSubmit={sendEmail} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-800">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required
                    autoComplete="name"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-500 outline-none focus:border-primary focus:ring-2 focus:ring-primary/40"
                    placeholder="Enter full name"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-800">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={number}
                    onChange={(e)=> setNumber(e.target.value)}
                    type="tel"
                    inputMode="tel"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-500 outline-none focus:border-primary focus:ring-2 focus:ring-primary/40"
                    placeholder="e.g. 9876543210"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-800">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-500 outline-none focus:border-primary focus:ring-2 focus:ring-primary/40"
                    placeholder="name@email.com"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="interest" className="mb-1 block text-sm font-medium text-slate-800">
                    Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/40"
                    defaultValue="Site Visit"
                  >
                    <option>Site Visit</option>
                    <option>Brochure</option>
                    <option>Price Details</option>
                    <option>Floor Plans</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={msg}
                    onChange={(e)=> setMsg(e.target.value)}
                    rows={4}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-500 outline-none focus:border-primary focus:ring-2 focus:ring-primary/40"
                    placeholder="Write a short message..."
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status.state === "loading"}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-[#243e84] px-5 py-3 text-base font-medium text-white shadow-lg shadow-black/10 transition hover:bg-[#294287] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4efe7] disabled:opacity-75"
                  >
                    {status.state === "loading" ? "Submitting..." : "Submit"}
                  </button>
                  {status.message && (
                    <p
                      className={`mt-3 text-sm ${
                        status.state === "error"
                          ? "text-red-600"
                          : status.state === "success"
                          ? "text-emerald-700"
                          : "text-slate-700"
                      }`}
                    >
                      {status.message}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Info panel */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-300/60 bg-white/80 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur-[2px]">
              <h3 className="text-lg font-semibold text-slate-900">Contact Details</h3>
              <ul className="mt-4 space-y-4 text-[15px] sm:text-base">
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f4efe7] ring-1 ring-black/5">
                    📞
                  </span>
                  <a href="+911234567890" className="text-slate-800 hover:text-primary">
                    +91 12345 67890
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f4efe7] ring-1 ring-black/5">
                    ✉️
                  </span>
                  <a href="mailto:info@example.com" className="text-slate-800 hover:text-primary">
                    info@example.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f4efe7] ring-1 ring-black/5">
                    🕒
                  </span>
                  <span className="text-slate-800">Mon–Sun: 9:00 AM – 7:00 PM</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f4efe7] ring-1 ring-black/5">
                    📍
                  </span>
                  <span className="text-slate-800">
                    Sector 104, Dwarka Expressway, Gurgaon, Haryana
                  </span>
                </li>
              </ul>

              <div className="mt-6 rounded-xl bg-[#efe7df] p-4 text-sm text-slate-800">
                Privacy note: details are used to schedule visits and share project information only.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile CTA (optional) */}
      <div className="sticky bottom-4 z-30 mx-auto w-full px-4 md:hidden">
        <a
          href="tel:+911234567890"
          className="mx-auto flex w-full max-w-xs items-center justify-center rounded-full bg-[#243e84] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-black/10 transition hover:bg-[#294287]"
        >
          Call Now
        </a>
      </div>
    </section>
  );
}
