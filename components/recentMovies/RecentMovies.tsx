import { fetchRecentMovies } from '@/app/utils';
import { Suspense } from 'react';
import Loading from '../Loading';
import RecentMoviesCard from './RecentMoviesCard';

const RecentMovies = async () => {
  const { movies, total } = await fetchRecentMovies();

  return (
    <div className="max-w-5xl mx-auto my-10">
      <h2 className="text-2xl text-center lg:text-start lg:text-3xl font-semibold pb-5 tracking-wide text-gray-800">
        Recent Movies
      </h2>
      <div>
        <Suspense fallback={<Loading />}>
          <RecentMoviesCard movies={movies} total={total} />
        </Suspense>
      </div>
    </div>
  );
};

export default RecentMovies;
