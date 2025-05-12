import React from 'react';
import { Play } from 'lucide-react';

interface ProjectSection {
  id: string;
  title: string;
  imageSrc?: string;
  videoUrl?: string;
  thumbnailSrc?: string;
  content: string[];
}

interface EngineeringProjectProps {
  title: string;
  sections: ProjectSection[];
  isDarkMode: boolean;
}

export const EngineeringProject: React.FC<EngineeringProjectProps> = ({
  title,
  sections,
  isDarkMode
}) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'}`}>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-center mb-6">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div 
              key={section.id}
              className={`rounded-lg p-5 transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <h4 className="text-xl font-medium mb-3 text-center">{section.title}</h4>
              
              {section.imageSrc && !section.videoUrl && (
                <div className="mb-4 overflow-hidden rounded-md">
                  <img 
                    src={section.imageSrc} 
                    alt={`${section.title} illustration`} 
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              
              {section.videoUrl && section.thumbnailSrc && (
                <div className="mb-4 relative overflow-hidden rounded-md group cursor-pointer">
                  <a href={section.videoUrl} target="_blank" rel="noopener noreferrer">
                    <img 
                      src={section.thumbnailSrc} 
                      alt={`${section.title} video thumbnail`}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full bg-blue-600 bg-opacity-80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </a>
                </div>
              )}
              
              <ul className={`list-disc pl-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {section.content.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};