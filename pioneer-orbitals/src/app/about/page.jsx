"use client"

import React, { useState } from 'react'
import Hero from "@/components/About_Page/Hero";
import Statement from "@/components/About_Page/Statement";
import Mission from "@/components/About_Page/Mission";
import MissionMobile from "@/components/About_Page/Mission_Mobile";
import Team from "@/components/About_Page/Team";

export default function Page() {
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
  const [isDesktop, setIsDesktop] = React.useState(true);

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
  

  return (
    <main>
      <Hero/>
      <Statement />
      {isDesktop ? <Mission /> : <MissionMobile />}
      <Team />
    </main>
  )
}
