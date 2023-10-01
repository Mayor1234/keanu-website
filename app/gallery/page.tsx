import Loading from '@/components/Loading';
import GalleryPage from '@/components/galleryPage/GalleryPage';
import { Suspense } from 'react';
import { fetchPhotos } from '../utils';

const page = async () => {
  const { photos, total } = await fetchPhotos(0, 9);

  // console.log('photos:', photos);
  // console.log('total photos:', total);
  return (
    <div className="max-w-5xl mx-auto my-10 lg:my-20">
      <h2 className="text-2xl text-gray-800 lg:text-3xl font-semibold mb-4 text-center lg:text-start">
        Last Updated Albums
      </h2>
      <Suspense fallback={<Loading />}>
        <GalleryPage photos={photos} total={total} />
      </Suspense>
    </div>
  );
};

export default page;
