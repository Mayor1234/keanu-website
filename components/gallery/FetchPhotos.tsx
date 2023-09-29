import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import React from 'react';
import GalleryCard from './GalleryCard';

const FetchPhotos = async () => {
  const query = groq`{
    "photos":  *[_type == "photos"] | order(publishedAt desc)[0...8]{
        title,
        _id,
        "imageUrl": image.asset->url
        // ...,
      }
    }`;

  const { photos } = await client.fetch(query, {
    cache: 'no-chache',
    next: { revalidate: 60 },
  });

  return (
    <div>
      <GalleryCard photos={photos} />
    </div>
  );
};

export default FetchPhotos;
