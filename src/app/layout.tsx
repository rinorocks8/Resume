import "./globals.css";

import Background from "./_components/background/background";
import { Inter } from "next/font/google";
import MenuBar from "./_components/menuBar/MenuBar";
import type { Metadata } from "next";
import Name from "./_components/Name";
import { Orbitron } from "next/font/google";
import Provider from "./provider";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

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

export const metadata: Metadata = {
  title: "Ryan Circelli",
  description: "Ryan Circelli - Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const darkMode = false;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main
            className={`h-screen w-screen
              ${orbitron_font.variable} orbitron-font
              ${eight_track_hollow.variable} eight_track_hollow
              ${eight_track.variable} eight_track
              ${astral_delight.variable} astral_delight
              ${astral_delight_hollow.variable} astral_delight_hollow
            `}
          >
            <div className="absolute h-screen w-screen">
              <Background />
            </div>
            <div className="absolute h-screen w-screen justify-center flex">
              <div className="flex h-full flex-col items-center justify-center py-24 max-w-[66%] w-full flex-1">
                {/* Name */}
                <Name />
                {/* Menu */}
                <MenuBar />
                {children}
              </div>
            </div>
          </main>
        </Provider>
      </body>
    </html>
  );
}
