import React from 'react';

const GITHUB_URL = import.meta.env.VITE_GITHUB_PROFILE_URL || 'https://github.com/killergamer19';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1628] px-4 md:px-8 lg:px-16 pt-20 md:pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-7xl w-full mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Profile Image with Corner Brackets */}
          <div className="flex justify-center lg:justify-start pt-8 md:pt-0">
            <div className="relative group">
              {/* Decorative Corner Brackets */}
              <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-8 h-8 md:w-16 md:h-16 border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-cyan-400"></div>
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 md:w-16 md:h-16 border-t-2 md:border-t-4 border-r-2 md:border-r-4 border-cyan-400"></div>
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-8 h-8 md:w-16 md:h-16 border-b-2 md:border-b-4 border-l-2 md:border-l-4 border-cyan-400"></div>
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-8 h-8 md:w-16 md:h-16 border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-cyan-400"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-[28rem] md:w-80 md:h-96 overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/chaddythegreat4-cmyk/me/main/chad.jpg" 
                  alt="Chad RV Abcede"
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-left lg:pr-8">
            {/* Welcome Badge */}
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
                Welcome to my portfolio
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              Hi, I'm <span className="text-cyan-400">Chad RV G. Abcede</span>
            </h1>

            {/* Title */}
            <p className="text-xl md:text-2xl text-gray-400 mb-6 font-light">
              Frontend Developer & Designer
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
              I craft beautiful, responsive, and user-centric web experiences using modern frontend technologies. Specializing in React, JavaScript, and Tailwind CSS to create interfaces that inspire.
            </p>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'React', 'Tailwind CSS', 'Java', 'REST APIs'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#projects"
                className="px-8 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-cyan-500/50 text-center"
              >
                View My Work
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-transparent text-white border-2 border-white/30 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
