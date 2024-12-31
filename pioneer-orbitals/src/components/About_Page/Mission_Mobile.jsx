"use client"

import React, { useState } from "react";
import { sliderData } from "@/constants/About_Page/mission.jsx";
import Image from "next/image";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

export default function Mission_Mobile() {

  const getOrientation = () => {
    if(typeof window === "undefined") {
      return "null";
    }
    return window.screen.orientation.type
  }

  const checkWindowSize = () => {
    let windowWidth;
    if(typeof window !== "undefined") {
      windowWidth = window.innerWidth
    }

    if (windowWidth > 1024) {
      setIsDesktop(true)
    } else {
      setIsDesktop(false)
    }
  }

  const [current, setCurrent] = React.useState(0);
  const [isDesktop, setIsDesktop] = React.useState(true);
  const [orientation, setOrientation] = React.useState(getOrientation());
  const [style, setStyle] = React.useState("relative flex flex-col pt-60 h-min items-center mx-5 gap-3");
  const [textStyle, setTextStyle] = React.useState("text-8xl font-light tracking-widest uppercase text-center")

  const clickNext = () => {
    current === sliderData.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };
  const clickPrev = () => {
    current === 0 ? setCurrent(sliderData.length - 1) : setCurrent(current - 1);
  };
  const setImg = (idx) => {
    setCurrent(idx);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      clickNext();
    }, 10000);
    return () => { 
      clearInterval(interval);
    };
  }, [current]);

  React.useEffect(() => {
    function handleResize() {
      checkWindowSize();
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  React.useEffect(() => {
    checkWindowSize()
  }, [])

  React.useEffect(() => {
    function updateOrientation() {
      setOrientation(window.screen.orientation.type);
    }

    updateOrientation();
    window.addEventListener("orientationchange", updateOrientation);
    return () => {
      window.removeEventListener("orientationchange", updateOrientation);
    };
  }, [orientation]);

  React.useEffect(() => {
    if(isDesktop) {
      setStyle("relative flex flex-col pt-60 h-[calc(1/729*100%)] items-center mx-5 gap-3")
      setTextStyle("text-8xl font-light tracking-widest uppercase text-center")
    }
    else if(!isDesktop && orientation.substring(0, 9) === "landscape") {
      setStyle("relative flex flex-col pt-10 h-min items-center mx-3 gap-3")
      setTextStyle("text-5xl font-light tracking-widest uppercase text-center")
    }
    else {
      setStyle("relative flex flex-col pt-20 h-min items-center mx-3 gap-3")
      setTextStyle("text-3xl font-light tracking-widest uppercase text-center")
    }
  }, [isDesktop, orientation])
  

  return (
    <div className="flex flex-col mx-5 my-10 justify-center items-center relative z-0">
        <div className="relative rounded-t-[30px] overflow-hidden w-full max-w-[550px] h-[300px]">
            {sliderData.map((img, idx) => (
            <div
                className={`
                ${idx === current ? "block w-full transition-all duration-500 ease-in-out" : "hidden"}
                `}
                key={idx}
            >
                <Image
                src={img.src}
                alt=""
                fill
                className="object-cover rounded-t-[50px]"
                />
            </div>
            ))}      
        </div>
        <div className="relative bg-[#393939] rounded-b-[50px] overflow-hidden w-full max-w-[550px] h-auto px-5 py-5">
            {sliderData.map((img, idx) => (
                <div
                    className={`
                    ${idx === current ? "flex flex-col items-center justify-between object-cover transition-all duration-500 ease-in-out" : "hidden"}
                    `}
                    key={idx}
                >
                    <div>
                        <h1 className="text-4xl text-center">{img.number}</h1>
                        <h1 className="text-2xl text-center mb-5">{img.title}</h1>
                    </div>
                    <div className="flex flex-col space-y-5 text-md text-center">
                        <p> {img.desc_p1} </p>
                        <p> {img.desc_p2} </p>
                    </div>
                    <div className="relative flex justify-between gap-10 items-center mx-auto mt-5">
                        <button> 
                            <IoIosArrowDropleft onClick={clickPrev} className="text-4xl text-white rounded-full cursor-pointer transition-all duration-200 ease-in-out" />
                        </button>
                        <div className="flex flex-row gap-4">
                            {sliderData.map((img, idx) => (
                            <button onClick={() => setImg(idx)} key={idx} className={`${idx === current ? "w-3 h-3 bg-white rounded-full cursor-pointer transition-all duration-200 ease-in-out" : "w-3 h-3 bg-opacity-0 border border-white rounded-full cursor-pointer transition-all duration-200 ease-in-out" }`}/>
                            ))}
                        </div>
                        <button>
                            <IoIosArrowDropright onClick={clickNext} className="text-4xl text-white rounded-full cursor-pointer transition-all duration-200 ease-in-out" />
                        </button>
                    </div>
                </div>
                ))}
        </div>
    </div>
  );
}
