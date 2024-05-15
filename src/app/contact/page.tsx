"use server";

import Dot from "../_shared/Dot";
import Link from "next/link";
import PageHeader from "../_shared/PageHeader";

export default async function Contact() {
  return (
    <div className="w-full flex-1 flex-row gap-4 mt-8 flex">
      <div className="flex-1 flex-col flex gap-4 overflow-hidden">
        <div className="bg-chrome rounded-3xl flex-1 flex-col flex">
          <PageHeader text="CONTACT ME" />
          <div className="flex-1 flex-col flex gap-4 p-4 mx-2">
            <div className="flex-1 space-y-4 text-black font-inter">
              <p>{"Let's get in touch!"}</p>
              <p>
                {`I am always looking for new opportunities. If you would like to
                discuss a project, an opening, or if you just want to connect,
                feel free to reach out to me.`}
              </p>
              <p>{`You can reach me at:`}</p>
              <div className="font-sans">
                <div className="flex-row flex items-center gap-2">
                  <div className="mt-1">
                    <Dot />
                  </div>
                  <a
                    href="mailto:ryancircelli@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-800 dark:text-red-800 pb-1"
                  >
                    <u>ryancircelli@gmail.com</u>
                  </a>
                </div>
                <div className="flex-row flex items-center gap-2">
                  <Dot />
                  <Link
                    href="https://linkedin.com/in/ryancircelli"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-800 dark:text-red-800 underline pb-1"
                  >
                    LinkedIn
                  </Link>
                </div>
                <div className="flex-row flex items-center gap-2">
                  <Dot />
                  <Link
                    href="/RyanCircelliResume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-800 dark:text-red-800 underline pb-1"
                  >
                    Resume.pdf
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
