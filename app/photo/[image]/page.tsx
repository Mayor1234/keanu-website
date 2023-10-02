'use client';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

const PreviewImage = () => {
  const search = useSearchParams().get('photo');
  if (!search) return;

  console.log(search);
};

export default PreviewImage;
