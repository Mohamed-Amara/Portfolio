import React from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isDarkMode: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  setActiveSection,
  isDarkMode
}) => {
  const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'solidworks', label: 'SolidWorks' },
    { id: 'general', label: 'General Eng' },
    { id: 'autocad', label: 'AutoCAD' },
  ];

  return (
    <nav className={`sticky top-0 z-40 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-700'} py-2 shadow-md transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <ul className="flex justify-center flex-wrap">
          {navItems.map((item) => (
            <li key={item.id} className="mx-1 my-1">
              <button
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-md transition-all duration-300 font-medium ${
                  activeSection === item.id
                    ? `${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white shadow-md transform scale-105`
                    : `${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};