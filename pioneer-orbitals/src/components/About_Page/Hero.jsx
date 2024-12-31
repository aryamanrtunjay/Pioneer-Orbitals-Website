"use client"

import React from 'react'
import Image from 'next/image'
import HeroImage from '@/images/About/HeroImage.png'
import HeroImageMobile from '@/images/About/HeroImageMobile.jpg'
import Button from '@/components/Button'
import { FaArrowDown } from "react-icons/fa" 

export default function Hero() {

  const getOrientation = () => {
    if(typeof window === "undefined") {
      return "null";
    }
    return window.screen.orientation.type
  }

  const [isDesktop, setIsDesktop] = React.useState(true);
  const [orientation, setOrientation] = React.useState(getOrientation());
  const [style, setStyle] = React.useState("relative flex flex-col pt-60 h-min items-center mx-5 gap-3");

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
    }
    else if(!isDesktop && orientation.substring(0, 9) === "landscape") {
      setStyle("relative flex flex-col pt-10 h-min items-center mx-3 gap-3")
    }
    else {
      setStyle("relative flex flex-col pt-20 h-min items-center mx-3 gap-3")
    }
  }, [isDesktop, orientation])

  return (
    <div className="h-[calc(100vh-124px)]">
      <Image
        className="fixed opacity-50 z-0"
        src={isDesktop ? HeroImage : HeroImageMobile}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="Earth as seen from space"
      />
      <div className={style}>
        <h1 className={isDesktop ? "text-8xl font-light tracking-widest uppercase text-center" : "mx-0 px-0 text-5xl font-lightest tracking-widest uppercase text-center"}>ABOUT US</h1>
      </div>
      <div className="flex flex-col pb-10 h-max items-center">
        <FaArrowDown className="absolute z-10 text-3xl bottom-10 ml-auto"/>
      </div>
    </div>
  )
}
