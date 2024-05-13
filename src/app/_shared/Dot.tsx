import React from "react";

const Dot = ({
  selectedIndex = 0,
  index = 0,
  size = 10,
}: {
  selectedIndex?: number;
  index?: number;
  size?: number;
}) => {
  const innerShadowSize = size * 0.1;
  const shadowSize = size * 0.2;
  return (
    <div
      className="relative"
      style={{
        width: size,
        height: size,
      }}
    >
      <div className="absolute z-20 flex items-center justify-center">
        <div
          className="bg-blue-900 dark:bg-red-800 border-white border-[0.5px] rounded-full"
          style={{
            width: size,
            height: size,
          }}
        />
      </div>
      <div className="absolute z-20">
        <div
          className={
            "rounded-full " +
            (index === selectedIndex ? " bg-transparent" : " bg-white ")
          }
          style={{
            boxShadow: `
              inset 0px 0px ${innerShadowSize}px ${innerShadowSize}px rgba(226, 232, 240, 1),
              0px 0px ${shadowSize}px ${shadowSize}px rgba(226, 232, 240, 1)
            `,
            width: size,
            height: size,
          }}
        />
      </div>
    </div>
  );
};

export default Dot;
