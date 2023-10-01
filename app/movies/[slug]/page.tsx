import { client } from '@/sanity/lib/client';
import { Movie } from '@/typings';
import { groq } from 'next-sanity';

import PortableComponent from '@/components/PortableComponent';

type Props = {
  params: {
    slug: string;
  };
};
type MetaProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params: { slug } }: MetaProps) {
  try {
    const query = groq`
    *[_type=='post' && slug.current == $slug][0]{
        ...,
        author->{image, name},
        categories[]->
    }
    `;
    const movie: Movie = await client.fetch(query, { slug });

    if (!movie) {
      return {
        title: 'Not Found',
        description: "The page you're looking for does not exist",
      };
    }
    return {
      title: movie.title,
      descriotion: movie.description,
    };
  } catch (error) {
    return {
      title: 'Not Found',
      description: "The page you're looking for does not exist",
    };
  }
}

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
      <PortableComponent movie={movie} />
    </div>
  );
};

export default page;
