import { movies } from '@/components/constant';
import Filmography from '@/components/filmographyComponent/Filmography';

const page = () => {
  return (
    <div className="max-w-5xl mx-auto my-20">
      <h2 className="text-2xl text-gray-800 lg:text-3xl font-semibold mb-4 text-center lg:text-start">
        Filmography
      </h2>
      <div className="leading-8 max-w-3xl px-5 lg:px-0">
        <p className="text-base text-gray-700 pb-5">
          After appearing as a background player in a couple of television shows
          during the 1980s, actor Keanu Reeves side-stepped from the small
          screen onto the big screen, appearing in such films as Speed (1994)
          and The Matrix (1999). But before he became a global icon and a
          box-office star, he had to work his way up to the top.
        </p>

        <p className="text-base text-gray-700 pb-5">
          Yep, Reeves might be known for his roles in Bill & Ted’s Excellent
          Adventure (1989), John Wick (2014), and Toy Story 4 (2019), but he has
          also appeared in lesser-known films too! These films have kept the
          actor in work for decades, and have allowed him to work across genres,
          from sci-fi and action movies, to horror, drama, and beyond.
          <br />
          <br />
          Taking it decade by decade, these are the list of all Keanu Reeves
          movies:
        </p>
      </div>
      <ul className="text-gray-700 text-base px-5 lg:px-0">
        {movies.map((movie, index) => (
          <li key={index}>
            <Filmography movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
