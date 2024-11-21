import { Link } from 'react-router-dom';
import pic from '../assets/bac.jpg'

export default function HomePage() {
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
            <h2 className="text-3xl font-semibold text-white mb-10">Recent Projects</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Project Card */}
              <div className="bg-[#2a2a2c] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <img
                  src="https://via.placeholder.com/600x400?text=Project+One" // Replace with your actual project image
                  alt="Project One"
                  className="w-full h-48 object-cover rounded-md mb-6"
                />
                <h3 className="text-xl font-semibold text-white mb-4">Project One</h3>
                <p className="text-gray-300 mb-6">A brief description of Project One, showcasing the technologies used and the challenges overcome.</p>
                <a
                  href="#"
                  className="text-[#ffae00] hover:text-[#e69e00] font-semibold"
                >
                  View Details
                </a>
              </div>
              {/* Project Card */}
              <div className="bg-[#2a2a2c] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <img
                  src="https://via.placeholder.com/600x400?text=Project+Two" // Replace with your actual project image
                  alt="Project Two"
                  className="w-full h-48 object-cover rounded-md mb-6"
                />
                <h3 className="text-xl font-semibold text-white mb-4">Project Two</h3>
                <p className="text-gray-300 mb-6">Details about Project Two, focusing on its impact and the solutions it offers to real-world problems.</p>
                <a
                  href="#"
                  className="text-[#ffae00] hover:text-[#e69e00] font-semibold"
                >
                  View Details
                </a>
              </div>
              {/* Project Card */}
              <div className="bg-[#2a2a2c] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <img
                  src="https://via.placeholder.com/600x400?text=Project+Three" // Replace with your actual project image
                  alt="Project Three"
                  className="w-full h-48 object-cover rounded-md mb-6"
                />
                <h3 className="text-xl font-semibold text-white mb-4">Project Three</h3>
                <p className="text-gray-300 mb-6">An overview of Project Three, demonstrating its innovative approach and technological advancements.</p>
                <a
                  href="#"
                  className="text-[#ffae00] hover:text-[#e69e00] font-semibold"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </section>
  
        {/* Contact Section */}
        <section className="py-16 bg-[#2a2a2c] min-h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
            <h2 className="text-3xl font-semibold text-white mb-10">Get In Touch</h2>
            <p className="text-lg text-gray-300 mb-6">Interested in collaborating or have questions? Feel free to reach out to me!</p>
            <Link
              to="/contacts"
              className="inline-block px-6 py-3 bg-[#ffae00] text-white text-lg rounded-full shadow-lg hover:bg-[#e69e00] transition"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </div>
    );
  }
  