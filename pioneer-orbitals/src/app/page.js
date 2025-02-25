'use client';

// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

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

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Head>
        <title>Pioneer Orbitals | Affordable Space Access</title>
        <meta name="description" content="Pioneer Orbitals provides affordable, reusable Small-Lift Vehicles (SLVs) for small satellites, making space accessible for all." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <header className="fixed w-full z-50 bg-opacity-95 bg-gray-900 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            {/* Logo placeholder - replace with actual logo */}
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#fdbd53] to-[#cc7900]"></div>
              <span className="font-bold text-xl text-[#fdbd53]">Pioneer Orbitals</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:flex space-x-8"
          >
            <a href="#about" className="hover:text-[#fdbd53] transition-colors">About</a>
            <a href="#technology" className="hover:text-[#fdbd53] transition-colors">Technology</a>
            <a href="#benefits" className="hover:text-[#fdbd53] transition-colors">Benefits</a>
            <a href="#contact" className="hover:text-[#fdbd53] transition-colors">Contact</a>
            <motion.a 
              href="#reservations" 
              className="px-4 py-2 bg-[#cc7900] hover:bg-[#fdbd53] rounded-full text-white font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Flight
            </motion.a>
          </motion.nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-800"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              <a href="#about" className="py-2 hover:text-[#fdbd53]">About</a>
              <a href="#technology" className="py-2 hover:text-[#fdbd53]">Technology</a>
              <a href="#benefits" className="py-2 hover:text-[#fdbd53]">Benefits</a>
              <a href="#contact" className="py-2 hover:text-[#fdbd53]">Contact</a>
              <a href="#reservations" className="py-2 px-4 bg-[#cc7900] hover:bg-[#fdbd53] rounded-full text-white font-medium text-center">Book a Flight</a>
            </div>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <motion.section 
          style={{ opacity, scale }}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            {/* Background image/gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-gray-900 z-10"></div>
            <div className="h-full w-full bg-[url('/space-bg.jpg')] bg-cover bg-center"></div>
          </div>

          <div className="container mx-auto px-4 z-10 relative">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 text-white"
                variants={fadeIn}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fdbd53] to-[#cc7900]">
                  Space Access
                </span>{" "}
                for Everyone
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl mb-8 text-gray-300"
                variants={fadeIn}
              >
                Affordable, reusable Small-Lift Vehicles making space accessible for small satellites and beyond.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4"
                variants={fadeIn}
              >
                <motion.a 
                  href="#reservations" 
                  className="px-8 py-3 bg-[#fdbd53] hover:bg-[#cc7900] rounded-full text-gray-900 font-bold text-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reserve Your Flight
                </motion.a>
                <motion.a 
                  href="#technology" 
                  className="px-8 py-3 border-2 border-[#fdbd53] hover:border-[#cc7900] rounded-full text-white font-bold text-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Technology
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-center"
                variants={fadeIn}
              >
                About <span className="text-[#fdbd53]">Pioneer Orbitals</span>
              </motion.h2>

              <motion.div 
                className="grid md:grid-cols-2 gap-8 items-center"
                variants={fadeIn}
              >
                <div>
                  <p className="text-gray-300 mb-4">
                    Pioneer Orbitals is focused on making space accessible with affordable, reusable Small-Lift Vehicles (SLVs) for small satellites and beyond.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Our mission is to reduce the cost and environmental impact of space access, creating sustainable rocket solutions that open up new economic opportunities in Earth&aposs orbit and beyond.
                  </p>
                  <p className="text-gray-300">
                    We envision space as a future economic hub for industries and exploration, where access is no longer the privilege of few but the opportunity of many.
                  </p>
                </div>
                <motion.div 
                  className="rounded-lg overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-64 bg-[url('/rocket-display.jpg')] bg-cover bg-center rounded-lg"></div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                variants={fadeIn}
              >
                Our <span className="text-[#fdbd53]">Technology</span>
              </motion.h2>
              <motion.p 
                className="text-gray-300 text-lg"
                variants={fadeIn}
              >
                Cutting-edge rocket technology designed for efficiency, sustainability, and affordability.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div 
                className="bg-gray-900 rounded-lg p-6 shadow-lg"
                variants={fadeIn}
                whileHover={{ y: -10 }}
              >
                <div className="h-12 w-12 bg-[#fdbd53] rounded-full mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Reusable SLVs</h3>
                <p className="text-gray-400">
                  Our Small-Lift Vehicles are designed for multiple launches, drastically reducing the cost per kilogram to orbit.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-900 rounded-lg p-6 shadow-lg"
                variants={fadeIn}
                whileHover={{ y: -10 }}
              >
                <div className="h-12 w-12 bg-[#fdbd53] rounded-full mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Eco-Friendly Propulsion</h3>
                <p className="text-gray-400">
                  Our advanced propulsion systems minimize environmental impact while maximizing thrust efficiency.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-900 rounded-lg p-6 shadow-lg"
                variants={fadeIn}
                whileHover={{ y: -10 }}
              >
                <div className="h-12 w-12 bg-[#fdbd53] rounded-full mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Modular Payloads</h3>
                <p className="text-gray-400">
                  Customizable payload configurations allow for maximum flexibility for different satellite deployment needs.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
                variants={fadeIn}
              >
                Why Choose <span className="text-[#fdbd53]">Pioneer Orbitals</span>
              </motion.h2>

              <motion.div 
                className="space-y-8"
                variants={staggerContainer}
              >
                <motion.div 
                  className="flex items-start gap-6"
                  variants={fadeIn}
                >
                  <div className="flex-shrink-0 h-12 w-12 bg-[#cc7900] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Cost Efficiency</h3>
                    <p className="text-gray-300">
                      Our reusable rocket technology reduces launch costs by up to 60% compared to traditional single-use vehicles, making space access affordable for businesses of all sizes.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-6"
                  variants={fadeIn}
                >
                  <div className="flex-shrink-0 h-12 w-12 bg-[#cc7900] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Rapid Deployment</h3>
                    <p className="text-gray-300">
                      From contract to launch in as little as 3 months, our streamlined process gets your satellites into orbit faster than ever before.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-6"
                  variants={fadeIn}
                >
                  <div className="flex-shrink-0 h-12 w-12 bg-[#cc7900] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Customizable Solutions</h3>
                    <p className="text-gray-300">
                      Our modular approach allows for tailored launch solutions, from single satellite deployments to multi-payload configurations.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-6"
                  variants={fadeIn}
                >
                  <div className="flex-shrink-0 h-12 w-12 bg-[#cc7900] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Sustainable Approach</h3>
                    <p className="text-gray-300">
                      Our commitment to environmental responsibility drives us to develop clean propulsion technologies and minimize space debris.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Reservation CTA Section */}
        <section id="reservations" className="py-20 bg-gradient-to-r from-[#cc7900] to-[#fdbd53]">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
                variants={fadeIn}
              >
                Ready to Launch Your Vision?
              </motion.h2>
              
              <motion.p 
                className="text-xl mb-8 text-gray-800"
                variants={fadeIn}
              >
                Flight reservations are now available for 2025-2026 deployment windows.
              </motion.p>
              
              <motion.div 
                variants={fadeIn}
              >
                <motion.a 
                  href="#contact" 
                  className="px-8 py-4 bg-gray-900 hover:bg-gray-800 rounded-full text-white font-bold text-lg inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reserve Your Launch Slot
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
                variants={fadeIn}
              >
                Get in <span className="text-[#fdbd53]">Touch</span>
              </motion.h2>

              <motion.div 
                className="grid md:grid-cols-2 gap-8"
                variants={fadeIn}
              >
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#fdbd53] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <div>
                        <p className="text-gray-300">Phone</p>
                        <p className="text-white font-medium">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#fdbd53] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <div>
                        <p className="text-gray-300">Email</p>
                        <p className="text-white font-medium">info@pioneerorbitals.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#fdbd53] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <div>
                        <p className="text-gray-300">Address</p>
                        <p className="text-white font-medium">123 Launch Pad Avenue<br />Cape Canaveral, FL 32920</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">Send us a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
                      <input type="text" id="name" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53]" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
                      <input type="email" id="email" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53]" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
                      <textarea id="message" rows="4" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53]"></textarea>
                    </div>
                    <motion.button 
                      type="submit" 
                      className="px-6 py-3 bg-[#fdbd53] hover:bg-[#cc7900] rounded-full text-gray-900 font-bold transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#fdbd53] to-[#cc7900]"></div>
                <span className="font-bold text-lg text-[#fdbd53]">Pioneer Orbitals</span>
              </div>
              <p className="text-gray-400">
                Making space accessible with affordable, reusable Small-Lift Vehicles.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-[#fdbd53]">About Us</a></li>
                <li><a href="#technology" className="hover:text-[#fdbd53]">Technology</a></li>
                <li><a href="#benefits" className="hover:text-[#fdbd53]">Benefits</a></li>
                <li><a href="#reservations" className="hover:text-[#fdbd53]">Reservations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#fdbd53]">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#fdbd53]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#fdbd53]">Licensing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#fdbd53]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#fdbd53]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#fdbd53]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 5c-1.54 0-3.48.96-4.5 2.5-1.02-1.54-2.96-2.5-4.5-2.5C4.42 5 2 7.42 2 10.5c0 1.74 1.57 3.52 2.62 4.56l8.38 8.38 8.38-8.38c1.05-1.04 2.62-2.82 2.62-4.56C24 7.42 21.58 5 18.5 5z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#fdbd53]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} Pioneer Orbitals. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}