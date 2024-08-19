"use client"

import React, { useState } from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import Container from './Container'
import Button from '@/components/Button'
import { Popover } from "@headlessui/react"
import { TbMenu2 } from "react-icons/tb"
import { IoIosArrowUp } from "react-icons/io" 
import { AnimatePresence, motion } from 'framer-motion'
import { navData } from "@/constants"
import Link from "next/link"

const MovileNavLinks = ({children, ...props}) => {
  return (
    <Popover.Button as={Link}
      className="block text-base leading-7 tracking-tight text-white"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

export default function Header() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10">
            <Logo />
          </div>
          <div className="hidden lg:flex lg:gap-10 items-center ">
            <NavLinks />
          </div>
          <div className="flex items-center gap-6">
            <Button href="#" variant="outline" className="hidden lg:block">Fly With Us</Button>
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button className="relative z-10 -m-2 inline-flex
                    items-center rounded-lg stroke-gray-900 p-2
                    hover:bg-gray-600/50 hover:stroke-gray-600
                    active:stroke-gray-900 [&:not(:focus-visible)]:focus-outline-none outline-none">
                    {({open}) => open 
                      ? (<IoIosArrowUp className="text-2xl" />) 
                      : (<TbMenu2 className="text-2xl" />)
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-[#14141480] backdrop::blur"
                        />
                        <Popover.Panel 
                              static
                              as={motion.div}
                              initial={{ opacity: 0, y: -32 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{
                                opacity: 0,
                                y: -32,
                                transition: {duration: 0.2}
                              }}
                              className="absolute inset-x-0 top-0 z-0 origin-top
                                rounded-b-2xl bg-[#232323] px-6 pb-6 pt-32 shadow-2xl
                              shadow-[#00000085]"
                            >
                              <div className="space-y-4">
                                {navData.map(({_id, title, href}) => (
                                  <div key={_id}>
                                    <MovileNavLinks 
                                      id={_id} 
                                      href={href}
                                      className="relative -mx-3 -my-2 px-1 rounded-lg py-1 text-base
                                    text-gray-200 transition-colors"
                                      onMouseEnter={() => setHoverIndex(_id)}
                                      onMouseLeave={() => setHoverIndex(null)}
                                    >
                                      {title}
                                      <AnimatePresence>
                                        {hoverIndex === _id && (
                                            <motion.div
                                              className="absolute border-b-2 border-pioneer-orange inset-0"
                                              initial={{ opacity: 0 }}
                                              animate={{ opacity: 1, transition: {duration: 0.2}}}
                                              exit={{opacity: 0, transition: {duration: 0.2, delay: 0.05}}}
                                            />
                                        )}
                                      </AnimatePresence>
                                    </MovileNavLinks>
                                  </div>
                                ))}
                              </div>
                              <div className="mt-8 flex flex-col gap-4">
                                <Button href="#" variant="outline">Fly With Us</Button>
                              </div>
                            </Popover.Panel>
                          </>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </Popover>
          </div>

        </Container>
      </nav>
    </header>
  )
}
