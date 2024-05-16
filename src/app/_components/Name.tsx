"use server";

import Link from "next/link";

export default async function Name() {
  return (
    <div className="items-center justify-start flex w-full py-4 pb-16 md:pb-4 scale-90 md:scale-100 translate-x-[-5%] md:translate-x-0">
      <Link
        className={`z-10 text-blue-900 dark:text-red-900 text-5xl font-eight_track_hollow`}
        href="/"
      >
        Ryan Circelli
      </Link>
      <div
        className={`absolute ml-3 mb-4 text-nowrap  opacity-85 pointer-events-none text-blue-900 dark:text-red-900 text-5xl font-eight_track_hollow font-bold`}
        aria-hidden="true"
      >
        Ryan Circelli
      </div>
      <div
        className={`absolute ml-6 mb-8 text-nowrap opacity-70 pointer-events-none text-blue-900 dark:text-red-900 text-5xl font-eight_track_hollow font-bold`}
        aria-hidden="true"
      >
        Ryan Circelli
      </div>
      <div
        className={`pointer-events-none absolute text-white text-5xl font-eight_track opacity-90`}
        style={{
          letterSpacing: "2.425px",
          fontSize: "48.5px",
          marginLeft: "1.5px",
          marginTop: "2px",
        }}
        aria-hidden="true"
      >
        Ryan
      </div>
      <div
        className={`pointer-events-none absolute text-white text-5xl font-eight_track opacity-90`}
        style={{
          letterSpacing: "2.425px",
          fontSize: "48.5px",
          marginLeft: "107.5px",
          marginTop: "2px",
        }}
        aria-hidden="true"
      >
        Circelli
      </div>
    </div>
  );
}
