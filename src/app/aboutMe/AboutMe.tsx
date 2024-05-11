import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";

export default function AboutMe() {
  return (
    <div className="flex-1 flex flex-col">
      {/* About Me */}
      <h2 className="text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow text-3xl font-astral_delight pb-4 inline-block">
        ABOUT ME
      </h2>
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
          <div className="text-center mt-6 text-black font-medium text-xs font-orbitron flex-1">
            <p>
              {`I am a software engineer with a passion for web
                        development. I prefer to work with React, React Native
                        (Expo), Typescript, Python, Terraform, and many AWS
                        services, but I'm quick to learn new things.`}
            </p>
            <br />
            <p>
              {`I am always open to connect and learing more from my
                        peers.`}
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/ryancircelli/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size="32" color="#0e76a8" />
            </a>
            <a
              href="https://github.com/ryancircelli"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub size="32" color="#333" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
