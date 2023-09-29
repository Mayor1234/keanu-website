import React from 'react';

type Props = {
  movie: {
    title: string;
  };
};
const Filmography = ({ movie }: Props) => {
  return <div className="container mx-auto p-4">{movie.title}</div>;
};

export default Filmography;
