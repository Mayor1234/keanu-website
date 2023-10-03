import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';

import { useState } from 'react';
import { Image as ImageProp } from 'sanity';
import ConfirmationModal from '../modal/ConfirmationModal';

type ImageProps = {
  title: string;
  imageUrl: ImageProp;
  _id: string;
};

const MoviesCard = ({ photo }: { photo: ImageProps }) => {
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const [modalImage, setModalImage] = useState<ImageProps>();

  const handleClick = (item: ImageProps) => {
    setModalImage(item);
    setConfirmationModalOpen(!confirmationModalOpen);
  };
  return (
    <>
      <figure
        className="relative overflow-hidden rounded-md  px-5 h-60 md:80 md:px-5 lg:h-80 lg:px-0 cursor-pointer w-auto"
        onClick={() => handleClick(photo)}
      >
        <Image
          src={urlForImage(photo?.imageUrl).url()}
          className="object-fill h-auto max-w-full  object-center"
          alt={photo.title}
          fill
        />

        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-neutral-950 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40"></div>
      </figure>
      {confirmationModalOpen && (
        <ConfirmationModal
          isOpen={confirmationModalOpen}
          handleClose={() => setConfirmationModalOpen(!confirmationModalOpen)}
        >
          <div>
            <p className="text-[#fff] absolute p-2 left-0 bottom-0 z-50 w-full text-center">
              {modalImage?.title}
            </p>
            <Image
              src={urlForImage(modalImage?.imageUrl as ImageProp).url()}
              className="object-fill h-auto max-w-full  object-center"
              alt={photo.title}
              fill
            />
          </div>
        </ConfirmationModal>
      )}

      {/* <div className="text-sm text-gray-700  py-2 font-medium">
        {photo.title}
      </div> */}
    </>
  );
};

export default MoviesCard;
