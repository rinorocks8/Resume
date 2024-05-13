import Caret from "@/app/sharedComponents/Caret";
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
            <Caret />
          </h2>
        </a>
      </div>
      <Carousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
