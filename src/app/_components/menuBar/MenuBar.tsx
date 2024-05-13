"use client";

import "./MenuBar.css";

import React, { useContext } from "react";

import { Context } from "@/app/provider";
import Image from "next/image";
import Link from "next/link";

export default function MenuBar({}: {}) {
  const { setDarkMode } = useContext(Context);

  return (
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
        <div className="w-full h-10 bg-white rounded-full flex shadow-sm shadow-gray-400">
          <div className="overflow-hidden w-full h-full bg-white rounded-full flex-row flex bg-chrome justify-evenly">
            <div className="h-full w-20 menu-item-edge pointer-events-none"></div>
            <div className="h-full px-4 flex-1 w-full menu-item-edge hover:menu-item-hover flex items-center justify-center">
              <Link
                href="/"
                className={`text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow text-2xl font-astral_delight pt-[1px] `}
              >
                HOME
              </Link>
            </div>
            <div className="h-full px-4 flex-1 w-full menu-item-edge hover:menu-item-hover flex items-center justify-center">
              <Link
                href="/projects"
                className={`text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow text-2xl font-astral_delight pt-[1px] `}
              >
                PROJECTS
              </Link>
            </div>
            <div className="h-full px-4 flex-1 w-full menu-item-edge hover:menu-item-hover flex items-center justify-center">
              <Link
                href="/blog"
                className={`text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow text-2xl font-astral_delight pt-[1px] `}
              >
                BLOG
              </Link>
            </div>
            <div className="h-full px-4 flex-1 w-full menu-item-edge hover:menu-item-hover flex items-center justify-center">
              <Link
                href="/about"
                className={`text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow text-2xl font-astral_delight pt-[1px] `}
              >
                ABOUT
              </Link>
            </div>
            <div className="h-full px-4 flex-1 w-full menu-item-edge hover:menu-item-hover flex items-center justify-center">
              <Link
                href="/contact"
                className={`text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow text-2xl font-astral_delight pt-[1px] `}
              >
                CONTACT
              </Link>
            </div>
            <div className="h-full w-20 menu-item-edge pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
