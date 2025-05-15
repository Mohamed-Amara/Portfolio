import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`py-6 ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">© {new Date().getFullYear()} Mohamed Amara. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Mohamed-Amara" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`hover:${isDarkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-200`}
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohamed-amara-1b45752b4/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`hover:${isDarkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-200`}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:mamara@uwaterloo.ca" 
              className={`hover:${isDarkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-200`}
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};