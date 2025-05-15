import React from 'react';
import { SectionTitle } from '../SectionTitle';
import { EngineeringProject } from '../EngineeringProject';

interface GeneralSectionProps {
  isDarkMode: boolean;
}

export const GeneralSection: React.FC<GeneralSectionProps> = ({ isDarkMode }) => {
  const projects = [
    {
      id: 1,
      title: 'Impact Reducing Bumper System',
      sections: [
        {
          id: 'what1',
          title: 'What',
          imageSrc: '/assets/what1.png',
          content: [
            'Designed and implemented a bumper system to reduce the impact of a collision by 50% while enhancing energy dissipation and structural integrity.',
            'Developed a cost-effective solution using popsicle sticks and rubber bands to minimize object deformation and improve impact absorption in low-speed accidents'
          ]
        },
        {
          id: 'how1',
          title: 'How',
          imageSrc: '/assets/how1.png',
          content: [
            'Applied engineering skills and GD&T principles to design and optimize the bumper system for maximum energy dissipation and structural integrity.',
            'Developed a MATLAB simulation to calculate acceleration and velocity during multiple rebounds, analyzing real-time performance data to refine the bumper design.'
          ]
        },
        {
          id: 'results1',
          title: 'Results',
          videoUrl: 'https://www.youtube.com/embed/E1mUeeNmWD0',
          thumbnailSrc: '/assets/thumbnail1.png',
          content: [
            'Achieved a 50% reduction in collision impact by optimizing the bumper system design for energy dissipation and structural integrity, enhancing safety and minimizing vehicle damage in low-speed accidents.'
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'EV3 Delivery Robot',
      sections: [
        {
          id: 'what2',
          title: 'What',
          imageSrc: '/assets/what2.png',
          content: [
            'Developed a smart delivery system capable of autonomous navigation and object handling using EV3 LEGO Mindstorms with 95% accuracy.',
            'Engineered a reliable solution for automated delivery in various environments, enhancing convenience and efficiency.'
          ]
        },
        {
          id: 'how2',
          title: 'How',
          imageSrc: '/assets/how2.png',
          content: [
            'Programmed the robot using RobotC to handle autonomous navigation and real-time path adjustments based on sensor feedback.',
            'Designed and implemented the sensor placement and motorized claw mechanism to optimize object detection and handling efficiency.'
          ]
        },
        {
          id: 'results2',
          title: 'Results',
          videoUrl: 'https://www.youtube.com/shorts/8Ffn10fll-0',
          thumbnailSrc: '/assets/thumbnail2.png',
          content: [
            'Achieved 95% delivery accuracy by combining precise sensor feedback, real-time path adjustments, and efficient object handling, ensuring reliable performance in various environments.'
          ]
        }
      ]
    }
  ];

  return (
    <section className="py-8 animate-fadeIn">
      <SectionTitle>General Engineering</SectionTitle>
      <div className="space-y-12">
        {projects.map((project) => (
          <EngineeringProject 
            key={project.id}
            title={project.title}
            sections={project.sections}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </section>
  );
};