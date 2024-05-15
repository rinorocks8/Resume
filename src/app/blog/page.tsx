"use server";

import Dot from "../_shared/Dot";
import Link from "next/link";
import urlMetadata from "url-metadata";

export default async function Blog() {
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
  const articlesRSS: {
    author: string;
    content: string;
    description: string;
    link: string;
    pubDate: string;
    thumbnail: string;
    title: string;
  }[] = data.items.slice(0, 5);

  const articles = await Promise.all(
    articlesRSS.map(async (_article) => {
      const article = {
        ..._article,
        ogUrl: _article.link,
        ogTitle: _article.title,
        articlePublishedTime: _article.pubDate,
        ogDescription: _article.description.substring(0, 100) + "...",
        ogImage: (_article["description"] as any)
          .toString()
          .match(/<img[^>]+src="([^">]+)"/)[1] as string,
        readingDuration: "",
      };
      const _og = await urlMetadata(article.ogUrl).catch((error) => {
        return article;
      });
      const og = _og as typeof _og & {
        [key: string]: any;
      };

      return {
        ...og,
        ogUrl: og["og:url"] ?? article.ogUrl,
        ogTitle: og["og:title"] ?? article.ogTitle,
        articlePublishedTime:
          og["article:published_time"] ?? article.articlePublishedTime,
        ogDescription: og["og:description"] ?? article.ogDescription,
        ogImage: og["og:image"] ?? article.ogImage,
        readingDuration: og["twitter:data1"] ?? article.readingDuration,
      };
    })
  );

  return (
    <div className="w-full flex-1 flex-row gap-4 mt-8 flex">
      <div className="flex-1 h-full flex-col flex gap-4 overflow-hidden">
        <div className="bg-chrome rounded-3xl flex-1">
          <div className="p-4 w-full h-full flex-col flex">
            <div className="flex-row flex -my-2 -mt-0.5 items-end">
              <h2 className="px-2 text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow shadow-gray-400 text-3xl font-astral_delight pb-1 flex-row items-center flex">
                BLOG
              </h2>
              <p className="mb-2 px-1 flex-1 text-end text-gray-500 dark:text-gray-400 text-xs font-orbitron">
                {"(Scraped from Medium)"}
              </p>
            </div>
            <div
              className="w-full px-1 h-[5px] border-white border-[1.5px] bg-blue-800 dark:bg-red-800"
              style={{
                transform: "skewX(-15deg)",
              }}
            />
            <div className="mt-3 text-black text-base font-orbitron flex-1 overflow-hidden relative mb-2">
              {articles.map((article, index) => (
                <Link
                  key={index}
                  className="flex flex-col pb-1"
                  href={article.ogUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex flex-row gap-3 mx-2 justify-between">
                    <div className="mt-[9px]">
                      <Dot />
                    </div>
                    <div className="flex-col flex gap-2 flex-1">
                      <h1 className="font-black text-lg">{article.ogTitle}</h1>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {article.ogDescription}
                      </span>
                      <pre className="flex flex-row w-full text-xs font-orbitron ">
                        {article.readingDuration !== "" ? (
                          <span className="text-gray-500 dark:text-gray-400">
                            {article.readingDuration + " - "}
                          </span>
                        ) : null}
                        <span className="text-gray-500 dark:text-gray-400">
                          {new Date(
                            article.articlePublishedTime
                          ).toDateString()}
                        </span>
                      </pre>
                    </div>
                    <div className="flex-col flex max-w-[15%]">
                      <img
                        src={article.ogImage}
                        alt={article.ogTitle}
                        className="rounded-2xl flex-1"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
