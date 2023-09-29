import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

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
