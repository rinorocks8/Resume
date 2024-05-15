"use server";
export default async function PageHeader({
  text,
  rightSide,
}: {
  text: string;
  rightSide?: JSX.Element;
}) {
  return (
    <div className="p-4 pb-0 w-full flex-col flex">
      <div className="flex-row flex -my-2 -mt-0.5 items-end">
        <h2 className="px-2 text-blue-800 dark:text-red-800 font-semibold ring-white textBorder-sm textShadow shadow-gray-400 text-3xl font-astral_delight pb-1 flex-row items-center flex">
          {text.toUpperCase()}
        </h2>
        <div className="flex-1"></div>
        {rightSide}
      </div>
      <div className="w-full pr-1">
        <div
          className="w-full h-[5px] border-white border-[1.5px] bg-blue-800 dark:bg-red-800"
          style={{
            transform: "skewX(-15deg)",
          }}
        />
      </div>
    </div>
  );
}
