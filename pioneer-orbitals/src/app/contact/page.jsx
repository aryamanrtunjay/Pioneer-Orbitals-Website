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

// FAQ Accordion Component
const FaqAccordion = () => {
  // State to track which FAQ items are expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a launch for my satellite?",
      answer: "Booking a launch with Pioneer Orbitals is a straightforward process. Start by filling out our contact form with details about your payload, or email us directly at launches@pioneerorbitals.com. Our team will get back to you within 48 hours to discuss your requirements, available launch windows, and pricing options."
    },
    {
      question: "What payload sizes can Pioneer Orbitals accommodate?",
      answer: "Our fleet of Small-Lift Vehicles can accommodate a range of payload sizes, from CubeSats (1U, 3U, 6U, 12U) to microsatellites up to 300kg. Our Voyager SLV-Micro specializes in CubeSats, the Horizon SLV-100 handles payloads up to 100kg, and our StarPath SLV-300 can deploy satellites up to 300kg to low Earth orbit."
    },
    {
      question: "What orbits can Pioneer Orbitals reach?",
      answer: "Our vehicles can deploy satellites to Low Earth Orbit (LEO), Sun-Synchronous Orbit (SSO), and Mid Earth Orbit (MEO). Our StarPath SLV-300 with its optional kick stage can also reach Geostationary Transfer Orbit (GTO). We can achieve inclinations from 28.5° to polar orbits, depending on launch site and vehicle configuration."
    },
    {
      question: "How far in advance should I book my launch?",
      answer: "While we recommend booking 9-12 months in advance for standard missions, our rapid deployment capability allows us to accommodate some launches with as little as 3-6 months of lead time. For educational and research CubeSat missions, we offer dedicated launch opportunities throughout the year with our Voyager program."
    },
    {
      question: "Do you offer rideshare options for smaller satellites?",
      answer: "Yes, we offer regular rideshare missions that allow smaller payloads to share launch costs. These missions follow set schedules to popular orbits. However, our dedicated small satellite launch services offer more flexibility in terms of orbit selection and launch timing compared to traditional rideshare programs."
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

const ContactPage = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  
  // State for form submission status
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    
    try {
      // In a real implementation, you would call an API endpoint here
      // For now, we'll simulate a successful submission
      
      // This is where you'd send the email to artunjay@pioneerorbitals.com
      console.log('Sending email to artunjay@pioneerorbitals.com');
      console.log('Form data:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was a problem sending your message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      
      {/* Main Contact Section */}
      <section className="pt-40 pb-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="md:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Send Us a <span className="text-[#fdbd53]">Message</span>
              </h2>
              
              {submitted ? (
                <motion.div 
                  className="bg-green-800 bg-opacity-20 border border-green-600 rounded-lg p-6 mb-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Message Sent Successfully!</h4>
                      <p className="text-gray-300">
                        Thank you for reaching out to Pioneer Orbitals. Our team will review your message and get back to you as soon as possible.
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                        placeholder="John Doe"
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject <span className="text-[#fdbd53]">*</span></label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="Launch Services">Launch Services</option>
                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                        <option value="Investment Inquiry">Investment Inquiry</option>
                        <option value="Media Request">Media Request</option>
                        <option value="Career Information">Career Information</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message <span className="text-[#fdbd53]">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>
                  
                  {error && (
                    <div className="bg-red-800 bg-opacity-20 border border-red-600 rounded-lg p-4">
                      <div className="flex">
                        <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-red-200">{error}</p>
                      </div>
                    </div>
                  )}
                  
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    className={`px-6 py-3 bg-[#fdbd53] text-gray-900 font-bold rounded-full hover:bg-[#cc7900] transition-colors flex items-center ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    whileHover={!submitting ? { scale: 1.05 } : {}}
                    whileTap={!submitting ? { scale: 0.95 } : {}}
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : "Send Message"}
                  </motion.button>
                  
                  <p className="mt-4 text-sm text-gray-400">
                    By submitting this form, you agree to our <a href="#" className="text-[#fdbd53] hover:underline">Privacy Policy</a>.
                  </p>
                </form>
              )}
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              className="md:col-span-5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Contact <span className="text-[#fdbd53]">Information</span>
              </h2>
              
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#fdbd53] bg-opacity-20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#fdbd53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-semibold text-white">Phone</h3>
                      <p className="text-gray-300 mt-1">+1 (425) 324-4529</p>
                      <p className="text-gray-400 text-sm mt-1">Mon-Fri from 9am to 6pm PST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#fdbd53] bg-opacity-20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#fdbd53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-gray-300 mt-1">
                        <a href="mailto:artunjay@pioneerorbitals.com" className="hover:text-[#fdbd53]">
                          artunjay@pioneerorbitals.com
                        </a>
                      </p>
                      <p className="text-gray-400 text-sm mt-1">We'll respond as soon as possible</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#fdbd53] bg-opacity-20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#fdbd53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-semibold text-white">Location</h3>
                      <p className="text-gray-300">Sammamish, WA 98074</p>
                      <p className="text-gray-400 text-sm mt-1">Headquarters & Launch Operations</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {['twitter', 'linkedin', 'facebook', 'instagram'].map((social) => (
                    <motion.a
                      key={social}
                      href={`https://${social}.com/pioneerobitals`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 hover:bg-[#fdbd53] hover:text-gray-900 transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/>
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="rounded-xl overflow-hidden h-80 relative bg-gray-700">
            {/* In a real application, you would integrate with Google Maps or similar */}
            <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#fdbd53] bg-opacity-20 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#fdbd53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-white text-lg">Pioneer Orbitals Headquarters</p>
                <p className="text-gray-400">Sammamish, WA 98074</p>
                <motion.button 
                  className="mt-4 px-4 py-2 bg-[#fdbd53] text-gray-900 font-medium rounded-full hover:bg-[#cc7900] transition-colors inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Directions
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Department Contacts Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Department <span className="text-[#fdbd53]">Contacts</span>
            </h2>
            <div className="w-24 h-1 bg-[#cc7900] mx-auto"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Reach out directly to our specialized teams for specific inquiries.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                department: "Launch Services",
                contact: "launches@pioneerorbitals.com",
                description: "For inquiries about booking a launch or payload requirements."
              },
              {
                department: "Media Relations",
                contact: "media@pioneerorbitals.com",
                description: "For press inquiries, interview requests, and media assets."
              },
              {
                department: "Investor Relations",
                contact: "investors@pioneerorbitals.com",
                description: "For investment opportunities and financial information."
              },
              {
                department: "Careers",
                contact: "careers@pioneerorbitals.com",
                description: "For employment opportunities and internship programs."
              },
              {
                department: "Academic Partnerships",
                contact: "education@pioneerorbitals.com",
                description: "For universities and research institutions interested in our academic program."
              },
              {
                department: "Technical Support",
                contact: "support@pioneerorbitals.com",
                description: "For existing customers requiring technical assistance."
              }
            ].map((dept, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-[#fdbd53] transition-colors"
                variants={fadeIn}
                whileHover={{ y: -10 }}
              >
                <h3 className="text-xl font-semibold text-white mb-3">{dept.department}</h3>
                <p className="text-gray-400 mb-4">{dept.description}</p>
                <a 
                  href={`mailto:${dept.contact}`} 
                  className="text-[#fdbd53] hover:underline flex items-center"
                >
                  {dept.contact}
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </motion.div>
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
          
          <FaqAccordion />
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-gray-300 mb-6">
              Don't see your question answered here? Contact us directly and we'll be happy to help.
            </p>
            <motion.a 
              href="#contact-form"
              className="inline-block px-6 py-3 bg-[#fdbd53] text-gray-900 font-bold rounded-full hover:bg-[#cc7900] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Now
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#fdbd53]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Ready to Reach Space?</h3>
              <p className="text-lg text-gray-800">
                Our team is standing by to help you make your space mission a reality.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                href="tel:+15551234567"
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </motion.a>
              
              <motion.a 
                href="mailto:artunjay@pioneerorbitals.com"
                className="px-6 py-3 bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#fdbd53] font-bold rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;