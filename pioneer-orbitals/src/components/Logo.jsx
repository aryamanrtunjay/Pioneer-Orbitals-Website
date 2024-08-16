"use client"

import Link from 'next/link'
import React from 'react'
import clsx from "clsx"
import { AnimatePresence, motion } from 'framer-motion'

export default function Logo({ className, ...props }) {

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div>
      <Link href={"/"} 
        onMouseEnter={() => {setIsHovered(true)}}
        onMouseLeave={() => {setIsHovered(false)}}
      >
        <h2 className={clsx(  
          "text-3xl font-bold text-white inset-0",
          className
        )}
        >
            Pioneer Orbitals
        </h2>
      </Link>
      <AnimatePresence>
        <motion.div
          className="border-b-2 border-lime-500 inset-0"
          initial={false}
          animate={{
            width: isHovered ? "100%" : 0,
          }}  
        >
        </motion.div>
      </AnimatePresence>
    </div>
  )
}