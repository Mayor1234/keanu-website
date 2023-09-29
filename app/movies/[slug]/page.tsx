'use client';

import { client } from '@/sanity/lib/client';
import { Movie } from '@/typings';
import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { PortableTextComponents } from '@/components/PortableText';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const query = groq`
    *[_type=='post']{
        slug
    }
    `;

  const posts: Movie[] = await client.fetch(query);
  const paths = posts.map((post) => post.slug.current);

  return paths.map((slug) => ({
    slug,
  }));
}

const page = async ({ params: { slug } }: Props) => {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0]{
        ...,
        categories[]->
    }
    `;

  const movie: Movie = await client.fetch(query, { slug });
  return (
    <div className="max-w-3xl mx-auto my-10 px-5 flex flex-col lg:flex-row">
      <div className="text-gray-600 leading-relaxed py-8">
        <PortableText value={movie?.body} components={PortableTextComponents} />
      </div>
    </div>
  );
};

export default page;
