import React from 'react';

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  description: string;
  skills: string[];
  isDarkMode: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imageSrc,
  description,
  skills,
  isDarkMode
}) => {
  return (
    <div 
      className={`rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
        isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
        <div>
          <h4 className="font-medium mb-2">Key Skills Used:</h4>
          <ul className={`list-disc ml-5 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {skills.map((skill, index) => (
              <li key={index} className="mb-1">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};