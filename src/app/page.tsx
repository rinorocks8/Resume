"use client";

import { useEffect, useState } from "react";

import AboutMe from "./_components/AboutMe";
import Caret from "./_shared/Caret";
import Dot from "./_shared/Dot";
import FeaturedProjects from "./_components/featuredProjects/FeaturedProjects";
import Link from "next/link";
import { getArticles } from "./_components/getFeed";

export default function Home() {
  const [articles, setArticles] = useState<
    {
      author: string;
      content: string;
      description: string;
      link: string;
      pubDate: string;
      thumbnail: string;
      title: string;
    }[]
  >([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getArticles();
      setArticles(data.items);
      console.log(data.items);
    };
    getData();
  }, []);

  /* <div className="z-40 absolute top-10 right-10 p-10 bg-green-600">
        <div className="bg-chrome rounded-full h-10 w-10 items-center justify-center flex">
          <h2 className="text-blue-800 pb-[2.5px] pl-0.5  dark:text-red-800 font-semibold ring-white textBorder-sm textShadow shadow-gray-400 text-3xl font-astral_delight">
            R
          </h2>
        </div>
      </div> */

  return (
    <div className="w-full flex-1 flex-row gap-4 mt-8 flex">
      <div className="flex-1 h-full flex-col flex gap-4 overflow-hidden">
        <div className="bg-chrome rounded-3xl flex-1">
          <FeaturedProjects />
        </div>
        <div className="bg-chrome rounded-3xl h-48">
          <div className="p-4 w-full h-full flex-col flex">
            <div className="flex-row flex -my-1 -mt-2">
              <Link href="/blog">
                <h2 className="px-2 text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow shadow-gray-400 text-3xl font-astral_delight pb-1 flex-row items-center flex">
                  RECENT POSTS
                  <Caret />
                </h2>
              </Link>
            </div>
            <div className="mt-1 text-black font-medium text-base font-orbitron flex-1 overflow-hidden relative mb-2">
              <div
                className="pointer-events-none z-10 absolute -top-2 right-4 left-4 bottom-0"
                style={{
                  boxShadow: `
                        inset 0px 0px 10px 10px rgba(178, 190, 207, 1)
                      `,
                }}
              />
              {articles.map((article, index) => (
                <Link
                  key={index}
                  className="flex flex-col pb-1"
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex flex-row gap-4 mx-2">
                    <div className="mt-[6.5px] items-center">
                      <Dot size={12} />
                    </div>
                    <p>
                      <u>{article.title}</u>
                      {" - " + new Date(article.pubDate).toDateString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-chrome rounded-3xl flex flex-col p-8 py-6 items-center">
        <AboutMe />
      </div>
    </div>
  );
}
