import Background from "./background";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Background />
    </main>
  );
}

//  <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
//     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//       Get started by editing&nbsp;
//       <code className="font-mono font-bold">src/app/page.tsx</code>
//     </p>
//     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
//       <a
//         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         By{" "}
//         <Image
//           src="/vercel.svg"
//           alt="Vercel Logo"
//           className="dark:invert"
//           width={100}
//           height={24}
//           priority
//         />
//       </a>
//     </div>
//   </div>

//   <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
//     <Image
//       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//       src="/next.svg"
//       alt="Next.js Logo"
//       width={180}
//       height={37}
//       priority
//     />
//   </div>

//   <div className="mb-32 grid text-center lg:mb-0 w-full  lg:grid-cols-4 lg:text-left">
//     <a
//       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className="mb-3 text-2xl font-semibold">
//         Docs{" "}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className="m-0 max-w-[30ch] text-sm opacity-50">
//         Find in-depth information about Next.js features and API.
//       </p>
//     </a>

//     {/* <div className="relative">
//       <img
//         src="/hhholographic.webp"
//         alt="Your Image"
//         className="w-full h-auto"
//       />
//       <div className="absolute inset-0 flex items-center justify-center">
//         <h1 className="text-4xl font-bold text-white">Your Text</h1>
//       </div>
//     </div> */}
//     <svg className="w-full h-auto" viewBox="0 0 500 500">
//       <defs>
//         <clipPath id="textClip">
//           <text
//             x="50%"
//             y="50%"
//             dominantBaseline="middle"
//             textAnchor="middle"
//             fontSize="64px"
//             fill="black"
//             style={{ fontWeight: 900 }}
//           >
//             Ryan Circelli
//           </text>
//         </clipPath>
//         <radialGradient
//           id="radial-gradient"
//           cx="50%"
//           cy="100%"
//           r="100%"
//           fx="50%"
//           fy="100%"
//         >
//           <stop offset="0%" stopColor="#4fd1c5" />
//           <stop offset="25%" stopColor="rgba(88, 216, 217, 0.75)" />
//           <stop offset="50%" stopColor="rgba(96, 223, 237, 0.5)" />
//           <stop offset="100%" stopColor="rgba(190, 227, 248, 0)" />
//         </radialGradient>
//         <linearGradient
//           id="linear-gradient"
//           x1="0%"
//           y1="0%"
//           x2="100%"
//           y2="0%"
//         >
//           <stop offset="0%" stopColor="#1a202c" />
//           <stop offset="14.14%" stopColor="#1f2635" />
//           <stop offset="28.29%" stopColor="#242b3f" />
//           <stop offset="42.43%" stopColor="#29314b" />
//           <stop offset="56.57%" stopColor="#2e3658" />
//           <stop offset="70.71%" stopColor="#343b68" />
//           <stop offset="99%" stopColor="#434190" />
//         </linearGradient>
//       </defs>

//       {/* <rect
//         fill="url(#radial-gradient)"
//         width="100%"
//         height="100%"
//         clipPath="url(#textClip)"
//       /> */}
//       <rect
//         fill="url(#linear-gradient)"
//         width="100%"
//         height="100%"
//         clipPath="url(#textClip)"
//       />
//     </svg>
//     {/* <image
//         href="/hhholographic.webp"
//         x="0"
//         y="0"
//         width="1000"
//         height="1000"
//         clipPath="url(#textClip)"
//       /> */}
//     <a
//       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className="mb-3 text-2xl font-semibold">
//         Learn{" "}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className="m-0 max-w-[30ch] text-sm opacity-50">
//         Learn about Next.js in an interactive course with&nbsp;quizzes!
//       </p>
//     </a>

//     <a
//       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className="mb-3 text-2xl font-semibold">
//         Templates{" "}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className="m-0 max-w-[30ch] text-sm opacity-50">
//         Explore starter templates for Next.js.
//       </p>
//     </a>

//     <a
//       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className="mb-3 text-2xl font-semibold">
//         Deploy{" "}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
//         Instantly deploy your Next.js site to a shareable URL with Vercel.
//       </p>
//     </a>
//   </div>
