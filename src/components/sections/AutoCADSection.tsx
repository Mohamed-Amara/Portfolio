import React from 'react';
import { SectionTitle } from '../SectionTitle';
import { ProjectCard } from '../ProjectCard';

interface AutoCADSectionProps {
  isDarkMode: boolean;
}

export const AutoCADSection: React.FC<AutoCADSectionProps> = ({ isDarkMode }) => {
  const projects = [
    {
      id: 1,
      title: 'Shaft - 2D Technical Drawing',
      imageSrc: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'This project showcases a detailed 2D technical drawing of a precision-machined bracket, including accurate dimensions, hole specifications, chamfers, and radii. It was designed for use in mechanical assemblies requiring exact tolerances and mounting compatibility.',
      skills: [
        'Geometric dimensioning and tolerancing (GD&T)',
        'Use of layers, object snaps, and precision tools',
        'Orthographic projection and annotation'
      ]
    },
    {
      id: 2,
      title: 'Flange Plate Assembly',
      imageSrc: 'https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'This AutoCAD drawing represents a flange plate with multiple hole placements and inner component outlines, depicted using hidden lines and centerlines for clarity. The layout reflects mechanical assembly readiness with a focus on symmetry and fitment precision.',
      skills: [
        'AutoCAD 2D orthographic drawing',
        'Interpretation and application of hidden lines',
        'Centerline construction and alignment',
        'Symmetrical component layout',
        'Engineering visualization',
        'Layer management for technical clarity'
      ]
    },
    {
      id: 3,
      title: 'Multi-View Technical Drawing of a Cylindrical Housing with Sectional Detail',
      imageSrc: 'https://images.pexels.com/photos/8885025/pexels-photo-8885025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'This detailed AutoCAD drawing features multiple orthographic views, including top, front, right, and bottom projections, along with a sectional view (A-A) to clearly depict the internal geometry of a cylindrical mechanical housing. The drawing highlights precision dimensioning and the use of sectional representation to convey complex interior features.',
      skills: [
        'Multi-view orthographic projection',
        'Sectional drawing (cutaway view)',
        'Advanced dimensioning and tolerancing',
        'Hidden and centerline representation',
        'Technical drafting conventions',
        'Cylindrical and symmetrical component modeling'
      ]
    }
  ];

  return (
    <section className="py-8 animate-fadeIn">
      <SectionTitle>AutoCAD Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            imageSrc={project.imageSrc}
            description={project.description}
            skills={project.skills}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </section>
  );
};