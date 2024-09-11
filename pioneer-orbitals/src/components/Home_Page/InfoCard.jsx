"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { IoIosArrowDown } from "react-icons/io" 
import { AnimatePresence, motion } from 'framer-motion'
import Button from '@/components/Button'
import { Collapse } from 'react-collapse'

export default function InfoCard({ src, alt, title, infoText, toggle, open }) {
  const [isDesktop, setIsDesktop] = React.useState(true);

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

  return (
    <button
      onClick={toggle}
      className="flex flex-col justify-center items-center relative z-0"
    >
      <div className={!open ? "relative rounded-t-[30px] overflow-hidden outline outline-[1px] outline-[#484848]/[0.45] shadow-[rgba(0,0,0,0.5)_15px_30px_50px_0px] w-full max-w-[550px] h-[450px] lg:h-[693px]" 
                            : "relative rounded-t-[30px] overflow-hidden outline outline-[1px] outline-[#484848]/[0.45] shadow-[rgba(0,0,0,0.5)_15px_0px_50px_0px] w-full max-w-[550px] h-[450px] lg:h-[693px]"
                     }
      >
        <div className="absolute w-full max-w-[550px] h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.51)_51%,rgba(0,0,0,0.00)_100%)] z-10"></div>
        <h1 className="relative z-10 text-4xl lg:text-5xl text-center mx-[10px] lg:mx-[22px] mt-[100px] lg:mt-[200px]"> {title} </h1>
        
        <AnimatePresence>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: open ? 180 : 0 }}
              exit={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute z-10 text-5xl bottom-10 left-[42%] lg:left-[45%] "
            >
              <IoIosArrowDown />
            </motion.div>
        </AnimatePresence>
        <Image
          src={src}
          alt={alt}
          fill
          className={!open ? "blur-lg object-cover w-full max-w-[550px] h-full z-[-5]" : "object-cover w-full max-w-[550px] h-full z-[-5]"}
        />
      </div>
      
      <Collapse isOpened={open}>
        <div className="bg-[#393939] py-[40px] rounded-b-[30px] w-full max-w-[550px]">
          {<h1 className="text-[20px] mx-[25px] mb-[25px] text-center lg:text-left"> {infoText} </h1>}
          <Button variant="outline" className="w-[70%] h-[40px] mx-[25px] border-white border-2 z-50">Read More</Button>
        </div>
      </Collapse>

      {/* <AnimatePresence>
        <motion.div
          initial={{opacity: 0, y: -600 }}
          animate={{opacity: open ? 1 : 0, y: open ? -400 : -600 }}
          exit={{opacity: 0, y: -600 }}
          transition={{ duration: 0.2 }}
          className={open ? `relative bg-[#393939] w-full max-w-[550px] h-[${isDesktop ? "377px" : "180px"}] rounded-b-[30px] -translate-y-[20px] z-[-10] bottom-[-377px] flex flex-col gap-10 justify-center items-center shadow-[rgba(0,0,0,0.5)_15px_30px_50px_0px]`
                          : "relative bg-[#393939] w-full max-w-[550px] h-[0px] rounded-b-[30px] -translate-y-[20px] z-[-10] bottom-[-377px] flex flex-col gap-10 justify-center items-center"
          }
        >
          {isDesktop && <h1 className="text-[20px] mx-[25px] text-left"> {infoText} </h1>}
          <Button variant="outline" className="w-[90%] h-[40px] border-white border-2 z-50">Read More</Button>
        </motion.div>
      </AnimatePresence> */}
    </button>
  )
}

{/* <AnimatePresence>
  {open && (
    <motion.div
      static
      initial={{ opacity: 0, y: -256 }}
      animate={{ opacity: 1, y: -40 }}
      exit={{
        opacity: 0,
        y: -256,
        transition: {duration: 0.2}
      }}
      className={open ? "absolute w-[500px] h-[377px] bg-[#393939] shadow-[rgba(0,0,0,0.5)_15px_30px_50px_0px] rounded-b-[30px] -translate-y-[20px] z-[-10]"
                      : "absolute w-[500px] h-[377px] bg-[#393939] rounded-b-[30px] -translate-y-[20px] z-[-10]"
      }
    >
      <div className="flex flex-col gap-10 mt-[60px] justify-center items-center ">
        <h1 className="text-[20px] mx-[25px]"> {infoText} </h1>
        <Button variant="outline" className="w-[90%] h-[40px] border-white border-2">Read More</Button>
      </div>
    </motion.div>
  )}
</AnimatePresence> */}