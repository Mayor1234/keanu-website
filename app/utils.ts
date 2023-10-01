import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

// Fetch Movies

export async function fetchMovies(start: number, end: number) {
  const query = groq`{
      "movies": *[_type=='post'] | order(publishedAt desc)[${start}...${end}]{
    ...,
    categories[]->,
  },

      "total": count(*[_type=='post'])
  }`;

  const { movies, total } = await client.fetch(query, {
    cache: 'no-store',
    next: { revalidate: 60 },
  });

  return {
    movies,
    total,
  };
}

// Fetch Recent Movies

export async function fetchRecentMovies() {
  const query = groq`{
    "movies": *[_type=='post'] | order(publishedAt desc)[0...4]{
  ...,
  categories[]->,
},

    "total": count(*[_type=='post'])
}`;

  const { movies, total } = await client.fetch(query, {
    cache: 'no-store',
    next: { revalidate: 60 },
  });

  return {
    movies,
    total,
  };
}

// Fetch Photos

export async function fetchPhotos(start: number, end: number) {
  const query = groq`{
      "photos": *[_type=='photos'] | order(publishedAt desc)[${start}...${end}]{
      title,
      _id,
      "imageUrl": image.asset->url
      // ...,
    },
    "total": count(*[_type=='photos'])
  }`;

  const { photos, total } = await client.fetch(query, {
    cache: 'no-store',
    next: { revalidate: 60 },
  });

  return {
    photos,
    total,
  };
}
