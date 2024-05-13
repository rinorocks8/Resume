"use client";

export default function Name() {
  return (
    <div className="items-center justify-start flex w-full py-4">
      <button
        className={`z-10 text-blue-900 dark:text-red-900 text-5xl font-eight_track_hollow`}
      >
        Ryan Circelli
      </button>
      <div
        className={`absolute ml-3 mb-4 opacity-85 pointer-events-none text-blue-900 dark:text-red-900 text-5xl font-eight_track_hollow font-bold`}
        aria-hidden="true"
      >
        Ryan Circelli
      </div>
      <div
        className={`absolute ml-6 mb-8 opacity-70 pointer-events-none text-blue-900 dark:text-red-900 text-5xl font-eight_track_hollow font-bold`}
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
