"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

import Image1 from "@/images/About/Team1.jpg";
import Image2 from "@/images/About/Team2.jpg";
import Image3 from "@/images/About/Team3.jpg";

const TEAM_DATA = [
  {
    name: "Aryaman Rtunjay",
    title: "CEO & Founder",
    imageSrc: Image1,
    bio: `
      Aryaman has been interested in spaceflight and rocketry
      from a very young age. Upon seeing the current goals of
      the public and private launch sectors, he realized the
      need for democratized access to space and founded Pioneer Orbitals.
    `,
  },
  {
    name: "Jane Doe",
    title: "CTO",
    imageSrc: Image2,
    bio: `
      Jane is a seasoned aerospace engineer with a passion for 
      cutting-edge propulsion technologies. She leads the technical strategy 
      and fosters innovation across all engineering teams.
    `,
  },
  {
    name: "John Smith",
    title: "COO",
    imageSrc: Image3,
    bio: `
      John has a background in business development and finance. 
      He is responsible for the company's operations and financial health.
    `,
  },
];

// Reusable Card
function TeamMemberCard({ name, title, imageSrc, bio }) {
  const [expanded, setExpanded] = useState(false);

  // Toggle expand/collapse by clicking anywhere on the card
  const handleToggle = () => setExpanded((prev) => !prev);

  return (
    <motion.div
      layout
      onClick={handleToggle}
      className="
        relative 
        w-80 sm:w-96
        rounded-xl
        bg-white/5 backdrop-blur-md text-white
        overflow-hidden cursor-pointer
        shadow-md hover:shadow-xl transition-shadow
      "
    >
      {/* -- Animated container for the background image -- */}
      <motion.div
        className="relative w-full h-96 /* Increased image height */"
        initial={{ filter: "brightness(0.4) blur(0px)" }}
        animate={
          expanded
            ? { filter: "brightness(0.25) blur(8px)" }
            : { filter: "brightness(0.4) blur(0px)" }
        }
        transition={{ duration: 0.3 }}
      >
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* 
        Overlay content container:
        absolutely covers the card for text/arrow layering.
      */}
      <motion.div
        layout
        className="absolute inset-0 flex flex-col items-center pointer-events-none"
      >
        {/* Name + Title always present. */}
        <div className="mt-6 px-4 text-center">
          <h3 className="text-2xl tracking-widest font-thin mb-1">{name}</h3>
          <p className="text-lg tracking-widest text-gray-200">{title}</p>
        </div>

        {/* Arrow pinned at bottom center, rotates 180 deg when expanded */}
        <motion.div
          layout
          className="absolute bottom-3 mx-auto pointer-events-none"
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <IoIosArrowDown className="text-3xl" />
        </motion.div>

        {/* Bio text: conditionally rendered with AnimatePresence */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              key="bio"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: -40 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="
                mt-auto mb-5 lg:mb-8 px-4 text-center text-lg
                pointer-events-none
              "
            >
              {bio}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

// Example "Meet The Team" section
export default function MeetTheTeam() {
  return (
    <section className="py-16 px-4 bg-[#1E1E1E] text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Meet The Team
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {TEAM_DATA.map((member, idx) => (
          <TeamMemberCard key={idx} {...member} />
        ))}
      </div>
    </section>
  );
}
