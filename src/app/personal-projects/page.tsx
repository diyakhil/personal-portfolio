import React from "react";
import { Format } from "../components/Format";
import noodles from "../components/images/noodles.png";
import Image from "next/image";

import { Montserrat, Cedarville_Cursive } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cedarville_Cursive = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
});

export default function PersonalProjects() {
  return (
    <Format>
      <p
        className={`${montserrat.className} flex items-center justify-center text-3xl sm:text-5xl uppercase font-bold pt-8`}
      >
        The Menu
      </p>

      <div className="flex flex-col sm:flex-row gap-y-8 sm:gap-x-12 px-8 sm:px-32 py-12">
        <div className="w-full sm:w-1/3">
          <div className="flex flex-col gap-y-8 justify-center items-center">
            <a
              href="https://github.com/diyakhil/googlemaps-mcp-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={noodles}
                height={200}
                width={240}
                className="sm:h-[250px] sm:w-[300px]"
                alt="noodles"
              ></Image>
            </a>
            <p
              className={`${montserrat.className} uppercase font-bold text-xl sm:text-2xl text-center`}
            >
              AI Driver Agent Bot
            </p>

            <p
              className={`${cedarville_Cursive.className} text-lg sm:text-xl text-center px-4 sm:px-0`}
            >
              An AI agent that provides driver assistance using voice to text,
              powered by an MCP server integrated with Google Maps API .
            </p>
          </div>
        </div>
      </div>
    </Format>
  );
}
