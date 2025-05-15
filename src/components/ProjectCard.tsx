import React, { useState } from 'react';

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
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <>
      {/* Card */}
      <div
        className={`rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'
          }`}
      >
        <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => setIsExpanded(true)}>
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

      {/* Lightbox */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setIsExpanded(false)}
        >
          <img src={imageSrc} alt={title} className="max-w-full max-h-full rounded-lg" />
        </div>
      )}
    </>

  );
};