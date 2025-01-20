"use client";

import React, { useState, useEffect } from "react";
import { sliderData } from "@/constants/About_Page/mission.jsx";
import Image from "next/image";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

export default function Mission() {
  const [current, setCurrent] = useState(0);

  // Handlers for next/prev
  const clickNext = () => {
    setCurrent((prev) =>
      prev === sliderData.length - 1 ? 0 : prev + 1
    );
  };
  const clickPrev = () => {
    setCurrent((prev) =>
      prev === 0 ? sliderData.length - 1 : prev - 1
    );
  };

  // Auto‐advance every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      clickNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="flex flex-col items-center gap-5 mx-10 my-10">
      <div className="relative w-full h-[90vh] overflow-hidden rounded-[50px]">
        {/* 
          -- The “track” of slides. 
             We shift it with translateX to show the active slide.
        */}
        <div
          className="flex h-full w-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {sliderData.map((slide, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full h-full flex"
            >
              {/* LEFT: image */}
              <div className="w-1/2 h-full relative">
                <Image
                  src={slide.src}
                  alt=""
                  fill
                  className="object-cover rounded-l-[50px]"
                />
              </div>

              {/* RIGHT: text + stationary nav */}
              <div
                className="
                  w-1/2 h-full bg-[#393939] text-white 
                  flex flex-col items-center justify-between 
                  text-center py-10 px-10 rounded-r-[50px]
                "
              >
                {/* Slide Heading */}
                <div>
                  <h1 className="text-4xl">{slide.number}</h1>
                  <h2 className="text-4xl mt-2">{slide.title}</h2>
                </div>

                {/* Slide Body Text */}
                <div className="flex flex-col space-y-5 text-xl">
                  <p>{slide.desc_p1}</p>
                  <p>{slide.desc_p2}</p>
                </div>

                {/* Nav Buttons + Indicators (centered at bottom of text panel) */}
                <div className="flex flex-col items-center gap-4 mt-6">
                  {/* Arrows */}
                  <div className="flex gap-8">
                    <button
                      onClick={clickPrev}
                      className="p-2 text-5xl rounded-full hover:bg-gray-800 transition duration-200"
                    >
                      <IoIosArrowDropleft />
                    </button>
                    <button
                      onClick={clickNext}
                      className="p-2 text-5xl rounded-full hover:bg-gray-800 transition duration-200"
                    >
                      <IoIosArrowDropright />
                    </button>
                  </div>
                  {/* Dots */}
                  <div className="flex gap-4">
                    {sliderData.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setCurrent(dotIdx)}
                        className={
                          dotIdx === current
                            ? "w-3 h-3 bg-white rounded-full cursor-pointer transition-all duration-200 hover:w-4 hover:h-4"
                            : "w-3 h-3 bg-opacity-0 border border-white rounded-full cursor-pointer transition-all duration-200 hover:w-4 hover:h-4"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
