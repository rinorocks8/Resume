import AboutMe from "./_components/AboutMe";
import FeaturedProjects from "./_components/featuredProjects/FeaturedProjects";
import RecentPosts from "./_components/RecentsPosts";

export default function Home() {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row gap-4 mt-8">
      <div className="flex-1 flex flex-col gap-4 overflow-hidden">
        <div className="bg-chrome rounded-3xl flex-1">
          <FeaturedProjects />
        </div>
        <div className="bg-chrome rounded-3xl h-48">
          <RecentPosts />
        </div>
      </div>
      <div className="bg-chrome rounded-3xl flex flex-col p-8 py-6 items-center">
        <AboutMe />
      </div>
    </div>
  );
}

/* <div className="z-40 absolute top-10 right-10 p-10 bg-green-600">
        <div className="bg-chrome rounded-full h-10 w-10 items-center justify-center flex">
          <h2 className="text-blue-800 pb-[2.5px] pl-0.5  dark:text-red-800 font-semibold ring-white textBorder-sm textShadow shadow-gray-400 text-3xl font-astral_delight">
            R
          </h2>
        </div>
      </div> */
