"use client"

import React from 'react'
import Image from 'next/image'
import HeroImage from '@/images/HeroImage.png'
import HeroImageMobile from '@/images/HeroImageMobile.jpg'
import Button from '@/components/Button'

export default function Hero() {

  const getOrientation = () => {
    if(typeof window === "undefined") {
      return "null";
    }
    return window.screen.orientation.type
  }

  const [isDesktop, setIsDesktop] = React.useState(true);
  const [orientation, setOrientation] = React.useState(getOrientation());

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

  return (
    <div>
      <Image 
        className="relative opacity-40 z-0"
        src={isDesktop ? HeroImage : HeroImageMobile}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="Rocket leaving the Earth"
      />
      <div className={(orientation.substring(0, 9) === "landscape" && !isDesktop) ? "relative flex flex-col mt-20 h-min items-center mx-5 gap-3" : "relative flex flex-col mt-40 h-min items-center mx-5 gap-3"}>
        <h1 className="lg:text-6xl leading-none text-4xl font-bold tracking-widest uppercase text-center">Pioneering Space for All</h1>
        <h2 className="text-2xl font-medium text-center leading-none">Innovating small satellite launchers for a brighter future</h2>
        <Button href="#about" variant="outline" className="h-15 w-50 text-xl text-center mt-10">Fly With Us</Button>
      </div>
    </div>
  )
}
