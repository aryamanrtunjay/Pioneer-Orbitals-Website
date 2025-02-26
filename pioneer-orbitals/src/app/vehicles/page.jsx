'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6 }
  }
};

const VehiclesPage = () => {
  // State for the active vehicle tab
  const [activeVehicle, setActiveVehicle] = useState('horizon');

  // Vehicle data
  const vehicles = {
    'horizon': {
      name: 'Horizon SLV-100',
      tagline: 'Our Flagship Small-Lift Vehicle',
      description: 'The Horizon SLV-100 is our flagship small satellite launch vehicle, designed for maximum reusability and cost-efficiency. With its innovative propulsion system and lightweight carbon composite structure, the Horizon can deliver payloads of up to 100kg to low Earth orbit at a fraction of traditional launch costs.',
      features: [
        'Fully reusable first stage with rapid turnaround capability',
        'Proprietary "CleanThrust" propulsion technology',
        'Automated flight systems with redundant safety protocols',
        'Customizable payload adapters for various satellite configurations',
        'Carbon-neutral operations through sustainable fuel and carbon offsets'
      ],
      specs: {
        height: '18 meters',
        diameter: '1.5 meters',
        stages: '2 stages',
        payload: 'Up to 100kg to LEO',
        orbits: 'LEO, SSO, MEO',
        launchPrice: '$2.5M per launch',
        reuseCapability: '20+ launches per first stage'
      },
      image: '/images/horizon-slv.jpg' // This would be replaced with an actual image path
    },
    'starpath': {
      name: 'StarPath SLV-300',
      tagline: 'Medium Capacity with Unmatched Efficiency',
      description: 'The StarPath SLV-300 builds on our proven technology to offer greater payload capacity while maintaining industry-leading cost efficiency. Designed for constellation deployments and larger satellites, the StarPath offers flexible mission profiles and our signature rapid launch capability.',
      features: [
        'Enhanced payload capacity for constellation deployments',
        'Multi-satellite deployment capability',
        'Advanced cryogenic upper stage for precise orbital insertions',
        'Extended mission duration capabilities',
        'Optional kick stage for higher energy orbits'
      ],
      specs: {
        height: '22 meters',
        diameter: '2.2 meters',
        stages: '2 stages + optional kick stage',
        payload: 'Up to 300kg to LEO',
        orbits: 'LEO, SSO, MEO, GTO',
        launchPrice: '$5.8M per launch',
        reuseCapability: '15+ launches per first stage'
      },
      image: '/images/starpath-slv.jpg' // This would be replaced with an actual image path
    },
    'voyager': {
      name: 'Voyager SLV-Micro',
      tagline: 'Dedicated Launches for CubeSats',
      description: 'The Voyager SLV-Micro is our dedicated CubeSat launcher, perfect for educational institutions, research organizations, and startups entering the space economy. The Voyager offers dedicated, precise deployment for small payloads at an accessible price point, democratizing access to space.',
      features: [
        'Optimized for standard CubeSat form factors',
        'Rapid launch scheduling with 30-day lead times',
        'Simplified mission planning and integration process',
        'Mobile launch capability for various launch locations',
        'Educational and research institution discounts available'
      ],
      specs: {
        height: '12 meters',
        diameter: '1.0 meter',
        stages: '2 stages',
        payload: 'Up to 20kg to LEO',
        orbits: 'LEO, SSO',
        launchPrice: '$990K per launch',
        reuseCapability: '25+ launches per first stage'
      },
      image: '/images/voyager-slv.jpg' // This would be replaced with an actual image path
    }
  };

  return (
    <div>
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        {/* Background with parallax effect */}
        <div className="absolute inset-0 bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/rocket-launch.jpg')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our <span className="text-[#fdbd53]">Vehicle Fleet</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Engineered for reliability, efficiency, and sustainability – our Small-Lift Vehicles are revolutionizing access to space.
            </p>
            <motion.button 
              className="bg-[#fdbd53] hover:bg-[#cc7900] text-gray-900 font-bold py-3 px-8 rounded-full text-lg mr-4"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(253, 189, 83)" }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Launch
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* Vehicle Showcase Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our <span className="text-[#fdbd53]">SLV Fleet</span></h2>
            <div className="w-24 h-1 bg-[#cc7900] mx-auto"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              From microsat launches to constellation deployments, our vehicles are designed to meet the diverse needs of the small satellite market.
            </p>
          </motion.div>
          
          {/* Vehicle Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {Object.keys(vehicles).map((key) => (
                <motion.button
                  key={key}
                  className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
                    activeVehicle === key 
                      ? 'bg-[#fdbd53] text-gray-900' 
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveVehicle(key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {vehicles[key].name}
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* Vehicle Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVehicle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700 aspect-video relative">
                  {/* Image placeholder - would be replaced with actual vehicle images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#fdbd53] to-gray-800 opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0], 
                        rotate: [0, 1, 0, -1, 0],
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 5,
                        ease: "easeInOut" 
                      }}
                      className="w-3/4 h-3/4"
                    >
                      {/* This would be replaced with an actual image of the vehicle */}
                      <svg className="w-full h-full text-[#fdbd53]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L8 20H11L12 23L13 20H16L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4.93 13C2.65 13 2 11.5 2 10C2 8.5 3.5 6.5 5 8C6.5 9.5 8.07 13 4.93 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19.07 13C21.35 13 22 11.5 22 10C22 8.5 20.5 6.5 19 8C17.5 9.5 15.93 13 19.07 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{vehicles[activeVehicle].name}</h3>
                <p className="text-xl text-[#fdbd53] mb-6">{vehicles[activeVehicle].tagline}</p>
                <p className="text-gray-300 mb-8">
                  {vehicles[activeVehicle].description}
                </p>
                
                <h4 className="text-xl font-semibold text-white mb-4">Key Features:</h4>
                <ul className="space-y-2 mb-8">
                  {vehicles[activeVehicle].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-[#fdbd53] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-4">
                  <motion.button 
                    className="bg-[#fdbd53] hover:bg-[#cc7900] text-gray-900 font-semibold py-2 px-6 rounded-full transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request Vehicle Specs
                  </motion.button>
                  
                  <motion.button 
                    className="bg-transparent border-2 border-[#fdbd53] text-[#fdbd53] hover:bg-[#fdbd53] hover:text-gray-900 font-semibold py-2 px-6 rounded-full transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule Consultation
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      
      {/* Technical Specifications Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Technical <span className="text-[#fdbd53]">Specifications</span></h2>
            <div className="w-24 h-1 bg-[#cc7900] mx-auto"></div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="overflow-x-auto"
          >
            <table className="w-full bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-6 py-4 text-left text-sm font-medium text-white">Specification</th>
                  {Object.keys(vehicles).map((key) => (
                    <th 
                      key={key} 
                      className={`px-6 py-4 text-left text-sm font-medium ${
                        activeVehicle === key ? 'text-[#fdbd53]' : 'text-white'
                      }`}
                    >
                      {vehicles[key].name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {Object.keys(vehicles.horizon.specs).map((spec, index) => (
                  <tr key={spec} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}>
                    <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
                      {spec.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })}
                    </td>
                    {Object.keys(vehicles).map((key) => (
                      <td 
                        key={key} 
                        className={`px-6 py-4 text-sm whitespace-nowrap ${
                          activeVehicle === key ? 'text-[#fdbd53] font-medium' : 'text-gray-300'
                        }`}
                      >
                        {vehicles[key].specs[spec]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
      
      {/* Technology Innovations Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our <span className="text-[#fdbd53]">Technology Innovations</span></h2>
            <div className="w-24 h-1 bg-[#cc7900] mx-auto"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Pioneer Orbitals' vehicles incorporate several proprietary technologies that set us apart from traditional launch providers.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "CleanThrust™ Propulsion",
                description: "Our proprietary propulsion system uses non-toxic propellants and achieves 30% greater efficiency than traditional rocket engines, drastically reducing launch costs.",
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Rapid Reusability",
                description: "Unlike traditional rockets, our vehicles can be turned around for a new mission in just 48 hours, thanks to our innovative automated inspection and refurbishment process.",
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                )
              },
              {
                title: "Carbon Composite Structures",
                description: "Our advanced carbon fiber composites reduce vehicle weight by 40% compared to traditional aluminum structures, allowing for greater payload capacity and fuel efficiency.",
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )
              },
              {
                title: "Autonomous Flight Systems",
                description: "Our vehicles employ advanced AI-driven flight control systems that continuously optimize trajectory and fuel consumption during ascent, improving mission success rates.",
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                )
              },
              {
                title: "Multi-Orbit Capability",
                description: "Our upper stage design allows for multiple engine restarts, enabling delivery of satellites to different orbital planes in a single mission – perfect for constellation deployments.",
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Precision Landing System",
                description: "Our vehicles utilize advanced radar and optical guidance systems to achieve pinpoint landing accuracy, enabling recovery from diverse launch locations and trajectories.",
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                )
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-[#fdbd53] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="text-[#fdbd53] mb-6">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{tech.title}</h3>
                <p className="text-gray-400">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Comparison With Traditional Rockets */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose <span className="text-[#fdbd53]">Pioneer Orbitals</span></h2>
            <div className="w-24 h-1 bg-[#cc7900] mx-auto"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              See how our Small-Lift Vehicles compare to traditional launch options for small satellite missions.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-3">
              <div className="p-8 border-b md:border-b-0 md:border-r border-gray-700">
                <div className="text-center">
                  <div className="inline-block p-4 rounded-full bg-gray-800 mb-4">
                    <svg className="w-10 h-10 text-[#fdbd53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">60% Cost Reduction</h3>
                  <p className="text-gray-400">
                    Our reusable technology and efficient operations dramatically reduce launch costs compared to traditional providers.
                  </p>
                </div>
              </div>
              
              <div className="p-8 border-b md:border-b-0 md:border-r border-gray-700">
                <div className="text-center">
                  <div className="inline-block p-4 rounded-full bg-gray-800 mb-4">
                    <svg className="w-10 h-10 text-[#fdbd53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Rapid Deployment</h3>
                  <p className="text-gray-400">
                    Launch your satellite in months, not years. Our streamlined mission planning and integration process accelerates your path to orbit.
                  </p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-center">
                  <div className="inline-block p-4 rounded-full bg-gray-800 mb-4">
                    <svg className="w-10 h-10 text-[#fdbd53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Dedicated Service</h3>
                  <p className="text-gray-400">
                    No more rideshare compromises. Get your exact orbit, on your timeline, with our dedicated small satellite launch service.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-[#fdbd53] bg-opacity-10 border border-[#fdbd53] rounded-lg p-6">
              <div className="flex items-start">
                <svg className="w-12 h-12 text-[#fdbd53] mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Did You Know?</h4>
                  <p className="text-gray-300">
                    Traditional rockets often charge small satellite operators $25,000-$50,000 per kilogram as rideshare passengers, with limited orbit options and launch dates. Pioneer Orbitals' dedicated small satellite launches start at just $15,000 per kilogram with precision orbital placement and flexible scheduling.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Sustainability Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Committed to <span className="text-[#fdbd53]">Sustainability</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At Pioneer Orbitals, we believe that expanding into space should not come at the expense of our home planet. Our vehicles are designed from the ground up with sustainability in mind.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#fdbd53] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Non-toxic propellants that eliminate harmful pollutants</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#fdbd53] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Fully reusable vehicles that minimize manufacturing waste</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#fdbd53] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Carbon-neutral operations through clean energy and offsets</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#fdbd53] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">End-of-life satellite deorbit assistance to reduce space debris</span>
                </li>
              </ul>
              <motion.button 
                className="bg-[#fdbd53] hover:bg-[#cc7900] text-gray-900 font-semibold py-2 px-6 rounded-full transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Environmental Commitment
              </motion.button>
            </motion.div>
            
            <motion.div
              className="relative h-96 rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Here we would use an actual image related to sustainability */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#fdbd53] to-[#cc7900] opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-48 h-48 rounded-full flex items-center justify-center"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0px rgba(253, 189, 83, 0.2)",
                      "0 0 0 20px rgba(253, 189, 83, 0.2)",
                      "0 0 0 40px rgba(253, 189, 83, 0.2)",
                      "0 0 0 60px rgba(253, 189, 83, 0)",
                    ]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 3
                  }}
                >
                  <div className="w-36 h-36 rounded-full bg-gray-800 flex items-center justify-center border-4 border-[#fdbd53]">
                    <svg className="w-20 h-20 text-[#fdbd53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Next Generation Vehicle Teaser */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
        {/* Background effect */}
        <motion.div 
          className="absolute inset-0 bg-[url('/images/stars-bg.jpg')] bg-cover bg-center opacity-20"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut" 
          }}
        ></motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-6 py-2 bg-[#fdbd53] bg-opacity-20 rounded-full">
              <span className="text-[#fdbd53] font-semibold">Coming 2026</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Introducing the <span className="text-[#fdbd53]">Aurora SLV-500</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our next-generation vehicle will expand our payload capacity to 500kg while maintaining industry-leading cost efficiency and sustainability. The Aurora represents the next evolution in our mission to democratize access to space.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                className="bg-[#fdbd53] hover:bg-[#cc7900] text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-colors"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(253, 189, 83, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
              
              <motion.button 
                className="bg-transparent border-2 border-[#fdbd53] text-[#fdbd53] hover:bg-[#fdbd53] hover:text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-colors"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(253, 189, 83, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Reserve Capacity
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-80 w-full max-w-2xl">
              {/* Rocket silhouette placeholder - would be replaced with actual concept art */}
              <motion.div
                className="absolute inset-0 flex justify-center"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut" 
                }}
              >
                <svg className="h-full text-[#fdbd53] opacity-30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L8 20H11L12 23L13 20H16L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.93 13C2.65 13 2 11.5 2 10C2 8.5 3.5 6.5 5 8C6.5 9.5 8.07 13 4.93 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.07 13C21.35 13 22 11.5 22 10C22 8.5 20.5 6.5 19 8C17.5 9.5 15.93 13 19.07 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              
              {/* Glow effect */}
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                animate={{ 
                  boxShadow: [
                    "0 0 60px 30px rgba(253, 189, 83, 0.1)",
                    "0 0 70px 35px rgba(253, 189, 83, 0.2)",
                    "0 0 60px 30px rgba(253, 189, 83, 0.1)",
                  ]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                }}
                style={{ width: '10px', height: '10px' }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#fdbd53]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Ready to Launch Your Mission?</h3>
              <p className="text-lg text-gray-800">
                Contact our team to discuss your satellite launch needs and get a customized quote.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Launch
              </motion.button>
              
              <motion.button 
                className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#fdbd53] font-bold py-3 px-8 rounded-full text-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Brochure
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VehiclesPage;