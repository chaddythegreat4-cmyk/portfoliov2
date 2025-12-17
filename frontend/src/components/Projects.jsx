import React from 'react';

const GITHUB_URL = import.meta.env.VITE_GITHUB_PROFILE_URL || 'https://github.com/killergamer19';

const projects = [
  {
    id: 1,
    title: 'REST API with TypeScript',
    description: 'RESTful API implementation using TypeScript, demonstrating modern backend development practices and API design patterns.',
    tech: ['TypeScript', 'Node.js', 'Express', 'REST API'],
    github: `${GITHUB_URL}/act4_build_rest_api`,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Node.js & Express Intro',
    description: 'Full-stack project exploring Node.js and Express.js backend development with practical implementations.',
    tech: ['Node.js', 'Express.js', 'JavaScript', 'Backend'],
    github: `${GITHUB_URL}/intro_nodejs_express`,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 3,
    title: 'JavaScript Review Project',
    description: 'Comprehensive JavaScript project covering fundamentals, best practices, and modern ES6+ features.',
    tech: ['JavaScript', 'ES6+', 'Web Development'],
    github: `${GITHUB_URL}/js-review-project`,
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    id: 4,
    title: 'Java OOP Projects',
    description: 'Object-Oriented Programming implementations in Java, including encapsulation activities and design patterns.',
    tech: ['Java', 'OOP', 'Design Patterns'],
    github: `${GITHUB_URL}/Abcede-Chad-RV-G.`,
    color: 'from-red-500 to-red-600'
  },
  {
    id: 5,
    title: 'Encapsulation Activity',
    description: 'Java encapsulation implementation demonstrating core OOP principles and best practices.',
    tech: ['Java', 'OOP', 'Encapsulation'],
    github: `${GITHUB_URL}/Abcede-Chad-RV-encapsulation-activity-one`,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 6,
    title: 'Midterm Exam Solution',
    description: 'Comprehensive JavaScript midterm solution showcasing problem-solving skills and programming fundamentals.',
    tech: ['JavaScript', 'Problem Solving', 'Algorithms'],
    github: `${GITHUB_URL}/midterm-exam-solution.`,
    color: 'from-pink-500 to-pink-600'
  }
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0F1C2E] px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing full-stack development, backend APIs, and object-oriented programming skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#0A1628] rounded-xl overflow-hidden border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              {/* Project Header with Gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-white text-6xl font-bold opacity-20">
                  {String(project.id).padStart(2, '0')}
                </div>
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 transform translate-x-10 -translate-y-10 rotate-45"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group/link"
                >
                  <span>View on GitHub</span>
                  <svg 
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
