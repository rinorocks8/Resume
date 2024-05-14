export default async function Caret() {
  return (
    <div className="-ml-2 -mr-5">
      <svg
        width={48}
        height={48}
        className="text-blue-800 dark:text-red-800"
        viewBox="0 0 100 100"
        transform="skewX(-5)"
      >
        <rect
          x="52.5"
          y="-10"
          width="27.2"
          height="14"
          fill="white"
          transform="rotate(45)"
        />
        <rect
          x="-17.2"
          y="65.7"
          width="27.2"
          height="14"
          fill="white"
          transform="rotate(-45)"
        />
        <rect
          x="55"
          y="-7.5"
          width="22.2"
          height="9"
          fill="currentColor"
          transform="rotate(45)"
        />
        <rect
          x="-14.7"
          y="68.2"
          width="22.2"
          height="9"
          fill="currentColor "
          transform="rotate(-45)"
        />
      </svg>
    </div>
  );
}
