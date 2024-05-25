"use server";

import Caret from "@/app/_shared/Caret";
import Carousel from "@/app/_components/featuredProjects/carousel/Carousel";
import Link from "next/link";

const Slide = ({
  imgUrl,
  title,
  href,
}: {
  imgUrl: string;
  title: string;
  href: string;
}) => {
  return (
    <Link className="relative h-full w-full" href={href}>
      <img src={imgUrl} alt={title} className="h-full w-full object-cover" />
      <div
        className="absolute left-0 right-0 bottom-0 h-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 py-3 px-4 items-end justify-start flex">
        <p>
          <span className="font-semibold text-2xl text-white">{title}</span>
        </p>
      </div>
    </Link>
  );
};

const SLIDES = [
  <Slide imgUrl="./lifted.png" title="Lifted" href="/projects/lifted" />,
  <Slide
    imgUrl="./portfolio1.png"
    title="Portfolio"
    href="https://github.com/ryancircelli/Portfolio"
  />,
  <Slide
    imgUrl="https://opengraph.githubassets.com/e5f9e37c8630e485ac8fc8d37864eb8a4479ce4b6912b7898e606a34e647425b/ryancircelli/IPFSHosting"
    title="IPFS Hosting"
    href="https://github.com/ryancircelli/Portfolio"
  />,
  <Slide
    imgUrl="./7days.png"
    title="7Days"
    href="https://github.com/ryancircelli/7days"
  />,
  <Slide
    imgUrl="./instagatorai.png"
    title="InstaGatorAI"
    href="https://github.com/ryancircelli/InstaGatorAI"
  />,
  <Slide
    imgUrl="./maze.png"
    title="Graph Maze"
    href="https://github.com/ryancircelli/InstaGatorAI"
  />,
];

export default async function FeaturedProjects() {
  return (
    <div className="p-4 min-h-full flex flex-col">
      <div className="flex-row flex -my-1 -mt-2">
        <Link href="/projects">
          <h2 className="px-2 text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow shadow-gray-400 text-3xl font-astral_delight pb-1 flex-row items-center flex">
            FEATURED PROJECTS
            <Caret />
          </h2>
        </Link>
      </div>
      <div className="flex-1 w-full flex-col flex">
        <Carousel
          slides={SLIDES}
          options={{
            dragFree: true,
            loop: true,
            slidesToScroll: 1,
            align: "center",
          }}
        />
      </div>
    </div>
  );
}
