"use client"

import React from 'react'
import Image from 'next/image'
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { IoIosArrowDown } from "react-icons/io" 
import { AnimatePresence, motion } from 'framer-motion'

export default function InfoCard({ src, alt, title }) {
  return (
    <Popover className="group">
      {({ open }) => (
        <PopoverButton className="outline-none">
          <div className="relative rounded-[30px] overflow-hidden outline outline-[1px] 
            outline-[#484848]/[0.45] shadow-[rgba(0,0,0,0.5)_15px_30px_50px_0px] 
            w-[500px] h-[693px]"
          >
            <div className="absolute w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.51)_51%,rgba(0,0,0,0.00)_100%)] z-10"></div>
            <h1 className="relative z-10 text-5xl text-center mx-[22px] mt-[200px]"> {title} </h1>
            
            <AnimatePresence>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: open ? 180 : 0 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute z-10 text-5xl bottom-10 mx-[50%]"
                >
                  <IoIosArrowDown />
                </motion.div>
            </AnimatePresence>
            <Image
              src={src}
              alt={alt}
              fill
              className="blur-lg object-cover w-full h-full z-0"
            />
          </div>
        </PopoverButton>
      )}
    </Popover>
  )
}
