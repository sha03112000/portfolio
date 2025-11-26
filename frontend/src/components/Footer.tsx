import { socialLinks } from './common/Constants'; 
import { Heart } from 'lucide-react';

export function Footer() {

  return (
    <footer id="contact" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
        {/* Brand */}
        <div className="space-y-3">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Shabad Mk
          </h3>
          <p className="text-slate-400 max-w-md mx-auto">
            Building digital experiences that make a difference
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm 
                       hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600
                       border border-white/10 hover:border-transparent
                       flex items-center justify-center transition-all duration-300
                       hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

        {/* Copyright */}
        <div className="space-y-2 text-slate-400">
          <p className="flex items-center justify-center gap-2">
            Designed & Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Shabad Mk
          </p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}