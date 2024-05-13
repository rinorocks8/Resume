import Caret from "@/app/_shared/Caret";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="flex-1 flex flex-col">
      {/* About Me */}
      <div className="flex-row flex -my-1 -mt-2 mb-0">
        <Link href="/about">
          <h2 className="px-2 text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow shadow-gray-400 text-3xl font-astral_delight pb-1 flex-row items-center flex">
            ABOUT ME
            <Caret />
          </h2>
        </Link>
      </div>
      <div className="relative w-auto flex-1">
        <div className="absolute left-0 right-0 top-0 bottom-0 flex flex-col">
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
          <div className="text-center mt-6 text-black font-medium text-sm font-orbitron flex-1">
            <p>
              {`I am a software engineer with a passion for web
                        development. I prefer to work with React, React Native
                        (Expo), Typescript, Python, Terraform, and many AWS
                        services, but I'm quick to learn new things!`}
            </p>
            <br />
            <p>
              {`I am always open to connect and learing more from my
                        peers.`}
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <Link
              href="https://www.linkedin.com/in/ryancircelli/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size="24" color="#0e76a8" />
            </Link>
            <Link
              href="https://github.com/ryancircelli"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub size="24" color="#333" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
