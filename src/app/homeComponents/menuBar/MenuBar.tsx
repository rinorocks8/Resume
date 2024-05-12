import "./MenuBar.css";

import React, { Dispatch, SetStateAction } from "react";

export default function MenuBar({
  setDarkMode,
}: {
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="w-full h-10 bg-white rounded-full flex shadow-sm shadow-gray-400">
      <div className="overflow-hidden w-full h-full bg-white rounded-full flex-row flex bg-chrome justify-evenly">
        <div className="h-full w-20 menu-item-edge pointer-events-none"></div>
        <div className="h-full px-4 flex-1 w-full menu-item-edge hover:menu-item-hover flex items-center justify-center">
          <button
            className={`text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow text-2xl font-astral_delight pt-[1px] `}
          >
            HOME
          </button>
        </div>
        <div className="h-full px-4 flex-1 w-full menu-item-edge hover:menu-item-hover flex items-center justify-center">
          <button
            className={`text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow text-2xl font-astral_delight pt-[1px] `}
          >
            PROJECTS
          </button>
        </div>
        <div className="h-full px-4 flex-1 w-full menu-item-edge hover:menu-item-hover flex items-center justify-center">
          <button
            className={`text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow text-2xl font-astral_delight pt-[1px] `}
          >
            BLOG
          </button>
        </div>
        <div className="h-full px-4 flex-1 w-full menu-item-edge hover:menu-item-hover flex items-center justify-center">
          <button
            className={`text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow text-2xl font-astral_delight pt-[1px] `}
          >
            ABOUT
          </button>
        </div>
        <div className="h-full px-4 flex-1 w-full menu-item-edge hover:menu-item-hover flex items-center justify-center">
          <button
            className={`text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow text-2xl font-astral_delight pt-[1px] `}
            onClick={() => setDarkMode((prev) => !prev)}
          >
            CONTACT
          </button>
        </div>
        <div className="h-full w-20 menu-item-edge pointer-events-none"></div>
      </div>
    </div>
  );
}
