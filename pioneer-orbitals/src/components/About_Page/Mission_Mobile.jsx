"use client";

import React, { useState, useEffect } from "react";
import { sliderData } from "@/constants/About_Page/mission.jsx";
import Image from "next/image";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

export default function Mission_Mobile() {
  // -- State & utility checks --
  const [current, setCurrent] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [orientation, setOrientation] = useState("portrait"); // fallback

  const getOrientation = () => {
    if (typeof window === "undefined") return "";
    return window.screen.orientation.type;
  };

  const checkWindowSize = () => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth > 1024);
    }
  };

  // -- Handlers for next / prev --
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

  const setImg = (idx) => {
    setCurrent(idx);
  };

  // Auto‐advance
  useEffect(() => {
    const interval = setInterval(() => {
      clickNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [current]);

  // Listen for resize → check desktop vs mobile
  useEffect(() => {
    function handleResize() {
      checkWindowSize();
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    checkWindowSize();
  }, []);

  // Listen for orientation changes
  useEffect(() => {
    function updateOrientation() {
      setOrientation(window.screen.orientation.type);
    }
    updateOrientation();
    window.addEventListener("orientationchange", updateOrientation);
    return () => {
      window.removeEventListener("orientationchange", updateOrientation);
    };
  }, []);

  // Optional dynamic styling based on device/orientation
  const baseContainer =
    "relative flex flex-col items-center justify-center mx-5 my-10";
  let containerStyle = baseContainer;

  // Example logic: tweak styles if landscape & mobile
  if (!isDesktop && orientation.startsWith("landscape")) {
    containerStyle += " pt-10";
  } else if (!isDesktop) {
    containerStyle += " pt-20";
  } else {
    // Desktop
    containerStyle += " pt-60";
  }

  return (
    <div className={containerStyle}>
      {/* Outer wrapper to hide overflow & let us translate slides */}
      <div className="w-full max-w-[550px] overflow-hidden rounded-t-[50px]">
        {/* Slides container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {sliderData.map((slide, idx) => (
            <div
              key={idx}
              className="flex-none w-full flex flex-col"
            >
              {/* Top: image */}
              <div className="relative w-full h-[300px]">
                <Image
                  src={slide.src}
                  alt=""
                  fill
                  className="object-cover rounded-t-[50px]"
                />
              </div>

              {/* Bottom: text */}
              <div className="bg-[#393939] w-full h-full px-5 py-5">
                <div className="flex flex-col items-center justify-between transition-all duration-500 ease-in-out">
                  <h1 className="text-4xl text-center">{slide.number}</h1>
                  <h1 className="text-2xl text-center mb-5">
                    {slide.title}
                  </h1>
                  <div className="flex flex-col space-y-5 text-md text-center">
                    <p>{slide.desc_p1}</p>
                    <p>{slide.desc_p2}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows + Dots */}
      <div className="bg-[#393939] w-full max-w-[550px] px-5 py-3 rounded-b-[50px] translate-y-[-1px]">
        <div className="flex justify-between gap-10 items-center">
          <button>
            <IoIosArrowDropleft
              onClick={clickPrev}
              className="text-4xl text-white rounded-full cursor-pointer transition-all duration-200 ease-in-out"
            />
          </button>
          <div className="flex flex-row gap-4">
            {sliderData.map((_, idx) => (
              <button
                onClick={() => setImg(idx)}
                key={idx}
                className={
                  idx === current
                    ? "w-3 h-3 bg-white rounded-full cursor-pointer transition-all duration-200 ease-in-out"
                    : "w-3 h-3 bg-opacity-0 border border-white rounded-full cursor-pointer transition-all duration-200 ease-in-out"
                }
              />
            ))}
          </div>
          <button>
            <IoIosArrowDropright
              onClick={clickNext}
              className="text-4xl text-white rounded-full cursor-pointer transition-all duration-200 ease-in-out"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
