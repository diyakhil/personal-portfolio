import { ReactNode } from "react";
import { NavBar } from "./NavBar";
import { NextFont } from "next/dist/compiled/@next/font";

type FormatProps = {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
  headerColor?: string;
  font?: NextFont;
};

export const Format = ({
  children,
  bgColor,
  textColor,
  headerColor,
  font,
}: FormatProps) => {
  return (
    <>
      <NavBar headerColor={headerColor} textColor={textColor} font={font} />
      <main
        className={
          !!bgColor && !!textColor
            ? `h-[calc(100vh-64px)] ${bgColor} ${textColor} pt-8`
            : `h-[calc(100vh-64px)] bg-[#4f6815] text-[#f0e6da] pt-8`
        }
      >
        {children}
      </main>
    </>
  );
};
