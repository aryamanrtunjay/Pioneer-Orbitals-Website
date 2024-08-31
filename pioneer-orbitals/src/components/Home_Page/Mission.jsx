import React from 'react'
import InfoCard from './InfoCard'
import Card1Image from '@/images/MissionCard1.png'

export default function Mission() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[40px] lg:text-[80px] mb-10 text-center">Our Mission</h1>
      <div className="flex flex-col lg:flex-row gap-10 mx-12 mb-20 items-start">
        <InfoCard src={Card1Image} alt="Image of Earth" title="Expanding Access to Space" infoText="We believe that space should be accessible to anyone, regardless of size, location, or budget. Our mission is to democratize access to space through the development of innovative Small-Lift Vehicles (SLVs) that offer affordable and reliable launch solutions for small satellites and payloads."/>
        <InfoCard src={Card1Image} alt="Image of Earth" title="Expanding Access to Space" infoText="We believe that space should be accessible to anyone, regardless of size, location, or budget. Our mission is to democratize access to space through the development of innovative Small-Lift Vehicles (SLVs) that offer affordable and reliable launch solutions for small satellites and payloads."/>
        <InfoCard src={Card1Image} alt="Image of Earth" title="Expanding Access to Space" infoText="We believe that space should be accessible to anyone, regardless of size, location, or budget. Our mission is to democratize access to space through the development of innovative Small-Lift Vehicles (SLVs) that offer affordable and reliable launch solutions for small satellites and payloads."/>
      </div>
    </div>
  )
}
