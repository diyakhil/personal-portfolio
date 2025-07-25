import { Cedarville_Cursive, Montserrat } from "next/font/google";
import { Format } from "./components/Format";
import Link from "next/link";
import Image from "next/image";
import saladBowl from "./components/images/saladbowl.png";
import meatballs from "./components/images/meatballs.png";

const cedarville_Cursive = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <Format>
      <div className="flex flex-col md:flex-row px-4 md:px-0">
        <div className="flex flex-col md:flex-row w-full md:w-2/3 pt-4 md:pt-8">
          <div className="flex flex-col w-1/4 gap-y-44 hidden md:flex">
            <div>
              <Image
                src={saladBowl}
                width={300}
                height={300}
                alt="profileImage"
              />
            </div>

            <div className="pl-8">
              <Image
                src={meatballs}
                width={400}
                height={400}
                alt="profileImage"
              />
            </div>
          </div>
          <div className="flex w-full md:w-3/4 card">
            <div className="card-body items-center text-center">
              <div className="w-full max-w-sm md:w-96 flex flex-col space-y-4 md:space-y-8">
                <div className="flex flex-col md:flex-row gap-1 md:gap-2">
                  <span
                    className={`${montserrat.className} uppercase font-bold`}
                  >
                    You're invited to a
                  </span>
                  <span className={`${cedarville_Cursive.className} text-lg`}>
                    hearty meal
                  </span>
                  <span
                    className={`${montserrat.className} uppercase font-bold`}
                  >
                    at Diya's
                  </span>
                </div>

                <span
                  className={`${montserrat.className} uppercase text-3xl md:text-5xl font-bold`}
                >
                  Dinner Party!
                </span>

                <span
                  className={`${cedarville_Cursive.className} text-lg px-2 md:px-0`}
                >
                  On the table: passion projects, tech stacks, and some secret
                  ingredients I've picked up over the years.
                </span>

                <div className="flex flex-col space-y-2">
                  {[
                    "Please, take a seat.",
                    "Browse the courses.",
                    "Feedback is always on the menu.",
                  ].map((text, index) => (
                    <span
                      key={index}
                      className={`${montserrat.className} uppercase text-base font-bold`}
                    >
                      {text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 pt-8 md:pt-16">
          <div className="flex flex-col space-y-4 md:space-y-8">
            <Link
              href="about/"
              className={`w-full max-w-sm mx-auto md:max-w-none md:w-96 btn btn-xl bg-[#f0e6da] text-[#4f6815] text-xl ${cedarville_Cursive.className} py-8 md:py-12 rounded-none`}
            >
              <div className="w-full md:w-72 flex flex-col space-y-1">
                <div>About the Host</div>
                <div>( me )</div>
              </div>
            </Link>
            <Link
              href="personal-projects/"
              className={`w-full max-w-sm mx-auto md:max-w-none md:w-96 btn btn-xl bg-[#f0e6da] text-[#4f6815] text-xl ${cedarville_Cursive.className} py-8 md:py-12 rounded-none`}
            >
              <div className="w-full md:w-72 flex flex-col space-y-1">
                <div>The Menu</div>
                <div>( personal projects )</div>
              </div>
            </Link>
            <Link
              href="resume/"
              className={`w-full max-w-sm mx-auto md:max-w-none md:w-96 btn btn-xl bg-[#f0e6da] text-[#4f6815] text-xl ${cedarville_Cursive.className} py-8 md:py-12 rounded-none`}
            >
              <div className="w-full md:w-72 flex flex-col space-y-1">
                <div>Wine List</div>
                <div>( resume )</div>
              </div>
            </Link>
            <Link
              href="contact/"
              className={`w-full max-w-sm mx-auto md:max-w-none md:w-96 btn btn-xl bg-[#f0e6da] text-[#4f6815] text-xl ${cedarville_Cursive.className} py-8 md:py-12 rounded-none`}
            >
              <div className="w-full md:w-72 flex flex-col space-y-1">
                <div>Guest Book</div>
                <div>( contact )</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Format>
  );
}
