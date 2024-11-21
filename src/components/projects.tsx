export default function ProjectsPage() {
    const projects = [
      {
        title: "Project One",
        description: "A brief description of Project One, showcasing key features and technologies used.",
        image: "https://via.placeholder.com/600x400?text=Project+One", // Replace with your image URLs
        link: "#",
      },
      {
        title: "Project Two",
        description: "Details about Project Two, highlighting the project's goals and outcomes.",
        image: "https://via.placeholder.com/600x400?text=Project+Two", // Replace with your image URLs
        link: "#",
      },
      {
        title: "Project Three",
        description: "Summary of Project Three, with a focus on the challenges and solutions implemented.",
        image: "https://via.placeholder.com/600x400?text=Project+Three", // Replace with your image URLs
        link: "#",
      },
      {
        title: "Project Four",
        description: "An overview of Project Four, emphasizing innovative techniques and tools applied.",
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
  