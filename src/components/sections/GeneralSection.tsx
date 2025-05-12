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
          imageSrc: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          content: [
            'Designed and implemented a bumper system to reduce the impact of a collision by 50% while enhancing energy dissipation and structural integrity.',
            'Developed a cost-effective solution using popsicle sticks and rubber bands to minimize object deformation and improve impact absorption in low-speed accidents'
          ]
        },
        {
          id: 'how1',
          title: 'How',
          imageSrc: 'https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          content: [
            'Applied engineering skills and GD&T principles to design and optimize the bumper system for maximum energy dissipation and structural integrity.',
            'Developed a MATLAB simulation to calculate acceleration and velocity during multiple rebounds, analyzing real-time performance data to refine the bumper design.'
          ]
        },
        {
          id: 'results1',
          title: 'Results',
          videoUrl: 'https://www.youtube.com/embed/E1mUeeNmWD0',
          thumbnailSrc: 'https://images.pexels.com/photos/8885544/pexels-photo-8885544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
          imageSrc: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          content: [
            'Developed a smart delivery system capable of autonomous navigation and object handling using EV3 LEGO Mindstorms with 95% accuracy.',
            'Engineered a reliable solution for automated delivery in various environments, enhancing convenience and efficiency.'
          ]
        },
        {
          id: 'how2',
          title: 'How',
          imageSrc: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          content: [
            'Programmed the robot using RobotC to handle autonomous navigation and real-time path adjustments based on sensor feedback.',
            'Designed and implemented the sensor placement and motorized claw mechanism to optimize object detection and handling efficiency.'
          ]
        },
        {
          id: 'results2',
          title: 'Results',
          videoUrl: 'https://www.youtube.com/shorts/8Ffn10fll-0',
          thumbnailSrc: 'https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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