export default function ProjectsPage() {
    const projects = [
      {
        title: "Android Rick and Morty App",
        description: "An Android application showcasing characters from the Rick and Morty universe. Built with a modern MVVM architecture, the app integrates:",
        image: "https://via.placeholder.com/600x400?text=Project+One", // Replace with your image URLs
        link: "https://github.com/wanyoike-dennis/RickiMorty",
      },
      {
        title: "Harry Porter API",
        description: "This project is a Harry Potter Universe App that consumes a public API to deliver magical information from the wizarding world. The app provides details about characters, spells, houses, and magical items featured in the Harry Potter series. Designed with a user-friendly interface, it allows fans to explore data interactively, search for their favorite characters, learn about spells, and even test their Hogwarts house knowledge. Built using modern web development technologies, the project showcases seamless integration of RESTful APIs while offering an engaging experience for Harry Potter enthusiasts",
        image: "https://via.placeholder.com/600x400?text=Project+Two", // Replace with your image URLs
        link: "#",
      },
      {
        title: "AI-powered Chatbot for FAQs",
        description: "This project creates a chatbot that answers Frequently Asked Questions (FAQs) about a specific topic, such as a website, product, or organization. It uses basic Natural Language Processing (NLP) to understand user queries and retrieve relevant answers.",
        image: "https://via.placeholder.com/600x400?text=Project+Three", // Replace with your image URLs
        link: "#",
      },
      {
        title: "Dynamic Portfolio Website ",
        description: "This project is a responsive and interactive portfolio website built using React and TypeScript. It showcases personal achievements, projects, skills, and experiences in a visually appealing and structured way. The website combines modern UI/UX design principles with robust TypeScript typing, ensuring a seamless user experience and high code quality.",
        image: "https://via.placeholder.com/600x400?text=Project+Four", // Replace with your image URLs
        link: "#",
      },
    ];
  
    return (
      <div className="bg-[#1f1f21] min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          {/* Page Header */}
          <h1 className="text-4xl font-bold text-white text-center mb-12">My Projects</h1>
  
          {/* Projects Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#2a2a2c] rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {/* Project Details */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                  <p className="text-gray-300 mt-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-block mt-6 py-2 px-4 bg-[#ffae00] text-white rounded-lg hover:bg-[#e69e00] transition"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  