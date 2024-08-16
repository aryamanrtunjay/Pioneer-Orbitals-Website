"use client"

import React, { useState } from 'react'
import { navData } from "@/constants"
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

export default function NavLinks() {
    const [hoverIndex, setHoverIndex] = useState(null);

    return <> {
        navData.map(({ _id, title, href }) => (
            <Link
                key={_id}
                href={href}
                className="relative -mx-3 -my-2 px-1 rounded-lg py-1 text-base
                text-gray-200 transition-colors"
                onMouseEnter={() => setHoverIndex(_id)}
                onMouseLeave={() => setHoverIndex(null)}
            >   
                <AnimatePresence>
                    {hoverIndex === _id && (
                        <motion.span
                            className="absolute border-b-2 border-lime-500 inset-0"
                            layoutId="hoverBackground"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: {duration: 0.15}}}
                            exit={{opacity: 0, transition: {duration: 0.15, delay: 0.2}}}
                        />
                    )}
                </AnimatePresence>
                <span className="relative z-10">{title}</span>
            </Link>
        ))
    }
    </>
}
