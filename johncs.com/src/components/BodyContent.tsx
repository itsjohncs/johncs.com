'use client'

import React from 'react';
import NavBar from './NavBar';

interface BodyContentProps {
  className: string;
  children: React.ReactNode;
}

const BodyContent: React.FC<BodyContentProps> = ({ className, children }) => {
  return (
    <body className={className}>
      <NavBar />
      {children}
    </body>
  );
};

export default BodyContent;
