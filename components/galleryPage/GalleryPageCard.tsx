import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { Image as ImageProp } from 'sanity';

type ImageProps = {
  title: string;
  imageUrl: ImageProp;
  _id: string;
};

const MoviesCard = ({ photo }: { photo: ImageProps }) => {
  return (
    <>
      <figure className="relative overflow-hidden rounded-md  px-5 h-60 md:80 md:px-5 lg:h-96 lg:px-0 cursor-pointer w-auto">
        <Image
          src={urlForImage(photo?.imageUrl).url()}
          className="object-fill h-auto max-w-full  object-center"
          alt={photo.title}
          fill
        />

        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-neutral-950 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40"></div>
      </figure>
      <div className="text-sm text-gray-700  py-2 font-medium">
        {photo.title}
      </div>
    </>
  );
};

export default MoviesCard;
