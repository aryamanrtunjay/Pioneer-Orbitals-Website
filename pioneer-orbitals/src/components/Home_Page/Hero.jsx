import React from 'react'
import Image from 'next/image'
import HeroImage from '@/images/HeroImage.png'

export default function Hero() {
  return (
    <Image 
      className="opacity-40"
      src={HeroImage}
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      alt="Rocket leaving the Earth"
    />
  )
}
