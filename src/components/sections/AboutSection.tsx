import React from 'react';
import { SectionTitle } from '../SectionTitle';

interface AboutSectionProps {
  isDarkMode: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ isDarkMode }) => {
  return (
    <section className="py-8 animate-fadeIn">
      <SectionTitle>About Me</SectionTitle>
      <div className={`max-w-3xl mx-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 md:p-8 transition-colors duration-300`}>
        <p className="mb-4">
          Hi, I'm <strong>Mohamed Amara</strong>, a Mechatronics Engineering student at the University of Waterloo. I’m passionate about developing practical engineering solutions -- whether through software, robotics, or data-driven decision making.
        </p>
        <p className="mb-4">
          My experience spans both industry and academic projects. I’ve built a financial literacy app using Flutter and Node.js at a local startup, optimized teacher-course assignments with Java at Western University, and applied GIS technology for archaeological fieldwork at WSP. Across all these roles, I’ve focused on building solutions that improve efficiency, accuracy, and user experience.
        </p>
        <p className="mb-4">
          Outside of work, I contribute to design teams like Electrium Mobility and the Biomechatronics Club, where I develop firmware and CAD models for robotics and electric vehicle projects. These experiences have strengthened my skills in problem-solving, collaboration, and technical communication.
        </p>
        <p>
          I’m currently seeking co-op opportunities in software development, embedded systems, robotics, or related fields where I can apply my skills to solve real-world engineering challenges. Let’s connect and explore how we can build impactful solutions together.
        </p>
      </div>
    </section>
  );
};
