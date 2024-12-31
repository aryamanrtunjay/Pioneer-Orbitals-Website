"use client"

import React, { useState } from 'react';

export default function Statement() {

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
      setStyle("text-4xl font-light")
    }
    else if(!isDesktop && orientation.substring(0, 9) === "landscape") {
      setStyle("text-lg font-light")
    }
    else {
      setStyle("text-lg font-light")
    }
  }, [isDesktop, orientation])

  return (
    <section className="border-y z-0 border-y-white py-8 px-4 lg:py-16 lg:px-16 text-center shadow-[rgba(0,0,0,1)_0px_0px_100px_100px]">
      <div className="mx-auto lg:mx-[18rem]">
        <p className={style}>
          Pioneer Orbitals aims to revolutionize space access with cost-effective, 
          reusable Small-Lift Launch Vehicles to make space accessible to everyone.
        </p>
      </div>
    </section>
  )
}
