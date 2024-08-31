"use client"

import React from 'react'
import Image from 'next/image'
import HeroImage from '@/images/HeroImage.png'
import HeroImageMobile from '@/images/HeroImageMobile.jpg'
import Button from '@/components/Button'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function Hero() {

  const getOrientation = () => {
    if(typeof window === "undefined") {
      return "null";
    }
    return window.screen.orientation.type
  }

  const [isDesktop, setIsDesktop] = React.useState(true);
  const [orientation, setOrientation] = React.useState(getOrientation());
  const [style, setStyle] = React.useState("relative flex flex-col mt-40 h-min items-center mx-5 gap-3");

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
      setStyle("relative flex flex-col pt-40 h-[calc(1/729*100%)] items-center mx-5 gap-3")
    }
    else if(!isDesktop && orientation.substring(0, 9) === "landscape") {
      setStyle("relative flex flex-col pt-10 h-min items-center mx-3 gap-3")
    }
    else {
      setStyle("relative flex flex-col pt-20 h-min items-center mx-10 gap-3")
    }
  }, [isDesktop, orientation])

  return (
    <div className="h-dvh">
      <ParallaxProvider>
        <Image scrollAxis="vertical"
          className="fixed opacity-40 z-0"
          src={isDesktop ? HeroImage : HeroImageMobile}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Rocket leaving the Earth"
        />
      </ParallaxProvider>
      <div className={style}>
        <h1 className={isDesktop ? "text-6xl leading-none font-bold tracking-widest uppercase text-center" : "leading-none text-3xl font-medium tracking-widest uppercase text-center"}>Pioneering Space for All</h1>
        <h2 className={isDesktop ? "text-3xl font-medium text-center leading-none" : "text-lg font-light text-center leading-none"}>Reshaping the scope of orbital spaceflight for a brighter future</h2>
        <Button href="/about" variant="outline" className={orientation.substring(0, 9) === "landscape" ? "h-15 w-60 text-xl text-center mt-5" : "h-15 w-60 text-xl text-center mt-10"}>Learn More</Button>
      </div>
    </div>
  )
}
