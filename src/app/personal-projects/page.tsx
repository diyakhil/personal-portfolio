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
        className={`${montserrat.className} flex items-center justify-center text-5xl uppercase font-bold pt-8`}
      >
        The Menu
      </p>

      <div className="flex flex-row gap-x-12 px-32 py-12">
        <div className="w-1/3">
          <div className="flex flex-col gap-y-8 justify-center items-center">
            <a
              href="https://github.com/diyakhil/personal-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={noodles}
                height={250}
                width={300}
                alt="noodles"
              ></Image>
            </a>
            <p
              className={`${montserrat.className} uppercase font-bold text-2xl text-center`}
            >
              Portfolio Website
            </p>

            <p
              className={`${cedarville_Cursive.className} text-xl text-center`}
            >
              This site showcases my resume, personal projects (starting here!),
              and how to get in touch. More to come as I grow my portfolio.
            </p>
          </div>
        </div>
      </div>
    </Format>
  );
}
