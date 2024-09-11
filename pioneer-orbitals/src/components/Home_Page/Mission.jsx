'use client'

import React from 'react'
import InfoCard from './InfoCard'
import Card1Image from '@/images/MissionCard1.png'

export default function Mission() {

  const [open, setOpen] = React.useState(false);

  const toggle = (index) => {
    if(open === index) {
        return setOpen(null);
    }

    setOpen(index);
  }

  const cardData = [
    {
      id: 1,
      src: Card1Image,
      alt: "Image of Earth",
      title: "Expanding Access to Space",
      infoText: "We believe that space should be accessible to anyone, regardless of size, location, or budget. Our mission is to democratize access to space through the development of innovative Small-Lift Vehicles (SLVs) that offer affordable and reliable launch solutions for small satellites and payloads."

    },
    {
      id: 2,
      src: Card1Image,
      alt: "Image of Earth",
      title: "Driving Innovation in Space Technology",
      infoText: "At Pioneer Orbitals, we are advancing rocket technology with a focus on reusability, efficiency, and sustainability. Our cutting-edge SLV designs are optimized for low-mass payloads, offering cost-effective launch solutions while minimizing environmental impact. We are committed to innovations that will shape the future of space exploration."
    },
    {
      id: 3,
      src: Card1Image,
      alt: "Image of Earth",
      title: "Enabling Future Space Based Economies",
      infoText: "We envision a future where space becomes a hub of economic activity. Pioneer Orbitals aims to build the infrastructure needed for space-based industries, from communications to resource extraction. Our long-term goal is to enable scalable space economies, fostering sustainable exploration and future human space travel."
    }    
  ]

  return (
    <div className="flex flex-col justify-center items-center mb-20">
      <h1 className="text-[40px] lg:text-[80px] mb-10 text-center">Our Mission</h1>
      <div className="flex flex-col lg:flex-row gap-20 mx-12 mb-20 items-start">
        {cardData.map((data, index) => {
          return <InfoCard key={index} open={index === open} src={data.src} alt={data.alt} title={data.title} infoText={data.infoText} toggle={() => toggle(index)}/>  
        })}
      </div>
    </div>
  )
}
