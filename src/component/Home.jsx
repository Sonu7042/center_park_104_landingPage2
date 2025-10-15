import React, { useRef, useState } from "react";
// import bgImg from '../assets/home_banner2.jpg'
import bgImg from '../assets/home_banner8.png'
// import bgImg from '../assets/buiding.jpg'
import emailjs from '@emailjs/browser';
import Alert from "./Alert";


// function CircularBadge() {
//   const text = " BOOK A FREE SITE VISIT NOW  •  ";
//   return (
//     <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 md:block">
//       <svg width="180" height="180" viewBox="0 0 180 180" className="opacity-90">
//         <defs>
//           <path id="circlePath" d="M90,90 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0" />
//         </defs>
//         <text fill="white" fontSize="12" letterSpacing="1.5">
//           <textPath href="#circlePath">{text.repeat(3)}</textPath>
//         </text>
//       </svg>
//       <div className="absolute inset-0 flex items-center justify-center">
//         {/* Simple car icon */}
//         <svg width="44" height="44" viewBox="0 0 24 24" className="text-white drop-shadow">
//           <path fill="currentColor" d="M5 11l1-3a3 3 0 0 1 2.83-2h6.34A3 3 0 0 1 18 8l1 3h1a1 1 0 0 1 1 1v5h-2a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H3v-5a1 1 0 0 1 1-1h1zm2.62-3.5a1 1 0 0 0-.95.68L6.2 11h11.6l-.47-1.82a1 1 0 0 0-.97-.68H7.62zM7 18a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2z"/>
//         </svg>
//       </div>
//     </div>
//   );
// }

export default function Home() {

  const  [name, setName]= useState("")
  const  [number, setNumber]= useState("")
  const  [email, setEmail]= useState("")
  const [status, setStatus] = useState("");

  

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("sending");
    setName("")
    setNumber("")
    setEmail("")

     
    const publicKey="euomXGm4xLMPmas76"
    const serviceId= "service_0gb9ou6"
    const templeteId= "template_q2u2gy8"

    const templeteParams = {
    from_name:name,
    from_number:number,
    from_email:email,
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





  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const payload = Object.fromEntries(formData.entries());
  //   // TODO: send to API endpoint or service
  //   console.log("Lead:", payload);
  // };

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
    
     <Alert status={status} />

      {/* Hero */}
      <main>
        <section className="relative isolate min-h-screen">
         {/* Background image */}
<div className="absolute inset-0 -z-10 overflow-hidden">
  <img
    src={bgImg}
    alt="Project hero background"
    className="w-full h-full  brightness-90  transition-transform duration-700 ease-in-out"
  />
  {/* Soft overlay for better text visibility */}
  {/* <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-black/30 to-transparent" /> */}
</div>

{/* Content Section */}
<div className="relative flex flex-col md:flex-row items-center justify-between min-h-screen w-full pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 gap-10 text-center md:text-left">

  {/* Left Text Section */}
  <div className="rounded-2xl p-5 sm:p-6 md:p-8 text-white max-w-xl">
    <p className="text-xl text-white">At Sector 104, Gurugram</p>

    <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
      Central Park 104 – Luxury Living in the Heart of Gurugram
    </h1>

    <div className="mt-6 space-y-3">
      <span className="inline-block rounded-xl text-xl sm:text-2xl">
        Premium Residences | World-Class Amenities | Prime Location
      </span>

      <div className="rounded-xl">
        <p className="text-lg sm:text-2xl">
          Studio Apartments starting price:{" "}
          <span className="font-semibold">₹ 2.85 Cr.</span>
        </p>
      </div>
    </div>
  </div>

  {/* Right Form Section */}
  <div className="rounded-2xl bg-white/10 p-5 sm:p-6 md:p-8 backdrop-blur-md ring-1 ring-white/15 w-full max-w-md">
    <h2 className="text-xl font-semibold text-white mb-4">
      Get in Touch with Us
    </h2>

    <form onSubmit={sendEmail} className="space-y-4">
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter Name"
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/70 outline-none focus:border-white/40 transition"
        />
      </div>

      <div>
        <label htmlFor="number" className="sr-only">
          Number
        </label>
        <input
          id="number"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="tel"
          inputMode="tel"
          required
          placeholder="Enter Number"
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/70 outline-none focus:border-white/40 transition"
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          placeholder="Enter Email"
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/70 outline-none focus:border-white/40 transition"
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[#243e84] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-black/20 transition hover:bg-[#294287] focus:outline-none"
      >
        Submit Now
      </button>
    </form>
  </div>
</div>


          {/* <CircularBadge /> */}
        </section>
      </main>
    </div>
  );
}
