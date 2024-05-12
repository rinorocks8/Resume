"use client";

import AboutMe from "./homeComponents/aboutMe/AboutMe";
import Background from "./homeComponents/background/background";
import FeaturedProjects from "./homeComponents/featuredProjects/FeaturedProjects";
import Image from "next/image";
import MenuBar from "./homeComponents/menuBar/MenuBar";
import { Orbitron } from "next/font/google";
import localFont from "next/font/local";
import { useState } from "react";

const orbitron_font = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron-font",
});

const eight_track_hollow = localFont({
  src: "../../public/eight_hollow.ttf",
  variable: "--font-eight_track_hollow-font",
});

const eight_track = localFont({
  src: "../../public/eight.ttf",
  variable: "--font-eight_track-font",
});

const astral_delight_hollow = localFont({
  src: "../../public/astral_delight.ttf",
  variable: "--font-astral_delight_hollow-font",
});

const astral_delight = localFont({
  src: "../../public/astral_delight_black.ttf",
  variable: "--font-astral_delight-font",
});

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={`h-screen w-screen ${darkMode ? "dark" : "light"}
        ${orbitron_font.variable} orbitron-font
        ${eight_track_hollow.variable} eight_track_hollow
        ${eight_track.variable} eight_track
        ${astral_delight.variable} astral_delight
        ${astral_delight_hollow.variable} astral_delight_hollow
      `}
    >
      <div className="absolute h-screen w-screen">
        <Background darkMode={darkMode} />
      </div>
      <div className="absolute h-screen w-screen justify-center flex">
        <div className="flex h-full flex-col items-center justify-center py-24 max-w-[66%] w-full flex-1">
          {/* Name */}
          <div className="items-center justify-start flex w-full py-4">
            <button
              className={`z-10 text-blue-900 dark:text-red-900 text-5xl font-eight_track_hollow`}
            >
              Ryan Circelli
            </button>
            <div
              className={`absolute ml-3 mb-4 opacity-85 pointer-events-none text-blue-900 dark:text-red-900 text-5xl font-eight_track_hollow font-bold`}
              aria-hidden="true"
            >
              Ryan Circelli
            </div>
            <div
              className={`absolute ml-6 mb-8 opacity-70 pointer-events-none text-blue-900 dark:text-red-900 text-5xl font-eight_track_hollow font-bold`}
              aria-hidden="true"
            >
              Ryan Circelli
            </div>
            <div
              className={`pointer-events-none absolute text-white text-5xl font-eight_track opacity-90`}
              style={{
                letterSpacing: "2.425px",
                fontSize: "48.5px",
                marginLeft: "1.5px",
                marginTop: "2px",
              }}
              aria-hidden="true"
            >
              Ryan
            </div>
            <div
              className={`pointer-events-none absolute text-white text-5xl font-eight_track opacity-90`}
              style={{
                letterSpacing: "2.425px",
                fontSize: "48.5px",
                marginLeft: "107.5px",
                marginTop: "2px",
              }}
              aria-hidden="true"
            >
              Circelli
            </div>
          </div>
          {/* Menu */}
          <div className="relative w-full">
            <div className="absolute -top-16 -right-0.5 flex flex-row">
              <button
                className="w-[40px] mb-1 h-[65px]"
                onClick={() => setDarkMode(true)}
              >
                <Image
                  src="/Fireboy2.webp"
                  alt="Red Mode Selector"
                  width={400}
                  height={400}
                  style={{
                    filter: "drop-shadow(0px 0px 10px rgba(255, 0, 0, 1))",
                  }}
                />
              </button>
              <button
                className="w-[55px] h-[70px] -ml-2.5"
                onClick={() => setDarkMode(false)}
              >
                <Image
                  src="/Watergirl2-0.webp"
                  alt="Blue Mode Selector"
                  width={400}
                  height={400}
                  style={{
                    filter: "drop-shadow(0px 0px 10px rgba(0, 0, 255, 1))",
                  }}
                />
              </button>
            </div>
            <div className="z-10">
              <MenuBar />
            </div>
          </div>
          <div className="w-full flex-1 flex-row gap-4 mt-8 flex">
            <div className="flex-1 h-full flex-col flex gap-4 overflow-hidden">
              <div className="bg-chrome rounded-3xl flex-1"></div>
              <div className="bg-chrome rounded-3xl flex-row">
                <FeaturedProjects />
              </div>
            </div>
            <div className="bg-chrome rounded-3xl flex flex-col p-8 py-6 items-center">
              <AboutMe />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
