import { Project } from "../types/projects";

interface ProjectsListProps {
  projects: Project[];
}

export default function ProjectsPage({ projects }: ProjectsListProps) {
  const defaultProjects: Project[] = [
    {
      id: 1,
      title: "Example Project",
      description: "Description for example project.",
      image: "https://via.placeholder.com/600x400?text=Default+Project",
      link: "#",
    },
  ];
  return (
    <div className="bg-[#1f1f21] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          My Projects
        </h1>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#2a2a2c] rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={`Image for project ${project.title}`}
                  className="w-full h-48 object-cover"
                />
                {/* Project Details */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mt-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-block mt-6 py-2 px-4 bg-[#ffae00] text-white rounded-lg hover:bg-[#e69e00] transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">No projects available.</p>
        )}
      </div>
    </div>
  );
}
