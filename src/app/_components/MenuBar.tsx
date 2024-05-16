"use client";

import React, { useContext, useState } from "react";

import Caret from "../_shared/Caret";
import { Context } from "@/app/provider";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuBar({}: {}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // TODO animate opacity for opening and closing the dropdown
  // TODO rotate svg caret on open and close

  return (
    <div className="relative w-full">
      <ThemeSelector />
      <div className="z-10">
        <div className="hidden w-full h-10 bg-white rounded-full md:flex shadow-sm shadow-gray-400">
          <div className="overflow-hidden group w-full h-full bg-white rounded-full flex-row flex bg-chrome justify-evenly group">
            <div className="h-full w-20 menu-item-edge hover:menu-item-hover pointer-events-none" />
            <MenuItem href="/" text="HOME" />
            <MenuItem href="/projects" text="PROJECTS" />
            <MenuItem href="/blog" text="BLOG" />
            <MenuItem href="/about" text="ABOUT" />
            <MenuItem href="/contact" text="CONTACT" />
            <div className="h-full w-20 menu-item-edge hover:menu-item-hover pointer-events-none" />
          </div>
        </div>
        {/* Mobile Dropdown */}
        <div className="z-50 w-full md:hidden md:pointer-events-none h-10 rounded-full flex shadow-sm shadow-gray-400 bg-chrome overflow-hidden flex-row">
          <div className="h-full flex-row flex-1 flex">
            <div className="h-full flex-1 menu-item-edge hover:menu-item-hover pointer-events-none" />
            <button
              className="flex items-center justify-center gap-1 px-8 hover:menu-item-hover"
              onClick={() => setOpen(!open)}
            >
              <div
                className={`text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow text-2xl font-astral_delight pt-[1px] `}
              >
                {pathname === "/"
                  ? "HOME"
                  : pathname === "/projects"
                  ? "PROJECTS"
                  : pathname === "/blog"
                  ? "BLOG"
                  : pathname === "/about"
                  ? "ABOUT"
                  : pathname === "/contact"
                  ? "CONTACT"
                  : "MENU"}
              </div>
              <div className="mt-0.5">
                <Caret transform="skewX(-5) rotate(90)" />
              </div>
            </button>
            <div className="h-full flex-1 menu-item-edge hover:menu-item-hover pointer-events-none" />
          </div>
          {open ? (
            <div className="absolute z-50 mt-12 overflow-hidden group w-full bg-white rounded-3xl flex-col flex bg-chrome justify-evenly group">
              <div className="h-full w-20 menu-item-edge hover:menu-item-hover group pointer-events-none"></div>
              <MenuItem href="/" text="HOME" onClick={() => setOpen(false)} />
              <MenuItem
                href="/projects"
                text="PROJECTS"
                onClick={() => setOpen(false)}
              />
              <MenuItem
                href="/blog"
                text="BLOG"
                onClick={() => setOpen(false)}
              />
              <MenuItem
                href="/about"
                text="ABOUT"
                onClick={() => setOpen(false)}
              />
              <MenuItem
                href="/contact"
                text="CONTACT"
                onClick={() => setOpen(false)}
              />
              <div className="h-full w-20 menu-item-edge hover:menu-item-hover  pointer-events-none"></div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

const ThemeSelector = () => {
  const { setDarkMode } = useContext(Context);

  return (
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
  );
};

const MenuItem = ({
  href,
  text,
  onClick,
}: {
  href: string;
  text: string;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`h-full px-4 py-1 flex-1 w-full flex items-center justify-center hover:menu-item-hover
      ${
        pathname === href
          ? " group-[:not(:hover)]:menu-item-hover "
          : " menu-item-edge "
      }
    `}
      onClick={onClick}
    >
      <div
        className={`text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow text-2xl font-astral_delight pt-[1px] `}
      >
        {text}
      </div>
    </Link>
  );
};
