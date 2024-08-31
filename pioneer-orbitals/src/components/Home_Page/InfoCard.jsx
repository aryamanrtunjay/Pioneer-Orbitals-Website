"use client"

import React from 'react'
import Image from 'next/image'
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { IoIosArrowDown } from "react-icons/io" 
import { AnimatePresence, motion } from 'framer-motion'
import Button from '@/components/Button'

export default function InfoCard({ src, alt, title, infoText}) {
  return (
    <Popover className="group">
      {({ open }) => (
        <>
          <PopoverButton className="outline-none">
            <div className={!open ? "relative rounded-[30px] overflow-hidden outline outline-[1px] outline-[#484848]/[0.45] shadow-[rgba(0,0,0,0.5)_15px_30px_50px_0px] w-[500px] h-[693px]" 
                                  : "relative rounded-[30px] overflow-hidden outline outline-[1px] outline-[#484848]/[0.45] shadow-[rgba(0,0,0,0.5)_15px_0px_50px_0px] w-[500px] h-[693px]"
            }
            >
              <div className="absolute w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.51)_51%,rgba(0,0,0,0.00)_100%)] z-10"></div>
              <h1 className="relative z-10 text-5xl text-center mx-[22px] mt-[200px]"> {title} </h1>
              
              <AnimatePresence>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: open ? 180 : 0 }}
                    exit={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute z-10 text-5xl bottom-10 left-[45%]"
                  >
                    <IoIosArrowDown />
                  </motion.div>
              </AnimatePresence>
              <Image
                src={src}
                alt={alt}
                fill
                className={!open ? "blur-lg object-cover w-full h-full z-[-5]" : "object-cover w-full h-full z-[-5]"}
              />
            </div>
          </PopoverButton>
          <AnimatePresence>
            {open && (
              <PopoverPanel 
                static
                as={motion.div}
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
              </PopoverPanel>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  )
}
