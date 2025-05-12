import React from 'react';
import { Cpu } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode }) => {
  return (
    <header className={`py-8 text-center ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-600 to-indigo-700'} text-white transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-2">
          <Cpu className="w-8 h-8 mr-2" />
          <h1 className="text-3xl md:text-4xl font-bold">Mohamed Amara</h1>
        </div>
        <p className="text-lg md:text-xl opacity-90">Mechatronics Engineering Student</p>
      </div>
    </header>
  );
};