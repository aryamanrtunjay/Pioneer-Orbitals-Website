'use client';

import React from 'react';
import { motion } from 'framer-motion';
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

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        {/* Background with parallax effect */}
        <div className="absolute inset-0 bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/space-background.jpg')] bg-cover bg-center opacity-40"></div>
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
              Pioneering the New <span className="text-[#fdbd53]">Space Economy</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Making space accessible for innovators, researchers, and businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="md:w-1/2"
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-[#fdbd53]">Story</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pioneer Orbitals was founded in 2019 by a team of aerospace engineers and entrepreneurs who shared a common vision: to revolutionize access to space by developing affordable, reusable launch vehicles designed specifically for small satellites.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                What began as a small startup in a garage has quickly grown into one of the most innovative companies in the commercial space industry. Our team's expertise spans propulsion systems, avionics, materials science, and mission operations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, Pioneer Orbitals stands at the forefront of the small satellite launch market, with our revolutionary SLV (Small-Lift Vehicle) technology making space more accessible than ever before.
              </p>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 relative h-80 md:h-96 rounded-lg overflow-hidden"
              variants={fadeIn}
            >
              {/* Here we would use an actual company image */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#fdbd53] to-[#cc7900] opacity-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-64 h-64 rounded-full bg-gray-800 p-2 flex items-center justify-center"
                  animate={{ 
                    rotateZ: [0, 360],
                    boxShadow: ["0px 0px 0px rgba(253, 189, 83, 0.3)", "0px 0px 30px rgba(253, 189, 83, 0.6)", "0px 0px 0px rgba(253, 189, 83, 0.3)"]
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity,
                    ease: "linear", 
                    times: [0, 0.5, 1]
                  }}
                >
                  <div className="w-full h-full rounded-full border-4 border-[#fdbd53] border-opacity-30 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 rounded-full bg-gray-800 flex items-center justify-center">
                      <div className="w-1/2 h-1/2 rounded-full bg-[#fdbd53]"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our <span className="text-[#fdbd53]">Mission & Vision</span></h2>
            <div className="w-24 h-1 bg-[#cc7900] mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 text-[#fdbd53]">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To revolutionize access to space by providing affordable, reliable, and sustainable launch services for small satellites, enabling innovation and economic growth beyond Earth's atmosphere.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-6 text-[#fdbd53]">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To create a future where space becomes an economic hub – accessible to industries, researchers, and innovators worldwide, fostering a sustainable multi-planetary economy that benefits all of humanity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our <span className="text-[#fdbd53]">Core Values</span></h2>
            <div className="w-24 h-1 bg-[#cc7900] mx-auto"></div>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Innovation",
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                description: "We continuously push the boundaries of what's possible in space technology."
              },
              {
                title: "Sustainability",
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
                description: "We develop technologies that minimize environmental impact and promote responsible use of space."
              },
              {
                title: "Accessibility",
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
                description: "We believe space should be accessible to all innovators, not just major governments and corporations."
              },
              {
                title: "Excellence",
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                description: "We maintain the highest standards of quality and safety in everything we do."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-700"
                variants={fadeIn}
                whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)" }}
              >
                <div className="text-[#fdbd53] mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Our Journey Timeline */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our <span className="text-[#fdbd53]">Journey</span></h2>
            <div className="w-24 h-1 bg-[#cc7900] mx-auto"></div>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#fdbd53] opacity-30"></div>
            
            {[
              {
                year: "2019",
                title: "Foundation",
                description: "Pioneer Orbitals was founded by a team of aerospace engineers with a vision to democratize access to space."
              },
              {
                year: "2020",
                title: "First Prototype",
                description: "Successfully tested our first SLV propulsion system prototype, achieving key performance milestones."
              },
              {
                year: "2021",
                title: "Series A Funding",
                description: "Secured $45 million in Series A funding to accelerate development of our first flight-ready vehicle."
              },
              {
                year: "2022",
                title: "First Test Flight",
                description: "Conducted our first successful sub-orbital test flight, validating our core technologies."
              },
              {
                year: "2023",
                title: "First Commercial Contract",
                description: "Signed our first commercial launch contract with a leading satellite communications provider."
              },
              {
                year: "2024",
                title: "Orbital Success",
                description: "Achieved our first successful orbital deployment of a customer payload."
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                className={`flex items-center justify-between mb-16 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Content */}
                <div className="w-5/12">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-[#fdbd53] transition-colors">
                    <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Year Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gray-900 border-4 border-[#fdbd53] flex items-center justify-center">
                    <span className="text-[#fdbd53] font-bold">{milestone.year}</span>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our <span className="text-[#fdbd53]">Leadership Team</span></h2>
            <div className="w-24 h-1 bg-[#cc7900] mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Driven by innovation and expertise, our leadership team brings decades of combined experience in aerospace engineering, business, and technology.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Dr. Alexandra Chen",
                position: "Founder & CEO",
                bio: "Former SpaceX propulsion engineer with a Ph.D. in Aerospace Engineering from MIT."
              },
              {
                name: "Marcus Williams",
                position: "CTO",
                bio: "20+ years experience in aerospace with expertise in propulsion systems and avionics."
              },
              {
                name: "Sarah Rodriguez",
                position: "COO",
                bio: "Former NASA operations lead with experience managing complex space missions."
              },
              {
                name: "James Chen",
                position: "Chief Engineer",
                bio: "Pioneered multiple breakthrough technologies in reusable rocket systems."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700"
                variants={fadeIn}
                whileHover={{ y: -10 }}
              >
                <div className="h-64 bg-gray-700 relative">
                  {/* Here we would use actual team member photos */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#fdbd53] to-[#cc7900] opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center">
                      <svg className="w-12 h-12 text-[#fdbd53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-[#fdbd53] mb-4">{member.position}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-[#fdbd53]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "35+", label: "Team Members" },
              { number: "12", label: "Patents" },
              { number: "8", label: "Successful Launches" },
              { number: "24+", label: "Satellites Deployed" }
            ].map((stat, index) => (
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
      </section>
      
      {/* Join Us CTA */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Join Our <span className="text-[#fdbd53]">Mission</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Whether you're a potential customer, investor, or talented individual looking to make an impact, we'd love to hear from you. Together, we're building the infrastructure for humanity's future in space.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.button 
                className="bg-[#fdbd53] hover:bg-[#cc7900] text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-colors"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(253, 189, 83, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Join Our Team
              </motion.button>
              
              <motion.button 
                className="bg-transparent border-2 border-[#fdbd53] text-[#fdbd53] hover:bg-[#fdbd53] hover:text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-colors"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(253, 189, 83, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;