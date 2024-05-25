import Dot from "@/app/_shared/Dot";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/_shared/PageHeader";

export default function Projects() {
  return (
    <div className="w-full flex-1 flex-row gap-4 mt-8 flex">
      <div className="flex-1 flex-col flex gap-4 overflow-hidden">
        <div className="bg-chrome rounded-3xl flex-1 pb-3">
          <PageHeader text="LIFTED" />
          <div className="flex-1 flex-col flex gap-4 p-4 mx-2">
            <div className="flex-1 space-y-4 text-black font-inter">
              <p>
                {
                  "More coming soon! Check out my blog for related Lifted posts!"
                }
              </p>
            </div>
          </div>
          <PageHeader text="Architecture" />
          <div className="relative flex-1 flex-col flex p-4 pr-5 pb-0 mx-2">
            <Image
              src="/liftedArchitecture.svg"
              alt="Lifted Architecture"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={500}
              height={300}
              className="rounded-3xl"
            />
          </div>
          <PageHeader text="Links" />
          <div className="flex-1 flex-col flex gap-4 p-4 mx-2">
            <div className="flex-1 space-y-4 text-black font-inter">
              <div className="font-sans">
                <div className="flex-row flex items-center gap-2">
                  <div className="mt-1">
                    <Dot />
                  </div>
                  <a
                    href="https://apps.apple.com/us/app/lifted-a-social-workout-app/id6458392186"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-800 dark:text-red-800 pb-1"
                  >
                    <u>
                      https://apps.apple.com/us/app/lifted-a-social-workout-app/id6458392186
                    </u>
                  </a>
                </div>
                <div className="flex-row flex items-center gap-2">
                  <Dot />
                  <Link
                    href="https://www.instagram.com/liftedgym.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-800 dark:text-red-800 underline pb-1"
                  >
                    https://www.instagram.com/liftedgym.app/
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
