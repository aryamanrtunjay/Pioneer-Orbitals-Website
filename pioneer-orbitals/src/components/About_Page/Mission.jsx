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
                width={0}
                height={0}
                sizes="full"
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
              <div className="flex flex-col space-y-5 text-xl text-center">
                <p> {img.desc_p1} </p>
                <p> {img.desc_p2} </p>
              </div>
              <div className="relative flex justify-between gap-40 items-center mx-auto">
                <button> 
                  <IoIosArrowDropleft onClick={clickPrev} className="text-5xl text-white bg-gray-700 rounded-full cursor-pointer hover:bg-gray-900 transition-all duration-200 ease-in-out" />
                </button>
                <div className="flex flex-row gap-4">
                  {sliderData.map((img, idx) => (
                    <div key={idx} className={`${idx === current ? "w-3 h-3 bg-white rounded-full" : "w-3 h-3 bg-opacity-0 border border-white rounded-full" }`}/>
                  ))}
                </div>
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
