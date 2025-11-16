import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      id: 1,
      title: "Film-flicks Movie App",
      description:
        "Film-Flicks: Discover, explore, browse, and stream trending movies, shows, trailers, and exclusive content seamlessly.",
      tags: ["React.js", "HTML5", "Tailwind CSS", "JavaScript"],
      image: "/images/project1.png",
      codeUrl: "https://github.com/Shrutimaheshwari70/film-flicks-movie",
      liveDemoUrl: "https://film-flicksmovie.netlify.app/",
      gradient: "from-red-500 to-pink-500",
    },
    {
      id: 6,
      title: "Hisaab-kitab",
      description:
        "A simple and lightweight expense tracking web app built using Node.js, Express, and EJS. It allows users to create, edit, view, and delete daily expense records in a clean and minimal interface. Perfect for managing personal or household accounts quickly.",
      tags: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "JavaScript",
        "ejs",
        "espress.js",
        "node.js",
      ],
      image: "/images/project6.png",
      codeUrl: "https://github.com/Shrutimaheshwari70/Hisab-kitab",
      liveDemoUrl: "https://hisab-kitab-2.onrender.com/",
      gradient: "from-emerald-500 to-lime-500",
    },
    {
      id: 2,
      title: "Admin Panel",
      description:
        "Secure, user-friendly dashboard to manage users, content, settings, permissions, analytics, and control overall app functionality.",
      tags: ["React.js", "HTML5", "Tailwind CSS", "JavaScript"],
      image: "/images/project2.png",
      codeUrl: "https://github.com/Shrutimaheshwari70/Admin-panel",
      liveDemoUrl: "https://admin-panel02.netlify.app/",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      title: "Disability App",
      description:
        "A physical or mental condition that significantly limits a person's movements, senses, communication, or daily life activities.",
      tags: ["React.js", "HTML5", "Tailwind CSS", "JavaScript"],
      image: "/images/project4.png",
      codeUrl: "https://github.com/Shrutimaheshwari70/disebility-react",
      liveDemoUrl: "https://disability02.netlify.app/",
      gradient: "to-teal-500",
    },
     {
      id: 5,
      title: "E-commerce App",
      description:
        "A full-featured E-commerce web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).",
      tags: ["React.js","Mongodb","Express.js","Node.js","cloudinary","Multer" "Payment Gateway","HTML5", "Tailwind CSS", "JavaScript"],
      image: "/images/project1.png",
      codeUrl: "https://github.com/Shrutimaheshwari70/film-flicks-movie",
      liveDemoUrl: "https://e-commerce-fullstack-1-7lha.onrender.com/",
      gradient: "from-red-500 to-pink-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
          className="text-center mb-20"
        >
          <motion.h1 ref={ref} className="text-5xl md:text-6xl font-bold mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Projects
            </span>
          </motion.h1>
          <motion.p className="max-w-2xl mx-auto text-xl text-gray-400 leading-relaxed">
            A collection of projects that showcase my skills and passion for
            creating innovative web solutions
          </motion.p>
          <motion.div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {projects.map((project) => {
            const [refCard, inView] = useInView({ triggerOnce: true });
            return (
              <motion.div
                key={project.id}
                ref={refCard}
                variants={cardVariants}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  {inView && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-t-2xl brightness-110 contrast-110"
                    />
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-gray-300 transition-colors text-sm font-medium"
                    >
                      <FiGithub className="mr-2 text-base" />
                      Code
                    </a>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-400 hover:underline transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Want to see more projects?
          </h3>
          <motion.a
            href="https://github.com/Shrutimaheshwari70"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Visit My GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
});

export default Projects;
