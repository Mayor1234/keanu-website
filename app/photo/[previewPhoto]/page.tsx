'use client';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
const PreviewImage = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('previewPhoto');

  console.log(search);

  return <div></div>;
};

export default PreviewImage;
