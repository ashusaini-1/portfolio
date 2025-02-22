import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

import { FiMenu, FiX } from "react-icons/fi";

const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const stackAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } },
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here (e.g., send data to backend)
        console.log("Form Data Submitted:", formData);
    };

    const projects = [
        {
            title: "AI-Powered Resume Builder",
            image: "https://catchin-bucket.s3.amazonaws.com/file/1730075305636_a97i0140+2.jpg",
            link: "https://example.com/project1",
        },
        {
            title: "E-Commerce Platform",
            image: "https://catchin-bucket.s3.amazonaws.com/file/1730075305636_a97i0140+2.jpg",
            link: "https://example.com/project2",
        },
        {
            title: "3D Portfolio Showcase",
            image: "https://catchin-bucket.s3.amazonaws.com/file/1730075305636_a97i0140+2.jpg",
            link: "https://example.com/project3",
        },
        {
            title: "3D Portfolio Showcase",
            image: "https://catchin-bucket.s3.amazonaws.com/file/1730075305636_a97i0140+2.jpg",
            link: "https://example.com/project3",
        },
        {
            title: "3D Portfolio Showcase",
            image: "https://catchin-bucket.s3.amazonaws.com/file/1730075305636_a97i0140+2.jpg",
            link: "https://example.com/project3",
        },
        {
            title: "3D Portfolio Showcase",
            image: "https://catchin-bucket.s3.amazonaws.com/file/1730075305636_a97i0140+2.jpg",
            link: "https://example.com/project3",
        },
    ];

    return (
        <>

            <header className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <h1 className="text-2xl font-bold">MyBrand</h1>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-8">
                        {["Home", "About", "Services", "Contact"].map((item, index) => (
                            <a
                                key={index}
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-blue-400 transition duration-300"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="md:hidden bg-gray-800 absolute top-16 left-0 w-full p-4">
                        {["Home", "About", "Services", "Contact"].map((item, index) => (
                            <a
                                key={index}
                                href={`#${item.toLowerCase()}`}
                                className="block py-2 text-center hover:text-blue-400 transition duration-300"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </header>
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black flex flex-col items-center p-6 text-white">
                {/* Hero Section */}
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-5xl bg-gray-800 shadow-xl rounded-2xl p-8 text-center"
                >
                    <div className="flex justify-center mb-6">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D5603AQFBdDiAzgl8ng/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713287009129?e=1743638400&v=beta&t=jjD6tbqcoid3ljhC3VmLR-M007Jqpwf36WBB_2o-YMk" // Replace with your image URL
                            alt="Profile"
                            className="w-40 h-40 rounded-full border-8 border-white shadow-lg"
                        />
                    </div>
                    <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Ashu Saini</h1>
                    <p className="text-xl font-light mt-2">Software Engineer | Problem Solver | Tech Enthusiast</p>
                    <div className="flex justify-center gap-6 mt-6">
                        <a href="https://github.com/ashusaini-1" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-4xl hover:text-gray-300" />
                        </a>
                        <a href="https://www.linkedin.com/in/ashu-saini-295a781b1/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-4xl hover:text-gray-300" />
                        </a>
                        <a href="mailto:ashusaini17354@gmail.com">
                            <FaEnvelope className="text-4xl hover:text-gray-300" />
                        </a>
                    </div>
                </motion.header>

                {/* About Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="w-full max-w-5xl bg-gray-800 shadow-xl rounded-2xl p-8 mt-8"
                >
                    <h2 className="text-3xl font-semibold text-center">About Me</h2>
                    <p className="mt-4 text-lg text-gray-300 text-center">
                        I am a passionate software developer dedicated to building innovative and scalable solutions that enhance user experiences and drive efficiency. With expertise in React, Node.js, MongoDB, and Tailwind CSS, I specialize in developing high-performance web applications tailored to diverse industry needs.
                        <br /><br />
                        My focus is on writing clean, maintainable code, designing seamless UI/UX experiences, and architecting robust backend systems that ensure security and scalability. Whether it’s custom web applications, API development, automation solutions, or cloud integration, I bring technical excellence and creativity to every project.
                        <br /><br />
                        Committed to continuous learning and problem-solving, I thrive on transforming complex challenges into intuitive, user-friendly solutions. Let's build something extraordinary—one line of code at a time.
                    </p>
                </motion.section>

                {/* Services Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    variants={stackAnimation}
                    transition={{ delay: 1, duration: 1 }}
                    className="w-full max-w-5xl bg-gray-800 shadow-xl rounded-2xl p-8 mt-8"
                >
                    <h2 className="text-3xl font-semibold text-center">What We Offer</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-gray-700 rounded-lg p-6 text-center shadow-md">
                            <FaLaptopCode className="text-4xl mb-4 text-blue-400" />
                            <h3 className="text-xl font-semibold">App Development</h3>
                            <p className="mt-2 text-gray-300">Custom mobile and web applications that are built for performance, security, and scalability.</p>
                        </div>
                        <div className="bg-gray-700 rounded-lg p-6 text-center shadow-md">
                            <FaLaptopCode className="text-4xl mb-4 text-blue-400" />
                            <h3 className="text-xl font-semibold">Website Development</h3>
                            <p className="mt-2 text-gray-300">Responsive and interactive websites tailored to meet your business goals and enhance user experience.</p>
                        </div>
                        <div className="bg-gray-700 rounded-lg p-6 text-center shadow-md">
                            <FaLaptopCode className="text-4xl mb-4 text-blue-400" />
                            <h3 className="text-xl font-semibold">Desktop Apps</h3>
                            <p className="mt-2 text-gray-300">Cross-platform desktop applications built to offer seamless experiences on both Windows and macOS.</p>
                        </div>
                        <div className="bg-gray-700 rounded-lg p-6 text-center shadow-md">
                            <FaLaptopCode className="text-4xl mb-4 text-blue-400" />
                            <h3 className="text-xl font-semibold">Digital Marketing</h3>
                            <p className="mt-2 text-gray-300">Digital marketing strategies including SEO, social media campaigns, and paid advertisements to grow your online presence.</p>
                        </div>
                    </div>
                </motion.section>

                {/* Skills Section */}
                <motion.section
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    variants={stackAnimation}
                    className="w-full max-w-5xl bg-gray-800 shadow-xl rounded-2xl p-8 mt-8"
                >
                    <h2 className="text-3xl font-semibold text-center">Skills</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">                    {["React.js", "Next.js", "Node.js", "TypeScript", "GraphQL", "Tailwind CSS", "Docker", "AWS", "MongoDB", "Framer Motion", "Three.js"].map(skill => (
                        <span key={skill} className="px-5 py-3 bg-gray-700 rounded-lg text-white font-medium text-center shadow-lg">{skill}</span>
                    ))}
                    </div>
                </motion.section>

                {/* Projects Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    variants={stackAnimation}
                    className="w-full max-w-5xl bg-gray-800 shadow-xl rounded-2xl p-8 mt-8"
                    viewport={{ once: true, amount: 0.2 }} // Trigger animation when section is 20% visible
                >
                    <h2 className="text-3xl font-semibold text-center">Projects</h2>

                    <div className="mt-6 space-y-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.5 + index * 0.2, // Staggering delay for each project
                                    duration: 1,
                                }}
                                className="bg-gray-700 rounded-lg shadow-md overflow-hidden p-6"
                            >
                                {/* Project Title & Button Row */}
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:underline bg-blue-600 text-white px-4 py-2 rounded-lg"
                                    >
                                        Live Project
                                    </a>
                                </div>

                                {/* Image Grid Below */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-60 object-cover rounded-lg"
                                    />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-60 object-cover rounded-lg"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>



                {/* Contact Section */}



                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    variants={stackAnimation}
                    transition={{ delay: 2, duration: 1 }}
                    className="w-full max-w-5xl bg-gray-800 flex flex-col sm:flex-row gap-6 shadow-xl rounded-2xl p-8 mt-8"
                >
                    {/* Google Map Section */}
                    <div className="w-full sm:w-1/2">
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDVAVnUJdconxhIEZDDmOK42Jj31WV-QaY&q=India"
                                width="100%"
                                height="450"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="w-full sm:w-1/2">
                        <h2 className="text-3xl font-semibold text-center text-white">Contact Us</h2>
                        <form onSubmit={handleSubmit} className="mt-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-lg font-semibold text-gray-300">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-lg font-semibold text-gray-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label htmlFor="message" className="block text-lg font-semibold text-gray-300">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.section>

            </div>
        </>
    );
};

export default Portfolio;
