import React from "react";
import { Format } from "../components/Format";
import { Montserrat, Sarina } from "next/font/google";
import Image from "next/image";
import profileImage from "../components/images/about-pic.png";
import diyaImage from "../components/images/diya.png";

const sarina = Sarina({
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function AboutPage() {
  return (
    <Format
      bgColor="bg-[#d06224]"
      textColor="text-[#eac891]"
      headerColor="bg-[#75070c]"
      font={sarina}
    >
      <div>
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-2/3 px-4">
            <div className="flex flex-col sm:flex-row sm:gap-x-2">
              <div className="sm:pl-20">
                <Image
                  src={profileImage}
                  width={600}
                  height={700}
                  alt="profileImage"
                  className="w-full max-w-[300px] sm:max-w-none h-auto"
                />
              </div>
              <div className="hidden sm:block flex items-end">
                <Image
                  src={diyaImage}
                  width={350}
                  height={300}
                  alt="diyaImage"
                  className="w-full max-w-[200px] sm:max-w-none h-auto"
                />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/3 px-4 sm:pr-8">
            <div
              className={`uppercase font-bold ${montserrat.className} text-2xl sm:text-4xl text-[#75070c] text-center pt-4 sm:pt-8`}
            >
              about me
            </div>
            <div
              className={`uppercase ${montserrat.className} p-4 sm:p-8 text-base sm:text-lg text-center`}
            >
              Hi, I'm Diya Khilnani. Alongside my passion for computer science,
              food has always been a big part of my life — which inspired this
              portfolio website! When I'm not coding, I love traveling to new
              countries and immersing myself in their cultures by connecting
              with locals. Join me on my journey as I explore the world through
              both technology and personal growth. This site aims to showcase my
              accomplishments and growth in computer science over time.
            </div>
          </div>
        </div>
      </div>
    </Format>
  );
}
