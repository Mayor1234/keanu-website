import FetchPhotos from './FetchPhotos';

export const Gallery = () => {
  return (
    <div className="max-w-5xl mx-auto mb-10">
      <h2 className="text-2xl text-center lg:text-start lg:text-3xl font-semibold pb-5 tracking-wide text-gray-800">
        Event Gallery
      </h2>
      <div>
        <FetchPhotos />
      </div>
    </div>
  );
};
