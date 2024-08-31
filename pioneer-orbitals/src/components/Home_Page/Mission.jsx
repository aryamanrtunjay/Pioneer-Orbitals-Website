import React from 'react'
import InfoCard from './InfoCard'
import Card1Image from '@/images/MissionCard1.png'

export default function Mission() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[80px] mb-10">Our Mission</h1>
      <div className="flex lg:flex-row md:flex-col gap-20 mx-12 mb-20">
        <InfoCard src={Card1Image} alt="Image of Earth" title="Expanding Access to Space" infoText="We believe that space should be accessible to anyone, regardless of size, location, or budget. Our mission is to democratize access to space through the development of innovative Small-Lift Vehicles (SLVs) that offer affordable and reliable launch solutions for small satellites and payloads."/>
        <InfoCard src={Card1Image} alt="Image of Earth" title="Expanding Access to Space" infoText="We believe that space should be accessible to anyone, regardless of size, location, or budget. Our mission is to democratize access to space through the development of innovative Small-Lift Vehicles (SLVs) that offer affordable and reliable launch solutions for small satellites and payloads."/>
        <InfoCard src={Card1Image} alt="Image of Earth" title="Expanding Access to Space" infoText="We believe that space should be accessible to anyone, regardless of size, location, or budget. Our mission is to democratize access to space through the development of innovative Small-Lift Vehicles (SLVs) that offer affordable and reliable launch solutions for small satellites and payloads."/>
      </div>
    </div>
  )
}
