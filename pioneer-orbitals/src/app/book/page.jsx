'use client';

import React, { useState, useEffect } from 'react';
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

// FAQ Accordion Component for the Booking Page
const BookingFaqAccordion = () => {
  // State to track which FAQ items are expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "How long does the booking process take?",
      answer: "The initial booking request review takes 24-48 hours. After our consultation call, you'll receive a formal proposal within 5-7 business days. The entire process from initial inquiry to signed contract typically takes 2-4 weeks, depending on the complexity of your mission."
    },
    {
      question: "Do you offer custom launch windows?",
      answer: "Yes, we offer custom launch windows based on your mission requirements. While we have regular launch schedules to popular orbits, we understand that certain missions have specific timing needs. Custom launch windows may incur additional costs, which will be detailed in your formal proposal."
    },
    {
      question: "What if my payload exceeds the stated weight limits?",
      answer: "If your payload exceeds the standard weight limits of our vehicles, we can evaluate options including using a larger vehicle or developing a custom mission profile. Please note that payloads exceeding stated limits may require additional engineering analysis and could impact pricing and scheduling."
    },
    {
      question: "Can I modify my booking after submission?",
      answer: "Yes, you can modify your booking details before signing the formal contract. Once the contract is signed, certain modifications may still be possible depending on the nature of the changes and the stage of mission planning. Significant changes may impact pricing and launch scheduling."
    },
    {
      question: "What payment terms do you offer?",
      answer: "Our standard payment structure is: 20% deposit upon contract signing, 30% at the beginning of mission-specific engineering, 30% at the start of integration, and 20% prior to launch. We also offer flexible payment plans for academic institutions and research organizations."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {faqs.map((faq, index) => (
        <motion.div 
          key={index}
          className="mb-6 bg-gray-900 rounded-lg overflow-hidden border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ borderColor: '#fdbd53' }}
        >
          <div 
            className="flex justify-between items-center cursor-pointer p-6"
            onClick={() => toggleFaq(index)}
          >
            <h3 className="text-lg font-semibold text-white pr-8">{faq.question}</h3>
            <motion.span 
              className="text-[#fdbd53]"
              animate={{ rotate: expandedIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.span>
          </div>
          
          <AnimatePresence initial={false}>
            {expandedIndex === index && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: "auto", 
                  opacity: 1,
                  transition: { 
                    height: { duration: 0.3, ease: "easeInOut" },
                    opacity: { duration: 0.2, delay: 0.1 }
                  }
                }}
                exit={{ 
                  height: 0, 
                  opacity: 0,
                  transition: { 
                    height: { duration: 0.3, ease: "easeInOut" },
                    opacity: { duration: 0.2 }
                  }
                }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

const BookingPage = () => {
  // State for active step in the booking process
  const [activeStep, setActiveStep] = useState(1);
  
  // State for form data
  const [formData, setFormData] = useState({
    // Contact Information
    name: '',
    email: '',
    company: '',
    phone: '',
    
    // Payload Information
    payloadType: '',
    payloadMass: '',
    payloadDimensions: '',
    customPayloadType: '',
    
    // Mission Requirements
    targetOrbit: '',
    desiredInclination: '',
    launchTimeframe: '',
    additionalServices: [],
    
    // Special Requirements
    specialRequirements: ''
  });
  
  // State for vehicle selection
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  
  // Function to handle form changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prev => {
      // Handle checkboxes (additional services)
      if (type === 'checkbox') {
        const services = [...prev.additionalServices];
        if (checked) {
          services.push(value);
        } else {
          const index = services.indexOf(value);
          if (index > -1) {
            services.splice(index, 1);
          }
        }
        return { ...prev, additionalServices: services };
      }
      
      // Handle all other input types
      return { ...prev, [name]: value };
    });
  };
  
  // Function to move to next step
  const nextStep = () => {
    setActiveStep(prev => Math.min(prev + 1, 4));
    window.scrollTo(0, 0);
  };
  
  // Function to move to previous step
  const prevStep = () => {
    setActiveStep(prev => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };
  
  // Function to handle vehicle selection
  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle(vehicle);
  };
  
  // Calculate estimated cost
  const calculateEstimatedCost = () => {
    if (!selectedVehicle) return null;
    
    let baseCost = 0;
    switch (selectedVehicle) {
      case 'horizon':
        baseCost = 2500000; // $2.5M
        break;
      case 'starpath':
        baseCost = 5800000; // $5.8M
        break;
      case 'voyager':
        baseCost = 990000; // $990K
        break;
      default:
        return null;
    }
    
    // Additional costs based on selected services
    let additionalCosts = 0;
    formData.additionalServices.forEach(service => {
      switch (service) {
        case 'deployment':
          additionalCosts += baseCost * 0.05; // 5% of base cost
          break;
        case 'insurance':
          additionalCosts += baseCost * 0.10; // 10% of base cost
          break;
        case 'integration':
          additionalCosts += baseCost * 0.08; // 8% of base cost
          break;
        case 'customOrbit':
          additionalCosts += baseCost * 0.15; // 15% of base cost
          break;
        default:
          break;
      }
    });
    
    return baseCost + additionalCosts;
  };
  
  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    console.log('Selected vehicle:', selectedVehicle);
    
    // For demo purposes, just move to the confirmation step
    nextStep();
  };
  
  return (
    <div>
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        {/* Background with parallax effect */}
        <div className="absolute inset-0 bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/rocket-night-launch.jpg')] bg-cover bg-center opacity-30"></div>
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
              Book Your <span className="text-[#fdbd53]">Launch</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Your journey to space starts here. Let's get your satellite into orbit.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Booking Steps Tracker */}
      <section className="py-12 bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {[
                { number: 1, title: "Choose Vehicle" },
                { number: 2, title: "Mission Details" },
                { number: 3, title: "Review & Book" },
                { number: 4, title: "Confirmation" }
              ].map((step) => (
                <div 
                  key={step.number}
                  className="flex flex-col items-center mb-4 md:mb-0"
                >
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      activeStep >= step.number 
                        ? 'bg-[#fdbd53] text-gray-900' 
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    {activeStep > step.number ? (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-lg font-bold">{step.number}</span>
                    )}
                  </div>
                  <span className={activeStep >= step.number ? 'text-white' : 'text-gray-500'}>
                    {step.title}
                  </span>
                  
                  {/* Connector line between steps */}
                  {step.number < 4 && (
                    <div className="hidden md:block w-16 h-0.5 absolute left-0 top-0 bg-gray-700">
                      {/* This is actually handled with a relative positioned pseudo-element in a real implementation */}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Progress bar - for mobile */}
            <div className="w-full bg-gray-700 h-2 rounded-full mt-8 md:hidden">
              <div 
                className="bg-[#fdbd53] h-2 rounded-full"
                style={{ width: `${(activeStep / 4) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="py-20 bg-gray-900 min-h-[60vh]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              {/* Step 1: Choose Vehicle */}
              {activeStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Select Your <span className="text-[#fdbd53]">Launch Vehicle</span>
                  </h2>
                  
                  <p className="text-gray-300 mb-10">
                    Choose the perfect vehicle for your mission from our fleet of Small-Lift Vehicles (SLVs). Each vehicle is designed for specific payload ranges and orbit capabilities.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {[
                      {
                        id: 'voyager',
                        name: 'Voyager SLV-Micro',
                        payload: 'Up to 20kg',
                        price: '$990K',
                        description: 'Perfect for CubeSats and small educational or research payloads.',
                        bestFor: 'CubeSats',
                        orbits: 'LEO, SSO'
                      },
                      {
                        id: 'horizon',
                        name: 'Horizon SLV-100',
                        payload: 'Up to 100kg',
                        price: '$2.5M',
                        description: 'Our flagship vehicle, ideal for small commercial satellites and constellations.',
                        bestFor: 'Small Commercial Satellites',
                        orbits: 'LEO, SSO, MEO'
                      },
                      {
                        id: 'starpath',
                        name: 'StarPath SLV-300',
                        payload: 'Up to 300kg',
                        price: '$5.8M',
                        description: 'Enhanced capacity for larger satellites and multi-satellite deployments.',
                        bestFor: 'Medium Satellites & Constellations',
                        orbits: 'LEO, SSO, MEO, GTO'
                      }
                    ].map((vehicle) => (
                      <motion.div
                        key={vehicle.id}
                        className={`bg-gray-800 rounded-xl border-2 ${
                          selectedVehicle === vehicle.id 
                            ? 'border-[#fdbd53]' 
                            : 'border-gray-700'
                        } overflow-hidden hover:shadow-lg transition-all`}
                        whileHover={{ y: -10 }}
                        onClick={() => handleVehicleSelect(vehicle.id)}
                      >
                        <div className="h-48 relative bg-gray-700">
                          {/* Here you would use an actual vehicle image */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#fdbd53] to-[#cc7900] opacity-20"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="w-24 h-24 text-[#fdbd53] opacity-40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2L8 20H11L12 23L13 20H16L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M4.93 13C2.65 13 2 11.5 2 10C2 8.5 3.5 6.5 5 8C6.5 9.5 8.07 13 4.93 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M19.07 13C21.35 13 22 11.5 22 10C22 8.5 20.5 6.5 19 8C17.5 9.5 15.93 13 19.07 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          
                          {selectedVehicle === vehicle.id && (
                            <div className="absolute top-4 right-4 bg-[#fdbd53] rounded-full p-1">
                              <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                        </div>
                        
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
                          <div className="flex justify-between text-sm mb-4">
                            <span className="text-gray-400">Payload: {vehicle.payload}</span>
                            <span className="text-[#fdbd53] font-semibold">{vehicle.price}</span>
                          </div>
                          <p className="text-gray-300 mb-4">{vehicle.description}</p>
                          <div className="border-t border-gray-700 pt-4 flex justify-between text-sm">
                            <div>
                              <span className="text-gray-500 block">Best For:</span>
                              <span className="text-white">{vehicle.bestFor}</span>
                            </div>
                            <div>
                              <span className="text-gray-500 block">Orbits:</span>
                              <span className="text-white">{vehicle.orbits}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex justify-end">
                    <motion.button
                      onClick={nextStep}
                      disabled={!selectedVehicle}
                      className={`px-6 py-3 rounded-full font-bold flex items-center ${
                        selectedVehicle 
                          ? 'bg-[#fdbd53] text-gray-900 hover:bg-[#cc7900]' 
                          : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      } transition-colors`}
                      whileHover={selectedVehicle ? { scale: 1.05 } : {}}
                      whileTap={selectedVehicle ? { scale: 0.95 } : {}}
                    >
                      Continue
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              )}
              
              {/* Step 2: Mission Details */}
              {activeStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Mission <span className="text-[#fdbd53]">Details</span>
                  </h2>
                  
                  <p className="text-gray-300 mb-10">
                    Please provide information about your payload and mission requirements so we can tailor our launch services to your needs.
                  </p>
                  
                  <form className="space-y-10">
                    {/* Contact Information */}
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                      <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name <span className="text-[#fdbd53]">*</span></label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address <span className="text-[#fdbd53]">*</span></label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company/Organization <span className="text-[#fdbd53]">*</span></label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number <span className="text-[#fdbd53]">*</span></label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Payload Information */}
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                      <h3 className="text-xl font-semibold text-white mb-4">Payload Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="payloadType" className="block text-sm font-medium text-gray-300 mb-2">Payload Type <span className="text-[#fdbd53]">*</span></label>
                          <select
                            id="payloadType"
                            name="payloadType"
                            value={formData.payloadType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                          >
                            <option value="">Select Payload Type</option>
                            <option value="cubesat-1u">CubeSat 1U</option>
                            <option value="cubesat-3u">CubeSat 3U</option>
                            <option value="cubesat-6u">CubeSat 6U</option>
                            <option value="cubesat-12u">CubeSat 12U</option>
                            <option value="microsat">Microsatellite</option>
                            <option value="smallsat">Small Satellite</option>
                            <option value="custom">Custom/Other</option>
                          </select>
                        </div>
                        
                        {formData.payloadType === 'custom' && (
                          <div>
                            <label htmlFor="customPayloadType" className="block text-sm font-medium text-gray-300 mb-2">Specify Payload Type <span className="text-[#fdbd53]">*</span></label>
                            <input
                              type="text"
                              id="customPayloadType"
                              name="customPayloadType"
                              value={formData.customPayloadType}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                            />
                          </div>
                        )}
                        
                        <div>
                          <label htmlFor="payloadMass" className="block text-sm font-medium text-gray-300 mb-2">Payload Mass (kg) <span className="text-[#fdbd53]">*</span></label>
                          <input
                            type="number"
                            id="payloadMass"
                            name="payloadMass"
                            value={formData.payloadMass}
                            onChange={handleChange}
                            required
                            min="0"
                            step="0.1"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="payloadDimensions" className="block text-sm font-medium text-gray-300 mb-2">Payload Dimensions (LxWxH in cm)</label>
                          <input
                            type="text"
                            id="payloadDimensions"
                            name="payloadDimensions"
                            value={formData.payloadDimensions}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                            placeholder="e.g. 10x10x10"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Mission Requirements */}
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                      <h3 className="text-xl font-semibold text-white mb-4">Mission Requirements</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="targetOrbit" className="block text-sm font-medium text-gray-300 mb-2">Target Orbit <span className="text-[#fdbd53]">*</span></label>
                          <select
                            id="targetOrbit"
                            name="targetOrbit"
                            value={formData.targetOrbit}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                          >
                            <option value="">Select Orbit</option>
                            <option value="leo-low">LEO (Low, 300-500km)</option>
                            <option value="leo-high">LEO (High, 500-700km)</option>
                            <option value="sso">Sun-Synchronous Orbit (SSO)</option>
                            <option value="meo">Medium Earth Orbit (MEO)</option>
                            <option value="gto">Geostationary Transfer Orbit (GTO)</option>
                            <option value="custom">Custom Orbit</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="desiredInclination" className="block text-sm font-medium text-gray-300 mb-2">Desired Inclination (°)</label>
                          <input
                            type="number"
                            id="desiredInclination"
                            name="desiredInclination"
                            value={formData.desiredInclination}
                            onChange={handleChange}
                            min="0"
                            max="180"
                            step="0.1"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="launchTimeframe" className="block text-sm font-medium text-gray-300 mb-2">Launch Timeframe <span className="text-[#fdbd53]">*</span></label>
                          <select
                            id="launchTimeframe"
                            name="launchTimeframe"
                            value={formData.launchTimeframe}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                          >
                            <option value="">Select Timeframe</option>
                            <option value="0-3">0-3 months (Rush)</option>
                            <option value="3-6">3-6 months</option>
                            <option value="6-9">6-9 months</option>
                            <option value="9-12">9-12 months</option>
                            <option value="12+">12+ months</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">Additional Services</label>
                        <div className="grid md:grid-cols-2 gap-3">
                          {[
                            { id: 'deployment', label: 'Deployment System', description: 'Custom deployment mechanism for your payload' },
                            { id: 'insurance', label: 'Launch Insurance', description: 'Insurance coverage for your payload' },
                            { id: 'integration', label: 'Integration Support', description: 'Expert assistance with payload integration' },
                            { id: 'customOrbit', label: 'Custom Orbital Insertion', description: 'Precise orbital parameters beyond standard offerings' }
                          ].map((service) => (
                            <div key={service.id} className="flex items-start">
                              <input
                                type="checkbox"
                                id={service.id}
                                name="additionalServices"
                                value={service.id}
                                checked={formData.additionalServices.includes(service.id)}
                                onChange={handleChange}
                                className="mt-1 mr-3 h-4 w-4 text-[#fdbd53] rounded focus:ring-[#fdbd53] bg-gray-700 border-gray-600"
                              />
                              <div>
                                <label htmlFor={service.id} className="text-white cursor-pointer">
                                  {service.label}
                                </label>
                                <p className="text-sm text-gray-400">{service.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Special Requirements */}
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                      <h3 className="text-xl font-semibold text-white mb-4">Special Requirements</h3>
                      
                      <div>
                        <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-300 mb-2">Any Special Requirements or Notes</label>
                        <textarea
                          id="specialRequirements"
                          name="specialRequirements"
                          value={formData.specialRequirements}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                          placeholder="Please provide any additional information or special requirements for your mission."
                        ></textarea>
                      </div>
                    </div>
                  </form>
                  
                  <div className="flex justify-between mt-10">
                    <motion.button
                      onClick={prevStep}
                      className="px-6 py-3 bg-gray-700 text-white rounded-full font-bold flex items-center hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Back
                    </motion.button>
                    
                    <motion.button
                      onClick={nextStep}
                      className="px-6 py-3 bg-[#fdbd53] text-gray-900 rounded-full font-bold flex items-center hover:bg-[#cc7900] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Continue
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              )}
              
              {/* Step 3: Review & Book */}
              {activeStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Review & <span className="text-[#fdbd53]">Confirm</span>
                  </h2>
                  
                  <p className="text-gray-300 mb-10">
                    Please review your booking details below. Our team will use this information to prepare a detailed launch proposal for your mission.
                  </p>
                  
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-10">
                    <h3 className="text-xl font-semibold text-white mb-4">Your Launch Selection</h3>
                    
                    <div className="flex flex-col md:flex-row border-b border-gray-700 pb-6 mb-6">
                      <div className="md:w-1/4 mb-4 md:mb-0">
                        <div className="h-32 w-32 mx-auto bg-gray-700 rounded-lg relative">
                          {/* Vehicle image placeholder */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#fdbd53] to-[#cc7900] opacity-20 rounded-lg"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="w-16 h-16 text-[#fdbd53] opacity-40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2L8 20H11L12 23L13 20H16L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:w-3/4">
                        <h4 className="text-lg font-semibold text-white">
                          {selectedVehicle === 'horizon' && 'Horizon SLV-100'}
                          {selectedVehicle === 'starpath' && 'StarPath SLV-300'}
                          {selectedVehicle === 'voyager' && 'Voyager SLV-Micro'}
                        </h4>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                          <div>
                            <span className="text-gray-400 text-sm block">Payload Capacity:</span>
                            <span className="text-white">
                              {selectedVehicle === 'horizon' && 'Up to 100kg'}
                              {selectedVehicle === 'starpath' && 'Up to 300kg'}
                              {selectedVehicle === 'voyager' && 'Up to 20kg'}
                            </span>
                          </div>
                          
                          <div>
                            <span className="text-gray-400 text-sm block">Orbits:</span>
                            <span className="text-white">
                              {selectedVehicle === 'horizon' && 'LEO, SSO, MEO'}
                              {selectedVehicle === 'starpath' && 'LEO, SSO, MEO, GTO'}
                              {selectedVehicle === 'voyager' && 'LEO, SSO'}
                            </span>
                          </div>
                          
                          <div>
                            <span className="text-gray-400 text-sm block">Base Price:</span>
                            <span className="text-[#fdbd53] font-semibold">
                              {selectedVehicle === 'horizon' && '$2.5M'}
                              {selectedVehicle === 'starpath' && '$5.8M'}
                              {selectedVehicle === 'voyager' && '$990K'}
                            </span>
                          </div>
                          
                          <div>
                            <span className="text-gray-400 text-sm block">Estimated Lead Time:</span>
                            <span className="text-white">
                              {selectedVehicle === 'horizon' && '6-9 months'}
                              {selectedVehicle === 'starpath' && '9-12 months'}
                              {selectedVehicle === 'voyager' && '3-6 months'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-10">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Contact & Payload Details</h4>
                        
                        <div className="space-y-3">
                          <div>
                            <span className="text-gray-400 text-sm block">Contact:</span>
                            <span className="text-white">{formData.name || '(Not provided)'}</span>
                          </div>
                          
                          <div>
                            <span className="text-gray-400 text-sm block">Company:</span>
                            <span className="text-white">{formData.company || '(Not provided)'}</span>
                          </div>
                          
                          <div>
                            <span className="text-gray-400 text-sm block">Email:</span>
                            <span className="text-white">{formData.email || '(Not provided)'}</span>
                          </div>
                          
                          <div>
                            <span className="text-gray-400 text-sm block">Phone:</span>
                            <span className="text-white">{formData.phone || '(Not provided)'}</span>
                          </div>
                          
                          <div>
                            <span className="text-gray-400 text-sm block">Payload Type:</span>
                            <span className="text-white">
                              {formData.payloadType === 'custom' 
                                ? formData.customPayloadType 
                                : formData.payloadType || '(Not provided)'}
                            </span>
                          </div>
                          
                          <div>
                            <span className="text-gray-400 text-sm block">Payload Mass:</span>
                            <span className="text-white">
                              {formData.payloadMass ? `${formData.payloadMass} kg` : '(Not provided)'}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Mission Requirements</h4>
                        
                        <div className="space-y-3">
                          <div>
                            <span className="text-gray-400 text-sm block">Target Orbit:</span>
                            <span className="text-white">{formData.targetOrbit || '(Not provided)'}</span>
                          </div>
                          
                          <div>
                            <span className="text-gray-400 text-sm block">Desired Inclination:</span>
                            <span className="text-white">
                              {formData.desiredInclination ? `${formData.desiredInclination}°` : '(Not provided)'}
                            </span>
                          </div>
                          
                          <div>
                            <span className="text-gray-400 text-sm block">Launch Timeframe:</span>
                            <span className="text-white">{formData.launchTimeframe || '(Not provided)'}</span>
                          </div>
                          
                          <div>
                            <span className="text-gray-400 text-sm block">Additional Services:</span>
                            {formData.additionalServices.length > 0 ? (
                              <ul className="list-disc list-inside text-white">
                                {formData.additionalServices.map((service) => (
                                  <li key={service}>
                                    {service === 'deployment' && 'Deployment System'}
                                    {service === 'insurance' && 'Launch Insurance'}
                                    {service === 'integration' && 'Integration Support'}
                                    {service === 'customOrbit' && 'Custom Orbital Insertion'}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <span className="text-white">(None selected)</span>
                            )}
                          </div>
                          
                          {formData.specialRequirements && (
                            <div>
                              <span className="text-gray-400 text-sm block">Special Requirements:</span>
                              <span className="text-white">{formData.specialRequirements}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pricing Estimate */}
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-10">
                    <h3 className="text-xl font-semibold text-white mb-4">Estimated Pricing</h3>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Base Launch Cost:</span>
                        <span className="text-white">
                          {selectedVehicle === 'horizon' && '$2,500,000'}
                          {selectedVehicle === 'starpath' && '$5,800,000'}
                          {selectedVehicle === 'voyager' && '$990,000'}
                        </span>
                      </div>
                      
                      {formData.additionalServices.includes('deployment') && (
                        <div className="flex justify-between">
                          <span className="text-gray-300">Deployment System:</span>
                          <span className="text-white">
                            {formatCurrency(
                              (selectedVehicle === 'horizon' ? 2500000 : 
                              selectedVehicle === 'starpath' ? 5800000 : 
                              990000) * 0.05
                            )}
                          </span>
                        </div>
                      )}
                      
                      {formData.additionalServices.includes('insurance') && (
                        <div className="flex justify-between">
                          <span className="text-gray-300">Launch Insurance:</span>
                          <span className="text-white">
                            {formatCurrency(
                              (selectedVehicle === 'horizon' ? 2500000 : 
                              selectedVehicle === 'starpath' ? 5800000 : 
                              990000) * 0.10
                            )}
                          </span>
                        </div>
                      )}
                      
                      {formData.additionalServices.includes('integration') && (
                        <div className="flex justify-between">
                          <span className="text-gray-300">Integration Support:</span>
                          <span className="text-white">
                            {formatCurrency(
                              (selectedVehicle === 'horizon' ? 2500000 : 
                              selectedVehicle === 'starpath' ? 5800000 : 
                              990000) * 0.08
                            )}
                          </span>
                        </div>
                      )}
                      
                      {formData.additionalServices.includes('customOrbit') && (
                        <div className="flex justify-between">
                          <span className="text-gray-300">Custom Orbital Insertion:</span>
                          <span className="text-white">
                            {formatCurrency(
                              (selectedVehicle === 'horizon' ? 2500000 : 
                              selectedVehicle === 'starpath' ? 5800000 : 
                              990000) * 0.15
                            )}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="border-t border-gray-700 pt-4 flex justify-between font-bold">
                      <span className="text-white">Estimated Total:</span>
                      <span className="text-[#fdbd53]">{formatCurrency(calculateEstimatedCost())}</span>
                    </div>
                    
                    <p className="text-sm text-gray-400 mt-4">
                      This is an estimated cost based on your selections. The final price may vary based on specific mission requirements and available launch windows. Our team will provide a detailed quote after reviewing your submission.
                    </p>
                  </div>
                  
                  {/* Terms and Conditions */}
                  <div className="mb-10">
                    <div className="flex items-start mb-6">
                      <input
                        type="checkbox"
                        id="termsConditions"
                        className="mt-1 mr-3 h-4 w-4 text-[#fdbd53] rounded focus:ring-[#fdbd53] bg-gray-700 border-gray-600"
                      />
                      <label htmlFor="termsConditions" className="text-gray-300">
                        I agree to the <a href="#" className="text-[#fdbd53] hover:underline">Terms and Conditions</a> and acknowledge that submitting this form does not constitute a binding contract. Pioneer Orbitals will review my request and contact me with a formal proposal.
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <motion.button
                      onClick={prevStep}
                      className="px-6 py-3 bg-gray-700 text-white rounded-full font-bold flex items-center hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Back
                    </motion.button>
                    
                    <motion.button
                      onClick={handleSubmit}
                      className="px-8 py-3 bg-[#fdbd53] text-gray-900 rounded-full font-bold flex items-center hover:bg-[#cc7900] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Submit Booking Request
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              )}
              
              {/* Step 4: Confirmation */}
              {activeStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <div className="mb-8 flex justify-center">
                    <div className="w-20 h-20 bg-green-900 bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Booking Request <span className="text-[#fdbd53]">Submitted!</span>
                  </h2>
                  
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                    Thank you for choosing Pioneer Orbitals for your mission to space. Your booking request has been received, and our team will review your requirements.
                  </p>
                  
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-10 max-w-xl mx-auto">
                    <h3 className="text-xl font-semibold text-white mb-4">What Happens Next?</h3>
                    
                    <ol className="space-y-6 text-left">
                      <li className="flex items-start">
                        <div className="mr-4 w-8 h-8 rounded-full bg-[#fdbd53] flex items-center justify-center flex-shrink-0">
                          <span className="text-gray-900 font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Initial Review (24-48 hours)</h4>
                          <p className="text-gray-400">Our mission specialists will review your booking request and conduct an initial feasibility assessment.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="mr-4 w-8 h-8 rounded-full bg-[#fdbd53] flex items-center justify-center flex-shrink-0">
                          <span className="text-gray-900 font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Consultation Call</h4>
                          <p className="text-gray-400">A member of our team will contact you to discuss your mission requirements in detail and answer any questions.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="mr-4 w-8 h-8 rounded-full bg-[#fdbd53] flex items-center justify-center flex-shrink-0">
                          <span className="text-gray-900 font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Formal Proposal</h4>
                          <p className="text-gray-400">We'll prepare a detailed proposal including mission timeline, technical specifications, and final pricing.</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="mr-4 w-8 h-8 rounded-full bg-[#fdbd53] flex items-center justify-center flex-shrink-0">
                          <span className="text-gray-900 font-bold">4</span>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Contract & Launch Preparation</h4>
                          <p className="text-gray-400">Upon acceptance of the proposal, we'll finalize the contract and begin preparing for your launch.</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                  
                  <div className="bg-[#fdbd53] bg-opacity-10 border border-[#fdbd53] rounded-lg p-6 max-w-xl mx-auto mb-10">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-[#fdbd53] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="text-left">
                        <h4 className="text-white font-medium mb-2">A confirmation email has been sent</h4>
                        <p className="text-gray-300">
                          We've sent a confirmation email to <span className="text-[#fdbd53]">{formData.email}</span> with a summary of your booking request. If you don't see it in your inbox, please check your spam folder.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <motion.a
                      href="/dashboard"
                      className="px-6 py-3 bg-[#fdbd53] text-gray-900 rounded-full font-bold flex items-center justify-center hover:bg-[#cc7900] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Track Your Booking
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.a>
                    
                    <motion.a
                      href="/"
                      className="px-6 py-3 bg-transparent border-2 border-[#fdbd53] text-[#fdbd53] rounded-full font-bold flex items-center justify-center hover:bg-[#fdbd53] hover:bg-opacity-10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Back to Home
                    </motion.a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked <span className="text-[#fdbd53]">Questions</span>
            </h2>
            <div className="w-24 h-1 bg-[#cc7900] mx-auto"></div>
          </motion.div>
          
          <BookingFaqAccordion />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#fdbd53]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Have Questions About Your Launch?</h3>
              <p className="text-lg text-gray-800">
                Our mission specialists are here to help you plan your perfect journey to space.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                href="/contact"
                className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
              
              <motion.a 
                href="tel:+15551234567"
                className="px-8 py-3 bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#fdbd53] font-bold rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Us Now
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;