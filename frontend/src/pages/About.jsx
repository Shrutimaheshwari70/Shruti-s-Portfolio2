import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaGitAlt } from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiBootstrap,
  SiPython,
} from "react-icons/si";
import { SiGreensock } from "react-icons/si"; // ✅ GSAP icon

// ✅ Profile image import
import profileImg from "../assets/profile.jpg";

function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // ✅ Ordered technologies
  const technologies = [
    {
      icon: <SiJavascript className="text-3xl text-yellow-400" />,
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      icon: <FaReact className="text-3xl text-cyan-400" />,
      name: "React.js",
      link: "https://reactjs.org/docs/getting-started.html",
    },
    {
      icon: <SiGreensock className="text-3xl text-green-400" />,
      name: "GSAP",
      link: "https://greensock.com/gsap/",
    },
    {
      icon: <FaNodeJs className="text-3xl text-green-500" />,
      name: "Node.js",
      link: "https://nodejs.org/en/docs/",
    },
    {
      icon: <SiExpress className="text-3xl text-gray-300" />,
      name: "Express.js",
      link: "https://expressjs.com/",
    },
    {
      icon: <SiJavascript className="text-3xl text-red-400" />,
      name: "RESTful API",
      link: "https://restfulapi.net/",
    },
    {
      icon: <SiMongodb className="text-3xl text-green-600" />,
      name: "MongoDB",
      link: "https://www.mongodb.com/docs/",
    },
    {
      icon: <FaGitAlt className="text-3xl text-orange-500" />,
      name: "Git",
      link: "https://git-scm.com/doc",
    },
    {
      icon: <FaGithub className="text-3xl text-white" />,
      name: "GitHub",
      link: "https://docs.github.com/",
    },
        {
      icon: <FaHtml5 className="text-3xl text-orange-500" />,
      name: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      icon: <FaCss3Alt className="text-3xl text-blue-500" />,
      name: "CSS3",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      icon: <SiTailwindcss className="text-3xl text-teal-400" />,
      name: "Tailwind CSS",
      link: "https://tailwindcss.com/docs",
    },
    {
      icon: <SiBootstrap className="text-3xl text-purple-600" />,
      name: "Bootstrap",
      link: "https://getbootstrap.com/",
    },
    {
      icon: <SiPython className="text-3xl text-yellow-500" />,
      name: "Python",
      link: "https://www.w3schools.com/python/",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="text-center mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Me
            </span>
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30"></div>

              <div className="relative w-72 h-72 rounded-full overflow-hidden border-2 border-white/20 bg-gradient-to-br background-black to-gray-900">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-4xl md:text-5xl font-bold">
              Hi, I'm <span className="text-purple-400">Shruti Maheshwari</span>
            </h3>

            <p className="text-xl text-gray-300 leading-relaxed">
              A passionate{" "}
              <span className="text-cyan-400 font-semibold">
                MERN Stack Developer
              </span>{" "}
              who loves creating beautiful, responsive web applications. I enjoy
              turning complex problems into simple, elegant solutions.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              I specialize in modern web technologies and have a keen eye for
              clean UI design. When I'm not coding, I'm exploring new frameworks
              and perfecting my craft.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </div>

        {/* Technologies Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="text-center"
        >
          <motion.h3
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Technologies I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Work With
            </span>
          </motion.h3>

          <motion.div
            variants={container}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {technologies.map((tech, index) => (
              <motion.a
                key={index}
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer inline-block"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
