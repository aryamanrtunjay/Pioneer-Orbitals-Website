'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Head from "next/head";
import Image from 'next/image';
import HeroImage from '@/images/HeroImage.png'
import AboutImage from '@/images/About.webp'

// Hero Section
const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Space background */}
      <div className="absolute inset-0 bg-gray-900">
        <Image
          className="fixed opacity-30 z-0"
          src={HeroImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Earth as seen from space"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#fdbd53]">Pioneering</span> Space for All
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-3xl text-gray-200 mb-7 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Reshaping the scope of orbital spaceflight for a brighter future
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        > 
          <motion.button 
            className="bg-[#fdbd53] hover:bg-[#cc7900] text-gray-900 font-bold py-3 px-8 rounded-full text-lg mr-4 transition-colors"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(253, 189, 83)" }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve A Seat
          </motion.button>
        </motion.div>
        
      </div>
    </div>
  );
};

// About Section
const AboutSection = () => {
  return (
    <div className="py-20 bg-gray-900" id="about">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">About <span className="text-[#fdbd53]">Pioneer Orbitals</span></h2>
          <div className="w-24 h-1 bg-[#cc7900] mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Our Mission</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pioneer Orbitals is dedicated to revolutionizing access to space with affordable, reusable Small-Lift Vehicles designed specifically for small satellite deployment.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              By focusing on efficiency and sustainability, we're reducing both costs and environmental impact, making space accessible to a wider range of industries and innovators.
            </p>
            <motion.button 
              className="bg-transparent border-2 border-[#fdbd53] text-[#fdbd53] hover:bg-[#fdbd53] hover:text-gray-900 font-bold py-3 px-8 rounded-full text-sm transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(253, 189, 83)" }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
          
          <motion.div
            className="relative h-80 rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Here we would use an actual company image */}
            <Image
              className="fixed z-0 w-24 h-24"
              src={AboutImage}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Satellite in orbit"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#fdbd53] to-[#cc7900] opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      title: "Small-Lift Vehicles",
      description: "Our SLVs are designed for maximum efficiency and reusability, reducing the cost of reaching orbit by up to 60%.",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Satellite Deployment",
      description: "Specialized deployment systems for small satellites, ensuring precise orbit placement and minimal deployment risks.",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Sustainable Technology",
      description: "Eco-friendly propulsion systems and materials that minimize environmental impact while maximizing performance.",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "Launch Services",
      description: "End-to-end launch services, handling everything from regulatory compliance to mission control and tracking.",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="py-20 bg-gray-800" id="services">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our <span className="text-[#fdbd53]">Services</span></h2>
          <div className="w-24 h-1 bg-[#cc7900] mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            We offer comprehensive space launch solutions designed specifically for small satellites, making space more accessible for everyone.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)" }}
            >
              <div className="text-[#fdbd53] mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Technology Section
const TechnologySection = () => {
  return (
    <div className="py-20 bg-gray-900" id="technology">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our <span className="text-[#fdbd53]">Technology</span></h2>
          <div className="w-24 h-1 bg-[#cc7900] mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Revolutionary Propulsion Systems</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our proprietary propulsion technology reduces fuel consumption by 30% compared to industry standards, allowing for more efficient and cost-effective launches.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-[#fdbd53] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Reusable first-stage boosters with rapid turnaround time</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-[#fdbd53] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Eco-friendly propellants that minimize environmental impact</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-[#fdbd53] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Advanced guidance systems for precise orbit placement</span>
              </li>
            </ul>
            <motion.button 
              className="bg-transparent border-2 border-[#fdbd53] text-[#fdbd53] hover:bg-[#fdbd53] hover:text-gray-900 font-bold py-3 px-8 rounded-full text-sm transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(253, 189, 83)" }}
              whileTap={{ scale: 0.95 }}
            >
              Read Our Whitepaper
            </motion.button>
          </motion.div>
          
          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden bg-gray-800">
              {/* We would use an actual rocket/technology image here */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#cc7900] to-transparent opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-32 h-32 bg-[#fdbd53] bg-opacity-20 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                >
                  <div className="w-24 h-24 bg-[#fdbd53] bg-opacity-30 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#fdbd53] rounded-full"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Benefits/Stats Section
const StatsSection = () => {
  const stats = [
    { number: "60%", label: "Cost Reduction" },
    { number: "100%", label: "Rocket Reused" },
    { number: "48h", label: "Turnaround Time" },
    { number: "99.98%", label: "Mission Success Rate" }
  ];

  return (
    <div className="py-16 bg-[#fdbd53]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.1 + index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-lg font-medium text-gray-800">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Vision Section
const VisionSection = () => {
  return (
    <div className="py-20 bg-gray-900" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-[#fdbd53]">Vision</span> for the Future
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We envision a future where space becomes an economic hub – accessible to industries, researchers, and innovators worldwide. By democratizing access to space, Pioneer Orbitals is building the infrastructure for the next chapter of human exploration and innovation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block"
          >
            <motion.button 
              className="bg-[#fdbd53] hover:bg-[#cc7900] text-gray-900 font-bold py-3 px-10 rounded-full text-lg transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(253, 189, 83, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Mission
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Main content sections have been preserved

// Main Landing Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Pioneer Orbitals | Making Space Accessible</title>
        <meta name="description" content="Pioneer Orbitals is focused on making space accessible with affordable, reusable Small-Lift Vehicles (SLVs) for small satellites." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechnologySection />
      <StatsSection />
      <VisionSection />
    </div>
  );
}