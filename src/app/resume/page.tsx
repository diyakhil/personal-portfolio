import React from "react";
import { Format } from "../components/Format";
import wineBottle from "../components/images/winebottle.png";
import Image from "next/image";
import { Cedarville_Cursive } from "next/font/google";

const cedarville_Cursive = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
});

export default function Resume() {
  return (
    <Format>
      <div className="flex flex-col md:flex-row p-4 md:p-12">
        <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0">
          <Image
            src={wineBottle}
            height={400}
            width={240}
            className="md:h-[630px] md:w-[375px]"
            alt="wineBottle"
          ></Image>
        </div>
        <div className="flex flex-col w-full md:w-2/3 gap-y-2 px-4 md:px-0">
          <div className="text-3xl md:text-5xl font-bold uppercase text-center md:text-left">
            Wine List
          </div>
          <div
            className={`${cedarville_Cursive.className} text-base md:text-lg text-center md:text-left`}
          >
            A curated selection of aged experience, skill notes, and technical
            undertones.
          </div>
          <div className="text-lg md:text-xl font-bold uppercase pt-4">
            Software engineer I
          </div>
          <div className="flex flex-col sm:flex-row gap-y-1 sm:gap-x-8">
            <div
              className={`${cedarville_Cursive.className} text-base md:text-lg`}
            >
              Region: Richmond, VA
            </div>
            <div
              className={`${cedarville_Cursive.className} text-base md:text-lg`}
            >
              Vintage: 2024 - Present
            </div>
          </div>
          <div
            className={`${cedarville_Cursive.className} text-base md:text-lg`}
          >
            Notes: Gained experience with C#, .NET Core, ASP.NET Core, Swagger,
            React, Node.js, TypeScript, SQL Server
          </div>

          <div className="text-lg md:text-xl font-bold uppercase pt-4">
            B.S. In computer science, virginia tech
          </div>
          <div className="flex flex-col sm:flex-row gap-y-1 sm:gap-x-8">
            <div
              className={`${cedarville_Cursive.className} text-base md:text-lg`}
            >
              Region: Blacksburg, VA
            </div>
            <div
              className={`${cedarville_Cursive.className} text-base md:text-lg`}
            >
              Vintage: 2021 - 2024
            </div>
          </div>
          <div
            className={`${cedarville_Cursive.className} text-base md:text-lg`}
          >
            Notes: Ended with a 3.9 GPA studying systems architecture, database
            management, and algorithms
          </div>

          <div className="text-lg md:text-xl font-bold uppercase pt-4">
            Hackviolet at virginia tech
          </div>
          <div className="flex flex-col sm:flex-row gap-y-1 sm:gap-x-8">
            <div
              className={`${cedarville_Cursive.className} text-base md:text-lg`}
            >
              Region: Blacksburg, VA
            </div>
            <div
              className={`${cedarville_Cursive.className} text-base md:text-lg`}
            >
              Vintage: 2022 - 2024
            </div>
          </div>
          <div
            className={`${cedarville_Cursive.className} text-base md:text-lg`}
          >
            Notes: Organized a non-profit, women-empowerment hackathon, raising
            over 20k. Met a lot of great people!
          </div>
          <div className="text-lg md:text-xl font-bold uppercase pt-8 text-center md:text-left">
            <a
              href="/Diya-Khilnani-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here to download the full wine list (resume)
            </a>
          </div>
        </div>
      </div>
    </Format>
  );
}
