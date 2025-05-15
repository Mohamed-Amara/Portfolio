import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { AboutSection } from './components/sections/AboutSection';
import { SolidWorksSection } from './components/sections/SolidWorksSection';
import { AutoCADSection } from './components/sections/AutoCADSection';
import { GeneralSection } from './components/sections/GeneralSection';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header isDarkMode={isDarkMode} />
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        isDarkMode={isDarkMode}
      />
      <main className="container mx-auto px-4 py-8 transition-opacity duration-500 ease-in-out">
        <div className={`${activeSection === 'about' ? 'block opacity-100' : 'hidden opacity-0'}`}>
          <AboutSection isDarkMode={isDarkMode} />
        </div>
        <div className={`${activeSection === 'solidworks' ? 'block opacity-100' : 'hidden opacity-0'}`}>
          <SolidWorksSection isDarkMode={isDarkMode} />
        </div>
        <div className={`${activeSection === 'autocad' ? 'block opacity-100' : 'hidden opacity-0'}`}>
          <AutoCADSection isDarkMode={isDarkMode} />
        </div>
        <div className={`${activeSection === 'general' ? 'block opacity-100' : 'hidden opacity-0'}`}>
          <GeneralSection isDarkMode={isDarkMode} />
        </div>
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;