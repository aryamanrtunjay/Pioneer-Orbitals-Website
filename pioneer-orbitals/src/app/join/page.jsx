'use client';

import React, { useState, useRef } from 'react';
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
const CareersFaqAccordion = () => {
  // State to track which FAQ items are expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What is the hiring process like?",
      answer: "Our hiring process typically consists of 4 stages: (1) Initial application review, (2) Screening call with HR, (3) Technical or role-specific interview, and (4) Final interview with the team lead and potentially our CEO. The process usually takes 2-4 weeks from application to offer."
    },
    {
      question: "Do you offer relocation assistance?",
      answer: "Yes, for certain roles we offer relocation assistance packages for candidates who need to move to be closer to our facilities. The specifics depend on the role and location, and are discussed during the offer stage."
    },
    {
      question: "What benefits do you offer?",
      answer: "We offer a comprehensive benefits package including competitive salary, health/dental/vision insurance, 401(k) matching, flexible work arrangements, generous PTO, parental leave, continuing education stipends, and of course, the opportunity to be part of humanity's expansion into space."
    },
    {
      question: "Do you sponsor work visas?",
      answer: "Yes, for qualified candidates, we do sponsor work visas. Pioneer Orbitals values diverse perspectives and actively seeks talent from around the world. Please note the visa sponsorship process may extend the hiring timeline."
    },
    {
      question: "Do you offer internships or co-op programs?",
      answer: "Yes, we offer internships for students and recent graduates throughout the year, with a larger program during summer months. Our internships are paid positions and provide hands-on experience working on real space technology and missions."
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

// Job Openings Accordion Component
const JobOpenings = () => {
  // State to track which job posting is expanded
  const [expandedJob, setExpandedJob] = useState(null);
  
  // State to track which job is being applied for
  const [applyingForJob, setApplyingForJob] = useState(null);
  
  // Job openings data
  const openings = [
    {
      id: 'propulsion-engineer',
      title: 'Senior Propulsion Engineer',
      department: 'Engineering',
      location: 'Houston, TX',
      type: 'Full-time',
      description: "We're seeking an experienced propulsion engineer to lead the development and testing of our next-generation rocket propulsion systems for our Small-Lift Vehicles.",
      responsibilities: [
        'Design and develop liquid rocket engine components and systems',
        'Lead test campaigns for propulsion hardware',
        'Analyze test data and implement design improvements',
        'Collaborate with cross-functional teams to integrate propulsion systems',
        'Mentor junior engineers and contribute to propulsion technology roadmap'
      ],
      requirements: [
        'M.S. or Ph.D. in Aerospace Engineering, Mechanical Engineering, or related field',
        '5+ years of experience in liquid rocket propulsion development',
        'Expertise in propulsion system design, analysis, and testing',
        'Experience with cryogenic propellants and propulsion system test operations',
        'Strong problem-solving skills and attention to detail'
      ]
    },
    {
      id: 'avionics-engineer',
      title: 'Avionics Engineer',
      department: 'Engineering',
      location: 'Houston, TX',
      type: 'Full-time',
      description: "Join our avionics team to develop the flight control and guidance systems that ensure precise orbital insertions for our customers' satellites.",
      responsibilities: [
        'Design and develop flight control and guidance systems',
        'Implement and test embedded software for flight hardware',
        'Perform verification and validation testing of avionics systems',
        'Develop simulation tools for mission planning and analysis',
        'Participate in integration and testing of flight hardware'
      ],
      requirements: [
        'B.S. or M.S. in Electrical Engineering, Computer Engineering, or related field',
        '3+ years of experience in spacecraft avionics or similar aerospace systems',
        'Strong programming skills in C/C++, Python, or similar languages',
        'Experience with real-time embedded systems and RTOS',
        'Familiarity with spacecraft dynamics and orbital mechanics'
      ]
    },
    {
      id: 'mission-operations',
      title: 'Mission Operations Specialist',
      department: 'Operations',
      location: 'Houston, TX',
      type: 'Full-time',
      description: 'Help plan and execute satellite launch missions as part of our operations team, ensuring mission success for our customers from integration through deployment.',
      responsibilities: [
        'Develop mission timelines and procedures for launch operations',
        'Coordinate payload integration activities with customers',
        'Support mission planning and trajectory analysis',
        'Monitor vehicle systems during launch operations',
        'Analyze post-mission data and prepare reports for customers'
      ],
      requirements: [
        'B.S. in Aerospace Engineering, Physics, or related field',
        '2+ years of experience in spacecraft operations or similar role',
        'Strong understanding of orbital mechanics and mission planning',
        'Excellent problem-solving and communication skills',
        'Ability to work in high-pressure environments and make critical decisions'
      ]
    },
    {
      id: 'business-development',
      title: 'Business Development Manager',
      department: 'Business',
      location: 'Remote (US-based)',
      type: 'Full-time',
      description: 'Drive growth by identifying new market opportunities and building relationships with potential customers in the small satellite and space services sectors.',
      responsibilities: [
        'Identify and pursue new business opportunities in the small satellite market',
        'Develop and maintain relationships with key customers and partners',
        'Prepare and deliver technical and commercial proposals',
        'Negotiate contracts and service agreements',
        'Work with engineering and operations teams to ensure customer needs are met'
      ],
      requirements: [
        'B.S. in Business, Engineering, or related field',
        '5+ years of experience in business development, preferably in aerospace or technology',
        'Strong understanding of the commercial space industry and market trends',
        'Excellent presentation and negotiation skills',
        'Willingness to travel up to 30% of the time'
      ]
    },
    {
      id: 'mechanical-engineer',
      title: 'Mechanical Design Engineer',
      department: 'Engineering',
      location: 'Houston, TX',
      type: 'Full-time',
      description: 'Design and develop mechanical systems and structures for our launch vehicles, ensuring reliability, performance, and manufacturability.',
      responsibilities: [
        'Design mechanical components and systems for launch vehicles',
        'Create detailed engineering drawings and specifications',
        'Perform structural and thermal analyses using CAD/CAE tools',
        'Support manufacturing and integration activities',
        'Troubleshoot and resolve mechanical issues during testing'
      ],
      requirements: [
        'B.S. or M.S. in Mechanical Engineering or Aerospace Engineering',
        '3+ years of experience in mechanical design for aerospace applications',
        'Proficiency in CAD software (SolidWorks, Creo, or similar)',
        'Experience with structural analysis tools and methods',
        'Knowledge of manufacturing processes and design for manufacturability'
      ]
    }
  ];
  
  // Toggle job expansion
  const toggleJob = (id) => {
    setExpandedJob(expandedJob === id ? null : id);
  };
  
  // Function to start application process for a specific job
  const applyForJob = (id, title) => {
    setApplyingForJob({ id, title });
    
    // Scroll to application form
    setTimeout(() => {
      document.getElementById('application-form').scrollIntoView({ 
        behavior: 'smooth'
      });
    }, 100);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-bold text-white">Current Openings</h3>
        <div className="hidden md:flex space-x-4">
          <select className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#fdbd53]">
            <option value="">All Departments</option>
            <option value="engineering">Engineering</option>
            <option value="operations">Operations</option>
            <option value="business">Business</option>
          </select>
          <select className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#fdbd53]">
            <option value="">All Locations</option>
            <option value="houston">Houston, TX</option>
            <option value="remote">Remote</option>
          </select>
        </div>
      </div>
      
      {openings.map((job) => (
        <motion.div
          key={job.id}
          className={`bg-gray-900 rounded-lg border ${
            expandedJob === job.id ? 'border-[#fdbd53]' : 'border-gray-700'
          } overflow-hidden`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ borderColor: '#fdbd53' }}
        >
          <div 
            className="flex flex-col md:flex-row md:items-center justify-between p-6 cursor-pointer"
            onClick={() => toggleJob(job.id)}
          >
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">{job.title}</h4>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center text-gray-400">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {job.department}
                </span>
                <span className="inline-flex items-center text-gray-400">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </span>
                <span className="inline-flex items-center text-gray-400">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {job.type}
                </span>
              </div>
            </div>
            
            <div className="flex items-center mt-4 md:mt-0">
              <motion.button
                className="bg-transparent border-2 border-[#fdbd53] text-[#fdbd53] hover:bg-[#fdbd53] hover:text-gray-900 px-4 py-2 rounded-full mr-4 text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  applyForJob(job.id, job.title);
                }}
              >
                Apply Now
              </motion.button>
              
              <motion.span
                className="text-[#fdbd53]"
                animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.span>
            </div>
          </div>
          
          <AnimatePresence initial={false}>
            {expandedJob === job.id && (
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
                <div className="px-6 pb-6 border-t border-gray-700 pt-4 text-gray-300">
                  <p className="mb-4">{job.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-white font-semibold mb-2">Responsibilities:</h5>
                    <ul className="list-disc list-inside space-y-1">
                      {job.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="text-white font-semibold mb-2">Requirements:</h5>
                    <ul className="list-disc list-inside space-y-1">
                      {job.requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-end">
                    <motion.button
                      className="bg-[#fdbd53] hover:bg-[#cc7900] text-gray-900 px-6 py-2 rounded-full text-sm font-medium transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        applyForJob(job.id, job.title);
                      }}
                    >
                      Apply for this Position
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
      
      <p className="text-gray-400 text-center mt-8">
        Don't see the perfect role? We're always looking for talented individuals.{' '}
        <button 
          className="text-[#fdbd53] hover:underline"
          onClick={() => applyForJob('general', 'General Application')}
        >
          Submit a general application
        </button>
      </p>
    </div>
  );
};

// Application Form Component
const ApplicationForm = ({ selectedJob }) => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    coverLetter: '',
    heardAbout: '',
    startDate: '',
    relocation: '',
  });
  
  // Resume file state
  const [resumeFile, setResumeFile] = useState(null);
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  // Form validation state
  const [errors, setErrors] = useState({});
  
  // Ref for file input
  const fileInputRef = useRef(null);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  // Handle resume file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({
          ...errors,
          resume: 'File size must be less than 5MB'
        });
        return;
      }
      
      // Check file type
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        setErrors({
          ...errors,
          resume: 'File must be a PDF or Word document'
        });
        return;
      }
      
      setResumeFile(file);
      setErrors({
        ...errors,
        resume: ''
      });
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Required fields
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!resumeFile) newErrors.resume = 'Resume is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // In a real implementation, you would use FormData to handle file uploads
      const formDataObj = new FormData();
      
      // Append form fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value);
      });
      
      // Append job information
      formDataObj.append('jobId', selectedJob?.id || 'general');
      formDataObj.append('jobTitle', selectedJob?.title || 'General Application');
      
      // Append resume file
      if (resumeFile) {
        formDataObj.append('resume', resumeFile);
      }
      
      // In a real implementation, here you would send the formDataObj to your backend API
      // which would then send an email to artunjay@pioneerorbitals.com
      // Something like this (pseudo-code):
      //
      // const response = await fetch('/api/submit-application', {
      //   method: 'POST',
      //   body: formDataObj
      // });
      //
      // if (!response.ok) throw new Error('Failed to submit application');
      
      // For this example, let's simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linkedin: '',
        portfolio: '',
        coverLetter: '',
        heardAbout: '',
        startDate: '',
        relocation: '',
      });
      setResumeFile(null);
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitError('There was a problem submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div id="application-form" className="bg-gray-800 rounded-lg p-8 border border-gray-700">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">
          {selectedJob 
            ? `Apply for: ${selectedJob.title}` 
            : 'Submit Your Application'}
        </h3>
        <p className="text-gray-300">
          Please complete the form below to apply. All fields marked with * are required.
        </p>
      </div>
      
      {submitSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-green-800 bg-opacity-20 border border-green-600 rounded-lg p-6 mb-8"
        >
          <div className="flex items-center">
            <svg className="w-6 h-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h4 className="text-lg font-semibold text-white">Application Submitted Successfully!</h4>
          </div>
          <p className="text-gray-300 mt-2">
            Thank you for your interest in joining Pioneer Orbitals. We have received your application and will review it soon. If your qualifications match our needs, we'll contact you for next steps.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Personal Information</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  First Name <span className="text-[#fdbd53]">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-gray-700 border ${
                    errors.firstName ? 'border-red-500' : 'border-gray-600'
                  } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name <span className="text-[#fdbd53]">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-gray-700 border ${
                    errors.lastName ? 'border-red-500' : 'border-gray-600'
                  } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent`}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email <span className="text-[#fdbd53]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-gray-700 border ${
                    errors.email ? 'border-red-500' : 'border-gray-600'
                  } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                />
              </div>
            </div>
          </div>
          
          {/* Professional Information */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Professional Information</h4>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-300 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
                
                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-gray-300 mb-2">
                    Portfolio/Website
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-300 mb-2">
                  Resume/CV <span className="text-[#fdbd53]">*</span>
                </label>
                <div className="flex items-center">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                  />
                  <div className="flex flex-1 items-center p-2 bg-gray-700 border border-gray-600 rounded-lg text-white">
                    <span className="flex-1 truncate">
                      {resumeFile ? resumeFile.name : 'No file selected'}
                    </span>
                  </div>
                  <label 
                    htmlFor="resume"
                    className="ml-3 px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg cursor-pointer"
                  >
                    Browse
                  </label>
                </div>
                <p className="mt-1 text-sm text-gray-400">
                  Accepted formats: PDF, DOC, DOCX. Maximum size: 5MB
                </p>
                {errors.resume && (
                  <p className="mt-1 text-sm text-red-500">{errors.resume}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-300 mb-2">
                  Cover Letter / Additional Information
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                  placeholder="Tell us why you're interested in joining Pioneer Orbitals and any additional information you'd like us to know."
                ></textarea>
              </div>
            </div>
          </div>
          
          {/* Additional Information */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Additional Information</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="heardAbout" className="block text-sm font-medium text-gray-300 mb-2">
                  How did you hear about us?
                </label>
                <select
                  id="heardAbout"
                  name="heardAbout"
                  value={formData.heardAbout}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                >
                  <option value="">Please select</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="indeed">Indeed</option>
                  <option value="glassdoor">Glassdoor</option>
                  <option value="website">Company Website</option>
                  <option value="referral">Employee Referral</option>
                  <option value="conference">Conference/Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-300 mb-2">
                  Earliest Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="relocation" className="block text-sm font-medium text-gray-300 mb-2">
                  Are you willing to relocate?
                </label>
                <select
                  id="relocation"
                  name="relocation"
                  value={formData.relocation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fdbd53] focus:border-transparent"
                >
                  <option value="">Please select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="maybe">It depends on the offer</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Submission section */}
          <div className="pt-6 border-t border-gray-700">
            {submitError && (
              <div className="mb-6 bg-red-800 bg-opacity-20 border border-red-600 rounded-lg p-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-red-200">{submitError}</p>
                </div>
              </div>
            )}
            
            <div className="flex items-start mb-6">
              <input
                type="checkbox"
                id="consent"
                className="mt-1 mr-3 h-4 w-4 text-[#fdbd53] rounded focus:ring-[#fdbd53] bg-gray-700 border-gray-600"
                required
              />
              <label htmlFor="consent" className="text-gray-300 text-sm">
                By submitting this application, I consent to Pioneer Orbitals collecting, storing, and processing my personal information for recruitment purposes. I understand that my application will be emailed to the hiring team, and I may be contacted regarding job opportunities.
              </label>
            </div>
            
            <div className="flex justify-end">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 bg-[#fdbd53] text-gray-900 rounded-full font-bold flex items-center hover:bg-[#cc7900] transition-colors ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : "Submit Application"}
              </motion.button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

const JoinPage = () => {
  // State to track which job is being applied for
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div>
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        {/* Background with parallax effect */}
        <div className="absolute inset-0 bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/team-working.jpg')] bg-cover bg-center opacity-30"></div>
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
              Join Our <span className="text-[#fdbd53]">Mission</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Be part of the team that's expanding humanity's reach into space and creating a sustainable future beyond Earth.
            </p>
            <motion.a 
              href="#open-positions"
              className="bg-[#fdbd53] hover:bg-[#cc7900] text-gray-900 font-bold py-3 px-8 rounded-full text-lg inline-block"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(253, 189, 83)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      {/* Why Join Us Section */}
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
              Why Join <span className="text-[#fdbd53]">Pioneer Orbitals</span>
            </h2>
            <div className="w-24 h-1 bg-[#cc7900] mx-auto"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              We're building the future of space access, and we need passionate individuals who share our vision.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Meaningful Impact",
                description: "Your work directly contributes to democratizing access to space and building the infrastructure for humanity's expansion beyond Earth.",
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Innovative Technology",
                description: "Work with cutting-edge aerospace technology, solving challenging problems and pushing the boundaries of what's possible.",
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                title: "Collaborative Culture",
                description: "Join a diverse team of engineers, scientists, and business professionals united by a shared passion for space exploration.",
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              },
              {
                title: "Career Growth",
                description: "Develop your skills and advance your career in a rapidly growing industry with opportunities for personal and professional development.",
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              },
              {
                title: "Comprehensive Benefits",
                description: "Enjoy competitive compensation, health insurance, retirement plans, flexible work arrangements, and other benefits that support your wellbeing.",
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Work That Matters",
                description: "Be part of a mission that is shaping the future of space transportation, satellite deployment, and sustainable space utilization.",
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)" }}
              >
                <div className="text-[#fdbd53] mb-6 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Testimonials Section */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/stars-bg.jpg')] bg-cover bg-center opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet Our <span className="text-[#fdbd53]">Team</span>
            </h2>
            <div className="w-24 h-1 bg-[#cc7900] mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Sarah Chen",
                role: "Propulsion Engineer",
                quote: "Every day at Pioneer Orbitals brings a new challenge. We're constantly pushing the boundaries of what's possible in propulsion technology, and it's incredibly rewarding to see our designs perform in real missions.",
                image: "/images/engineer-1.jpg"
              },
              {
                name: "Marcus Johnson",
                role: "Avionics Lead",
                quote: "The collaborative environment here is unlike anywhere I've worked before. We're a tight-knit team tackling enormous technical challenges together, with the shared goal of revolutionizing access to space.",
                image: "/images/engineer-2.jpg"
              },
              {
                name: "Elena Rodriguez",
                role: "Mission Operations Specialist",
                quote: "Working at Pioneer Orbitals means being part of something bigger than yourself. Knowing that our work is helping researchers, companies, and educational institutions reach space is incredibly motivating.",
                image: "/images/engineer-3.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mr-4 overflow-hidden">
                      {/* Here you would use an actual team member image */}
                      <svg className="w-10 h-10 text-[#fdbd53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-[#fdbd53]">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Open <span className="text-[#fdbd53]">Positions</span>
            </h2>
            <div className="w-24 h-1 bg-[#cc7900] mx-auto"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Join our growing team of space industry professionals who are making the future of space transportation a reality.
            </p>
          </motion.div>
          
          <JobOpenings />
        </div>
      </section>
      
      {/* Application Form Section */}
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
              Apply <span className="text-[#fdbd53]">Now</span>
            </h2>
            <div className="w-24 h-1 bg-[#cc7900] mx-auto"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Take the first step toward your career in space. Complete the application form below, and our team will review your qualifications.
            </p>
          </motion.div>
          
          <ApplicationForm selectedJob={selectedJob} />
        </div>
      </section>
      
      {/* FAQ Section */}
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
              Frequently Asked <span className="text-[#fdbd53]">Questions</span>
            </h2>
            <div className="w-24 h-1 bg-[#cc7900] mx-auto"></div>
          </motion.div>
          
          <CareersFaqAccordion />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#fdbd53]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Ready to Make an Impact?</h3>
              <p className="text-lg text-gray-800">
                Join our team and help pioneer the future of space transportation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                href="#open-positions"
                className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Positions
              </motion.a>
              
              <motion.a 
                href="#application-form"
                className="px-8 py-3 bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#fdbd53] font-bold rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinPage;