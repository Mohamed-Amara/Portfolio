import React from 'react';
import { SectionTitle } from '../SectionTitle';
import { ProjectCard } from '../ProjectCard';

interface SolidWorksSectionProps {
  isDarkMode: boolean;
}

export const SolidWorksSection: React.FC<SolidWorksSectionProps> = ({ isDarkMode }) => {
  const projects = [
    {
      id: 1,
      title: 'Precision Shaft Connector',
      imageSrc: 'https://images.pexels.com/photos/4489722/pexels-photo-4489722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'This SolidWorks model showcases a custom-machined shaft connector featuring symmetrical cylindrical extensions, a central block with a through-bore, and smooth transition fillets. Designed for potential use in mechanical linkages or rotating systems, the part demonstrates balanced geometry and structural alignment.',
      skills: [
        'Use of revolved and extruded features',
        'Application of fillets and chamfers for smooth transitions',
        'Creation of symmetrical geometry using mirror and pattern tools',
        'Accurate placement of holes and bores for mechanical integration',
        'Understanding of mechanical fit and function principles'
      ]
    },
    {
      id: 2,
      title: 'Triple-Bore Mounting Plate',
      imageSrc: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'This part is a simple yet functional mounting plate designed with three equally spaced counterbored holes, ideal for securing mechanical components or providing a stable base for assemblies. Its symmetrical design ensures ease of integration into larger systems.',
      skills: [
        'Use of revolved and extruded features',
        'Application of counterbore holes using the Hole Wizard',
        'Mastery of sketch constraints and dimensioning',
        'Implementation of linear patterning for hole alignment',
        'Focus on symmetry and mechanical design for assembly'
      ]
    },
    {
      id: 3,
      title: 'Flat Triple-Hole Link Plate',
      imageSrc: 'https://images.pexels.com/photos/4489756/pexels-photo-4489756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'This model represents a minimalist link plate designed with three uniformly spaced through-holes. The part is optimized for lightweight structural or mechanical applications where components must be connected or aligned.',
      skills: [
        'Use of revolved and extruded features',
        'Implementation of through-holes using the Hole Wizard',
        'Mastery of sketch constraints and dimensioning',
        'Implementation of linear patterning for hole alignment',
        'Understanding of mechanical linkage and alignment principles'
      ]
    },
    {
      id: 4,
      title: 'Keychain Spacer',
      imageSrc: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'This part is a simple spacer designed for use in a keychain assembly. It provides separation between individual keys or components, improving organization and accessibility while maintaining durability in daily use.',
      skills: [
        'Use of revolved features or extruded cuts to create a semicircle cut',
        'Application of sketch constraints for circular geometry',
        'Mastery of dimensioning for inner and outer diameters'
      ]
    },
    {
      id: 5,
      title: 'Decorative Bird Fountain Model',
      imageSrc: 'https://images.pexels.com/photos/4489769/pexels-photo-4489769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'This project involved designing a decorative bird fountain using SolidWorks, focusing on aesthetic curves, fluid-friendly geometry, and structural balance. The design incorporates a multi-tiered basin system with a perched bird detail, intended for both ornamental and functional use in garden settings.',
      skills: [
        'Surface modeling and loft features',
        'Revolved and extruded boss/base operations',
        'Circular patterning and symmetry design',
        'Assembly of multiple components'
      ]
    }
  ];

  return (
    <section className="py-8 animate-fadeIn">
      <SectionTitle>SolidWorks Projects</SectionTitle>
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