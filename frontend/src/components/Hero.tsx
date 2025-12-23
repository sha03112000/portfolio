

import { ImageWithFallback } from './common/ImageFallBack';
import { useEffect, useState } from 'react';
import shabadImage  from '../assets/smk.png';
import Resume from '../assets/Resume.pdf';
import { socialLinks } from './common/Constants';

interface HeroProps {
  onDownloadResume: (fileUrl: string) => void;
}

export function Hero({ onDownloadResume }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

 

  

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-32 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
      
      {/* Animated orbs */}
      <div 
        className="absolute top-20 left-20 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-float"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      ></div>
      <div 
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-float-delayed"
        style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
      ></div>
      
      <div className="max-w-4xl w-full text-center space-y-8 relative z-10">
        {/* Profile Image */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <ImageWithFallback
              src={shabadImage}
              alt="Profile"
              className="relative w-36 h-36 rounded-full object-cover border-4 border-white shadow-2xl
                       group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="space-y-4 animate-slide-up">
          <h1 className="text-slate-900">
            <span className="inline-block hover:scale-105 transition-transform duration-300">
              Shabad Mk
            </span>
          </h1>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Full-Stack Developer | React, Node.js, Python, Laravel
          </p>
        </div>

        {/* Description */}
        <p className="text-slate-600 max-w-2xl mx-auto animate-slide-up leading-relaxed" 
           style={{ animationDelay: '0.1s' }}>
          Passionate developer with 2+ years of experience building scalable web applications. 
          I specialize in creating elegant solutions to complex problems, with a focus on user 
          experience and clean, maintainable code.
        </p>

        {/* Resume Button */}
        <div className="pt-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <button
            onClick= {() => onDownloadResume(Resume)}
            className="relative group bg-gradient-to-r from-blue-600 to-purple-600 
                     text-white px-8 py-4 rounded-xl overflow-hidden
                     transition-all duration-300 hover:scale-105 hover:shadow-2xl
                     inline-flex items-center gap-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg 
              className="w-5 h-5 relative z-10 group-hover:animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            <span className="relative z-10">Download Resume</span>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 pt-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm 
                       hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600
                       flex items-center justify-center transition-all duration-300
                       hover:scale-110 hover:shadow-lg text-slate-700 hover:text-white
                       border border-slate-200/50"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}