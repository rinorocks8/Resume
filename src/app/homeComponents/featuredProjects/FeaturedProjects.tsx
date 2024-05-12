import Carousel from "@/app/homeComponents/featuredProjects/carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {
  dragFree: true,
  loop: true,
  slidesToScroll: 1,
  align: "start",
};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function FeaturedProjects() {
  return (
    <div className="p-4 w-full">
      <h2 className="px-2 text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow shadow-gray-400 text-3xl font-astral_delight pb-3 inline-block">
        FEATURED PROJECTS
      </h2>
      <Carousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
