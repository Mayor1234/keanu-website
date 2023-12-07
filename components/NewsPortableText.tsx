'use client';

import { PortableText } from '@portabletext/react';
import React from 'react';
import { PortableTextComponents } from './PortableText';

const NewsPortableText = ({ news }: any) => {
  return (
    <div className="text-gray-600 leading-relaxed py-8">
      <h2 className="text-center font-semibold text-2xl py-8">{news.title}</h2>
      <PortableText value={news?.body} components={PortableTextComponents} />
    </div>
  );
};

export default NewsPortableText;
