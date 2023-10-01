import { urlForImage } from '@/sanity/lib/image';
import { Movie } from '@/typings';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

type Props = {
  movies: Movie[];
  total: number;
};

const RecentMoviesCard = ({ movies, total }: Props) => {
  if (total === 0) {
    return <div> There is no movie</div>;
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 px-5 lg:grid-cols-4 lg:px-0 lg:gap-4 w-full">
        {movies.map((movie) => (
          <div key={movie._id}>
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
              <div className="text-sm py-2 text-center">{movie.title}</div>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <Link href="/movies">
          <div className="text-base text-pry py-5 cursor-pointer flex items-center justify-end gap-2 font-medium px-5 lg:px-0 hover:text-tertiary transition duration-100 ease-in-out">
            <p className="block">See More</p>
            <span>
              <BsArrowRight />
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default RecentMoviesCard;
