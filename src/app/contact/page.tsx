"use client";
import React, { useState } from "react";
import { Format } from "../components/Format";
import { Montserrat, Cedarville_Cursive } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cedarville_Cursive = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
});

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
  };

  return (
    <Format>
      <p
        className={`${montserrat.className} flex items-center justify-center text-5xl uppercase font-bold`}
      >
        Guest Book
      </p>
      <div className="flex">
        <div className="w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col pt-10 pl-48 gap-y-6">
              <p className={`${cedarville_Cursive.className} flex text-lg`}>
                Fill out the form to join the guest list today!
              </p>
              <p
                className={`${montserrat.className} flex uppercase text-lg font-bold pt-4`}
              >
                Full Name
              </p>
              <input
                className={`input bg-[#4f6815] outline-1 outline-[#f0e6da] ${montserrat.className}`}
                required
                onChange={handleChange}
                name="name"
                value={form.name}
              />
              <p
                className={`${montserrat.className} flex uppercase text-lg font-bold`}
              >
                Email
              </p>
              <input
                className={`input validator bg-[#4f6815] outline-1 outline-[#f0e6da] ${montserrat.className}`}
                type="email"
                required
                onChange={handleChange}
                name="email"
                value={form.email}
              />
              <p className={`validator-hint hidden ${montserrat.className}`}>
                Enter valid email address
              </p>
              <p
                className={`${montserrat.className} flex uppercase text-lg font-bold`}
              >
                Message
              </p>
              <textarea
                className={`input bg-[#4f6815] outline-1 outline-[#f0e6da] ${montserrat.className}`}
                required
                onChange={handleChange}
                name="message"
                value={form.message}
              />
              <div className="pt-4 pl-24">
                <button
                  className={`btn btn-circle text-[#4f6815] text-xs bg-[#f0e6da] ${montserrat.className} uppercase font-bold w-32`}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-1/2"></div>
      </div>
    </Format>
  );
}
