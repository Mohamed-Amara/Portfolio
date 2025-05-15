import React from 'react';
import { SectionTitle } from '../SectionTitle';
import { ProjectCard } from '../ProjectCard';

interface SolidWorksSectionProps {
  isDarkMode: boolean;
}

export const SolidWorksSection: React.FC<SolidWorksSectionProps> = ({ isDarkMode }) => {
  const projects = [
    {
      id: 6,
      title: 'Thermal Imaging Scope Model',
      imageSrc: 'assets/scope.png',
      description: 'A mechanical design of a handheld thermal imaging scope featuring a lens, housing, and mounting interface. Built for conceptual demonstration of optical devices.',
      skills: [
        'Multi-body part design',
        'Complex assembly structuring',
        'Use of colored components for realism',
        'Understanding optical component placement'
      ]
    },
    {
      id: 7,
      title: 'Propane Tank Model',
      imageSrc: 'assets/propane.png',
      description: 'Detailed model of a household propane tank including guard handles and valve details. Designed for mechanical simulation or visual demonstration.',
      skills: [
        'Use of revolved boss/base features',
        'Creation of thin features and guards',
        'Application of accurate proportions',
        'Realistic structural detailing'
      ]
    },
    {
      id: 8,
      title: 'Decorative Spoked Wheel',
      imageSrc: 'assets/spokedwheel.png',
      description: 'A fully modeled spoked wheel ideal for use in visualizations or conceptual mechanical designs, featuring patterned spokes and a central hub.',
      skills: [
        'Circular patterning of spokes',
        'Symmetrical sketching and modeling',
        'Mastery of thin and thick features',
        'Understanding of rotational balance'
      ]
    },
    {
      id: 5,
      title: 'Decorative Bird Fountain Model',
      imageSrc: 'assets/bird.png',
      description: 'This project involved designing a decorative bird fountain using SolidWorks, focusing on aesthetic curves, fluid-friendly geometry, and structural balance. The design incorporates a multi-tiered basin system with a perched bird detail, intended for both ornamental and functional use in garden settings.',
      skills: [
        'Surface modeling and loft features',
        'Revolved and extruded boss/base operations',
        'Circular patterning and symmetry design',
        'Assembly of multiple components'
      ]
    },
    {
      id: 1,
      title: 'Precision Shaft Connector',
      imageSrc: '/assets/precision.png',
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
      imageSrc: 'assets/triple.png',
      description: 'This part is a simple yet functional mounting plate designed with three equally spaced counterbored holes, ideal for securing mechanical components or providing a stable base for assemblies. Its symmetrical design ensures ease of integration into larger systems.',
      skills: [
        'Application of counterbore holes using the Hole Wizard',
        'Mastery of sketch constraints and dimensioning',
        'Use of revolved and extruded features',
        'Implementation of linear patterning for hole alignment',
        'Focus on symmetry and mechanical design for assembly'
      ]
    },
    {
      id: 3,
      title: 'Flat Triple-Hole Link Plate',
      imageSrc: 'assets/flat.png',
      description: 'This model represents a minimalist link plate designed with three uniformly spaced through-holes. The part is optimized for lightweight structural or mechanical applications where components must be connected or aligned.',
      skills: [
        'Understanding of mechanical linkage and alignment principles',
        'Implementation of through-holes using the Hole Wizard',
        'Mastery of sketch constraints and dimensioning',
        'Implementation of linear patterning for hole alignment',
        'Use of revolved and extruded features'

      ]
    },
    {
      id: 4,
      title: 'Keychain Spacer',
      imageSrc: 'assets/keychain.png',
      description: 'This part is a simple spacer designed for use in a keychain assembly. It provides separation between individual keys or components, improving organization and accessibility while maintaining durability in daily use.',
      skills: [
        'Use of revolved features or extruded cuts to create a semicircle cut',
        'Application of sketch constraints for circular geometry',
        'Mastery of dimensioning for inner and outer diameters'
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