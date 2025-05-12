import React, { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
      <span className="inline-block relative px-2">
        {children}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded"></span>
      </span>
    </h2>
  );
};