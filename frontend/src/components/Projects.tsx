import { ExternalLink, FolderOpen } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { ImageWithFallback } from './common/ImageFallBack';
import { useEffect, useRef, useState } from 'react';
import { projects } from './common/Constants';

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`py-24 px-4 bg-gradient-to-b from-slate-50 to-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 
                          rounded-full border border-blue-600/20">
              <FolderOpen className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600">Portfolio</span>
            </div>
          </div>
          <h2 className="text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-slate-600">Some of my recent work and side projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-white rounded-3xl overflow-hidden 
                       border border-slate-200/50 hover:border-transparent
                       transition-all duration-500 hover:scale-[1.02]
                       ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10"></div>
              
              {/* Image container */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 
                           group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-all duration-500
                              flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white">View Project Details</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-slate-900 group-hover:text-transparent group-hover:bg-clip-text 
                             group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600
                             transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 
                               text-blue-600 rounded-lg border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                             px-4 py-3 rounded-xl hover:shadow-xl
                             transition-all duration-300 hover:scale-105
                             flex items-center justify-center gap-2 group/btn"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                    View Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-100 text-slate-700 px-4 py-3 rounded-xl 
                             hover:bg-slate-200 transition-all duration-300 hover:scale-105
                             flex items-center justify-center gap-2 border border-slate-200"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>

              {/* Glassmorphism effect on card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                            pointer-events-none rounded-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}