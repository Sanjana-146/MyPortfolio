import { projects } from "./ProjectsData";
// import { ExternalLink } from "lucide-react";

const Projects = () => {
    return (
        <section id="projects" className="bg-black text-white py-16">
            <div className="flex items-center text-3xl font-bold text-white mb-12 justify-center">
                <div className="flex-grow ml-4 border-t border-purple-600"></div>
                <span className="text-purple-500">&lt;</span>
                <h2 className="mx-2">My Projects</h2>
                <span className="text-purple-500">&gt;</span>
                <div className="flex-grow  border-t border-purple-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20">
                {projects.map((project) => (
                    <div
                        key={project.name}
                        className="bg-gradient-to-br from-purple-700 to-pink-300 p-4 rounded-xl relative hover:scale-105 transition-transform"
                    >
                        {/* Project image */}
                        <img
                            src={project.image}
                            alt={project.name}
                            className="rounded-xl w-full h-45 object-cover text-black"
                        />

                        {/* Project content */}
                        <div className="p-4">
                            <h3 className="text-xl font-semibold flex items-center gap-2 text-black">
                                {project.name}
                                {project.status === "Under Development" && (
                                    <span className="text-sm text-orange-400 ml-2">🛠 Under Development</span>
                                )}
                            </h3>
                            <p className="text-sm text-black mt-2">{project.description}</p>

                            {/* Tech icons */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tech.map((icon, index) => (
                                    <img
                                        key={index}
                                        src={icon}
                                        alt="tech"
                                        className="w-6 h-6 object-contain"
                                    />
                                ))}
                            </div>

                            {/* External link */}
                            <div className="flex gap-4 mt-6">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2 cursor-pointer rounded-lg bg-gradient-to-r from-purple-700 to-pink-500 text-white font-medium border border-purple-400 hover:from-purple-600 hover:to-pink-400 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.sourceCode}
                                    target="_blank"
                                    rel="noopener noreferrer"

                                    className="px-5 py-2 rounded-lg bg-black text-white font-medium border border-purple-500 hover:bg-purple-700 hover:border-purple-400 hover:scale-105
            hover:shadow-lg hover:shadow-purple-500/30  transition-all duration-300"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-12">
                <a
                    href="https://github.com/YOUR_USERNAME"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg border border-purple-400 hover:from-pink-500 hover:to-purple-600 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
                >
                    View More Projects →
                </a>
            </div>
        </section>
    );
};

export default Projects;