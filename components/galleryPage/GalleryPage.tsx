'use client';

import { useState } from 'react';
import GalleryPageCard from './GalleryPageCard';
import { Image as ImageProp } from 'sanity';

type ImageProps = {
  title: string;
  imageUrl: ImageProp;
  _id: string;
};

type Props = {
  photos: ImageProps[];
  total: number;
};

const loadMoreSteps = 9;

const GalleryPage = ({ photos, total }: Props) => {
  const [currentPhotos, setCurrentPhotos] = useState(photos);

  const [loadedAmout, setLoadedAmount] = useState(loadMoreSteps);

  const [isLoading, setIsloading] = useState(false);

  const getMorePosts = async () => {
    try {
      setIsloading(true);
      const data = await fetch(
        `/api/photos?start=${loadedAmout}&end=${loadedAmout + loadMoreSteps}`,
        {
          cache: 'no-store',
        }
      ).then((response) => response.json());
      setLoadedAmount(loadedAmout + loadMoreSteps);
      setCurrentPhotos([...currentPhotos, ...data.photos]);
      setIsloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (total === 0) {
    return <div> There is no photo</div>;
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 px-5 lg:grid-cols-3 lg:px-0 lg:gap-4 w-full">
        {currentPhotos?.map((photo, _id) => (
          <div key={_id}>
            <GalleryPageCard photo={photo} />
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

export default GalleryPage;
