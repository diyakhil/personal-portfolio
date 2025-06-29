import Link from "next/link";
import { Cedarville_Cursive } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";

const cedarville_Cursive = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
});

type NavBarProps = {
  headerColor?: string;
  textColor?: string;
  font?: NextFont;
};

export const NavBar = ({ headerColor, textColor, font }: NavBarProps) => {
  return (
    <div
      className={`${font ? font.className : cedarville_Cursive.className} navbar p-8 ${headerColor ? headerColor : "bg-[#f0e6da]"} ${textColor ? textColor : "text-[#4f6815]"}`}
    >
      <Link href="/" className="flex-auto btn btn-ghost text-xl">
        Home
      </Link>
      <Link href="about/" className="flex-auto btn btn-ghost text-xl">
        About the Host
      </Link>
      <Link
        href="personal-projects/"
        className="flex-auto btn btn-ghost text-xl"
      >
        The Menu
      </Link>
      <Link href="resume/" className="flex-auto btn btn-ghost text-xl">
        Wine List
      </Link>
      <Link href="contact/" className="flex-auto btn btn-ghost text-xl">
        Guest Book
      </Link>
    </div>
  );
};
