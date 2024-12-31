"use client"

import React, { useState } from "react";
import { sliderData } from "@/constants/About_Page/mission.jsx";
import Image from "next/image";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

export default function Mission() {

  const [current, setCurrent] = React.useState(0);

  const clickNext = () => {
    current === sliderData.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };
  const clickPrev = () => {
    current === 0 ? setCurrent(sliderData.length - 1) : setCurrent(current - 1);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      clickNext();
    }, 10000);
    return () => { 
      clearInterval(interval);
    };
  }, [current]);

  return (
    <div className="flex flex-col gap-5 mx-10 my-10">
      <div className="relative grid place-items-center grid-cols-2">
        <div className="w-full flex justify-center items-center transition-transform ease-in-outduration-500">
          {sliderData.map((img, idx) => (
            <div
              className={`
                ${idx === current ? "block w-full h-[90vh] object-cover transition-all duration-500 ease-in-out" : "hidden"}
              `}
              key={idx}
            >
              <Image
                src={img.src}
                alt=""
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-l-[50px]"
              />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center items-center gap-4 transition-transform ease-in-outduration-500">
          {sliderData.map((img, idx) => (
            <div
              className={`
                ${idx === current ? "flex flex-col items-center justify-between py-10 px-10 w-full h-[90vh] object-cover transition-all duration-500 ease-in-out bg-[#393939] rounded-r-[50px]" : "hidden"}
              `}
              key={idx}
            >
              <div>
                <h1 className="text-4xl text-center">{img.number}</h1>
                <h1 className="text-4xl text-center">{img.title}</h1>
              </div>
              <div className="flex flex-col space-y-5">
                <p className="text-lg text-center">{img.desc_p1}</p>
                <p className="text-lg text-center">{img.desc_p2}</p>
              </div>
              <div className="relative flex justify-between items-center mx-auto gap-[500px]">
                <button> 
                  <IoIosArrowDropleft onClick={clickPrev} className="text-5xl text-white bg-gray-700 rounded-full cursor-pointer hover:bg-gray-900 transition-all duration-200 ease-in-out" />
                </button>
                <button>
                  <IoIosArrowDropright onClick={clickNext} className="text-5xl text-white bg-gray-700 rounded-full cursor-pointer hover:bg-gray-900 transition-all duration-200 ease-in-out" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
