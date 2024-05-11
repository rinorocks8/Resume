"use client";

import Background from "./background/background";
import Image from "next/image";
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
          <div className="w-full">
            <MenuBar setDarkMode={setDarkMode} />
          </div>
          <div className="flex-1 w-full flex-row gap-4 mt-8 flex">
            <div className="bg-chrome rounded-3xl flex-1 h-full"></div>
            <div className="bg-chrome rounded-3xl flex flex-col p-8 py-6 items-center">
              <div className="inline-block">
                {/* About Me */}
                <h2 className="text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow text-3xl font-astral_delight pb-4 inline-block">
                  ABOUT ME
                </h2>
                <div className="relative w-auto">
                  <div className="absolute left-0 right-0 top-0 bottom-0">
                    {/* Headshot */}
                    <div className="relative rounded-full w-full aspect-square">
                      <div
                        className="absolute z-10 w-full h-full rounded-full"
                        style={{
                          boxShadow: `
            inset 0px 0px 1px 1px rgba(226, 232, 240, 1),
            0px 0px 2px 2px rgba(226, 232, 240, 1),
            0px 0px 8px 8px rgba(255, 255, 255, 1),
            0px 0px 12px 12px rgba(226, 232, 240, 1)
          `,
                        }}
                      />
                      <Image
                        src="/headshot.png"
                        alt="Ryan Circelli Headshot"
                        width="2728"
                        height="2728"
                        className="rounded-full overflow-hidden w-full aspect-square"
                      />
                    </div>
                    {/* Text */}
                    <div className="text-center mt-6 text-black font-medium text-xs font-orbitron">
                      <p>
                        I am a software engineer with a passion for web
                        development. I prefer to work with React, React Native
                        (Expo), Typescript, Python, Terraform, and many AWS
                        services, but I'm quick to learn new things.
                      </p>
                      <br />
                      <p>
                        I am always open to connect and learing more from my
                        peers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
