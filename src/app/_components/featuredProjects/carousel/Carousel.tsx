"use client";

import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import React, { useState } from "react";

import Dot from "@/app/_shared/Dot";
import { EmblaOptionsType } from "embla-carousel";
import { IconType } from "react-icons";
import { useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";

type PropType = {
  slides: string[];
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
    <div className="flex-1 w-full flex-col flex items-center justify-center">
      <div
        className="relative h-full grid w-full"
        style={{
          gridTemplateColumns: "40px minmax(0, 1fr) 40px",
        }}
      >
        <button
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="z-20 mx-2 ml-1 col-span-1"
        >
          <Arrow Component={IoMdArrowDropleftCircle} />
        </button>
        <div className="min-h-full pt-2 col-span-1">
          <div
            className="pointer-events-none absolute -right-[2px] -left-[1px] top-0 -bottom-2 z-20 rounded-2xl mx-10"
            style={{
              boxShadow: `
                inset 0px 0px 5px 5px rgba(178, 190, 207, 1),
                inset 0px 0px 4px 4px rgba(178, 190, 207, 1)
              `,
            }}
          />
          <div
            className="h-full flex-1 -my-2 py-2 mb-4 overflow-hidden rounded-2xl"
            ref={emblaRef}
          >
            <div className="touch-pan-y touch-pinch-zoom flex flex-row">
              {slides.map((index) => (
                <div
                  className="px-2 -z-10"
                  key={index}
                  style={{
                    flex: "0 0 75%",
                  }}
                >
                  <div className="bg-black aspect-[1.5] rounded-2xl flex items-center justify-center shadow-md shadow-zinc-700">
                    <div className="text-xl">{index}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="z-20 mx-2 mr-1 col-span-1"
        >
          <Arrow Component={IoMdArrowDroprightCircle} />
        </button>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 mb-1">
        {slides.map((_, index) => (
          <button key={index} onClick={() => onDotButtonClick(index)}>
            <Dot index={index} selectedIndex={selectedIndex} />
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
            <stop offset="0%" stopColor="#b2becf" />
            <stop offset="100%" stopColor="#f7fafc" />
          </radialGradient>
          <radialGradient id="1">
            <stop offset="0%" stopColor="#8da6ed" />
            <stop offset="100%" stopColor="#f7fafc" />
          </radialGradient>
        </defs>
      </svg>
      <div
        className="rounded-full w-7 h-7 bg-blue-900 dark:bg-red-800"
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
