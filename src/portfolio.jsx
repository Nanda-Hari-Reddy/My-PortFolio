import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaTwitter} from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import  profile_1  from './images/profile_1.jpg'
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('myself');
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const [isHovered, setIsHovered] = useState(false);

  const teamMember = {
    name: 'Nanda Hari Reddy',
    role: 'Java Full Stack Developer',
    bio: 'I’m a Full Stack Java Developer with 1 year hands on experience in building scalable, high-performance web applications. My expertise spreads across backend development with Java and Spring Boot, as well as creating intuitive frontends using React and JavaScript. I specialize in REST APIs, microservices architecture, and database management, delivering end-to-end solutions that are both user-friendly and robust. Passionate about solving complex problems and continuously learning new technologies, I thrive in dynamic environments where I can contribute to both backend logic and frontend design.',
    image: profile_1 ,
    social: {
      linkedin: 'https://www.linkedin.com/in/nanda-hari-reddy/',
      twitter: 'https://twitter.com/janedoe',
      github: 'https://github.com/Nanda-Hari-Reddy',
      leetcode: 'https://leetcode.com/u/bknandahari2000/',
    }
  };

  const skills = [
    { name: 'Java', level: 100 },
    { name: 'Spring Boot', level: 90 },
    { name: 'DSA', level: 80 },
    { name: 'REST APIs', level: 90 },
    { name: 'Microservices', level: 50 },
    { name: 'SQL', level: 80 },
    { name: 'JavaScript', level:60 },
    { name: 'React', level: 60 },
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 70 },
    { name: 'GIT', level: 80 },
    { name: 'Docker', level: 50 },
    { name: 'AWS EC2 ', level: 100 },
  ];

  const getColorClass = (level) => {
    if (level >= 80) return 'bg-green-500';
    if (level >= 60) return 'bg-blue-500';
    if (level >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  useEffect(() => {
    gsap.fromTo(
      '.section',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React and Node.js',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: 'https://example.com/ecommerce-project.jpg',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app built with React Native',
      techStack: ['React Native', 'Firebase', 'Redux'],
      image: 'https://example.com/task-management-app.jpg',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS',
      techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://example.com/portfolio-website.jpg',
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">John Doe</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['myself', 'skills', 'education', 'projects', 'achievements', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`${
                      activeSection === item ? 'bg-gray-700' : 'hover:bg-gray-700'
                    } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['myself', 'skills', 'education', 'projects', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`${
                    activeSection === item ? 'bg-gray-700' : 'hover:bg-gray-700'
                  } block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-300 ease-in-out`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <section id="myself" className="section min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
            <p className="text-xl max-w-2xl mx-auto">Passionate Full Stack Java Developer with a strong foundation in building scalable web applications. Expertise in Java, Spring Boot, REST APIs, and modern front-end frameworks. Driven to create efficient, user-friendly solutions from concept to deployment.</p>
          </motion.div>
        </section>

        <section id="myself" className="section min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl text-center mb-8">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          <div 
            className="relative w-64 h-64 overflow-hidden rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={teamMember.image}
              alt={`Profile picture of ${teamMember.name}`}
              className="object-cover w-full h-full"
            />
            {isHovered && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white text-center px-4">{teamMember.name}<br />{teamMember.role}</p>
              </div>
            )}
          </div>
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold text-gray-100">{teamMember.name}</h3>
            <p className="text-xl text-amber-500 font-semibold">{teamMember.role}</p>
            <p className="text-gray-100 leading-relaxed">{teamMember.bio}</p>
            <div className="flex space-x-4 pt-4">
              <a href={teamMember.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500 transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href={teamMember.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
              <a href={teamMember.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors duration-300">
                <FaGithub size={24} />
              </a>
              <a href={teamMember.social.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors duration-300">
              <SiLeetcode size={24} />
              </a>
              <a href= "mailto:bknandahari2000@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors duration-300">
              <BiLogoGmail  size={24} />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>

        <section id="skills" className="section min-h-screen items-center justify-center bg-gradient-to-b from-gray-800 to-gray-700">
        <div className="max-w-4xl mx-auto p-6 bg-gray-200 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">My Skill Set</h2>
                <div className="space-y-4">
                    {skills.map((skill) => (
                    <div key={skill.name} className="relative">
                        <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-bold text-orange-600">{skill.name}</span>
                        <span className="text-sm font-bold text-blue-900">{skill.level}%</span>
                        </div>
                        <div
                        className="h-4 bg-gray-300 rounded-full overflow-hidden"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        >
                        <div
                            className={`h-full ${getColorClass(skill.level)} transition-all duration-300 ease-in-out`}
                            style={{ width: `${skill.level}%` }}
                            role="progressbar"
                            aria-valuenow={skill.level}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                        </div>
                        {hoveredSkill === skill && (
                        <div className="absolute top-full left-0 mt-2 p-2 bg-white rounded shadow-md text-sm z-10">
                            <p><strong>{skill.name}</strong>: {skill.level}% proficiency</p>
                            <p>Click for more details</p>
                        </div>
                        )}
                    </div>
                    ))}
                </div>
                </div>
        </section>

        <section id="education" className="section min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-700 to-gray-800">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <ul className="space-y-6">
              <li>
                <h3 className="text-2xl font-semibold">Bachelor of Science in Computer Science</h3>
                <p>University of Technology, 2016-2020</p>
              </li>
              <li>
                <h3 className="text-2xl font-semibold">Master of Science in Software Engineering</h3>
                <p>Tech Institute, 2020-2022</p>
              </li>
            </ul>
          </div>
        </section>

        <section id="projects" className="section min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-700">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-600 p-6 rounded-lg shadow-lg cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="section min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-700 to-gray-800">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Achievements</h2>
            <ul className="space-y-6">
              <li>
                <h3 className="text-2xl font-semibold">Best Innovative Project Award</h3>
                <p>Annual Tech Expo, 2021</p>
              </li>
              <li>
                <h3 className="text-2xl font-semibold">1st Place in Hackathon</h3>
                <p>CodeFest 2022</p>
              </li>
              <li>
                <h3 className="text-2xl font-semibold">Outstanding Academic Achievement</h3>
                <p>University of Technology, 2020</p>
              </li>
            </ul>
          </div>
        </section>

        <section id="contact" className="section min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">John Doe</h3>
              <p>Web Developer & Designer</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl hover:text-blue-500 transition-colors duration-300" />
              </a>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-blue-500 transition-colors duration-300" />
              </a>
              <a href="mailto:john@example.com">
                <FaEnvelope className="text-2xl hover:text-blue-500 transition-colors duration-300" />
              </a>
            </div>
            <a
              href="/resume.pdf"
              download
              className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg max-w-3xl w-full">
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-md mb-4" />
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={closeProjectModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
