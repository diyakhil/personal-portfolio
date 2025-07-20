"use client";
import React, { useState } from "react";
import { Format } from "../components/Format";
import { Montserrat, Cedarville_Cursive } from "next/font/google";
import emailIcon from "../components/images/email_icon.png";
import globalIcon from "../components/images/globe_icon.png";
import dinnerTable from "../components/images/dinner_table.png";
import Image from "next/image";

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
        className={`${montserrat.className} flex items-center justify-center text-5xl uppercase font-bold pt-8`}
      >
        Guest Book
      </p>
      <div className="flex pt-16 px-32">
        <div className="w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col pl-32 gap-y-6">
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
        <div className="w-1/2 pl-32">
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-row gap-x-8">
              <Image
                src={emailIcon}
                height={40}
                width={40}
                alt="emailIcon"
              ></Image>
              <p className={`${montserrat.className} uppercase font-bold pt-1`}>
                diyakhilnani.recruiting@gmail.com
              </p>
            </div>
            <div className="flex flex-row gap-x-8">
              <Image
                src={globalIcon}
                height={40}
                width={40}
                alt="globeIcon"
              ></Image>
              <p className={`${montserrat.className} uppercase font-bold pt-2`}>
                <a
                  href="https://www.linkedin.com/in/diya-khilnani/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.linkedin.com/in/diya-khilnani/
                </a>
              </p>
            </div>
            <div>
              <Image
                src={dinnerTable}
                height={300}
                width={400}
                alt="dinner_table"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </Format>
  );
}
