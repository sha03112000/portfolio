
import { useEffect, useRef, useState } from 'react';
import { skills } from './common/Constants';
import {  Boxes  } from 'lucide-react';


export function Skills() {
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
      id="skills" 
      ref={sectionRef}
      className={`py-10 px-4 bg-gradient-to-b from-white to-slate-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 
                          rounded-full border border-blue-600/20">
              <Boxes className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600">Tech Stack</span>
            </div>
          </div>
          <h2 className="text-slate-900 mb-4">Skills & Technologies</h2>
          <p className="text-slate-600">Technologies I work with to bring ideas to life</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`group relative bg-white rounded-2xl p-6 text-center
                         transition-all duration-300 hover:scale-105 hover:shadow-2xl
                         border border-slate-200/50 hover:border-transparent
                         ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl 
                              opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${skill.color}
                              flex items-center justify-center text-white shadow-lg
                              group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                {/* Skill name */}
                <p className="text-slate-700 group-hover:text-slate-900 transition-colors relative z-10">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}