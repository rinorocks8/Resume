import Carousel from "@/app/homeComponents/featuredProjects/carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {
  dragFree: true,
  loop: true,
  slidesToScroll: 1,
  align: "center",
};
const SLIDES = [
  "Lifted",
  "7Days",
  "IPFS Hosting",
  "InstaGatorAI",
  "Graph Maze",
];

export default function FeaturedProjects() {
  return (
    <div className="p-4 w-full flex-col">
      <div className="flex-row flex -my-1 -mt-2">
        <a href="/projects">
          <h2 className="px-2 text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow shadow-gray-400 text-3xl font-astral_delight pb-1 flex-row items-center flex">
            FEATURED PROJECTS
            <div className="-ml-2 -mr-5">
              <svg
                width={48}
                height={48}
                className="text-blue-800 dark:text-red-800"
                viewBox="0 0 100 100"
                transform="skewX(-5)"
              >
                <rect
                  x="52.5"
                  y="-10"
                  width="27.2"
                  height="14"
                  fill="white"
                  transform="rotate(45)"
                />
                <rect
                  x="-17.2"
                  y="65.7"
                  width="27.2"
                  height="14"
                  fill="white"
                  transform="rotate(-45)"
                />
                <rect
                  x="55"
                  y="-7.5"
                  width="22.2"
                  height="9"
                  fill="rgb(30, 64, 175)"
                  transform="rotate(45)"
                />
                <rect
                  x="-14.7"
                  y="68.2"
                  width="22.2"
                  height="9"
                  fill="rgb(30, 64, 175)"
                  transform="rotate(-45)"
                />
              </svg>
            </div>
          </h2>
        </a>
      </div>
      <Carousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
