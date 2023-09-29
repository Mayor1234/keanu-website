'use client';
import { Movie } from '@/typings';
import MoviesCard from './MoviesCard';
import { useState } from 'react';

type Props = {
  movies: Movie[];
  total: number;
};

const loadMoreSteps = 8;

const Movies = ({ movies, total }: Props) => {
  const [currentMovies, setCurrentMovies] = useState(movies);

  const [loadedAmout, setLoadedAmount] = useState(loadMoreSteps);

  const [isLoading, setIsloading] = useState(false);

  const getMorePosts = async () => {
    try {
      setIsloading(true);
      const data = await fetch(
        `/api/movies?start=${loadedAmout}&end=${loadedAmout + loadMoreSteps}`,
        {
          cache: 'no-store',
        }
      ).then((response) => response.json());
      setLoadedAmount(loadedAmout + loadMoreSteps);
      setCurrentMovies([...currentMovies, ...data.movies]);
      setIsloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (total === 0) {
    return <div> There is no movie</div>;
  }
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 px-5 lg:grid-cols-4 lg:px-0 lg:gap-4 w-full">
        {currentMovies?.map((movie) => (
          <div key={movie._id}>
            <MoviesCard movie={movie} />
          </div>
        ))}
      </div>
      <button
        onClick={getMorePosts}
        disabled={false}
        className="bg-pry text-[#f6f7f8] py-2 mt-10 w-fit px-3 border-[1px] border-solid border-transparent text-sm rounded-md  lg:w-fit lg:text-base lg:px-5 active:bg-tertiary transition-all delay-75 duration-300 ease-in-out relative -translate-x-1/2 left-1/2"
      >
        {isLoading ? 'LOADING...' : 'SEE MORE'}
      </button>
    </>
  );
};

export default Movies;
