import { urlForImage } from '@/sanity/lib/image';
import { Movie } from '@/typings';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  movie: Movie;
};

const MoviesCard = ({ movie }: Props) => {
  console.log(movie);
  return (
    <>
      <Link href={`movies/${movie?.slug.current}`}>
        <figure className="relative z-20 w-auto px-5 md:px-5 h-60 lg:px-0 cursor-pointer rounded-md">
          <Image
            src={urlForImage(movie?.mainImage).url()}
            className="object-center object-fill h-auto max-w-full"
            alt={movie.title}
            fill
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-neutral-950 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40"></div>
        </figure>
        <div className="text-sm py-2 font-medium">{movie.title}</div>
        <div className="flex gap-2">
          {movie?.categories?.map((category, index) => (
            <div key={index}>
              <span className="capitalize mb-2 text-sm">{category.title}</span>
            </div>
          ))}
        </div>
      </Link>
    </>
  );
};

export default MoviesCard;
