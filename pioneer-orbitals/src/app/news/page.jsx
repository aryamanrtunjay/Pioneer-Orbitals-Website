'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const fadeInDelay = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, delay: 0.2 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const NewsPage = () => {
  // State for news filter
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample news data - in a real application, this would come from a CMS or API
  const newsItems = [
    {
      id: 1,
      title: "Pioneer Orbitals Successfully Completes Maiden Flight of Horizon SLV-100",
      excerpt: "The Horizon SLV-100 completed its first successful orbital mission, deploying three customer satellites into low Earth orbit.",
      date: "February 15, 2025",
      category: "press-release",
      image: "/images/news/launch-success.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Pioneer Orbitals Secures $150M Series C Funding to Accelerate Production",
      excerpt: "The new funding round will enable Pioneer Orbitals to scale manufacturing and meet growing customer demand for satellite launches.",
      date: "January 22, 2025",
      category: "press-release",
      image: "/images/news/funding.jpg"
    },
    {
      id: 3,
      title: "Pioneer Orbitals Signs Multi-Launch Agreement with Orbital Dynamics",
      excerpt: "The agreement covers 12 launches over the next three years to deploy Orbital Dynamics' next-generation communication constellation.",
      date: "January 10, 2025",
      category: "press-release",
      image: "/images/news/contract.jpg"
    },
    {
      id: 4,
      title: "How Pioneer Orbitals is Revolutionizing Small Satellite Launches",
      excerpt: "Space Industry Today examines Pioneer Orbitals' innovative approach to small satellite deployment and cost reduction.",
      date: "December 5, 2024",
      category: "media-coverage",
      image: "/images/news/media-coverage.jpg"
    },
    {
      id: 5,
      title: "Pioneer Orbitals CEO to Speak at Space Innovation Summit 2025",
      excerpt: "Dr. Alexandra Chen will deliver a keynote on the future of reusable launch vehicles at the premier space industry conference.",
      date: "November 30, 2024",
      category: "event",
      image: "/images/news/event.jpg"
    },
    {
      id: 6,
      title: "Pioneer Orbitals Announces New Environmental Sustainability Initiative",
      excerpt: "The 'Space for Earth' program aims to achieve carbon-neutral operations by 2026 and reduce space debris through responsible mission design.",
      date: "November 15, 2024",
      category: "press-release",
      image: "/images/news/sustainability.jpg"
    },
    {
      id: 7,
      title: "Pioneer Orbitals Featured in 'Top 50 Space Startups' Report",
      excerpt: "The annual industry report highlights Pioneer Orbitals as one of the most promising companies transforming access to space.",
      date: "October 28, 2024",
      category: "media-coverage",
      image: "/images/news/award.jpg"
    },
    {
      id: 8,
      title: "Pioneer Orbitals to Host Launch Webinar for University Researchers",
      excerpt: "The online event will showcase opportunities for academic institutions to access space through Pioneer Orbitals' dedicated educational program.",
      date: "October 12, 2024",
      category: "event",
      image: "/images/news/webinar.jpg"
    }
  ];

  // Filter news items based on active filter
  const filteredNews = activeFilter === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeFilter);

  // Get featured news item
  const featuredNews = newsItems.find(item => item.featured);

  return (
    <div>
      
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center">
        {/* Background with parallax effect */}
        <div className="absolute inset-0 bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/news-background.jpg')] bg-cover bg-center opacity-30"></div>
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
              Latest <span className="text-[#fdbd53]">News & Updates</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Stay informed about our latest launches, innovations, and company announcements.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Featured News Section */}
      {featuredNews && (
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white">
                Featured <span className="text-[#fdbd53]">Story</span>
              </h2>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-5 gap-8 bg-gray-800 rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="md:col-span-3 h-64 md:h-auto relative">
                {/* Here we would use an actual news image */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#fdbd53] to-[#cc7900] opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[#fdbd53] text-9xl opacity-20">
                    <svg className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 p-8">
                <span className="inline-block px-3 py-1 bg-[#fdbd53] text-gray-900 text-sm font-medium rounded-full mb-4">
                  {featuredNews.category === 'press-release' ? 'Press Release' : 
                   featuredNews.category === 'media-coverage' ? 'Media Coverage' : 'Event'}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">{featuredNews.title}</h3>
                <p className="text-gray-300 mb-4">{featuredNews.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{featuredNews.date}</span>
                  <motion.a 
                    href={`/news/${featuredNews.id}`}
                    className="text-[#fdbd53] hover:text-[#cc7900] font-medium inline-flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    Read Full Story
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* News Listing Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="text-3xl font-bold text-white mb-6 md:mb-0">
                Latest <span className="text-[#fdbd53]">Updates</span>
              </h2>
              
              <div className="flex flex-wrap gap-3">
                {[
                  { id: 'all', label: 'All Updates' },
                  { id: 'press-release', label: 'Press Releases' },
                  { id: 'media-coverage', label: 'Media Coverage' },
                  { id: 'event', label: 'Events' }
                ].map((filter) => (
                  <motion.button
                    key={filter.id}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === filter.id 
                        ? 'bg-[#fdbd53] text-gray-900' 
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                    onClick={() => setActiveFilter(filter.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {filter.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AnimatePresence>
              {filteredNews.map((newsItem) => (
                <motion.div
                  key={newsItem.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
                >
                  <div className="h-48 relative">
                    {/* Here we would use actual news images */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#fdbd53] to-[#cc7900] opacity-30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-opacity-30">
                        {newsItem.category === 'press-release' ? (
                          <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        ) : newsItem.category === 'media-coverage' ? (
                          <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                          </svg>
                        ) : (
                          <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-[#fdbd53] text-gray-900 text-xs font-medium rounded-full">
                        {newsItem.category === 'press-release' ? 'Press Release' : 
                         newsItem.category === 'media-coverage' ? 'Media Coverage' : 'Event'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{newsItem.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">{newsItem.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{newsItem.date}</span>
                      <motion.a 
                        href={`/news/${newsItem.id}`}
                        className="text-[#fdbd53] hover:text-[#cc7900] font-medium inline-flex items-center"
                        whileHover={{ x: 5 }}
                      >
                        Read More
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Pagination - simplified for this example */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <a href="#" className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-700 rounded-md hover:bg-gray-600">
                Previous
              </a>
              <a href="#" className="px-4 py-2 text-sm font-medium text-gray-900 bg-[#fdbd53] rounded-md">
                1
              </a>
              <a href="#" className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-700 rounded-md hover:bg-gray-600">
                2
              </a>
              <a href="#" className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-700 rounded-md hover:bg-gray-600">
                3
              </a>
              <span className="px-4 py-2 text-sm font-medium text-gray-400">...</span>
              <a href="#" className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-700 rounded-md hover:bg-gray-600">
                Next
              </a>
            </nav>
          </div>
        </div>
      </section>
      
      {/* Subscribe to Newsletter Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl p-8 md:p-12 border border-gray-700">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Subscribe to Our <span className="text-[#fdbd53]">Newsletter</span>
              </h2>
              <p className="text-gray-300">
                Get the latest news, launch updates, and exclusive content delivered directly to your inbox.
              </p>
            </motion.div>
            
            <motion.form 
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-full bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53]"
                  required
                />
                <motion.button 
                  type="submit"
                  className="px-6 py-3 bg-[#fdbd53] text-gray-900 font-bold rounded-full hover:bg-[#cc7900] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
              <div className="mt-4 text-center text-sm text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </div>
            </motion.form>
          </div>
        </div>
      </section>
      
      {/* Press & Media Resources Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Press & Media <span className="text-[#fdbd53]">Resources</span>
            </h2>
            <div className="w-24 h-1 bg-[#cc7900] mx-auto"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Access official company information, media kits, and resources for journalists and content creators.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Press Kit",
                description: "Download our comprehensive media kit, including company fact sheets, executive bios, high-resolution logos, and official imagery.",
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                link: "/press-kit"
              },
              {
                title: "Media Contact",
                description: "For press inquiries, interview requests, or additional information, please contact our media relations team.",
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                link: "/contact"
              },
              {
                title: "Image Gallery",
                description: "Browse and download high-resolution images of our vehicles, launches, facilities, and team for media use.",
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                link: "/gallery"
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-lg p-8 text-center border border-gray-700 hover:border-[#fdbd53] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="text-[#fdbd53] mb-6 flex justify-center">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{resource.title}</h3>
                <p className="text-gray-400 mb-6">{resource.description}</p>
                <motion.a 
                  href={resource.link}
                  className="inline-flex items-center text-[#fdbd53] hover:text-[#cc7900] font-medium"
                  whileHover={{ x: 5 }}
                >
                  Access Resource
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Upcoming <span className="text-[#fdbd53]">Events</span>
            </h2>
            <div className="w-24 h-1 bg-[#cc7900] mx-auto"></div>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                title: "Space Innovation Summit 2025",
                date: "March 15-17, 2025",
                location: "Houston, TX",
                description: "Dr. Alexandra Chen will deliver a keynote on the future of reusable launch vehicles at this premier space industry conference."
              },
              {
                title: "Next-Gen Space Economy Webinar",
                date: "April 5, 2025",
                location: "Online",
                description: "Join our panel discussion on how small satellite technology is transforming various industries and creating new economic opportunities."
              },
              {
                title: "University Research Launch Opportunity",
                date: "April 22, 2025",
                location: "Online",
                description: "An informational session for academic institutions interested in our educational launch program for student-built satellites."
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                className="mb-8 bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex flex-col">
                    <div className="bg-gray-900 p-4 rounded-lg text-center">
                      <div className="text-[#fdbd53] font-bold text-lg">{event.date}</div>
                      <div className="text-gray-400 text-sm">{event.location}</div>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-gray-400 mb-4">{event.description}</p>
                    <div className="flex items-center justify-start">
                      <motion.button 
                        className="bg-transparent border-2 border-[#fdbd53] text-[#fdbd53] hover:bg-[#fdbd53] hover:text-gray-900 font-medium py-2 px-4 rounded-full transition-colors mr-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                      </motion.button>
                      
                      <motion.button 
                        className="bg-[#fdbd53] hover:bg-[#cc7900] text-gray-900 font-medium py-2 px-4 rounded-full transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Register
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#fdbd53]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Stay Connected with Pioneer Orbitals</h3>
              <p className="text-lg text-gray-800">
                Follow us on social media for the latest updates, behind-the-scenes content, and launch announcements.
              </p>
            </div>
            <div className="flex gap-4">
              {['twitter', 'linkedin', 'youtube', 'instagram'].map((social, index) => (
                <motion.a
                  key={social}
                  href={`https://${social}.com/pioneerobitals`}
                  className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/>
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;