import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

// Importing components and forwarding refs
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Refs for scroll
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-black text-white">

      {/* Cursor-following Glow Background */}
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
          transition: "background 0.1s ease",
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="w-48 h-48 rounded-full border-4 border-purple-600 overflow-hidden mx-auto shadow-lg">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-4 text-center text-white"
          >
            Hello, I'm{" "}
            <span className="inline-flex flex-wrap gap-1 justify-center">
              {[..."Shruti Maheshwari"].map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, x: -20, y: 20, rotate: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="inline-block bg-clip-text text-transparent animate-gradient bg-[linear-gradient(90deg,#a855f7,#ec4899,#facc15,#a855f7)] bg-[length:200%_200%]"
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2l text-gray-300 mb-8 max-w-2xl">
            I'm a MERN Stack Developer crafting powerful, responsive, and accessible web applications using MongoDB, Express.js, React, and Node.js. I transform ideas into scalable digital solutions with clean UI and seamless user experience.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium"
            >
              View Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-8 py-3 border border-purple-600 rounded-lg font-medium"
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-20 flex gap-6 flex-wrap justify-center"
          >
            {['React.js', 'Node.js', 'Bootstrap', 'Tailwind CSS','Javascript', 'Express.js'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ y: -5 }}
                className="px-4 py-2 bg-gray-900 rounded-full text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Down Icon */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Sections with refs inside */}
      <div ref={aboutRef}>
        <div style={{ scrollMarginTop: '100px' }}>
          <About />
        </div>
      </div>

      <div ref={projectsRef}>
        <div style={{ scrollMarginTop: '100px' }}>
          <Projects />
        </div>
      </div>

      <div ref={contactRef}>
        <div style={{ scrollMarginTop: '100px' }}>
          <Contact />
        </div>
      </div>

    </div>
  );
}

export default Home;
