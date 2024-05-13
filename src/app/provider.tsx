"use client";

import { createContext, useState } from "react";

export type ContextType = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};
export const Context = createContext({} as ContextType);

export default function Provider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Context.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      <div className={`${darkMode ? "dark" : "light"}`}>{children}</div>
    </Context.Provider>
  );
}
