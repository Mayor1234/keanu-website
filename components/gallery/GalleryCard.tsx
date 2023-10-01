'use client';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Image as ImageProp } from 'sanity';
import ConfirmationModal from '../modal/ConfirmationModal';

type ImageProps = {
  title: string;
  imageUrl: ImageProp;
  _id: string;
};

const GalleryCard = ({ photos }: { photos: ImageProps[] }) => {
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<any>();

  // const handleModal = (e: MouseEvent<HTMLImageElement, MouseEvent>) => {
  //   setModalImage(e.currentTarget.src);
  // };

  return (
    <>
      <div className="relative h-full w-full">
        <div className="grid grid-cols-2 gap-4 px-5 md:grid-cols-3 lg:grid-cols-4 w-full lg:gap-4 lg:px-0">
          {photos.map((photo, _id) => (
            <Link
              href={`/photo/[previewPhoto]?PreviewPhoto=${photo}`}
              as={`/photo/${photo}`}
              key={_id}
              scroll={false}
            >
              <figure className="relative overflow-hidden rounded-md cursor-pointer h-60 lg:h-80 w-auto">
                <Image
                  src={urlForImage(photo?.imageUrl).url()}
                  className="object-fill h-auto max-w-full  object-center"
                  alt={photo.title}
                  fill
                  onClick={() =>
                    setConfirmationModalOpen(!confirmationModalOpen)
                  }
                />

                {/* <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-neutral-950 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40"></div> */}
              </figure>

              {/* {confirmationModalOpen && (
                <ConfirmationModal
                  isOpen={confirmationModalOpen}
                  handleClose={() =>
                    setConfirmationModalOpen(!confirmationModalOpen)
                  }
                >
                  {<h2>Modal is open</h2>}
                </ConfirmationModal>
              )} */}
            </Link>
          ))}
        </div>

        <div>
          <Link href="/gallery">
            <div className="text-base text-pry py-5 cursor-pointer flex items-center justify-end gap-2 font-medium px-5 lg:px-0 hover:text-tertiary transition duration-100 ease-in-out ">
              <p className="block">See More</p>
              <span>
                <BsArrowRight />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GalleryCard;

// onClick={() => setConfirmationModalOpen(!confirmationModalOpen)}
