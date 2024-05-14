"use server";

import Caret from "../_shared/Caret";
import Dot from "../_shared/Dot";
import Link from "next/link";

export default async function RecentPosts() {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ryancircelli",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  const articles: {
    author: string;
    content: string;
    description: string;
    link: string;
    pubDate: string;
    thumbnail: string;
    title: string;
  }[] = data.items.slice(0, 5);

  return (
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
  );
}
