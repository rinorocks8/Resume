"use client";

import Background from "./background/background";
import MenuBar from "./menuBar/MenuBar";
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
  const [darkMode, setDarkMode] = useState(true);

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
          <div className="w-full">
            <MenuBar setDarkMode={setDarkMode} />
          </div>
          <div className="w-full bg-chrome rounded-3xl my-8 flex-1"></div>
        </div>
      </div>
    </main>
  );
}
