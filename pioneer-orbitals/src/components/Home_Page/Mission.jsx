import React from 'react'
import InfoCard from './InfoCard'
import Card1Image from '@/images/MissionCard1.png'

export default function Mission() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[80px] mb-10">Our Mission</h1>
      <div className="flex flex-row justify-center items-center gap-20 mx-12 mb-20">
        <InfoCard src={Card1Image} alt="Image of Earth" title="Expanding Access to Space"/>
        <InfoCard src={Card1Image} alt="Image of Earth" title="Expanding Access to Space"/>
        <InfoCard src={Card1Image} alt="Image of Earth" title="Expanding Access to Space"/>
      </div>
    </div>
  )
}
