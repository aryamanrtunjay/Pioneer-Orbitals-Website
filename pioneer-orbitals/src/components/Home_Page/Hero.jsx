"use client"

import React from 'react'
import Image from 'next/image'
import HeroImage from '@/images/HeroImage.png'
import HeroImageMobile from '@/images/HeroImageMobile.jpg'
import Button from '@/components/Button'

export default function Hero() {

  const getOrientation = () =>
    window.screen.orientation.type

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

  const updateOrientation = event => {
    setOrientation(getOrientation())
  }

  React.useEffect(() => {
    window.addEventListener(
      'orientationchange',
      updateOrientation
    )
    return () => {
      window.removeEventListener(
        'orientationchange',
        updateOrientation
      )
    }
  }, [])

  console.log(orientation.substring(0, 9))
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
      <div className={orientation.substring(0, 9) === "landspace-primar" ? "relative flex flex-col mt-40 h-min items-center mx-5 gap-3" : "relative flex flex-col mt-20 h-min items-center mx-5 gap-3"}>
        <h1 className="lg:text-6xl leading-none text-4xl font-bold tracking-widest uppercase text-center">Pioneering Space for All</h1>
        <h2 className="text-2xl font-medium text-center leading-none">Innovating small satellite launchers for a brighter future</h2>
        <Button href="#about" variant="outline" className="h-10 w-40 text-lg text-center">Fly With Us</Button>
      </div>
    </div>
  )
}
