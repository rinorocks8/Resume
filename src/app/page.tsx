"use client";

import { useEffect, useState } from "react";

import AboutMe from "./homeComponents/aboutMe/AboutMe";
import Background from "./homeComponents/background/background";
import Dot from "./sharedComponents/Dot";
import FeaturedProjects from "./homeComponents/featuredProjects/FeaturedProjects";
import Image from "next/image";
import MenuBar from "./homeComponents/menuBar/MenuBar";
import Name from "./homeComponents/Name";
import { Orbitron } from "next/font/google";
import { getArticles } from "./getFeed";
import localFont from "next/font/local";

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
  const [articles, setArticles] = useState<
    {
      author: string;
      content: string;
      description: string;
      link: string;
      pubDate: string;
      thumbnail: string;
      title: string;
    }[]
  >([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getArticles();
      setArticles(data.items);
      console.log(data.items);
    };
    getData();
  }, []);

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

      {/* <div className="z-40 absolute top-10 right-10 p-10 bg-green-600">
        <div className="bg-chrome rounded-full h-10 w-10 items-center justify-center flex">
          <h2 className="text-blue-800 pb-[2.5px] pl-0.5  dark:text-red-800 font-semibold ring-white textBorder-sm textShadow shadow-gray-400 text-3xl font-astral_delight">
            R
          </h2>
        </div>
      </div> */}

      <div className="absolute h-screen w-screen justify-center flex">
        <div className="flex h-full flex-col items-center justify-center py-24 max-w-[66%] w-full flex-1">
          {/* Name */}
          <Name />
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
              <div className="bg-chrome rounded-3xl flex-1">
                <FeaturedProjects />
              </div>
              <div className="bg-chrome rounded-3xl h-56">
                <div className="p-4 w-full h-full flex-col flex">
                  <h2 className="px-2 text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow shadow-gray-400 text-3xl font-astral_delight pb-1">
                    RECENT POSTS
                  </h2>
                  <div className="mt-2 text-black font-medium text-base font-orbitron flex-1 overflow-hidden relative mb-2">
                    <div
                      className="pointer-events-none z-10 absolute -top-2 right-4 left-4 bottom-0"
                      style={{
                        boxShadow: `
                        inset 0px 0px 10px 10px rgba(178, 190, 207, 1)
                      `,
                      }}
                    />
                    {articles.map((article, index) => (
                      <a
                        key={index}
                        className="flex flex-col gap-2 pb-1"
                        href={article.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex flex-row gap-2 mx-2">
                          <div className="mt-[6.5px] items-center">
                            <Dot size={12} />
                          </div>
                          <p>
                            <u>{article.title}</u>
                            {" - " + new Date(article.pubDate).toDateString()}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
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
