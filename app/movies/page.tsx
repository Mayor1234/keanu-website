import { fetchMovies } from '@/app/utils';
import Loading from '@/components/Loading';
import Movies from '@/components/movies/Movies';
import { Suspense } from 'react';

const page = async () => {
  const { movies, total } = await fetchMovies(0, 8);

  return (
    <div className="max-w-5xl mx-auto my-20">
      <Suspense fallback={<Loading />}>
        <Movies movies={movies} total={total} />
      </Suspense>
    </div>
  );
};

export default page;
