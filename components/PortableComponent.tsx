'use client';

import { PortableText } from '@portabletext/react';
import React from 'react';
import { PortableTextComponents } from './PortableText';

const PortableComponent = ({ movie }: any) => {
  return (
    <div className="text-gray-600 leading-relaxed py-8">
      <PortableText value={movie?.body} components={PortableTextComponents} />
    </div>
  );
};

export default PortableComponent;
