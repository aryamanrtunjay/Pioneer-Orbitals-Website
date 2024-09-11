"use client";

import React from 'react'
import { Collapse } from 'react-collapse'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

export default function AccordionItem({open, toggle, title, content}) {
  return (
    <div className="pt-[10px]">
        <div 
            className="bg-[#393939] py-[25px] px-[50px] flex justify-between items-center cursor-pointer"
            onClick={toggle}
        >
            <p className="text-[22px] font-semibold"> {title} </p>
            <div classname="text-[30px]">
                {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
        </div>
        <Collapse isOpened={open}>
            <div className="bg-[#393939] px-[50px] pb-[20px]"> {content} </div>
        </Collapse>
    </div>
    
  )
}
