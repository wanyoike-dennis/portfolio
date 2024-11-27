import { Link } from 'react-router-dom';
import pic from '../assets/bac.jpg'
import { Project } from '../types/projects';
import { Linkedin, Github, Twitter } from "lucide-react";


interface ProjectsListProps {
  projects: Project[]; 
  
}

export default function HomePage( 
  { projects} : ProjectsListProps
) {
        // Function to pick a random subset of projects
const getRandomProjects = (projects: Project[], numberOfProjects: number): Project[] => {
  const shuffled = [...projects].sort(() => Math.random() - 0.5); // Shuffle the projects array
  return shuffled.slice(0, numberOfProjects); // Return the first `numberOfProjects` after shuffling
};

  // Get a random subset of 3 projects
  const randomProjects = getRandomProjects(projects, 3); // Always display 3 random projects
    return (
      <div className="bg-[#1f1f21] text-white">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: `url(${pic})` }}>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center relative z-10">
            <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl mb-8">Crafting innovative solutions in web and mobile development, AI, and more.</p>
            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-[#2a2a2c] text-white text-lg rounded-full shadow-lg hover:bg-[#1f1f21] transition"
            >
              Learn More About Me
            </Link>
          </div>
        </section>
  
        {/* Services Section */}
        <section className="py-16 bg-[#2a2a2c] min-h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
            <h2 className="text-3xl font-semibold mb-10 text-white">What I Do</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-[#3a3a3c] p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold text-[#ffae00] mb-4">Web Development</h3>
                <p className="text-gray-300">Creating responsive, user-friendly websites with a focus on performance and aesthetics.</p>
              </div>
              <div className="bg-[#3a3a3c] p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold text-[#ffae00] mb-4">Mobile Development</h3>
                <p className="text-gray-300">Building native Android apps with modern tools and technologies for seamless mobile experiences.</p>
              </div>
              <div className="bg-[#3a3a3c] p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold text-[#ffae00] mb-4">AI & Machine Learning</h3>
                <p className="text-gray-300">Leveraging machine learning algorithms to build intelligent systems and solve complex problems.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Projects Section */}
        <section className="py-16 bg-[#1f1f21] min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Map through projects and render each one */}
          {randomProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#2a2a2c] p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-6"
              />
              <h3 className="text-xl font-semibold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <a
                href={project.link}
                className="text-[#ffae00] hover:text-[#e69e00] font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  
        {/* Contact Section */}
        <section className="py-16 bg-[#2a2a2c] min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-semibold text-white mb-4">
          Let's Connect!
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Whether you have a question, idea, or want to collaborate on a project,
          I'm always open to hearing from you. Don't hesitate to reach out!
        </p>

        {/* Contact Button */}
        <Link
          to="/contacts"
          className="inline-block px-8 py-4 bg-[#ffae00] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-[#e69e00] transition duration-300 ease-in-out transform hover:scale-105 mb-6"
        >
          Contact Me
        </Link>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffae00] hover:text-[#e69e00] text-3xl transition duration-300 ease-in-out"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffae00] hover:text-[#e69e00] text-3xl transition duration-300 ease-in-out"
          >
            <Github />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffae00] hover:text-[#e69e00] text-3xl transition duration-300 ease-in-out"
          >
            <Twitter />
          </a>
        </div>
      </div>
    </section>
      </div>
    );
  }
  