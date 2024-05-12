import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import React, { useCallback, useEffect, useState } from "react";

import { EmblaOptionsType } from "embla-carousel";
import { IconType } from "react-icons";
import { useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="flex-1 h-full flex-col flex overflow-hidden">
      <div className="relative flex flex-row h-full">
        <button
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="z-10"
        >
          <Arrow Component={IoMdArrowDropleftCircle} />
        </button>
        <div
          className="h-full flex-1 overflow-hidden -my-10 py-10 z-10"
          ref={emblaRef}
        >
          <div className="touch-pan-y touch-pinch-zoom flex flex-row">
            {slides.map((index) => (
              <div
                className="min-w-20 px-2 -z-10"
                key={index}
                style={{
                  flex: "0 0 33.333%",
                }}
              >
                <div className="bg-black aspect-[1.5] rounded-2xl flex items-center justify-center shadow-md shadow-zinc-700">
                  <div className="">{index + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={onNextButtonClick} disabled={prevBtnDisabled}>
          <Arrow Component={IoMdArrowDroprightCircle} />
        </button>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 mt-4 mb-1">
        {slides.map((_, index) => (
          <button key={index} onClick={() => onDotButtonClick(index)}>
            <div className="relative rounded-full aspect-square h-2.5">
              <div className="absolute z-20 aspect-square h-2.5 flex">
                <div className="ml-[1px] m-[0.5px] flex-1 rounded-full bg-blue-900 dark:bg-red-800" />
              </div>
              <div
                className={
                  "absolute z-20 rounded-full aspect-square h-2.5 " +
                  (index === selectedIndex ? " bg-transparent" : " bg-white  ")
                }
                style={{
                  boxShadow: `
                  inset 0px 0px 1px 1px rgba(226, 232, 240, 1),
                  0px 0px 2px 2px rgba(226, 232, 240, 1)
                `,
                }}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

const Arrow = ({ Component }: { Component: IconType }) => {
  const [hover, setHover] = useState(false);
  return (
    <div>
      <svg height="0" width="0">
        <defs>
          <radialGradient id="0">
            <stop offset="0%" stop-color="#b2becf" />
            <stop offset="100%" stop-color="#f7fafc" />
          </radialGradient>
          <radialGradient id="1">
            <stop offset="0%" stop-color="#8da6ed" />
            <stop offset="100%" stop-color="#f7fafc" />
          </radialGradient>
        </defs>
      </svg>
      <div
        className="rounded-full w-7 h-7 mx-2 bg-blue-900 dark:bg-red-800"
        style={{
          boxShadow: "0px 0px 2px 2px rgba(226, 232, 240, 1)",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Component
          size="36"
          className="absolute -ml-1 -mt-1"
          style={{
            fill: hover ? "url(#1)" : "url(#0)",
          }}
        />
      </div>
    </div>
  );
};
